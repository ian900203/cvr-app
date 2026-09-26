const icons = {
  home: '<path d="M3 11.5 12 4l9 7.5"></path><path d="M5.5 10.5V20h13v-9.5"></path><path d="M9.5 20v-6h5v6"></path>',
  archive: '<rect x="3" y="5" width="18" height="4" rx="1"></rect><path d="M5 9v11h14V9M10 13h4"></path>',
  help: '<circle cx="12" cy="12" r="9"></circle><path d="M9.8 9a2.4 2.4 0 1 1 3.7 2c-1 .6-1.5 1.1-1.5 2.2M12 17h.01"></path>',
  guide: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V4H6.5A2.5 2.5 0 0 0 4 6.5z"></path><path d="M4 6.5v13"></path>',
  flask: '<path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4A2 2 0 0 0 19 18l-5-9V3"></path><path d="M8 15h8"></path>',
  database: '<ellipse cx="12" cy="5" rx="8" ry="3"></ellipse><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5"></path><path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"></path>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"></path>',
  close: '<path d="m6 6 12 12M18 6 6 18"></path>',
  search: '<circle cx="11" cy="11" r="7"></circle><path d="m20 20-4-4"></path>',
  check: '<path d="m5 12 4 4L19 6"></path>',
  alert: '<path d="M12 3 2.8 20h18.4z"></path><path d="M12 9v4M12 17h.01"></path>',
  lock: '<rect x="4" y="10" width="16" height="11" rx="2"></rect><path d="M8 10V7a4 4 0 0 1 8 0v3"></path>',
  upload: '<path d="M12 16V4M7 9l5-5 5 5"></path><path d="M5 20h14"></path>',
  message: '<path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"></path>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path d="m9 12 2 2 4-4"></path>',
  file: '<path d="M6 2h8l4 4v16H6z"></path><path d="M14 2v5h5M9 13h6M9 17h6"></path>',
  plus: '<path d="M12 5v14M5 12h14"></path>',
  edit: '<path d="M12 20h9"></path><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4z"></path>'
};

function icon(name) {
  return `<svg viewBox="0 0 24 24" aria-hidden="true">${icons[name] || icons.file}</svg>`;
}

function hydrateIcons(root = document) {
  root.querySelectorAll('[data-icon]').forEach((node) => { node.innerHTML = icon(node.dataset.icon); });
}

const historicalRecords = [
  { id: 'PAIR-0001', question: 'Do I need bed linens?', reply: 'We will make the beds for you! ❤️', intent: '設備用品', risk: 'medium', issue: '內容可理解，但需確認是否適用所有房源。' },
  { id: 'PAIR-0002', question: 'Will this furniture be used in the home?', reply: 'Yes. We will have two masters fully furnished and the public area.', intent: '設備用品', risk: 'medium', issue: '需補上房源與時間版本，避免使用過期資訊。' },
  { id: 'PAIR-0003', question: 'I intend to stay 6 months.', reply: 'Like the other listing you saw, we took bookings with min stay a month.', intent: '長租詢問', risk: 'medium', issue: '歷史上下文不足，不可直接做成標準答案。' },
  { id: 'PAIR-0004', question: 'Is there Internet? I work from home.', reply: 'Owner receives [金額已遮蔽] for it.', intent: 'Wi-Fi', risk: 'high', issue: '問題與回覆疑似錯位，必須排除或回查完整對話。' },
  { id: 'PAIR-0005', question: 'Can a portion go towards the future agreement?', reply: 'We cannot promise cheaper rate for now as guests may not stay long-term.', intent: '付款／長租', risk: 'high', issue: '涉及價格與承諾，只可作人工決策參考。' },
  { id: 'PAIR-0006', question: 'Or longer.', reply: 'ok!', intent: '其他', risk: 'medium', issue: '訊息過短且缺少上下文，不適合單獨訓練。' }
];

