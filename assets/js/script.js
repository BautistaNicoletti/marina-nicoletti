/* || Header - Menu */
const menuOpen = document.getElementById('menu-open'),
menu = document.getElementById('menu'),
menuClose = document.getElementById('menu-close');

menuOpen.addEventListener('click', () => {
    menu.classList.add('active');
})
menuClose.addEventListener('click', () => {
    menu.classList.remove('active');
})

/* || Logros */
const logro = document.getElementById('logro'),
docente = document.getElementById('docente');

/* logro */
logro.addEventListener("click", () => {
    Swal.fire({
        title: "",
        text: "Declaración de Interés Cultural, Social y Educativo a nivel Municipal y Provincial del libro titulado MAMÁ ME VOY AL SUR.",
        width: 800,
        imageUrl: "assets/images/logros/logro-bn.webp",
        imageWidht: 500,
        padding: "32px",
        confirmButtonText: 'Cerrar',
        confirmButtonColor: "#EE312C"
    });
})
/* docente */
docente.addEventListener("click", () => {
    Swal.fire({
        title: "Acto de colación de Egreso, 2002",
        text: "",
        width: 800,
        imageUrl: "assets/images/profile/marina-docente.webp",
        imageWidht: 500,
        padding: "32px",
        confirmButtonText: 'Cerrar',
        confirmButtonColor: "#EE312C"
    });
})