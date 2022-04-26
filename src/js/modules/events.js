export function addEvents() {
    eventeMenu();

}

function eventeMenu(){
    //Вешаем событие на показ и скрытие меню

    const burger = document.querySelector('.header__burger-icon');
    const menu = document.querySelector('.menu');
    
    const toggleMenu = () => {
        menu.classList.toggle('menu--active');
    }
    
    burger.addEventListener('click', e => {
        e.stopPropagation();
        toggleMenu();
    });

    document.addEventListener('click', e => {
        const target = e.target;
        const its_menu = target == menu || menu.contains(target);
        const its_hamburger = target == burger;
        const menu_is_active = menu.classList.contains('menu--active');
        
        if (!its_menu && !its_hamburger && menu_is_active) {
          toggleMenu();
        }
    })
}

