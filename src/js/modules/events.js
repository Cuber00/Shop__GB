export function addEvents() {
    eventeMenu();
    eventToFilter();
    eventToFilterChecbox();
}

function eventToFilterChecbox(){
    const productNav = document.querySelector(".products-nav");
    if(!productNav) return;

    const productNavBtn = productNav.querySelectorAll(".products-nav__btn");
    
    productNavBtn.forEach(item => {
        item.addEventListener("click", () => {
            const ul = item.nextElementSibling;
            const toggleUl = () => ul.classList.toggle("products-nav__list--active");

            toggleUl();
            toggleEvent(ul, item, "products-nav__list--active", toggleUl);
        })
    })
}

function eventToFilter(){
    const wrapFilter = document.querySelector(".filter-wrap");
    
    if(!wrapFilter) return;
    

    const btn = wrapFilter.querySelector(".filter-btn");
    const filterItem = wrapFilter.querySelectorAll(".filter__item-title");
    const toggleFilter = () => wrapFilter.classList.toggle("filter--active");

    btn.addEventListener("click", () => toggleFilter);

    filterItem.forEach(item => {
        item.addEventListener("click", () => item.classList.toggle("filter__item-title--active"));
    })
    toggleEvent(wrapFilter, btn, "filter--active", toggleFilter);
}



function eventeMenu(){
    const burger = document.querySelector('.header__burger-icon');
    const menu = document.querySelector('.menu');

    const toggleMenu = () => menu.classList.toggle('menu--active');
    
    burger.addEventListener('click', e => {
        e.stopPropagation();
        toggleMenu();
    });

    toggleEvent(menu, burger, "menu--active", toggleMenu);
}

function toggleEvent(el, btn, cls, toggle){
    
    document.addEventListener('click', e => {
        const target = e.target;
        const its_menu = target == el || el.contains(target);
        const its_hamburger = target == btn;
        const menu_is_active = el.classList.contains(cls);

        if(!its_menu && !its_hamburger && menu_is_active) {
            toggle();
        } else if (its_menu && its_hamburger && !menu_is_active) {
            toggle();
        }
    })
}