# Task Description
Explore the Admin SDK for Bring Your Own Devices (BYOD) actions. 
Actions:
[x] - Approve 
[x] - Block
[x] - List 
[x] - Remote Wipe the work profile

## Platform to be used
[Google Apps Script](https://developers.google.com/apps-script) will be used to program the code. 

## Reference Documentation
- **Google Admin SDK - Directory API**: The official documentation is available under [developers.google.com](developers.google.com). I am using [Google Admin SDK directory APIs](https://developers.google.com/admin-sdk) for this purpose. 

- **Method: mobiledevices.list**: Method to use =>[method mobiledevices.list](https://developers.google.com/admin-sdk/directory/reference/rest/v1/mobiledevices/list) for this purpose. 

- **Google API Explorer**: Use [Google API Explorer](https://developers.google.com/explorer-help/) to test the APIs before coding. 

**Note**: When I am uploading the code on Github then *.gs files are added as *.js. 

## User Defined Method: listPendingDevices
This Program list all of the pending devices that are not approved at present. These devices can also be checked via the the [google admin console](www.admin.google.com).  

## User Defined Method: listBlockedDevices
This Program list all of the blocked devices that are not approved at present. These devices can also be checked via the the [google admin console](www.admin.google.com).  

## User Defined Method: listApprovedDevices
This Program list all of the approved devices that are not approved at present. These devices can also be checked via the the [google admin console](www.admin.google.com). 
