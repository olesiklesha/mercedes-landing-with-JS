const tabsHendlerElems = document.querySelectorAll('[data-tabs-handler]');
const tabsContentElems = document.querySelectorAll('[data-tabs-field]');
console.log(tabsContentElems);
//.design-list__item_active
for (let btn of tabsHendlerElems) {
  btn.addEventListener('click', () => {
    tabsHendlerElems.forEach(item => item.classList.remove('design-list__item_active'));
    btn.classList.add('design-list__item_active');

    tabsContentElems.forEach(cont => {
      if (cont.dataset.tabsField === btn.dataset.tabsHandler) {
        cont.classList.remove('hidden');
      } else {
        cont.classList.add('hidden');
      }
    })
  })
}