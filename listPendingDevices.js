function listPendingDevices() {

const CUSTOMER_ID = 'XXXXXX'; // Add the customer ID here.

var pageToken;

//try catch block to read the values/parameters from the Google sheet.
try{
  
var ss = SpreadsheetApp.openById("1xE-XXXXXXXXXXXXXXXXXXXXXXXX").getSheetByName("sheet1").activate();
    ss.getRange('A2:L100').clearContent();
  Logger.log(ss.getName());
  
} catch (error) {
  Logger.log(error);
  Logger.log('%s, %s', error.message, error.stack);
}

}

