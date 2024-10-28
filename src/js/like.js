function like() {
    const main = document.querySelector('main');
    if (main.classList.contains('page-photo')) {
        const photoItem = document.querySelectorAll('.user-photo__inner');
        const likes = document.querySelectorAll('.user-photo__like');
    
        likes.forEach((like, i) => {
            const counterElement = like.querySelector('.like-counter');
            let counter = +counterElement.textContent;
    
            function addLike(i) {
                render(++counter, counterElement);
                photoItem[i].classList.add('like');
            }
    
            function removeLike(i) {
                render(--counter, counterElement);
                photoItem[i].classList.remove('like');
            }
    
            const render = (counter, counterElement) => counterElement.innerText = counter;
    
            like.addEventListener('click', () => {
                if (!photoItem[i].classList.contains('like')) {
                    addLike(i);
                } else {
                    removeLike(i);
                }
    
            })
        })
    }
    
}

export default like;