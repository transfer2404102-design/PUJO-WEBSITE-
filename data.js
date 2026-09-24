/* ============================================================
   SHARED DATA — used by index.html (homepage preview) AND by
   temples-all.html / updates-all.html / gallery-all.html
   (the "See More" full-list pages).

   Add new entries here and they will automatically show up on
   BOTH the homepage preview and the relevant "See More" page.
   ============================================================ */

/* ---------- Temples ---------- */
const temples = [
  {loc:'সীতাকুণ্ড, চট্টগ্রাম', name:'চন্দ্রনাথ মন্দির',
    img:'https://lh3.googleusercontent.com/place-photos/AG9NLjC-buhmvHhx4UK9-18W7RgVjQVhk8lgvHaznRwJ9aUS3vGwVb3CVuTWK96yVFBv1z7f9x3YIvS5k6wNk7e8kl8SjBnABBg4P2OFVYULyYrrN7xQAP72ES0uLBoxpng4LEIAXYavP0Kr-DFKoxnYtggQdQ=s4800-w800-h600',
    desc:'Sri Sri Chandranath Temple sits atop Chandranath Hill in Sitakunda and is widely regarded as one of the 51 Shakti Peethas, where the Shiva form "Chandrashekhar" is worshipped. Verified via Google Places (4.7★, 50 reviews).',
    note:'Photo: Khandokar Abdullah via Google Maps · founding-year details still need a citation'},
  {loc:'চাটগাঁইশ্বরী রোড, চট্টগ্রাম', name:'চাটেশ্বরী কালী মন্দির',
    img:'https://lh3.googleusercontent.com/place-photos/AG9NLjCS8fFycDolW6T9Z7HlrQ1s5r5TMuucfCyUvbwp7el-V7jdzPyRnn6M1l4dnb8I6Hs1bnzr2JIG_SZLxoKhHzijjM7-4h8ZkuAut1kFGamOLj9g3KHixnkk5bDtjCjFu21fARby4qTtxgGImg=s4800-w800-h600',
    desc:'Sree Sree Chatteshwari Kali Temple is one of the oldest temples in the city and is counted among the Shakti Peeths in Bangladesh. Rebuilt after damage during the Liberation War, per public reviews. Verified via Google Places (4.4★, 968 reviews).',
    note:'Photo: Tonmoy Chakraborty via Google Maps · pre-war founding date needs a primary-source citation'},
  {loc:'ও.আর. নিজাম রোড, চট্টগ্রাম', name:'গোলপাহাড় মহাশ্মশান কালী মন্দির',
    img:'https://lh3.googleusercontent.com/place-photos/AG9NLjAhGbJDHvQRZmFEkgCFze-umsdg9k9ZsEBD-fkfGMMOYSEYYRi0kpFnowkwDCLBQgyYU9nNV9U_M7mZr9E3zz7o6ErnXTx1G7Jd00ebEjasI7erZk9HQbHNuwJcec2cvROBFVx0XSAvj6yd=s4800-w800-h600',
    desc:'Golpahar Mohashoshan Kali Temple is a well-known Kali temple complex near GEC Circle, with shrines to Maa Kali, Shiva and Radha-Krishna, active for major festivals including Shyama Puja. Verified via Google Places (4.6★, 316 reviews).',
    note:'Photo: Aditta Roy via Google Maps · founding history needs a primary-source citation'},
  {loc:'শান্তিরহাট, চট্টগ্রাম', name:'আদি জগন্নাথ মন্দির', img:'',
    desc:'Old Jagannath Temple ("আদি জগন্নাথ মন্দির") is a historic Jagannath temple at Jagannath Bari, Shantirhat, Chattogram. Verified name and location via Google Places — no public photo available yet, and detailed history still needs a citation.',
    note:'No photo available yet · history pending citation from verified archive'},
  {loc:'প্রবর্তক সার্কেল, চট্টগ্রাম', name:'ইসকন প্রবর্তক শ্রীকৃষ্ণ মন্দির',
    img:'https://lh3.googleusercontent.com/place-photos/AG9NLjA4sFDAEk8bZ1JE_CVqSnTuN4DCXVK_BaQFlHq5nvIbAfucdcFCTqQIF2Gb7tWX669bjphxELsDN5eLl4Rs1iJZjiF69M__hJAIWINCNpxQ1txkpP2-wLJSqtEWuhhXfT0gl22O2DaHipgVWw=s4800-w720-h556',
    desc:'ISKCON Prabartak Sri Krishna Mandir sits atop Prabartak Hill, built with white marble, and is known for its evening Aarti and Govinda\'s vegetarian restaurant. One of Bangladesh\'s most-reviewed temples. Verified via Google Places (4.7★, 1,386 reviews).',
    note:'Photo: Tipu Das via Google Maps · founding-year details still need a citation'},
  {loc:'কৈবল্যধাম রোড, চট্টগ্রাম', name:'শ্রী শ্রী কৈবল্যধাম',
    img:'https://lh3.googleusercontent.com/grass-cs/ACvplmNvptGvR7zJ8JHtaeOq0ookndkCr-2tItxaDkj5cDLlAyMpCYRCdhybRCaZfRvdnSuCtThdLMXc1OaUuSQcPx3ZTO1McyKpI01Y6cTZdtDmUPjoEE6-qdIeoDFv50LG5dVYGg7qfauTmkE=s4800-w800-h600',
    desc:'Sri Sri Kaibalyadham, also known locally as the Ram Thakur Ashram, is a large hilltop temple complex offering daily prayers, prasad, and devotee accommodation. Verified via Google Places (4.5★, 802 reviews).',
    note:'Photo: Kajol Nath via Google Maps · founding-year details still need a citation'},
];

