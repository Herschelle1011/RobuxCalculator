function AmountValue(){
   let value = document.querySelector('input').value;
         let totalAfterTax = Math.floor(value * 0.70); 
    let InputFormatted = Number(totalAfterTax).toLocaleString('en');
  let robuxBeforeTax = document.getElementById('beforeTaxVal');
  let rbxIcon = document.querySelector('.rbxIcon');
    rbxIcon.style.opacity = 1;

if(value.length === 0){
    rbxIcon.style.opacity = 0;
    robuxBeforeTax.textContent = '';
    return;
  }
if( value < 0){
    robuxBeforeTax.textContent = 'Invalid Input';
    return;
  }


robuxBeforeTax.textContent = InputFormatted;
  };




