



function greetingstudentName(){
    

    var studentName = prompt("what is you name?"); 
    while (studentName==='') {
        studentName = prompt("what is you name?"); 
        
    }
  alert ("Hello  " + studentName);

}


function checkUninumber(){

    var uniNumber = prompt("what is you university number?");{
  
        if (uniNumber > 1000 ) {
            alert ("plz sign up first");
        
        }else {
            alert ("rewrite your university number correctly");
        }
    }

}


greetingstudentName();

checkUninumber();


    















