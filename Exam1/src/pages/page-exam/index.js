export default {
    name: 'page-exam',
    data() {
        return {
            list: [],
            url: 'static/json/test/list.json'
        };
    },
    methods: {
        loadData() {
            const that = this;
            window.Artery.ajax.get(that.url)
                .then(function (result) {
                    that.list = result.data;
                })
                .catch(function (error) {
                    console.error(error);
                });
        },
        initEchars() {
            /* line*/
            const lineChart = this.$echarts.init(document.getElementById('js-line'));
            const lineOption = {
                title: {
                    text: '半年后刑满释放趋势预测',
                    left: 'center'
                },
                // legend: {
                //     left: '10%',
                //     data: ['案件数', '节点数'],
                // },
                xAxis: {
                    type: 'category',
                    data: ['2015/10', '2015/11', '2015/12', '2016/01', '2016/02', '2016/03'],
                    axisLabel:{
                        show:true,
                        margin: 10,
                        interval:0,
                        rotate:60
                    }
                    // axisLabel:{interval: 0}
                },
                yAxis: {
                    max: 85,
                    splitNumber: 5,
                    axisTick: {show: false}
                },
                series: [{
                    name: '节点数',
                    type: 'line',
                    data: [68, 34, 51, 70, 71, 55],
                    barWidth: 15,
                    color: ['#eff031']
                }]
            };
            lineChart.setOption(lineOption);

            /* bar*/
            const barChart = this.$echarts.init(document.getElementById('js-bar'));
            const barOption = {
                title: {
                    text: '半年内释放人数',
                    left: 'center'
                },
                xAxis: {
                    type: 'category',
                    data: ['2015/10', '2015/11', '2015/12', '2016/01', '2016/02', '2016/03'],
                    axisLabel: {
                        show: true,
                        margin: 10,
                        interval: 0,
                        rotate: 60
                    }
                },
                yAxis: {
                    splitNumber: 5,
                    axisTick: {show: false}
                },
                series: [{
                    name: '案件数',
                    type: 'bar',
                    data: [18, 7, 4, 2, 2, 2],
                    barWidth: 15,
                    color: ['#3194E7']
                }]
            };
            barChart.setOption(barOption);


            /* 互联交换信息次数分析*/
            const pie1Chart = this.$echarts.init(document.getElementById('js-pie'));
            const pie1Option = {
                title: {
                    text: '释放类别统计',
                    left: 'center'
                },
                legend: {
                    data: ['发送信息', '接收信息'],
                    left: 'center',
                    top: '10px'
                },
                series: [{
                    name: '互联交换信息次数分析',
                    type: 'pie',
                    data: [{
                        name: '释放类别统计',
                        value: 5
                    }, {
                        name: '刑满释放',
                        value: 40
                    }, {
                        name: '赦免释放',
                        value: 30
                    }, {
                        name: '假释',
                        value: 10
                    }, {
                        name: '改判释放',
                        value: 10
                    }, {
                        name: '暂予监外执行',
                        value: 5
                    }],
                    // 环内外半径
                    radius: [40, 70],
                    itemStyle: {
                        normal: {
                            label: {
                                show: true,
                                position: 'top',
                                formatter: '{c}',
                                fontSize: 14
                            }
                        }
                    }
                }],
                color: ['#7EE7E2', '#3194E7', '#FEC269', '#00cc66', '#ff9900', '#8478FF']
            };
            pie1Chart.setOption(pie1Option);
        }
    },
    mounted() {
        this.initEchars();
    }
};