const stages = [
  { name: '訂房前', desc: '先確認需求與適用政策', items: [['寵物政策', 54], ['付款／額外費用', 10], ['在地推薦', 7], ['房屋規則', 4]] },
  { name: '入住前／抵達', desc: '依房源與訂單狀態回答', items: [['入住／抵達', 23], ['停車', 13], ['門鎖／進門', 3], ['提早入住', 2]] },
  { name: '住宿期間', desc: '優先處理可執行步驟', items: [['設備用品', 11], ['Wi-Fi', 9], ['維修問題', 5], ['噪音客訴', 3]] },
  { name: '退房後', desc: '敏感決策保留人工處理', items: [['退房', 2], ['延後退房', 1], ['評價', 2], ['退款／補償', 22]] }
];

const defaultGuidance = [
  { id: 'g-checkin', condition: '房客詢問入住方式或抵達時間', do: '先確認房源、訂單日期與已核准的入住資訊，再直接回答並列出下一步。', dont: '不可使用其他房源的門鎖、停車或入住資料。', source: 'common_sop.md · check-in（19 組配對）', status: '待 Lydia 核准' },
  { id: 'g-early', condition: '房客詢問提早入住', do: '先確認清潔與房務進度；必要時提供可寄放行李的替代方案。', dont: '未確認前不可說「應該可以」或承諾具體時間。', source: 'common_sop.md · early check-in（2 組配對）', status: '待 Lydia 核准' },
  { id: 'g-refund', condition: '房客要求退款、折扣或補償', do: '先表示理解、收集事實與照片，然後交由 Lydia 或指定人員決定。', dont: 'AI 不可承諾退款金額、責任歸屬或補償方式。', source: 'common_sop.md · refund（14 組配對）', status: '安全規則' },
  { id: 'g-safety', condition: '涉及安全、法律、受傷、歧視或緊急狀況', do: '停止自動處理並立即轉人工；只提供已核准的緊急聯絡步驟。', dont: '不可判斷責任、淡化風險或自行提供法律結論。', source: 'lydia_style_guide.md · 高風險規則', status: '安全規則' },
  { id: 'g-style', condition: '一般低風險問題', do: '先回答問題，再補必要步驟；保持簡短、具體、自然。', dont: '不要為了模仿語氣而硬塞表情符號，也不要把所有歷史回覆都視為好答案。', source: '1,678 則歷史回覆的統計摘要', status: '待 Lydia 核准' }
];

const testCases = [
  { q: 'Can I check in at noon?', risk: '中風險', expected: '詢問清潔進度；未確認前不承諾時間。', source: '提早入住 SOP' },
  { q: 'What is the Wi-Fi password?', risk: '中風險', expected: '只能讀取該房源已核准最新版；無資料就轉人工。', source: '房源知識規則' },
  { q: 'Please refund the cleaning fee.', risk: '高風險', expected: '表達理解、收集事實並轉人工；不得承諾退款。', source: '退款／補償 SOP' },
  { q: 'The lock is not working and I am outside.', risk: '高風險', expected: '優先處理安全與進門；使用已核准聯絡流程並轉人工。', source: '門鎖／緊急規則' }
];

const sourcePackages = [
  { name: 'cleaned_messages.csv', count: '2,831 則訊息', purpose: '匿名化後的訊息整理', status: '本機保管' },
  { name: 'conversation_pairs.jsonl', count: '820 組配對', purpose: '房客問題與 Lydia 後續回覆', status: '待逐筆核准' },
  { name: 'training_examples.jsonl', count: '820 筆候選', purpose: '候選訓練資料，不等於合格答案', status: '待逐筆核准' },
  { name: 'review_needed.csv', count: '2,587 列', purpose: '分類不明、敏感或需補上下文', status: '優先整理' },
  { name: 'lydia_style_guide.md', count: '1 份', purpose: '統計式回覆摘要與安全邊界', status: '待 Lydia 核准' },
  { name: 'property_knowledge_base.json', count: '房源名稱待合併', purpose: '房源線索；含錯誤名稱與敏感資訊風險', status: '禁止公開' }
];

