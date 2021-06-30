<template>
  <div id="13f7f0b9ad8c4eb892d970576963c8ba" class="chart-container" style="width:1280px; height:800px;"></div>
</template>

<script>
export default {
  name:"feature2",
  mounted(){
      this.getData();
  },
  methods: {
      getData(){
          var chart_13f7f0b9ad8c4eb892d970576963c8ba = this.$echarts.init(
            document.getElementById('13f7f0b9ad8c4eb892d970576963c8ba'), 'white', {renderer: 'canvas'});
        var option_13f7f0b9ad8c4eb892d970576963c8ba = {
    "animation": true,
    "animationThreshold": 2000,
    "animationDuration": 1000,
    "animationEasing": "cubicOut",
    "animationDelay": 0,
    "animationDurationUpdate": 300,
    "animationEasingUpdate": "cubicOut",
    "animationDelayUpdate": 0,
    "color": [
        "#c23531",
        "#2f4554",
        "#61a0a8",
        "#d48265",
        "#749f83",
        "#ca8622",
        "#bda29a",
        "#6e7074",
        "#546570",
        "#c4ccd3",
        "#f05b72",
        "#ef5b9c",
        "#f47920",
        "#905a3d",
        "#fab27b",
        "#2a5caa",
        "#444693",
        "#726930",
        "#b2d235",
        "#6d8346",
        "#ac6767",
        "#1d953f",
        "#6950a1",
        "#918597"
    ],
    "series": [
        {
            "type": "tree",
            "data": [
                {
                    "children": [
                        {
                            "children": [
                                {
                                    "name": "X21_30\u5929\u603b\u9500\u552e\u989d"
                                },
                                {
                                    "name": "X21_30\u5929\u603b\u9500\u91cf"
                                },
                                {
                                    "name": "X21_30\u5929\u9500\u552e\u5747\u4ef7"
                                }
                            ],
                            "name": "\u9500\u552e\u5386\u53f2\u60c5\u51b5"
                        },
                        {
                            "children": [
                                {
                                    "name": "X22_\u6700\u7545\u9500\u4ea7\u54c1\u5360\u5168\u5e97\u9500\u552e\u989d\u6bd4\u4f8b"
                                },
                                {
                                    "name": "X22_\u8fd130\u5929\u9500\u91cf\u5360\u603b\u9500\u91cf\u6bd4\u4f8b"
                                }
                            ],
                            "name": "\u9500\u91cf\u7a33\u5b9a\u7a0b\u5ea6"
                        },
                        {
                            "children": [
                                {
                                    "name": "X23_\u603b\u9500\u91cf"
                                },
                                {
                                    "name": "X23_\u603b\u6536\u85cf\u6570"
                                },
                                {
                                    "name": "X23_\u603b\u8bc4\u4ef7\u6570"
                                },
                                {
                                    "name": "X23_\u5e73\u5747\u6536\u85cf\u6570"
                                },
                                {
                                    "name": "X23_\u5e73\u5747\u8bc4\u4ef7\u6570"
                                },
                                {
                                    "name": "X23_\u5e73\u5747\u603b\u9500\u91cf"
                                },
                                {
                                    "name": "X23_\u6bcf\u5bb6\u5e97\u8bc4\u4ef7\u6807\u7b7e\u60c5\u611f\u5e73\u5747\u503c"
                                }
                            ],
                            "name": "\u8bc4\u4ef7\u771f\u5b9e\u7a0b\u5ea6"
                        }
                    ],
                    "name": "\u5386\u53f2\u4ea4\u6613\u72b6\u51b5"
                }
            ],
            "right": "25%",
            "top": "top",
            "symbol": "pin",
            "symbolSize": "10",
            "edgeShape": "curve",
            "edgeForkPosition": "50%",
            "roam": false,
            "expandAndCollapse": true,
            "layout": "orthogonal",
            "orient": "LR",
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            },
            "leaves": {
                "label": {
                    "show": true,
                    "position": "right",
                    "margin": 8
                }
            }
        }
    ],
    "legend": [
        {
            "data": [],
            "selected": {},
            "show": true,
            "padding": 5,
            "itemGap": 10,
            "itemWidth": 25,
            "itemHeight": 14
        }
    ],
    "tooltip": {
        "show": true,
        "trigger": "item",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "line"
        },
        "showContent": true,
        "alwaysShowContent": false,
        "showDelay": 0,
        "hideDelay": 100,
        "textStyle": {
            "fontSize": 14
        },
        "borderWidth": 0,
        "padding": 5
    },
    "title": [
        {
            "text": "\u7279\u5f81\u5de5\u7a0b--\u5386\u53f2\u4ea4\u6613\u72b6\u51b5",
            "padding": 5,
            "itemGap": 10
        }
    ]
};
        chart_13f7f0b9ad8c4eb892d970576963c8ba.setOption(option_13f7f0b9ad8c4eb892d970576963c8ba);
      }
  },
  components: {

  }
}
</script>

<style>

</style>
