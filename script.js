function getFormattedDate() { /*to display timestamp*/
    var date = new Date();

    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();

    month = (month < 10 ? "0" : "") + month;
    day = (day < 10 ? "0" : "") + day;
    hour = (hour < 10 ? "0" : "") + hour;
    min = (min < 10 ? "0" : "") + min;
    sec = (sec < 10 ? "0" : "") + sec;
    
    
    if(hour>=13) {
        hour = hour-12;
        mtime = "PM";
    } else { 
        mtime = "AM";
    }

    var str = "Generated at " + hour + ":" + min + ":" + sec + " " + mtime + ", " + day + "/" + month + "/" + date.getFullYear()

    return str;
}


function shufflearray() { /*Durstenfeld shuffle*/
    var names = document.getElementById("playername");             
    var namearray = names.value.replace(/\r\n/g,"\n").split("\n");
    
    var numbers = document.getElementById("playernumber");    
    var numberarray = numbers.value.replace(/\r\n/g,"\n").split("\n");
    
    var array = [];
    
    var arr = []
        for (var k = 0; k < namearray.length; k++) {
        arr[k]= [numberarray[k],namearray[k]]
        /*console.log(arr[k]) */
        array.push(arr[k]);
    }
    
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];   
    }
             
        
/*console.log(array)

CREATE TABLE FOR ROTATION*/
  /*to create table      function createTable(tableData) { 
              var table = document.createElement('table');
              var tableBody = document.createElement('tbody');

              tableData.forEach(function(rowData) {
                var row = document.createElement('tr');

                rowData.forEach(function(cellData) {
                  var cell = document.createElement('td');
                  cell.appendChild(document.createTextNode(cellData));
                  row.appendChild(cell);
                });

                tableBody.appendChild(row);
              });

              table.appendChild(tableBody);
              document.body.appendChild(table);
            }

    rotationtable = createTable([array]); */

    
/*    
       function makeTableHTML(myArray) {
            var result = "<table border=1>";
            for(var i=0; i<myArray.length; i++) {
                result += "<tr>";
                for(var j=0; j<myArray[i].length; j++){
                    result += "<td>"+myArray[i][j]+"</td>";
                }
                result += "</tr>";
            }
            result += "</table>";
            return result;
        }
    
    result = makeTableHTML(array);
    
    document.getElementById("rotation").innerHTML = result; */
    
    
/*console.log(array[0][1])
   console.log(array[1][1])
   console.log(array[2][1])
   console.log(array[3][1])
   console.log(array[4][1])
   console.log(array[5][1])
   console.log(array[6][1])
   console.log(array[7][1]) */
  

    document.getElementById("r1").innerHTML = "#" + array[0][0] + " " + array[0][1];
    document.getElementById("r2").innerHTML = "#" + array[1][0] + " " + array[1][1];
    document.getElementById("r3").innerHTML = "#" + array[2][0] + " " + array[2][1];
    document.getElementById("r4").innerHTML = "#" + array[3][0] + " " + array[3][1];
    document.getElementById("r5").innerHTML = "#" + array[4][0] + " " + array[4][1];
    
    document.getElementById("r6").innerHTML = "#" + array[5][0] + " " + array[5][1] + " " + "(L)" + ",";
    document.getElementById("r7").innerHTML = "#" + array[6][0] + " " + array[6][1] + " " + "(M)";
    
        
            /*print timestamp*/
    document.getElementById("timestamp").innerHTML =getFormattedDate();
}

            
function cleartext() {
    document.getElementById("playernumber").value = "";
    document.getElementById("playername").value = "";
    array = [];
    }