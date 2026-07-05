const slides = [
  {
    name: "raiden shogun",
    desc: "The Electro Archon who rules over Inazuma with an iron fist, pursuing her ideal of Eternity.",
    img: "pics/raiden.png",
    video: "ydPqFAEgHzs",
    art1: "pics/raif2.jpg",
    art2: "pics/raif3.jpg",
    chibi1: "pics/r1.png",
    chibi2: "pics/r2.png",
    info: [
        { icon: "pics/electro.png", title: "Electro Character", desc: "Wields the power of lightning" },
        { icon: "pics/inazuma.png", title: "Inazuma", desc: "Nation of Eternity" },
        { icon: "pics/cons.png", title: "Constellation", desc: "Imperatrix Umbrosa" }
      ],
    colors: {
        primary: "#6A529E",
        primaryDark: "#523A83",
        secondary: "#A38EC6",
        secondaryLight: "#C4B1DE",
        light: "#DCCAE7",
        lighter: "#E4D5EC",
        textDark: "#3D2A5C",
        bg: "#F0EBF5"
      },
    search: [
      "Raiden Shogun build",
      "Raiden Shogun wallpaper",
      "Raiden Shogun best teams",
      "Raiden Shogun weapons"
    ]   
  },
  {
    name: "xiao",
    desc: "Xiao is a fiercely stoic and deadly Anemo Polearm user, an immortal Adeptus and the last surviving Yaksha who endlessly battles ancient demonic spirits to protect Liyue",
    img: "pics2/xiaoo.png",
    video: "bBTGFtLXsTo",
    art1: "pics2/ar1.jpg",
    art2: "pics2/ar2.jpg",
    chibi1: "pics2/c1.png",
    chibi2: "pics2/c2.png",
    info: [
        { icon: "pics2/anemo.png", title: "Anemo Character", desc: "Wields the power of wind" },
        { icon: "pics2/liyuu.png", title: "Liyue", desc: "Harbor of Contracts" },
        { icon: "pics2/cons.png", title: "Constellation", desc: "Alatus Nemeseos" }
      ],
    colors: {
        primary: "#2D6A6A",
        primaryDark: "#1E4D4D",
        secondary: "#5BA3A3",
        secondaryLight: "#8EC5C5",
        light: "#C2E0E0",
        lighter: "#DFF0F0",
        textDark: "#1A3D3D",
        bg: "#EDF5F5"
      },
    search: [
      "Xiao build",
      "Xiao wallpaper",
      "Xiao best teams",
      "Xiao weapons"
    ]
  },
  {
    name: "childe",
    desc: "Childe (Tartaglia) is a thrill-seeking, dual-wielding Hydro fighter and the youngest member of the Eleven Fatui Harbingers, who lives for the thrill of the battlefield while remaining deeply devoted to his family.",
    img: "pics3/childe.png",
    video: "ZF4KyX0ASnI",
    art1: "pics3/ar1.jpg",
    art2: "pics3/ar2.jpg",
    chibi1: "pics3/c1.png",
    chibi2: "pics3/c2.png",
    info: [
        { icon: "pics3/hydro.png", title: "Hydro Character", desc: "Wields the power of water" },
        { icon: "pics3/liyuu.png", title: "Snezhnaya", desc: "Nation of Ice" },
        { icon: "pics3/skill.png", title: "Constellation", desc: "Pilgrim" }
      ],
      colors: {
        primary: "#2E5BA3",
        primaryDark: "#1E3D6E",
        secondary: "#5C8EE8",
        secondaryLight: "#8AB0F0",
        light: "#C0D8F8",
        lighter: "#DEEAFD",
        textDark: "#142D5C",
        bg: "#EEF3FF"
      },
    search: [
      "Childe build",
      "Childe wallpaper",
      "Childe best teams",
      "Childe weapons"
    ]
  },
  {
    name: "yoimiya",
    desc: "Yoimiya is a playable Pyro character in Genshin Impact. She is currently the owner of Naganohara fireworks. Yoimiya has a very outgoing personality, making her loved by many.",
    img: "pics4/yoimiya.png",
    video: "AtqToYEE5r4",
    art1: "pics4/ar1.jpg",
    art2: "pics4/ar2.jpg",
    chibi1: "pics4/c1.png",
    chibi2: "pics4/c2.png",
    info: [
        { icon: "pics4/pyro.png", title: "Pyro Character", desc: "Wields the power of fire" },
        { icon: "pics4/inazuma.png", title: "Inazuma", desc: "Nation of Eternity" },
        { icon: "pics4/skill.png", title: "Constellation", desc: "Trulla Cementarii" }
      ],
      colors: {
        primary: "#C4652E",
        primaryDark: "#9A4E23",
        secondary: "#E8955C",
        secondaryLight: "#F0B88A",
        light: "#F8D9C0",
        lighter: "#FCEADE",
        textDark: "#5C2E14",
        bg: "#FFF5EE"
      },
      search: [
        "Yoimiya build",
        "Yoimiya wallpaper",
        "Yoimiya best teams",
        "Yoimiya weapons"
      ]
  }
];

