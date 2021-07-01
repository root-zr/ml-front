<template>
  <div id="ca50ce390d464a1daade675304ac3f16" class="chart-container" style="width:1280px; height:650px;"></div>
</template>

<script>
export default {
  name:"feature3_g",
  mounted(){
      this.getData();
  },
  methods: {
      getData(){
          var chart_ca50ce390d464a1daade675304ac3f16 = this.$echarts.init(
            document.getElementById('ca50ce390d464a1daade675304ac3f16'), 'white', {renderer: 'canvas'});
        var option_ca50ce390d464a1daade675304ac3f16 = {
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
                                    "name": "X31_\u6700\u9ad8\u5546\u54c1\u539f\u4ef7\u5bf9\u6570_\u4ee510\u4e3a\u5e95"
                                },
                                {
                                    "name": "X31_\u6700\u4f4e\u5546\u54c1\u539f\u4ef7\u5bf9\u6570_\u4ee52\u4e3a\u5e95"
                                },
                                {
                                    "name": "X31_\u5e97\u94fa\u5185\u5546\u54c1\u539f\u4ef7\u6700\u5927\u5dee\u4ef7\u5bf9\u6570_\u4ee510\u4e3a\u5e95"
                                },
                                {
                                    "name": "X31_\u6700\u9ad8\u5546\u54c1\u9500\u552e\u4ef7\u5bf9\u6570_\u4ee510\u4e3a\u5e95"
                                },
                                {
                                    "name": "X31_\u6700\u4f4e\u5546\u54c1\u9500\u552e\u4ef7\u5bf9\u6570_\u4ee52\u4e3a\u5e95"
                                },
                                {
                                    "name": "X31_\u5e97\u94fa\u5185\u5546\u54c1\u9500\u552e\u4ef7\u6700\u5927\u5dee\u4ef7\u5bf9\u6570_\u4ee510\u4e3a\u5e95"
                                },
                                {
                                    "name": "X31_\u6700\u5927\u6298\u6263\u529b\u5ea6_\u5206\u7bb1"
                                },
                                {
                                    "name": "X31_\u6700\u5c0f\u6298\u6263\u529b\u5ea6_\u5206\u7bb1"
                                },
                                {
                                    "name": "X31_\u5e73\u5747\u6298\u6263\u529b\u5ea6_\u5206\u7bb1"
                                }
                            ],
                            "name": "\u5f85\u4ea4\u6613\u5546\u54c1\u4ef7\u683c"
                        },
                        {
                            "children": [
                                {
                                    "name": "X32_\u4e00\u7ea7+\u4e8c\u7ea7\u7c7b\u76ee\u6570\u91cf"
                                },
                                {
                                    "name": "X32_\u4e8c\u7ea7+\u4e09\u7ea7\u7c7b\u76ee\u6570\u91cf"
                                },
                                {
                                    "name": "X32_\u4e00\u7ea7+\u4e8c\u7ea7+\u4e09\u7ea7\u7c7b\u76ee\u6570\u91cf"
                                }
                            ],
                            "name": "\u5f85\u4ea4\u6613\u5546\u54c1\u79cd\u7c7b/\u54c1\u7c7b"
                        },
                        {
                            "children": [
                                {
                                    "name": "X33_\u5e97\u94fa\u5546\u54c1\u603bPC\u5206\u4eab\u91cf\u5bf9\u6570_\u4ee510\u4e3a\u5e95"
                                },
                                {
                                    "name": "X33_\u5e97\u94fa\u5546\u54c1\u5e73\u5747PC\u5206\u4eab\u91cf\u5bf9\u6570_\u4ee52\u4e3a\u5e95"
                                }
                            ],
                            "name": "\u5f85\u4ea4\u6613\u5546\u54c1\u4eba\u6c14"
                        },
                        {
                            "children": [
                                {
                                    "name": "X34_\u5e97\u94fa\u5546\u54c1\u5b58\u5728\u8d27\u53f7\u6982\u7387_\u884d\u751f"
                                },
                                {
                                    "name": "X34_\u5e97\u94fa\u5546\u54c1\u5b58\u5728\u8d27\u53f7\u6982\u7387_\u5e73\u65b9"
                                },
                                {
                                    "name": "X34_\u5e97\u94fa\u5546\u54c1\u5b58\u5728\u8d27\u53f7\u6982\u7387_\u4e09\u6b21\u65b9"
                                },
                                {
                                    "name": "X34_\u5e97\u94fa\u5546\u54c1\u5b58\u5728\u8d27\u53f7\u6982\u7387_\u5206\u7bb1"
                                },
                                {
                                    "name": "X34_\u5e97\u94fa\u5546\u54c1\u5b58\u5728\u8d27\u53f7\u6982\u7387_\u5e73\u65b9_\u5206\u7bb1"
                                },
                                {
                                    "name": "X34_\u5e97\u94fa\u5546\u54c1\u5b58\u5728\u8d27\u53f7\u6982\u7387_\u4e09\u6b21\u65b9_\u5206\u7bb1"
                                }
                            ],
                            "name": "\u5f85\u4ea4\u6613\u5546\u54c1\u8d28\u91cf"
                        },
                        {
                            "children": [],
                            "name": "\u5f85\u4ea4\u6613\u5546\u54c1\u57fa\u7840\u627f\u8bfa\u72b6\u51b5"
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
            "text": "\u7279\u5f81\u5de5\u7a0b--\u5f85\u4ea4\u6613\u5546\u54c1\u7279\u5f81--\u7279\u5f81\u884d\u751f\u7ed3\u679c",
            "padding": 5,
            "itemGap": 10
        }
    ]
};
        chart_ca50ce390d464a1daade675304ac3f16.setOption(option_ca50ce390d464a1daade675304ac3f16);
      }
  },
  components: {

  }
}
</script>

<style>

</style>
