const icons = {
  grid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/></svg>',
  message: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"/></svg>',
  spark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="m12 3 1.2 4.1L17 9l-3.8 1.9L12 15l-1.2-4.1L7 9l3.8-1.9L12 3Z"/><path d="m18 14 .8 2.2L21 17l-2.2.8L18 20l-.8-2.2L15 17l2.2-.8L18 14ZM5 3l.7 1.8L7.5 5.5l-1.8.7L5 8l-.7-1.8-1.8-.7 1.8-.7L5 3Z"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></svg>',
  book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/></svg>',
  chart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M3 3v18h18"/><path d="m7 16 4-5 3 3 5-7"/></svg>',
  chevron: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>',
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16"/></svg>',
  bell: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9ZM13.7 21a2 2 0 0 1-3.4 0"/></svg>',
  info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7h.01"/></svg>',
  close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><path d="m5 12 4 4L19 6"/></svg>',
  alert: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M10.3 4.3 2.5 18a2 2 0 0 0 1.7 3h15.6a2 2 0 0 0 1.7-3L13.7 4.3a2 2 0 0 0-3.4 0Z"/><path d="M12 9v4M12 17h.01"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>',
  dots: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="5" cy="12" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="19" cy="12" r="1.5"/></svg>',
  home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10M9 20v-6h6v6"/></svg>',
  calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/></svg>',
  user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>',
  send: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="m22 2-7 20-4-9-9-4 20-7Z"/><path d="M22 2 11 13"/></svg>',
  edit: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  wifi: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0M12 20h.01M2 9a15 15 0 0 1 20 0"/></svg>',
  car: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="m5 11 1.5-5h11l1.5 5"/><rect x="3" y="11" width="18" height="7" rx="2"/><path d="M5 18v2M19 18v2M7 14h.01M17 14h.01"/></svg>',
  key: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="8" cy="15" r="4"/><path d="m11 12 8-8M15 8l3 3M17 6l2 2"/></svg>',
  rules: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16"/><circle cx="8" cy="6" r="2" fill="white"/><circle cx="15" cy="12" r="2" fill="white"/><circle cx="10" cy="18" r="2" fill="white"/></svg>',
  money: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M7 9h.01M17 15h.01M9 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0Z"/></svg>',
  tools: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M14.7 6.3a4 4 0 0 0-5-5L7.5 3.5 10 6 7 9 4.5 6.5 2.3 8.7a4 4 0 0 0 5 5L17 23l6-6-8.3-8.3Z"/></svg>',
  language: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/></svg>',
};

const conversations = [
  {
    id: 'parking', initials: 'MA', guest: '房客 Maya', time: '2 分鐘', property: 'Chandler Oasis · 2B2B Condo',
    preview: 'Is there a second parking spot for my sister?', category: '停車', risk: 'low', confidence: 94,
    draft: 'Hi Maya, this condo has one assigned parking space. Your sister may use the marked guest parking spaces, which are a short walk from Building 19. I’ll include the exact parking details with your check-in instructions :)',
    source: '歷史上 Lydia 會直接說明「一個固定車位＋訪客停車」，並提醒步行距離。',
    knowledge: '房源知識：Building 19、固定車位 1 格、訪客可使用 guest parking。',
    messages: [
      ['host', 'Hi Maya, thanks for booking with us! I’ll send the full check-in details the day before arrival.', '昨天 18:42'],
      ['guest', 'Thank you! Is there a second parking spot for my sister?', '今天 10:18'],
    ],
  },
  {
    id: 'early', initials: 'JL', guest: '房客 Jordan', time: '8 分鐘', property: 'Quiet ASU Room · Tempe',
    preview: 'Can I leave my bags around noon?', category: '提早入住', risk: 'medium', confidence: 78,
    draft: 'Hi Jordan, the standard check-in time is 3:00 PM. Let me check with our helper about luggage drop-off around noon, and I’ll get back to you.',
    source: 'Lydia 遇到提早入住會先找 helper 確認，不在清潔完成前承諾。',
    knowledge: '房源知識：標準入住 3:00 PM；行李寄放尚未建立固定規則。',
    messages: [
      ['guest', 'Hi! My flight lands early. Can I leave my bags around noon?', '今天 10:12'],
    ],
  },
  {
    id: 'refund', initials: 'AR', guest: '房客 Alex', time: '16 分鐘', property: 'Mountain View Condo · Phoenix',
    preview: 'Can you refund the cleaning fee?', category: '退款／補償', risk: 'high', confidence: 42,
    draft: 'Hi Alex, I’m sorry the space wasn’t in the condition you expected. I’ve documented the issue and will review the reservation details before confirming any refund or compensation.',
    source: 'Lydia 會先道歉並查明狀況；金錢決定不可由 AI 自動定案。',
    knowledge: '此房源的退款與補償規則尚未經 Lydia 核准。',
    messages: [
      ['guest', 'The bathroom was not clean when I arrived.', '今天 09:58'],
      ['host', 'I’m really sorry about that. Could you send me a photo of the affected area?', '今天 10:01'],
      ['guest', 'I sent the photos. Can you refund the cleaning fee?', '今天 10:04'],
    ],
  },
  {
    id: 'wifi', initials: 'SK', guest: '房客 Sam', time: '21 分鐘', property: 'Breeze Room · Gated Community',
    preview: 'The Wi-Fi password isn’t working.', category: 'Wi-Fi', risk: 'medium', confidence: 66,
    draft: 'Thanks for letting me know, Sam. Let me verify the current Wi-Fi details for this unit before I send them again. I’ll also check whether there is a service interruption.',
    source: 'Lydia 會先確認房源與當前密碼，不從其他房源複製舊資訊。',
    knowledge: '知識庫有兩筆互相衝突的 Wi-Fi 名稱，必須由 Lydia 確認最新版。',
    messages: [
      ['host', 'Here are the check-in details. Please let me know once you are inside.', '昨天 14:20'],
      ['guest', 'I’m inside, but the Wi-Fi password isn’t working.', '今天 09:59'],
    ],
  },
];

