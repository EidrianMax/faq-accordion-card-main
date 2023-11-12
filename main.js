const accordionItems = document.querySelectorAll('.accordion-item')

accordionItems.forEach(accordionItem => {
  const accordionItemButton = accordionItem.querySelector('.accordion-item__button')
  const accordionItemBody = accordionItem.querySelector('.accordion-item__body')

  accordionItemButton.addEventListener('click', () => {
    accordionItemBody.classList.toggle('show')
    accordionItemButton.classList.toggle('collapsed')
  })
})