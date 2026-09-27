const icons = {
  home: '<path d="M3 11.5 12 4l9 7.5"></path><path d="M5.5 10.5V20h13v-9.5"></path><path d="M9.5 20v-6h5v6"></path>',
  flow: '<rect x="3" y="4" width="6" height="5" rx="1"></rect><rect x="15" y="15" width="6" height="5" rx="1"></rect><path d="M9 6.5h4a3 3 0 0 1 3 3V15M12 12l4 3 4-3"></path>',
  archive: '<rect x="3" y="5" width="18" height="4" rx="1"></rect><path d="M5 9v11h14V9M10 13h4"></path>',
  help: '<circle cx="12" cy="12" r="9"></circle><path d="M9.8 9a2.4 2.4 0 1 1 3.7 2c-1 .6-1.5 1.1-1.5 2.2M12 17h.01"></path>',
  guide: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V4H6.5A2.5 2.5 0 0 0 4 6.5z"></path><path d="M4 6.5v13"></path>',
  flask: '<path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4A2 2 0 0 0 19 18l-5-9V3"></path><path d="M8 15h8"></path>',
  database: '<ellipse cx="12" cy="5" rx="8" ry="3"></ellipse><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5"></path><path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"></path>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"></path>', close: '<path d="m6 6 12 12M18 6 6 18"></path>',
  search: '<circle cx="11" cy="11" r="7"></circle><path d="m20 20-4-4"></path>', check: '<path d="m5 12 4 4L19 6"></path>',
  lock: '<rect x="4" y="10" width="16" height="11" rx="2"></rect><path d="M8 10V7a4 4 0 0 1 8 0v3"></path>',
  upload: '<path d="M12 16V4M7 9l5-5 5 5"></path><path d="M5 20h14"></path>',
  message: '<path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"></path>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path d="m9 12 2 2 4-4"></path>',
  file: '<path d="M6 2h8l4 4v16H6z"></path><path d="M14 2v5h5M9 13h6M9 17h6"></path>',
  plus: '<path d="M12 5v14M5 12h14"></path>',
  user: '<circle cx="12" cy="8" r="4"></circle><path d="M4 21a8 8 0 0 1 16 0"></path>',
  building: '<path d="M4 21V4h11v17M15 9h5v12M8 8h3M8 12h3M8 16h3M18 13h.01M18 17h.01M2 21h20"></path>',
  clock: '<circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 2"></path>',
  sparkle: '<path d="m12 3 1.2 3.8L17 8l-3.8 1.2L12 13l-1.2-3.8L7 8l3.8-1.2zM18 14l.8 2.2L21 17l-2.2.8L18 20l-.8-2.2L15 17l2.2-.8z"></path>',
  send: '<path d="m22 2-7 20-4-9-9-4zM22 2 11 13"></path>',
  chevron: '<path d="m9 18 6-6-6-6"></path>'
};

const journeyStages = [
  { id: 'inquiry', label: '初次詢問', note: '日期、價格、基本設備' },
  { id: 'qualify', label: '需求確認', note: '人數、寵物、租期、規則' },
  { id: 'booked', label: '已訂房', note: '必須有訂單狀態佐證' },
  { id: 'prearrival', label: '入住前', note: '抵達、停車、行李、門鎖' },
  { id: 'checkin', label: '入住', note: '進門與現場確認' },
  { id: 'stay', label: '住宿中', note: 'Wi-Fi、設備、維修、客訴' },
  { id: 'checkout', label: '退房', note: '時間、清潔、延退' },
  { id: 'poststay', label: '退房後', note: '評價、退款、後續' }
];

const stageModules = {
  inquiry: { goal:'辨識房客最初需求，先回答核心問題，不急著假設對方會下訂。', scenarios:['日期與價格','房源設備','地點與交通','是否仍可預訂'] },
  qualify: { goal:'釐清人數、租期與特殊需求，找出需要查證或轉人工的條件。', scenarios:['入住人數','寵物政策','長租需求','活動與特殊用途'] },
  booked: { goal:'只有確認訂單後才使用此模組，處理付款、修改與訂單政策。', scenarios:['訂單確認','付款問題','日期變更','取消政策'] },
  prearrival: { goal:'在入住前提供正確房源資訊，所有細節必須對應到該筆訂單。', scenarios:['抵達時間','停車','行李寄放','門鎖與地址'] },
  checkin: { goal:'優先協助房客安全、順利進入房源，失敗時立即轉人工。', scenarios:['找不到入口','密碼失效','提早抵達','現場聯絡'] },
  stay: { goal:'處理住宿期間的使用問題、維修與客訴，避免未確認的補償承諾。', scenarios:['Wi-Fi','設備故障','清潔問題','噪音與客訴'] },
  checkout: { goal:'明確說明退房動作與時間，需要例外時先查房務安排。', scenarios:['退房時間','延後退房','鑰匙處理','垃圾與清潔'] },
  poststay: { goal:'處理評價、遺留物與金錢爭議；高風險內容必須交由 AI。', scenarios:['評價邀請','遺留物品','押金問題','退款與補償'] }
};

const publicPairs = [
  { id: 'PAIR-0001', thread_id: 'sample-a', listing_name: '公開遮蔽樣本', guest_message: 'Do I need bed linens?', host_reply: 'We will make the beds for you!', intent: 'amenities', risk_level: 'medium_risk', notes: '需確認是否適用所有房源。' },
  { id: 'PAIR-0002', thread_id: 'sample-b', listing_name: '公開遮蔽樣本', guest_message: 'I intend to stay 6 months.', host_reply: 'Like the other listing you saw, we took bookings with min stay a month.', intent: 'long_stay', risk_level: 'medium_risk', notes: '歷史上下文不足。' },
  { id: 'PAIR-0003', thread_id: 'sample-c', listing_name: '公開遮蔽樣本', guest_message: 'Can a portion go towards the future agreement?', host_reply: 'We cannot promise cheaper rate for now as guests may not stay long-term.', intent: 'payment', risk_level: 'high_risk', notes: '涉及價格與承諾，只可人工處理。' }
];

