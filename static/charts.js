var Chart = echarts.init(document.getElementById('Chart'));
//var JSONTest = {"Month": ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'], "valuePerMonth": [820, 932, 901, 934, 1290, 1330, 1320, 693, 788, 1573, 973, 1160]};
var ds;

var LineChartOption = {
    title: {
        text: ''
    },
    tooltip : {
        trigger: 'item',
        formatter: "{b} : {c}"
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            saveAsImage : {show: true}
        }
    },
    xAxis: {
        type: 'category',
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        center : ['50%', '50%'],
        label: {
            normal: {
                show: true,
                position: 'top'
            }
        },
        data: [820, 932, 901, 934, 1290, 1330, 1320, 693, 788, 1573, 973, 1160],
        type: 'line'
    }]
};

PieOption = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    legend: {
        //orient: 'vertical',
        //x: 'left',
        bottom: 10,
        left: 'center',
        data:['Fuel / transportation','Parking','Clothing & shoes','Eating out','Entertainment','Sports','Hair care','Magazines / books','Other']
    },
    series: [
        {
            name:'Radio',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: true,
                    position: 'outside'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: true
                }
            },
            data:[
                {value:100, name:'Fuel / transportation'},
                {value:50, name:'Parking'},
                {value:150, name:'Clothing & shoes'},
                {value:250, name:'Eating out'},
                {value:200, name:'Entertainment'},
                {value:350, name:'Sports'},
                {value:50, name:'Hair care'},
                {value:100, name:'Magazines / books'},
                {value:200, name:'Other'}
            ]
        }
    ]
};

var ChartOption = LineChartOption;

Chart.setOption(ChartOption);

window.addEventListener("resize", function () {
    Chart.resize();
});

function changeLineChart() {
    var currentChart = document.getElementById("changeChartBtn").innerText;
    if (currentChart !== "LineChart") {
        Chart.clear();
        ChartOption = LineChartOption;
        Chart.setOption(ChartOption);
        document.getElementById("changeChartBtn").innerText = "LineChart";
    }
}

function changePie() {
    var currentChart = document.getElementById("changeChartBtn").innerText;
    if (currentChart !== "Pie") {
        Chart.clear();
        ChartOption = PieOption;
        Chart.setOption(ChartOption);
        document.getElementById("changeChartBtn").innerText = "Pie";
    }
}

function initial() {
    var jsonstring = window.location.hash;
    if (jsonstring === "") ;
    else {
        ds = JSON.parse(decodeURI(jsonstring.substr(1)));
    }
}

initial();

function goToHome() {
    var url = "./index.html";
    url += '#' + encodeURI(JSON.stringify(ds));
    window.location.href = url;
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