const rules = [
  { id: 'parking', icon: 'car', title: '停車與抵達', desc: '房源、車位與日期資料都已確認時才自動回覆。', mode: 'auto', enabled: true },
  { id: 'wifi', icon: 'wifi', title: 'Wi-Fi 與一般設備', desc: '只引用該房源最新核准資料；資訊衝突立即轉人工。', mode: 'review', enabled: true },
  { id: 'arrival', icon: 'clock', title: '入住、退房與行李', desc: '標準時間可回覆；任何例外都需 helper 或 Lydia 確認。', mode: 'review', enabled: true },
  { id: 'maintenance', icon: 'tools', title: '維修與清潔問題', desc: '先收集照片與影響範圍，安全風險直接通知人工。', mode: 'review', enabled: true },
  { id: 'money', icon: 'money', title: '退款、折扣與補償', desc: 'AI 可整理資訊與擬稿，但永遠不能自行承諾金額。', mode: 'human', enabled: false },
  { id: 'safety', icon: 'shield', title: '安全、法律與嚴重客訴', desc: '不自動處理；標記緊急程度並立即轉交 Lydia。', mode: 'human', enabled: false },
];

const properties = [
  { name: 'Chandler Oasis · 2B2B Condo', code: 'AZ-CH-019', complete: 88, wifi: '已核准', parking: '已核准', access: '待更新', rules: '已核准' },
  { name: 'Quiet ASU Room · Tempe', code: 'AZ-TP-004', complete: 71, wifi: '已核准', parking: '待確認', access: '已核准', rules: '已核准' },
  { name: 'Breeze Room · Gated Community', code: 'AZ-CH-012', complete: 54, wifi: '資料衝突', parking: '已核准', access: '已核准', rules: '待確認' },
  { name: 'Mountain View Condo · Phoenix', code: 'AZ-PH-021', complete: 62, wifi: '已核准', parking: '待確認', access: '待更新', rules: '已核准' },
  { name: 'Boutique Tempe · Private Kitchen', code: 'AZ-TP-017', complete: 43, wifi: '待確認', parking: '待確認', access: '已核准', rules: '待確認' },
  { name: 'Intel House · Garage & Backyard', code: 'AZ-CH-026', complete: 38, wifi: '待確認', parking: '待確認', access: '待確認', rules: '已核准' },
];

const viewTitles = {
  overview: '營運總覽', inbox: 'AI 收件匣', persona: 'Lydia 回覆方式', rules: '自動回覆規則', knowledge: '房源知識庫', insights: '學習與成效',
};

const state = {
  view: 'overview',
  selectedConversation: 'parking',
  rules: JSON.parse(localStorage.getItem('lydia-demo-rules') || 'null') || Object.fromEntries(rules.map((r) => [r.id, r.enabled])),
  persona: JSON.parse(localStorage.getItem('lydia-demo-persona') || 'null') || { warmth: '親切自然', length: '簡短', emoji: 20, confidence: 90 },
  resolved: new Set(JSON.parse(localStorage.getItem('lydia-demo-resolved') || '[]')),
};

const main = document.querySelector('#main-content');

function icon(name) { return icons[name] || icons.info; }

function hydrateIcons(root = document) {
  root.querySelectorAll('[data-icon]').forEach((node) => { node.innerHTML = icon(node.dataset.icon); });
}

function badge(risk) {
  const labels = { low: '低風險', medium: '需確認', high: '高風險' };
  return `<span class="badge badge-${risk}">${labels[risk]}</span>`;
}

