/* ==========================================================================
   PORTFOLIO CONFIGURATION & DATA SOURCE
   Replace bracketed [TEXT] with your personal details and project data.
   ========================================================================== */

const OWNER = { 
  name: 'JOHN EARL P. CAMPOS', 
  email: 'firstname.lastname@gmail.com',
  title: '[PROFESSIONAL TITLE, e.g. Junior Full-Stack Developer]',
  lead: 'BSIT Graduate specialized in building high-performance, accessible, and secure digital applications. Ready for junior developer and engineering roles.',
  linkedin: 'https://www.linkedin.com/in/johnearl-campos-39a609385/?isSelfProfile=true',
  github: 'https://github.com/camposjohnearl-byte',
  portfolio: 'https://camposjohnearl-byte.github.io/campos_porfolio/contact.html'
};

// Category icon map for modern tech badges
const CAT_ICONS = {
  'All': 'bi-grid-fill',
  'Programming': 'bi-code-slash',
  'Web Development': 'bi-globe2',
  'Database': 'bi-database-fill',
  'Tools': 'bi-tools',
  'Networking': 'bi-hdd-network-fill',
  'Cybersecurity': 'bi-shield-lock-fill',
  'Data Analysis': 'bi-bar-chart-fill',
  'Cloud': 'bi-clouds-fill',
  'AI': 'bi-cpu-fill'
};

// level: Beginner | Intermediate | Advanced
const SKILLS = [
  { cat: 'Programming',     skill: '[SKILL]', level: 'Beginner', evidence: '[Project name or link]' },
  { cat: 'Web Development', skill: '[SKILL]', level: 'Beginner', evidence: '[Project name or link]' },
  { cat: 'Database',        skill: '[SKILL]', level: 'Beginner', evidence: '[Project name or link]' },
  { cat: 'Tools',           skill: '[SKILL]', level: 'Beginner', evidence: '[Project name or link]' },
  { cat: 'Networking',      skill: '[SKILL]', level: 'Beginner', evidence: '[Project name or link]' },
  { cat: 'Cybersecurity',   skill: '[SKILL]', level: 'Beginner', evidence: '[Project name or link]' },
  { cat: 'Data Analysis',   skill: '[SKILL]', level: 'Beginner', evidence: '[Project name or link]' },
  { cat: 'Cloud',           skill: '[SKILL]', level: 'Beginner', evidence: '[Project name or link]' },
  { cat: 'AI',              skill: '[SKILL]', level: 'Beginner', evidence: '[Project name or link]' }
];

const LEVELS = ['Beginner', 'Intermediate', 'Advanced'];
const CATEGORIES = ['All', 'Programming', 'Web Development', 'Database', 'Tools', 'Networking', 'Cybersecurity', 'Data Analysis', 'Cloud', 'AI'];

// README sections shown in the details modal (order matters)
const README = [
  'Overview', 'Problem Statement', 'Objectives', 'Target Users', 
  'Technologies', 'Features', 'Architecture', 'Database Design', 
  'Screenshots', 'Installation', 'How to Use', 'Testing', 
  'Limitations', 'Future Improvements', 'Developer'
];

