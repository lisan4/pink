function slider({container, slide, nextArrow, prevArrow, wrapper, field}) {
    const slides = document.querySelectorAll(slide), //все слайды на стр
          slider = document.querySelector(container), //общий wrapper
          prev = document.querySelector(prevArrow), // предыдущая кнопка
          next = document.querySelector(nextArrow), // следующая кнопка
          slidesWrapper = document.querySelector(wrapper), //общая обертка
          slidesField = document.querySelector(field), //поле с нашими слайдами
          width = window.getComputedStyle(slidesWrapper).width, //ширина которая приминилась css
          str = 0;

    let offset = 0; //отступ
    let slideIndex = 1;

    slidesField.style.width = 100 * slides.length + "%"; //задаем ширину четырех слайдов

    slides.forEach(slide => {
        slide.style.width = width; //устанавливаем каждому слайду одинаковую ширину width
    });

    // точки навигации для слайдов

    const indicators = document.createElement("ol"), //создаем список
           dots = [];
    
    indicators.classList.add("carousel-indicators"); //добавляем класс и стили к нему
    slider.append(indicators); //добавляем в слайдер новый список

    for (let i = 0; i < slides.length; i++) { 
        const dot = document.createElement('li'); //создаем элемент списка
        dot.setAttribute("data-slide-to", i + 1); // создаем уникальный атрибут
        dot.classList.add("navigation-t");

        if (i == 0) {
            dot.style.opacity = 1;
        }

        indicators.append(dot); //аппендим в индикатор dot
        dots.push(dot); //пушим дот в массив
    }




    next.addEventListener("click", () => {
        if (offset == +width.replace(/[^0-9]/g,"") * (slides.length - 1)) { //убираем все буквы из width
                                                                      // Если offset равняется ширине 3ого слайда, то на первый
            offset = 0;
        } else {
            offset += +width.replace(/[^0-9]/g,"");
        }

        slidesField.style.transform = `translateX(-${offset}px)`; //смещаем на один слайд вперед

        if (slideIndex == slides.length) { //если слайд = макс числу слайдов, то возвращаем на 1 слайд
            slideIndex = 1;
        } else {
            slideIndex ++; //иначе добавляем 1
        }

       //точки навигации
 
        dots.forEach(dot => {
            dot.style.opacity = ".5"; //всем ставим 0.5 опасити
        });
        dots[slideIndex - 1].style.opacity = 1; //кроме текущего, ему ставим 1

    });

    prev.addEventListener("click", () => {
        if (offset == 0) { //убираем из width PX и если offset на первом слайде => переходим на 3
            offset = +width.replace(/[^0-9]/g,"") * (slides.length - 1);
        } else {
            offset -= +width.replace(/[^0-9]/g,"");
        }

        slidesField.style.transform = `translateX(-${offset}px)`; //смещаем на один слайд вперед

        if (slideIndex == 1) { //если слайд 1, перемещаемся на 4
            slideIndex = slides.length; //смещаемся в конец
        } else {
            slideIndex --; //иначе добавляем 1
        }

         //точки навигации
 
        dots.forEach(dot => {
            dot.style.opacity = ".5"; //всем ставим 0.5 опасити
        });
        dots[slideIndex - 1].style.opacity = 1; //кроме текущего, ему ставим 1

    });

    dots.forEach(dot => {
        dot.addEventListener("click", (e) => {
            const slideTo = e.target.getAttribute("data-slide-to"); //ищем атрибут data-slide-to

            slideIndex = slideTo; //slideTo - атрибут data-slide-to
            offset = +width.replace(/[^0-9]/g,"") * (slideTo - 1); //устанавливаем offset на slideTo - 1

            slidesField.style.transform = `translateX(-${offset}px)`; //смещаем на один слайд вперед

            dots.forEach(dot => {
                dot.style.opacity = ".5"; //всем ставим 0.5 опасити
            });
            dots[slideIndex - 1].style.opacity = 1; //кроме текущего, ему ставим 1

        });
    }); 

  
}

export default slider;