//Aplicación para probar la extensión de GAS con GitHub
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  // Or DocumentApp or FormApp. -> Creamos el menu con submenu
  ui.createMenu('Actualizar datos')
      .addItem('Actualizar datos ahora', 'menuItem1')
      .addToUi();
}

function menuItem1() {
  //Esta linea muestra un mensaje de hola mundo!! al ejecutar el menuItem1
  Browser.msgBox('Hola mundo!!');
  //Añado este nuevo comentario sobre el código desde Github!!!
}
