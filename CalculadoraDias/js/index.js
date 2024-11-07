function calcularDias() {
    const fecha1 = new Date(document.getElementById("fecha1").value).toISOString().split('T')[0];
    const fecha2 = new Date(document.getElementById("fecha2").value).toISOString().split('T')[0];

    if (!fecha1 || !fecha2) {
        alert("Por favor selecciona ambas fechas.");
        return;
    }

    fetch(`https://localhost:44301/api/HolaMundo/calcular-dias?fecha1=${fecha1}&fecha2=${fecha2}`)
        .then(response => {
            if (!response.ok) throw new Error("Error en la respuesta de la API");
            return response.json();
        })
        .then(data => {
            document.getElementById("resultado").innerText = `Días de diferencia: ${data.dias}`;
        })
        .catch(error => {
            console.error("Error al calcular los días:", error);
            document.getElementById("resultado").innerText = "Ocurrió un error al calcular los días.";
        });
}

function calcularEtapa() {
    const fechaConsulta = document.getElementById("fechaConsulta").value;

    if (!fechaConsulta) {
        alert("Por favor selecciona una fecha.");
        return;
    }

    fetch(`https://localhost:44301/api/HolaMundo/calcular-etapa?fechaConsulta=${fechaConsulta}`)
        .then(response => {
            if (!response.ok) throw new Error("Error en la respuesta de la API");
            return response.json();
        })
        .then(data => {
            document.getElementById("resultado").innerText = `Resultado: ${data.mensaje}`;
        })
        .catch(error => {
            console.error("Error al calcular la etapa:", error);
            document.getElementById("resultado").innerText = "Ocurrió un error al calcular la etapa.";
        });
}

