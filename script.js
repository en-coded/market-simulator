

//Get the risk with BTC
var btc_risk = function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

var BTC_RISK = btc_risk(0.5,1);
//End of (Get the risk with BTC)


//Get BTC investment from Human
function myFunction() {
  var HBTC = document.getElementById("HBTC").value;
  document.getElementById("demo").innerHTML = HBTC;
}
// End of BTC investment from Human

function H_VALUE() {
  var BTC_RISK = btc_risk(0.5,1);
  var HBTC = document.getElementById("HBTC").value;
  var BTC_VALUE = BTC_RISK * HBTC;
  document.getElementById("demo2").innerHTML = BTC_VALUE;
  }
