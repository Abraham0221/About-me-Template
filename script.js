/* =====================================================================
   SCRIPT.JS — the "robot" that builds your page.

   It reads your info from my-info.js and puts it into index.html.
   You do NOT need to edit this file — but feel free to read it
   and see how it works!
   ===================================================================== */


/* ---------- ICONS (little drawings made with SVG code) ---------- */
const ICONS = {
  star:   '<polygon points="12 2 15 9 22 9.5 16.5 14 18.5 21 12 17 5.5 21 7.5 14 2 9.5 9 9"/>',
  person: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-7 8-7s8 3 8 7"/>',
  heart:  '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z"/>',
  bulb:   '<path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7V16h8v-1.3A7 7 0 0 0 12 2z"/>',
  food:   '<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7"/>',
  color:  '<circle cx="13.5" cy="6.5" r="1"/><circle cx="17.5" cy="10.5" r="1"/><circle cx="8.5" cy="7.5" r="1"/><circle cx="6.5" cy="12.5" r="1"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.9 0 1.6-.7 1.6-1.7 0-.4-.2-.8-.4-1.1-.3-.3-.4-.7-.4-1.1 0-.9.7-1.7 1.7-1.7h2c3 0 5.5-2.5 5.5-5.6C22 6 17.5 2 12 2z"/>',
  art:    '<path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.6 7.6"/><circle cx="11" cy="11" r="2"/>',
  animal: '<circle cx="5" cy="10" r="2"/><circle cx="9" cy="5" r="2"/><circle cx="15" cy="5" r="2"/><circle cx="19" cy="10" r="2"/><path d="M12 11c-3 0-6 4-6 7 0 2 1.5 3 3 3 1.2 0 2-.6 3-.6s1.8.6 3 .6c1.5 0 3-1 3-3 0-3-3-7-6-7z"/>',
  school: '<path d="M22 10 12 5 2 10l10 5 10-5z"/><path d="M6 12v5c3 2 9 2 12 0v-5"/>',
  book:   '<path d="M2 4h6a4 4 0 0 1 4 4v13a3 3 0 0 0-3-3H2z"/><path d="M22 4h-6a4 4 0 0 0-4 4v13a3 3 0 0 1 3-3h7z"/>',
  movie:  '<rect x="2" y="6" width="20" height="14" rx="2"/><path d="m8 2 4 4 4-4"/>',
  music:  '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
  game:   '<rect x="2" y="7" width="20" height="11" rx="5"/><path d="M7 11v3M5.5 12.5h3"/><circle cx="16" cy="11.5" r="0.8"/><circle cx="18" cy="13.5" r="0.8"/>',
  sport:  '<circle cx="12" cy="12" r="10"/><path d="M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20M2 12h20"/>',
  camera: '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>',
  rocket: '<path d="M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2.1-.1-2.9a2.2 2.2 0 0 0-2.9-.1z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.9A12.9 12.9 0 0 1 22 2c0 2.7-.8 7.5-6 11a22.4 22.4 0 0 1-4 2z"/><path d="M9 12H4s.6-3 2-4c1.6-1.1 5 0 5 0"/><path d="M12 15v5s3-.6 4-2c1.1-1.6 0-5 0-5"/>',
};

