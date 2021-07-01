<template>
    <div id="8da944594cd8469ba37d6bb0a7523f04" class="chart-container" style="width:1280px; height:650px;"></div>
</template>

<script>
export default {
    name: "feature1",
    mounted(){
        this.getData();
    },
    methods: {
      getData(){
        var chart_8da944594cd8469ba37d6bb0a7523f04 = this.$echarts.init(
            document.getElementById('8da944594cd8469ba37d6bb0a7523f04'), 'white', {renderer: 'canvas'});
        var option_8da944594cd8469ba37d6bb0a7523f04 = {
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
                                            "name": "X11_\u63cf\u8ff0\u5f97\u5206"
                                        },
                                        {
                                            "name": "X11_\u63cf\u8ff0\u5f97\u5206_\u6bd4\u8f83\u6b63\u8d1f"
                                        },
                                        {
                                            "name": "X11_\u63cf\u8ff0\u5f97\u5206_\u6bd4\u8f83\u6bd4\u7387"
                                        },
                                        {
                                            "name": "X11_\u5f00\u5e97\u65f6\u957f"
                                        },
                                        {
                                            "name": "X11_\u5728\u552e\u5546\u54c1\u6570"
                                        },
                                        {
                                            "name": "X11_\u4fdd\u8bc1\u91d1\u91d1\u989d"
                                        },
                                        {
                                            "name": "X11_\u603b\u8bc4\u5206"
                                        },
                                        {
                                            "name": "X11_\u63cf\u8ff0\u8bc4\u5206\u5360\u603b\u8bc4\u5206"
                                        }
                                    ],
                                    "name": "\u670d\u52a1\u4e13\u4e1a\u6027\uff08\u5185\u5bb9\u8d28\u91cf\uff09"
                                },
                                {
                                    "children": [
                                        {
                                            "name": "X12_\u4ec5\u9000\u6b3e\u81ea\u4e3b\u5b8c\u7ed3\u65f6\u957f"
                                        },
                                        {
                                            "name": "X12_\u4ec5\u9000\u6b3e\u81ea\u4e3b\u5b8c\u7ed3\u65f6\u957f_\u6bd4\u8f83"
                                        },
                                        {
                                            "name": "X12_\u9000\u8d27\u9000\u6b3e\u81ea\u4e3b\u5b8c\u7ed3\u65f6\u957f"
                                        },
                                        {
                                            "name": "X12_\u9000\u8d27\u9000\u6b3e\u81ea\u4e3b\u5b8c\u7ed3\u65f6\u957f_\u6bd4\u8f83"
                                        }
                                    ],
                                    "name": "\u5356\u5bb6\u670d\u52a1\u53ca\u65f6\u6027"
                                },
                                {
                                    "children": [
                                        {
                                            "name": "X13_\u670d\u52a1\u5f97\u5206"
                                        },
                                        {
                                            "name": "X13_\u670d\u52a1\u5f97\u5206_\u6bd4\u8f83\u6b63\u8d1f"
                                        },
                                        {
                                            "name": "X13_\u670d\u52a1\u8bc4\u5206\u5360\u603b\u8bc4\u5206"
                                        },
                                        {
                                            "name": "X13_\u63cf\u8ff0\u5f97\u5206_\u6bd4\u8f83\u6bd4\u7387"
                                        }
                                    ],
                                    "name": "\u5356\u5bb6\u670d\u52a1\u4e00\u81f4\u6027"
                                },
                                {
                                    "children": [
                                        {
                                            "name": "X14_\u7ea0\u7eb7\u9000\u6b3e\u7387"
                                        },
                                        {
                                            "name": "X14_\u7ea0\u7eb7\u9000\u6b3e\u7387_\u6bd4\u8f83"
                                        },
                                        {
                                            "name": "X14_\u9000\u6b3e\u81ea\u4e3b\u5b8c\u7ed3\u7387"
                                        },
                                        {
                                            "name": "X14_\u9000\u6b3e\u81ea\u4e3b\u5b8c\u7ed3\u7387_\u6bd4\u8f83"
                                        }
                                    ],
                                    "name": "\u552e\u540e\u670d\u52a1"
                                },
                                {
                                    "children": [
                                        {
                                            "name": "X15_\u7269\u6d41\u5f97\u5206"
                                        },
                                        {
                                            "name": "X15_\u7269\u6d41\u5f97\u5206_\u6bd4\u8f83\u6b63\u8d1f"
                                        },
                                        {
                                            "name": "X15_\u7269\u6d41\u5f97\u5206_\u6bd4\u8f83\u6bd4\u7387"
                                        },
                                        {
                                            "name": "X15_\u53d1\u8d27\u597d\u6807\u7b7e\u8bc4\u8bba\u6570"
                                        },
                                        {
                                            "name": "X15_\u7269\u6d41\u597d\u6807\u7b7e\u8bc4\u8bba\u6570"
                                        },
                                        {
                                            "name": "X15_\u5305\u88c5\u597d\u6807\u7b7e\u8bc4\u8bba\u6570"
                                        },
                                        {
                                            "name": "X15_\u7269\u6d41\u8bc4\u5206\u5360\u603b\u8bc4\u5206"
                                        }
                                    ],
                                    "name": "\u7269\u6d41\u670d\u52a1"
                                },
                                {
                                    "children": [
                                        {
                                            "name": "X16_\u670d\u52a1\u9ad8\u6807\u7b7e\u8bc4\u8bba\u6570"
                                        }
                                    ],
                                    "name": "\u987e\u5ba2\u6ee1\u610f\u5ea6"
                                }
                            ],
                            "name": "\u5356\u5bb6\u670d\u52a1\u72b6\u51b5"
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
                    "text": "\u7279\u5f81\u5de5\u7a0b--\u5356\u5bb6\u670d\u52a1\u72b6\u51b5",
                    "padding": 5,
                    "itemGap": 10
                }
            ]
};
        chart_8da944594cd8469ba37d6bb0a7523f04.setOption(option_8da944594cd8469ba37d6bb0a7523f04);
      }
  },
  components: {

  }
}
</script>

<style>

</style>