function metric(label, value, foot, iconName, glow = '') {
  return `<article class="metric-card" style="--metric-glow:${glow || 'var(--primary-soft)'}">
    <div class="metric-top"><span class="metric-label">${label}</span><span class="metric-icon">${icon(iconName)}</span></div>
    <div class="metric-value">${value}</div><div class="metric-foot">${foot}</div>
  </article>`;
}

function renderOverview() {
  const pending = conversations.filter((c) => !state.resolved.has(c.id));
  return `<section class="view" aria-labelledby="overview-heading">
    <div class="section-heading"><div><h2 id="overview-heading">今天需要你處理的事情</h2><p>AI 先處理重複問題，Lydia 專注在例外與重要決定。</p></div><button class="button button-secondary" data-view-jump="rules">調整自動化</button></div>
    <div class="metric-grid">
      ${metric('待審核回覆', pending.length, '<span class="positive">4 則已完成草稿</span>', 'message')}
      ${metric('今天 AI 已協助', '26', '節省約 48 分鐘', 'spark', 'var(--blue-soft)')}
      ${metric('平均回覆時間', '2m 14s', '<span class="positive">比上週快 18%</span>', 'clock', 'var(--green-soft)')}
      ${metric('需補齊房源資料', '7', '3 筆會阻擋自動回覆', 'book', 'var(--amber-soft)')}
    </div>
    <div class="overview-grid">
      <div class="settings-stack">
        <section class="panel">
          <div class="panel-header"><div><h2>等待 Lydia 審核</h2><p>依風險與等待時間排序</p></div><button class="section-link" data-view-jump="inbox">查看全部</button></div>
          <div class="queue-list">${pending.map((c) => `<article class="queue-row" tabindex="0" role="button" data-open-conversation="${c.id}">
            <div class="queue-avatar">${c.initials}</div><div class="queue-main"><div class="queue-line"><strong>${c.guest}</strong><span class="badge badge-neutral">${c.category}</span></div><p>${c.preview}</p></div>
            <div class="queue-meta"><time>${c.time}</time>${badge(c.risk)}</div></article>`).join('') || '<div class="empty-state"><div><span data-icon="check"></span><h3>目前沒有待審核回覆</h3><p>所有示範對話都已處理。重新整理示範資料可再次體驗。</p></div></div>'}</div>
        </section>
        <section class="panel">
          <div class="panel-header"><div><h2>最近 7 天回覆量</h2><p>AI 自動處理與 Lydia 人工確認的比例</p></div><div class="chart-legend"><span><i class="legend-dot"></i>AI</span><span><i class="legend-dot gray"></i>人工</span></div></div>
          <div class="activity-chart"><div class="bars">${[[42,24],[58,28],[51,33],[70,31],[78,26],[47,20],[61,23]].map(([a,h]) => `<div class="bar-group"><span class="bar" style="height:${a}%"></span><span class="bar is-review" style="height:${h}%"></span></div>`).join('')}</div><div class="bar-labels"><span>一</span><span>二</span><span>三</span><span>四</span><span>五</span><span>六</span><span>日</span></div></div>
        </section>
      </div>
      <aside class="panel autonomy-card">
        <div class="autonomy-score"><div class="score-ring" style="--score:72"><strong>72%</strong></div><div class="score-copy"><h3>自動回覆準備度</h3><p>先補齊關鍵房源資料，再逐步提高自動化。</p></div></div>
        <ul class="readiness-list">
          <li class="readiness-item"><span class="check-icon">${icon('check')}</span><span>Lydia 語氣模型</span><small>已建立</small></li>
          <li class="readiness-item"><span class="check-icon">${icon('check')}</span><span>高風險轉人工規則</span><small>6 類</small></li>
          <li class="readiness-item"><span class="warn-icon">${icon('alert')}</span><span>房源知識完整度</span><small>平均 59%</small></li>
          <li class="readiness-item"><span class="warn-icon">${icon('alert')}</span><span>Airbnb 正式連接</span><small>尚未連接</small></li>
        </ul>
        <button class="button button-primary" style="width:100%;margin-top:22px" data-view-jump="knowledge">補齊房源知識</button>
      </aside>
    </div>
  </section>`;
}

