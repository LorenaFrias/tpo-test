// ANIMACION NOVEDADES

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