let current = 0;
function changeSlide(direction){
  document.querySelector('.dot.active').classList.remove('active');
  current += direction;
  if (current > slides.length -1 ) current = 0;
  if (current < 0) current = slides.length -1
  const slide = slides[current];
  document.getElementById('banner-track').style.transform = `translateX(-${current * 100}%)`;
  
  const grid = document.querySelector('.content-grid');
  grid.classList.add('updating')
  document.querySelectorAll('.col').forEach(c => c.classList.remove('revealed'));

  // document.getElementById('char-name').textContent = slide.name;
  // document.getElementById('char-desc').textContent = slide.desc;
  // document.getElementById('banner-img').src = slide.img;
  setTimeout(() => {
  // document.getElementById('ghost-img').src = slide.img;
  const ghost = document.getElementById('ghost-img');
  ghost.classList.add('fading')
  setTimeout(() => {
    ghost.src = slide.img;
    ghost.classList.remove('fading');
  }, 400);
  document.getElementById('art1').src = slide.art1;
  document.getElementById('art2').src = slide.art2;
  document.getElementById('chibi1').src = slide.chibi1;
  document.getElementById('chibi2').src = slide.chibi2;
  document.getElementById('search1').innerHTML = '<span>🔍</span> ' + slide.search[0];
  document.getElementById('search2').innerHTML = '<span>🔍</span> ' + slide.search[1];
  document.getElementById('search3').innerHTML = '<span>🔍</span> ' + slide.search[2];
  document.getElementById('search4').innerHTML = '<span>🔍</span> ' + slide.search[3];

  //info pills
  const infoStack = document.getElementById('info-stack');
  infoStack.innerHTML = slide.info.map( i => `
    <div class="info-pill">
      <div class="info-icon">
        <img src="${i.icon}" alt="">
      </div>
      <div class="info-text">
        <strong>
          ${i.title}
        </strong>
        <p>
          ${i.desc}
        </p>
      </div>
    </div>
  `).join('')

  grid.classList.remove('updating');
  document.querySelectorAll('.col').forEach((col, index) => {
  setTimeout(() => {
    col.classList.add('revealed');
  }, index * 100);
  });
  }, 250)

  const r = document.documentElement;
  const c = slide.colors;
  r.style.setProperty('--primary', c.primary);
  r.style.setProperty('--primary-dark', c.primaryDark);
  r.style.setProperty('--secondary', c.secondary);
  r.style.setProperty('--secondary-light', c.secondaryLight);
  r.style.setProperty('--light', c.light);
  r.style.setProperty('--lighter', c.lighter);
  r.style.setProperty('--text-dark', c.textDark);
  r.style.setProperty('--bg', c.bg);

  document.querySelector(`[data-dot="${current}"]`).classList.add('active');
} 

