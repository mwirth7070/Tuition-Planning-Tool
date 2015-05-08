// Array order: Category, Dollar Amount, Number of Entries
var array = [["Other",0,0],["Credit Cards",0,0],["Loans",0,0],["Asset for Sale",0,0],["Cash",0,0]];

function addList(myTable) {

            table = document.getElementById(myTable);

            var rowCount = table.rows.length;
            var row = table.insertRow(1);

          var b="<blank>";
  
 // Item addition and hours
 var cell1 = row.insertCell(0);
            var element1 = document.createElement("input");
            element1.type = "text";
            element1.style.width="100%";
            element1.name = "txtbox[]";
            element1.value=b;
            cell1.appendChild(element1);
  
   var cell2 = row.insertCell(1);
            var element2 = document.createElement("input");
            element2.type = "text";
            element2.style.width="100%";
            element2.name = "txtbox[]";
            element2.value=1000;
            cell2.appendChild(element2);
  
  // Status drop-down  
   var cell3 = row.insertCell(2);
   var element3 = document.createElement("select");
  
   
  // Loop for adding drop-down options
   for (var k = 0; k < array.length; k++) {           
    
    var option = document.createElement("option");
    option.value = array[k][0];
    option.text = array[k][0];
    element3.appendChild(option);
    cell3.appendChild(element3); 
   }
  
 // Deletion checkbox
 var cell4 = row.insertCell(3);
            var element4 = document.createElement("input");
            element4.type = "checkbox";
            element4.name="chkbox[]";
            cell4.appendChild(element4);
document.getElementById('pTotal').innerHTML= rowCount;
  
updateFunds();  
  
       }
  
// Funds sum function logic 
function updateFunds(){
  
  var table = document.getElementById('TuitionTable');
  var rowCount = table.rows.length;

// Summing total money
    var tally = 0;
    var otherTot = 0;
  
    for (var i = 1; i < rowCount; i++){
      tally = tally + parseFloat((table.rows[i].cells[1].childNodes[0].value));   
    }
  
 // Loop to update each category total  
  for (var g = 0; g < array.length; g++){ // Set category
   // Zero out categories
    array[g][1] = 0;
    array[g][2] = 0;
      for (var i = 1; i < rowCount; i++){ // Cycle through rows
        if (array[g][0] == table.rows[i].cells[2].childNodes[0].value) { // Check for category match 
      array[g][1] += parseFloat(table.rows[i].cells[1].childNodes[0].value); 
      array[g][2] += 1 // Increment for new entry;
        }
     }      
  }
   
// Converting totals to comma format  
 var remaining = 17780 - tally
 tally = addCommas(tally);
  
 var message 
  
  if(remaining < 0 ){
        message = "&#x2714";
      }
  else{
    message = "";
  }
    
function addCommas(number){
   
return number.toFixed(0).replace(/./g, function(c, i, a) {
    return i && c !== "." && ((a.length - i) % 3 === 0) ? ',' + c : c;
});
  
}    
  
  document.getElementById('tFunds').innerHTML= tally; 
  document.getElementById('amountLeft').innerHTML= (addCommas(remaining));
   document.getElementById('status').innerHTML= message;
  document.getElementById('otherCat').innerHTML= (addCommas(array[0][1]));
  document.getElementById('otherCatNum').innerHTML= (array[0][2]);
  document.getElementById('ccCat').innerHTML= (addCommas(array[1][1]));
  document.getElementById('ccCatNum').innerHTML= (array[1][2]);
  document.getElementById('loansCat').innerHTML= (addCommas(array[2][1]));
  document.getElementById('loansCatNum').innerHTML= (array[2][2]);
  document.getElementById('assetsCat').innerHTML= (addCommas(array[3][1]));
  document.getElementById('assetsCatNum').innerHTML= (array[3][2]);
  document.getElementById('cashCat').innerHTML= (addCommas(array[4][1]));
  document.getElementById('cashCatNum').innerHTML= (array[4][2]);
}
  
function deleteList(myTable) {

            var table = document.getElementById(myTable);
            var rowCount = table.rows.length;

            for(var i=0; i<rowCount; i++) {
                var row = table.rows[i];
                var chkbox = row.cells[3].childNodes[0];
                if(null != chkbox && true == chkbox.checked) {
                    table.deleteRow(i);
                    rowCount--;
                    i--;

 document.getElementById('pTotal').innerHTML= rowCount-1;
                  
 updateFunds();      

            }
            }
        }

// Initialize list loop
window.onload = function() {

  var table = document.getElementById("TuitionTable");
           
  // Starting items and funds array
  var b=[["Checking Account",1000,"Cash"],["AmEx",4000,"Credit Cards"],["Stamp Collection",5000,"Asset for Sale"],["Mom & Dad",500,"Loans"]];
  
  var initialCount = b.length; 
  
 for(var j=0; j<initialCount; j++){
 var row = table.insertRow(rowCount);  
 var cell1 = row.insertCell(0);
            var element1 = document.createElement("input");
            element1.type = "text";
            element1.style.width="100%";
            element1.name = "txtbox[]";
            element1.value=b[j][0];
            cell1.appendChild(element1);
            
   
   var cell2 = row.insertCell(1);
            var element2 = document.createElement("input");
            element2.type = "number";
            element2.style.width="100%";
            element2.name = "txtbox[]";
            element2.value=b[j][1];
            cell2.appendChild(element2);
   
   // Status drop-down    
 var cell3 = row.insertCell(2);
   var element3 = document.createElement("select");
   
    // Loop for adding drop-down options
   for (var k = 0; k < array.length; k++) {           
    
    var option = document.createElement("option");
    option.value = array[k][0];
    option.text = array[k][0];
    element3.appendChild(option);
    cell3.appendChild(element3); 
    element3.value=b[j][2];
               
   }  
   
 var cell4 = row.insertCell(3);
            var element4 = document.createElement("input");
            element4.type = "checkbox";
            element4.name="chkbox[]";
            cell4.appendChild(element4);
            
  var rowCount = table.rows.length-1;

  document.getElementById('pTotal').innerHTML= rowCount;   
   
 }
  
  // Hours sum function call
  updateFunds();  
 
       }

// Update on changes
document.onchange = function(){
  updateFunds();
};