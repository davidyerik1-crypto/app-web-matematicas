document.getElementById("cuestionario").addEventListener("submit", function(event) {

    event.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let aciertos = 0;
    let result = "";

    let respuestasCorrectas = {
        pregunta1: "res1",
        pregunta2: "res1",
        pregunta3: "res3",
        pregunta4: "res2",
        pregunta5: "res1",
        pregunta6: "res3",
        pregunta7: "res1",
        pregunta8: "res2",
        pregunta9: "res3",
        pregunta10: "res3"
    };

    for (let i = 1; i <= 10; i++) {
        let seleccionada = document.querySelector(`input[name="pregunta${i}"]:checked`);
        if (seleccionada && seleccionada.value === respuestasCorrectas[`pregunta${i}`]) {
            aciertos++;
        }
    }

    if(aciertos === 0){
            result = "Pésimo resultado :(";
        }
        if(aciertos < 6){
            result = "Ocupas una repasada :/";
        }
        if(aciertos >= 6 && aciertos < 9){
            result = "Muy buen intento :)";
        }
        if(aciertos === 9){
            result = "Excelente B)";
        }
        if(aciertos === 10){
            result = "Perfecto :O";
        }

    let contenedorResultado = document.getElementById("resultado");
    contenedorResultado.innerHTML = `
        <h3>¡Resultados del Cuestionario!</h3>
        <p><strong>Participante:</strong> ${nombre}</p>
        <p><strong>Aciertos:</strong> ${aciertos} de 10</p>
        <p><strong>Mensaje:</strong> ${result}</p>
        
    `;
});