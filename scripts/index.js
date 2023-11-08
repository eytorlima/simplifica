AOS.init();

class MobileNavBar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeNav = "active-nav";
        this.activeMenu = "active-menu";
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.navList.classList.toggle(this.activeNav);
        this.mobileMenu.classList.toggle(this.activeMenu);
    }
    addClickEvent() {
        this.mobileMenu.addEventListener('click', this.handleClick);

        this.navLinks.forEach(link => {
            link.addEventListener('click', this.handleClick);
        });
    }
    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavBar(
    '.mobile-menu',
    '.nav-list',
    '.nav-list li'
);
mobileNavbar.init();