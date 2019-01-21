var openFile = function(event) {
     var input = event.target;

     var reader = new FileReader();
     reader.onload = function() {
      var dataURL = reader.result;
      var output = document.getElementById('output');
      output.src = dataURL;
    };

    reader.readAsDataURL(input.files [0]);
  };


document.getElementById("openfile").addEventListener('change', function() {
  var fr = new FileReader();
  fr.onload = function(){
    document.getElementById("Filecontents").textContent = this.result;
  }
  fr.readAsText(this.files[0]);
});
