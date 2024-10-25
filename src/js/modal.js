function modal() {
    const forma = document.querySelector("main");
    if (forma.classList.contains("page-form")) {
        const button = document.querySelector("[data-modal]"), //дата атрибут на каждой кнопке и ищем по нему
        modalError = document.querySelector(".modal-error"), //само модальное окно
        modalGreat = document.querySelector(".modal-sent"),
        buttonClose = document.querySelectorAll(".form__button--close"),
        form = document.querySelector('form'),
        userMail = form.querySelector('.form__contacts--mail'),
        userName = form.querySelector('.form__user-name'),
        userSurname = form.querySelector('.form__user-surname');

        function postData(form) {
        
            const formData = new FormData(form);

            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            console.log(json);
            modalGreat.classList.add("show");

            form.reset();
        }

        button.addEventListener('click', (e) => {
            e.preventDefault();

            if ((userMail.value !== ' ' && userMail.value !== '') && (userName.value !== ' ' && userName.value !== '') && (userSurname.value !== ' ' && userSurname.value !== '')) {
                postData(form);
            } else {
                modalError.classList.add('show');
                document.body.style.overflow = "hidden"; //убираем скролл страницы при открытии модального окна
            }
        })

        buttonClose.forEach(bt => {
            bt.addEventListener("click", () => {
                modalGreat.classList.remove("show");
                modalError.classList.remove("show");
                document.body.style.overflow = "";//возвращаем скролл страницы при закрытии модального окна
            });
        });
    }
}

export default modal;