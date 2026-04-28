/**
 * GOOGLE APPS SCRIPT FOR FORM SUBMISSION
 * 
 * Instructions:
 * 1. Go to sheets.google.com and create a new blank spreadsheet.
 * 2. Name it "Clinic Leads".
 * 3. In the first row, create the following headers in columns A through F:
 *    Date, Name, Phone, Email, Treatment, Message
 * 4. Click Extensions > Apps Script in the spreadsheet menu.
 * 5. Paste this entire code into the Code.gs file, replacing the default code.
 * 6. Click Deploy > New Deployment.
 * 7. Choose type "Web App".
 * 8. Set "Execute as" to "Me" and "Who has access" to "Anyone".
 * 9. Click Deploy, authorize permissions, and copy the Web App URL.
 * 10. Paste this URL into `LeadGenerationSection.jsx` where it says `scriptURL`.
 */

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  try {
    // Parse the incoming POST parameters
    var name = e.parameter.name || "N/A";
    var phone = e.parameter.phone || "N/A";
    var email = e.parameter.email || "N/A";
    var treatment = e.parameter.treatment || "N/A";
    var message = e.parameter.message || "N/A";
    var date = e.parameter.date || new Date().toISOString();
    
    // Append the row to the active sheet
    sheet.appendRow([date, name, phone, email, treatment, message]);
    
    // Return a success JSON response
    return ContentService
      .createTextOutput(JSON.stringify({ "result":"success", "data": JSON.stringify(e.parameters) }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Handle errors
    return ContentService
      .createTextOutput(JSON.stringify({ "result":"error", "error": error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
