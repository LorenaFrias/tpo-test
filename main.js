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

const submitBtn = document.getElementById('submit-btn');

const validate = (e) => {
  e.preventDefault();
  const form = document.querySelector('form');
  const nombre = document.getElementById('nombre');
  const email = document.getElementById('email');
  const mensaje = document.getElementById('message');
  const msjError = document.querySelector('.error');

    
  if (nombre.value.trim() === "") {

    msjError.textContent = 'Por favor ingrese su nombre';

    nombre.style.border = '2px solid red'
    nombre.focus();
    return false;
  }
    
  if (email.value.trim() === "") {

    msjError.textContent = 'Por favor ingrese su email'

    email.style.border = '2px solid red'
    email.focus();
    return false;
  }

  if (!emailIsValid(email.value.trim())) {

    msjError.textContent = 'Por favor ingrese un email válido'
    email.style.border = '2px solid red'
    email.focus();
    return false;
  }

  if (mensaje.value === "") {
    msjError.textContent = 'Por favor ingrese su mensaje'
    message.style.border = '2px solid red'
    mensaje.focus();
    return false;
  } 
  
  nombre.style.border = "2px solid green";
  email.style.border = "2px solid green";
  mensaje.style.border = "2px solid green";
  msjError.textContent = '';
    
  return true; 
    
}

const emailIsValid = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function clearInput() {
    nombre.value = '';
    email.value = '';
    message.value = '';
}

submitBtn.addEventListener('click', validate);
submitBtn.addEventListener('click', clearInput);
submitBtn.addEventListener('click', abrir)

const modal = document.querySelector('#modal');
const closeModal = document.querySelector('#close-modal');

function abrir() {
  modal.showModal();
}

closeModal.addEventListener('click', ()=> {
  modal.close();
})





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