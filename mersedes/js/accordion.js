const btns = document.querySelectorAll('.feature__link');
const lists = document.querySelectorAll('.feature-sub');

btns.forEach((item, index) => {
  item.addEventListener('click', () => {
    btns.forEach((item) => {
      item.classList.remove('feature__link_active')
    })
    item.classList.add('feature__link_active')

    lists.forEach((item) => {
      item.classList.add('hidden');
    })
    lists[index].classList.remove('hidden');
  })
})