// Turns an icon name into a drawing. size = how big, filled = solid or outline
function makeIcon(name, size = 26, filled = false) {
  const shape = ICONS[name] || ICONS.star; // unknown name? use a star
  const color = filled ? 'var(--pink)' : 'var(--ink)';
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24"
    fill="${filled ? color : 'none'}" stroke="${color}" stroke-width="2.5"
    stroke-linecap="round" stroke-linejoin="round">${shape}</svg>`;
}

// Colors used for the cards, in order (they repeat if you add more cards)
const CARD_COLORS = ['--orange', '--pink', '--green', '--blue', '--purple', '--red', '--teal', '--yellow'];
const FACT_TINTS  = ['#FFE0EE', '#D7F5F1', '#FFF0C2', '#E9E3FF', '#DCEBFF', '#E4F8D9'];


/* ---------- HELPERS ---------- */

// Put text inside the element with this id
function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

// Make a list of chips (word bubbles) inside the element with this id
function makeChips(id, words) {
  const box = document.getElementById(id);
  box.innerHTML = '';
  (words || []).forEach(word => {
    const chip = document.createElement('span');
    chip.className = 'chip';
    chip.textContent = word;
    box.appendChild(chip);
  });
}


/* ---------- BUILD THE PAGE ---------- */
function buildPage(info) {
  // Browser tab title
  document.title = `All About ${info.name}`;

  // Favorite color → used for the name highlight and Color card
  document.documentElement.style.setProperty('--fav', info.favoriteColor);

  // Names and header
  setText('nav-name', info.name);
  setText('hero-name', info.name);
  setText('footer-name', info.name);
  setText('nickname', info.nickname);
  setText('grade', info.grade);
  setText('school', info.school);
  setText('i-love', info.iLove);

  // Photo (or the camera placeholder)
  const photoBox = document.getElementById('photo-circle');
  if (info.photo) {
    const img = document.createElement('img');
    img.src = info.photo;
    img.alt = `Photo of ${info.name}`;
    photoBox.appendChild(img);
  } else {
    photoBox.innerHTML = makeIcon('camera', 64) +
      '<span>Add your photo<br>in my-info.js</span>';
  }

  // About Me paragraphs
  const aboutBox = document.getElementById('about-text');
  (info.aboutMe || []).forEach(paragraph => {
    const p = document.createElement('p');
    p.textContent = paragraph;
    aboutBox.appendChild(p);
  });

  // 3 words, quick facts
  makeChips('three-words', info.threeWords);
  const wordColors = ['var(--yellow)', 'var(--pink)', 'var(--green)', 'var(--teal)', 'var(--orange)'];
  document.querySelectorAll('#three-words .chip').forEach((chip, i) => {
    chip.style.background = wordColors[i % wordColors.length];
  });
  setText('birthday', info.birthdayMonth);
  setText('hometown', info.hometown);
  setText('languages', info.languages);

  // Favorite things cards
  const favGrid = document.getElementById('fav-grid');
  (info.favorites || []).forEach((fav, i) => {
    const card = document.createElement('div');
    card.className = 'card fav-card';
    // The "color" card uses YOUR favorite color, others take turns
    const color = fav.icon === 'color' ? 'var(--fav)' : `var(${CARD_COLORS[i % CARD_COLORS.length]})`;
    card.style.setProperty('--card-color', color);

    card.innerHTML = `
      <span class="fav-icon">${makeIcon(fav.icon)}</span>
      <span class="fav-label"></span>
      <span class="fav-answer"></span>
      <span class="fav-because"></span>`;
    card.querySelector('.fav-label').textContent = fav.label;
    card.querySelector('.fav-answer').textContent = fav.answer;
    card.querySelector('.fav-because').textContent = fav.because ? `Because ${fav.because}` : '';
    favGrid.appendChild(card);
  });

  // Fun facts cards (numbered 01, 02, 03...)
  const factsGrid = document.getElementById('facts-grid');
  (info.funFacts || []).forEach((fact, i) => {
    const card = document.createElement('div');
    card.className = 'card fact-card';
    card.style.background = FACT_TINTS[i % FACT_TINTS.length];
    const num = String(i + 1).padStart(2, '0');
    card.innerHTML = `<span class="fact-num">${num}</span><p></p>`;
    card.querySelector('p').textContent = fact;
    factsGrid.appendChild(card);
  });

  // Skills
  makeChips('good-at', info.goodAt);
  makeChips('want-to-learn', info.wantToLearn);

  // Dream job
  setText('dream-job', info.dreamJob);
  setText('dream-reason', info.dreamReason);

  // Fill in the little icons marked with data-icon="..." in index.html
  document.querySelectorAll('[data-icon]').forEach(el => {
    const name = el.dataset.icon;
    if (name === 'heartFilled') el.innerHTML = makeIcon('heart', 20, true);
    else if (name === 'rocket') el.innerHTML = makeIcon('rocket', 84);
    else el.innerHTML = makeIcon(name, el.classList.contains('logo-badge') ? 22 : 26);
  });
}


/* ---------- START! ---------- */
if (typeof myInfo === 'undefined') {
  // my-info.js has a typo, so it couldn't load. Show a friendly message.
  document.body.insertAdjacentHTML('afterbegin',
    '<div style="background:#FF5A5F;color:#fff;padding:16px 24px;font-weight:800;font-size:18px">' +
    'Oops! Something in my-info.js has a typo. Check for a missing quote mark " , comma , or bracket ] }' +
    '</div>');
} else {
  buildPage(myInfo);
}
