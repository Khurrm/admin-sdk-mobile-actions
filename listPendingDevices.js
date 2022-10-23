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

  do {
    i = 0;
    try {
      var page = AdminDirectory.Mobiledevices.list(customerId, {
        orderBy: 'os',
        maxResults: 100,
        query: 'status:pending',
        pageToken: pageToken
      });
    } catch (error) {
      Logger.log(error);
      Logger.log('%s, %s', error.message, error.stack);

    }
var users = page.mobiledevices;

for (i = 0; i < users.length; i++) {
      var user = users[i];
      Logger.log("%s %s %s",user.name, user.email, user.model, user.brand);
	  
	  ss.getRange(i + 2, 2).setValue(user.name);
      ss.getRange(i + 2, 3).setValue(user.email[0]);
      ss.getRange(i + 2, 4).setValue(user.brand);
      ss.getRange(i + 2, 5).setValue(user.model);
      ss.getRange(i + 2, 6).setValue(user.type);
      ss.getRange(i + 2, 7).setValue(user.status);
      ss.getRange(i + 2, 8).setValue(user.deviceId);
      ss.getRange(i + 2, 9).setValue(user.lastSync);
	 }

    } while (pageToken);
    
    pageToken = page.nextPageToken;
    Logger.log("The last page token is %s (For checking purposes)", pageToken);
    Logger.log("The variable i value is %d (For checking purposes)", i);
}

