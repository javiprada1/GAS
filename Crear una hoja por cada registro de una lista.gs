//Aplicación para poder crear una hoja por cada nombre en una lista
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Opciones avanzadas')
      .addItem('Crear una hoja por cada fila ahora!!', 'menuItem1')
      .addToUi();
}

/*
Esta función recorre la primera columna y crea una hoja por cada registro
*/
function menuItem1() {
  
  var sh = SpreadsheetApp.openById("AQUÍ-ID-SHEET");
  var sheet = sh.getSheetByName("AQUÍ-EL-NOMBRE-DE-LA-HOJA");
  var ultfila = sheet.getLastRow();
  
  for(var i = 0;i<ultfila;i++){
   var fila = i+1;
   var nombre = sheet.getRange(fila, 1).getValue();
  SpreadsheetApp.getActiveSpreadsheet().insertSheet(nombre);
  }
  
  Browser.msgBox('Script finalizado');
}