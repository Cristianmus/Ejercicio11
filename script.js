function convertirUnidades() {
    const input = parseFloat(document.getElementById('valor').value);
    const fromUnit = document.getElementById('unidadOrigen').value;
    const toUnit = document.getElementById('unidadDestino').value;
    let result;

    if (isNaN(input)) {
        alert('Por favor, ingresa un número válido.');
        return;
    }

    switch (fromUnit) {
        case 'kilometros':
            if (toUnit === 'millas') {
                result = input * 0.621371;
            } else if (toUnit === 'metros') {
                result = input * 1000;
            }
            break;
        case 'millas':
            if (toUnit === 'kilometros') {
                result = input / 0.621371;
            } else if (toUnit === 'pies') {
                result = input * 5280;
            }
            break;
        case 'metros':
            if (toUnit === 'pies') {
                result = input * 3.28084;
            } else if (toUnit === 'kilometros') {
                result = input / 1000;
            }
            break;
        case 'pies':
            if (toUnit === 'metros') {
                result = input / 3.28084;
            } else if (toUnit === 'millas') {
                result = input / 5280;
            }
            break;
        default:
            alert('Conversión no soportada.');
            return;
    }

    document.getElementById('resultado').textContent = `Resultado: ${result.toFixed(2)} ${toUnit}`;
}