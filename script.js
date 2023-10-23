//turn pages

const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

pageTurnBtn.forEach((el, index) => {
    el.onclick = () => {
        const pageTurnId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);

        if (pageTurn.classList.contains('turn')) {
            pageTurn.classList.remove('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 - index;
            }, 500);
        }
        else {
            pageTurn.classList.add('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 + index;
            }, 500);
        }
    }
})


//general control btn clicked
const pages = document.querySelectorAll('.book-page.page-right');
const GeneralControlBtn = document.getElementById('gneralControl');

GeneralControlBtn.onclick = () => {
    pages.forEach((page, index) => {
        if (index < 1) {
            setTimeout(() => {
                page.classList.add('turn');
    
                setTimeout(() => {
                    page.style.zIndex = 20 + index;
                }, 500)
            }, (index + 1) * 200 + 100)
        }
    })
}
//general info btn clicked
const GeneralInfoBtn = document.getElementById('generalInfo');
GeneralInfoBtn.onclick = () => {
    pages.forEach((page, index) => {
        if (index < 1) {
            setTimeout(() => {
                page.classList.add('turn');
    
                setTimeout(() => {
                    page.style.zIndex = 20 + index;
                }, 500)
            }, (index + 1) * 200 + 100)
        }
    })
}
//UI btn clicked
const UIBtn = document.getElementById('UI');
UIBtn.onclick = () => {
    pages.forEach((page, index) => {
        if (index < 2) {
            setTimeout(() => {
                page.classList.add('turn');
    
                setTimeout(() => {
                    page.style.zIndex = 20 + index;
                }, 500)
            }, (index + 1) * 200 + 100)
        }
    })
}
//Inventar btn clicked
const InventarBtn = document.getElementById('InventarBtn');
InventarBtn.onclick = () => {
    pages.forEach((page, index) => {
        if (index < 2) {
            setTimeout(() => {
                page.classList.add('turn');
    
                setTimeout(() => {
                    page.style.zIndex = 20 + index;
                }, 500)
            }, (index + 1) * 200 + 100)
        }
    })
}


let totalPages = pages.length;
let pageNumber = 0;

function reverseIndex() {
    pageNumber--;
    if (pageNumber < 0) {
        pageNumber = totalPages - 1;
    }
}


//opening Anim
const coverRight = document.querySelector('.cover.cover-right');

setTimeout(() => {
    coverRight.classList.add('turn');
}, 2100)

setTimeout(() => {
    coverRight.style.zIndex = -1;
}, 2800)

pages.forEach((_, index) => {
    setTimeout(() => {
        reverseIndex();
        pages[pageNumber].classList.remove('turn');

        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].style.zIndex = 10 + index;
        }, 500)
    }, (index + 1) * 200 + 2100)
})