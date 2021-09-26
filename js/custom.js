  new Vue({
    el: '#app',
    data: {
        search: null,
        payment:null

            }
});

var currentTab = 0;
document.addEventListener("DOMContentLoaded", function(event) {


showTab(currentTab);

});

function showTab(n) {
var x = document.getElementsByClassName("tab");
x[n].style.display = "block";
if (n == 0) {
document.getElementById("prevBtn").style.display = "none";
} else {
document.getElementById("prevBtn").style.display = "inline";
}
if (n == (x.length - 1)) {
} else {
}
if (n == (x.length - 2)) {
document.getElementById("delest").style.display = "block";
document.getElementById("shippayment").style.display = "contents";

}
fixStepIndicator(n)
}

function nextPrev(n) {
var x = document.getElementsByClassName("tab");
if (n == 1 && !validateForm()) return false;
x[currentTab].style.display = "none";
currentTab = currentTab + n;
if (currentTab >= x.length) {
document.getElementById("nextprevious").style.display = "none";
document.getElementById("all-steps").style.display = "none";
document.getElementById("register").style.display = "none";
document.getElementById("text-message").style.display = "block";

}
showTab(currentTab);
}

function validateForm() {
var x, y, i, valid = true;
x = document.getElementsByClassName("tab");
y = x[currentTab].getElementsByTagName("input");
for (i = 0; i < y.length; i++) { if (y[i].value=="" ) { y[i].className +=" invalid" ; valid=false; } } if (valid) { document.getElementsByClassName("step")[currentTab].className +=" finish" ; } return valid; } function fixStepIndicator(n) { var i, x=document.getElementsByClassName("step"); for (i=0; i < x.length; i++) { x[i].className=x[i].className.replace(" active", "" ); } x[n].className +=" active" ; }

       $("#nextBtn").click(function() {

    var form = $("#regForm")

    if (form[0].checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    form.addClass('was-validated');

});

       
 function show1(){
  document.getElementById('paymentblock').style.display ='none';
}
function show2(){
  document.getElementById('paymentblock').style.display = 'block';
}




  (function() {
   function IDGenerator() {
   
     this.length = 5;
     this.timestamp = +new Date;
     
     var _getRandomInt = function( min, max ) {
      return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
     }
     
     this.generate = function() {
       var ts = this.timestamp.toString();
       var parts = ts.split( "" ).reverse();
       var id = "";
       
       for( var i = 0; i < this.length; ++i ) {
        var index = _getRandomInt( 0, parts.length - 1 );
        id += parts[index];  
       }
       
       return id;
     }

     
   }
   
   
   document.addEventListener( "DOMContentLoaded", function() {
    var btn = document.querySelector( "#nextBtn" ),
     	output = document.querySelector( "#output" );
      
    btn.addEventListener( "click", function() {
      var generator = new IDGenerator();
      output.innerHTML = generator.generate();
      
    }, false); 
     
   });
   
   
 })();




var checkbox = document.getElementById('checkbox');
var delivery_div = document.getElementById('removethedrop');
var delivery_div1 = document.getElementById('removethedrop1');

checkbox.onclick = function() {
    console.log(this);
   if(this.checked) {
     delivery_div.style['display'] = 'block';
     delivery_div1.style['display'] = 'block';
      $('#dropshippername').prop('required',true);
       $('#dropshipperphonenumber').prop('required',true);
       document.getElementById("dropshippername").value = "";
      document.getElementById("dropshipperphonenumber").value = "";
   } else {
     delivery_div.style['display'] = 'none';
     delivery_div1.style['display'] = 'none';
     $('#dropshippername').prop('required',false);
      $('#dropshipperphonenumber').prop('required',false);
      document.getElementById("dropshippername").value = "0";
      document.getElementById("dropshipperphonenumber").value = "0";

   }
};

$('textarea').keyup(function() {
    
  var characterCount = $(this).val().length,
      current = $('#current'),
      maximum = $('#maximum'),
      theCount = $('#the-count');
    
  current.text(characterCount);
      
});