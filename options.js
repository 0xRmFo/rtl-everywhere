const KEY='rtlEverywhereSettings', ids=['enabled','smart','forceLayout'];
chrome.storage.sync.get(KEY,r=>{const s=Object.assign({enabled:true,smart:false,forceLayout:false},r[KEY]||{});ids.forEach(id=>document.getElementById(id).checked=!!s[id]);});
document.getElementById('save').onclick=()=>{const value=Object.fromEntries(ids.map(k=>[k,document.getElementById(k).checked]));chrome.storage.sync.set({[KEY]:value},()=>document.getElementById('status').textContent=' تم الحفظ');};
