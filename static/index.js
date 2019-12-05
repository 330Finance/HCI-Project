ds = {
	'home': 500,
	'bkpname': "",
	'bkpdes': "",
	'bkptime': "",
	'bkpcate': "",
	'bkpamount': "",
	'wlname': "",
	'wlprice': "",
	'wldays': "",
	'wldiss': "",
	'wlperday': "",
	'chmonth': ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
	'chamount': [820, 932, 901, 934, 1290, 1330, 1320, 693, 788, 1573, 973, 1160]
}

function initial() {
	var jsonstring = window.location.hash;
	if (jsonstring === "")
		document.getElementById("homeAmount").innerHTML = ds["home"];
	else {
		var jsonstring = window.location.hash;
		ds = JSON.parse(decodeURI(jsonstring.substr(1)));
		document.getElementById("homeAmount").innerHTML = ds["home"];
	}
   
}

function goToBKP() {
	var url = "./bookkeeping/bookkeeping.html";
	url += '#' + encodeURI(JSON.stringify(ds));
	window.location.href = url;
}

function goToCharts() {
    var url = "./charts.html";
    url += '#' + encodeURI(JSON.stringify(ds));
    window.location.href = url;
}

function goToWishlist() {
    var url = "./wishlist.html";
    url += '#' + encodeURI(JSON.stringify(ds));
    window.location.href = url;
}
function goToConvert() {
    var url = "./currency_converter.html";
    url += '#' + encodeURI(JSON.stringify(ds));
    window.location.href = url;
}


initial();