const TEMPLE_TIMELINE = `<div class="timeline-strip"><span>প্রতিষ্ঠা</span><span class="dot"></span><span>পরিবর্তন</span><span class="dot"></span><span>বিস্তার</span><span class="dot"></span><span>বর্তমান</span></div>`;

function renderTempleCardHTML(t){
  const art = t.img
    ? `<img src="${t.img}" alt="${t.name}" loading="lazy" style="width:100%;height:100%;object-fit:cover;">`
    : `<svg class="silhouette" viewBox="0 0 400 200" preserveAspectRatio="xMidYMax slice" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="sky2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#2a160f"/><stop offset="100%" stop-color="#0e0805"/></linearGradient></defs>
        <rect width="400" height="200" fill="url(#sky2)"/><circle cx="90" cy="45" r="20" fill="#c85a3a" opacity="0.4"/>
        <rect x="150" y="90" width="100" height="80" fill="#0a0503" opacity="0.9"/><polygon points="200,50 230,90 170,90" fill="#0a0503" opacity="0.9"/>
        <rect x="185" y="120" width="30" height="50" fill="#1f130d"/></svg>`;
  return `<div class="temple-card glass">
      <div class="temple-art">${art}</div>
      <div class="temple-body">
        <div class="loc">${t.loc}</div>
        <h3>${t.name}</h3>
        <p>${t.desc}</p>
        ${TEMPLE_TIMELINE}
        <div class="source-note">${t.note}</div>
      </div>
    </div>`;
}

/* ---------- Puja Updates ---------- */
const updates = [
  {cat:'Community', title:'Pilkhana Puja Udayan Parishad — one of Chattogram\'s active community puja councils', loc:'Pilkhana', date:'Sample entry', img:'https://lh3.googleusercontent.com/place-photos/AG9NLjDoZO9QsjYCKtmYaYLjVdUtGBaEXG9JjuxMDGaB5l8txonPxhcGb8nKCajRSuF4vbR5EFWukYQZWOlJFOMHJ8dtS79Twn55bmO44c85-45_Tq1TsIJjZvY-Op2VQMlEBKHi8FGWFSEHqg2IEbc=s4800-w800-h600', credit:'Santu Das'},
  {cat:'Temple Life', title:'Ramakrishna Mission Sevashrama continues its daily prayer and community programs', loc:'Chattogram', date:'Sample entry', img:'https://lh3.googleusercontent.com/place-photos/AG9NLjBzLKeO-Ifyn_k65DqTNGqzN6MDeEYlhCbIhho5GK_4pjVWJHcOa5cg_xLwTlaJlyCj5qb0n0xaJgnr94sEY5OxxoMwa_HlLKfIJu1t19_6H_vyVyAfmwajuPb5fx9VFOorDoeGDuG_HFgcJQ=s4800-w800-h600', credit:'Pranta Das Tibra'},
  {cat:'Puja Mondop', title:'Goshaildanga Chowdhury Bari — a long-running family puja mondop in the city', loc:'Chattogram', date:'Sample entry', img:'https://lh3.googleusercontent.com/place-photos/AG9NLjArqNK0eHtdRIK9jBUaHlfdw9qj1Jf3c_H5r1spLx5VhZCk_YbrYKX_P-7hZlja3L3rMFeNRsjXgeV_Dld-aeErJ9MI6D4VDBzFsIZ7W7mCRkHPKWhTcQQLfTn4bMPFdDm4u9xfUTPDsF-wiA=s4800-w800-h600', credit:'Dipak Kumar'},
  {cat:'Temple Life', title:'ISKCON Prabartak Sri Krishna Mandir remains a major evening Aarti destination', loc:'Prabartak Circle', date:'Sample entry', img:'https://lh3.googleusercontent.com/place-photos/AG9NLjDkMoxmDIFEyRiVFWBRjo6seIOHC3nliv3oYQfy6HZFVsmaon4ezfW0_PTJLzAqJ2L5PZ8qT85-tqEhPxX6Xex9iCK3n8FxquCQJtaLWnpRSAKsOExDwP6sZvoHjbXWKPLrgCRbAdhdyMh3SkY=s4800-w720-h600', credit:'Suman Dutta'},
];
const uTones = ['#a8462b','#c9a24c','#7a3a24','#1f130d'];
function renderUpdateCardHTML(u,i){
  const art = u.img
    ? `<div class="update-art"><img src="${u.img}" alt="${u.cat}" loading="lazy" style="width:100%;height:100%;object-fit:cover;"><span class="update-cat">${u.cat}</span></div>`
    : `<div class="update-art" style="background:linear-gradient(150deg, ${uTones[i%uTones.length]}, #0a0705);"><span class="update-cat">${u.cat}</span></div>`;
  return `<div class="update-card glass">${art}
    <div class="update-body">
      <div class="update-meta"><span>${u.loc}</span><span>${u.date}${u.credit ? ' · Photo: '+u.credit : ''}</span></div>
      <h4>${u.title}</h4>
      <span class="update-read">Read More →</span>
    </div></div>`;
}

