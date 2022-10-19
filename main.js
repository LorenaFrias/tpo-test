// HAMBURGER MENU

let hamburger = document.getElementById('hamburger');
let navUl = document.querySelector('.navbar');

hamburger.addEventListener('click', ()=> {
    navUl.classList.toggle('show');
})

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

// VALIDACION FORMULARIO

let form = document.querySelector('form');
let nombre = document.querySelector('#name');
let mail = document.querySelector('#email');
let message = document.querySelector('#message');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (nombre.value.trim() ===''){
        msgError(nombre, 'Ingrese su nombre, por favor.')
    } else {
        msgExito(nombre)
    }

    if(mail.value.trim() === '') {
        msgError(mail, 'Ingrese su email, por favor.')
    } else if (isEmail(mail.value.trim())) {
        msgExito(mail)
        
    } else {
        msgError(mail, 'El email no es válido.')
        
    }

})

function msgError(element, mensaje) {
    element.style.border = '2px solid red';

    let control = element.parentElement;
    let small = control.querySelector('small');

    small.textContent = mensaje;
    small.style.visibility = 'visible';
}

function msgExito(element){
    element.style.border = '2px solid green';

    let control = element.parentElement;
    let small = control.querySelector('small');

    small.style.visibility = 'hidden';
}

function isEmail(mail) {
    let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(mail);
}

// API REST

function getData(){
    fetch('https://randomuser.me/api/?results=3&nat=es')
    .then(res => res.json())
    .then(data => {
        let author = data.results;
        let output = '';
        author.forEach(function(lists) {
            output +=
            `
            
                <li id="cliente-opinion">
                <img id="image" src="${lists.picture.large}" alt="">
                <blockquote>"${getRandomReview()}"</blockquote>
                <p id="name">${lists.name.first}</p>
                
                </li>
            
            `
        });
        document.getElementById('opiniones').innerHTML = output;
    })
    }
    
    getData();
    
    let reviews = [
        'Excelente atención',
        'Productos premium',
        'Algo para cada ocasión',
        'Gracias por la dedicación!',
        'Volveré pronto!',
        'Conseguí lo que buscaba y más!'
    ]
    
    function getRandomReview () {
        let review = reviews[Math.floor(Math.random() * reviews.length)];
        return review
    }