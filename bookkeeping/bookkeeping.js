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

    function addTransaction(){
        // var addDate = new Array();
        // var addDescription = new Array();
        // var addAmount = new Array();
        // var addCategory = new Array();
        // confirm("New Transaction:\n" + "Date:" + addDate + "\n" + "Description:" + addDescription +"\n" 
        //             + "Amount:" + addAmount + "\n" + "Category:" + addCategory);
        for(var i=1; i<=2; i++){
            var addDate = document.getElementById("add-date").value;
            var addDescription = document.getElementById("add-desp").value;
            var addAmount = document.getElementById("add-amount").value;
            var addCategory = display.innerHTML;
            document.getElementById("newdate" + i).innerHTML = addDate;
            document.getElementById("newdesp" + i).innerHTML = addDescription;
            document.getElementById("newcate" + i).innerHTML = addCategory;
            document.getElementById("newamount" + i).innerHTML = addAmount;
        }
    }

