var form ;
var database;
var ref;

function setup(){
  database = firebase.database();
  console.log(database);
  canvas = createCanvas(1500,1000);
  ref = database.ref('Details');
  form = new Form();  
  form.display();

}
function draw(){
  background("blue");


  fill("pink");
  textSize(80);
  text("THANKS FOR ATTEMTING MY SURVEY",10,900);
}
