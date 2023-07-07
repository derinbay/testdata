function getTcs() {
    fetch('http://localhost:8065/tc?count=10') // API endpointinizi kullanarak değiştirin
        .then(response => response.json())
        .then(data => {
            const apiDataDiv = document.getElementById('apiData');
            apiDataDiv.innerHTML = 'TC Numaraları: ' + JSON.stringify(data, null, 2);
        })
        .catch((error) => {
            console.error('Hata:', error);
        });
}

function getImeis() {
    fetch('http://localhost:8065/imei?count=10') // API endpointinizi kullanarak değiştirin
        .then(response => response.json())
        .then(data => {
            const apiDataDiv = document.getElementById('apiData');
            apiDataDiv.innerHTML = 'IMEI Numaraları: ' + JSON.stringify(data, null, 2);
        })
        .catch((error) => {
            console.error('Hata:', error);
        });
}