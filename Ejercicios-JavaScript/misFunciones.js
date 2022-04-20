/**
 * Conversión de unidades, de metros, pulgadas, pies y yardas
 * @method cambiarUnidades
 * @param {string} id - El id de los inputs de metros, pulgadas, pies y yardas
 * @param {number} valor - El valor de los inputs de metros, pulgadas, pies y yardas
 *
 * @author Angelo Carlos Capello
 */

function cambiarUnidades(id, valor) {
    let metro, pulgada, pie, yarda;

    if (valor.includes(",")) {
        valor = valor.replace(",", ".");
    }

    if (isNaN(valor)) {
        alert("Se ingreso un valor invalido en el campo " + id);
        metro = "";
        pulgada = "";
        pie = "";
        yarda = "";

    } else if (id === "metro") {
        metro = valor;
        pulgada = 39.3701 * valor;
        pie = 3.28084 * valor;
        yarda = 1.09361 * valor;
    } else if (id === "pulgada") {
        metro = 0.0254 * valor;
        pulgada = valor;
        pie = 0.0833333 * valor;
        yarda = 0.0277778 * valor;
    } else if (id === "pie") {
        metro = 0.3048 * valor;
        pulgada = 12 * valor;
        pie = valor;
        yarda = 0.333333 * valor;

    } else if (id === "yarda") {
        metro = 0.9144 * valor;
        pulgada = 36 * valor;
        pie = 3 * valor;
        yarda = valor;
    }
    document.LasUnidades.unid_metro.value = Math.round(metro * 100) / 100;
    document.LasUnidades.unid_pulgada.value = Math.round(pulgada * 100) / 100;
    document.LasUnidades.unid_pie.value = Math.round(pie * 100) / 100;
    document.LasUnidades.unid_yarda.value = Math.round(yarda * 100) / 100;
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

/**
 * La función calcula la suma de dos números
 *
 * @author Angelo Carlos Capello
 */

function calcularSuma() {
    let num1, num2;

    num1 = Number(document.getElementsByName("sum_num1") [0].value);
    num2 = Number(document.getElementsByName("sum_num2") [0].value);
    document.getElementsByClassName("sum_total")[0].innerHTML = num1 + num2;
}

/**
 * La función calcula la resta de dos números
 *
 * @author Angelo Carlos Capello
 */

function calcularResta() {
    let num1, num2;

    num1 = Number(document.getElementsByName("res_num1") [0].value);
    num2 = Number(document.getElementsByName("res_num2") [0].value);
    document.getElementsByClassName("res_total")[0].innerHTML = num1 - num2;
}

/**
 * La función calcula la multiplicación de dos números
 *
 * @author Angelo Carlos Capello
 */

function calcularMultiplicacion() {
    let num1, num2;

    num1 = Number(document.getElementsByName("mul_num1") [0].value);
    num2 = Number(document.getElementsByName("mul_num2") [0].value);
    document.getElementsByClassName("mul_total")[0].innerHTML = num1 * num2;
}

/**
 * La función calcula la división de dos números
 *
 * @author AngelogetElementsByClassName Carlos Capello
 */

function calcularDivision() {
    let num1, num2;

    num1 = Number(document.getElementsByName("div_num1") [0].value);
    num2 = Number(document.getElementsByName("div_num2") [0].value);
    document.getElementsByClassName("div_total")[0].innerHTML = num1 / num2;
}