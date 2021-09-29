///variables for hen and pumpkin
var hen = 0;
var pumpkin = 0;
//event for the start button
onEvent("button6", "click", function( ) {
  setScreen("screen2");
});
//event for clicking the hen
onEvent("button1", "click", function( ) {
  hen = hen + 1;
  setNumber("label3", hen);
  setPosition("button1", randomNumber(40, 295), randomNumber(170, 415), 85, 75);
});
setTimeout(function() {
  setScreen("screen3");
}, 10000);



//setting the time for 10 seconds and toggle to pumpkin screen


//event for  pumpkin
onEvent("button2", "click", function( ) {
  pumpkin = pumpkin+1;
  setNumber("label5", pumpkin);
  setPosition("button2", randomNumber(38, 277), randomNumber(286, 280), 105, 50);
});




//20 seconds time frame then toggle to last screen
setTimeout(function() {
  setScreen("screen4");
  setText("label9", hen);
  setText("label10", pumpkin);
}, 20000);
