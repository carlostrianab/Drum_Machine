function init(){
  
  
  //VARIABLES
  var display = document.getElementById('display');
  var q = document.getElementById('q');
  var w = document.getElementById('w');
  var e = document.getElementById('e');
  var a = document.getElementById('a');
  var s = document.getElementById('s');
  var d = document.getElementById('d');
  var z = document.getElementById('z');
  var x = document.getElementById('x');
  var c = document.getElementById('c');
  
  //EVENTS 
  
  //onclick events
  q.onclick = function(e){
    display.textContent = 'B-DRUM';
    document.getElementById('Q').play();
  };
  w.onclick = function(e){
    display.textContent = 'COWBELL';
    document.getElementById('W').play();
  };
  e.onclick = function(e){
    display.textContent = 'CRASH-1';
    document.getElementById('E').play();
  };
   a.onclick = function(e){
    display.textContent = 'HH-CLOSE';
    document.getElementById('A').play();
  };
   s.onclick = function(e){
    display.textContent = 'HI-CONGA';
    document.getElementById('S').play();
  };
   d.onclick = function(e){
    display.textContent = 'LOW-CONGA';
    document.getElementById('D').play();
  };
   z.onclick = function(e){
    display.textContent = 'SNARE';
    document.getElementById('Z').play();
  };
  x.onclick = function(e){
    display.textContent = 'TAMB';
    document.getElementById('X').play();
  };
  c.onclick = function(e){
    display.textContent = 'TOM';
    document.getElementById('C').play();
  };
  
  //keydown events 
  document.addEventListener('keydown', function(event) {
    if(event.keyCode == 81) {
        display.textContent = 'B-DRUM';
        document.getElementById('Q').play();
    }
    else if(event.keyCode == 87) {
        display.textContent = 'COWBELL';
        document.getElementById('W').play();
    }
    else if(event.keyCode == 69) {
        display.textContent = 'CRASH-1';
        document.getElementById('E').play();
    }
    else if(event.keyCode == 65) {
        display.textContent = 'HH-CLOSE';
        document.getElementById('A').play();
    }
    else if(event.keyCode == 83) {
        display.textContent = 'HI-CONGA';
        document.getElementById('S').play();
    }
    else if(event.keyCode == 68) {
        display.textContent = 'LOW-CONGA';
        document.getElementById('D').play();
    }
    else if(event.keyCode == 90) {
        display.textContent = 'SNARE';
        document.getElementById('Z').play();
    }
    else if(event.keyCode == 88) {
        display.textContent = 'TAMB';
        document.getElementById('X').play();
    }
     else if(event.keyCode == 67) {
        display.textContent = 'TOM';
        document.getElementById('C').play();
    }
});
  
}