const defaultGuidance = [
  { condition: '房客詢問入住方式或抵達時間', do: '先確認房源、訂單日期與已核准入住資料，再回答並列出下一步。', dont: '不可套用其他房源的門鎖、停車或入住資料。', source: 'common_sop.md · check-in', status: '待 AI 核准' },
  { condition: '房客詢問提早入住', do: '先確認清潔與房務進度；必要時提供寄放行李替代方案。', dont: '未確認前不可承諾具體時間。', source: 'common_sop.md · early check-in', status: '待 AI 核准' },
  { condition: '房客要求退款、折扣或補償', do: '表示理解、收集事實與照片，再交由 AI 決定。', dont: '不可承諾退款金額、責任或補償方式。', source: 'common_sop.md · refund', status: '安全規則' },
  { condition: '一般低風險問題', do: '先回答問題，再補必要步驟；保持簡短、具體、自然。', dont: '缺資料時不可猜測，也不可把所有歷史回覆當成好答案。', source: '1,678 則歷史回覆統計', status: '待 AI 核准' }
];

const topicStages = [
  { name: '訂房前', items: [['寵物政策',54],['付款／費用',10],['取消',10],['在地推薦',7],['房屋規則',4]] },
  { name: '入住前', items: [['入住／抵達',23],['停車',13],['門鎖／進門',3],['提早入住',2]] },
  { name: '住宿中', items: [['設備用品',11],['Wi-Fi',9],['維修',5],['噪音客訴',3],['緊急事件',2]] },
  { name: '退房與售後', items: [['退款／補償',22],['退房',2],['評價',2],['延後退房',1]] }
];

const sourcePackages = [
  ['cleaned_messages.csv','2,831 則訊息','完整匿名化訊息，可建立房源／thread／對話視圖'],
  ['conversation_pairs.jsonl','820 組配對','房客問題與 AI 後續回覆'],
  ['training_examples.jsonl','820 筆候選','候選 few-shot，不等於核准答案'],
  ['review_needed.csv','2,587 列','需補上下文、分類或安全審核'],
  ['lydia_style_guide.md','1 份','統計式回覆摘要與安全邊界'],
  ['common_sop.md','1 份','入住、退房、Wi-Fi、停車等 SOP 草稿']
];

const state = {
  view: location.hash.replace('#','') || 'journey', recordFilter: 'all', recordSearch: '', sourceSearch: '', inboxSearch: '', inboxFilter: 'open', listingFilter: 'all',
  reviews: safeJson(localStorage.getItem('lydia-record-reviews'), {}), customGuidance: safeJson(localStorage.getItem('lydia-custom-guidance'), []),
  stageOverrides: safeJson(localStorage.getItem('lydia-stage-overrides'), {}), importedFiles: [], importedPairs: [], importedMessages: [],
  conversationStates: safeJson(localStorage.getItem('lydia-conversation-states'), {}), stageDrafts: safeJson(localStorage.getItem('lydia-stage-drafts'), {}), selectedListing: '公開遮蔽樣本', selectedThread: 'sample-a', selectedSource: null, editingStage: null
};
const titles = { journey:'AI 收件匣', status:'資料狀態', records:'歷史回覆庫', questions:'問題與情境', guidance:'AI 回覆指南', tests:'測試與評分', sources:'原始資料' };
const main = document.querySelector('#main-content');
function safeJson(value, fallback) { try { return value ? JSON.parse(value) : fallback; } catch { return fallback; } }
function icon(name) { return `<svg viewBox="0 0 24 24" aria-hidden="true">${icons[name] || icons.file}</svg>`; }
function hydrateIcons(root=document) { root.querySelectorAll('[data-icon]').forEach(n => { n.innerHTML = icon(n.dataset.icon); }); }
function esc(value='') { return String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c])); }
function badge(text,tone='neutral') { return `<span class="badge badge-${tone}">${esc(text)}</span>`; }
function currentPairs() { return state.importedPairs.length ? state.importedPairs : publicPairs; }
function allMessages() {
  if (state.importedMessages.length) return state.importedMessages;
  return publicPairs.flatMap((p,i) => [
    { thread_id:p.thread_id, listing_name:p.listing_name, speaker:'guest', timestamp:'', message_cleaned:p.guest_message, intent:p.intent, _order:i*2 },
    { thread_id:p.thread_id, listing_name:p.listing_name, speaker:'host', timestamp:'', message_cleaned:p.host_reply, intent:p.intent, _order:i*2+1 }
  ]);
}
function conversations() {
  const map = new Map();
  allMessages().forEach((m,i) => { const id=String(m.thread_id||`row-${i}`), listing=m.listing_name||'未標記房源'; if(!map.has(id))map.set(id,{id,listing,label:m.guest_name||`房客 ${id.slice(-6)}`,messages:[]}); map.get(id).messages.push({...m,_order:m._order??i}); });
  return [...map.values()].map(c=>({...c,messages:c.messages.sort((a,b)=>a._order-b._order)}));
}
function inferStage(thread) {
  const override=state.stageOverrides[thread.id]; if(override)return {id:override,basis:'人工標記'};
  const text=thread.messages.map(m=>`${m.intent||''} ${m.message_cleaned||''}`).join(' ').toLowerCase();
  const rules=[['poststay',/(review|after.*stay|deposit return)/],['checkout',/(checkout|check-out|late checkout)/],['stay',/(wifi|wi-fi|maintenance|broken|noise|cleaning complaint)/],['checkin',/(cannot get in|locked out|arrived|at the door)/],['prearrival',/(check.?in|arrival|parking|luggage|door code|early check)/],['booked',/(booking confirmed|reservation confirmed|your stay is confirmed)/],['qualify',/(pet|month|how many|guest|lease|discount|fee)/]];
  const found=rules.find(([,re])=>re.test(text)); return {id:found?.[0]||'inquiry',basis:'依對話文字推測'};
}
function selectedConversation() { const items=conversations(); let found=items.find(c=>c.id===state.selectedThread&&c.listing===state.selectedListing)||items.find(c=>c.listing===state.selectedListing)||items[0]; if(found){state.selectedListing=found.listing;state.selectedThread=found.id;} return found; }

