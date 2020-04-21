const NUM_2000 = 2000;
export default {
    name: 'page-exam',
    data() {
        return {
          rs1: [
            {
              bh: '1',
              bt: '标题最多十个字显示了',
              ly: '西部省份团队',
              rq: '2019-04-21',
              jg: 77,
              ys: '44min',
              dz: '皇庭国际',
              zt: '1'
            },{
              bh: '2',
              bt: '标题最多十个字显示了',
              ly: '西部省份团队',
              rq: '2019-04-21',
              jg: 77,
              ys: '44min',
              dz: '皇庭国际',
              zt: '2'
            },{
              bh: '3',
              bt: '标题最多十个字显示了',
              ly: '西部省份团队',
              rq: '2019-04-21',
              jg: 77,
              ys: '44min',
              dz: '皇庭国际',
              zt: '3'
            },{
              bh: '4',
              bt: '标题最多十个字显示了',
              ly: '西部省份团队',
              rq: '2019-04-21',
              jg: 77,
              ys: '44min',
              dz: '皇庭国际',
              zt: '4'
            },{
              bh: '5',
              bt: '标题最多十个字显示了',
              ly: '西部省份团队',
              rq: '2019-04-21',
              jg: 77,
              ys: '44min',
              dz: '皇庭国际',
              zt: '5'
            },{
              bh: '6',
              bt: '标题最多十个字显示了',
              ly: '西部省份团队',
              rq: '2019-04-21',
              jg: 77,
              ys: '44min',
              dz: '皇庭国际',
              zt: '6'
            },{
              bh: '7',
              bt: '标题最多十个字显示了',
              ly: '西部省份团队',
              rq: '2019-04-21',
              jg: 77,
              ys: '44min',
              dz: '皇庭国际',
              zt: '1'
            },{
              bh: '8',
              bt: '标题最多十个字显示了',
              ly: '西部省份团队',
              rq: '2019-04-21',
              jg: 77,
              ys: '44min',
              dz: '皇庭国际',
              zt: '2'
            },{
              bh: '9',
              bt: '标题最多十个字显示了',
              ly: '西部省份团队',
              rq: '2019-04-21',
              jg: 77,
              ys: '44min',
              dz: '皇庭国际',
              zt: '3'
            },{
              bh: '10',
              bt: '标题最多十个字显示了',
              ly: '西部省份团队',
              rq: '2019-04-21',
              jg: 77,
              ys: '44min',
              dz: '皇庭国际',
              zt: '4'
            }
          ]
        };
    },
    methods: {
        clickAlertSimple() {
            this.$Alert.alert('您确定删除吗');
        },
        clickAlert() {
            this.$Alert.alert({
                width: 300,
                height: 180,
                zIndex: 90,
                modal: true,
                title: '删除提示框',
                content: '您确定删除吗',
                confirm:{
                    show: true,
                    text: '确认',
                    callback() {
                        window.console.log('点击了确定');
                    }
                }
            });
        },
        clickPrompt() {
            this.$Alert.prompt({
                width: 300,
                height: 200,
                zIndex: 90,
                modal: true,
                title: '修改值',
                content: '请输入修改值',
                value: '默认值',
                confirm:{
                    show: true,
                    text: '确认',
                    callback(value) {
                        window.console.log('点击了确定');
                        window.console.log(`值是${value}`);
                    }
                },
                cancle:{
                    show: true,
                    text: '取消',
                    callback() {
                        window.console.log('点击了取消');
                    }
                }
            });
        },
        clickConfirm() {
            this.$Alert.confirm({
                width: 300,
                height: 180,
                zIndex: 90,
                modal: true,
                title: 'confirm',
                content: '您想好了么？',
                confirm:{
                    show: true,
                    text: '确认',
                    callback() {
                        window.console.log('点击了确定');
                    }
                },
                cancle:{
                    show: true,
                    text: '取消',
                    callback() {
                        window.console.log('点击了取消');
                    }
                }
            });
        },
        clickInfo() {
            this.$Message.info('information');
        },
        clickSuccess() {
            this.$Message.success('success');
        },
        clickWarning() {
            this.$Message.warning('warning');
        },
        clickError() {
            this.$Message.error('error');
        },
        clickLoading() {
            this.$Message.loading('loading...');
        },

        clickAjaxStart() {
            this.$AjaxLoading.start();
            // 2秒后结束
            setTimeout(() => {
                this.clickAjaxFinish();
            }, NUM_2000);
        },
        clickAjaxFinish() {
            this.$AjaxLoading.finish();
        }
    }
};

