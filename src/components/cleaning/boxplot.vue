<template>
  <div id="7fb0e482595b48e4ac2ffacd54ee128b" class="chart-container" style="width:1280px; height:650px;"></div>
</template>

<script>
export default {
  name: 'boxplot',
  mounted(){
      var chart_7fb0e482595b48e4ac2ffacd54ee128b = echarts.init(
            document.getElementById('7fb0e482595b48e4ac2ffacd54ee128b'), 'white', {renderer: 'canvas'});
        var option_7fb0e482595b48e4ac2ffacd54ee128b = {
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
            "type": "boxplot",
            "name": "\u7535\u5668",
            "data": [
                [
                    0.004321373782642578,
                    1.6127838567197355,
                    2.110589710299249,
                    2.624282095835668,
                    8.0
                ],
                [
                    0.004321373782642578,
                    1.7839035792727347,
                    2.2304489213782737,
                    2.6803355134145628,
                    8.0
                ],
                [
                    0.004321373782642578,
                    1.414973347970818,
                    1.845098040014257,
                    2.4313637641589874,
                    8.0
                ],
                [
                    0.004321373782642578,
                    1.591064607026499,
                    2.0,
                    2.4913616938342726,
                    8.0
                ]
            ],
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            },
            "markPoint": {
                "label": {
                    "show": true,
                    "position": "inside",
                    "color": "#fff",
                    "margin": 8
                }
            },
            "markLine": {
                "silent": false,
                "precision": 2,
                "label": {
                    "show": true,
                    "position": "top",
                    "margin": 8
                }
            }
        },
        {
            "type": "boxplot",
            "name": "\u98df\u54c1",
            "data": [
                [
                    0.004321373782642578,
                    1.4313637641589871,
                    1.6127838567197355,
                    1.9138138523837167,
                    5.0
                ],
                [
                    0.004321373782642578,
                    1.556302500767287,
                    1.7708520116421442,
                    2.0,
                    5.0
                ],
                [
                    0.004321373782642578,
                    1.1702617153949573,
                    1.3710678622717363,
                    1.6117233080073416,
                    5.0
                ],
                [
                    0.004321373782642578,
                    1.3384564936046048,
                    1.5415792439465807,
                    1.770925614638999,
                    5.0
                ]
            ],
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            },
            "markPoint": {
                "label": {
                    "show": true,
                    "position": "inside",
                    "color": "#fff",
                    "margin": 8
                }
            },
            "markLine": {
                "silent": false,
                "precision": 2,
                "label": {
                    "show": true,
                    "position": "top",
                    "margin": 8
                }
            }
        }
    ],
    "legend": [
        {
            "data": [
                "\u7535\u5668",
                "\u98df\u54c1"
            ],
            "selected": {
                "\u7535\u5668": true,
                "\u98df\u54c1": true
            },
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
    "xAxis": [
        {
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "gridIndex": 0,
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "minInterval": 0,
            "splitLine": {
                "show": false,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            },
            "data": [
                "\u539f\u4ef7\u6700\u4f4e",
                "\u539f\u4ef7\u6700\u9ad8",
                "\u9500\u552e\u4ef7\u6700\u4f4e",
                "\u9500\u552e\u4ef7\u6700\u9ad8"
            ]
        }
    ],
    "yAxis": [
        {
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "gridIndex": 0,
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "minInterval": 0,
            "splitLine": {
                "show": false,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            }
        }
    ],
    "title": [
        {
            "text": "店铺商品数据异常值（以10为底取对数）",
            "padding": 5,
            "itemGap": 10
        }
    ]
};
        chart_7fb0e482595b48e4ac2ffacd54ee128b.setOption(option_7fb0e482595b48e4ac2ffacd54ee128b);
  }
}
</script>

<style>

</style>