// Any README key you leave out shows "[Add ...]" automatically.
const PROJECTS = [
  { 
    title: 'FUZZY WIRE SHOP', 
    type: 'Web E-Commerce Application (HTML, CSS, JS, PHP, MySQL)',
    overview: 'Full-featured web application designed to solve real-world workflows with responsive design, secure authentication, and AI assistance.', 
    tech: ['[Tech 1]', '[Tech 2]', 'Bootstrap 5', 'REST API'],
    features: ['Modern UI', 'Relational Database', 'CRUD Operations', 'Input Validation', 'Search & Filtering', 'Authentication & Authorization', 'Robust Error Handling'],
    live: '[LIVE DEMO URL]', 
    github: '[GITHUB REPO URL]', 
    docs: '[DOCUMENTATION URL]',
    readme: { 
      Overview: 'Interactive application delivering streamlined user flows and resilient architecture.', 
      Developer: '[Your name, section, contact]' 
    } 
  },
  { 
    title: '[PROJECT 2 TITLE]', 
    type: 'Data/Database Project (Excel/Sheets + SQL, charts, data interpretation)',
    overview: 'Comprehensive data pipeline and analytics dashboard transforming raw data into actionable visual insights and business metrics.', 
    tech: ['Excel/Sheets', 'SQL', 'Data Analytics', 'Chart.js'], 
    features: ['Dynamic Charts', 'Data Cleaning Pipeline', 'SQL Aggregations', 'Executive KPI Interpretation'],
    live: '[LINK]', 
    github: '[GITHUB REPO URL]', 
    docs: '[DOCUMENTATION URL]', 
    readme: {} 
  },
  { 
    title: '[PROJECT 3 TITLE]', 
    type: 'Specialization: [Web/Mobile/Cybersecurity/Networking/Data Analytics/AI/Cloud/IT Support]',
    overview: 'Specialized capstone project showcasing deep domain knowledge, modular design, and industry standard tooling.', 
    tech: ['[Tech 1]', 'Security Best Practices', 'Git Version Control'], 
    features: ['[Key Feature 1]', '[Key Feature 2]', 'Performance Optimization'],
    live: '[LINK]', 
    github: '[GITHUB REPO URL]', 
    docs: '[DOCUMENTATION URL]', 
    readme: {} 
  }
];

const CASES = [1, 2, 3, 4, 5].map(n => ({
  no: n, 
  problem: '[Problem ' + n + ': Brief description of system error or hardware malfunction]', 
  causes: '[Possible causes: network timeout, corrupted configuration, or invalid credentials]', 
  diagnosis: '[Diagnostic procedure: log analysis, port ping, and isolation testing]',
  solution: '[Solution: reconfigured parameters, implemented defensive guard clauses, and verified stability]', 
  lesson: '[Lesson learned: importance of detailed logging, unit tests, and rollback strategies]'
}));

const AI_LOG = [
  { 
    date: '2025-09-15', 
    task: 'Code Refactoring & Algorithm Optimization', 
    ai: 'Suggested async/await syntax and optimized SQL indexing patterns', 
    verify: 'Benchmarked runtime execution in browser dev tools; verified zero regression' 
  },
  { 
    date: '2025-10-02', 
    task: 'Security Vulnerability Audit', 
    ai: 'Identified potential SQL injection vulnerabilities in dynamic string queries', 
    verify: 'Implemented parameterized PDO/PreparedStatement queries; tested against OWASP payloads' 
  }
];

const CERTS = [
  { title: '[CERTIFICATE TITLE 1]', issuer: '[ISSUER, e.g. Cisco / AWS / Coursera]', date: '[DATE]', link: '[PROOF LINK]' },
  { title: '[CERTIFICATE TITLE 2]', issuer: '[ISSUER, e.g. CompTIA / freeCodeCamp]', date: '[DATE]', link: '[PROOF LINK]' },
  { title: '[ACADEMIC ACHIEVEMENT]', issuer: 'Datamex College of Saint Adeline', date: '[DATE]', link: '[PROOF LINK]' }
  { title: '[ACADEMIC ACHIEVEMENT]', issuer: 'Datamex College of Saint Adeline', date: '[DATE]', link: '[PROOF LINK]' }
  { title: '[ACADEMIC ACHIEVEMENT]', issuer: 'Datamex College of Saint Adeline', date: '[DATE]', link: '[PROOF LINK]' }
];

const REPOS = [
  { name: '[REPO 1 NAME]', desc: 'Core capstone web application featuring responsive front-end and secure backend architecture.', link: '[REPO URL]' },
  { name: '[REPO 2 NAME]', desc: 'Data analytics, query optimization, and visualization scripts utilizing SQL.', link: '[REPO URL]' },
  { name: '[REPO 3 NAME]', desc: 'Utilities, problem-solving algorithms, and cybersecurity lab exercises.', link: '[REPO URL]' }
];

