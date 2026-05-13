/* E-ステ Masaki | main.js */

// ハンバーガーメニュー
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', function () {
    const isOpen = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', isOpen);
  });

  // メニュー項目クリックで閉じる
  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
})();

// 目次自動生成
function buildToc() {
  const tocList = document.getElementById('toc-list');
  const articleBody = document.querySelector('.article-body');
  if (!tocList || !articleBody) return;

  const headings = articleBody.querySelectorAll('h2, h3');
  if (headings.length === 0) {
    const tocEl = document.querySelector('.toc');
    if (tocEl) tocEl.style.display = 'none';
    return;
  }

  headings.forEach(function (heading, i) {
    if (!heading.id) {
      heading.id = 'heading-' + i;
    }
    const li = document.createElement('li');
    li.className = heading.tagName === 'H3' ? 'toc-h3' : '';
    const a = document.createElement('a');
    a.href = '#' + heading.id;
    a.textContent = heading.textContent;
    li.appendChild(a);
    tocList.appendChild(li);
  });
}

document.addEventListener('DOMContentLoaded', buildToc);