function renderInbox() {
  const current = conversations.find((c) => c.id === state.selectedConversation) || conversations[0];
  return `<section class="view inbox-layout" aria-label="AI 收件匣">
    <aside class="conversation-list" aria-label="對話清單">
      <div class="conversation-toolbar"><div class="search-box">${icon('search')}<input id="conversation-search" type="search" placeholder="搜尋房客或房源" aria-label="搜尋房客或房源"></div><div class="filter-row"><button class="filter-chip is-active" type="button">待審核</button><button class="filter-chip" type="button">高風險</button><button class="filter-chip" type="button">全部</button></div></div>
      <div id="conversation-items">${conversations.map((c) => `<button class="conversation-item ${c.id === current.id ? 'is-active' : ''}" type="button" data-conversation="${c.id}">
        <span class="queue-avatar">${c.initials}</span><span><span class="conversation-item-top"><strong>${c.guest}</strong><time>${c.time}</time></span><span class="property-code">${c.property}</span><p>${c.preview}</p><span class="conversation-labels"><span class="badge badge-neutral">${c.category}</span>${badge(c.risk)}</span></span></button>`).join('')}</div>
    </aside>
    <section class="thread-pane" aria-label="目前對話">
      <header class="thread-header"><span class="queue-avatar">${current.initials}</span><div class="thread-header-copy"><h2>${current.guest}</h2><p>${current.property} · 住宿中</p></div><div class="thread-actions"><button class="icon-button" type="button" aria-label="房客資訊">${icon('user')}</button><button class="icon-button" type="button" aria-label="更多選項">${icon('dots')}</button></div></header>
      <div class="messages"><span class="day-separator">今天</span>${current.messages.map(([who, text, time]) => `<div class="message ${who}"><div class="message-bubble"><p>${text}</p></div><div class="message-meta">${who === 'host' ? 'Lydia · ' : ''}${time}</div></div>`).join('')}</div>
      <div class="composer-mini"><input type="text" placeholder="手動輸入訊息…" aria-label="手動輸入訊息"><button class="icon-button" type="button" aria-label="傳送示範訊息" data-action="manual-send">${icon('send')}</button></div>
    </section>
    <aside class="ai-pane" aria-label="AI 回覆建議">
      <div class="ai-pane-header"><div class="ai-title-row"><h2>${icon('spark')} Lydia AI 建議</h2>${badge(current.risk)}</div></div>
      <div class="ai-scroll"><div>
        <div class="confidence-block"><div class="confidence-row"><span>回覆信心</span><strong>${current.confidence}%</strong></div><div class="confidence-track"><div class="confidence-fill" style="width:${current.confidence}%;background:${current.risk === 'high' ? 'var(--red)' : current.risk === 'medium' ? 'var(--amber)' : 'var(--green)'}"></div></div></div>
        <div class="draft-label"><span>建議回覆</span><button class="button button-ghost" type="button" data-action="regenerate">${icon('spark')}重新產生</button></div>
        <textarea class="draft-editor" id="draft-editor" aria-label="AI 建議回覆">${current.draft}</textarea>
        <div class="draft-actions"><button class="button ${current.risk === 'high' ? 'button-danger' : 'button-primary'}" type="button" data-action="approve" data-conversation-id="${current.id}">${current.risk === 'high' ? '交給 Lydia 決定' : '核准（示範）'}</button><button class="button button-secondary" type="button" data-action="copy" aria-label="複製回覆">${icon('edit')}</button></div>
      </div><div>
        <div class="evidence-card is-open"><button class="evidence-title" type="button" data-action="toggle-evidence"><span>這則回覆使用了什麼？</span>${icon('chevron')}</button><div class="evidence-content">
          <div class="evidence-item"><span class="evidence-icon">${icon('message')}</span><div><strong>Lydia 歷史回覆方式</strong><p>${current.source}</p></div></div>
          <div class="evidence-item"><span class="evidence-icon">${icon('home')}</span><div><strong>本房源核准資料</strong><p>${current.knowledge}</p></div></div>
          <div class="evidence-item"><span class="evidence-icon">${icon('shield')}</span><div><strong>套用規則</strong><p>${current.risk === 'high' ? '涉及金錢決定，禁止 AI 自動承諾。' : current.risk === 'medium' ? '資訊未完全確認，先查證再回覆。' : '房源資料已核准，可由 Lydia 審核後回覆。'}</p></div></div>
        </div></div>
        <div class="risk-note">${icon('info')}<span>${current.risk === 'low' ? '正式串接前仍維持人工核准；之後只有達到門檻且資料無衝突時才可自動傳送。' : '這類訊息預設不會自動傳送，必須由 Lydia 或指定團隊成員確認。'}</span></div>
      </div></div>
    </aside>
  </section>`;
}