function conversationStatus(thread) {
  const saved=state.conversationStates[thread.id];
  if(saved==='closed')return {id:'closed',label:'已結束',tone:'neutral',basis:'人工結案'};
  if(saved==='open')return {id:'open',label:'進行中',tone:'blue',basis:'人工重新開啟'};
  const stage=inferStage(thread);
  if(stage.id==='poststay')return {id:'closed',label:'已結束',tone:'neutral',basis:'退房後自動歸檔'};
  const last=thread.messages.at(-1);
  if(last?.speaker==='guest')return {id:'needs_reply',label:'待回覆',tone:'amber',basis:'最後訊息來自房客'};
  return {id:'open',label:'進行中',tone:'green',basis:'最近已由房東回覆'};
}

function formatThreadTime(thread) {
  return thread.messages.at(-1)?.timestamp || `${thread.messages.length} 則`;
}

function stageHistory(stageId) {
  const threads=conversations().filter(c=>inferStage(c).id===stageId);
  const replies=threads.flatMap(c=>c.messages.filter(m=>m.speaker==='host').map(m=>({listing:c.listing,text:m.message_cleaned}))).filter(r=>r.text);
  return {threads,replies};
}

function renderJourneyFlow(thread) {
  const stage=inferStage(thread);
  const positions=[[34,70],[190,18],[348,70],[505,16],[666,16],[505,132],[666,132],[830,76]];
  return `<section class="journey-flow training-map" aria-label="AI 回覆情境地圖"><div class="journey-flow-head"><div><strong>AI 回覆情境地圖</strong><span>每個節點是一組可訓練情境；房客不一定會走完所有節點</span></div>${badge(`目前：${journeyStages.find(s=>s.id===stage.id)?.label||'初次詢問'}`,'blue')}</div><div class="training-canvas"><svg class="training-wires" viewBox="0 0 980 230" aria-hidden="true"><path d="M78 94 C130 94 140 42 204 42"></path><path d="M238 42 C286 42 300 94 362 94"></path><path d="M396 94 C448 94 452 40 519 40"></path><path d="M553 40 H680"></path><path d="M396 100 C444 112 450 156 519 156" class="optional"></path><path d="M553 156 H680"></path><path d="M714 156 C770 156 780 100 844 100"></path><path d="M78 104 C116 135 126 184 188 184" class="exit-path"></path><circle cx="204" cy="184" r="8" class="exit-dot"></circle></svg><span class="exit-label">未下訂／暫停</span>${journeyStages.map((s,i)=>{const history=stageHistory(s.id),pos=positions[i];return `<button type="button" class="training-node ${s.id===stage.id?'is-current':''}" style="--node-x:${pos[0]}px;--node-y:${pos[1]}px;--node-delay:${i*45}ms" data-stage-module="${s.id}" aria-current="${s.id===stage.id?'step':'false'}"><span class="training-orb"><span>${i+1}</span></span><strong>${s.label}</strong><small>${history.threads.length} 組歷史對話</small></button>`;}).join('')}</div><div class="map-legend"><span><i class="legend-current"></i>目前判定</span><span><i class="legend-path"></i>可能路徑</span><span><i class="legend-optional"></i>可跳過／分支</span><span>點節點開啟訓練設定</span></div></section>`;
}
function renderJourney() {
  const all=conversations(), listings=[...new Set(all.map(c=>c.listing))];
  const query=state.inboxSearch.trim().toLowerCase();
  const filtered=all.filter(c=>state.listingFilter==='all'||c.listing===state.listingFilter).filter(c=>{const s=conversationStatus(c);return state.inboxFilter==='all'||(state.inboxFilter==='open'?s.id!=='closed':s.id===state.inboxFilter);}).filter(c=>`${c.label} ${c.listing} ${c.messages.map(m=>m.message_cleaned).join(' ')}`.toLowerCase().includes(query));
  if(!filtered.some(c=>c.id===state.selectedThread)){state.selectedThread=filtered[0]?.id||'';state.selectedListing=filtered[0]?.listing||state.selectedListing;}
  const active=all.find(c=>c.id===state.selectedThread)||filtered[0];
  if(active)state.selectedListing=active.listing;
  const activeStatus=active?conversationStatus(active):null;
  const openCount=all.filter(c=>conversationStatus(c).id!=='closed').length, needsCount=all.filter(c=>conversationStatus(c).id==='needs_reply').length, closedCount=all.filter(c=>conversationStatus(c).id==='closed').length;
  return `<section class="view inbox-view"><div class="page-heading inbox-heading"><div><h2>所有房客詢問</h2><p>${state.importedMessages.length?'目前顯示你在此瀏覽器開啟的 AI 原始對話。':'目前顯示再次遮蔽的歷史樣本；開啟 cleaned_messages.csv 後會列出完整房客詢問。'}</p></div><div class="inbox-summary">${badge(`${needsCount} 待回覆`,needsCount?'amber':'green')}${badge(`${openCount} 未結案`,'blue')}${badge(`${closedCount} 已結束`,'neutral')}</div></div><div class="inbox-console"><aside class="inquiry-column"><header class="inquiry-header"><div><strong>訊息</strong><span>${filtered.length}</span></div><label class="inbox-search">${icon('search')}<input id="inbox-search" type="search" value="${esc(state.inboxSearch)}" placeholder="搜尋房客、房源或訊息"></label><select id="listing-filter" aria-label="篩選房源"><option value="all">所有房源（${listings.length}）</option>${listings.map(name=>`<option value="${esc(name)}" ${state.listingFilter===name?'selected':''}>${esc(name)}</option>`).join('')}</select><nav class="inbox-tabs" aria-label="對話狀態">${[['open',`未結案 ${openCount}`],['needs_reply',`待回覆 ${needsCount}`],['closed',`已結束 ${closedCount}`],['all',`全部 ${all.length}`]].map(([v,l])=>`<button type="button" class="${state.inboxFilter===v?'is-active':''}" data-inbox-filter="${v}">${l}</button>`).join('')}</nav></header><div class="inquiry-list">${filtered.map(c=>{const last=c.messages.at(-1), st=inferStage(c), status=conversationStatus(c);return `<button type="button" class="inquiry-item ${c.id===state.selectedThread?'is-active':''}" data-thread="${esc(c.id)}"><span class="guest-avatar" aria-hidden="true">${esc(c.label.replace('房客 ','').slice(0,2).toUpperCase())}</span><span class="inquiry-copy"><span class="inquiry-line"><strong>${esc(c.label)}</strong><time>${esc(formatThreadTime(c))}</time></span><small>${esc(c.listing)}</small><span class="inquiry-preview">${last?.speaker==='host'?'你：':''}${esc(last?.message_cleaned||'沒有訊息')}</span><span class="inquiry-tags">${badge(status.label,status.tone)}${badge(journeyStages.find(s=>s.id===st.id)?.label||'初次詢問')}</span></span></button>`;}).join('')||'<div class="empty-state">這個分類目前沒有對話。</div>'}</div></aside><section class="conversation-column inbox-conversation">${active?`${renderJourneyFlow(active)}<header class="conversation-head"><div class="conversation-person"><span class="guest-avatar">${esc(active.label.replace('房客 ','').slice(0,2).toUpperCase())}</span><div><h3>${esc(active.label)}</h3><p>${esc(active.listing)} · ${active.messages.length} 則訊息</p></div></div>${badge(activeStatus.label,activeStatus.tone)}</header><div class="message-list">${active.messages.map(m=>`<article class="message-bubble ${m.speaker==='host'?'is-host':'is-guest'}"><small>${m.speaker==='host'?'AI 歷史回覆':'房客原始訊息'}${m.timestamp?` · ${esc(m.timestamp)}`:''}</small><p>${esc(m.message_cleaned)}</p>${m.intent&&m.intent!=='other'?badge(m.intent,'blue'):''}</article>`).join('')}</div><footer class="composer"><label for="reply-draft">回覆草稿</label><div><textarea id="reply-draft" disabled placeholder="連接 AI 與 Airbnb／PMS 後，可在這裡產生、審核並傳送回覆。"></textarea><button type="button" class="icon-button" disabled aria-label="傳送回覆">${icon('send')}</button></div><small>目前不會產生或傳送訊息。</small></footer>`:'<div class="empty-state">選擇一則房客詢問查看對話。</div>'}</section><aside class="guest-detail">${active?`<section class="detail-card guest-profile"><span class="profile-avatar">${esc(active.label.replace('房客 ','').slice(0,2).toUpperCase())}</span><h3>${esc(active.label)}</h3><p>Airbnb Thread ${esc(active.id)}</p></section><section class="detail-card"><h3>對話狀態</h3><dl><div><dt>目前狀態</dt><dd>${badge(activeStatus.label,activeStatus.tone)}</dd></div><div><dt>判定依據</dt><dd>${esc(activeStatus.basis)}</dd></div><div><dt>目前階段</dt><dd>${esc(journeyStages.find(s=>s.id===inferStage(active).id)?.label||'初次詢問')}</dd></div></dl><button type="button" class="button ${activeStatus.id==='closed'?'button-secondary':'button-primary'} full-button" data-conversation-state="${activeStatus.id==='closed'?'open':'closed'}">${activeStatus.id==='closed'?'重新開啟對話':'標記已結束'}</button></section><section class="detail-card"><h3>房源與訂房</h3><dl><div><dt>房源</dt><dd>${esc(active.listing)}</dd></div><div><dt>訂房狀態</dt><dd>${badge('尚未連接','amber')}</dd></div><div><dt>訊息來源</dt><dd>${state.importedMessages.length?'本機原始檔':'公開遮蔽樣本'}</dd></div></dl></section><section class="detail-card ai-state"><div class="detail-title">${icon('sparkle')}<h3>AI 回覆</h3></div><p>模型與 Airbnb／PMS 尚未連接。目前只能整理歷史資料、標記階段與管理對話。</p>${badge('未啟用','neutral')}</section>`:''}</aside></div><p class="local-note"><strong>收件匣規則：</strong>退房後階段會自動移入「已結束」；其他對話可人工結案或重新開啟。正式串接後，還能依訂單結束時間與未解決問題自動歸檔。</p></section>`;
}
function renderStatus() { return `<section class="view"><div class="page-heading"><div><h2>目前真實狀態</h2><p>只顯示已確認的資料量，不把歷史內容說成 AI 績效。</p></div>${badge('0 則 AI 正式回覆')}</div><div class="status-grid">${[['820','問題／回覆配對','本機原始資料，待逐筆核准'],['1,678','AI 歷史回覆','用於找規律，不代表全部正確'],['2,831','完整訊息','來自 150 個有訊息的房客 threads'],['0','AI／PMS／Airbnb 連接','目前沒有模型生成或自動傳送']].map(([v,t,d],i)=>`<article class="status-card"><div class="status-card-top"><span class="status-icon">${icon(i===3?'lock':i===2?'database':'archive')}</span>${badge(i===3?'未連接':'真實歷史資料',i===3?'red':'green')}</div><h3>${t}</h3><strong class="value">${v}</strong><p>${d}</p></article>`).join('')}</div><div class="two-column"><section class="panel"><header class="panel-header"><div><h2>正確的訓練工作</h2><p>從原始證據到可測試規則</p></div></header><div class="task-list">${[['1','開啟原始檔','先看完整 thread 與上下文','sources'],['2','整理與核准回覆','排除錯位、過期或缺上下文資料','records'],['3','建立旅程與情境規則','把問題放進訂房生命週期','journey'],['4','用保留題測試','通過後才討論有限自動化','tests']].map(([n,t,d,v])=>`<article class="task-row"><span class="task-index">${n}</span><div><h3>${t}</h3><p>${d}</p></div><button class="mini-button" data-view-jump="${v}">前往</button></article>`).join('')}</div></section><aside class="panel"><header class="panel-header"><div><h2>回覆訓練方法</h2><p>使用可追溯、可核准、可測試的規則</p></div></header><div class="panel-body"><ul class="principle-list">${[['自然語言規則','何時套用、應該做什麼、禁止做什麼。'],['來源追溯','連回原始 thread、房源資料、SOP 與核准人。'],['旅程階段','同一個問題在訂房前與入住中可能有不同答案。'],['人工評分','只有核准資料才能進入正式模型。']].map(([t,d])=>`<li><span class="check">${icon('check')}</span><div><strong>${t}</strong><span>${d}</span></div></li>`).join('')}</ul></div></aside></div></section>`; }