/* ---------- Pujography Gallery ----------
   HOW TO ADD REAL PHOTOS: paste a direct image URL into the `img` field
   below (e.g. a Wikimedia Commons file URL ending in .jpg/.png, or an
   Unsplash/Pexels direct image link). Leave img:'' to keep the placeholder
   gradient tile. Always keep `credit` filled in with the photographer/
   source name — real photography needs attribution. */
const photos = [
  {h:260, cap:'ISKCON Radha Madhava Mandir', loc:'Nandankanan, Chattogram', img:'https://lh3.googleusercontent.com/place-photos/AG9NLjA6zjj_W-fQhGikPUli7xFT6E8Wr41uRUHYs6MQt6DXTzGNcWlvO4YozkNQbeAmj5zNg06SUKHaAhLzKcUmOoupzcwb2jO5PtjzEK0GKmmQ15Cbz0StbsFH6b_0Y3nvvGiNwZ5QuuDWQfRFgw=s4800-w800-h600', credit:'Acyuta Anantananda'},
  {h:190, cap:'Goshaildanga Chowdhury Bari Puja Mondop', loc:'Chattogram', img:'https://lh3.googleusercontent.com/place-photos/AG9NLjByEd05J_4n1KFncPTdUi5tuvDw8U9Aogs3AEvr1DEFaSuYYRGhrgbRZ2KoBNkrQsuZu2EN-t2K0bAF6I8dbu9Bummna_SyH2Dp-Ekr5AHHuEikFu0rpLFsH_fYRkjz1U56mRILo6f7TMyMrr4=s4800-w800-h600', credit:'Shilpi D'},
  {h:230, cap:'ISKCON Prabartak Sri Krishna Mandir', loc:'Prabartak Circle', img:'https://lh3.googleusercontent.com/place-photos/AG9NLjBEZkd-evSfq5NcENUsK7KF8Udm4hJHUcdQfUnXyLZPLLwF9B6nD_ufSLeRgNo3kuFMNPUn72kO3zzUzwTchzcn0RaUioQ1LOZkdF-PHpq-Kj25quZNqEFo_xforTn8_-55optlw6do4gNZocY=s4800-w800-h600', credit:'Sumit Chowdhury'},
  {h:200, cap:'Pilkhana Puja Udayan Parishad', loc:'Pilkhana', img:'https://lh3.googleusercontent.com/place-photos/AG9NLjCCGu6deUs2iCZ40qF2h4OYOaasxyTrEZfNgKNP4kLUUjJsT6lFWyisZJ8iMHx-8kD5P7x8ADFHCnHJ3szWjcM9xv0z-3iJS8kyu1JrEMvzCN9uPz1o-hBZs01vmbXpW5VyEzjdABXpYNYz=s4800-w800-h600', credit:'Chamak Bhattacharjee Jony'},
  {h:270, cap:'Ramakrishna Mission Sevashrama', loc:'Chattogram', img:'https://lh3.googleusercontent.com/place-photos/AG9NLjDT3YmfOjtOBklNguzeU1x_4JOuoZ4W3SvPF1F1aGpqNqwLoP8ySd4OixA0-m6dUp3E9PyYupuE-vwPoYVgD4IGtwC8Sqz9JpSRwVvMY2JMwq7XXmmGJyCrG-rAwrqeRujVdKYgfmSMYyHcfp4=s4800-w800-h600', credit:'Raj Mallick'},
  {h:210, cap:'Sri Sri Kaibalyadham', loc:'Chattogram', img:'https://lh3.googleusercontent.com/grass-cs/ACvplmPeMa6KlRQwX_rVI17BN6EepEet7LeBPNcr_RpCK5kx-N9Mw4RFDA14RCRB98qAndomUSH_AV4kQEMZj4UHdZwR-E9oGJ85hReDJITvzwOM6eOvZe9abGaOrESbP0cBqQfw_37d=s4800-w800-h600', credit:'Kajol Nath'},
];
const tones = ['#a8462b','#c9a24c','#1f130d','#7a3a24'];
function renderPhotoTileHTML(p,i){
  const id = 'photo-'+i;
  const bg = p.img
    ? `<img class="ph" loading="lazy" src="${p.img}" alt="${p.cap}" style="height:${p.h}px; object-fit:cover;">`
    : `<div class="ph" style="height:${p.h}px; background:linear-gradient(160deg, ${tones[i%tones.length]}, #0a0705); display:flex; align-items:center; justify-content:center; color:var(--cream-dim); font-size:0.68rem; text-align:center; padding:10px;">Add a real photo URL<br>(see photos[] in data.js)</div>`;
  return `<div class="tile" data-id="${id}"${p.img?` data-src="${p.img}"`:''}>
    ${bg}<div class="cap"><strong>${p.cap}</strong><span>${p.loc}${p.credit ? ' · © '+p.credit : ''}</span></div>
    <div class="tile-foot">
      <button class="react-btn like-btn" data-id="${id}" aria-label="Like this photo"><i class="fa-regular fa-heart"></i><span class="like-count">0</span></button>
      <button class="react-btn comment-btn" data-id="${id}" aria-label="Comment on this photo"><i class="fa-regular fa-comment"></i><span class="comment-count">0</span></button>
    </div>
    <div class="comment-panel" id="cp-${id}" hidden>
      <div class="comment-list"></div>
      <form class="comment-form">
        <input type="text" name="name" placeholder="আপনার নাম" maxlength="40" required>
        <input type="text" name="text" placeholder="একটা মন্তব্য লিখুন..." maxlength="240" required>
        <button type="submit">Post</button>
      </form>
    </div>
  </div>`;
}

