// Lista de imágenes
const images = ["Image1.jpg", "Image2.jpg", "Image3.jpg", "Image4.jpg"];
let currentImageIndex = 0;

// Obtener la imagen de la galería
const galleryImage = document.getElementById("gallery-image");

// Función para mostrar la imagen actual
function showImage() {
    galleryImage.src = images[currentImageIndex];
}

// Cambiar a la imagen anterior
function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage();
}

// Aplicar filtros de imagen
function applyFilter(filter) {
    galleryImage.style.filter = filter;
}

// Iniciar mostrando la primera imágen
showImage();