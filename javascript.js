function AmountValue(){
   let value = document.querySelector('input').value;
         let totalAfterTax = Math.floor(value * 0.70); 
    let InputFormatted = Number(totalAfterTax).toLocaleString('en');
  let robuxBeforeTax = document.getElementById('beforeTaxVal');

robuxBeforeTax.textContent = InputFormatted;
  };


  