function renderPersona() {
  return `<section class="view"><div class="section-heading"><div><h2>Lydia 的回覆，不是制式客服模板</h2><p>將 820 組歷史配對整理成可調整、可預覽、可逐房源覆寫的規則。</p></div><span class="badge badge-blue">依歷史資料建立</span></div>
    <div class="settings-layout"><section class="panel">
      <div class="form-section"><h3>基本語氣</h3><p>這些設定會套用到所有 AI 草稿；房源可再另外覆寫。</p>
        <div class="field"><label>親切程度</label><div class="segmented" data-persona-group="warmth">${['直接俐落','親切自然','非常熱情'].map((x) => `<button type="button" class="segment ${state.persona.warmth === x ? 'is-active' : ''}" data-persona-value="${x}">${x}</button>`).join('')}</div></div>
        <div class="field"><label>回覆長度</label><div class="segmented" data-persona-group="length">${['一句重點','簡短','完整說明'].map((x) => `<button type="button" class="segment ${state.persona.length === x ? 'is-active' : ''}" data-persona-value="${x}">${x}</button>`).join('')}</div><small>Lydia 的歷史回覆中位數約 12 個英文單字，通常 1–3 句。</small></div>
        <div class="field"><label for="emoji-range">親和符號頻率</label><div class="range-row"><input id="emoji-range" type="range" min="0" max="50" value="${state.persona.emoji}"><output class="range-value" for="emoji-range">${state.persona.emoji}%</output></div><small>保留 Lydia 偶爾使用 :) 或愛心的習慣，但不讓每則回覆都出現。</small></div>
      </div>
      <div class="form-section"><h3>Lydia 的固定原則</h3><p>AI 每次產生回覆都必須遵守。</p>
        <div class="field"><label for="principles">回覆指示</label><textarea id="principles">先回答房客正在問的事情，再補必要步驟。
不確定時說明要查證，不自行承諾。
退款、折扣、補償、安全與嚴重客訴一律轉人工。
停車、門鎖、Wi-Fi 只能使用該房源已核准的最新版資料。
語氣短、直接、親切，不寫成客服長文。</textarea><small>正式版本會保留每次修改的版本與核准人。</small></div>
      </div>
    </section>
    <aside class="panel sticky-panel"><div class="panel-header"><div><h2>即時預覽</h2><p>查看設定如何影響回覆</p></div><span class="badge badge-low">低風險</span></div>
      <div class="preview-chat"><div class="message guest"><div class="message-bubble"><p>Hi, is parking available for a second car?</p></div></div><div class="message host"><div class="message-bubble"><p id="persona-preview">Hi! This condo has one assigned parking space. Your second car may use the marked guest parking spaces nearby${state.persona.emoji > 10 ? ' :)' : '.'}</p></div><div class="message-meta">Lydia AI 草稿</div></div></div>
      <div class="preview-meta"><span>使用：房源停車規則＋Lydia 語氣</span><span>94% 信心</span></div>
    </aside></div>
    <div class="save-bar"><p>變更目前只會儲存在這台電腦的示範瀏覽器。</p><button class="button button-primary" type="button" data-action="save-persona">儲存 Lydia 回覆方式</button></div>
  </section>`;
}

function modeLabel(mode) { return { auto: '可自動', review: '需審核', human: '只限人工' }[mode]; }

function renderRules() {
  return `<section class="view"><div class="section-heading"><div><h2>讓 AI 知道何時回答、何時閉嘴</h2><p>全域門檻、訊息分類和逐房源例外可以分開設定。</p></div><button class="button button-secondary" type="button" data-action="test-rules">測試一則訊息</button></div>
    <div class="settings-layout"><div class="settings-stack">
      <section class="panel"><div class="panel-header"><div><h2>訊息分類</h2><p>是否允許 AI 自動處理各種情境</p></div></div><div class="rule-list">${rules.map((r) => `<article class="rule-row"><div class="rule-copy"><span class="rule-icon">${icon(r.icon)}</span><div><h3>${r.title}</h3><p>${r.desc}</p></div></div><div class="rule-controls"><span class="badge ${r.mode === 'auto' ? 'badge-low' : r.mode === 'review' ? 'badge-medium' : 'badge-high'}">${modeLabel(r.mode)}</span><button class="switch" type="button" role="switch" aria-label="${r.title}" aria-checked="${Boolean(state.rules[r.id])}" data-rule="${r.id}"></button></div></article>`).join('')}</div></section>
      <section class="panel"><div class="panel-header"><div><h2>轉人工政策</h2><p>任何一項命中就停止自動傳送</p></div></div><div class="panel-body"><div class="policy-grid">
        <label class="policy-card"><strong>AI 信心門檻</strong><p>低於此分數一律交由人工。</p><select id="confidence-select"><option>85%</option><option selected>90%</option><option>95%</option></select></label>
        <label class="policy-card"><strong>負面情緒</strong><p>房客不滿時採取的動作。</p><select><option>標記但繼續</option><option selected>立即轉人工</option></select></label>
        <label class="policy-card"><strong>知識資料衝突</strong><p>房源資料有兩個不同答案。</p><select><option selected>停止並轉人工</option><option>使用最新版</option></select></label>
      </div></div></section>
    </div><aside class="panel sticky-panel"><div class="panel-header"><div><h2>目前自動回覆範圍</h2><p>以現有知識完整度估算</p></div></div><div class="autonomy-card"><div class="autonomy-score"><div class="score-ring" style="--score:12"><strong>12%</strong></div><div class="score-copy"><h3>保守啟用</h3><p>符合 Lydia 原本要求：先準確，再擴大。</p></div></div><ul class="readiness-list"><li class="readiness-item"><span class="check-icon">${icon('check')}</span><span>可考慮自動發送</span><small>101 組</small></li><li class="readiness-item"><span class="warn-icon">${icon('alert')}</span><span>分類不明確</span><small>968 則</small></li><li class="readiness-item"><span class="warn-icon">${icon('alert')}</span><span>高風險訊息</span><small>48 則</small></li></ul><p style="margin:20px 0 0;color:var(--text-muted);font-size:11px">這些是歷史資料分析結果，不代表已經能連接 Airbnb 自動傳送。</p></div></aside></div>
    <div class="save-bar"><p>規則變更會影響哪些訊息可自動處理，正式上線前需要測試集驗證。</p><button class="button button-primary" type="button" data-action="save-rules">儲存自動回覆規則</button></div>
  </section>`;
}

