const KEY = 'rtlEverywhereSettings', ids = ['enabled', 'smart', 'forceLayout'];
const status = document.getElementById('status');
async function applyCurrent() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (!tab?.id) return;
  const result = await chrome.runtime.sendMessage({ type: 'RTL_APPLY_TAB', tabId: tab.id });
  status.textContent = result?.error || (result?.enabled ? 'تم تطبيق RTL على الصفحة ✓' : 'تم إيقاف RTL');
}
async function save() {
  try {
    await chrome.storage.sync.set({ [KEY]: Object.fromEntries(ids.map(id => [id, document.getElementById(id).checked])) });
    await applyCurrent();
  } catch { status.textContent = 'أعد تحميل الإضافة من صفحة الإضافات.'; }
}
async function initialize() {
  const result = await chrome.storage.sync.get(KEY);
  const s = { enabled: true, smart: false, forceLayout: false, ...result[KEY] };
  ids.forEach(id => {
    document.getElementById(id).checked = !!s[id];
    document.getElementById(id).addEventListener('change', save);
  });
  document.getElementById('apply').onclick = () => { document.getElementById('enabled').checked = true; save(); };
  await applyCurrent();
}
initialize().catch(() => { status.textContent = 'تعذّر الاتصال بالإضافة. أعد تحميلها.'; });
document.getElementById('options').onclick = () => chrome.runtime.openOptionsPage();
