//Aplicación para probar la extensión de GAS con GitHub
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  // Or DocumentApp or FormApp. -> Creamos el menu con submenu
  ui.createMenu('Actualizar datos')
      .addItem('Empezar ahora!!', 'menuItem1')
      .addToUi();
}

function menuItem1() {
  //Definimos una variable donde vamos a registrar un input:
  var input = Browser.inputBox("Por favor, introduce tu nombre:");
  //Esta linea muestra un mensaje de hola mundo!! al ejecutar el menuItem1
  Browser.msgBox('Bienvenido a tu primer Script con GAS '+input);
  //Añado este nuevo comentario sobre el código desde Github!!!
}