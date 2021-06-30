<template>
  <div id="b94a24b44cde4c1c9c729f10c46c9a58" class="chart-container" style="width:1280px; height:800px;"></div>
</template>

<script>
export default {
  name:"feature3",
  mounted(){
      this.getData();
  },
  methods: {
      getData(){
          var chart_b94a24b44cde4c1c9c729f10c46c9a58 = this.$echarts.init(
            document.getElementById('b94a24b44cde4c1c9c729f10c46c9a58'), 'white', {renderer: 'canvas'});
        var option_b94a24b44cde4c1c9c729f10c46c9a58 = {
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
                                    "name": "X31_\u6700\u9ad8\u5546\u54c1\u539f\u4ef7"
                                },
                                {
                                    "name": "X31_\u6700\u4f4e\u5546\u54c1\u539f\u4ef7"
                                },
                                {
                                    "name": "X31_\u5e97\u94fa\u5185\u5546\u54c1\u539f\u4ef7\u6700\u5927\u5dee\u4ef7"
                                },
                                {
                                    "name": "X31_\u6700\u9ad8\u5546\u54c1\u9500\u552e\u4ef7"
                                },
                                {
                                    "name": "X31_\u6700\u4f4e\u5546\u54c1\u9500\u552e\u4ef7"
                                },
                                {
                                    "name": "X31_\u5e97\u94fa\u5185\u5546\u54c1\u9500\u552e\u4ef7\u6700\u5927\u5dee\u4ef7"
                                },
                                {
                                    "name": "X31_\u6700\u5927\u6298\u6263\u529b\u5ea6"
                                },
                                {
                                    "name": "X31_\u6700\u5c0f\u6298\u6263\u529b\u5ea6"
                                },
                                {
                                    "name": "X31_\u5e73\u5747\u6298\u6263\u529b\u5ea6"
                                }
                            ],
                            "name": "\u5f85\u4ea4\u6613\u5546\u54c1\u4ef7\u683c"
                        },
                        {
                            "children": [
                                {
                                    "name": "X32_\u4e00\u7ea7\u7c7b\u76ee\u6570\u91cf"
                                },
                                {
                                    "name": "X32_\u4e8c\u7ea7\u7c7b\u76ee\u6570\u91cf"
                                },
                                {
                                    "name": "X32_\u4e09\u7ea7\u7c7b\u76ee\u6570\u91cf"
                                }
                            ],
                            "name": "\u5f85\u4ea4\u6613\u5546\u54c1\u79cd\u7c7b/\u54c1\u7c7b"
                        },
                        {
                            "children": [
                                {
                                    "name": "X33_\u5e97\u94fa\u5546\u54c1\u603bPC\u5206\u4eab\u91cf"
                                },
                                {
                                    "name": "X33_\u5e97\u94fa\u5546\u54c1\u5e73\u5747PC\u5206\u4eab\u91cf"
                                },
                                {
                                    "name": "X33_\u5e97\u94fa\u542b\u6709\u8bc4\u8bba\u6807\u7b7e\u5546\u54c1\u603b\u6570"
                                },
                                {
                                    "name": "X33_\u5e97\u94fa\u5546\u54c1\u542b\u6709\u8bc4\u8bba\u6807\u7b7e\u5546\u54c1\u6982\u7387"
                                },
                                {
                                    "name": "X33_\u5e97\u94fa\u5546\u54c1\u542b\u6709\u8bc4\u8bba\u6807\u7b7e\u5e73\u5747\u4e2a\u6570"
                                },
                                {
                                    "name": "X33_\u5e97\u94fa\u5546\u54c1\u5e73\u5747\u6d3b\u52a8\u4fc3\u9500\u6570"
                                }
                            ],
                            "name": "\u5f85\u4ea4\u6613\u5546\u54c1\u4eba\u6c14"
                        },
                        {
                            "children": [
                                {
                                    "name": "X34_\u5e97\u94fa\u5b58\u5728\u8d27\u53f7\u5546\u54c1\u603b\u6570"
                                },
                                {
                                    "name": "X34_\u5e97\u94fa\u5546\u54c1\u5b58\u5728\u8d27\u53f7\u6982\u7387"
                                }
                            ],
                            "name": "\u5f85\u4ea4\u6613\u5546\u54c1\u8d28\u91cf"
                        },
                        {
                            "children": [
                                {
                                    "name": "X35_\u5e97\u94fa\u5546\u54c1\u5e73\u5747\u670d\u52a1\u6570\u91cf"
                                }
                            ],
                            "name": "\u5f85\u4ea4\u6613\u5546\u54c1\u57fa\u7840\u627f\u8bfa\u72b6\u51b5"
                        }
                    ],
                    "name": "\u5f85\u4ea4\u6613\u5546\u54c1\u7279\u5f81"
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
            "text": "\u7279\u5f81\u5de5\u7a0b--\u5f85\u4ea4\u6613\u5546\u54c1\u7279\u5f81",
            "padding": 5,
            "itemGap": 10
        }
    ]
};
        chart_b94a24b44cde4c1c9c729f10c46c9a58.setOption(option_b94a24b44cde4c1c9c729f10c46c9a58);
      }
  },
  components: {

  }
}
</script>

<style>

</style>
