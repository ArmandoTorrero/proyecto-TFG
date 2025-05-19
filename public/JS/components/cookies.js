

/**
 *
 * Funcion que se encarga de gestionar el panel de cookies 
 * @export
 */
export function panelCookies() {

    if (getCookie("cookies") == null) {

        setTimeout(() => {
            Swal.fire({
                title: "Aceptar cookies",
                text: "Utilizamos cookies propias y de terceros para mejorar tu experiencia de navegación, ofrecer contenidos personalizados y analizar el tráfico del sitio. Al hacer clic en 'Aceptar todas', consientes el uso de todas las cookies. También puedes rechazarlas con 'Rechazar todas', aunque esto podría afectar a la funcionalidad del sitio.",
                icon: "question",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Acepto las cookies"
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                    title: "Cookies aceptadas",
                    icon: "success"
                    });
                    setCookie("cookies", true, { days: 30 , path: "/"});

                }
            });
        }, 3000);

    }
}


/**
 * Obtiene el valor de una cookie por su nombre
 * @param {string} name - Nombre de la cookie a buscar
 * @returns {string|null} Valor de la cookie o null si no existe
 */
export function getCookie(name) {
    // Codifica el nombre para manejar caracteres especiales
    const nameEncoded = encodeURIComponent(name) + '=';
    // Divide todas las cookies del documento
    const cookies = document.cookie.split(';');
    
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        // Elimina espacios en blanco al inicio
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1);
        }
        // Si encuentra la cookie, devuelve su valor
        if (cookie.indexOf(nameEncoded) === 0) {
            return decodeURIComponent(cookie.substring(nameEncoded.length, cookie.length));
        }
    }
    return null;
}


/**
 * Crea o actualiza una cookie
 * @param {string} name - Nombre de la cookie
 * @param {string} value - Valor a almacenar
 * @param {Object} [options] - Opciones adicionales
 * @param {number} [options.days] - Días hasta que expire (por defecto: sesión)
 * @param {string} [options.path] - Ruta donde es accesible (por defecto: '/')
 * @param {string} [options.domain] - Dominio donde es accesible
 * @param {boolean} [options.secure] - Solo enviar sobre HTTPS
 * @param {string} [options.sameSite] - Política SameSite (Lax/Strict/None)
 */
export function setCookie(name, value, options = {}) {
    let cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
    
    // Configuración de expiración
    if (options.days) {
        const date = new Date();
        date.setTime(date.getTime() + (options.days * 24 * 60 * 60 * 1000));
        cookie += `; expires=${date.toUTCString()}`;
    }
    
    // Otras opciones
    if (options.path) cookie += `; path=${options.path}`;
    if (options.domain) cookie += `; domain=${options.domain}`;
    if (options.secure) cookie += '; secure';
    if (options.sameSite) cookie += `; sameSite=${options.sameSite}`;
    
    document.cookie = cookie;
}