function statusBadge(value) {
  const cls = value === '已核准' ? 'badge-low' : value.includes('衝突') ? 'badge-high' : 'badge-medium';
  return `<strong class="badge ${cls}">${value}</strong>`;
}

function renderKnowledge() {
  return `<section class="view"><div class="section-heading"><div><h2>正確答案必須來自正確房源</h2><p>歷史對話只是線索；Wi-Fi、門碼、停車等資料需要 Lydia 明確核准。</p></div><button class="button button-primary" type="button" data-action="add-property">${icon('home')}新增房源資料</button></div>
    <div class="knowledge-toolbar"><div class="search-box">${icon('search')}<input id="property-search" type="search" placeholder="搜尋房源名稱或代碼" aria-label="搜尋房源名稱或代碼"></div><button class="filter-chip is-active" type="button">全部 48</button><button class="filter-chip" type="button">待確認 7</button><button class="filter-chip" type="button">資料衝突 3</button></div>
    <div class="knowledge-grid" id="property-grid">${properties.map((p) => `<article class="property-card" data-property-name="${p.name.toLowerCase()} ${p.code.toLowerCase()}"><div class="property-card-top"><div><h3>${p.name}</h3><p class="property-code">${p.code}</p></div><div class="completeness" style="--complete:${p.complete}%"><span>${p.complete}%</span></div></div><div class="knowledge-items">
      <div class="knowledge-line"><span>${icon('wifi')}Wi-Fi</span>${statusBadge(p.wifi)}</div><div class="knowledge-line"><span>${icon('car')}停車</span>${statusBadge(p.parking)}</div><div class="knowledge-line"><span>${icon('key')}門鎖／進門</span>${statusBadge(p.access)}</div><div class="knowledge-line"><span>${icon('rules')}房屋規則</span>${statusBadge(p.rules)}</div></div><div class="property-card-actions"><button class="button button-secondary" type="button" data-action="edit-property" data-property="${p.code}">查看與編輯</button></div></article>`).join('')}</div>
  </section>`;
}

function renderInsights() {
  const topics = [['寵物政策',54,100],['入住／抵達',23,43],['退款／補償',22,41],['停車',13,24],['設備用品',11,20],['Wi-Fi',9,17]];
  return `<section class="view"><div class="section-heading"><div><h2>把 Lydia 的修改變成可追蹤的學習</h2><p>不是讓 AI 無限制「自己學」，而是只從核准的修改與房源資料更新。</p></div><span class="badge badge-neutral">資料截至 2026-08-31</span></div>
    <div class="metric-grid">${metric('歷史房客對話','150','含實際訊息的 threads','message')}${metric('Lydia 歷史回覆','1,678','已匿名化整理','user','var(--blue-soft)')}${metric('問題／回覆配對','820','可供檢索與審核','spark','var(--green-soft)')}${metric('可考慮自動','101','仍需人工驗證品質','shield','var(--amber-soft)')}</div>
    <div class="insights-grid"><section class="panel"><div class="panel-header"><div><h2>已辨識的常見主題</h2><p>規則分類器已能明確辨識的 185 則房客訊息</p></div></div><div class="topic-list">${topics.map(([name,count,width]) => `<div class="topic-row"><span>${name}</span><div class="topic-track"><div class="topic-fill" style="width:${width}%"></div></div><strong>${count}</strong></div>`).join('')}</div></section>
      <section class="panel"><div class="panel-header"><div><h2>Lydia 核准後的學習紀錄</h2><p>正式版本每次學習都可撤回與稽核</p></div></div><div class="learning-card">
        <article class="learning-item"><span class="learning-icon">${icon('edit')}</span><div><h3>停車回覆變得更具體</h3><p>Lydia 加上「Building 19」與訪客停車步行距離。</p></div><span class="badge badge-low">已核准</span></article>
        <article class="learning-item"><span class="learning-icon">${icon('shield')}</span><div><h3>提早入住一律先查清潔進度</h3><p>移除「應該可以」，改成先詢問 helper。</p></div><span class="badge badge-low">已核准</span></article>
        <article class="learning-item"><span class="learning-icon">${icon('book')}</span><div><h3>Breeze Room Wi-Fi 出現衝突</h3><p>兩筆歷史名稱不同，暫停使用直到 Lydia 確認。</p></div><span class="badge badge-medium">待確認</span></article>
      </div></section>
      <section class="panel"><div class="panel-header"><div><h2>回覆品質指標</h2><p>示範資料；正式版從實際審核事件計算</p></div></div><div class="insight-summary"><div class="insight-number"><strong>86%</strong><span>草稿直接核准率</span></div><div class="insight-number"><strong>11%</strong><span>人工修改後核准</span></div><div class="insight-number"><strong>3%</strong><span>完全重寫</span></div></div></section>
      <section class="panel"><div class="panel-header"><div><h2>下一步優化</h2><p>依目前資料缺口排序</p></div></div><div class="learning-card"><article class="learning-item"><span class="learning-icon">${icon('spark')}</span><div><h3>二次分類 968 則 other</h3><p>找出 Lydia 真正最常處理、目前規則尚未辨識的主題。</p></div><span class="badge badge-blue">建議</span></article><article class="learning-item"><span class="learning-icon">${icon('home')}</span><div><h3>合併同一房源名稱變體</h3><p>避免把舊刊登名稱誤當成不同房源。</p></div><span class="badge badge-blue">建議</span></article></div></section>
    </div>
  </section>`;
}

