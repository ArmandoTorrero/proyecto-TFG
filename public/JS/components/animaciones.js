
/**
 * Función para aplicar una animacion a uno o varios elementos
 * @param {*} element 
 * @param {*} animation_name 
 */
export function aplicarAnimacion(element,animation_name) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate__animated"); 
                entry.target.classList.add(`animate__${animation_name}`); 
                observer.unobserve(entry.target)
            }
        })
    });

    document.querySelectorAll(element).forEach(el => {
        observer.observe(el); 
    })
}