/* ---------- Pujography Contest Winners ----------
   HOW TO ANNOUNCE WINNERS: fill in name, title (caption of the winning
   photo) and cert (a direct image URL to the certificate). Leave cert
   empty to show a "coming soon" placeholder before results are out. */
const winners = [
  {rank:'🥇 প্রথম', name:'', title:'', cert:''},
  {rank:'🥈 দ্বিতীয়', name:'', title:'', cert:''},
  {rank:'🥉 তৃতীয়', name:'', title:'', cert:''},
];
function renderWinnerCardHTML(w){
  const certBlock = w.cert
    ? `<img src="${w.cert}" alt="Certificate" class="winner-cert-img">`
    : `<div class="winner-cert-placeholder">Certificate শীঘ্রই যুক্ত হবে</div>`;
  return `<div class="winner-card glass">
      <div class="winner-badge">${w.rank}</div>${certBlock}
      <div class="winner-info"><strong>${w.name || 'ঘোষণা শীঘ্রই'}</strong><span>${w.title || ''}</span></div>
    </div>`;
}

/* ---------- Puja Sounds ----------
   HOW TO ADD A REAL TRACK: upload the mp3 into a `sounds/` folder next
   to index.html and set `src` to that path (e.g. 'sounds/my-track.mp3'),
   or paste a direct hosted audio URL. */
const tracks = [
  {name:'Dhaker Taley', artist:'Traditional • Community Archive', dur:'3:12', src:'sounds/dhaker-taley.mp3', cat:'Dhak'},
  {name:'elo je Maa', artist:'Field Recording', dur:'4:00', src:'sounds/elo-je-maa.mp3', cat:'Traditional Songs'},
  {name:'Amar DUGGA', artist:'Temple Recording', dur:'3:45', src:'sounds/amar_dugga.mp3', cat:'Traditional Songs'},
  {name:'Sandhya Aarti', artist:'Traditional', dur:'9:00', src:'sounds/sandhya-aarti.mp3', cat:'Aarti'},
  {name:'Rupang Dehi', artist:'Traditional', dur:'4:30', src:'sounds/Rupang-Dehi.mp3', cat:'Aarti'},
  {name:'Chandi Path', artist:'Birendra Krishna Bhadra', dur:'30:15', src:'sounds/chandi-path.mp3', cat:'Chandi Path'},
];
function renderSoundRowHTML(t){
  return `<div class="sound-row"><div class="play">▶</div><div class="meta"><strong>${t.name}</strong><span>${t.artist}</span></div><div class="dur">${t.dur}</div></div>`;
}

