const form = document.querySelector('form');

// this use case will givw you  empty value
// const height = parseInt(document.querySelector('#height').value);

form.addEventListener('submit' , (event) => {
    event.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
     const weight = parseInt(document.querySelector('#weight').value);

     const results   = document.querySelector('#results')

     const Weight_Guides = document.querySelector('#Weight-Guides');

     if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please Give a valid  height ${height}`;
     }
     else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please Give a valid  weight ${weight}`;
     }
     else{
        const bmi = (weight / ( height* height ));
        // show the result
        results.innerHTML = `<span>${bmi.toFixed(2)}</span>`;

        if (bmi < 18.6 ) {
            Weight_Guides.innerHTML = "Under weight";
        }
        else if(bmi  > 18.6 && bmi < 24.9){
            Weight_Guides.innerHTML = "Normal weight";
        }
        else{
            Weight_Guides.innerHTML = "Over Weight";
        }
     }

});