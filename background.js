const KEY = 'rtlEverywhereSettings';
async function inject(tabId) {
  try {
    await chrome.scripting.executeScript({ target: { tabId, allFrames: true }, files: ['content.js'] });
    return await chrome.tabs.sendMessage(tabId, { type: 'RTL_REFRESH' }, { frameId: 0 });
  } catch {
    return { error: 'Cannot modify this page. Open a regular website and allow the extension to access it.' };
  }
}
async function injectOpenTabs() {
  const tabs = await chrome.tabs.query({});
  await Promise.allSettled(tabs.filter(t => t.id != null).map(t => inject(t.id)));
}
chrome.runtime.onInstalled.addListener(async ({ reason }) => {
  const saved = (await chrome.storage.sync.get(KEY))[KEY] || {};
  await chrome.storage.sync.set({ [KEY]: {
    enabled: true, smart: false, forceLayout: false, ...saved,
    ...(reason === 'update' ? { enabled: true, smart: false } : {})
  } });
  await injectOpenTabs();
});
chrome.runtime.onStartup.addListener(injectOpenTabs);
chrome.runtime.onMessage.addListener((message, sender, respond) => {
  if (message.type === 'RTL_APPLY_TAB' && Number.isInteger(message.tabId)) {
    inject(message.tabId).then(respond); return true;
  }
});