const state = {
  view: location.hash.replace('#', '') || 'status',
  recordFilter: 'all',
  recordSearch: '',
  reviews: JSON.parse(localStorage.getItem('lydia-record-reviews') || '{}'),
  customGuidance: JSON.parse(localStorage.getItem('lydia-custom-guidance') || '[]')
};

const titles = { status: '資料狀態', records: '歷史回覆庫', questions: '問題與情境', guidance: 'Lydia 回覆指南', tests: '測試與評分', sources: '資料來源' };
const main = document.querySelector('#main-content');

function badge(text, tone = 'neutral') { return `<span class="badge badge-${tone}">${text}</span>`; }
function escapeHtml(value) { return String(value).replace(/[&<>"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[char])); }

function renderStatus() {
  return `<section class="view">
    <div class="page-heading"><div><h2>先把資料整理對，再談 AI 自動回覆</h2><p>這裡顯示的是已找到的歷史資料，不是 AI 已經回覆的績效。所有候選配對都必須經過 Lydia 核准、補足上下文並建立測試集。</p></div>${badge('0 則 AI 正式回覆', 'neutral')}</div>
    <div class="status-grid">
      <article class="status-card"><div class="status-card-top"><span class="status-icon">${icon('archive')}</span>${badge('真實歷史資料', 'green')}</div><h3>房客問題／回覆配對</h3><strong class="value">820</strong><p>來自本機匿名化整理，尚未逐筆核准為訓練資料。</p></article>
      <article class="status-card"><div class="status-card-top"><span class="status-icon">${icon('message')}</span>${badge('歷史資料', 'blue')}</div><h3>Lydia 歷史回覆</h3><strong class="value">1,678</strong><p>用來找規律與候選範例，不代表每一則都是好答案。</p></article>
      <article class="status-card"><div class="status-card-top"><span class="status-icon">${icon('flask')}</span>${badge('尚未開始', 'amber')}</div><h3>Lydia 已核准訓練範例</h3><strong class="value">—</strong><p>系統尚未記錄 Lydia 的逐筆核准結果。</p></article>
      <article class="status-card"><div class="status-card-top"><span class="status-icon">${icon('lock')}</span>${badge('未連接', 'red')}</div><h3>AI／PMS／Airbnb</h3><strong class="value">0</strong><p>沒有模型生成、沒有 PMS 同步，也沒有自動傳送。</p></article>
    </div>
    <div class="two-column">
      <section class="panel"><header class="panel-header"><div><h2>目前真正需要完成的工作</h2><p>依資料風險與對模型品質的影響排序</p></div></header><div class="task-list">
        ${[['1','逐筆審核 820 組問題／回覆','保留好答案、排除錯位配對、補回必要上下文','records'],['2','整理 2,587 列待 review 資料','分類常見問題、合併重複情境、標記高風險','records'],['3','建立房源核准知識','Wi-Fi、停車、門鎖、入住等資料必須逐房源管理','sources'],['4','建立測試集與評分標準','先用真實問題驗證，再決定是否允許任何自動回覆','tests']].map(([n,title,desc,target]) => `<article class="task-row"><span class="task-index">${n}</span><div><h3>${title}</h3><p>${desc}</p></div><button class="mini-button" type="button" data-view-jump="${target}">前往</button></article>`).join('')}
      </div></section>
      <aside class="panel"><header class="panel-header"><div><h2>新的訓練方式</h2><p>不再使用「親和符號頻率」滑桿</p></div></header><div class="panel-body"><ul class="principle-list">
        <li><span class="check">${icon('check')}</span><div><strong>用自然語言寫清楚規則</strong><span>何時套用、應該做什麼、禁止做什麼。</span></div></li>
        <li><span class="check">${icon('check')}</span><div><strong>每個答案都能回查來源</strong><span>歷史回覆、房源資料、SOP 與核准人分開記錄。</span></div></li>
        <li><span class="check">${icon('check')}</span><div><strong>用真實問題批次測試</strong><span>評估正確性、來源、語氣、安全與是否該轉人工。</span></div></li>
        <li><span class="check">${icon('check')}</span><div><strong>只有核准資料才進正式系統</strong><span>歷史紀錄與候選訓練資料不能混為一談。</span></div></li>
      </ul></div></aside>
    </div>
  </section>`;
}

function reviewLabel(id) {
  const value = state.reviews[id];
  return value === 'approved' ? badge('人工核准', 'green') : value === 'excluded' ? badge('排除', 'red') : value === 'context' ? badge('需補上下文', 'amber') : badge('待審核', 'neutral');
}

function renderRecords() {
  const query = state.recordSearch.toLowerCase();
  const items = historicalRecords.filter((record) => {
    const review = state.reviews[record.id] || 'pending';
    const matchesFilter = state.recordFilter === 'all' || review === state.recordFilter || record.risk === state.recordFilter;
    return matchesFilter && `${record.id} ${record.question} ${record.reply} ${record.intent}`.toLowerCase().includes(query);
  });
  return `<section class="view">
    <div class="page-heading"><div><h2>Lydia 原始回覆整理庫</h2><p>下方為真實資料包中經再次遮蔽後的少量樣本。完整 820 組配對仍保存在本機，不會放進公開網站；每一筆需要 Lydia 決定「核准、排除或補上下文」。</p></div>${badge('來源：conversation_pairs.jsonl', 'blue')}</div>
    <div class="data-warning"><span class="status-icon">${icon('lock')}</span><div><h3>為什麼沒有公開全部對話？</h3><p>目前網站沒有登入與權限控管，而且規則式匿名化不能保證移除所有姓名、地址、門碼與 Wi-Fi 密碼。完整資料必須等內部後端與使用者權限完成後才能匯入。</p></div></div>
    <div class="toolbar"><label class="search">${icon('search')}<input id="record-search" type="search" value="${escapeHtml(state.recordSearch)}" placeholder="搜尋問題、回覆、情境或編號" aria-label="搜尋歷史回覆"></label>${[['all','全部'],['pending','待審核'],['context','需補上下文'],['approved','已核准'],['excluded','已排除'],['high','高風險']].map(([value,label]) => `<button class="filter-chip ${state.recordFilter === value ? 'is-active' : ''}" type="button" data-record-filter="${value}">${label}</button>`).join('')}</div>
    <div class="record-list">${items.length ? items.map((record) => `<article class="record-card"><div class="record-id">${record.id}</div><div class="record-exchange"><blockquote class="quote guest"><small>房客問題</small>${escapeHtml(record.question)}</blockquote><blockquote class="quote host"><small>Lydia 歷史回覆</small>${escapeHtml(record.reply)}</blockquote><div class="record-actions"><button class="mini-button" type="button" data-review="approved" data-record-id="${record.id}">核准為範例</button><button class="mini-button" type="button" data-review="context" data-record-id="${record.id}">補上下文</button><button class="mini-button" type="button" data-review="excluded" data-record-id="${record.id}">排除</button></div></div><aside class="record-meta">${reviewLabel(record.id)}${badge(record.risk === 'high' ? '高風險' : '中風險', record.risk === 'high' ? 'red' : 'amber')}<small>${escapeHtml(record.intent)}</small><small>${escapeHtml(record.issue)}</small></aside></article>`).join('') : '<div class="empty-state">目前篩選條件沒有可顯示的紀錄。</div>'}</div>
    <p class="local-note">本頁的人工標記目前只儲存在這個瀏覽器。正式內部版需要登入、資料庫、版本紀錄與核准人欄位。</p>
  </section>`;
}

function renderQuestions() {
  return `<section class="view"><div class="page-heading"><div><h2>房客問題與住宿階段</h2><p>把歷史問題按旅程整理，比用一個「語氣滑桿」更有用。數量來自現有規則分類器，只代表已辨識樣本，不代表完整覆蓋。</p></div>${badge('已辨識主題：185 則', 'blue')}</div>
    <div class="stage-grid">${stages.map((stage) => `<article class="stage-card"><h3>${stage.name}</h3><p>${stage.desc}</p>${stage.items.map(([name,count]) => `<div class="faq-item"><span>${name}</span><strong>${count}</strong></div>`).join('')}</article>`).join('')}</div>
    <div class="coverage-note"><strong>仍有大量未分類資料：</strong>現有報告中 980 則房客訊息被標為中風險，另有 2,587 列進入人工 review。下一步不是自行補答案，而是先把真實問題重新分類並找回上下文。</div>
    <section class="panel"><header class="panel-header"><div><h2>每個問題應保留的欄位</h2><p>之後新增問題時，不只記一段模板文字</p></div></header><div class="panel-body"><ul class="principle-list"><li><span class="check">${icon('check')}</span><div><strong>適用階段與房源</strong><span>訂房前／入住前／住宿中／退房後；全域或特定房源。</span></div></li><li><span class="check">${icon('check')}</span><div><strong>核准答案與必要查詢</strong><span>哪些內容可直接回答，哪些一定要查訂單、清潔或房源資料。</span></div></li><li><span class="check">${icon('check')}</span><div><strong>風險與轉人工條件</strong><span>金錢、安全、法律、客訴與資料衝突預設交給人工。</span></div></li><li><span class="check">${icon('check')}</span><div><strong>來源與版本</strong><span>誰核准、何時更新、引用哪一筆歷史回覆或 SOP。</span></div></li></ul></div></section>
  </section>`;
}

function allGuidance() { return [...defaultGuidance, ...state.customGuidance]; }
function statusTone(value) { return value === '安全規則' ? 'red' : value === '已核准' ? 'green' : 'amber'; }
function renderGuidance() {
  return `<section class="view"><div class="page-heading"><div><h2>用「情境 → 行為 → 禁止事項」訓練</h2><p>這些不是模型參數，也不是表情符號百分比；它們是可讀、可測試、可版本化的營運指南。</p></div><button class="button button-primary" type="button" data-open-guidance>${icon('plus')}新增指南</button></div>
    <section class="panel"><header class="panel-header"><div><h2>目前指南</h2><p>預設內容來自既有 SOP 與風格整理；除安全規則外仍待 Lydia 核准。</p></div></header><div class="guidance-list">${allGuidance().map((item) => `<article class="guidance-card"><div><h3>${escapeHtml(item.condition)}</h3><div class="source">來源：${escapeHtml(item.source)}</div></div><div class="guidance-rules"><div class="guidance-rule do"><strong>應該做</strong>${escapeHtml(item.do)}</div><div class="guidance-rule dont"><strong>禁止事項</strong>${escapeHtml(item.dont)}</div></div><div class="guidance-side">${badge(item.status, statusTone(item.status))}${String(item.id).startsWith('custom-') ? '<span class="source">瀏覽器草稿</span>' : ''}</div></article>`).join('')}</div></section>
    <p class="local-note">新增指南目前會保存於這個瀏覽器，狀態固定為「待 Lydia 核准」。正式版需將核准、版本、撤回與測試結果寫入後端稽核紀錄。</p>
  </section>`;
}

function renderTests() {
  return `<section class="view"><div class="page-heading"><div><h2>先測試，再決定能不能自動回覆</h2><p>現在沒有連接 AI，因此不顯示任何假模型答案或假成功率。此頁先定義真實問題、期望行為與評分標準。</p></div>${badge('模型輸出：尚未連接', 'neutral')}</div>
    <div class="test-grid"><section class="panel"><header class="panel-header"><div><h2>基準測試問題</h2><p>正式模型接入後，每次修改指南或知識都要重跑</p></div></header>${testCases.map((item, index) => `<article class="test-case"><div class="test-case-top"><h3>${index + 1}. ${escapeHtml(item.q)}</h3>${badge(item.risk, item.risk === '高風險' ? 'red' : 'amber')}</div><p>目前結果：尚未執行模型</p><div class="expected"><strong>期望行為：</strong>${escapeHtml(item.expected)}<br><strong>依據：</strong>${escapeHtml(item.source)}</div></article>`).join('')}</section>
      <aside class="panel"><header class="panel-header"><div><h2>人工評分標準</h2><p>Lydia 看得到答案為什麼好或不好</p></div></header><div class="panel-body grader-list">${[['事實正確','只能使用核准房源與政策資料'],['回答完整','先回答問題，再給必要步驟'],['Lydia 判斷','符合她實際會採取的處理方式'],['安全邊界','高風險必須正確轉人工'],['來源可追溯','能指出使用了哪個知識與指南'],['不捏造','缺資料時承認不知道並要求查證']].map(([name,desc]) => `<div class="grader"><strong>${name}</strong><span>${desc}</span></div>`).join('')}</div></aside>
    </div>
    <div class="coverage-note">正式啟用前建議保留 200–300 則未參與整理的歷史問題作測試集；低風險草稿需至少 90% 不用大改，高風險內容要 100% 正確轉人工，並至少進行兩週 shadow mode。</div>
  </section>`;
}

function renderSources() {
  return `<section class="view"><div class="page-heading"><div><h2>資料來源與安全狀態</h2><p>資料「存在」不代表可以公開，也不代表可以直接訓練。這裡把檔案、用途、數量與審核狀態分開。</p></div>${badge('完整資料僅在本機', 'red')}</div>
    <div class="data-warning"><span class="status-icon">${icon('shield')}</span><div><h3>禁止把完整資料包放進公開 GitHub Pages</h3><p>目前匿名化結果仍包含待人工檢查欄位，房源知識檔也有錯誤名稱與敏感資料風險。正式匯入需要登入、角色權限、加密儲存與稽核紀錄。</p></div></div>
    <section class="panel"><header class="panel-header"><div><h2>已找到的資料包</h2><p>來自 airbnb-message-exporter/data/cleaned</p></div></header><div class="source-list">${sourcePackages.map((item) => `<article class="source-row"><span class="task-index">${icon('file')}</span><div><h3 class="file-name">${escapeHtml(item.name)}</h3><p>${escapeHtml(item.count)} · ${escapeHtml(item.purpose)}</p></div>${badge(item.status, item.status === '禁止公開' ? 'red' : item.status.includes('優先') || item.status.includes('待') ? 'amber' : 'blue')}</article>`).join('')}</div></section>
    <div class="two-column"><section class="panel"><header class="panel-header"><div><h2>正式內部匯入需要</h2></div></header><div class="panel-body"><ul class="principle-list"><li><span class="check">${icon('lock')}</span><div><strong>登入與角色權限</strong><span>只有 Lydia 與授權團隊能查看完整對話。</span></div></li><li><span class="check">${icon('database')}</span><div><strong>後端資料庫</strong><span>保存核准人、版本、來源與撤回紀錄。</span></div></li><li><span class="check">${icon('shield')}</span><div><strong>第二次隱私檢查</strong><span>逐批掃描姓名、地址、門碼、電話、Email 與 Wi-Fi 密碼。</span></div></li></ul></div></section><aside class="panel"><header class="panel-header"><div><h2>目前公開頁面包含</h2></div></header><div class="panel-body"><ul class="principle-list"><li><span class="check">${icon('check')}</span><div><strong>真實統計摘要</strong><span>150 個有訊息 threads、1,678 則回覆、820 組配對。</span></div></li><li><span class="check">${icon('check')}</span><div><strong>少量再次遮蔽範例</strong><span>用來展示整理流程，不作為模型已學會的證明。</span></div></li><li><span class="check">${icon('check')}</span><div><strong>可編輯的本機指南草稿</strong><span>只保存在當前瀏覽器，不宣稱已同步後端。</span></div></li></ul></div></aside></div>
  </section>`;
}

const renderers = { status: renderStatus, records: renderRecords, questions: renderQuestions, guidance: renderGuidance, tests: renderTests, sources: renderSources };

function render() {
  if (!renderers[state.view]) state.view = 'status';
  main.innerHTML = renderers[state.view]();
  document.querySelector('#page-title').textContent = titles[state.view];
  document.querySelectorAll('.nav-item').forEach((item) => item.classList.toggle('is-active', item.dataset.view === state.view));
  hydrateIcons(main);
  bindViewEvents();
  window.scrollTo({ top: 0, behavior: 'auto' });
}

function goToView(view) {
  if (!renderers[view]) return;
  state.view = view;
  history.replaceState(null, '', `#${view}`);
  render();
  closeMenu();
  main.focus({ preventScroll: true });
}

function toast(title, message) {
  const node = document.createElement('div');
  node.className = 'toast';
  node.innerHTML = `${icon('check')}<div><strong>${escapeHtml(title)}</strong><p>${escapeHtml(message)}</p></div><button type="button" aria-label="關閉">${icon('close')}</button>`;
  node.querySelector('button').addEventListener('click', () => node.remove());
  document.querySelector('#toast-region').appendChild(node);
  window.setTimeout(() => node.remove(), 4500);
}

function bindViewEvents() {
  main.querySelectorAll('[data-view-jump]').forEach((button) => button.addEventListener('click', () => goToView(button.dataset.viewJump)));
  const search = main.querySelector('#record-search');
  search?.addEventListener('input', () => { state.recordSearch = search.value; render(); const next = main.querySelector('#record-search'); next?.focus(); next?.setSelectionRange(state.recordSearch.length, state.recordSearch.length); });
  main.querySelectorAll('[data-record-filter]').forEach((button) => button.addEventListener('click', () => { state.recordFilter = button.dataset.recordFilter; render(); }));
  main.querySelectorAll('[data-review]').forEach((button) => button.addEventListener('click', () => {
    state.reviews[button.dataset.recordId] = button.dataset.review;
    localStorage.setItem('lydia-record-reviews', JSON.stringify(state.reviews));
    const messages = { approved: '已標記為人工核准範例', context: '已標記為需要補完整對話', excluded: '已從候選訓練資料排除' };
    toast(button.dataset.recordId, messages[button.dataset.review]);
    render();
  }));
  main.querySelector('[data-open-guidance]')?.addEventListener('click', openGuidanceModal);
}

function openGuidanceModal() {
  const modal = document.querySelector('#editor-modal');
  modal.hidden = false;
  modal.setAttribute('aria-hidden', 'false');
  modal.querySelector('input').focus();
}

function closeGuidanceModal() {
  const modal = document.querySelector('#editor-modal');
  modal.hidden = true;
  modal.setAttribute('aria-hidden', 'true');
}

function closeMenu() {
  document.querySelector('#sidebar').classList.remove('is-open');
  document.querySelector('#mobile-scrim').hidden = true;
  document.querySelector('#menu-button').setAttribute('aria-expanded', 'false');
}

document.querySelectorAll('.nav-item').forEach((item) => item.addEventListener('click', () => goToView(item.dataset.view)));
document.querySelectorAll('[data-view-jump]').forEach((button) => button.addEventListener('click', () => goToView(button.dataset.viewJump)));
document.querySelector('#menu-button').addEventListener('click', () => {
  const sidebar = document.querySelector('#sidebar');
  const open = !sidebar.classList.contains('is-open');
  sidebar.classList.toggle('is-open', open);
  document.querySelector('#mobile-scrim').hidden = !open;
  document.querySelector('#menu-button').setAttribute('aria-expanded', String(open));
});
document.querySelector('#mobile-scrim').addEventListener('click', closeMenu);
document.querySelectorAll('[data-close-modal]').forEach((button) => button.addEventListener('click', closeGuidanceModal));
document.querySelector('#guidance-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  state.customGuidance.push({ id: `custom-${Date.now()}`, condition: data.get('condition').trim(), do: data.get('do').trim(), dont: data.get('dont').trim(), source: data.get('source').trim(), status: '待 Lydia 核准' });
  localStorage.setItem('lydia-custom-guidance', JSON.stringify(state.customGuidance));
  event.currentTarget.reset();
  closeGuidanceModal();
  toast('指南草稿已儲存', '目前只保存在這個瀏覽器，尚未進入正式訓練資料庫。');
  render();
});
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') { closeGuidanceModal(); closeMenu(); } });
window.addEventListener('hashchange', () => { state.view = location.hash.replace('#', '') || 'status'; render(); });

hydrateIcons();
render();
