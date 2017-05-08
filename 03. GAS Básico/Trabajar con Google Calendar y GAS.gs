//Aplicación para probar la API de Google Calendar con GAS
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  // Or DocumentApp or FormApp. -> Creamos el menu con submenu
  ui.createMenu('Actualizar datos')
      .addItem('Empezar ahora!!', 'menuItem1')
      .addToUi();
}

function menuItem1() {
  //Accedemos a la spreadsheet
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Hoja 1');
  sheet.clear();
  //Pintamos las cabeceras de la sheet
     var acttitle = sheet.getRange(1, 1).setValue('Nombre del Evento');
     var actfecha = sheet.getRange(1, 2).setValue('Fecha');
     var acthoraini = sheet.getRange(1, 3).setValue('Inicio');
     var acthoraini = sheet.getRange(1, 4).setValue('Fin');
  //Accedemos al calendario vía ID
  var calendar = CalendarApp.getCalendarById('ID-DEL-CALENDARIO-SE-OBIENTE-DESDE-COMPARTIR-CALENDARIO');
  //Leemos todas las entradas del calendario desde esta fecha de inicio
  var fini = new Date('10/17/2016 20:00:00 UTC+1');
  //hasta esta fecha fin
  var ffin = new Date('3/20/2019 20:00:00 UTC+1');
  var eventos = calendar.getEvents(fini, ffin);
  //Recorremos todas las entradas del calendario
   for (var i = 0; i < eventos.length; i++) {
    //accedemos al evento 
     var evento = eventos[i];
     //Leemos su Fecha de inicio para obtener la hora de inicio
     var FechaInicio = evento.getStartTime();
     var FechaFin = evento.getEndTime();
     var horainicio = FechaInicio.getHours();
     var minutosinicio = FechaInicio.getMinutes();
     var inicio = horainicio+':'+minutosinicio;
     //Leemos su Fecha de inicio para obtener la hora de fin
      var horafin = FechaFin.getHours();
     var minutosfin = FechaFin.getMinutes();
     var fin = horafin+':'+minutosfin;
     //Tomamos la última fila escrita
     var ultfila = sheet.getLastRow();
     var i2 = ultfila+1;
     //Obtenemos el titulo del evento
     var titulo = evento.getTitle();
     //Si localizamos a Juan, escribimos el evento, en caso contrario no hacemos nada
     if(titulo.indexOf('Juan') !== -1){
       //Pintamos los valores en la Spreadsheet
     var acttitle = sheet.getRange(i2, 1).setValue(titulo);
     var actfecha = sheet.getRange(i2, 2).setValue(FechaInicio);
     var acthoraini = sheet.getRange(i2, 3).setValue(inicio);
     var acthoraini = sheet.getRange(i2, 4).setValue(fin);
     }
     
   } 
}