const checks = [...document.querySelectorAll('[data-check]')];
const updateChecklist = () => {
  const done = checks.filter(input => input.checked).length;
  document.querySelector('#check-count').textContent = `${done} of ${checks.length} ready`;
};
for (const input of checks) {
  const key = `acpe2026-ready-${input.dataset.check}`;
  try { input.checked = localStorage.getItem(key) === 'true'; } catch {}
  input.addEventListener('change', () => {
    try { localStorage.setItem(key, String(input.checked)); } catch {}
    updateChecklist();
  });
}
updateChecklist();

const cards = [...document.querySelectorAll('.resource-card')];
const filters = [...document.querySelectorAll('[data-filter]')];
const search = document.querySelector('#resource-search');
let selected = 'all';
function filterResources() {
  const query = search.value.trim().toLocaleLowerCase();
  let visible = 0;
  for (const card of cards) {
    const matchesCategory = selected === 'all' || card.dataset.category === selected;
    card.hidden = !(matchesCategory && card.textContent.toLocaleLowerCase().includes(query));
    if (!card.hidden) visible++;
  }
  document.querySelector('#result-count').textContent = `${visible} ${visible === 1 ? 'resource' : 'resources'}`;
  document.querySelector('#empty-state').hidden = visible !== 0;
  for (const filter of filters) filter.setAttribute('aria-pressed', String(filter.dataset.filter === selected));
}
for (const filter of filters) filter.addEventListener('click', () => {
  selected = filter.dataset.filter;
  filterResources();
});
search.addEventListener('input', filterResources);
document.querySelector('#reset-resources').addEventListener('click', () => {
  selected = 'all';
  search.value = '';
  filterResources();
  search.focus();
});
document.querySelector('.resource-controls').hidden = false;
filterResources();
