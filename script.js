

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

function portfolio() {

//Determine Crypto Risk
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
//End of Determine Crypto Risk

// Determine currency prices
  var btcpr = 42000 * btc_risk_val;
  var btcpr1 = btcpr.toFixed(2);
  document.getElementById("BTCPR").innerHTML = "$" + btcpr1;

  var ethpr = 2000 * eth_risk_val;
  var ethpr1 = ethpr.toFixed(2);
  document.getElementById("ETHPR").innerHTML = "$" + ethpr1;

  var xrppr = 1.50 * xrp_risk_val;
  var xrppr1 = xrppr.toFixed(2);
  document.getElementById("XRPPR").innerHTML = "$" + xrppr1;

  var bnbpr = 350 * bnb_risk_val;
  var bnbpr1 = bnbpr.toFixed(2);
  document.getElementById("BNBPR").innerHTML = "$" + bnbpr1;

  var dogepr = 0.50 * doge_risk_val;
  var dogepr1 = dogepr.toFixed(2);
  document.getElementById("DOGEPR").innerHTML = "$" + dogepr1;

  var dotpr = 25 * dot_risk_val;
  var dotpr1 = dotpr.toFixed(2);
  document.getElementById("DOTPR").innerHTML = "$" + dotpr1;

  var linkpr = 30 * link_risk_val;
  var linkpr1 = linkpr.toFixed(2);
  document.getElementById("LINKPR").innerHTML = "$" + linkpr1;

  var unipr = 32 * uni_risk_val;
  var unipr1 = unipr.toFixed(2);
  document.getElementById("UNIPR").innerHTML = "$" + unipr1;

  var xlmpr = 0.50 * xlm_risk_val;
  var xlmpr1 = xlmpr.toFixed(2);
  document.getElementById("XLMPR").innerHTML = "$" + xlmpr1;

  var adapr = 1.50 * ada_risk_val;
  var adapr1 = adapr.toFixed(2);
  document.getElementById("ADAPR").innerHTML = "$" + adapr1;

// End of Determine currency prices

// Human Crypto Portfolio
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
//var VCHECK = HBTC + HETH + HXRP + HBNB + HDOGE + HDOT + HLINK + HUNI + HXLM + HADA;
//console.log(VCHECK);
//if (CHECK > 100) {alert ("Too High")};
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
var HPORT_VALUE1 = HPORT_VALUE.toFixed(2);
document.getElementById("hportfolio").innerHTML = "$" + HPORT_VALUE1;
// End of Human Crypto Portfolio

// Satoshi Crypto Portfolio
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
var SPORT_VALUE1 = SPORT_VALUE.toFixed(2);
document.getElementById("sportfolio").innerHTML = "$" + SPORT_VALUE1;
// End of Satoshi Crypto Portfolio

//Compare Portfolios
if (SPORT_VALUE < HPORT_VALUE) {
  document.getElementById("results").innerHTML = "You Won!!";
} else {
  document.getElementById("results").innerHTML = "You Lost :(";
}
//End of Compare Portfolios
}
