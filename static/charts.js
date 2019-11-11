/*
var LineChart = echarts.init(document.getElementById('LineChart'));
var Pie = echarts.init(document.getElementById('Pie'));

var LineChartOption = {
    title: {
        text: ''
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            restore : {show: true},
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
        data: [820, 932, 901, 934, 1290, 1330, 1320, 693, 788, 1573, 973, 1160],
        type: 'line'
    }]
};

var PieOption = {
    title : {
        text: '',
        subtext: '',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        x : 'center',
        y : 'bottom',
        data:['Fuel / transportation','Parking','Clothing & shoes','Eating out','Entertainment','Sports','Hair care','Magazines / books','Other']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    series : [
        {
            name:'Ratio',
            type:'pie',
            radius : [20, 110],
            center : ['50%', '50%'],
            roseType : 'radius',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            lableLine: {
                normal: {
                    show: false
                },
                emphasis: {
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

LineChart.setOption(LineChartOption);
window.addEventListener("resize", function () {
    LineChart.resize();
});
Pie.setOption(PieOption);
window.addEventListener("resize", function () {
    Pie.resize();
});*/

var Chart = echarts.init(document.getElementById('Chart'));

var ChartOption = {
    title: {
        text: ''
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            restore : {show: true},
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

Chart.setOption(ChartOption);
window.addEventListener("resize", function () {
    Chart.resize();
});
