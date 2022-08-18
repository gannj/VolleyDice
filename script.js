var playerList = ["JT","nic","eddy","bond","chap","johan","player7"];

/* add player button - adds player to array and displays in table */
function addPlayer() {
    var nHTML = '';
    let data = document.getElementById('newPlayer');
    playerList.push(data.value);
    console.log(playerList);
    document.getElementById("newPlayer").value = "";

    playerList.forEach(function(item) {
        nHTML += '<tr><td>' + item + ' <button onclick="removePlayer()">Remove</button></tr></td>';
      });
    
      document.getElementById("playerList").innerHTML = nHTML
}
/*remove player button - removes player for array, reprints table and randomises the rotation */
function removePlayer() {
   
} 
/* on load array team list population */
window.onload = function() {
    var nHTML = '';
    playerList.forEach(function(item) {
        nHTML += '<tr><td>' + item + ' <button onclick="removePlayer()">Remove</button></tr></td>';
      });
    
      document.getElementById("playerList").innerHTML = nHTML
  };

/* shuffle and print the array */
function shufflearray() {
        var array=[...playerList];
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    console.log(JSON.stringify(array));

    document.getElementById("r1").innerHTML = array[0];
    document.getElementById("r2").innerHTML = array[1];
    document.getElementById("r3").innerHTML = array[2];
    document.getElementById("r4").innerHTML = array[3];
    document.getElementById("r5").innerHTML = array[4];
    document.getElementById("r6").innerHTML = array[5];
    /*document.getElementById("r7").innerHTML = array[6];*/
}

function cleartext() {
    document.getElementById("playernumber").value = "";
    document.getElementById("playername").value = "";
    array = [];
}
