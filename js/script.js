const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit)


const inputValue = document.getElementById('value-real');
const selectCurrency = document.getElementById('currency');
const result = document.getElementById('result');
let valueConverted = 0;


function handleSubmit(e) {
    e.preventDefault();

    if(!inputValue.value || inputValue.value <0){
        alert('Informe um valor valido.');
        return;
    } else if(!selectCurrency.value){
        alert('Escolha uma moeda!');
        return;
    } 
    coverter();
};

function coverter(){
    if(selectCurrency.value === 'eur'){
        valueConverted = inputValue.value * 5.55;
        result.innerHTML = valueFormatter('pt-BR', 'EUR');
        
        animateResult();
        } else if( selectCurrency.value === 'dol'){
        valueConverted = inputValue.value * 5.08;
        result.innerHTML = valueFormatter('en-US', 'USD');
       
        animateResult();
    }
    inputValue.value = '';
    selectCurrency.value = '';
    
};

function valueFormatter(locale, currency){
 const value = valueConverted.toLocaleString(`${locale}`,{ style: 'currency', currency: `${currency}` });
 return `<span>💸</span> ${value}<span>💰</span>`
    
};


function animateResult() {
    return result.animate([
        { transform: 'translateY(-150px)'},
        {transform:'translatey(150px)' }
    ], { duration: 700})
};



