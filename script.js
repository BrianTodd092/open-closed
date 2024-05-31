var q = new Date();
var t = q.getDay();

// Compare != to ===  , line 5 or 6 & 8 true, not Saturday or Sunday.else false bit
// if (t != 0 && t != 6)
if (t > 0 &&  t < 6){

document.getElementById('e').innerHTML = "Open";

}else {

document.getElementById('e').textContent = "Closed";


}