/* ---------- Shared: photo reactions & comments (works on any page) ---------- */
function escapeHtml(str){
  return String(str).replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}
async function getReactions(id){
  try{
    const r = await window.storage.get('reactions:'+id, true);
    return r ? JSON.parse(r.value) : {likes:0, comments:[]};
  }catch(e){ return {likes:0, comments:[]}; }
}
async function saveReactions(id, data){
  try{ await window.storage.set('reactions:'+id, JSON.stringify(data), true); }catch(e){}
}
function renderReactionCounts(container, id, data){
  const tile = container.querySelector(`.tile[data-id="${id}"]`);
  if(!tile) return;
  tile.querySelector('.like-count').textContent = data.likes || 0;
  tile.querySelector('.comment-count').textContent = (data.comments||[]).length;
}
function renderComments(id, data){
  const list = document.querySelector(`#cp-${id} .comment-list`);
  if(!list) return;
  const comments = data.comments || [];
  list.innerHTML = comments.length
    ? comments.map(c=>`<div class="comment-item"><strong>${escapeHtml(c.name)}</strong><span>${escapeHtml(c.text)}</span></div>`).join('')
    : '<div class="comment-empty">প্রথম মন্তব্যটি আপনিই করুন।</div>';
}
function openLightbox(src){
  const box = document.createElement('div');
  box.style.cssText = 'position:fixed;inset:0;z-index:600;background:rgba(5,3,2,0.92);display:flex;align-items:center;justify-content:center;padding:24px;cursor:zoom-out;';
  box.innerHTML = `<img src="${src}" style="max-width:90vw;max-height:88vh;border-radius:10px;box-shadow:0 20px 60px rgba(0,0,0,0.6);">`;
  box.addEventListener('click', ()=> box.remove());
  document.body.appendChild(box);
}
/* Wires up like/comment/lightbox behaviour for a gallery container that
   was filled with renderPhotoTileHTML() tiles. Call once per page. */
function initGalleryInteractions(container, photoList){
  photoList.forEach((p,i)=>{
    const id = 'photo-'+i;
    getReactions(id).then(data=>{
      renderReactionCounts(container, id, data);
      renderComments(id, data);
      if(localStorage.getItem('liked:'+id)){
        const btn = container.querySelector(`.like-btn[data-id="${id}"]`);
        if(btn) btn.classList.add('liked');
      }
    });
  });
  container.addEventListener('click', async (e)=>{
    const likeBtn = e.target.closest('.like-btn');
    if(likeBtn){
      const id = likeBtn.dataset.id;
      const likedKey = 'liked:'+id;
      const data = await getReactions(id);
      if(localStorage.getItem(likedKey)){
        data.likes = Math.max(0, (data.likes||0)-1);
        localStorage.removeItem(likedKey);
        likeBtn.classList.remove('liked');
      } else {
        data.likes = (data.likes||0)+1;
        localStorage.setItem(likedKey,'1');
        likeBtn.classList.add('liked');
      }
      await saveReactions(id, data);
      renderReactionCounts(container, id, data);
      return;
    }
    const commentBtn = e.target.closest('.comment-btn');
    if(commentBtn){
      const panel = document.getElementById('cp-'+commentBtn.dataset.id);
      if(panel) panel.hidden = !panel.hidden;
      return;
    }
    if(e.target.closest('.tile-foot') || e.target.closest('.comment-panel')) return;
    const tile = e.target.closest('.tile');
    if(tile && tile.dataset.src) openLightbox(tile.dataset.src);
  });
  container.addEventListener('submit', async (e)=>{
    const form = e.target.closest('.comment-form');
    if(!form) return;
    e.preventDefault();
    const id = form.closest('.comment-panel').id.replace('cp-','');
    const fd = new FormData(form);
    const name = (fd.get('name')||'').toString().trim().slice(0,40);
    const text = (fd.get('text')||'').toString().trim().slice(0,240);
    if(!name || !text) return;
    const data = await getReactions(id);
    data.comments = data.comments || [];
    data.comments.push({name, text, ts: Date.now()});
    await saveReactions(id, data);
    renderReactionCounts(container, id, data);
    renderComments(id, data);
    form.reset();
  });
}
