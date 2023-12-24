document.addEventListener('DOMContentLoaded', function () {
    let navbar = document.querySelector('.navbar');

    // Toggle para la barra de navegación responsiva
    document.querySelector('#menu-btn').onclick = () => {
        navbar.classList.toggle('active');
    };

    // Referencia al contenedor de la vista previa de los productos
    let previewContainer = document.querySelector('.products-preview');
    let previewBoxes = previewContainer.querySelectorAll('.preview');

    // Evento de clic para cada producto
    document.querySelectorAll('.products-container .product').forEach(product => {
        product.onclick = () => {
            previewContainer.style.display = 'flex'; // Muestra el contenedor de vista previa
            let name = product.getAttribute('data-name');
            previewBoxes.forEach(preview => {
                let target = preview.getAttribute('data-target');
                if (name == target) {
                    preview.classList.add('active'); // Muestra la vista previa correspondiente
                } else {
                    preview.classList.remove('active'); // Asegúrate de ocultar las demás vistas previas
                }
            });
        };
    });

    // Evento de clic para cerrar la vista previa
    previewBoxes.forEach(preview => {
        preview.querySelector('.fa-times').onclick = () => {
            preview.classList.remove('active');
            previewContainer.style.display = 'none'; // Oculta el contenedor de vista previa
        };
    });
});

//Slider section
const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next(){
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 5s"; // Cambia la duración de la transición aquí
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 5000); // Cambia el tiempo de espera aquí
}

function Prev(){
    let sliderSection = document.querySelectorAll(".slider__section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 5s"; // Cambia la duración de la transición aquí
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 5000); // Cambia el tiempo de espera aquí
}

btnRight.addEventListener('click', function(){
    Next();
});

btnLeft.addEventListener('click', function(){
    Prev();
});

setInterval(function(){
    Next();
}, 7000);