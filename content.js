(() => {
  'use strict';
  if (globalThis.__rtlEverywhere) { globalThis.__rtlEverywhere.refresh(); return; }
  const KEY = 'rtlEverywhereSettings', MARK = 'data-rtl-everywhere', STYLE_ID = 'rtl-everywhere-style';
  const SKIP = 'script,style,noscript,template,svg,canvas,math,video,audio,iframe,pre,code,kbd,samp,input,textarea,select,[contenteditable]:not([contenteditable="false"]),.monaco-editor,.cm-editor,.CodeMirror,.ace_editor';
  const defaults = { enabled: true, smart: false, forceLayout: false };
  let settings = { ...defaults };
  const roots = new Map(), marked = new Set(), pending = new Set();
  let timer;
  function protectedNode(el) { return !el || !!el.closest(SKIP); }
  function textContainer(el) {
    // Inline spans cannot align their paragraph: find the enclosing text block.
    while (el && !protectedNode(el)) {
      const display = getComputedStyle(el).display;
      if (display !== 'inline' && display !== 'contents') return el;
      el = el.parentElement;
    }
    return null;
  }
  function scan(node) {
    if (!settings.enabled || !node) return;
    const candidates = new Set();
    function visit(text) {
      if (!text.nodeValue.trim() || protectedNode(text.parentElement)) return;
      const el = textContainer(text.parentElement);
      if (el) candidates.add(el);
    }
    if (node.nodeType === Node.TEXT_NODE) visit(node);
    else {
      if (node.nodeType === Node.ELEMENT_NODE && protectedNode(node)) return;
      const walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT);
      let text;
      while ((text = walker.nextNode())) visit(text);
      if (node.shadowRoot) registerRoot(node.shadowRoot);
      if (node.querySelectorAll) for (const el of node.querySelectorAll('*')) {
        if (el.shadowRoot) registerRoot(el.shadowRoot);
      }
    }
    for (const el of candidates) {
      const rtl = /[\u0590-\u05ff\u0600-\u06ff\u0750-\u077f\u08a0-\u08ff\ufb1d-\ufdff\ufe70-\ufefc]/.test(el.textContent);
      const direction = settings.smart && !rtl ? 'ltr' : 'rtl';
      if (el.getAttribute(MARK) !== direction) el.setAttribute(MARK, direction);
      marked.add(el);
    }
  }
  function css() {
    if (!settings.enabled) return '';
    return `
      [${MARK}="rtl"] { direction: rtl !important; text-align: right !important; unicode-bidi: isolate !important; }
      [${MARK}="ltr"] { direction: ltr !important; text-align: left !important; unicode-bidi: isolate !important; }
      pre, code, kbd, samp, .monaco-editor, .cm-editor, .CodeMirror, .ace_editor {
        direction: ltr !important; text-align: left !important; unicode-bidi: isolate !important;
      }
      ${settings.forceLayout ? 'body { direction: rtl !important; }' : ''}
    `;
  }
  function updateStyle(root) {
    let style = root.querySelector(`#${STYLE_ID}`);
    if (!style) {
      style = document.createElement('style'); style.id = STYLE_ID;
      (root === document ? document.head || document.documentElement : root)?.append(style);
    }
    const value = css();
    if (style.textContent !== value) style.textContent = value;
  }
  function enqueue(node) {
    if (!node || node.nodeType === Node.COMMENT_NODE) return;
    pending.add(node);
    if (timer) return;
    timer = setTimeout(() => {
      timer = null;
      for (const item of pending) if (item.isConnected) scan(item);
      pending.clear();
      for (const el of marked) if (!el.isConnected) marked.delete(el);
    }, 35);
  }
  function registerRoot(root) {
    if (roots.has(root)) return;
    const observer = new MutationObserver(records => {
      if (!settings.enabled) return;
      for (const record of records) {
        if (record.target.parentElement?.id === STYLE_ID || record.target.id === STYLE_ID) continue;
        enqueue(record.type === 'characterData' ? record.target.parentElement : record.target);
      }
    });
    roots.set(root, observer);
    updateStyle(root);
    observer.observe(root, { childList: true, subtree: true, characterData: true,
      attributes: true, attributeFilter: ['dir', 'class'] });
    scan(root);
  }
  function apply() {
    for (const el of marked) el.removeAttribute(MARK);
    marked.clear();
    for (const root of roots.keys()) updateStyle(root);
    if (settings.enabled) for (const root of roots.keys()) scan(root);
  }
  async function refresh() {
    try {
      const result = await chrome.storage.sync.get(KEY);
      settings = { ...defaults, ...result[KEY] };
      if (!roots.size && document.documentElement) registerRoot(document);
      else apply();
    } catch { /* A tab can outlive an extension update. */ }
  }
  globalThis.__rtlEverywhere = { refresh };
  if (document.documentElement) registerRoot(document);
  else document.addEventListener('DOMContentLoaded', () => registerRoot(document), { once: true });
  refresh();
  chrome.storage.onChanged.addListener((changes, area) => {
    if (area === 'sync' && changes[KEY]) {
      settings = { ...defaults, ...changes[KEY].newValue }; apply();
    }
  });
  chrome.runtime.onMessage.addListener((message, sender, respond) => {
    if (message.type === 'RTL_REFRESH') {
      refresh().then(() => respond({ enabled: settings.enabled, count: marked.size })); return true;
    }
  });
})();
