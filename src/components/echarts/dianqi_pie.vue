<template>
  <div id="15a94707fa8c4411a0b283a6100e72f0" class="chart-container" style="width:900px; height:500px;"></div>
</template>

<script>
export default {
  mounted(){
      this.getData();
  },
  
  methods: {
      getData(){
          var chart_15a94707fa8c4411a0b283a6100e72f0 = this.$echarts.init(
            document.getElementById('15a94707fa8c4411a0b283a6100e72f0'), 'white', {renderer: 'canvas'});
        var option_15a94707fa8c4411a0b283a6100e72f0 = {
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
            "type": "pie",
            "name": "\u63cf\u8ff0",
            "clockwise": true,
            "data": [
                {
                    "name": "\u4f4e\u4e8e\u5747\u503c",
                    "value": 39
                },
                {
                    "name": "\u9ad8\u4e8e\u5747\u503c",
                    "value": 71
                },
                {
                    "name": "\u4e0e\u5747\u503c\u6301\u5e73",
                    "value": 18
                }
            ],
            "radius": [
                30,
                80
            ],
            "center": [
                "20%",
                "30%"
            ],
            "label": {
                "show": true,
                "position": "top",
                "margin": 8,
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
            "name": "\u670d\u52a1",
            "clockwise": true,
            "data": [
                {
                    "name": "\u4f4e\u4e8e\u5747\u503c",
                    "value": 38
                },
                {
                    "name": "\u9ad8\u4e8e\u5747\u503c",
                    "value": 66
                },
                {
                    "name": "\u4e0e\u5747\u503c\u6301\u5e73",
                    "value": 24
                }
            ],
            "radius": [
                30,
                80
            ],
            "center": [
                "55%",
                "30%"
            ],
            "label": {
                "show": true,
                "position": "top",
                "margin": 8,
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
            "name": "\u7269\u6d41",
            "clockwise": true,
            "data": [
                {
                    "name": "\u4f4e\u4e8e\u5747\u503c",
                    "value": 36
                },
                {
                    "name": "\u9ad8\u4e8e\u5747\u503c",
                    "value": 65
                },
                {
                    "name": "\u4e0e\u5747\u503c\u6301\u5e73",
                    "value": 27
                }
            ],
            "radius": [
                30,
                80
            ],
            "center": [
                "35%",
                "75%"
            ],
            "label": {
                "show": true,
                "position": "top",
                "margin": 8,
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
                "\u4f4e\u4e8e\u5747\u503c",
                "\u9ad8\u4e8e\u5747\u503c",
                "\u4e0e\u5747\u503c\u6301\u5e73"
            ],
            "selected": {},
            "type": "scroll",
            "show": true,
            "left": "80%",
            "top": "20%",
            "orient": "vertical",
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
            "text": "\u7535\u5668\u8bc4\u5206\u4e0e\u884c\u4e1a\u5e73\u5747\u6bd4\u8f83\u72b6\u51b5",
            "padding": 5,
            "itemGap": 10
        }
    ]
};
        chart_15a94707fa8c4411a0b283a6100e72f0.setOption(option_15a94707fa8c4411a0b283a6100e72f0);
      }
  },
  components: {

  }
}
</script>

<style>

</style>
