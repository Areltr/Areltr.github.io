const exchangeRate = {
    usd: 0.000065,
    myr:0.00027
};



const dropdownMenu = document.getElementById('dropdownMenu');
const mainButton = document.getElementById('mainButton');

window.onload = function () {
    covertCurrency('idr');
};

mainButton.addEventListener('click', () => {
    dropdownMenu.classList.toggle('show');
});

function covertCurrency(currency) {
    mainButton.textContent = currency.charAt(0).toUpperCase() + currency.slice(1);
    const prices = document.querySelectorAll('.price');
    const perMonth = document.querySelectorAll('.per-month');
    
    prices.forEach((price, index) =>{
        const rupiahValue = parseFloat(price.dataset.rupiah);

        if (currency === 'usd') {
            const usdValue = (rupiahValue * exchangeRate.usd).toFixed(2);
            price.textContent = `$ ${usdValue} /`;
            perMonth[index].textContent = 'monthly';
        } else if (currency === 'myr') {
            const myrValue = (rupiahValue * exchangeRate.myr).toFixed(2);
            price.textContent = `RM ${myrValue} /`;
            perMonth[index].textContent = 'bulan';
        } else if (currency === 'idr') {
            price.textContent = `Rp. ${rupiahValue.toLocaleString('id-ID')} /`;
            perMonth[index].textContent = 'bulan';
        }
    });
    
    dropdownMenu.classList.remove('show');
};

window.addEventListener('click', (event) => {
    if (!dropdownMenu.contains(event.target)) {
        dropdownMenu.classList.remove('show');
    }
});

const dropdownButton = document.getElementById('dropdownButton');
const dropdown = document.querySelector('.dropdown2');

window.onload = function () {
    showContent('mob');
};


dropdownButton.addEventListener('click', () => {
    dropdown.classList.toggle('show');
});

function showContent(category){
    dropdownButton.textContent = category.charAt(0).toUpperCase() + category.slice(1);

    document.querySelectorAll('.content').forEach(content => {
        content.classList.remove('active')});
    
    document.getElementById(category).classList.add('active');

    dropdown.classList.remove('show');
};

window.addEventListener('click', (event) => {
    if (!dropdown.contains(event.target)) {
        dropdown.classList.remove('show');
    }
})
