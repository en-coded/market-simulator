

//Get the risk with BTC
var risk = function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
//End of (Get the risk with BTC)

//Get BTC investment from Human
function btc_input() {
  var HBTC = document.getElementById("HBTC").value;
  document.getElementById("demo").innerHTML = HBTC;
}
// End of BTC investment from Human

function H_VALUE() {
  var btc_risk_val = risk(0.95,1.1);
  var eth_risk_val = risk(0.9,1.2);
  var xrp_risk_val = risk(0.75,1.25);
  var bnb_risk_val = risk(0.95,1.25);
  var doge_risk_val = risk(0.95,1.1);
  var dot_risk_val = risk(0.8,1.2);
  var link_risk_val = risk(0.45,1.0);
  var uni_risk_val = risk(0.75,1.25);
  var xlm_risk_val = risk(0.95,1.1);
  var ada_risk_val = risk(0.8,1.2);
  var HBTC = document.getElementById("HBTC").value;
  var HETH = document.getElementById("HETH").value;
  var HXRP = document.getElementById("HXRP").value;
  var HBNB = document.getElementById("HBNB").value;
  var HDOGE = document.getElementById("HDOGE").value;
  var HDOT = document.getElementById("HDOT").value;
  var HLINK = document.getElementById("HLINK").value;
  var HUNI = document.getElementById("HUNI").value;
  var HXLM = document.getElementById("HXLM").value;
  var HADA = document.getElementById("HADA").value;
  var HBTC = HBTC * 10000 / 100;
  var HETH = HETH * 10000 / 100;
  var HXRP = HXRP * 10000 / 100;
  var HBNB = HBNB * 10000 / 100;
  var HDOGE = HDOGE * 10000 / 100;
  var HDOT = HDOT * 10000 / 100;
  var HLINK = HLINK * 10000 / 100;
  var HUNI = HUNI * 10000 / 100;
  var HXLM = HXLM * 10000 / 100;
  var HADA = HADA * 10000 / 100;
  var CASH = 10000 - HBTC - HETH - HXRP - HBNB - HDOGE - HDOT - HLINK - HUNI - HXLM - HADA;
  var PORT_VALUE = btc_risk_val * HBTC + eth_risk_val * HETH + xrp_risk_val * HXRP + bnb_risk_val * HBNB + doge_risk_val * HDOGE + dot_risk_val * HDOT + link_risk_val * HLINK + uni_risk_val * HUNI + xlm_risk_val * HXLM + ada_risk_val * HADA + CASH;
  document.getElementById("portfolio").innerHTML = PORT_VALUE;
  }
