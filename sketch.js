var T;



//  MAKE T IN THE JAVASCRIPT TO YOU CAN RE ASIN T TO A
// NEW TEXT ELIMENT WHEN ENTER IS PRESED TO IT IS 
// ALWAYS CLEARD 

function setup() {
  //createCanvas(windowWidth, windowHeight);
  noCanvas();
  T = select("#in");
  points = createElement("h3", "");

  
}

var xp = 0;
let points;
function draw() {
  
  
  
  rect(windowWidth - 40, windowHeight - 40, 40,40);
  
  

  
  T.changed(enter)
  
  
  
  var thing = selectAll("button");
  
  for(var i = 0; i < thing.length; i++){
    thing[i].mouseClicked(kill);
    

    
  }
  
}


function enter(){
  var a = createElement("button", T.value());
  //a.position(0,x);
  
  
}

function kill(){
  this.remove();
  points.remove();
  points = createElement("h3", "XP: " + str(xp));
  points.style("color", "yellow");
  points.position(windowWidth - 80, windowHeight - 40);
  xp++;
  
}




// BUGS 
// CAN NOT MAKE SAME THING TWICE 
// TEXT FEALD DOES NOT CLEAR
// their is no canvace 
// numbers stack ontop of echonger 