function reviewLabel(id) { const v=state.reviews[id]; return badge(v==='approved'?'人工核准':v==='excluded'?'排除':v==='context'?'補上下文':'待審核',v==='approved'?'green':v==='excluded'?'red':v==='context'?'amber':'neutral'); }
function renderRecords() {
  const q=state.recordSearch.toLowerCase(); const records=currentPairs().map((r,i)=>({...r,id:r.id||`PAIR-${String(i+1).padStart(4,'0')}`})).filter(r=>`${r.id} ${r.listing_name} ${r.guest_message} ${r.host_reply} ${r.intent}`.toLowerCase().includes(q)).filter(r=>state.recordFilter==='all'||(state.reviews[r.id]||'pending')===state.recordFilter||r.risk_level?.startsWith(state.recordFilter));
  return `<section class="view"><div class="page-heading"><div><h2>歷史回覆整理庫</h2><p>${state.importedPairs.length?`已在此瀏覽器開啟 ${state.importedPairs.length} 組原始配對。`:'公開版只放少量再次遮蔽樣本；到「原始資料」選取 conversation_pairs.jsonl 可查看完整 820 組。'}</p></div><button class="button button-secondary" data-view-jump="sources">${icon('upload')}開啟原始檔</button></div><div class="toolbar"><label class="search">${icon('search')}<input id="record-search" type="search" value="${esc(state.recordSearch)}" placeholder="搜尋房源、問題、回覆或編號"></label>${[['all','全部'],['pending','待審核'],['context','補上下文'],['approved','已核准'],['excluded','已排除'],['high','高風險']].map(([v,l])=>`<button class="filter-chip ${state.recordFilter===v?'is-active':''}" data-record-filter="${v}">${l}</button>`).join('')}</div><div class="record-list">${records.slice(0,200).map(r=>`<article class="record-card"><div class="record-id">${esc(r.id)}</div><div class="record-exchange"><small class="source">${esc(r.listing_name||'未標記房源')} · Thread ${esc(String(r.thread_id||'').slice(-6))}</small><blockquote class="quote guest"><small>房客原始訊息</small>${esc(r.guest_message)}</blockquote><blockquote class="quote host"><small>AI 歷史回覆</small>${esc(r.host_reply)}</blockquote><div class="record-actions"><button class="mini-button" data-review="approved" data-record-id="${esc(r.id)}">核准</button><button class="mini-button" data-review="context" data-record-id="${esc(r.id)}">補上下文</button><button class="mini-button" data-review="excluded" data-record-id="${esc(r.id)}">排除</button></div></div><aside class="record-meta">${reviewLabel(r.id)}${badge(r.risk_level?.startsWith('high')?'高風險':'中風險',r.risk_level?.startsWith('high')?'red':'amber')}<small>${esc(r.intent||'other')}</small><small>${esc(r.notes||'Rule-based pairing; review before training use.')}</small></aside></article>`).join('')||'<div class="empty-state">沒有符合條件的資料。</div>'}</div>${records.length>200?`<p class="local-note">為維持效能，目前顯示前 200 筆；可用搜尋縮小範圍。符合條件共 ${records.length} 筆。</p>`:''}</section>`;
}
function renderQuestions() { return `<section class="view"><div class="page-heading"><div><h2>問題與住宿生命週期</h2><p>同一個房客會隨旅程階段提出不同問題；分類數量來自規則辨識，不代表完整分布。</p></div>${badge('已辨識 185／1,153 則','blue')}</div><div class="stage-grid">${topicStages.map(s=>`<article class="stage-card"><h3>${s.name}</h3><p>常見問題</p>${s.items.map(([n,c])=>`<div class="faq-item"><span>${n}</span><strong>${c}</strong></div>`).join('')}</article>`).join('')}</div><div class="coverage-note"><strong>968 則仍屬 other：</strong>下一步應做第二輪聚類並回看完整 thread，不能直接把既有分類當成完整 SOP。</div><section class="panel"><header class="panel-header"><div><h2>每個問題需要記錄</h2></div></header><div class="panel-body"><ul class="principle-list">${[['適用階段與房源','訂房前、已訂房、入住前、住宿中或售後。'],['核准答案與查詢條件','是否要先查訂單、清潔、房源或人員狀態。'],['風險與轉人工','金錢、安全、法律、客訴與資料衝突。'],['來源與版本','原始 thread、SOP、核准人與更新時間。']].map(([t,d])=>`<li><span class="check">${icon('check')}</span><div><strong>${t}</strong><span>${d}</span></div></li>`).join('')}</ul></div></section></section>`; }
function allGuidance(){return [...defaultGuidance,...state.customGuidance];}
function renderGuidance(){return `<section class="view"><div class="page-heading"><div><h2>自動回覆規則</h2><p>把歷史資料整理成「條件 → 查詢 → 行為 → 禁止事項 → 轉人工」，每條規則都能回查來源。</p></div><button class="button button-primary" data-open-guidance>${icon('plus')}新增規則</button></div><section class="panel"><header class="panel-header"><div><h2>目前規則</h2><p>除安全規則外，仍待 AI 人工核准。</p></div></header><div class="guidance-list">${allGuidance().map(item=>`<article class="guidance-card"><div><h3>${esc(item.condition)}</h3><div class="source">來源：${esc(item.source)}</div></div><div class="guidance-rules"><div class="guidance-rule do"><strong>應該做</strong>${esc(item.do)}</div><div class="guidance-rule dont"><strong>禁止事項</strong>${esc(item.dont)}</div></div><div class="guidance-side">${badge(item.status,item.status==='安全規則'?'red':'amber')}</div></article>`).join('')}</div></section></section>`;}
function renderTests(){const tests=[['Can I check in at noon?','詢問清潔進度；未確認前不承諾。','中風險'],['What is the Wi-Fi password?','只讀取該房源核准最新版；無資料轉人工。','中風險'],['Please refund the cleaning fee.','收集事實並轉人工；不得承諾退款。','高風險'],['The lock is not working.','優先處理安全與進門並轉人工。','高風險']];return `<section class="view"><div class="page-heading"><div><h2>測試與人工評分</h2><p>模型尚未連接，因此不顯示假答案或假成功率。</p></div>${badge('模型輸出：尚未連接')}</div><div class="test-grid"><section class="panel">${tests.map(([q,e,r],i)=>`<article class="test-case"><div class="test-case-top"><h3>${i+1}. ${esc(q)}</h3>${badge(r,r==='高風險'?'red':'amber')}</div><p>目前結果：尚未執行模型</p><div class="expected"><strong>期望行為：</strong>${esc(e)}</div></article>`).join('')}</section><aside class="panel"><header class="panel-header"><div><h2>評分標準</h2></div></header><div class="panel-body grader-list">${[['事實正確','只用核准資料'],['旅程正確','理解目前階段與訂房狀態'],['回答完整','先回答，再給下一步'],['安全邊界','高風險正確轉人工'],['來源可追溯','指出使用的知識與規則'],['不捏造','缺資料時承認並查證']].map(([a,b])=>`<div class="grader"><strong>${a}</strong><span>${b}</span></div>`).join('')}</div></aside></div></section>`;}

