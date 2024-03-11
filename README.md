# Date-and-Time-in-JavaScript
Test code for a simple button "date and time". 

*Código HTML*
<html>

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Date and Time Display</title>
        <link rel="stylesheet" href="styles.css">
    </head>

    <body>
        <button onclick="showDateTime()">Click here to show Date and Time</button>
        <div class="date-container" id="dateTimeDisplay"></div>

        <script
          src="main.js"> //linkando o código JavaScript 
        </script>
    <body>
</html>

*Código Js*
//apenas teste de log
console.log("Me chamo Arthur Francisco Faria","tenho 20 anos"); 
console.log("12/09/2004");

//Função mostrar data
function showDateTime() {
    var dateTimeDisplay = document.getElementById('dateTimeDisplay');
    var currentDateTime = new Date().toLocaleString();

    dateTimeDisplay.innerHTML = currentDateTime;
    dateTimeDisplay.style.display = 'block'; // Make sure the display is visible
    dateTimeDisplay.classList.add('custom-style'); // Add a custom style class if needed
}

*Código Css*
/* styles.css */
#dateTimeDisplay {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    font-size: 20px;
    color: #727272;
    background-color: #e0e0e0;
    padding: 9px;
    border: 1px solid #dbdbdb;
    border-radius: 17px;
    margin-bottom: 20px;
}

/*classe, mudando a forma do botão*/
button {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    font-size: 13px;
    color: #4b4b4b;
    background-color: #dfdfdf;
    padding: 10px;
    border: 4px solid #d8d8d8;
    border-radius: 20px; /*arrendodamento da borda do botão*/
    margin-bottom: 20px;    
}

.date-container {
    width: 25%; /* Set the desired width for the container */
}
