 // = ["Chandigarh", "Patna", "Dispur", "Chandigarh", "Raipur"];
// var stat =  ["Punjab", "Bihar", "Assam", "Haryana", "Chhattisgarh"];
//
//
//
// document.getElementById("capital").innerHTML = (Math.floor(Math.random() * cap.length));

function validate () {
  if(document.myForm.fname.value == "") {
    alert("Please provide your name" );
    document.myForm.fname.focus();
    return false;
  }

  var emailID = document.myForm.email.value;
  atpos = emailID.indexOf("@");
  dotpos = emailID.lastIndexOf(".");

  if (atpos < 1 || ( dotpos - atpos < 2 )) {
     alert("Please enter correct email ID")
     document.myForm.email.focus() ;
     return false;
  }

  if(document.myForm.pass.value == "") {
    alert("Arrange some passwod please" );
    document.myForm.pass.focus();
    return false;
  }

  if(document.myForm.cont.value == "") {
    alert("your contact please" );
    document.myForm.cont.focus();
    return false;
  }
return true;
}


var specialKeys = new Array();
specialKeys.push(8); //Backspace
function IsNumeric(e) {
    var keyCode = e.which ? e.which : e.keyCode
    var ret = ((keyCode >= 48 && keyCode <= 57) || specialKeys.indexOf(keyCode) != -1);
    document.getElementById("error").style.display = ret ? "none" : "inline";
    return ret;
}


function Redirect() {
              window.location.href="file.html";
           }
// var name = new Ar();
// name.push(8);
// function IsChar(ev) {
//   var keyc = ev.which ? ev.which : ev.keyc
//   var retu = ((keyc > 64 && keyc < 91) || (keyc > 96 && keyc < 123) || specialKeys.indexOf(keyCode) != -1 );
//   document.getElementById("error").style.display = retu ? "none" : "inline";
//   return retu;
// }

//
