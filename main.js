// ANIMACION NOVEDADES & PRODUCTOS

const slides = document.querySelectorAll('.slide')

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle('show', entry.isIntersecting)
        if (entry.isIntersecting) observer.unobserve(entry.target)
    })
}, {
    threshold: 0.3,
    
});

slides.forEach(slide => {
    observer.observe(slide)
})

// SCROLL UP BUTTON

const scrollBtn = document.querySelector('.scrollup');

window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollBtn.style.display = 'block';
    } else {
        scrollBtn.style.display = 'none';
    }
})

// READ MORE PRODUCTOS

let btn = document.querySelectorAll('.more-btn');

let text = document.querySelectorAll('.more-text');

btn.forEach((elemento,clave)=>{
    elemento.addEventListener('click', ()=>{
        if (text[clave].classList.contains('active')){
            text[clave].classList.remove('active')
        }else {
            text[clave].classList.add('active')
        }
    })
});