var LineChart = echarts.init(document.getElementById('LineChart'));
var Pie = echarts.init(document.getElementById('Pie'));

var LineChartOption = {
    title: {
        text: ''
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
            dataView : {show: true, readOnly: false},
            magicType : {
                show: true,
                type: ['pie', 'funnel']
            },
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
Pie.setOption(PieOption);