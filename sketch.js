//creating raindrops var
var drops =[];


function setup() {
  //created canvas
  createCanvas(1600,800);
  //forloop no.1
  for(var i =0;i<800;i++){
    drops[i]=new Rain (random(0,1600),0);
  }
 
}

function draw() {
  //made background
  background(0);
//forloop no.2 giving properties tp var drop
  for(var i =0; i <drops.length;i++){
    drops[i].display();
    drops[i].fall();
  }
}