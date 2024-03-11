//apenas teste de log
console.log("Me chamo Arthur Francisco Faria","tenho 20 anos"); //ignore
console.log("12/09/2004"); //ignore

//Função mostrar data
function showDateTime() {
    var dateTimeDisplay = document.getElementById('dateTimeDisplay'); //retrieves the HTML element and store in the variable
    var currentDateTime = new Date().toLocaleString(); //create a new variable with the Datetime
    dateTimeDisplay.innerHTML = currentDateTime; //set a current Date Time to the dateTimeDisplay variable
    dateTimeDisplay.style.display = 'block'; // ironically makes sure that the element show on the website
    dateTimeDisplay.classList.add('custom-style'); // add a possibility to custumize the element
}