function sourcePreview(file){if(!file)return '<div class="empty-state">選取左側已開啟檔案後，可查看原始內容與解析結果。</div>';if(file.kind==='table'){const rows=file.rows.filter(r=>Object.values(r).join(' ').toLowerCase().includes(state.sourceSearch.toLowerCase())), keys=Object.keys(rows[0]||{});return `<div class="source-preview-head"><div><h3>${esc(file.name)}</h3><p>${file.rows.length} 列 · 只在本分頁記憶體</p></div>${badge('本機原檔','green')}</div><label class="search">${icon('search')}<input id="source-search" value="${esc(state.sourceSearch)}" placeholder="搜尋此原始檔"></label><div class="raw-table-wrap"><table class="raw-table"><thead><tr>${keys.map(k=>`<th>${esc(k)}</th>`).join('')}</tr></thead><tbody>${rows.slice(0,100).map(r=>`<tr>${keys.map(k=>`<td>${esc(r[k]??'')}</td>`).join('')}</tr>`).join('')}</tbody></table></div><p class="local-note">符合 ${rows.length} 列；目前顯示前 100 列。</p>`;}return `<div class="source-preview-head"><div><h3>${esc(file.name)}</h3><p>原始文字 · 只在本分頁記憶體</p></div>${badge('本機原檔','green')}</div><pre class="raw-text">${esc(file.raw)}</pre>`;}
function renderSources(){return `<section class="view"><div class="page-heading"><div><h2>原始資料</h2><p>這裡是「原檔」入口；整理後的配對、規則與測試保留在其他頁面。</p></div><button class="button button-primary" data-open-files>${icon('upload')}選取本機原始檔</button></div><div class="data-warning"><span class="status-icon">${icon('lock')}</span><div><h3>檔案不會上傳</h3><p>瀏覽器直接讀取你選取的檔案並暫存在目前分頁記憶體。重新整理後清除；公開網站不會保存房客資料。</p></div></div><div class="source-workspace"><aside class="source-files"><h3>預期資料包</h3>${sourcePackages.map(([n,c,d])=>`<article class="source-package"><strong class="file-name">${n}</strong><span>${c}</span><p>${d}</p></article>`).join('')}<h3>本次已開啟</h3>${state.importedFiles.length?state.importedFiles.map((f,i)=>`<button class="source-file-button ${state.selectedSource===i?'is-active':''}" data-source-index="${i}"><strong>${esc(f.name)}</strong><small>${f.kind==='table'?`${f.rows.length} 列`:'原始文字'}</small></button>`).join(''):'<p class="empty-copy">尚未選取任何原檔。</p>'}</aside><section class="panel source-preview">${sourcePreview(state.importedFiles[state.selectedSource])}</section></div><section class="panel"><header class="panel-header"><div><h2>本機原始檔位置</h2><p>原始資料目前整理在此專案目錄，沒有遺失。</p></div></header><div class="panel-body path-list"><code>airbnb-message-exporter/data/cleaned/cleaned_messages.csv</code><code>airbnb-message-exporter/data/cleaned/conversation_pairs.jsonl</code><code>airbnb-message-exporter/data/cleaned/training_examples.jsonl</code><code>airbnb-message-exporter/data/cleaned/review_needed.csv</code><code>airbnb-message-exporter/data/cleaned/lydia_style_guide.md</code><code>airbnb-message-exporter/data/cleaned/common_sop.md</code><code>airbnb-message-exporter/AIRBNB_LYDIA_總整理報告.md</code></div></section></section>`;}

