function nav() {
    const button = document.querySelector(".page-header__toggle"),
          navList = document.querySelector(".nav");
    
    button.addEventListener("click", () => {
        if (navList.classList.contains("main-nav--closed")) {
            navList.classList.add("nav-list--opened");
            navList.classList.remove("main-nav--closed");
        } else {
            navList.classList.add("main-nav--closed");
            navList.classList.remove("nav-list--opened");
        }
    });


}

export default nav;