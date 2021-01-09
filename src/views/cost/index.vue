<template>
  <div class="cost">
    <canvas id="myChart" width="375" height="260"></canvas>
    <canvas id="myPie" width="375" height="260"></canvas>
  </div>
</template>

<script lang="ts">
import F2 from '@antv/f2/lib/index-all';
import { Component, Emit, Vue } from 'vue-property-decorator';

@Component
export default class Cost extends Vue {
    private arg: string = 'jlsdkjfk';

    public mounted(): void{
      this.initChart();
      this.initPie();
    }

    @Emit()
    private initChart(){
      const data = [{
        day: '周一',
        value: 300
      }, {
        day: '周二',
        value: 400
      }, {
        day: '周三',
        value: 350
      }, {
        day: '周四',
        value: 500
      }, {
        day: '周五',
        value: 490
      }, {
        day: '周六',
        value: 600
      }, {
        day: '周日',
        value: 900
      }];

      const chart = new F2.Chart({
        id: 'myChart',
        pixelRatio: window.devicePixelRatio
      });

      chart.source(data, {
        value: {
          tickCount: 5,
          min: 0
        },
        day: {
          range: [ 0, 1 ]
        }
      });
      chart.tooltip({
        showCrosshairs: true,
        showItemMarker: false,
        onShow: function onShow(ev) {
          const items = ev.items;
          items[0].name = null;
          items[0].value = '￥ ' + items[0].value;
        }
      });
      chart.axis('day', {
        label: function label(text, index, total) {
          const textCfg = {};
          if (index === 0) {
            // textCfg.textAlign = 'left';
          } else if (index === total - 1) {
            // textCfg.textAlign = 'right';
          }
          return textCfg;
        }
      });
      chart.line().position('day*value');
      chart.point().position('day*value').style({
        stroke: '#fff',
        lineWidth: 1
      });
      chart.render();
    }

    @Emit()
    private initPie(){
      const _this = this;
      const data = [
        {
          const: 'const',
          type: '交通出行',
          money: 51.39
        }, {
          const: 'const',
          type: '饮食',
          money: 356.68
        }, {
          const: 'const',
          type: '生活日用',
          money: 20.00
        }, {
          const: 'const',
          type: '住房缴费',
          money: 116.53
        }
      ];
      const chart = new F2.Chart({
        id: 'myPie',
        pixelRatio: window.devicePixelRatio
      });
      chart.source(data);
      chart.coord('polar', {
        transposed: true,
        radius: 0.9,
        innerRadius: 0.5
      });
      chart.axis(false);
      chart.legend(false);
      chart.tooltip(false);
      chart.guide()
        .html({
          position: [ '50%', '50%' ],
          html: '<div style="text-align: center;width:150px;height: 50px;">\n      <p style="font-size: 12px;color: #999;margin: 0" id="title"></p>\n      <p style="font-size: 18px;color: #343434;margin: 0;font-weight: bold;" id="money"></p>\n      </div>'
        });
      chart.interval()
        .position('const*money')
        .adjust('stack')
        .color('type', [ '#1890FF', '#13C2C2', '#2FC25B', '#FACC14' ]);
      chart.pieLabel({
        sidePadding: 30,
        activeShape: true,
        label1: function label1(data) {
          return {
            text: '￥' + data.money,
            fill: '#343434',
            fontWeight: 'bold'
          };
        },
        label2: function label2(data) {
          return {
            text: data.type,
            fill: '#999'
          };
        },
        onClick: function onClick(ev) {
          const data = ev.data;
          if (data) {
            // _this.$el.querySelector("#title").innerHTML = data.type;
            // _this.$el.querySelector("#money").innerText = data.money;
          }
        }
      });
      chart.render();
    }
}
</script>

<style>

</style>