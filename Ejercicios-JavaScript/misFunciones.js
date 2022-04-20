/**
 * Conversión de unidades, de metros, pulgadas, pies y yardas
 * @method cambiarUnidades
 * @param {string} id - El id de los inputs de metros, pulgadas, pies y yardas
 * @param {number} valor - El valor de los inputs de metros, pulgadas, pies y yardas
 *
 * @author Angelo Carlos Capello
 */

function cambiarUnidades(id, valor) {
    if (isNaN(valor)) {
        alert("Se ingreso un valor invalido");
        document.LasUnidades.unid_metro.value = "";
        document.LasUnidades.unid_pulgada.value = "";
        document.LasUnidades.unid_pie.value = "";
        document.LasUnidades.unid_yarda.value = "";
    } else if (id === "metro") {
        document.LasUnidades.unid_pulgada.value = 39.3701 * valor;
        document.LasUnidades.unid_pie.value = 3.28084 * valor;
        document.LasUnidades.unid_yarda.value = 1.09361 * valor;
    } else if (id === "pulgada") {
        document.LasUnidades.unid_metro.value = 0.0254 * valor;
        document.LasUnidades.unid_pie.value = 0.0833333 * valor;
        document.LasUnidades.unid_yarda.value = 0.0277778 * valor;
    } else if (id === "pie") {
        document.LasUnidades.unid_metro.value = 0.3048 * valor;
        document.LasUnidades.unid_pulgada.value = 12 * valor;
        document.LasUnidades.unid_yarda.value = 0.333333 * valor;
    } else if (id === "yarda") {
        document.LasUnidades.unid_metro.value = 0.9144 * valor;
        document.LasUnidades.unid_pulgada.value = 36 * valor;
        document.LasUnidades.unid_pie.value = 3 * valor;
    }
}

/**
 * La función convertirGR convierte un número de radianes a grados y viceversa
 * @param {string} id El id de los inputs de gradianes y radianes
 *
 * @author Angelo Carlos Capello
 */

function convertirGR(id) {
    let grad, rad;
    if (id === "grados") {
        grad = document.getElementById("grados").value;
        rad = (grad * Math.PI / 180);
    } else if (id === "radianes") {
        rad = document.getElementById("radianes").value;
        grad = (rad * 180) / Math.PI
    }
    document.getElementById("grados").value = grad;
    document.getElementById("radianes").value = rad;
}

/**
 * La función mostrar_ocultar se usa para mostrar u ocultar el elemento div con id="divMO"
 * @param {string} valorMO - Se utiliza para determinar qué div se mostrará u ocultará.
 *
 * @author Angelo Carlos Capello
 */
function mostrar_ocultar(valorMO) {
    if (valorMO === "val_mostrar") {
        document.getElementById("divMO").style.display = 'block';
    } else if (valorMO === "val_ocultar") {
        document.getElementById("divMO").style.display = 'none';
    }
}