/* ==========================================================================
   UI ENGINE & INTERACTIVE CONTROLLERS
   ========================================================================== */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

// Fill dynamic text, counters, and avatar fallback
function fillBasics() {
  $$('[data-name]').forEach(el => el.textContent = OWNER.name);
  if ($('#year')) $('#year').textContent = new Date().getFullYear();
  if ($('#hlSkills')) $('#hlSkills').textContent = SKILLS.length;
  if ($('#hlProjects')) $('#hlProjects').textContent = PROJECTS.length;
  
  const emailLink = $('#emailLink');
  if (emailLink) {
    emailLink.href = 'mailto:' + OWNER.email;
    emailLink.textContent = OWNER.email;
  }

  // Gracefully handle avatar image fallback so it never displays a broken icon
  const avatarImg = $('.photo img') || $('.avatar-img');
  if (avatarImg) {
    avatarImg.addEventListener('error', function() {
      // High-tech geometric SVG avatar
      const svgAvatar = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="320" height="320" viewBox="0 0 320 320"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%236366f1"/><stop offset="50%" stop-color="%238b5cf6"/><stop offset="100%" stop-color="%2306b6d4"/></linearGradient></defs><rect width="320" height="320" fill="%230f172a"/><circle cx="160" cy="120" r="56" fill="url(%23g)"/><path d="M70,260 C70,195 110,185 160,185 C210,185 250,195 250,260" fill="url(%23g)" opacity="0.85"/><circle cx="160" cy="120" r="48" fill="%231e293b"/><text x="160" y="130" font-family="system-ui,sans-serif" font-weight="bold" font-size="28" fill="%23ffffff" text-anchor="middle">IT</text></svg>`;
      this.src = svgAvatar;
    });
  }
}

// Skills: Filter tabs & Modern Cards
function renderSkills(cat = 'All') {
  const grid = $('#skillGrid');
  if (!grid) return;

  const filtered = SKILLS.filter(s => cat === 'All' || s.cat === cat);
  grid.innerHTML = filtered.map((s, idx) => {
    const levelIdx = Math.max(1, LEVELS.indexOf(s.level) + 1);
    const iconClass = CAT_ICONS[s.cat] || 'bi-code-square';
    const tagClass = idx % 2 === 0 ? 'tag' : 'tag tag-cyan';
    
    return `
      <article class="card skill-card">
        <div class="skill-card-top">
          <span class="${tagClass}"><i class="bi ${iconClass}"></i> ${s.cat}</span>
          <span class="lvl">${s.level}</span>
        </div>
        <h4 style="margin: 0.4rem 0 0.8rem; font-size: 1.15rem; color: #fff;">${s.skill}</h4>
        <div style="display: flex; align-items: center; justify-content: space-between;">
          <span style="font-size: 0.85rem; color: var(--text-muted);"><i class="bi bi-speedometer2"></i> Proficiency</span>
          <span class="meter" data-l="${levelIdx}" aria-label="Level ${s.level}">
            <i></i><i></i><i></i>
          </span>
        </div>
        <div class="evidence-box">
          <i class="bi bi-shield-check"></i>
          <div><strong style="color: #fff;">Evidence:</strong> <span>${s.evidence}</span></div>
        </div>
      </article>
    `;
  }).join('');
}

function renderFilters() {
  const container = $('#filters');
  if (!container) return;

  container.innerHTML = CATEGORIES.map((c, i) => {
    const icon = CAT_ICONS[c] || 'bi-tag';
    return `<button class="pill" aria-pressed="${i === 0}" data-cat="${c}"><i class="bi ${icon}"></i> ${c}</button>`;
  }).join('');

  container.addEventListener('click', e => {
    const btn = e.target.closest('button');
    if (!btn) return;
    $$('#filters button').forEach(x => x.setAttribute('aria-pressed', x === btn));
    renderSkills(btn.dataset.cat);
  });
}

