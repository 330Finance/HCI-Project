    var rank;
    var ds = {
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
    function update() {
var r=rank.value
        var a1=document.getElementById("name"+r)
        var a2=document.getElementById("price"+r)
        var a3=document.getElementById("time"+r)
        var a4=document.getElementById("description"+r)
        var a5=document.getElementById("money"+r)

        var b1=document.getElementById("name").value
        var b2=document.getElementById("price").value
        var b3=document.getElementById("time").value
        var b4=document.getElementById("description").value
var b5=Math.ceil(b2/b3)
          if(isNaN(b5)){
        alert("Please input positive number in time limit and price!!!!")   }else{a1.innerHTML=b1
        a2.innerHTML=b2
        a3.innerHTML=b3
        a4.innerHTML=b4
        a5.innerHTML=b5
        ds["wlname"] = b1;


        ds["wlprice"] = b2;


        ds["wldays"] = b3;


        ds["wldiss"] = b4;

        ds["wlperday"] = b5;

        ds["home"] -= b5;


    }

      
    
        // a5.innerHTML=Math.ceil(b2/b3)
    }


    function initial() {
    // todo: add some code
    var jsonstring = window.location.hash;
    if (jsonstring === "") ;
    else {
        ds = JSON.parse(decodeURI(jsonstring.substr(1)));
        if(ds["wlprice"]===""){ document.getElementById("name" + 1).innerHTML = "Product Name:";}
        else{
        document.getElementById("name" + 1).innerHTML = ds["wlname"];}

        document.getElementById("price" + 1).innerHTML = ds["wlprice"];
        document.getElementById("time" + 1).innerHTML = ds["wldays"];
        document.getElementById("description" + 1).innerHTML = ds["wldiss"];
        document.getElementById("money" + 1).innerHTML = ds["wlperday"];
    }

}

function goToBKP() {
    var url = "./bookkeeping/bookkeeping.html";
    url += '#' + encodeURI(JSON.stringify(ds));
    window.location.href = url;
}

function goToHome() {
    var url = "./index.html";
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
function disp_prompt()
{

    alert("only rank1 is used to record your wish product");
}
function f1()
{
 rank=document.getElementById("rank")
}
function del()
{
 var rr=document.getElementById("delrank").value
        var a1=document.getElementById("name"+rr)
        var a2=document.getElementById("price"+rr)
        var a3=document.getElementById("time"+rr)
        var a4=document.getElementById("description"+rr)
        var a5=document.getElementById("money"+rr)
        a1.innerHTML="Product Name"
        a2.innerHTML=""
        a3.innerHTML=""
        a4.innerHTML=""
        a5.innerHTML=""
}
initial();