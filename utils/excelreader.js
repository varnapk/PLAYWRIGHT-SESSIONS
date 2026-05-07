const XLSX= require('xlsx')
//Imports the xlsx npm package you installed via npm install xlsx. This gives you all functions to read/write Excel files. XLSX is now an object holding those functions.
function getData(){
//Declares a function named getData. You'll call this from your test files whenever you need Excel data.
    const workbook= XLSX.readFile('TestData/ApplicationData.xlsx')
//this is a method to open the file to read, so we have to mention the file path 
//XLSX.readFile() opens the Excel file at the given path. It reads the entire .xlsx file into memory and returns a workbook object.
//workbook contains: SheetNames array + Sheets object with actual data.
//Path is relative to where you run node from, so 'TestData/...' means there must be a TestData folder in your project root.
    const sheet= workbook.Sheets['loginpage']
//Inside the workbook, Excel can have multiple tabs/sheets. workbook.Sheets is an object where keys = sheet names.
//['loginpage'] grabs the sheet/tab named loginpage. If that tab doesn't exist, sheet will be undefined and the next line crashes
    const data= XLSX.utils.sheet_to_json(sheet)
//sheet_to_json takes the raw Excel sheet and converts it to an array of JSON objects.
//First row in Excel becomes the keys. Each subsequent row becomes one object.
    return data
//Sends the array of objects back to whoever called getData(). Your test file will receive it.
}   
module.exports={getData}
//Makes the getData function available outside this file