const renderers = { overview: renderOverview, inbox: renderInbox, persona: renderPersona, rules: renderRules, knowledge: renderKnowledge, insights: renderInsights };

function render() {
  main.innerHTML = renderers[state.view]();
  document.querySelector('#page-title').textContent = viewTitles[state.view];
  document.querySelectorAll('.nav-item').forEach((item) => item.classList.toggle('is-active', item.dataset.view === state.view));
  hydrateIcons(main);
  bindViewEvents();
  window.scrollTo({ top: 0, behavior: 'instant' });
}

function goToView(view) {
  if (!renderers[view]) return;
  state.view = view;
  render();
  closeMobileMenu();
  history.replaceState(null, '', `#${view}`);
  main.focus({ preventScroll: true });
}

function toast(title, message) {
  const region = document.querySelector('#toast-region');
  const node = document.createElement('div');
  node.className = 'toast';
  node.innerHTML = `${icon('check')}<div><strong>${title}</strong><p>${message}</p></div><button type="button" aria-label="關閉">${icon('close')}</button>`;
  node.querySelector('button').addEventListener('click', () => node.remove());
  region.appendChild(node);
  window.setTimeout(() => node.remove(), 4500);
}

function bindViewEvents() {
  main.querySelectorAll('[data-view-jump]').forEach((button) => button.addEventListener('click', () => goToView(button.dataset.viewJump)));
  main.querySelectorAll('[data-open-conversation]').forEach((row) => {
    const open = () => { state.selectedConversation = row.dataset.openConversation; goToView('inbox'); };
    row.addEventListener('click', open);
    row.addEventListener('keydown', (event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); open(); } });
  });
  main.querySelectorAll('[data-conversation]').forEach((button) => button.addEventListener('click', () => { state.selectedConversation = button.dataset.conversation; render(); }));
  const conversationSearch = main.querySelector('#conversation-search');
  conversationSearch?.addEventListener('input', () => {
    const query = conversationSearch.value.trim().toLowerCase();
    main.querySelectorAll('.conversation-item').forEach((item) => { item.hidden = !item.textContent.toLowerCase().includes(query); });
  });
  main.querySelectorAll('.filter-chip').forEach((chip) => chip.addEventListener('click', () => { chip.parentElement.querySelectorAll('.filter-chip').forEach((x) => x.classList.remove('is-active')); chip.classList.add('is-active'); }));
  main.querySelector('[data-action="toggle-evidence"]')?.addEventListener('click', (event) => event.currentTarget.parentElement.classList.toggle('is-open'));
  main.querySelector('[data-action="copy"]')?.addEventListener('click', async () => {
    const text = main.querySelector('#draft-editor').value;
    try { await navigator.clipboard.writeText(text); toast('已複製回覆', '可貼到人工審核流程；本原型不會連接 Airbnb。'); }
    catch { toast('回覆已選取', '瀏覽器不允許存取剪貼簿，請手動複製。'); main.querySelector('#draft-editor').select(); }
  });
  main.querySelector('[data-action="approve"]')?.addEventListener('click', (event) => {
    const id = event.currentTarget.dataset.conversationId;
    const item = conversations.find((c) => c.id === id);
    state.resolved.add(id);
    localStorage.setItem('lydia-demo-resolved', JSON.stringify([...state.resolved]));
    toast(item.risk === 'high' ? '已轉交 Lydia' : '已核准示範草稿', item.risk === 'high' ? '這則涉及高風險決策，不會由 AI 自動傳送。' : '沒有傳送真實訊息；只更新本機示範狀態。');
    event.currentTarget.disabled = true;
    event.currentTarget.textContent = item.risk === 'high' ? '已轉交' : '已核准';
  });
  main.querySelector('[data-action="regenerate"]')?.addEventListener('click', () => toast('已重新檢查', '示範版保留原草稿；正式版會記錄每次提示、來源與版本。'));
  main.querySelector('[data-action="manual-send"]')?.addEventListener('click', () => toast('示範模式未傳送', '正式串接前，這個按鈕只展示互動狀態。'));
  main.querySelectorAll('[data-persona-group]').forEach((group) => group.querySelectorAll('.segment').forEach((segment) => segment.addEventListener('click', () => {
    group.querySelectorAll('.segment').forEach((x) => x.classList.remove('is-active'));
    segment.classList.add('is-active');
    state.persona[group.dataset.personaGroup] = segment.dataset.personaValue;
  })));
  const emojiRange = main.querySelector('#emoji-range');
  emojiRange?.addEventListener('input', () => {
    state.persona.emoji = Number(emojiRange.value);
    emojiRange.nextElementSibling.textContent = `${emojiRange.value}%`;
    main.querySelector('#persona-preview').textContent = `Hi! This condo has one assigned parking space. Your second car may use the marked guest parking spaces nearby${state.persona.emoji > 10 ? ' :)' : '.'}`;
  });
  main.querySelector('[data-action="save-persona"]')?.addEventListener('click', () => { localStorage.setItem('lydia-demo-persona', JSON.stringify(state.persona)); toast('Lydia 回覆方式已儲存', '設定已寫入這個瀏覽器的本機儲存。'); });
  main.querySelectorAll('[data-rule]').forEach((toggle) => toggle.addEventListener('click', () => {
    const next = toggle.getAttribute('aria-checked') !== 'true';
    toggle.setAttribute('aria-checked', String(next));
    state.rules[toggle.dataset.rule] = next;
  }));
  main.querySelector('[data-action="save-rules"]')?.addEventListener('click', () => { localStorage.setItem('lydia-demo-rules', JSON.stringify(state.rules)); toast('自動回覆規則已儲存', '本機示範設定已更新；未部署、未連接 Airbnb。'); });
  main.querySelector('[data-action="test-rules"]')?.addEventListener('click', () => toast('測試結果：轉人工', '「可以退清潔費嗎？」命中退款／補償規則，AI 不可自行承諾。'));
  const propertySearch = main.querySelector('#property-search');
  propertySearch?.addEventListener('input', () => {
    const query = propertySearch.value.trim().toLowerCase();
    main.querySelectorAll('.property-card').forEach((card) => { card.hidden = !card.dataset.propertyName.includes(query); });
  });
  main.querySelectorAll('[data-action="edit-property"]').forEach((button) => button.addEventListener('click', () => toast('房源資料編輯', `${button.dataset.property} 的完整編輯器會在下一階段接上持久化資料庫。`)));
  main.querySelector('[data-action="add-property"]')?.addEventListener('click', () => toast('新增房源資料', '目前是設計原型；正式版本會先要求房源與 Airbnb 刊登的對應關係。'));
}

