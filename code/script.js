function Menu(e) {
    let list = document.querySelector('.newul');
    let menu2 = document.querySelector('.menu2');
    e.name === 'menu' ? (e.name = "close", 
    list.classList.add('top-[80px]'), 
    menu2.classList.add('mt-52'),
    list.classList.add('opacity-100')) : (e.name = "menu", 
    list.classList.remove('top-[80px]'), 
    menu2.classList.remove('mt-52'),
    list.classList.remove('opacity-100'))

    // e.name === 'menu2' ? (e.name = "close",
    // menu2.classList.add('pb-40')): (e.name = 'menu2',
    // menu2.classList.remove('pb-40'))
}
