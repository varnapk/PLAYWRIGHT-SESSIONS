const XLSX= require('xlsx')
//Imports the xlsx library so you can work with Excel files.
function getCellData(row,column){
//Declares a function that takes 2 params: row and column. These are 1-based numbers like Excel UI. Ex: row=1, column=1 means cell A1.
    const workbook= XLSX.readFile('TestData/ApplicationData.xlsx')
//Opens the Excel file from disk. workbook object now has all sheets + metadata loaded in memory.
    const sheet=workbook.Sheets['loginpage']
//Picks the sheet named loginpage from the workbook. sheet is an object where keys = cell addresses like A1, B2.
    const cellvalue=XLSX.utils.encode_cell({ //'encode cell function used to fetch data based on row and column
        r:row-1,
        c:column-1
//Converts row/column numbers into Excel cell address.
//encode_cell needs 0-based index, but Excel UI is 1-based. So row-1, column-1.
//Example: getCellData(1,1) → {r:0, c:0} → cellvalue = 'A1'. getCellData(2,3) → {r:1, c:2} → cellvalue = 'C2'
    })
    const cell=sheet[cellvalue]
//Gets the actual cell object from the sheet. sheet['A1'] returns an object like {t: 's', v: 'Username', h: 'Username'}.
//If the cell is empty, sheet['A1'] will be undefined.
    return cell?cell.v:undefined
//Ternary operator. If cell exists, return cell.v which is the raw value. .v = value, .t = type, .f = formula.
//If cell is empty/undefined, return undefined instead of crashing.
}
module.exports={getCellData}