// Projects: Modern Showcase Cards & README Dialog
function renderProjects() {
  const grid = $('#projectGrid');
  if (!grid) return;

  grid.innerHTML = PROJECTS.map((p, i) => `
    <article class="card project-card">
      <div>
        <div class="project-header">
          <span class="tag tag-purple"><i class="bi bi-terminal"></i> Project 0${i + 1}</span>
          <span class="tag tag-cyan"><i class="bi bi-stars"></i> Featured</span>
        </div>
        <h3 style="font-size: 1.35rem; margin-bottom: 0.4rem;">${p.title}</h3>
        <p class="project-type"><i class="bi bi-diagram-3-fill"></i> ${p.type}</p>
        <p style="color: var(--text-muted); font-size: 0.94rem; margin-bottom: 1.25rem;">${p.overview}</p>
        
        <div class="project-techs">
          ${p.tech.map(t => `<span class="tag"><i class="bi bi-hash"></i>${t}</span>`).join('')}
        </div>
        
        <div class="project-features">
          <strong><i class="bi bi-check2-circle"></i> Capabilities & Modules</strong>
          <div style="font-size: 0.88rem; line-height: 1.5; color: var(--text);">${p.features.join(' • ')}</div>
        </div>
      </div>

      <div>
        <div class="project-links">
          <a class="project-link-btn" href="${p.live}" target="_blank" rel="noopener"><i class="bi bi-box-arrow-up-right"></i> Demo</a>
          <a class="project-link-btn" href="${p.github}" target="_blank" rel="noopener"><i class="bi bi-github"></i> Repository</a>
          <a class="project-link-btn" href="${p.docs}" target="_blank" rel="noopener"><i class="bi bi-journal-text"></i> Docs</a>
        </div>
        <button class="btn-a" data-i="${i}" style="width: 100%;"><i class="bi bi-file-earmark-code"></i> View Project Blueprint</button>
      </div>
    </article>
  `).join('');

  grid.addEventListener('click', e => {
    const btn = e.target.closest('button[data-i]');
    if (btn) openModal(+btn.dataset.i, btn);
  });
}

let lastFocus = null;
function openModal(i, trigger) {
  const p = PROJECTS[i];
  lastFocus = trigger;

  const sectionsHtml = README.map(k => {
    const content = p.readme[k] || `[Add ${k}]`;
    return `
      <div class="modal-readme-item">
        <h4>${k}</h4>
        <p style="margin: 0; font-size: 0.92rem; color: var(--text);">${content}</p>
      </div>
    `;
  }).join('');

  $('#mBody').innerHTML = `
    <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom: 0.75rem;">
      <span class="tag tag-purple"><i class="bi bi-code-square"></i> Project 0${i + 1}</span>
      <span class="tag tag-cyan">${p.type}</span>
    </div>
    <h3 id="mTitle">${p.title}</h3>
    <div style="display:flex; flex-wrap:wrap; gap:0.5rem; margin-bottom: 1.5rem;">
      ${p.tech.map(t => `<span class="tag">${t}</span>`).join('')}
    </div>
    <div class="modal-readme-content">
      ${sectionsHtml}
    </div>
  `;

  $('#modal').hidden = false;
  document.body.style.overflow = 'hidden';
  $('#mClose').focus();
}

function closeModal() {
  $('#modal').hidden = true;
  document.body.style.overflow = '';
  if (lastFocus) lastFocus.focus();
}

function initModal() {
  if (!$('#modal')) return; // modal only exists on index.html
  $('#mClose').addEventListener('click', closeModal);
  $('#modal').addEventListener('click', e => {
    if (e.target.id === 'modal') closeModal();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !$('#modal').hidden) closeModal();
  });
}