function buildBanners() {
  const track = document.getElementById('banner-track');
  track.innerHTML = slides.map(slide => `
    <div class="banner">
      <div class="banner-doodle doodle-1"></div>
      <div class="banner-doodle doodle-2"></div>
      <div class="banner-doodle doodle-3"></div>
      <div class="banner-doodle doodle-4"></div>
      <div class="banner-text">
        <div class="game-logo"><img src="pics/logo.png" alt="logo"></div>
        <h1>${slide.name}</h1>
        <p>${slide.desc}</p>
        <a href="javascript:void(0)" class="read-more" onclick="openModal('${slide.name}', '${slide.desc}', '${slide.img}', '${slide.video || ''}')">Read More</a>
      </div>
      <div class="banner-image"><img src="${slide.img}" alt="${slide.name}"></div>
    </div>
  `).join('');
}

buildBanners();

function moveSlider(link) {
  const slider = document.querySelector('.nav-slider');
  const navCenter = document.querySelector('.nav-center');
  const navRect = navCenter.getBoundingClientRect();
  const linkRect = link.getBoundingClientRect();
  slider.style.left = (linkRect.left - navRect.left) + 'px';
  slider.style.width = linkRect.width + 'px';
}

const navLinks = document.querySelectorAll('.nav-center a');
navLinks.forEach(link => {
  link.addEventListener('mouseenter', () => moveSlider(link));
  link.addEventListener('mouseleave', () => {
    const active = document.querySelector('.nav-center a.active');
    moveSlider(active);
  });
});

moveSlider(document.querySelector('.nav-center a.active'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('revealed');
      }, index * 150);
    } else {
      entry.target.classList.remove('revealed');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.col').forEach(col => {
  observer.observe(col);
});

document.querySelectorAll('.art-thumb').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    card.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = `perspective(500px) rotateX(0) rotateY(0)`;
  });
});

function createParticles() {
  const body = document.body;
  for (let i = 0; i < 60; i++) {
    const p = document.createElement('div');
    p.classList.add('particle');
    p.style.left = Math.random() * 100 + 'vw';
    p.style.width = (Math.random() * 4 + 2) + 'px';
    p.style.height = p.style.width;
    p.style.animationDuration = (Math.random() * 8 + 6) + 's';
    p.style.animationDelay = (Math.random() * 10) + 's';
    p.style.bottom = '-10px';
    body.appendChild(p);
  }
}

createParticles();

function openModal(title, text, img, video) {
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-text').textContent = text;
  document.getElementById('modal-img').src = img;
  if (video) {
    document.getElementById('modal-video').innerHTML = '<iframe src="https://www.youtube.com/embed/' + video + '" allowfullscreen></iframe>';
  } else {
    document.getElementById('modal-video').innerHTML = '';
  }
  document.getElementById('modal').classList.add('open');
}

function closeModal() {
  document.getElementById('modal').classList.remove('open');
  document.getElementById('modal-video').innerHTML = '';
  
}

function openGallery() {
  const slide = slides[current];
  document.getElementById('gallery-title').textContent = slide.name + 'Artwork';
  document.getElementById('gallery-grid').innerHTML =
    '<img src="' + slide.art1 + '" alt= "" >' +
    '<img src="' + slide.art2 + '" alt= "" >' +
    '<img src="' + slide.art1 + '" alt= "" >' +
    '<img src="' + slide.art2 + '" alt= "" >';
  document.getElementById('gallery-modal').classList.add('open')
}

function closeGallery() {
  document.getElementById('gallery-modal').classList.remove('open');
}

document.getElementById('modal').addEventListener('click', (e) => {
  if (e.target === document.getElementById('modal')) {
    closeModal();
  }
})

document.getElementById('gallery-modal').addEventListener('click', (e) => {
  if (e.target === document.getElementById('gallery-modal')) {
    closeGallery();
  }
});

/*easter egg*/
var clickCount = 0;
var clickTimer = null;

function tripleClick() {
  if (current !== 0 && current !== 3) return;
  clickCount++;
  clearTimeout(clickTimer);
  clickTimer = setTimeout(() => { clickCount = 0; }, 500);
  if (clickCount >= 3) {
    const egg = document.getElementById('easter-egg');
    if (current === 0) egg.querySelector('img').src = 'pics/secret/pip.jfif';
    if (current === 3) egg.querySelector('img').src = 'pics4/secret/yoife.jfif';
    egg.classList.toggle('show');
    clickCount = 0;
  }
}