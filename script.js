

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
  var HCASH = 10000 - HBTC - HETH - HXRP - HBNB - HDOGE - HDOT - HLINK - HUNI - HXLM - HADA;
  var HPORT_VALUE = btc_risk_val * HBTC + eth_risk_val * HETH + xrp_risk_val * HXRP + bnb_risk_val * HBNB + doge_risk_val * HDOGE + dot_risk_val * HDOT + link_risk_val * HLINK + uni_risk_val * HUNI + xlm_risk_val * HXLM + ada_risk_val * HADA + HCASH;
  document.getElementById("hportfolio").innerHTML = HPORT_VALUE;
  }

  function S_VALUE() {
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
    var SBTC = document.getElementById("SBTC").value;
    var SETH = document.getElementById("SETH").value;
    var SXRP = document.getElementById("SXRP").value;
    var SBNB = document.getElementById("SBNB").value;
    var SDOGE = document.getElementById("SDOGE").value;
    var SDOT = document.getElementById("SDOT").value;
    var SLINK = document.getElementById("SLINK").value;
    var SUNI = document.getElementById("SUNI").value;
    var SXLM = document.getElementById("SXLM").value;
    var SADA = document.getElementById("SADA").value;
    var SBTC = SBTC * 10000 / 100;
    var SETH = SETH * 10000 / 100;
    var SXRP = SXRP * 10000 / 100;
    var SBNB = SBNB * 10000 / 100;
    var SDOGE = SDOGE * 10000 / 100;
    var SDOT = SDOT * 10000 / 100;
    var SLINK = SLINK * 10000 / 100;
    var SUNI = SUNI * 10000 / 100;
    var SXLM = SXLM * 10000 / 100;
    var SADA = SADA * 10000 / 100;
    var SCASH = 10000 - SBTC - SETH - SXRP - SBNB - SDOGE - SDOT - SLINK - SUNI - SXLM - SADA;
    var SPORT_VALUE = btc_risk_val * SBTC + eth_risk_val * SETH + xrp_risk_val * SXRP + bnb_risk_val * SBNB + doge_risk_val * SDOGE + dot_risk_val * SDOT + link_risk_val * SLINK + uni_risk_val * SUNI + xlm_risk_val * SXLM + ada_risk_val * SADA + SCASH;
    document.getElementById("sportfolio").innerHTML = SPORT_VALUE;
    }