const renderers={journey:renderJourney,status:renderStatus,records:renderRecords,questions:renderQuestions,guidance:renderGuidance,tests:renderTests,sources:renderSources};
function render(){if(!renderers[state.view])state.view='journey';main.innerHTML=renderers[state.view]();document.querySelector('#page-title').textContent=titles[state.view];document.querySelectorAll('.nav-item').forEach(n=>n.classList.toggle('is-active',n.dataset.view===state.view));hydrateIcons(main);bindViewEvents();window.scrollTo({top:0,behavior:'auto'});}
function goToView(view){if(!renderers[view])return;state.view=view;history.replaceState(null,'',`#${view}`);render();closeMenu();main.focus({preventScroll:true});}
function toast(title,message){const n=document.createElement('div');n.className='toast';n.innerHTML=`${icon('check')}<div><strong>${esc(title)}</strong><p>${esc(message)}</p></div><button aria-label="關閉">${icon('close')}</button>`;n.querySelector('button').onclick=()=>n.remove();document.querySelector('#toast-region').append(n);setTimeout(()=>n.remove(),4500);}
function parseCsv(text){const rows=[];let row=[],cell='',quoted=false;for(let i=0;i<text.length;i++){const c=text[i],next=text[i+1];if(c==='"'&&quoted&&next==='"'){cell+='"';i++;}else if(c==='"'){quoted=!quoted;}else if(c===','&&!quoted){row.push(cell);cell='';}else if((c==='\n'||c==='\r')&&!quoted){if(c==='\r'&&next==='\n')i++;row.push(cell);if(row.some(v=>v!==''))rows.push(row);row=[];cell='';}else cell+=c;}if(cell||row.length){row.push(cell);rows.push(row);}const head=rows.shift()||[];return rows.map(r=>Object.fromEntries(head.map((h,i)=>[h.trim(),r[i]??''])));}
async function importFiles(files){for(const file of files){const raw=await file.text();let rows=null;try{if(file.name.endsWith('.csv'))rows=parseCsv(raw);else if(file.name.endsWith('.jsonl'))rows=raw.split(/\r?\n/).filter(Boolean).map(line=>JSON.parse(line));else if(file.name.endsWith('.json')){const parsed=JSON.parse(raw);rows=Array.isArray(parsed)?parsed:[parsed];}}catch(error){toast(`無法解析 ${file.name}`,error.message);continue;}const item={name:file.name,raw,kind:rows?'table':'text',rows:rows||[]};state.importedFiles.push(item);if(file.name==='cleaned_messages.csv')state.importedMessages=rows.map((r,i)=>({...r,_order:i}));if(file.name==='conversation_pairs.jsonl')state.importedPairs=rows;}state.selectedSource=state.importedFiles.length-1;toast('原始檔已在瀏覽器開啟',`${files.length} 個檔案；沒有上傳到伺服器。`);render();}
function closeStageDrawer(){const drawer=document.querySelector('#stage-drawer');drawer.classList.remove('is-open');drawer.setAttribute('aria-hidden','true');setTimeout(()=>{drawer.hidden=true;},260);}
function openStageDrawer(stageId){
  const stage=journeyStages.find(s=>s.id===stageId);if(!stage)return;state.editingStage=stageId;
  const module=stageModules[stageId],history=stageHistory(stageId),drawer=document.querySelector('#stage-drawer'),content=document.querySelector('#stage-drawer-content');
  const replies=history.replies.slice(0,4);
  content.innerHTML=`<header class="drawer-header"><div><p class="eyebrow">AI 回覆訓練模組</p><h2 id="stage-drawer-title">${esc(stage.label)}</h2></div><button class="icon-button" type="button" data-close-stage aria-label="關閉">${icon('close')}</button></header><div class="drawer-body"><section class="module-intro"><span class="module-number">${journeyStages.findIndex(s=>s.id===stageId)+1}</span><div><h3>${esc(module.goal)}</h3><p>這是獨立情境模組，不代表每位房客都一定會經過。</p></div></section><div class="module-stats"><div><strong>${history.threads.length}</strong><span>組對應對話</span></div><div><strong>${history.replies.length}</strong><span>則 AI 回覆</span></div><div><strong>${module.scenarios.length}</strong><span>個初始情境</span></div></div><section class="drawer-section"><div class="drawer-section-title"><h3>常見詢問情境</h3>${badge('可持續新增','blue')}</div><div class="scenario-chips">${module.scenarios.map(s=>`<span>${esc(s)}</span>`).join('')}<button type="button" disabled aria-label="新增情境">${icon('plus')}新增</button></div></section><section class="drawer-section"><div class="drawer-section-title"><h3>AI 歷史回覆</h3>${badge(state.importedMessages.length?'本機原始資料':'遮蔽樣本',state.importedMessages.length?'green':'neutral')}</div>${replies.length?`<div class="history-snippets">${replies.map(r=>`<article><small>${esc(r.listing)}</small><p>${esc(r.text)}</p></article>`).join('')}</div>`:'<p class="empty-copy">目前載入的資料中沒有符合此模組的 AI 回覆；開啟完整 cleaned_messages.csv 後會重新對應。</p>'}</section><form id="stage-training-form" class="drawer-section training-form"><div class="drawer-section-title"><h3>AI 回覆原則與提示詞</h3>${badge('草稿','amber')}</div><label for="stage-instructions">這個情境下，AI 應該怎麼判斷與回覆？</label><textarea id="stage-instructions" name="instructions" placeholder="例如：先確認該房源最新資料；直接回答房客問題；若涉及金錢、承諾或資料衝突，轉交 AI。">${esc(state.stageDrafts[stageId]||'')}</textarea><p>儲存後只會保存在這個瀏覽器，尚未寫入正式 AI 模型。</p><div class="drawer-actions"><button class="button button-secondary" type="button" data-set-current-stage="${stageId}">設為目前對話情境</button><button class="button button-primary" type="submit">儲存訓練草稿</button></div></form></div>`;
  content.querySelector('[data-close-stage]').onclick=closeStageDrawer;
  content.querySelector('[data-set-current-stage]').onclick=()=>{const c=selectedConversation();if(!c)return;state.stageOverrides[c.id]=stageId;localStorage.setItem('lydia-stage-overrides',JSON.stringify(state.stageOverrides));toast('目前對話情境已校正',stage.label);closeStageDrawer();render();};
  content.querySelector('#stage-training-form').onsubmit=e=>{e.preventDefault();state.stageDrafts[stageId]=new FormData(e.currentTarget).get('instructions').trim();localStorage.setItem('lydia-stage-drafts',JSON.stringify(state.stageDrafts));toast(`${stage.label}訓練草稿已儲存`,'目前只保存在此瀏覽器，尚未套用到模型。');};
  drawer.hidden=false;drawer.setAttribute('aria-hidden','false');setTimeout(()=>drawer.classList.add('is-open'),10);content.querySelector('[data-close-stage]').focus();
}
function bindViewEvents(){
  main.querySelectorAll('[data-view-jump]').forEach(b=>b.onclick=()=>goToView(b.dataset.viewJump));
  main.querySelectorAll('[data-listing]').forEach(b=>b.onclick=()=>{state.selectedListing=b.dataset.listing;state.selectedThread='';render();});
  main.querySelectorAll('[data-thread]').forEach(b=>b.onclick=()=>{state.selectedThread=b.dataset.thread;const c=conversations().find(item=>item.id===state.selectedThread);if(c)state.selectedListing=c.listing;render();});
  main.querySelectorAll('[data-inbox-filter]').forEach(b=>b.onclick=()=>{state.inboxFilter=b.dataset.inboxFilter;render();});
  const listingFilter=main.querySelector('#listing-filter');listingFilter?.addEventListener('change',()=>{state.listingFilter=listingFilter.value;state.selectedThread='';render();});
  const inboxSearch=main.querySelector('#inbox-search');inboxSearch?.addEventListener('input',()=>{state.inboxSearch=inboxSearch.value;render();const next=main.querySelector('#inbox-search');next?.focus();next?.setSelectionRange(state.inboxSearch.length,state.inboxSearch.length);});
  main.querySelector('[data-conversation-state]')?.addEventListener('click',e=>{const c=selectedConversation();if(!c)return;state.conversationStates[c.id]=e.currentTarget.dataset.conversationState;localStorage.setItem('lydia-conversation-states',JSON.stringify(state.conversationStates));toast(state.conversationStates[c.id]==='closed'?'對話已移至「已結束」':'對話已重新開啟',c.label);render();});
  main.querySelectorAll('[data-stage-module]').forEach(b=>b.onclick=()=>openStageDrawer(b.dataset.stageModule));
  const rs=main.querySelector('#record-search');rs?.addEventListener('input',()=>{state.recordSearch=rs.value;render();const next=main.querySelector('#record-search');next?.focus();next?.setSelectionRange(state.recordSearch.length,state.recordSearch.length);});
  main.querySelectorAll('[data-record-filter]').forEach(b=>b.onclick=()=>{state.recordFilter=b.dataset.recordFilter;render();});
  main.querySelectorAll('[data-review]').forEach(b=>b.onclick=()=>{state.reviews[b.dataset.recordId]=b.dataset.review;localStorage.setItem('lydia-record-reviews',JSON.stringify(state.reviews));toast(b.dataset.recordId,'人工審核狀態已保存於此瀏覽器。');render();});
  main.querySelector('[data-open-guidance]')?.addEventListener('click',openGuidanceModal);
  main.querySelectorAll('[data-open-files]').forEach(b=>b.onclick=()=>document.querySelector('#source-file-input').click());
  main.querySelectorAll('[data-source-index]').forEach(b=>b.onclick=()=>{state.selectedSource=Number(b.dataset.sourceIndex);state.sourceSearch='';render();});
  const ss=main.querySelector('#source-search');ss?.addEventListener('input',()=>{state.sourceSearch=ss.value;render();const next=main.querySelector('#source-search');next?.focus();next?.setSelectionRange(state.sourceSearch.length,state.sourceSearch.length);});
}
function openGuidanceModal(){const m=document.querySelector('#editor-modal');m.hidden=false;m.setAttribute('aria-hidden','false');m.querySelector('input').focus();}
function closeGuidanceModal(){const m=document.querySelector('#editor-modal');m.hidden=true;m.setAttribute('aria-hidden','true');}
function closeMenu(){document.querySelector('#sidebar').classList.remove('is-open');document.querySelector('#mobile-scrim').hidden=true;document.querySelector('#menu-button').setAttribute('aria-expanded','false');}
const sidebar=document.querySelector('#sidebar');
const hoverNavigation=window.matchMedia('(hover: hover) and (pointer: fine)');
let sidebarCloseTimer;
function openHoverSidebar(){if(!hoverNavigation.matches)return;clearTimeout(sidebarCloseTimer);sidebar.classList.add('is-hover-open');}
function scheduleHoverSidebarClose(){if(!hoverNavigation.matches)return;clearTimeout(sidebarCloseTimer);sidebarCloseTimer=setTimeout(()=>{if(!sidebar.matches(':hover')&&!sidebar.matches(':focus-within'))sidebar.classList.remove('is-hover-open');},2000);}
sidebar.addEventListener('pointerenter',openHoverSidebar);
sidebar.addEventListener('pointerleave',scheduleHoverSidebarClose);
sidebar.addEventListener('focusin',openHoverSidebar);
sidebar.addEventListener('focusout',scheduleHoverSidebarClose);
document.querySelectorAll('.nav-item').forEach(n=>n.onclick=()=>goToView(n.dataset.view));
document.querySelector('#menu-button').onclick=()=>{const s=document.querySelector('#sidebar'),open=!s.classList.contains('is-open');s.classList.toggle('is-open',open);document.querySelector('#mobile-scrim').hidden=!open;document.querySelector('#menu-button').setAttribute('aria-expanded',String(open));};
document.querySelector('#mobile-scrim').onclick=closeMenu;document.querySelectorAll('[data-close-modal]').forEach(n=>n.onclick=closeGuidanceModal);
document.querySelectorAll('[data-close-stage]').forEach(n=>n.onclick=closeStageDrawer);
document.querySelector('#source-file-input').addEventListener('change',e=>{importFiles([...e.target.files]);e.target.value='';});
document.querySelector('#guidance-form').addEventListener('submit',e=>{e.preventDefault();const d=new FormData(e.currentTarget);state.customGuidance.push({condition:d.get('condition').trim(),do:d.get('do').trim(),dont:d.get('dont').trim(),source:d.get('source').trim(),status:'待 AI 核准'});localStorage.setItem('lydia-custom-guidance',JSON.stringify(state.customGuidance));e.currentTarget.reset();closeGuidanceModal();toast('規則草稿已保存','目前只保存在此瀏覽器。');render();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeGuidanceModal();closeStageDrawer();closeMenu();}});window.addEventListener('hashchange',()=>{state.view=location.hash.replace('#','')||'journey';render();});hydrateIcons();render();
