const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

// Modal open function
const openModal = () => {
    console.log("Open Modal");
    modal.classList.add("active");
    overlay.classList.add('overlay-active');
}

// Modal close function
const closeModal = () => {
    console.log("Close Modal");
    modal.classList.remove("active");
    overlay.classList.remove("overlay-active");
}