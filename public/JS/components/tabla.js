/**
 * Crear una tabla con encabezados y datos.
 * @param {Array} headers - Array con los encabezados de la tabla.
 * @param {Array} data - Array de arrays con la información de las filas.
 * @returns {HTMLTableElement} - Tabla generada con thead y tbody.
 */
export function crearTabla(headers, data) {
    // Crear elementos de la tabla
    let tabla = document.createElement("table");
    let thead = document.createElement("thead");
    let tbody = document.createElement("tbody");

    // Crear encabezados de la tabla
    let tr_thead = document.createElement("tr");
    headers.forEach(header => {
        let th = document.createElement("th");
        th.textContent = header;
        tr_thead.appendChild(th);
    });
    thead.appendChild(tr_thead);
    tabla.appendChild(thead);

    // Crear filas de la tabla con los datos
    data.forEach(row => {
        let tr = document.createElement("tr");
        row.forEach(cell => {
            let td = document.createElement("td");
            td.textContent = cell;
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    });

    tabla.appendChild(tbody);
    return tabla;
}