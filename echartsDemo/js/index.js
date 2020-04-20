/*line*/
var lineChart = echarts.init(document.getElementById('js-line'));
var lineOption = {
    legend: {
        left: '10%',
        data: ['案件数', '节点数'],
    },
    xAxis: {
        type: 'category',
        data: ['2015/10', '2015/11', '2015/12', '2016/01', '2016/02', '2016/03', '2016/04', '2016/05', '2016/06', '2016/07', '2016/08', '2016/09'],
        // axisLabel:{interval: 0}
    },
    yAxis: {
        max : 85,
        splitNumber : 5,
        axisTick: {
            show: false
        }
    },
    series: [{
        name: '节点数',
        type: 'line',
        data: [68, 34, 51, 70, 71, 55, 85, 34, 56, 85, 70, 45],
        barWidth: 15,
        color: ["#F0B9C1"],
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#F0B9C1'
                },
                    {
                        offset: 1,
                        color: '#FFF'
                    }
                ], false)
            }
        },
    }, {
        name: '案件数',
        type: 'line',
        data: [51, 15, 22, 60, 32, 35, 40, 45, 19, 35, 48, 25],
        barWidth: 15,
        color: ["#93C3E0"],
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#93C3E0'
                },
                    {
                        offset: 1,
                        color: '#FFF'
                    }
                ], false)
            }
        },
    }]
};
lineChart.setOption(lineOption);


/*bar*/
var barChart = echarts.init(document.getElementById('js-bar'));
var barOption = {
    legend: {
        data: ['案件数', '节点数'],
        left: "10%"
    },
    xAxis: {
        type: 'category',
        data: ['二审抗诉', '二审上诉', '法院决定再审', '提出抗诉', '审判监督抗诉', '检察建议', '再检察建议']
    },
    yAxis: {
        splitNumber: 5,
        axisTick: {
            show: false
        }
    },
    series: [{
        name: '案件数',
        type: 'bar',
        data: [18, 7, 4, 2, 2, 2, 2],
        barWidth: 15,
        color: ["#3194E7"]
    }, {
        name: '节点数',
        type: 'bar',
        data: [21, 13, 12, 7, 7, 7, 7],
        barWidth: 15,
        color: ["#FF6869"]
    }]
};
barChart.setOption(barOption);


/*互联交换信息次数分析*/
var pie1Chart = echarts.init(document.getElementById('js-pie1'));
var pie1Option = {
    legend: {
        data: ['发送信息', '接收信息'],
        left: 'center',
        bottom:'105px'
    },
    series: [{
        name: '互联交换信息次数分析',
        type: 'pie',
        data: [{
            name: "发送信息",
            value: 80
        }, {
            name: "接收信息",
            value: 30
        }],
        // 环内外半径
        radius: [40, 70],
        itemStyle: {
            normal: {
                label: {
                    show: true,
                    position: 'top',
                    formatter: '{c}次',
                    fontSize: 14
                }
            }
        }
    }],
    color: ["#3194E7", "#FEC269"]
};
pie1Chart.setOption(pie1Option);


/*案件质量分析*/
var pie2Chart = echarts.init(document.getElementById('js-pie2'));
var pie2Option = {
    title: {
        text: "案件质量分析",
        left: "40%"
    },
    legend: {
        data: ['累计移送案件数', '含文书案件数', '含卷宗案件数'],
        left: 'center',
        bottom: 0
    },
    series: [
        {
            type: 'pie',
            name: '1',
            center: ['60%', '50%'],
            radius: ['20%', '30%'],
            clockWise: false,
            data: [
                {
                    value: 30,
                    name: '含卷宗案件数'
                },
                {
                    value: 90,
                    name: '',
                }
            ],
            color: ["#556FB5", "rgb(255, 255, 255)"],
        }
        ,
        {
            name: '2',
            clockWise: false,
            type: 'pie',
            center: ['60%', '50%'],
            radius: ['40%', '50%'],
            labelLine: {
                normal: {
                    show: true
                }
            },
            data: [
                {
                    value: 85,
                    name: '含文书案件数',
                },
                {
                    value: 90,
                    name: ''
                }
            ],
            color: ["#EB6877", "#FFF"]
        },
        {
            name: '3',
            clockWise: false,
            type: 'pie',
            center: ['60%', '50%'],
            radius: ['60%', '70%'],
            labelLine: {
                normal: {
                    show: true
                }
            },
            data: [
                {
                    value: 90,
                    name: '累计移送案件数',
                },
                {
                    value: 0,
                    name: ''
                }
            ],
            color: ["#60CB5E", "#FFF"]
        }
    ]
};
pie2Chart.setOption(pie2Option);

/*pie3*/
var pie3Chart = echarts.init(document.getElementById('js-pie3'));
var pie3Option = {
    legend: {
        data: ['发送文书', '接收文书'],
        left: 'center',
        bottom: '105px'
    },
    series: [{
        name: '案件文书分析',
        type: 'pie',
        data: [{
            name: "发送文书",
            value: 80
        }, {
            name: "接收文书",
            value: 30
        }],
        radius: [40, 70],
        itemStyle: {
            normal: {
                label: {
                    show: true,
                    position: 'top',
                    formatter: '{c}篇',
                    fontSize: 14
                }
            }
        }
    }],
    color: ["#3194E7", "#FEC269"]
};
pie3Chart.setOption(pie3Option);

/*案件时效分析*/
var pie4Chart = echarts.init(document.getElementById('js-pie4'));
var pie4Option = {
    title: {
        text: "案件失效分析",
        left: "40%",
        top: "10%"
    },
    legend: {
        data: ['正常', '超时'],
        left: 'center',
        bottom: "100px"
    },
    series: [{
        name: '案件失效分析',
        type: 'pie',
        data: [{
            name: "正常",
            value: 80
        }, {
            name: "超时",
            value: 10
        }],
        radius: [40, 70],
        itemStyle: {
            normal: {
                label: {
                    show: true,
                    position: 'top',
                    formatter: '{c}次',
                    fontSize: 14
                }
            }
        }
    }],
    color: ["#34C7C3", "#FF6869"]
};
pie4Chart.setOption(pie4Option);