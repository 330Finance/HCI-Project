ds = {
    'home': "",
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


    $('.datepicker').datepicker({
            format: 'mm/dd/yyyy'
            });

    var display = document.getElementById("categorydrop");
    for(var i=1; i<=4; i++){
        var button = document.getElementById("choice" + i);
        if (button != null){
            button.onclick = function(x){
                display.innerHTML = x.target.innerHTML;
            }
        }
    }

    var i = 1;
    function addTransaction(){
        // var addDate = document.getElementById("add-date").value;
        // var addDescription = document.getElementById("add-desp").value;
        // var addAmount = document.getElementById("add-amount").value;
        // var addCategory = display.innerHTML;
        // confirm("New Transaction:\n" + "Date:" + addDate + "\n" + "Description:" + addDescription +"\n" 
        //             + "Amount:" + addAmount + "\n" + "Category:" + addCategory);
        var addDate = document.getElementById("add-date").value;

        //modify by xuzhu
        ds["bkptime"] = addDate;

        var addDescription = document.getElementById("add-desp").value;

        //modify by xuzhu
        ds["bkpdes"] = addDescription;
        var addAmount = document.getElementById("add-amount").value;
        ds["bkpamount"] = addAmount;
        var addCategory = display.innerHTML;
        ds["bkpcate"] = addCategory;
        document.getElementById("newdate" + i).innerHTML = addDate;
        document.getElementById("newdesp" + i).innerHTML = addDescription;
        document.getElementById("newcate" + i).innerHTML = addCategory;
        document.getElementById("newamount" + i).innerHTML = addAmount;
        i++;

        ds['home'] -= addAmount;
    }


function initial() {
    // todo: add some code
    var jsonstring = window.location.hash;
    if (jsonstring === "") ;
    else {
        ds = JSON.parse(decodeURI(jsonstring.substr(1)));
        document.getElementById("newdate" + 1).innerHTML = ds["bkptime"];
        document.getElementById("newdesp" + 1).innerHTML = ds["bkpdes"];
        document.getElementById("newcate" + 1).innerHTML = ds["bkpcate"];
        document.getElementById("newamount" + 1).innerHTML = ds["bkpamount"];
            document.getElementById("newdate" + 2).innerHTML = ds["bkptime"];
        document.getElementById("newdesp" + 2).innerHTML = ds["wlname"];
        if(ds["wlprice"]!==""){
        document.getElementById("newcate" + 2).innerHTML = "wishlist";}
        document.getElementById("newamount" + 2).innerHTML = ds["wlperday"];
    }

}
function goToBKP() {
    var url = "./bookkeeping.html";
    url += '#' + encodeURI(JSON.stringify(ds));
    window.location.href = url;
}

function goToIndex() {
    var url = "../index.html";
    url += '#' + encodeURI(JSON.stringify(ds));
    window.location.href = url;
}

function goToCharts() {
    var url = "../charts.html";
    url += '#' + encodeURI(JSON.stringify(ds));
    window.location.href = url;
}

function goToWishlist() {
    var url = "../wishlist.html";
    url += '#' + encodeURI(JSON.stringify(ds));
    window.location.href = url;
}
function goToConvert() {
    var url = "../currency_converter.html";
    url += '#' + encodeURI(JSON.stringify(ds));
    window.location.href = url;
}

initial();