function closeMobileMenu() {
  document.querySelector('#sidebar').classList.remove('is-open');
  document.querySelector('#mobile-scrim').hidden = true;
  document.querySelector('#menu-button').setAttribute('aria-expanded', 'false');
}

document.querySelectorAll('.nav-item').forEach((button) => button.addEventListener('click', () => goToView(button.dataset.view)));
document.querySelectorAll('[data-view-jump]').forEach((button) => button.addEventListener('click', () => goToView(button.dataset.viewJump)));
document.querySelector('[data-action="dismiss-banner"]').addEventListener('click', (event) => event.currentTarget.parentElement.remove());
document.querySelector('[data-action="profile"]').addEventListener('click', () => toast('Lydia 團隊', '角色與權限管理會在正式驗證登入後加入。'));
document.querySelector('#menu-button').addEventListener('click', () => {
  const sidebar = document.querySelector('#sidebar');
  const next = !sidebar.classList.contains('is-open');
  sidebar.classList.toggle('is-open', next);
  document.querySelector('#mobile-scrim').hidden = !next;
  document.querySelector('#menu-button').setAttribute('aria-expanded', String(next));
});
document.querySelector('#mobile-scrim').addEventListener('click', closeMobileMenu);

hydrateIcons();
const initialView = location.hash.replace('#', '');
if (renderers[initialView]) state.view = initialView;
render();

