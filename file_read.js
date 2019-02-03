// Check for the various File API support.
/*if (window.File && window.FileReader && window.FileList && window.Blob) {
alert ('Great success!! All the File APIs are supported.');

}
else {
  alert('The File APIs are not fully supported in this browser.');
}  */

//**********************************************************************************************************************88
/* Explanation:
. "FileReader" to handle asynchronously loading the image.
. After creating the new FileReader object, set up its "onload" function and
  then call readAsDataURL() to start the read operation in the background.
. When the entire contents of the image file are loaded, they are converted into a data.
. URL which is passed to the onload callback.
. This routine sets the img element's src attribute to the loaded image which results
   in the image appearing on the user's screen.*/


// To upload an image file and read it....
var openFile = function(event) {
     var input = event.target;

     var reader = new FileReader(); //in order, to read a file....create a new instance of FileReader
     reader.onload = function() {  //after loading the file, it will gives the results !
       //The result will available after load event fires
      var out = reader.result;  // for onload event, result property is used to get the file's content.
      var output = document.getElementById('output');
      output.src = out;
    };

    reader.readAsDataURL(input.files [0]);  /*  produces a data URL,
    // this data URL is basically used for things like setting the src property for an image.
    // [0] : to fetch the first file from our input */
  };

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Explanation :
/* . Determined the file type.
. Create a new instance of "FileReader".
. Next, setup an event listener for the "onload" event.
. When the onload event is called, then the "result" property of "FileReader" instance is called, to get the file's content.  */

// To upload an text or csv file and read it....
// In order to change the input, so addEventListener
document.getElementById("openfile").addEventListener('change', function() {  //  to add the change event listener
  var fr = new FileReader();
  fr.onload = function(){   // onload called after read operation
    //after loading the file, it will gives the results !

    document.getElementById("Filecontents").textContent = this.result;
    // The result will be stored in (this.result) after the 'load' event fires.
  }    // The result property will contain the file data as a text string
  fr.readAsText(this.files[0]);  //for csv files, read it as text
});


// 888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888

// one another way to read csv file via js

var intf = document.getElementById("readfile");
var outf = document.getElementById("readout");
intf.addEventListener("change", function () {
  if (this.files && this.files[0]) {
    var readfile = this.files[0];
    var readf = new FileReader();
    readf.addEventListener('load', function (e) {
      outf.textContent = e.target.result;
    });
    readf.readAsText(readfile);
  }
});

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


// var sep = document.getElementById("separate");
// var fil = document.getElementById("filter");
//
// // var sepfile = sep.files;
// var data = "";
//
// for (var i=0; i<10; i++) {
//   data += sep[i] + <br>;
// }
// document.getElementById("separate").innerHTML = data;

 // data.addEventListener("change", function () {
 //    if (this.files && this.files[0]) {
 //           var separate = this.files[0];
 //
 //  var readr = new FileReader();
 //     readr.addEventListener('load', function (e) {
 //            fil.textContent = e.target.result; //concatenate the output on each iteration.
 // });
 //     readr.readAsText(separate);
 //   }
 // });



// var filters = {
//     'line': 'Commercial',
//     'construction': 'Reinforced Masonry'
// };
//
// d3.csv("data.csv", function(csv) {
//     csv = csv.filter(function(row) {
//         // run through all the filters, returning a boolean
//         return ['policyID','statecode','line','construction'].reduce(function(pass, column) {
//             return pass && (
//                 // pass if no filter is set
//                 !filters[column] ||
//                     // pass if the row's value is equal to the filter
//                     // (i.e. the filter is set to a string)
//                     row[column] === filters[column] ||
//                     // pass if the row's value is in an array of filter values
//                     filters[column].indexOf(row[column]) >= 0
//                 );
//         }, true);
//     })
//     console.log(csv.length, csv);
// });