// Troubleshooting Accordion with Structured Diagnostic Panels
function renderCases() {
  const casesContainer = $('#cases');
  if (!casesContainer) return;

  casesContainer.innerHTML = CASES.map(c => `
    <div class="acc-item">
      <button class="acc-btn" aria-expanded="false" aria-controls="cp${c.no}" id="cb${c.no}">
        <div style="display: flex; align-items: center; gap: 0.85rem;">
          <span class="tag tag-purple" style="font-family: 'JetBrains Mono', monospace;">CASE 0${c.no}</span>
          <span>${c.problem}</span>
        </div>
        <div class="acc-icon"><i class="bi bi-chevron-down"></i></div>
      </button>
      <div class="acc-panel hidden" id="cp${c.no}" role="region" aria-labelledby="cb${c.no}">
        <div class="acc-grid">
          <div class="acc-block">
            <div class="acc-block-title danger"><i class="bi bi-exclamation-octagon-fill"></i> Suspected Root Cause</div>
            <p style="margin: 0; font-size: 0.92rem;">${c.causes}</p>
          </div>
          <div class="acc-block">
            <div class="acc-block-title info"><i class="bi bi-search"></i> Diagnostic Procedure</div>
            <p style="margin: 0; font-size: 0.92rem;">${c.diagnosis}</p>
          </div>
          <div class="acc-block">
            <div class="acc-block-title success"><i class="bi bi-check-circle-fill"></i> Verified Solution</div>
            <p style="margin: 0; font-size: 0.92rem;">${c.solution}</p>
          </div>
          <div class="acc-block">
            <div class="acc-block-title"><i class="bi bi-lightbulb-fill"></i> Technical Takeaway</div>
            <p style="margin: 0; font-size: 0.92rem;">${c.lesson}</p>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

function initAccordion() {
  const casesContainer = $('#cases');
  if (!casesContainer) return;

  casesContainer.addEventListener('click', e => {
    const btn = e.target.closest('.acc-btn');
    if (!btn) return;
    const open = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', !open);
    $('#' + btn.getAttribute('aria-controls')).classList.toggle('hidden', open);
  });
}

// AI Literacy Log Table
function renderAI() {
  const tbody = $('#aiLog');
  if (!tbody) return;

  tbody.innerHTML = AI_LOG.map(r => `
    <tr>
      <td><span class="tag" style="font-family:'JetBrains Mono',monospace;">${r.date}</span></td>
      <td><strong style="color:#fff;">${r.task}</strong></td>
      <td>${r.ai}</td>
      <td><span style="color:#86efac; display:inline-flex; align-items:center; gap:0.35rem;"><i class="bi bi-check2-circle"></i> ${r.verify}</span></td>
    </tr>
  `).join('');
}

// Certificates Cards
function renderCerts() {
  const grid = $('#certGrid');
  if (!grid) return;

  grid.innerHTML = CERTS.map(c => `
    <article class="card card-hover">
      <div style="display: flex; align-items: flex-start; gap: 1rem; margin-bottom: 1rem;">
        <div class="stat-icon" style="background: rgba(16, 185, 129, 0.12); border-color: rgba(16, 185, 129, 0.25); color: #34d399;">
          <i class="bi bi-patch-check-fill"></i>
        </div>
        <div>
          <h4 style="margin: 0 0 0.35rem;">${c.title}</h4>
          <span class="tag tag-cyan" style="font-size: 0.76rem;">${c.issuer}</span>
        </div>
      </div>
      <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1.25rem;">Issued: ${c.date}</p>
      <a class="btn-o btn-sm" href="${c.link}" target="_blank" rel="noopener" style="margin-top: auto; width: fit-content;">
        <i class="bi bi-box-arrow-up-right"></i> Verify Credential
      </a>
    </article>
  `).join('');
}

// Repositories Cards
function renderRepos() {
  const grid = $('#repoGrid');
  if (!grid) return;

  grid.innerHTML = REPOS.map(r => `
    <article class="card card-hover">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.85rem;">
        <div style="display: flex; align-items: center; gap: 0.5rem; color: var(--primary-light);">
          <i class="bi bi-journal-code" style="font-size: 1.2rem;"></i>
          <h4 style="margin: 0; font-size: 1.1rem;">${r.name}</h4>
        </div>
        <span class="tag" style="font-size: 0.75rem;">Public</span>
      </div>
      <p style="color: var(--text-muted); font-size: 0.92rem; margin-bottom: 1.5rem;">${r.desc}</p>
      <div style="display: flex; align-items: center; justify-content: space-between; margin-top: auto;">
        <span style="display: inline-flex; align-items: center; gap: 0.4rem; font-size: 0.82rem; color: #cbd5e1;">
          <span style="width: 8px; height: 8px; border-radius: 50%; background: #6366f1;"></span> IT / Software
        </span>
        <a class="btn-o btn-sm" href="${r.link}" target="_blank" rel="noopener">
          <i class="bi bi-github"></i> View Repo
        </a>
      </div>
    </article>
  `).join('');
}

// Resume PDF Loader
function initResume() {
  fetch('resume.pdf', { method: 'HEAD' }).then(r => {
    if (!r.ok) throw 0;
  }).catch(() => {
    if (location.protocol === 'file:') return;
    const note = $('#resumeNote');
    if (note) note.textContent = 'Notice: resume.pdf preview is ready. Upload your updated resume.pdf next to index.html.';
    const card = $('#resumeCard');
    if (card) card.classList.add('missing');
  });
}

// Hamburger Menu
function initMenu() {
  const btn = $('#menuBtn'), menu = $('#menu');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', isOpen);
  });

  menu.addEventListener('click', e => {
    if (e.target.tagName === 'A') {
      menu.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
}

// Scrollspy for smooth active state highlighting
function initScrollSpy() {
  const links = $$('#menu a');
  const secs = $$('main section');
  if (!links.length || secs.length < 2) return; // single-section pages (about/contact) keep their static active link

  const spy = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        links.forEach(a => {
          a.classList.toggle('active', a.getAttribute('href') === '#' + en.target.id);
        });
      }
    });
  }, { rootMargin: '-35% 0px -45% 0px' });

  secs.forEach(s => spy.observe(s));
}

// Scroll Reveal Observer
function initReveal() {
  const io = new IntersectionObserver(es => {
    es.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });

  $$('.reveal').forEach(el => io.observe(el));
}

// Back to Top Button
function initTop() {
  const b = $('#toTop');
  if (!b) return;

  window.addEventListener('scroll', () => {
    b.classList.toggle('show', window.scrollY > 400);
  }, { passive: true });

  b.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Contact Form Validation and Mailto trigger
function initForm() {
  const f = $('#contactForm');
  if (!f) return;

  const fail = (id, eid, msg) => {
    const el = $(id);
    if (el) el.classList.add('bad');
    const errEl = $(eid);
    if (errEl) errEl.textContent = msg;
    return false;
  };

  f.addEventListener('submit', e => {
    e.preventDefault();
    $$('.bad', f).forEach(x => x.classList.remove('bad'));
    $$('.err', f).forEach(x => x.textContent = '');

    const n = $('#cName') ? $('#cName').value.trim() : '';
    const m = $('#cEmail') ? $('#cEmail').value.trim() : '';
    const msg = $('#cMsg') ? $('#cMsg').value.trim() : '';
    let ok = true;

    if (n.length < 2) ok = fail('#cName', '#eName', 'Please provide your full name (2+ characters).');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(m)) ok = fail('#cEmail', '#eEmail', 'Please enter a valid email address.');
    if (msg.length < 10) ok = fail('#cMsg', '#eMsg', 'Message must be at least 10 characters.');

    if (!ok) return;

    location.href = `mailto:${OWNER.email}?subject=${encodeURIComponent('Portfolio message from ' + n)}&body=${encodeURIComponent(msg + '\n\nFrom: ' + n + ' (' + m + ')')}`;
  });

  // Copy Email button helper
  const copyBtn = $('#copyEmailBtn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(OWNER.email).then(() => {
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = '<i class="bi bi-check2"></i> Copied!';
        setTimeout(() => { copyBtn.innerHTML = originalText; }, 2000);
      });
    });
  }
}

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  fillBasics();
  renderFilters();
  renderSkills();
  renderProjects();
  renderCases();
  renderAI();
  renderCerts();
  renderRepos();
  initModal();
  initAccordion();
  initMenu();
  initScrollSpy();
  initReveal();
  initTop();
  initForm();
  initResume();
});
