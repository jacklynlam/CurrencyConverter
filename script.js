async function fetchData() {
    const amount = document.getElementById('amountInput').value;
    const baseCurrency = document.getElementById('baseCurrency').value.toUpperCase();
    const foreignCurrency = document.getElementById('foreignCurrency').value.toUpperCase();
    const conversion = document.getElementById('conversion');

    const url = `https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency?have=${baseCurrency}&want=${foreignCurrency}&amount=${amount}`;

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e5c9e3f599msh82abb8dcb57d623p1c7051jsn5b44c30a3556',
            'X-RapidAPI-Host': 'currency-converter-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`API call failed with status: ${response.status}`);
        }
        const data = await response.json();
        conversion.textContent = `${amount} ${baseCurrency} = ${data.new_amount} ${foreignCurrency}`
    } catch (error) {
        console.error(error);
        conversion.textContent = 'Invalid input.';
    }
}

function resetData() {
    document.getElementById('amountInput').value = '';
    document.getElementById('baseCurrency').selectedIndex = 0;
    document.getElementById('foreignCurrency').selectedIndex = 0;
    document.getElementById('conversion').textContent = '';
}




