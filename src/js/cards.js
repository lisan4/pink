function cards() {
    class MenuCard {
        constructor(img, par, info, parentSelector, ...classes) { //создаем конструктор карточек и передаем аргументы + рест оператор
            this.img = img;
            this.par = par;
            this.info = info;
            this.classes = classes; //рест оператор
            this.parent = document.querySelector(parentSelector); //ищем родителя наших карточек, чтобы туда вставить потом карточки
        }

        render() { //создаем создание карточки
            const element = document.createElement("div"); //создам элемент див, чтобы потом запушить его в родителя

            if (this.classes.length === 0) { //если в рест оператор не прописан класс, то ставится дефолт
                this.element = "advantages-item"
                element.classList.add(this.element); //дефолт класс
            } else {
                this.classes.forEach(className => { //добавляем класс из рест оператора
                    element.classList.add(className);
                });
            }

            element.innerHTML = ` 

            <img class="img-iphone" src = ${this.img}>
            <h3 class="advantages-item__name">${this.par}</h3>
            <p class="advantages-item__info">${this.info}</p>

            `;

            
            this.parent.append(element); //аппендим в родителя карточку
            
        }
    }

    new MenuCard('img/iphone-first.png', "Поднимает настроение", "Приложение позволит вам победить осеннюю хандру и депрессию буквально в несколько кликов!", '.advantages__field .advantages__container').render();
    new MenuCard('img/iphone-second.png', "Меняет мир вокруг", "Сделайте снимок и украсьте его смайликом или текстовой подписью, чтобы усилить эффект", '.advantages__field .advantages__container').render();
    new MenuCard('img/iphone-third.png', "Заводит новых друзей", "Ставьте лайки, комментируйте, делитесь фотографиями с друзьями и заводите новых", '.advantages__field .advantages__container').render();

    const body = document.querySelector("body");

    // setInterval(() => {
    //     console.log(body.offsetWidth);
    // }, 100);

    // if (body.offsetWidth > 660)
}

export default cards;