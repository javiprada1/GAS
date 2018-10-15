
function Copy() {
  var sh= SpreadsheetApp.openById("1ulvR6HK--PhAZJqGNCfHO2SxYW4RbK8Jp9JIYyWQErg");
  var sheet = sh.getSheetByName("Generador de Hojas de calculo");
  
  var newsheet = SpreadsheetApp.create("Hoja generada automaticamente");
  
  var ultfila= sheet.getLastRow();
  
  var rango = sheet.getRange(1, 1, ultfila).getValues();
  
   for(var i=0;i<rango.length;i++){
    var fila=i+1;
     var nombre = sheet.getRange(fila, 1).getValue();
     try{
     newsheet.insertSheet(nombre);
       
       sheet.getRange(fila, 2).setValue("OK");
     }catch(e){
       
       sheet.getRange(fila, 2).setValue(e);
     }
   }//Fin Para
}
