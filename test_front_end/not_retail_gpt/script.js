document.addEventListener('DOMContentLoaded', function() {
    populateYears(); // Función para poblar el selector de años
    fetchEntries(); // Función para obtener las últimas entradas
});

function populateYears() {
    let yearSelect = document.getElementById('year');
    let currentYear = new Date().getFullYear();
    for (let i = currentYear; i >= 1990; i--) {
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        yearSelect.appendChild(option);
    }
}

function submitForm() {
    let formData = {
        year: document.getElementById('year').value,
        brand: document.getElementById('brand').value,
        model: document.getElementById('model').value,
        ram: parseInt(document.getElementById('ram').value),
        diskSize: parseInt(document.getElementById('diskSize').value),
        diskType: document.getElementById('diskType').value,
        processor: document.getElementById('processor').value,
        ghz: parseFloat(document.getElementById('ghz').value),
        screenSize: parseInt(document.getElementById('screenSize').value),
        caseCondition: document.getElementById('caseCondition').value,
        batteryCondition: document.getElementById('batteryCondition').value,
        audioCondition: document.getElementById('audioCondition').value,
        os: document.getElementById('os').value,
        price: parseFloat(document.getElementById('price').value)
    };

    fetch('http://render/api/computers', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        fetchEntries(); // Actualizar la lista de entradas después de un envío exitoso
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

function fetchEntries() {
    fetch('http://render/api/computers?limit=5') // Asumiendo que la API soporta un parámetro de límite
        .then(response => response.json())
        .then(data => {
            let entriesList = document.getElementById('entriesList');
            entriesList.innerHTML = ''; // Limpiar lista existente
            data.forEach(entry => {
                let listItem = document.createElement('li');
                listItem.classList.add('list-group-item');
                listItem.textContent = `Año: ${entry.year}, Marca: ${entry.brand}, Modelo: ${entry.model}, RAM: ${entry.ram} GB, Disco: ${entry.diskSize} GB ${entry.diskType}, Procesador: ${entry.processor} ${entry.ghz} GHz, Pantalla: ${entry.screenSize}"`;
                entriesList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching entries:', error));
}
