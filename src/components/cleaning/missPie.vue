<template>
  <div class="box">
    <div id="3398f0f91c7e48f1814571f4db9713fd" class="chart-container" style="width:950px; height:250px;"></div>
    <div id="eef4efdb9e8840bea4ea579b7f2f0a4f" class="chart-container" style="width:950px; height:250px;"></div>
    <div id="8ec923f4497e4123b693ce9411396979" class="chart-container" style="width:950px; height:250px;"></div>
  </div>
</template>

<script>
export default {
  name: 'miss',
  mounted(){
      var chart_3398f0f91c7e48f1814571f4db9713fd = echarts.init(
            document.getElementById('3398f0f91c7e48f1814571f4db9713fd'), 'white', {renderer: 'canvas'});
        var option_3398f0f91c7e48f1814571f4db9713fd = {
    "animation": true,
    "animationThreshold": 2000,
    "animationDuration": 1000,
    "animationEasing": "cubicOut",
    "animationDelay": 0,
    "animationDurationUpdate": 300,
    "animationEasingUpdate": "cubicOut",
    "animationDelayUpdate": 0,
    "color": [
        "green",
        "pink"
    ],
    "series": [
        {
            "type": "pie",
            "name": "\u5929\u6570",
            "clockwise": true,
            "data": [
                {
                    "name": "\u975e\u7f3a\u5931",
                    "value": 32328
                },
                {
                    "name": "\u7f3a\u5931",
                    "value": 3
                }
            ],
            "radius": [
                30,
                50
            ],
            "center": [
                "12.5%",
                "50%"
            ],
            "label": {
                "show": true,
                "position": "top",
                "margin": 8,
                "fontSize": "10",
                "formatter": "{b}: {d}%"
            },
            "rippleEffect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4
            }
        },
        {
            "type": "pie",
            "name": "\u603b\u9500\u552e\u989d",
            "clockwise": true,
            "data": [
                {
                    "name": "\u975e\u7f3a\u5931",
                    "value": 32326
                },
                {
                    "name": "\u7f3a\u5931",
                    "value": 5
                }
            ],
            "radius": [
                30,
                50
            ],
            "center": [
                "27.5%",
                "50%"
            ],
            "label": {
                "show": true,
                "position": "top",
                "margin": 8,
                "fontSize": "10",
                "formatter": "{b}: {d}%"
            },
            "rippleEffect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4
            }
        },
        {
            "type": "pie",
            "name": "\u603b\u9500\u91cf",
            "clockwise": true,
            "data": [
                {
                    "name": "\u975e\u7f3a\u5931",
                    "value": 32326
                },
                {
                    "name": "\u7f3a\u5931",
                    "value": 5
                }
            ],
            "radius": [
                30,
                50
            ],
            "center": [
                "42.5%",
                "50%"
            ],
            "label": {
                "show": true,
                "position": "top",
                "margin": 8,
                "fontSize": "10",
                "formatter": "{b}: {d}%"
            },
            "rippleEffect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4
            }
        },
        {
            "type": "pie",
            "name": "\u661f\u671f",
            "clockwise": true,
            "data": [
                {
                    "name": "\u975e\u7f3a\u5931",
                    "value": 32328
                },
                {
                    "name": "\u7f3a\u5931",
                    "value": 3
                }
            ],
            "radius": [
                30,
                50
            ],
            "center": [
                "57.5%",
                "50%"
            ],
            "label": {
                "show": true,
                "position": "top",
                "margin": 8,
                "fontSize": "10",
                "formatter": "{b}: {d}%"
            },
            "rippleEffect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4
            }
        },
        {
            "type": "pie",
            "name": "\u6d3b\u52a8\u4fc3\u9500",
            "clockwise": true,
            "data": [
                {
                    "name": "\u975e\u7f3a\u5931",
                    "value": 26298
                },
                {
                    "name": "\u7f3a\u5931",
                    "value": 6033
                }
            ],
            "radius": [
                30,
                50
            ],
            "center": [
                "72.5%",
                "50%"
            ],
            "label": {
                "show": true,
                "position": "top",
                "margin": 8,
                "fontSize": "10",
                "formatter": "{b}: {d}%"
            },
            "rippleEffect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4
            }
        },
        {
            "type": "pie",
            "name": "\u8d27\u53f7",
            "clockwise": true,
            "data": [
                {
                    "name": "\u975e\u7f3a\u5931",
                    "value": 2489
                },
                {
                    "name": "\u7f3a\u5931",
                    "value": 29842
                }
            ],
            "radius": [
                30,
                50
            ],
            "center": [
                "87.5%",
                "50%"
            ],
            "label": {
                "show": true,
                "position": "top",
                "margin": 8,
                "fontSize": "10",
                "formatter": "{b}: {d}%"
            },
            "rippleEffect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4
            }
        }
    ],
    "legend": [
        {
            "data": [
                "\u975e\u7f3a\u5931",
                "\u7f3a\u5931"
            ],
            "selected": {},
            "show": true,
            "orient": "horizontal",
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
            "text": "\u7535\u5668\u5e97\u94fa\u5546\u54c1\u6570\u636e\u7f3a\u5931\u503c",
            "padding": 5,
            "itemGap": 10
        }
    ]
};
        chart_3398f0f91c7e48f1814571f4db9713fd.setOption(option_3398f0f91c7e48f1814571f4db9713fd);

    //图2 
    var chart_eef4efdb9e8840bea4ea579b7f2f0a4f = echarts.init(
            document.getElementById('eef4efdb9e8840bea4ea579b7f2f0a4f'), 'white', {renderer: 'canvas'});
        var option_eef4efdb9e8840bea4ea579b7f2f0a4f = {
    "animation": true,
    "animationThreshold": 2000,
    "animationDuration": 1000,
    "animationEasing": "cubicOut",
    "animationDelay": 0,
    "animationDurationUpdate": 300,
    "animationEasingUpdate": "cubicOut",
    "animationDelayUpdate": 0,
    "color": [
        "green",
        "pink"
    ],
    "series": [
        {
            "type": "pie",
            "name": "\u5929\u6570",
            "clockwise": true,
            "data": [
                {
                    "name": "\u975e\u7f3a\u5931",
                    "value": 36786
                },
                {
                    "name": "\u7f3a\u5931",
                    "value": 13
                }
            ],
            "radius": [
                30,
                50
            ],
            "center": [
                "12.5%",
                "50%"
            ],
            "label": {
                "show": true,
                "position": "top",
                "margin": 8,
                "fontSize": "10",
                "formatter": "{b}: {d}%"
            },
            "rippleEffect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4
            }
        },
        {
            "type": "pie",
            "name": "\u603b\u9500\u552e\u989d",
            "clockwise": true,
            "data": [
                {
                    "name": "\u975e\u7f3a\u5931",
                    "value": 36794
                },
                {
                    "name": "\u7f3a\u5931",
                    "value": 5
                }
            ],
            "radius": [
                30,
                50
            ],
            "center": [
                "27.5%",
                "50%"
            ],
            "label": {
                "show": true,
                "position": "top",
                "margin": 8,
                "fontSize": "10",
                "formatter": "{b}: {d}%"
            },
            "rippleEffect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4
            }
        },
        {
            "type": "pie",
            "name": "\u603b\u9500\u91cf",
            "clockwise": true,
            "data": [
                {
                    "name": "\u975e\u7f3a\u5931",
                    "value": 36794
                },
                {
                    "name": "\u7f3a\u5931",
                    "value": 5
                }
            ],
            "radius": [
                30,
                50
            ],
            "center": [
                "42.5%",
                "50%"
            ],
            "label": {
                "show": true,
                "position": "top",
                "margin": 8,
                "fontSize": "10",
                "formatter": "{b}: {d}%"
            },
            "rippleEffect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4
            }
        },
        {
            "type": "pie",
            "name": "\u661f\u671f",
            "clockwise": true,
            "data": [
                {
                    "name": "\u975e\u7f3a\u5931",
                    "value": 36786
                },
                {
                    "name": "\u7f3a\u5931",
                    "value": 13
                }
            ],
            "radius": [
                30,
                50
            ],
            "center": [
                "57.5%",
                "50%"
            ],
            "label": {
                "show": true,
                "position": "top",
                "margin": 8,
                "fontSize": "10",
                "formatter": "{b}: {d}%"
            },
            "rippleEffect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4
            }
        },
        {
            "type": "pie",
            "name": "\u6d3b\u52a8\u4fc3\u9500",
            "clockwise": true,
            "data": [
                {
                    "name": "\u975e\u7f3a\u5931",
                    "value": 33490
                },
                {
                    "name": "\u7f3a\u5931",
                    "value": 3309
                }
            ],
            "radius": [
                30,
                50
            ],
            "center": [
                "72.5%",
                "50%"
            ],
            "label": {
                "show": true,
                "position": "top",
                "margin": 8,
                "fontSize": "10",
                "formatter": "{b}: {d}%"
            },
            "rippleEffect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4
            }
        },
        {
            "type": "pie",
            "name": "\u8d27\u53f7",
            "clockwise": true,
            "data": [
                {
                    "name": "\u975e\u7f3a\u5931",
                    "value": 3744
                },
                {
                    "name": "\u7f3a\u5931",
                    "value": 33055
                }
            ],
            "radius": [
                30,
                50
            ],
            "center": [
                "87.5%",
                "50%"
            ],
            "label": {
                "show": true,
                "position": "top",
                "margin": 8,
                "fontSize": "10",
                "formatter": "{b}: {d}%"
            },
            "rippleEffect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4
            }
        }
    ],
    "legend": [
        {
            "data": [
                "\u975e\u7f3a\u5931",
                "\u7f3a\u5931"
            ],
            "selected": {},
            "show": true,
            "orient": "horizontal",
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
            "text": "\u98df\u54c1\u5e97\u94fa\u5546\u54c1\u6570\u636e\u7f3a\u5931\u503c",
            "padding": 5,
            "itemGap": 10
        }
    ]
};
        chart_eef4efdb9e8840bea4ea579b7f2f0a4f.setOption(option_eef4efdb9e8840bea4ea579b7f2f0a4f);
        //图3
        var chart_8ec923f4497e4123b693ce9411396979 = echarts.init(
            document.getElementById('8ec923f4497e4123b693ce9411396979'), 'white', {renderer: 'canvas'});
        var option_8ec923f4497e4123b693ce9411396979 = {
    "animation": true,
    "animationThreshold": 2000,
    "animationDuration": 1000,
    "animationEasing": "cubicOut",
    "animationDelay": 0,
    "animationDurationUpdate": 300,
    "animationEasingUpdate": "cubicOut",
    "animationDelayUpdate": 0,
    "color": [
        "green",
        "pink"
    ],
    "series": [
        {
            "type": "pie",
            "name": "\u7535\u5668-\u7ecf\u8425\u65f6\u957f",
            "clockwise": true,
            "data": [
                {
                    "name": "\u975e\u7f3a\u5931",
                    "value": 112
                },
                {
                    "name": "\u7f3a\u5931",
                    "value": 31
                }
            ],
            "radius": [
                30,
                50
            ],
            "center": [
                "20%",
                "50%"
            ],
            "label": {
                "show": true,
                "position": "top",
                "margin": 8,
                "fontSize": "10",
                "formatter": "{b}: {d}%"
            },
            "rippleEffect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4
            }
        },
        {
            "type": "pie",
            "name": "\u7535\u5668-\u9000\u8d27\u9000\u6b3e\u81ea\u4e3b\u5b8c\u7ed3\u65f6\u957f_\u884c\u4e1a\u5747\u503c",
            "clockwise": true,
            "data": [
                {
                    "name": "\u975e\u7f3a\u5931",
                    "value": 142
                },
                {
                    "name": "\u7f3a\u5931",
                    "value": 1
                }
            ],
            "radius": [
                30,
                50
            ],
            "center": [
                "40%",
                "50%"
            ],
            "label": {
                "show": true,
                "position": "top",
                "margin": 8,
                "fontSize": "10",
                "formatter": "{b}: {d}%"
            },
            "rippleEffect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4
            }
        },
        {
            "type": "pie",
            "name": "\u7535\u5668-\u9000\u6b3e\u81ea\u4e3b\u5b8c\u7ed3\u7387_\u884c\u4e1a\u5747\u503c",
            "clockwise": true,
            "data": [
                {
                    "name": "\u975e\u7f3a\u5931",
                    "value": 142
                },
                {
                    "name": "\u7f3a\u5931",
                    "value": 1
                }
            ],
            "radius": [
                30,
                50
            ],
            "center": [
                "60%",
                "50%"
            ],
            "label": {
                "show": true,
                "position": "top",
                "margin": 8,
                "fontSize": "10",
                "formatter": "{b}: {d}%"
            },
            "rippleEffect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4
            }
        },
        {
            "type": "pie",
            "name": "\u98df\u54c1-\u7ecf\u8425\u65f6\u957f",
            "clockwise": true,
            "data": [
                {
                    "name": "\u975e\u7f3a\u5931",
                    "value": 144
                },
                {
                    "name": "\u7f3a\u5931",
                    "value": 26
                }
            ],
            "radius": [
                30,
                50
            ],
            "center": [
                "80%",
                "50%"
            ],
            "label": {
                "show": true,
                "position": "top",
                "margin": 8,
                "fontSize": "10",
                "formatter": "{b}: {d}%"
            },
            "rippleEffect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4
            }
        }
    ],
    "legend": [
        {
            "data": [
                "\u975e\u7f3a\u5931",
                "\u7f3a\u5931"
            ],
            "selected": {},
            "show": true,
            "orient": "horizontal",
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
            "text": "\u5e97\u94fa\u6570\u636e\u7f3a\u5931\u503c(\u7535\u5668 & \u98df\u54c1)",
            "padding": 5,
            "itemGap": 10
        }
    ]
};
        chart_8ec923f4497e4123b693ce9411396979.setOption(option_8ec923f4497e4123b693ce9411396979);
  }
}
</script>

<style>
.box { justify-content:center; display:flex; flex-wrap:wrap;  };
</style>
