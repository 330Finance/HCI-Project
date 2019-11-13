var Chart = echarts.init(document.getElementById('Chart'));

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
            name:'Ratio',
            type:'pie',
            radius: ['60%', '80%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
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
                    show: false
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
