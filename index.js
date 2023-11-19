/*'Use strict'*/
/*jshint esversion: 8*/

const error_image = document.getElementById('input__error-image');
const input_number = document.getElementById('enterNumber');
const input_error = document.getElementById('input__error');
const base = document.getElementsByClassName('selector__choseBase')[0];
const btn = document.getElementById('btn');
const reset = document.getElementById('reset');
const result = document.getElementById('resultValue');

btn.addEventListener('click', function(e) {
    e.preventDefault();
    //Number, +, parseInt return number
    const num = +input_number.value;
    const baseVal = +base.value;
    if(isNaN(num)) {
        input_error.classList.add('show');
        error_image.classList.add('show');
        input_error.textContent = 'Please enter a valid number.'
        result.textContent = '';
    } else {
    console.log(num);
        if(num == '' || num == undefined || num == null) {
            input_number.setAttribute('placeholder', '0');
        }
        let convertedValue;
        input_error.classList.remove('show');
        error_image.classList.remove('show');
            switch (baseVal) {
                case 2:
                    convertedValue = num.toString(baseVal);
                    result.textContent = '0b' + convertedValue.toUpperCase();
                    break;
                case 8:
                    convertedValue = num.toString(baseVal);
                    result.textContent = '0o' + convertedValue.toUpperCase();
                    break;
                case 16:
                    convertedValue = num.toString(baseVal);
                    result.textContent = '0x' + convertedValue.toUpperCase();
                    break;
                default:
                    result.textContent = '';
            }
        }    
})

reset.addEventListener('click', function() {
    location.reload(true);
})

//submit form and/or input with 'enter' key
document.onkeydown = function() {
    if(window.keyCode == '13') {
        let evt = new Event('click');
        btn.dispatchEvent(evt); // initiate, trigger event on btn
    }
};