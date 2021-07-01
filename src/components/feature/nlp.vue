<template>
    <div class="result">
        <el-tabs type="border-card" v-model="name">
            <el-tab-pane label="热词云图_电器" name="0">
                <div ref="chart1" style="width: 800px;height:600px;"></div>
            </el-tab-pane>
            <el-tab-pane label="热词云图_食品" name="1">
                <div ref="chart2" style="width: 800px;height:600px;" class="charts-two"></div>
            </el-tab-pane>

        </el-tabs>
    </div>
</template>


// 词云图
<script>
    import * as echarts from "echarts";
    import "echarts-wordcloud/dist/echarts-wordcloud";
    import "echarts-wordcloud/dist/echarts-wordcloud.min";

    export default {
        name: "VisitShow",
        data() {
            return {
                userVisitNum: [],
                date: [],
                goodVisitNum: [],
                goodsName: [],
                name: "0",
            };
        },
        mounted() {
            this.showEeharts();
        },

        methods: {
            showEeharts() {
                var chart1 = echarts.init(this.$refs.chart1);
                var chart2 = echarts.init(this.$refs.chart2);
                var data1 = [
                    {
                        "name": "\u4e0d\u9519",
                        "value": 32188,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(46,21,116)"
                            }
                        }
                    },
                    {
                        "name": "\u62cd\u7167",
                        "value": 603,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(75,72,49)"
                            }
                        }
                    },
                    {
                        "name": "\u5feb\u5145",
                        "value": 785,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(101,146,83)"
                            }
                        }
                    },
                    {
                        "name": "\u5904\u7406\u5668",
                        "value": 17,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(94,121,158)"
                            }
                        }
                    },
                    {
                        "name": "\u89c6\u9891",
                        "value": 1134,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(142,107,151)"
                            }
                        }
                    },
                    {
                        "name": "\u62cd\u6444",
                        "value": 153,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(122,30,155)"
                            }
                        }
                    },
                    {
                        "name": "\u7535\u6c60\u5bb9\u91cf",
                        "value": 97,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(56,35,101)"
                            }
                        }
                    },
                    {
                        "name": "\u80fd\u5145",
                        "value": 95,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(0,58,121)"
                            }
                        }
                    },
                    {
                        "name": "80%",
                        "value": 10,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(144,90,154)"
                            }
                        }
                    },
                    {
                        "name": "\u5929\u77f6",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(117,137,6)"
                            }
                        }
                    },
                    {
                        "name": "\u6548\u679c",
                        "value": 10738,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(149,140,7)"
                            }
                        }
                    },
                    {
                        "name": "\u5c4f\u5e55\u663e\u793a",
                        "value": 51,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(57,9,63)"
                            }
                        }
                    },
                    {
                        "name": "\u770b\u56fe",
                        "value": 70,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(109,34,65)"
                            }
                        }
                    },
                    {
                        "name": "\u8d28\u91cf",
                        "value": 19971,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(118,91,48)"
                            }
                        }
                    },
                    {
                        "name": "\u5927\u7329\u7329",
                        "value": 6,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(20,16,27)"
                            }
                        }
                    },
                    {
                        "name": "\u73a9\u5b8c",
                        "value": 6,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(152,138,27)"
                            }
                        }
                    },
                    {
                        "name": "\u7eed\u822a",
                        "value": 2946,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(145,96,153)"
                            }
                        }
                    },
                    {
                        "name": "\u6027\u4ef7\u6bd4",
                        "value": 5409,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(75,29,151)"
                            }
                        }
                    },
                    {
                        "name": "\u5c0f\u7c73",
                        "value": 551,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(155,41,141)"
                            }
                        }
                    },
                    {
                        "name": "\u65d7\u8230",
                        "value": 10,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(79,111,89)"
                            }
                        }
                    },
                    {
                        "name": "\u9ad8\u5f3a\u5ea6",
                        "value": 7,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(80,141,31)"
                            }
                        }
                    },
                    {
                        "name": "\u9c9c\u8273",
                        "value": 32,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(152,160,142)"
                            }
                        }
                    },
                    {
                        "name": "\u4ef7\u4f4d",
                        "value": 822,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(65,28,153)"
                            }
                        }
                    },
                    {
                        "name": "\u7535\u6c60",
                        "value": 1961,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(24,49,79)"
                            }
                        }
                    },
                    {
                        "name": "\u54c1\u8d28",
                        "value": 913,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(80,82,56)"
                            }
                        }
                    },
                    {
                        "name": "\u6e05\u6670",
                        "value": 5068,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(122,28,69)"
                            }
                        }
                    },
                    {
                        "name": "\u73bb\u7483",
                        "value": 456,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(140,68,4)"
                            }
                        }
                    },
                    {
                        "name": "\u8272\u5f69",
                        "value": 93,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(140,75,52)"
                            }
                        }
                    },
                    {
                        "name": "\u9002\u5408",
                        "value": 2236,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(160,65,102)"
                            }
                        }
                    },
                    {
                        "name": "\u534a\u4e2a",
                        "value": 313,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(116,5,44)"
                            }
                        }
                    },
                    {
                        "name": "\u56fe\u7247",
                        "value": 942,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(146,43,2)"
                            }
                        }
                    },
                    {
                        "name": "\u624b\u673a",
                        "value": 5899,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(51,150,151)"
                            }
                        }
                    },
                    {
                        "name": "\u5c0f\u65f6",
                        "value": 1426,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(70,71,4)"
                            }
                        }
                    },
                    {
                        "name": "\u8fd0\u884c",
                        "value": 578,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(138,120,36)"
                            }
                        }
                    },
                    {
                        "name": "\u771f\u7684",
                        "value": 6520,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(152,64,45)"
                            }
                        }
                    },
                    {
                        "name": "\u901f\u5ea6",
                        "value": 4232,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(51,29,0)"
                            }
                        }
                    },
                    {
                        "name": "\u6574\u4f53",
                        "value": 2067,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(32,81,145)"
                            }
                        }
                    },
                    {
                        "name": "\u660e\u767d",
                        "value": 102,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(21,141,29)"
                            }
                        }
                    },
                    {
                        "name": "\u5f88\u5927",
                        "value": 1634,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(61,151,88)"
                            }
                        }
                    },
                    {
                        "name": "\u663e\u793a\u6027\u4ef7\u6bd4",
                        "value": 7,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(76,112,79)"
                            }
                        }
                    },
                    {
                        "name": "\u5929\u7391",
                        "value": 2,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(136,110,61)"
                            }
                        }
                    },
                    {
                        "name": "Noto10pro",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(99,61,75)"
                            }
                        }
                    },
                    {
                        "name": "\u989c\u503c",
                        "value": 2370,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(42,48,148)"
                            }
                        }
                    },
                    {
                        "name": "\u4e00\u5145",
                        "value": 41,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(38,76,46)"
                            }
                        }
                    },
                    {
                        "name": "\u53d1\u70eb",
                        "value": 442,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(128,6,53)"
                            }
                        }
                    },
                    {
                        "name": "\u8d5e\u8d5e\u8d5e",
                        "value": 128,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(36,48,30)"
                            }
                        }
                    },
                    {
                        "name": "\u57fa\u5e26",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(0,57,109)"
                            }
                        }
                    },
                    {
                        "name": "\u5948\u65af",
                        "value": 187,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(152,116,101)"
                            }
                        }
                    },
                    {
                        "name": "\u5916\u653e",
                        "value": 49,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(107,143,65)"
                            }
                        }
                    },
                    {
                        "name": "\u8d28\u611f",
                        "value": 2207,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(93,143,140)"
                            }
                        }
                    },
                    {
                        "name": "\u8010\u7528",
                        "value": 2145,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(58,160,160)"
                            }
                        }
                    },
                    {
                        "name": "\u5757\u94b1",
                        "value": 261,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(86,88,135)"
                            }
                        }
                    },
                    {
                        "name": "\u4e70\u5230",
                        "value": 1127,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(39,32,81)"
                            }
                        }
                    },
                    {
                        "name": "\u4e00\u5343",
                        "value": 10,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(79,124,26)"
                            }
                        }
                    },
                    {
                        "name": "\u6d41\u7545",
                        "value": 742,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(136,100,78)"
                            }
                        }
                    },
                    {
                        "name": "\u5916\u89c2",
                        "value": 11791,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(138,19,35)"
                            }
                        }
                    },
                    {
                        "name": "\u4fe1\u53f7",
                        "value": 670,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(41,97,23)"
                            }
                        }
                    },
                    {
                        "name": "\u58f0\u97f3YYDS",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(125,66,120)"
                            }
                        }
                    },
                    {
                        "name": "\u663e\u793a",
                        "value": 282,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(53,61,120)"
                            }
                        }
                    },
                    {
                        "name": "\u9ad8\u5237",
                        "value": 12,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(66,22,100)"
                            }
                        }
                    },
                    {
                        "name": "LCD",
                        "value": 12,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(25,155,114)"
                            }
                        }
                    },
                    {
                        "name": "NFC",
                        "value": 12,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(4,84,155)"
                            }
                        }
                    },
                    {
                        "name": "67W",
                        "value": 9,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(123,152,131)"
                            }
                        }
                    },
                    {
                        "name": "\u5145\u723d",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(137,6,158)"
                            }
                        }
                    },
                    {
                        "name": "miui",
                        "value": 2,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(13,8,20)"
                            }
                        }
                    },
                    {
                        "name": "12.5",
                        "value": 3,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(136,134,20)"
                            }
                        }
                    },
                    {
                        "name": "5G",
                        "value": 19,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(55,131,156)"
                            }
                        }
                    },
                    {
                        "name": "\u6bd4\u7c73",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(61,25,63)"
                            }
                        }
                    },
                    {
                        "name": "\u6846\u6613",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(90,38,104)"
                            }
                        }
                    },
                    {
                        "name": "\u4e70\u4e70",
                        "value": 49,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(60,108,2)"
                            }
                        }
                    },
                    {
                        "name": "\u529f\u80fd\u9f50\u5168",
                        "value": 265,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(75,11,83)"
                            }
                        }
                    },
                    {
                        "name": "\u65e0\u606f",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(133,31,60)"
                            }
                        }
                    },
                    {
                        "name": "\u4e2d\u89c4\u4e2d\u77e9",
                        "value": 32,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(154,159,61)"
                            }
                        }
                    },
                    {
                        "name": "\u4fa7\u8fb9",
                        "value": 41,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(98,91,20)"
                            }
                        }
                    },
                    {
                        "name": "\u6307\u7eb9",
                        "value": 400,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(97,76,34)"
                            }
                        }
                    },
                    {
                        "name": "\u65e0\u7ebf",
                        "value": 534,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(15,16,112)"
                            }
                        }
                    },
                    {
                        "name": "\u5ba4\u5916",
                        "value": 26,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(76,100,76)"
                            }
                        }
                    },
                    {
                        "name": "\u4eae\u5ea6",
                        "value": 273,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(82,113,9)"
                            }
                        }
                    },
                    {
                        "name": "\u5c1a\u53ef",
                        "value": 33,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(77,125,4)"
                            }
                        }
                    },
                    {
                        "name": "\u78e8\u635f",
                        "value": 45,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(42,152,110)"
                            }
                        }
                    },
                    {
                        "name": "\u7ea2\u5916",
                        "value": 28,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(86,47,109)"
                            }
                        }
                    },
                    {
                        "name": "\u7ec6\u817b",
                        "value": 1278,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(60,9,149)"
                            }
                        }
                    },
                    {
                        "name": "\u7f3a\u70b9",
                        "value": 184,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(64,5,16)"
                            }
                        }
                    },
                    {
                        "name": "\u4f18\u70b9",
                        "value": 88,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(74,100,77)"
                            }
                        }
                    },
                    {
                        "name": "\u7ed3\u8bba",
                        "value": 3,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(100,113,45)"
                            }
                        }
                    },
                    {
                        "name": "\u5f88\u5c0f",
                        "value": 1301,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(33,71,130)"
                            }
                        }
                    },
                    {
                        "name": "\u90a3\u79cd",
                        "value": 781,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(148,21,27)"
                            }
                        }
                    },
                    {
                        "name": "\u7a33\u5b9a",
                        "value": 641,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(79,137,98)"
                            }
                        }
                    },
                    {
                        "name": "\u5730\u65b9\u4e00\u5145",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(40,122,4)"
                            }
                        }
                    },
                    {
                        "name": "\u901a\u8bdd\u97f3\u8d28",
                        "value": 23,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(14,80,34)"
                            }
                        }
                    },
                    {
                        "name": "\u73a9\u6e38\u620f",
                        "value": 456,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(158,103,125)"
                            }
                        }
                    },
                    {
                        "name": "\u5929\u624d",
                        "value": 150,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(52,151,3)"
                            }
                        }
                    },
                    {
                        "name": "\u8bc4\u4ef7",
                        "value": 4310,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(90,120,52)"
                            }
                        }
                    },
                    {
                        "name": "\u6536\u5230",
                        "value": 17793,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(20,91,104)"
                            }
                        }
                    },
                    {
                        "name": "\u4e24\u5929",
                        "value": 801,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(48,24,137)"
                            }
                        }
                    },
                    {
                        "name": "\u901f\u5ea6\u7535\u6c60\u5bb9\u91cf",
                        "value": 2,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(25,53,93)"
                            }
                        }
                    },
                    {
                        "name": "\u673a\u4e86",
                        "value": 9,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(149,114,144)"
                            }
                        }
                    },
                    {
                        "name": "\u5173\u4e0d\u4e86",
                        "value": 6,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(14,5,83)"
                            }
                        }
                    },
                    {
                        "name": "\u50cf\u7d20",
                        "value": 147,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(92,137,1)"
                            }
                        }
                    },
                    {
                        "name": "\u6d4f\u89c8\u5668",
                        "value": 3,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(11,84,19)"
                            }
                        }
                    },
                    {
                        "name": "\u8017\u7535",
                        "value": 182,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(152,10,136)"
                            }
                        }
                    },
                    {
                        "name": "\u5f00\u9ad8",
                        "value": 3,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(132,155,151)"
                            }
                        }
                    },
                    {
                        "name": "\u76f8\u673a",
                        "value": 38,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(22,112,22)"
                            }
                        }
                    },
                    {
                        "name": "\u5c4f\u5e55",
                        "value": 1407,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(56,11,69)"
                            }
                        }
                    },
                    {
                        "name": "\u53d1\u70ed",
                        "value": 877,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(34,61,44)"
                            }
                        }
                    },
                    {
                        "name": "\u5e7f\u544a",
                        "value": 68,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(33,129,81)"
                            }
                        }
                    },
                    {
                        "name": "\u63a8\u5e7f",
                        "value": 14,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(134,68,131)"
                            }
                        }
                    },
                    {
                        "name": "\u7f51\u7edc",
                        "value": 46,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(11,105,87)"
                            }
                        }
                    },
                    {
                        "name": "\u4e24\u6b21",
                        "value": 424,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(66,144,18)"
                            }
                        }
                    },
                    {
                        "name": "\u529f\u80fd",
                        "value": 2616,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(136,81,107)"
                            }
                        }
                    },
                    {
                        "name": "\u7cfb\u7edfyr",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(153,138,102)"
                            }
                        }
                    },
                    {
                        "name": "\u633a\u597d\u7528",
                        "value": 758,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(58,36,10)"
                            }
                        }
                    },
                    {
                        "name": "\u89e3\u9501",
                        "value": 83,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(147,147,120)"
                            }
                        }
                    },
                    {
                        "name": "\u751f\u610f\u5174\u9686",
                        "value": 467,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(31,149,9)"
                            }
                        }
                    },
                    {
                        "name": "\u6ea2\u4e8e\u8a00\u8868",
                        "value": 3,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(88,153,54)"
                            }
                        }
                    },
                    {
                        "name": "\u7455\u75b5",
                        "value": 336,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(37,94,97)"
                            }
                        }
                    },
                    {
                        "name": "\u91cd\u5ea6",
                        "value": 13,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(156,12,32)"
                            }
                        }
                    },
                    {
                        "name": "\u5e97\u5bb6",
                        "value": 1689,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(59,27,2)"
                            }
                        }
                    },
                    {
                        "name": "\u4e60\u60ef\u6027",
                        "value": 66,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(119,50,99)"
                            }
                        }
                    },
                    {
                        "name": "\u4e94\u661f",
                        "value": 1202,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(2,61,156)"
                            }
                        }
                    },
                    {
                        "name": "\u6253\u4e0a",
                        "value": 6,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(44,130,118)"
                            }
                        }
                    },
                    {
                        "name": "\u4e0d\u5bb9",
                        "value": 20,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(77,97,36)"
                            }
                        }
                    },
                    {
                        "name": "\u5927\u58f0",
                        "value": 124,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(101,94,41)"
                            }
                        }
                    },
                    {
                        "name": "\u65f6\u95f4\u4e0d\u9519",
                        "value": 72,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(45,39,96)"
                            }
                        }
                    },
                    {
                        "name": "\u771f\u7ed9\u529b",
                        "value": 14,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(98,61,133)"
                            }
                        }
                    },
                    {
                        "name": "\u518d\u8bc4",
                        "value": 35,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(131,143,127)"
                            }
                        }
                    },
                    {
                        "name": "\u5145\u7535",
                        "value": 9869,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(66,38,76)"
                            }
                        }
                    },
                    {
                        "name": "\u901f\u5ea6\u5feb",
                        "value": 1700,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(93,133,94)"
                            }
                        }
                    },
                    {
                        "name": "\u6709\u5f85",
                        "value": 89,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(34,87,108)"
                            }
                        }
                    },
                    {
                        "name": "\u4e2d\u65ad",
                        "value": 49,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(34,77,15)"
                            }
                        }
                    },
                    {
                        "name": "\u4f53\u9a8c",
                        "value": 1761,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(40,82,35)"
                            }
                        }
                    },
                    {
                        "name": "\u5e38\u89c4",
                        "value": 15,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(93,91,86)"
                            }
                        }
                    },
                    {
                        "name": "\u6253\u7535\u8bdd",
                        "value": 409,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(110,10,14)"
                            }
                        }
                    },
                    {
                        "name": "\u540e\u7eed",
                        "value": 283,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(150,143,68)"
                            }
                        }
                    },
                    {
                        "name": "\u6e38\u620f",
                        "value": 254,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(123,9,67)"
                            }
                        }
                    },
                    {
                        "name": "\u719f\u6089",
                        "value": 31,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(66,77,158)"
                            }
                        }
                    },
                    {
                        "name": "\u4e60\u60ef",
                        "value": 279,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(50,1,76)"
                            }
                        }
                    },
                    {
                        "name": "\u503c\u5f97",
                        "value": 10544,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(107,128,52)"
                            }
                        }
                    },
                    {
                        "name": "\u611f\u89c9",
                        "value": 5423,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(77,128,102)"
                            }
                        }
                    },
                    {
                        "name": "\u62e5\u6709",
                        "value": 451,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(65,49,96)"
                            }
                        }
                    },
                    {
                        "name": "\u7cfb\u7edf\u5f88\u5361",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(100,103,138)"
                            }
                        }
                    },
                    {
                        "name": "\u95ea\u5145",
                        "value": 268,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(34,148,0)"
                            }
                        }
                    },
                    {
                        "name": "\u67d4\u548c",
                        "value": 621,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(30,48,49)"
                            }
                        }
                    },
                    {
                        "name": "\u82f9\u679c",
                        "value": 908,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(139,23,129)"
                            }
                        }
                    },
                    {
                        "name": "\u6027\u80fd",
                        "value": 457,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(56,122,12)"
                            }
                        }
                    },
                    {
                        "name": "\u663e\u793a\u624b\u673a",
                        "value": 11,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(74,70,129)"
                            }
                        }
                    },
                    {
                        "name": "\u7535\u7528",
                        "value": 32,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(44,90,115)"
                            }
                        }
                    },
                    {
                        "name": "\u7279\u8272\u529f\u80fd",
                        "value": 189,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(18,125,94)"
                            }
                        }
                    },
                    {
                        "name": "\u661f\u7eb1",
                        "value": 6,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(58,125,7)"
                            }
                        }
                    },
                    {
                        "name": "\u4e00\u534a\u591a",
                        "value": 11,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(73,121,104)"
                            }
                        }
                    },
                    {
                        "name": "\u9ad8\u7ea7",
                        "value": 471,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(44,28,10)"
                            }
                        }
                    },
                    {
                        "name": "\u5145\u6ee1",
                        "value": 990,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(6,105,78)"
                            }
                        }
                    },
                    {
                        "name": "\u80fd\u529b\u6027\u4ef7\u6bd4",
                        "value": 5,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(50,108,132)"
                            }
                        }
                    },
                    {
                        "name": "\u597d\u8bc4",
                        "value": 7065,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(39,89,108)"
                            }
                        }
                    },
                    {
                        "name": "\u7b97\u6cd5",
                        "value": 3,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(19,106,137)"
                            }
                        }
                    },
                    {
                        "name": "\u5f3a\u70b9",
                        "value": 3,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(43,154,64)"
                            }
                        }
                    },
                    {
                        "name": "\u672a\u89c1\u5f02\u5e38",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(149,119,31)"
                            }
                        }
                    },
                    {
                        "name": "\u6bd4\u7ea2\u7c73",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(146,9,80)"
                            }
                        }
                    },
                    {
                        "name": "N9P",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(56,73,140)"
                            }
                        }
                    },
                    {
                        "name": "\u6bd4\u53cb\u5546",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(72,123,24)"
                            }
                        }
                    },
                    {
                        "name": "\u7535\u4ec5",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(64,103,32)"
                            }
                        }
                    },
                    {
                        "name": "\u4f9b\u53c2\u8003",
                        "value": 2,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(38,48,21)"
                            }
                        }
                    },
                    {
                        "name": "\u91cd\u767b",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(100,6,123)"
                            }
                        }
                    },
                    {
                        "name": "\u4e2a\u522b\u60c5\u51b5",
                        "value": 2,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(107,9,70)"
                            }
                        }
                    },
                    {
                        "name": "\u58c1\u7eb8",
                        "value": 9,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(37,51,44)"
                            }
                        }
                    },
                    {
                        "name": "\u89c2\u611f",
                        "value": 12,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(43,43,33)"
                            }
                        }
                    },
                    {
                        "name": "\u4e2d\u4e0a",
                        "value": 6,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(92,57,102)"
                            }
                        }
                    },
                    {
                        "name": "\u626c\u58f0\u5668",
                        "value": 37,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(88,129,86)"
                            }
                        }
                    },
                    {
                        "name": "\u9a6c\u8fbe",
                        "value": 23,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(39,17,79)"
                            }
                        }
                    },
                    {
                        "name": "\u5361\u4f4f",
                        "value": 45,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(19,118,133)"
                            }
                        }
                    },
                    {
                        "name": "\u7535\u91cf",
                        "value": 1199,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(141,24,98)"
                            }
                        }
                    },
                    {
                        "name": "\u6563\u70ed",
                        "value": 229,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(90,8,23)"
                            }
                        }
                    },
                    {
                        "name": "\u738b\u8005",
                        "value": 132,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(102,74,68)"
                            }
                        }
                    },
                    {
                        "name": "\u51e0\u70b9",
                        "value": 21,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(106,87,118)"
                            }
                        }
                    },
                    {
                        "name": "\u534a\u5c0f\u65f6",
                        "value": 153,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(157,6,97)"
                            }
                        }
                    },
                    {
                        "name": "\u505a\u5de5",
                        "value": 5823,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(26,58,26)"
                            }
                        }
                    },
                    {
                        "name": "\u7acb\u4f53",
                        "value": 116,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(90,33,144)"
                            }
                        }
                    },
                    {
                        "name": "\u8fdb\u5316",
                        "value": 2,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(101,88,7)"
                            }
                        }
                    },
                    {
                        "name": "\u7edd\u5927\u591a\u6570",
                        "value": 2,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(53,58,25)"
                            }
                        }
                    },
                    {
                        "name": "\u53ef\u60dc",
                        "value": 124,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(38,20,106)"
                            }
                        }
                    },
                    {
                        "name": "\u52a8\u6001",
                        "value": 5,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(131,78,13)"
                            }
                        }
                    },
                    {
                        "name": "\u6d88\u8d39\u8005",
                        "value": 89,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(79,146,1)"
                            }
                        }
                    },
                    {
                        "name": "\u9000\u51fa",
                        "value": 9,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(131,68,56)"
                            }
                        }
                    },
                    {
                        "name": "\u4f18\u52bf",
                        "value": 25,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(12,68,1)"
                            }
                        }
                    },
                    {
                        "name": "\u58f0\u97f3",
                        "value": 5611,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(25,15,67)"
                            }
                        }
                    },
                    {
                        "name": "\u652f\u6301",
                        "value": 579,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(29,42,25)"
                            }
                        }
                    },
                    {
                        "name": "\u7cfb\u7edf",
                        "value": 107,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(32,7,150)"
                            }
                        }
                    },
                    {
                        "name": "\u8868\u73b0\u586b\u5199",
                        "value": 2,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(54,62,128)"
                            }
                        }
                    },
                    {
                        "name": "\u7528\u6237",
                        "value": 53604,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(34,42,22)"
                            }
                        }
                    },
                    {
                        "name": "\u8bc4\u4ef7\u6ee1\u610f",
                        "value": 97,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(68,78,31)"
                            }
                        }
                    },
                    {
                        "name": "\u5341\u591a\u5929",
                        "value": 8,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(21,92,154)"
                            }
                        }
                    },
                    {
                        "name": "\u6a21\u5f0f",
                        "value": 560,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(122,37,50)"
                            }
                        }
                    },
                    {
                        "name": "6.1",
                        "value": 16,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(86,91,88)"
                            }
                        }
                    },
                    {
                        "name": "\u592a\u8fdf\u987f",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(54,41,111)"
                            }
                        }
                    },
                    {
                        "name": "\u5f71\u4e0d",
                        "value": 2,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(48,79,129)"
                            }
                        }
                    },
                    {
                        "name": "\u7535\u6c60\u5bff\u547d",
                        "value": 3,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(8,132,141)"
                            }
                        }
                    },
                    {
                        "name": "\u7184\u5c4f",
                        "value": 5,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(79,18,14)"
                            }
                        }
                    },
                    {
                        "name": "\u95ea\u9000",
                        "value": 11,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(44,8,65)"
                            }
                        }
                    },
                    {
                        "name": "\u9762\u5c4f",
                        "value": 17,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(4,43,99)"
                            }
                        }
                    },
                    {
                        "name": "\u8ffd\u8bc4",
                        "value": 688,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(100,2,7)"
                            }
                        }
                    },
                    {
                        "name": "\u665a\u4e0a",
                        "value": 1156,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(47,39,6)"
                            }
                        }
                    },
                    {
                        "name": "\u4f18\u7f3a\u70b9",
                        "value": 4,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(62,50,30)"
                            }
                        }
                    },
                    {
                        "name": "\u5feb\u95e8",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(78,158,43)"
                            }
                        }
                    },
                    {
                        "name": "\u542c\u7b52",
                        "value": 31,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(32,67,123)"
                            }
                        }
                    },
                    {
                        "name": "\u4e0b\u5355",
                        "value": 1319,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(98,147,136)"
                            }
                        }
                    },
                    {
                        "name": "\u5e95\u8272",
                        "value": 2,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(131,129,117)"
                            }
                        }
                    },
                    {
                        "name": "\u591f\u7528",
                        "value": 823,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(5,126,81)"
                            }
                        }
                    },
                    {
                        "name": "\u4e0d\u77e5",
                        "value": 52,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(67,74,17)"
                            }
                        }
                    },
                    {
                        "name": "\u4e2d\u5ea6",
                        "value": 10,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(80,35,151)"
                            }
                        }
                    },
                    {
                        "name": "\u5b9e\u8bdd\u5b9e\u8bf4",
                        "value": 63,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(128,117,55)"
                            }
                        }
                    },
                    {
                        "name": "\u7cbe\u51c6",
                        "value": 345,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(14,136,66)"
                            }
                        }
                    },
                    {
                        "name": "\u53d1\u9ed1",
                        "value": 8,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(85,139,67)"
                            }
                        }
                    },
                    {
                        "name": "\u4f4e\u7aef",
                        "value": 10,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(19,32,6)"
                            }
                        }
                    },
                    {
                        "name": "\u5ef6\u8fdf",
                        "value": 467,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(80,127,16)"
                            }
                        }
                    },
                    {
                        "name": "\u7167\u76f8",
                        "value": 19,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(81,19,114)"
                            }
                        }
                    },
                    {
                        "name": "\u5f0a\u7aef",
                        "value": 8,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(144,97,98)"
                            }
                        }
                    },
                    {
                        "name": "\u5f71\u54cd",
                        "value": 106,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(48,16,72)"
                            }
                        }
                    },
                    {
                        "name": "\u753b\u9762",
                        "value": 295,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(28,146,100)"
                            }
                        }
                    },
                    {
                        "name": "\u624b\u52bf",
                        "value": 10,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(71,28,137)"
                            }
                        }
                    },
                    {
                        "name": "\u8bc6\u522b",
                        "value": 122,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(128,19,0)"
                            }
                        }
                    },
                    {
                        "name": "\u7591\u95ee",
                        "value": 77,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(4,111,150)"
                            }
                        }
                    },
                    {
                        "name": "\u4e0b\u65b9",
                        "value": 9,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(98,127,29)"
                            }
                        }
                    },
                    {
                        "name": "\u53c2\u8003",
                        "value": 123,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(147,59,85)"
                            }
                        }
                    },
                    {
                        "name": "\u767d\u5929",
                        "value": 120,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(31,5,88)"
                            }
                        }
                    },
                    {
                        "name": "\u6709\u610f",
                        "value": 4,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(141,160,109)"
                            }
                        }
                    },
                    {
                        "name": "\u611f\u53d7",
                        "value": 2070,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(3,118,70)"
                            }
                        }
                    },
                    {
                        "name": "\u6ca1\u60f3\u5230\u8d85\u7ea7",
                        "value": 2,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(108,116,100)"
                            }
                        }
                    },
                    {
                        "name": "\u4e00\u5343\u591a\u5757",
                        "value": 9,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(116,6,127)"
                            }
                        }
                    },
                    {
                        "name": "\u7238\u7238\u5988\u5988",
                        "value": 21,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(117,88,59)"
                            }
                        }
                    },
                    {
                        "name": "\u65b0\u6b3e",
                        "value": 73,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(66,12,28)"
                            }
                        }
                    },
                    {
                        "name": "\u5168\u5bb6\u4eba",
                        "value": 42,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(137,55,39)"
                            }
                        }
                    },
                    {
                        "name": "\u4e24\u90e8",
                        "value": 18,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(59,127,158)"
                            }
                        }
                    },
                    {
                        "name": "\u5a46\u5a46",
                        "value": 131,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(73,32,116)"
                            }
                        }
                    },
                    {
                        "name": "\u6301\u4e45",
                        "value": 225,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(76,95,120)"
                            }
                        }
                    },
                    {
                        "name": "\u597d\u770b",
                        "value": 7580,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(53,77,148)"
                            }
                        }
                    },
                    {
                        "name": "\u84dd\u8272",
                        "value": 170,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(32,119,149)"
                            }
                        }
                    },
                    {
                        "name": "\u540e\u6094",
                        "value": 341,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(76,103,103)"
                            }
                        }
                    },
                    {
                        "name": "\u4e00\u90e8",
                        "value": 36,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(136,26,150)"
                            }
                        }
                    },
                    {
                        "name": "\u4e00\u4eba",
                        "value": 82,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(117,154,118)"
                            }
                        }
                    },
                    {
                        "name": "\u8fd8\u4f1a",
                        "value": 2524,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(113,49,94)"
                            }
                        }
                    },
                    {
                        "name": "\u6d3b\u52a8\u5f85\u673a\u65f6\u95f4",
                        "value": 2,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(57,9,102)"
                            }
                        }
                    },
                    {
                        "name": "\u957f\u7528",
                        "value": 5,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(6,129,28)"
                            }
                        }
                    },
                    {
                        "name": "\u8010\u770b",
                        "value": 172,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(32,21,55)"
                            }
                        }
                    },
                    {
                        "name": "\u5e74\u9f84\u6bb5",
                        "value": 5,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(132,80,95)"
                            }
                        }
                    },
                    {
                        "name": "\u5206\u8fa8\u7387",
                        "value": 93,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(92,19,108)"
                            }
                        }
                    },
                    {
                        "name": "\u624b\u673a\u4e70\u7ed9",
                        "value": 6,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(132,136,74)"
                            }
                        }
                    },
                    {
                        "name": "618",
                        "value": 254,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(129,128,17)"
                            }
                        }
                    },
                    {
                        "name": "\u6311\u5254",
                        "value": 35,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(139,103,113)"
                            }
                        }
                    },
                    {
                        "name": "\u6ca1\u5f97",
                        "value": 66,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(132,55,131)"
                            }
                        }
                    },
                    {
                        "name": "\u6b3e\u5f0f",
                        "value": 1336,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(146,9,145)"
                            }
                        }
                    },
                    {
                        "name": "\u4e00\u6b3e",
                        "value": 1643,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(101,86,158)"
                            }
                        }
                    },
                    {
                        "name": "\u5988\u5988",
                        "value": 614,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(15,35,9)"
                            }
                        }
                    },
                    {
                        "name": "\u624b\u673a\u738b\u4e00\u535a",
                        "value": 2,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(37,75,65)"
                            }
                        }
                    },
                    {
                        "name": "redmi",
                        "value": 5,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(112,1,117)"
                            }
                        }
                    },
                    {
                        "name": "note",
                        "value": 12,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(148,106,42)"
                            }
                        }
                    },
                    {
                        "name": "10",
                        "value": 335,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(159,129,104)"
                            }
                        }
                    },
                    {
                        "name": "Pro",
                        "value": 13,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(82,149,33)"
                            }
                        }
                    },
                    {
                        "name": "\u9177\u76d6",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(93,47,96)"
                            }
                        }
                    },
                    {
                        "name": "\u540c\u6b3e",
                        "value": 105,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(157,116,99)"
                            }
                        }
                    },
                    {
                        "name": "\u597d\u7528",
                        "value": 5661,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(142,14,7)"
                            }
                        }
                    },
                    {
                        "name": "\u524d\u536b",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(139,146,104)"
                            }
                        }
                    },
                    {
                        "name": "\u6469\u6258",
                        "value": 41,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(92,27,17)"
                            }
                        }
                    },
                    {
                        "name": "\u673a\u8eab",
                        "value": 298,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(79,27,81)"
                            }
                        }
                    },
                    {
                        "name": "\u8d85\u7ea7",
                        "value": 3617,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(94,105,96)"
                            }
                        }
                    },
                    {
                        "name": "\u65f6\u5c1a",
                        "value": 843,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(70,48,27)"
                            }
                        }
                    },
                    {
                        "name": "\u5927\u6c14",
                        "value": 1672,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(140,128,106)"
                            }
                        }
                    },
                    {
                        "name": "\u59d0\u59d0",
                        "value": 120,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(72,97,146)"
                            }
                        }
                    },
                    {
                        "name": "\u652f\u6301\u4e0d\u9519",
                        "value": 13,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(79,123,129)"
                            }
                        }
                    },
                    {
                        "name": "\u97f3\u8d28",
                        "value": 7128,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(52,61,68)"
                            }
                        }
                    },
                    {
                        "name": "\u6ee1\u610f",
                        "value": 14961,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(141,0,87)"
                            }
                        }
                    },
                    {
                        "name": "\u901a\u4fe1",
                        "value": 220,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(88,16,48)"
                            }
                        }
                    },
                    {
                        "name": "\u7279\u8272",
                        "value": 1055,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(132,107,103)"
                            }
                        }
                    },
                    {
                        "name": "\u4ef7\u683c",
                        "value": 1245,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(28,4,4)"
                            }
                        }
                    },
                    {
                        "name": "\u663e\u793a\u62cd\u7167",
                        "value": 5,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(129,152,29)"
                            }
                        }
                    },
                    {
                        "name": "\u6253\u6e38\u620f",
                        "value": 239,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(142,3,115)"
                            }
                        }
                    },
                    {
                        "name": "\u4e00\u822c\u822c",
                        "value": 102,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(120,76,116)"
                            }
                        }
                    },
                    {
                        "name": "\u5145\u5b8c\u7528",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(44,107,137)"
                            }
                        }
                    },
                    {
                        "name": "\u5e38\u4eae",
                        "value": 4,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(36,142,150)"
                            }
                        }
                    },
                    {
                        "name": "8g",
                        "value": 3,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(103,140,158)"
                            }
                        }
                    },
                    {
                        "name": "\u8fd0\u5b58",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(63,124,36)"
                            }
                        }
                    },
                    {
                        "name": "\u4e0d\u5361",
                        "value": 127,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(0,160,68)"
                            }
                        }
                    },
                    {
                        "name": "\u4e0d\u73a9",
                        "value": 9,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(116,66,79)"
                            }
                        }
                    },
                    {
                        "name": "\u559c\u6b22",
                        "value": 10446,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(25,102,27)"
                            }
                        }
                    },
                    {
                        "name": "\u73a9\u5230",
                        "value": 3,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(32,104,73)"
                            }
                        }
                    },
                    {
                        "name": "\u5f88\u4eae",
                        "value": 106,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(138,146,127)"
                            }
                        }
                    },
                    {
                        "name": "\u6ca1\u7535",
                        "value": 598,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(26,73,33)"
                            }
                        }
                    },
                    {
                        "name": "\u4e03\u70b9",
                        "value": 7,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(18,37,54)"
                            }
                        }
                    },
                    {
                        "name": "\u54c8\u54c8\u54c8",
                        "value": 540,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(79,98,3)"
                            }
                        }
                    },
                    {
                        "name": "\u8fd8\u884c",
                        "value": 1587,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(139,129,20)"
                            }
                        }
                    },
                    {
                        "name": "\u6d17\u6f31",
                        "value": 12,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(59,79,61)"
                            }
                        }
                    },
                    {
                        "name": "\u83ab\u540d",
                        "value": 11,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(152,103,47)"
                            }
                        }
                    },
                    {
                        "name": "\u4e94\u5929",
                        "value": 36,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(33,124,145)"
                            }
                        }
                    },
                    {
                        "name": "\u8d77\u5e8a",
                        "value": 63,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(46,15,69)"
                            }
                        }
                    },
                    {
                        "name": "\u592a\u9ad8",
                        "value": 129,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(78,125,9)"
                            }
                        }
                    },
                    {
                        "name": "\u5176\u4ed6\u4eba",
                        "value": 25,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(146,160,144)"
                            }
                        }
                    },
                    {
                        "name": "\u65e9\u4e0a",
                        "value": 398,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(44,21,156)"
                            }
                        }
                    },
                    {
                        "name": "\u591c\u665a",
                        "value": 46,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(141,122,123)"
                            }
                        }
                    },
                    {
                        "name": "\u65e5\u5e38",
                        "value": 251,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(137,152,27)"
                            }
                        }
                    },
                    {
                        "name": "\u7761\u89c9",
                        "value": 520,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(6,45,149)"
                            }
                        }
                    },
                    {
                        "name": "\u5403\u996d",
                        "value": 180,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(107,90,122)"
                            }
                        }
                    },
                    {
                        "name": "\u4e0b\u5348",
                        "value": 227,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(27,134,78)"
                            }
                        }
                    },
                    {
                        "name": "\u5f88\u5feb",
                        "value": 9162,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(43,4,21)"
                            }
                        }
                    },
                    {
                        "name": "\u63a8\u8350",
                        "value": 4547,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(133,113,114)"
                            }
                        }
                    },
                    {
                        "name": "\u63a5\u53d7",
                        "value": 416,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(85,26,17)"
                            }
                        }
                    },
                    {
                        "name": "\u4e8b\u60c5\u62cd\u7167\u7247",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(103,75,101)"
                            }
                        }
                    },
                    {
                        "name": "\u8bd5\u7528",
                        "value": 1542,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(124,78,65)"
                            }
                        }
                    },
                    {
                        "name": "\u663e\u793a\u7f8e\u989c",
                        "value": 2,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(57,101,9)"
                            }
                        }
                    },
                    {
                        "name": "\u5907\u7528\u673a",
                        "value": 30,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(24,103,72)"
                            }
                        }
                    },
                    {
                        "name": "k40",
                        "value": 16,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(93,74,121)"
                            }
                        }
                    },
                    {
                        "name": "\u4eba\u4e70",
                        "value": 10,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(16,119,143)"
                            }
                        }
                    },
                    {
                        "name": "\u5c0f\u7231",
                        "value": 35,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(22,97,11)"
                            }
                        }
                    },
                    {
                        "name": "\u53ec\u4e4b",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(12,58,59)"
                            }
                        }
                    },
                    {
                        "name": "\u5373\u6765",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(142,87,98)"
                            }
                        }
                    },
                    {
                        "name": "\u6325\u4e4b\u5373\u53bb",
                        "value": 2,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(103,34,131)"
                            }
                        }
                    },
                    {
                        "name": "\u65e0\u53ef\u66ff\u4ee3",
                        "value": 3,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(66,90,84)"
                            }
                        }
                    },
                    {
                        "name": "\u771f\u4e0d\u6127\u662f",
                        "value": 9,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(138,157,80)"
                            }
                        }
                    },
                    {
                        "name": "\u79cd\u8349",
                        "value": 90,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(153,1,2)"
                            }
                        }
                    },
                    {
                        "name": "\u81ea\u5e26",
                        "value": 518,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(89,16,96)"
                            }
                        }
                    },
                    {
                        "name": "\u4e00\u4e24",
                        "value": 15,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(67,80,32)"
                            }
                        }
                    },
                    {
                        "name": "\u540c\u5b66",
                        "value": 150,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(12,108,120)"
                            }
                        }
                    },
                    {
                        "name": "\u5b89\u6392",
                        "value": 108,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(30,109,113)"
                            }
                        }
                    },
                    {
                        "name": "\u4e0d\u5230",
                        "value": 719,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(77,57,15)"
                            }
                        }
                    },
                    {
                        "name": "\u8f83\u5927\u5206\u5c4f",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(93,117,111)"
                            }
                        }
                    },
                    {
                        "name": "\u52a0\u6253",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(56,2,43)"
                            }
                        }
                    },
                    {
                        "name": "\u9634\u9633\u5e08",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(15,91,127)"
                            }
                        }
                    },
                    {
                        "name": "70",
                        "value": 28,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(33,14,47)"
                            }
                        }
                    },
                    {
                        "name": "\u4f46\u7528",
                        "value": 15,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(151,127,18)"
                            }
                        }
                    },
                    {
                        "name": "\u5168\u7a7a\u5230",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(104,84,11)"
                            }
                        }
                    },
                    {
                        "name": "\u5168\u6ee1",
                        "value": 2,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(5,44,13)"
                            }
                        }
                    },
                    {
                        "name": "\u97f3\u6e38",
                        "value": 4,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(109,41,76)"
                            }
                        }
                    },
                    {
                        "name": "\u5fae\u535a",
                        "value": 13,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(88,75,151)"
                            }
                        }
                    },
                    {
                        "name": "\u5e05\u54e5",
                        "value": 6,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(30,34,131)"
                            }
                        }
                    },
                    {
                        "name": "\u653e\u4e2a",
                        "value": 14,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(1,96,158)"
                            }
                        }
                    },
                    {
                        "name": "\u6253\u6253",
                        "value": 11,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(128,88,54)"
                            }
                        }
                    },
                    {
                        "name": "\u6444\u50cf\u5934",
                        "value": 146,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(72,66,136)"
                            }
                        }
                    },
                    {
                        "name": "\u665a\u971e",
                        "value": 3,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(56,115,126)"
                            }
                        }
                    },
                    {
                        "name": "\u906e\u6321",
                        "value": 81,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(0,122,59)"
                            }
                        }
                    },
                    {
                        "name": "\u60ac\u6d6e",
                        "value": 4,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(40,15,14)"
                            }
                        }
                    },
                    {
                        "name": "\u521d\u59cb",
                        "value": 3,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(32,12,51)"
                            }
                        }
                    },
                    {
                        "name": "\u900f\u660e",
                        "value": 224,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(40,43,85)"
                            }
                        }
                    },
                    {
                        "name": "\u4e0d\u884c",
                        "value": 635,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(127,97,70)"
                            }
                        }
                    },
                    {
                        "name": "\u7b2c\u4e00\u6b21",
                        "value": 1665,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(32,41,97)"
                            }
                        }
                    },
                    {
                        "name": "\u4e00\u4e2a",
                        "value": 831,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(7,104,51)"
                            }
                        }
                    },
                    {
                        "name": "\u7a7a\u95f4\u7528\u7528",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(48,103,60)"
                            }
                        }
                    },
                    {
                        "name": "\u6b63\u5408\u9002",
                        "value": 283,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(29,42,144)"
                            }
                        }
                    },
                    {
                        "name": "\u4ef7\u683c\u4fbf\u5b9c",
                        "value": 752,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(38,98,68)"
                            }
                        }
                    },
                    {
                        "name": "\u957f\u8f88",
                        "value": 37,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(133,98,100)"
                            }
                        }
                    },
                    {
                        "name": "\u7236\u6bcd",
                        "value": 128,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(118,58,83)"
                            }
                        }
                    },
                    {
                        "name": "\u624b\u673a\u8fb9\u73a9",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(37,3,21)"
                            }
                        }
                    },
                    {
                        "name": "\u5f88\u6162",
                        "value": 137,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(138,35,155)"
                            }
                        }
                    },
                    {
                        "name": "\u5145\u5145",
                        "value": 10,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(118,69,50)"
                            }
                        }
                    },
                    {
                        "name": "\u8fb9\u5145",
                        "value": 62,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(103,59,133)"
                            }
                        }
                    },
                    {
                        "name": "\u4f46\u5145",
                        "value": 2,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(14,100,47)"
                            }
                        }
                    },
                    {
                        "name": "\u4e0d\u597d",
                        "value": 1562,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(109,52,47)"
                            }
                        }
                    },
                    {
                        "name": "\u5f00\u9614\u5730",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(3,111,101)"
                            }
                        }
                    },
                    {
                        "name": "\u65ad\u6d41",
                        "value": 6,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(16,158,36)"
                            }
                        }
                    },
                    {
                        "name": "\u4e0d\u53d1",
                        "value": 215,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(32,52,35)"
                            }
                        }
                    },
                    {
                        "name": "\u504f\u50fb",
                        "value": 2,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(110,121,146)"
                            }
                        }
                    },
                    {
                        "name": "\u697c\u623f",
                        "value": 2,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(58,152,153)"
                            }
                        }
                    },
                    {
                        "name": "\u4e0d\u5feb",
                        "value": 65,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(107,158,95)"
                            }
                        }
                    },
                    {
                        "name": "\u6709\u65f6\u5019",
                        "value": 261,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(54,11,145)"
                            }
                        }
                    },
                    {
                        "name": "\u53cd\u6b63",
                        "value": 451,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(68,46,1)"
                            }
                        }
                    },
                    {
                        "name": "\u5730\u65b9",
                        "value": 388,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(112,47,103)"
                            }
                        }
                    },
                    {
                        "name": "\u4e00\u4e2a\u5145\u4e0d\u4e0a",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(100,112,117)"
                            }
                        }
                    },
                    {
                        "name": "\u4e0d\u660e\u8bf4",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(15,89,7)"
                            }
                        }
                    },
                    {
                        "name": "\u8fd4\u573a",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(40,93,68)"
                            }
                        }
                    },
                    {
                        "name": "\u4e91\u91cc\u96fe\u91cc",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(83,22,102)"
                            }
                        }
                    },
                    {
                        "name": "\u65b0\u624b\u673a",
                        "value": 109,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(152,35,151)"
                            }
                        }
                    },
                    {
                        "name": "\u90ae\u5bc4",
                        "value": 25,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(157,42,56)"
                            }
                        }
                    },
                    {
                        "name": "\u552e\u540e",
                        "value": 691,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(24,15,77)"
                            }
                        }
                    },
                    {
                        "name": "\u5ba2\u670d",
                        "value": 8179,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(31,1,103)"
                            }
                        }
                    },
                    {
                        "name": "\u7b54\u6848",
                        "value": 9,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(92,101,92)"
                            }
                        }
                    },
                    {
                        "name": "\u51e0\u5929",
                        "value": 1961,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(3,63,76)"
                            }
                        }
                    },
                    {
                        "name": "\u51e0\u4e2a120hz",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(59,65,18)"
                            }
                        }
                    },
                    {
                        "name": "\u771f\u7684\u586b\u5199",
                        "value": 114,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(107,117,13)"
                            }
                        }
                    },
                    {
                        "name": "\u8bc4\u4ef7\u62cd\u7167",
                        "value": 4,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(111,123,46)"
                            }
                        }
                    },
                    {
                        "name": "\u901a\u8bdd\u8d28\u91cf",
                        "value": 16,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(40,27,55)"
                            }
                        }
                    },
                    {
                        "name": "\u5237\u6296",
                        "value": 4,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(144,143,68)"
                            }
                        }
                    },
                    {
                        "name": "\u97f3\u4e0d\u8d85",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(6,100,86)"
                            }
                        }
                    },
                    {
                        "name": "\u5b89\u5353\u673a",
                        "value": 11,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(15,82,47)"
                            }
                        }
                    },
                    {
                        "name": "\u4e0d\u95ea\u773c",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(95,119,113)"
                            }
                        }
                    },
                    {
                        "name": "\u6696\u624b",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(118,100,134)"
                            }
                        }
                    },
                    {
                        "name": "\u5f69\u8272",
                        "value": 13,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(3,132,125)"
                            }
                        }
                    },
                    {
                        "name": "\u51ac\u5929",
                        "value": 114,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(43,97,27)"
                            }
                        }
                    },
                    {
                        "name": "\u8d8a\u6765\u8d8a",
                        "value": 179,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(18,87,93)"
                            }
                        }
                    },
                    {
                        "name": "\u4e09\u4e2a",
                        "value": 355,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(26,96,84)"
                            }
                        }
                    },
                    {
                        "name": "\u663e\u793a\u7a7a\u58f3\u5b50",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(66,50,96)"
                            }
                        }
                    },
                    {
                        "name": "\u592a\u503c",
                        "value": 57,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(120,73,12)"
                            }
                        }
                    },
                    {
                        "name": "\u592a\u7f8e",
                        "value": 7,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(140,154,102)"
                            }
                        }
                    },
                    {
                        "name": "\u592a\u68d2\u4e86",
                        "value": 332,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(126,112,46)"
                            }
                        }
                    },
                    {
                        "name": "\u4e00\u5343\u591a",
                        "value": 30,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(74,36,106)"
                            }
                        }
                    },
                    {
                        "name": "\u5f88\u91cd",
                        "value": 193,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(141,65,112)"
                            }
                        }
                    },
                    {
                        "name": "\u91cd\u91cf",
                        "value": 307,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(119,78,22)"
                            }
                        }
                    },
                    {
                        "name": "\u521a\u521a",
                        "value": 1536,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(17,119,30)"
                            }
                        }
                    },
                    {
                        "name": "\u901f\u5ea6\u6027\u4ef7\u6bd4",
                        "value": 25,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(57,146,14)"
                            }
                        }
                    },
                    {
                        "name": "\u786e\u5b9e\u8fd8\u597d",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(22,130,138)"
                            }
                        }
                    },
                    {
                        "name": "\u5c31\u591f",
                        "value": 46,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(126,41,130)"
                            }
                        }
                    },
                    {
                        "name": "\u540e\u58f3",
                        "value": 17,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(56,71,7)"
                            }
                        }
                    },
                    {
                        "name": "\u4f1a\u9707",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(160,157,11)"
                            }
                        }
                    },
                    {
                        "name": "\u8bf4\u4f1a",
                        "value": 9,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(45,73,81)"
                            }
                        }
                    },
                    {
                        "name": "\u6709\u4e2a",
                        "value": 197,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(160,13,16)"
                            }
                        }
                    },
                    {
                        "name": "\u633a\u5feb",
                        "value": 1526,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(133,152,139)"
                            }
                        }
                    },
                    {
                        "name": "\u6536\u8d27",
                        "value": 318,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(21,69,51)"
                            }
                        }
                    },
                    {
                        "name": "\u5916\u58f3",
                        "value": 299,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(101,30,5)"
                            }
                        }
                    },
                    {
                        "name": "\u5c0f\u5b54",
                        "value": 16,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(120,63,64)"
                            }
                        }
                    },
                    {
                        "name": "\u5e73\u65f6",
                        "value": 679,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(128,37,157)"
                            }
                        }
                    },
                    {
                        "name": "\u7f51\u4e0a",
                        "value": 529,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(46,139,38)"
                            }
                        }
                    },
                    {
                        "name": "\u672c\u6765",
                        "value": 590,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(8,100,10)"
                            }
                        }
                    },
                    {
                        "name": "\u62c5\u5fc3",
                        "value": 1219,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(35,136,159)"
                            }
                        }
                    },
                    {
                        "name": "\u80fd\u529b",
                        "value": 715,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(29,93,42)"
                            }
                        }
                    },
                    {
                        "name": "\u53d1\u73b0\u89e3\u9501",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(119,3,131)"
                            }
                        }
                    },
                    {
                        "name": "\u5206\u8eab",
                        "value": 2,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(114,156,69)"
                            }
                        }
                    },
                    {
                        "name": "\u7f8e\u989c",
                        "value": 18,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(1,56,23)"
                            }
                        }
                    },
                    {
                        "name": "\u6709\u7f57",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(87,83,14)"
                            }
                        }
                    },
                    {
                        "name": "\u53ef\u592a",
                        "value": 4,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(122,81,88)"
                            }
                        }
                    },
                    {
                        "name": "good",
                        "value": 25,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(44,123,5)"
                            }
                        }
                    },
                    {
                        "name": "GOOD",
                        "value": 4,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(141,7,32)"
                            }
                        }
                    },
                    {
                        "name": "NICE",
                        "value": 8,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(108,66,46)"
                            }
                        }
                    },
                    {
                        "name": "\u771f\u4e0d\u9519",
                        "value": 352,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(19,86,57)"
                            }
                        }
                    },
                    {
                        "name": "\u5c0f\u9ed1",
                        "value": 2,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(158,7,94)"
                            }
                        }
                    },
                    {
                        "name": "\u5173\u673a",
                        "value": 75,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(73,156,30)"
                            }
                        }
                    },
                    {
                        "name": "\u9769\u547d\u6027",
                        "value": 2,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(107,18,50)"
                            }
                        }
                    },
                    {
                        "name": "\u4e4b\u738b",
                        "value": 12,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(33,132,89)"
                            }
                        }
                    },
                    {
                        "name": "\u8fd8\u597d",
                        "value": 1079,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(46,42,11)"
                            }
                        }
                    },
                    {
                        "name": "\u518d\u4e5f",
                        "value": 1164,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(154,7,97)"
                            }
                        }
                    },
                    {
                        "name": "\u4e3b\u9898",
                        "value": 7,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(50,69,23)"
                            }
                        }
                    },
                    {
                        "name": "\u7a81\u7834",
                        "value": 2,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(42,102,114)"
                            }
                        }
                    },
                    {
                        "name": "\u663e\u793a\u4e00\u822c\u822c",
                        "value": 3,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(148,61,28)"
                            }
                        }
                    },
                    {
                        "name": "\u56db\u5341\u591a\u5206\u949f",
                        "value": 2,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(12,55,140)"
                            }
                        }
                    },
                    {
                        "name": "mi6x",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(120,117,29)"
                            }
                        }
                    },
                    {
                        "name": "lcd",
                        "value": 4,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(112,100,28)"
                            }
                        }
                    },
                    {
                        "name": "oled",
                        "value": 7,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(129,94,99)"
                            }
                        }
                    },
                    {
                        "name": "\u95ea\u5c4f",
                        "value": 5,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(129,155,35)"
                            }
                        }
                    },
                    {
                        "name": "bug",
                        "value": 8,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(133,141,95)"
                            }
                        }
                    },
                    {
                        "name": "32",
                        "value": 8,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(131,25,137)"
                            }
                        }
                    },
                    {
                        "name": "\u8fd1\u4e00",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(145,148,27)"
                            }
                        }
                    },
                    {
                        "name": "68mp",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(101,81,33)"
                            }
                        }
                    },
                    {
                        "name": "48mp",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(66,86,142)"
                            }
                        }
                    },
                    {
                        "name": "\u4e2a\u4eba\u89c1\u89e3",
                        "value": 2,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(29,37,68)"
                            }
                        }
                    },
                    {
                        "name": "\u5f3a\u591a",
                        "value": 24,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(102,84,73)"
                            }
                        }
                    },
                    {
                        "name": "\u58f3\u5b50",
                        "value": 88,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(153,12,83)"
                            }
                        }
                    },
                    {
                        "name": "\u5f85\u673a",
                        "value": 127,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(110,72,27)"
                            }
                        }
                    },
                    {
                        "name": "\u5185\u5b58",
                        "value": 51,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(119,88,78)"
                            }
                        }
                    },
                    {
                        "name": "\u5e26\u4e2a",
                        "value": 30,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(28,138,115)"
                            }
                        }
                    },
                    {
                        "name": "\u5565\u5b50",
                        "value": 7,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(38,116,132)"
                            }
                        }
                    },
                    {
                        "name": "\u5341\u51e0",
                        "value": 18,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(61,2,106)"
                            }
                        }
                    },
                    {
                        "name": "\u4ec5\u4f9b\u53c2\u8003",
                        "value": 16,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(48,31,147)"
                            }
                        }
                    },
                    {
                        "name": "\u51fa\u4e4e\u610f\u6599",
                        "value": 125,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(42,44,150)"
                            }
                        }
                    },
                    {
                        "name": "\u9053\u6b49",
                        "value": 10,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(153,150,71)"
                            }
                        }
                    },
                    {
                        "name": "\u4e09\u5343",
                        "value": 2,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(153,144,124)"
                            }
                        }
                    },
                    {
                        "name": "\u7a0d\u5fae",
                        "value": 423,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(89,151,0)"
                            }
                        }
                    },
                    {
                        "name": "\u539a\u5ea6",
                        "value": 202,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(72,56,5)"
                            }
                        }
                    },
                    {
                        "name": "\u8212\u670d",
                        "value": 5682,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(154,5,62)"
                            }
                        }
                    },
                    {
                        "name": "\u7eaa\u5ff5",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(122,17,87)"
                            }
                        }
                    },
                    {
                        "name": "\u4e0d\u9ad8",
                        "value": 128,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(42,56,78)"
                            }
                        }
                    },
                    {
                        "name": "\u81ea\u884c\u8f66",
                        "value": 139,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(98,116,136)"
                            }
                        }
                    },
                    {
                        "name": "\u5398\u7c73",
                        "value": 30,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(19,137,95)"
                            }
                        }
                    },
                    {
                        "name": "\u533a\u522b",
                        "value": 510,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(0,31,136)"
                            }
                        }
                    },
                    {
                        "name": "\u4f30\u8ba1",
                        "value": 212,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(123,116,59)"
                            }
                        }
                    },
                    {
                        "name": "\u6574\u4f53\u5c0f\u7c73",
                        "value": 2,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(73,160,78)"
                            }
                        }
                    },
                    {
                        "name": "\u8c22\u8c22",
                        "value": 1294,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(74,159,63)"
                            }
                        }
                    },
                    {
                        "name": "\u9ebb\u70e6",
                        "value": 548,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(136,94,29)"
                            }
                        }
                    },
                    {
                        "name": "\u53ec\u4e4b\u5373\u6765",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(21,44,78)"
                            }
                        }
                    },
                    {
                        "name": "\u97f3\u6548",
                        "value": 342,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(102,59,139)"
                            }
                        }
                    },
                    {
                        "name": "\u949f\u610f",
                        "value": 3,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(88,135,47)"
                            }
                        }
                    },
                    {
                        "name": "\u5b5d\u5c3d",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(126,62,34)"
                            }
                        }
                    },
                    {
                        "name": "\u4e4b\u606f",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(111,130,86)"
                            }
                        }
                    },
                    {
                        "name": "\u521d\u8bc6",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(79,76,63)"
                            }
                        }
                    },
                    {
                        "name": "\u987a\u5176\u81ea\u7136",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(116,152,12)"
                            }
                        }
                    },
                    {
                        "name": "\u592a\u7231",
                        "value": 69,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(25,69,32)"
                            }
                        }
                    },
                    {
                        "name": "\u8ba8\u4eba\u559c\u6b22",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(133,121,20)"
                            }
                        }
                    },
                    {
                        "name": "\u4e0d\u541d",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(28,34,139)"
                            }
                        }
                    },
                    {
                        "name": "\u591f\u4e0d\u591f",
                        "value": 12,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(91,72,155)"
                            }
                        }
                    },
                    {
                        "name": "\u72ac\u9a6c\u4e4b\u52b3",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(19,79,110)"
                            }
                        }
                    },
                    {
                        "name": "\u6e29\u6587\u5c14\u96c5",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(37,40,75)"
                            }
                        }
                    },
                    {
                        "name": "\u5c3d\u663e",
                        "value": 3,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(82,134,60)"
                            }
                        }
                    },
                    {
                        "name": "\u97f3\u91cf",
                        "value": 465,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(67,83,2)"
                            }
                        }
                    },
                    {
                        "name": "\u592a\u597d",
                        "value": 303,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(12,104,80)"
                            }
                        }
                    },
                    {
                        "name": "\u670d\u52a1\u8d28\u91cf",
                        "value": 38,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(149,119,15)"
                            }
                        }
                    },
                    {
                        "name": "\u8a00\u8f9e",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(132,95,93)"
                            }
                        }
                    },
                    {
                        "name": "\u559c\u51fa\u671b\u5916",
                        "value": 4,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(97,43,31)"
                            }
                        }
                    },
                    {
                        "name": "\u5938\u5956",
                        "value": 10,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(100,21,64)"
                            }
                        }
                    },
                    {
                        "name": "\u51fa\u4f17",
                        "value": 10,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(11,52,32)"
                            }
                        }
                    },
                    {
                        "name": "\u66f4\u8981",
                        "value": 3,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(69,69,1)"
                            }
                        }
                    },
                    {
                        "name": "\u4e00\u5207\u90fd\u662f",
                        "value": 7,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(128,128,19)"
                            }
                        }
                    },
                    {
                        "name": "\u6d6a\u6f2b",
                        "value": 3,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(6,133,136)"
                            }
                        }
                    },
                    {
                        "name": "\u76f8\u8bc6",
                        "value": 3,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(78,53,9)"
                            }
                        }
                    },
                    {
                        "name": "\u771f\u5fc3",
                        "value": 1320,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(98,47,55)"
                            }
                        }
                    },
                    {
                        "name": "\u518d\u89c1",
                        "value": 9,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(91,75,151)"
                            }
                        }
                    },
                    {
                        "name": "\u7ed3\u8bc6",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(136,142,15)"
                            }
                        }
                    },
                    {
                        "name": "\u5584\u826f",
                        "value": 15,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(143,107,78)"
                            }
                        }
                    },
                    {
                        "name": "\u4f1a\u89c1",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(94,153,67)"
                            }
                        }
                    },
                    {
                        "name": "\u8fd9\u6b3e",
                        "value": 3593,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(71,141,126)"
                            }
                        }
                    },
                    {
                        "name": "\u8bf4\u5b9e\u8bdd",
                        "value": 147,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(107,5,159)"
                            }
                        }
                    },
                    {
                        "name": "\u5973\u5b69\u5b50",
                        "value": 59,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(96,41,103)"
                            }
                        }
                    },
                    {
                        "name": "\u53ef\u7231",
                        "value": 1981,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(143,2,81)"
                            }
                        }
                    },
                    {
                        "name": "\u7535\u6c60\u5bfc\u822a\u952e",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(106,49,99)"
                            }
                        }
                    },
                    {
                        "name": "\u9a8c\u8d27",
                        "value": 8,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(46,25,136)"
                            }
                        }
                    },
                    {
                        "name": "\u6362\u673a",
                        "value": 17,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(101,157,106)"
                            }
                        }
                    },
                    {
                        "name": "\u52a0\u8d2d",
                        "value": 12,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(51,136,97)"
                            }
                        }
                    },
                    {
                        "name": "\u53d6\u8d27",
                        "value": 11,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(145,117,98)"
                            }
                        }
                    },
                    {
                        "name": "\u6240\u671b",
                        "value": 17,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(155,32,144)"
                            }
                        }
                    },
                    {
                        "name": "\u9501\u5c4f",
                        "value": 10,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(64,0,26)"
                            }
                        }
                    },
                    {
                        "name": "\u5361\u987f",
                        "value": 265,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(5,55,53)"
                            }
                        }
                    },
                    {
                        "name": "\u673a\u5c4f",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(85,62,120)"
                            }
                        }
                    },
                    {
                        "name": "\u6ca1\u4e2a",
                        "value": 14,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(78,47,154)"
                            }
                        }
                    },
                    {
                        "name": "\u673a\u5b50",
                        "value": 174,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(39,104,104)"
                            }
                        }
                    },
                    {
                        "name": "\u6655\u67d3",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(51,139,0)"
                            }
                        }
                    },
                    {
                        "name": "\u5f00\u7bb1",
                        "value": 71,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(125,28,119)"
                            }
                        }
                    },
                    {
                        "name": "\u6b63\u4e0a\u65b9",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(34,31,76)"
                            }
                        }
                    },
                    {
                        "name": "\u4e0a\u8272",
                        "value": 40,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(100,45,20)"
                            }
                        }
                    },
                    {
                        "name": "\u7269\u6709\u6240\u503c",
                        "value": 602,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(21,74,75)"
                            }
                        }
                    },
                    {
                        "name": "\u5341\u5168\u5341\u7f8e",
                        "value": 8,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(96,106,150)"
                            }
                        }
                    },
                    {
                        "name": "\u5f00\u673a",
                        "value": 188,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(158,135,153)"
                            }
                        }
                    },
                    {
                        "name": "\u4e03\u5929",
                        "value": 38,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(128,15,30)"
                            }
                        }
                    },
                    {
                        "name": "\u80f6\u8d28",
                        "value": 10,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(79,0,28)"
                            }
                        }
                    },
                    {
                        "name": "\u6ee1\u6ee1\u7684",
                        "value": 111,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(133,43,116)"
                            }
                        }
                    },
                    {
                        "name": "\u70b9\u70b9",
                        "value": 87,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(76,47,140)"
                            }
                        }
                    },
                    {
                        "name": "\u4ed8\u6b3e",
                        "value": 44,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(35,156,135)"
                            }
                        }
                    },
                    {
                        "name": "\u4e0d\u8d1f",
                        "value": 24,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(14,14,12)"
                            }
                        }
                    },
                    {
                        "name": "\u4e5d\u4e2a",
                        "value": 17,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(50,7,145)"
                            }
                        }
                    },
                    {
                        "name": "\u5fc3\u76ee",
                        "value": 6,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(95,47,124)"
                            }
                        }
                    },
                    {
                        "name": "\u53cb\u597d",
                        "value": 86,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(126,144,78)"
                            }
                        }
                    },
                    {
                        "name": "\u56de\u5e94",
                        "value": 24,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(68,37,93)"
                            }
                        }
                    },
                    {
                        "name": "\u5747\u5300",
                        "value": 394,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(151,150,154)"
                            }
                        }
                    },
                    {
                        "name": "\u67e5\u770b",
                        "value": 137,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(57,88,113)"
                            }
                        }
                    },
                    {
                        "name": "\u7269\u6d41",
                        "value": 8906,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(60,114,145)"
                            }
                        }
                    },
                    {
                        "name": "\u7075\u6d3b",
                        "value": 185,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(27,71,1)"
                            }
                        }
                    },
                    {
                        "name": "\u671f\u5f85",
                        "value": 829,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(45,40,28)"
                            }
                        }
                    },
                    {
                        "name": "\u51c6\u786e",
                        "value": 447,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(129,116,159)"
                            }
                        }
                    },
                    {
                        "name": "\u4e00\u6bb5",
                        "value": 55,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(4,106,129)"
                            }
                        }
                    },
                    {
                        "name": "\u5173\u952e",
                        "value": 665,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(10,124,21)"
                            }
                        }
                    },
                    {
                        "name": "\u597d\u50cf",
                        "value": 225,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(145,62,148)"
                            }
                        }
                    },
                    {
                        "name": "\u7efc\u5408",
                        "value": 70,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(43,128,5)"
                            }
                        }
                    },
                    {
                        "name": "\u5e0c\u671b",
                        "value": 1327,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(9,12,34)"
                            }
                        }
                    },
                    {
                        "name": "\u6d88\u606f\u62cd\u7167",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(121,99,52)"
                            }
                        }
                    },
                    {
                        "name": "\u679c\u7c89",
                        "value": 3,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(38,136,57)"
                            }
                        }
                    },
                    {
                        "name": "\u62a4\u773c",
                        "value": 67,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(93,30,120)"
                            }
                        }
                    },
                    {
                        "name": "\u534e\u4e3a",
                        "value": 311,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(158,13,150)"
                            }
                        }
                    },
                    {
                        "name": "\u6781\u5feb",
                        "value": 17,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(21,36,130)"
                            }
                        }
                    },
                    {
                        "name": "\u8f6c\u673a",
                        "value": 2,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(131,48,48)"
                            }
                        }
                    },
                    {
                        "name": "\u8d44\u6df1",
                        "value": 5,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(36,22,13)"
                            }
                        }
                    },
                    {
                        "name": "\u5747\u8861",
                        "value": 35,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(9,106,117)"
                            }
                        }
                    },
                    {
                        "name": "\u6726\u80e7",
                        "value": 3,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(78,97,135)"
                            }
                        }
                    },
                    {
                        "name": "\u957f\u65f6\u95f4",
                        "value": 353,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(1,88,84)"
                            }
                        }
                    },
                    {
                        "name": "\u771f\u5b9e",
                        "value": 207,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(124,114,74)"
                            }
                        }
                    },
                    {
                        "name": "\u4e00\u6bb5\u65f6\u95f4",
                        "value": 1148,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(77,83,158)"
                            }
                        }
                    },
                    {
                        "name": "\u65b0\u95fb",
                        "value": 35,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(121,147,34)"
                            }
                        }
                    },
                    {
                        "name": "\u7279\u522b\u7eed\u822a",
                        "value": 29,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(78,76,153)"
                            }
                        }
                    },
                    {
                        "name": "iPhone",
                        "value": 32,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(40,7,8)"
                            }
                        }
                    },
                    {
                        "name": "\u770b\u4e45",
                        "value": 15,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(102,135,23)"
                            }
                        }
                    },
                    {
                        "name": "\u65b0\u673a",
                        "value": 65,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(7,77,83)"
                            }
                        }
                    },
                    {
                        "name": "\u6ee1\u8db3\u611f",
                        "value": 4,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(49,136,57)"
                            }
                        }
                    },
                    {
                        "name": "\u9178\u6da9",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(41,63,42)"
                            }
                        }
                    },
                    {
                        "name": "\u80fd\u7528",
                        "value": 1260,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(132,93,7)"
                            }
                        }
                    },
                    {
                        "name": "\u7cbe\u81f4",
                        "value": 3173,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(11,128,38)"
                            }
                        }
                    },
                    {
                        "name": "\u5305\u88c5",
                        "value": 5922,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(32,83,68)"
                            }
                        }
                    },
                    {
                        "name": "\u4e00\u4f1a\u513f",
                        "value": 169,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(6,87,121)"
                            }
                        }
                    },
                    {
                        "name": "50",
                        "value": 112,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(31,11,77)"
                            }
                        }
                    },
                    {
                        "name": "\u4e8c\u5341\u5206\u949f",
                        "value": 28,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(10,8,119)"
                            }
                        }
                    },
                    {
                        "name": "\u70ed\u5f97",
                        "value": 12,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(35,3,33)"
                            }
                        }
                    },
                    {
                        "name": "\u88e4\u5b50",
                        "value": 26,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(38,108,97)"
                            }
                        }
                    },
                    {
                        "name": "\u6700\u5feb",
                        "value": 14,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(129,31,5)"
                            }
                        }
                    },
                    {
                        "name": "\u56de\u590d",
                        "value": 605,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(17,121,78)"
                            }
                        }
                    },
                    {
                        "name": "\u4e00\u5c42",
                        "value": 87,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(104,43,3)"
                            }
                        }
                    },
                    {
                        "name": "\u627f\u8ba4",
                        "value": 33,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(23,72,32)"
                            }
                        }
                    },
                    {
                        "name": "\u8d2d\u4e70",
                        "value": 9629,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(63,123,57)"
                            }
                        }
                    },
                    {
                        "name": "\u8bbe\u8ba1",
                        "value": 1368,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(79,119,115)"
                            }
                        }
                    },
                    {
                        "name": "\u8d85\u8fc7\u97f3\u91cf",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(54,145,52)"
                            }
                        }
                    },
                    {
                        "name": "\u5173\u673a\u65f6",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(147,97,147)"
                            }
                        }
                    },
                    {
                        "name": "\u738b\u4e00\u535a",
                        "value": 133,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(11,157,60)"
                            }
                        }
                    },
                    {
                        "name": "\u63e1\u673a",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(45,61,91)"
                            }
                        }
                    },
                    {
                        "name": "\u78b0\u6613",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(49,111,126)"
                            }
                        }
                    },
                    {
                        "name": "\u6613\u5b66",
                        "value": 29,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(98,138,105)"
                            }
                        }
                    },
                    {
                        "name": "\u4ee3\u8a00\u4eba",
                        "value": 53,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(10,120,63)"
                            }
                        }
                    },
                    {
                        "name": "\u624b\u611f",
                        "value": 3200,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(95,82,48)"
                            }
                        }
                    },
                    {
                        "name": "\u6dd8\u6c70",
                        "value": 24,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(118,52,43)"
                            }
                        }
                    },
                    {
                        "name": "\u5916\u5f62",
                        "value": 943,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(33,40,73)"
                            }
                        }
                    },
                    {
                        "name": "\u533a\u5206",
                        "value": 13,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(15,131,138)"
                            }
                        }
                    },
                    {
                        "name": "\u78b0\u5230",
                        "value": 75,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(20,69,117)"
                            }
                        }
                    },
                    {
                        "name": "\u6f02\u4eae",
                        "value": 2395,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(15,43,54)"
                            }
                        }
                    },
                    {
                        "name": "\u8001\u4eba",
                        "value": 533,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(139,1,75)"
                            }
                        }
                    },
                    {
                        "name": "\u8bbe\u7f6e",
                        "value": 365,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(43,112,7)"
                            }
                        }
                    },
                    {
                        "name": "\u6b64\u524d",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(7,141,4)"
                            }
                        }
                    },
                    {
                        "name": "\u5bb6\u91cc",
                        "value": 1589,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(79,83,94)"
                            }
                        }
                    },
                    {
                        "name": "\u7b80\u5355",
                        "value": 3608,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(15,89,112)"
                            }
                        }
                    },
                    {
                        "name": "\u64cd\u4f5c",
                        "value": 2166,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(147,65,127)"
                            }
                        }
                    },
                    {
                        "name": "\u7279\u522b",
                        "value": 3043,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(83,149,119)"
                            }
                        }
                    },
                    {
                        "name": "\u65f6\u95f4\u771f\u7684",
                        "value": 5,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(90,2,123)"
                            }
                        }
                    },
                    {
                        "name": "\u6709\u7ebf\u8033\u673a",
                        "value": 105,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(140,108,39)"
                            }
                        }
                    },
                    {
                        "name": "\u6211\u8bd5",
                        "value": 31,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(0,41,73)"
                            }
                        }
                    },
                    {
                        "name": "\u5feb\u9012",
                        "value": 2889,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(131,78,101)"
                            }
                        }
                    },
                    {
                        "name": "\u6de1\u6de1\u7684",
                        "value": 218,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(131,115,147)"
                            }
                        }
                    },
                    {
                        "name": "\u6587\u827a",
                        "value": 5,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(38,1,55)"
                            }
                        }
                    },
                    {
                        "name": "\u989c\u8272",
                        "value": 4068,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(129,70,158)"
                            }
                        }
                    },
                    {
                        "name": "\u6253\u5f00",
                        "value": 1602,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(14,135,107)"
                            }
                        }
                    },
                    {
                        "name": "\u9009\u62e9",
                        "value": 824,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(59,127,84)"
                            }
                        }
                    },
                    {
                        "name": "\u4e00\u4e2a\u586b\u5199",
                        "value": 376,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(100,103,37)"
                            }
                        }
                    },
                    {
                        "name": "\u8bc4\u4ef7\u624b\u673a",
                        "value": 19,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(38,95,59)"
                            }
                        }
                    },
                    {
                        "name": "\u603b\u4f53",
                        "value": 1287,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(160,76,115)"
                            }
                        }
                    },
                    {
                        "name": "120hz",
                        "value": 11,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(66,65,11)"
                            }
                        }
                    },
                    {
                        "name": "\u8001\u5e74\u4eba",
                        "value": 124,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(69,134,105)"
                            }
                        }
                    },
                    {
                        "name": "\u4fa7\u9762",
                        "value": 133,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(128,84,95)"
                            }
                        }
                    },
                    {
                        "name": "\u5e74\u8f7b\u4eba",
                        "value": 29,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(35,21,14)"
                            }
                        }
                    },
                    {
                        "name": "\u58f0\u97f3\u8272\u5f69\u6591\u6593",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(146,158,88)"
                            }
                        }
                    },
                    {
                        "name": "\u7f24\u7eb7\u591a\u5f69",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(37,20,102)"
                            }
                        }
                    },
                    {
                        "name": "\u4faa\u8f88",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(67,96,7)"
                            }
                        }
                    },
                    {
                        "name": "\u54af\u697c",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(6,6,120)"
                            }
                        }
                    },
                    {
                        "name": "\u6b27\u8bfa",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(141,48,80)"
                            }
                        }
                    },
                    {
                        "name": "\u8d35\u5dde",
                        "value": 3,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(126,46,60)"
                            }
                        }
                    },
                    {
                        "name": "\u8272\u5f69\u753b\u9762",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(32,158,138)"
                            }
                        }
                    },
                    {
                        "name": "\u4e0d\u9519\u989c\u503c",
                        "value": 94,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(12,31,135)"
                            }
                        }
                    },
                    {
                        "name": "\u5237\u65b0\u7387",
                        "value": 5,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(41,115,124)"
                            }
                        }
                    },
                    {
                        "name": "\u786e\u5b9e",
                        "value": 1878,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(84,30,35)"
                            }
                        }
                    },
                    {
                        "name": "\u5e26\u6765\u8c03\u97f3",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(33,30,35)"
                            }
                        }
                    },
                    {
                        "name": "\u52a0\u7c97",
                        "value": 9,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(10,55,147)"
                            }
                        }
                    },
                    {
                        "name": "\u5b57\u4f53",
                        "value": 18,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(151,91,109)"
                            }
                        }
                    },
                    {
                        "name": "\u5e74\u7eaa",
                        "value": 28,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(151,35,39)"
                            }
                        }
                    },
                    {
                        "name": "\u5f88\u5927\u6548\u679c",
                        "value": 7,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(29,104,80)"
                            }
                        }
                    },
                    {
                        "name": "\u540e\u76d6",
                        "value": 12,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(17,59,87)"
                            }
                        }
                    },
                    {
                        "name": "\u9a6c\u9a6c\u864e\u864e",
                        "value": 12,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(151,85,81)"
                            }
                        }
                    },
                    {
                        "name": "\u663e\u793a\u97f3\u8d28",
                        "value": 16,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(38,86,0)"
                            }
                        }
                    },
                    {
                        "name": "\u767e\u9999\u679c",
                        "value": 26,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(107,51,140)"
                            }
                        }
                    },
                    {
                        "name": "\u81ea\u62cd",
                        "value": 6,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(81,53,21)"
                            }
                        }
                    },
                    {
                        "name": "\u675c\u6bd4",
                        "value": 4,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(76,12,67)"
                            }
                        }
                    },
                    {
                        "name": "\u7528\u7ea2\u7c73",
                        "value": 7,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(153,17,96)"
                            }
                        }
                    },
                    {
                        "name": "\u65d7\u8230\u673a",
                        "value": 6,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(87,74,10)"
                            }
                        }
                    },
                    {
                        "name": "\u535a\u541b",
                        "value": 16,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(30,76,153)"
                            }
                        }
                    },
                    {
                        "name": "\u4e00\u8096",
                        "value": 18,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(96,95,135)"
                            }
                        }
                    },
                    {
                        "name": "\u633a\u4e0d\u9519",
                        "value": 1351,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(64,73,69)"
                            }
                        }
                    },
                    {
                        "name": "\u4ee3\u8a00",
                        "value": 111,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(35,122,118)"
                            }
                        }
                    },
                    {
                        "name": "\u5212\u7b97",
                        "value": 1240,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(55,103,76)"
                            }
                        }
                    },
                    {
                        "name": "\u7c89\u4e1d",
                        "value": 87,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(28,152,82)"
                            }
                        }
                    },
                    {
                        "name": "\u6211\u4f1a",
                        "value": 183,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(71,37,104)"
                            }
                        }
                    },
                    {
                        "name": "\u914d\u7f6e",
                        "value": 128,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(57,62,126)"
                            }
                        }
                    },
                    {
                        "name": "\u663e\u793a\u5feb\u9012",
                        "value": 5,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(113,138,129)"
                            }
                        }
                    },
                    {
                        "name": "\u6700\u65b0\u7248",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(2,128,61)"
                            }
                        }
                    },
                    {
                        "name": "\u8d85\u5feb",
                        "value": 200,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(0,99,138)"
                            }
                        }
                    },
                    {
                        "name": "\u987a\u4e30",
                        "value": 335,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(0,9,80)"
                            }
                        }
                    },
                    {
                        "name": "\u7ed9\u529b",
                        "value": 519,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(67,3,146)"
                            }
                        }
                    },
                    {
                        "name": "\u6742\u97f3",
                        "value": 1415,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(2,114,17)"
                            }
                        }
                    },
                    {
                        "name": "\u53d1\u8d27",
                        "value": 4026,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(27,27,150)"
                            }
                        }
                    },
                    {
                        "name": "\u901f\u901f",
                        "value": 2,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(24,150,111)"
                            }
                        }
                    },
                    {
                        "name": "\u7ea2\u5916\u7ebf",
                        "value": 10,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(51,86,128)"
                            }
                        }
                    },
                    {
                        "name": "\u901a\u8bdd",
                        "value": 469,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(145,8,138)"
                            }
                        }
                    },
                    {
                        "name": "\u7b2c\u4e8c\u5929",
                        "value": 507,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(23,52,118)"
                            }
                        }
                    },
                    {
                        "name": "\u670d\u52a1",
                        "value": 1887,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(131,112,148)"
                            }
                        }
                    },
                    {
                        "name": "\u5317\u4eac",
                        "value": 3,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(117,159,76)"
                            }
                        }
                    },
                    {
                        "name": "\u53d1\u73b0",
                        "value": 241,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(130,130,59)"
                            }
                        }
                    },
                    {
                        "name": "\u60c5\u51b5lcd",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(10,55,142)"
                            }
                        }
                    },
                    {
                        "name": "\u5435\u6742",
                        "value": 2,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(119,67,58)"
                            }
                        }
                    },
                    {
                        "name": "\u6c34\u6876",
                        "value": 24,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(153,108,76)"
                            }
                        }
                    },
                    {
                        "name": "\u51fa\u95e8",
                        "value": 885,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(59,42,50)"
                            }
                        }
                    },
                    {
                        "name": "\u653e\u5fc3",
                        "value": 1981,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(145,121,8)"
                            }
                        }
                    },
                    {
                        "name": "\u8d44\u6599",
                        "value": 11,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(12,62,53)"
                            }
                        }
                    },
                    {
                        "name": "\u80af\u5b9a",
                        "value": 229,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(47,77,44)"
                            }
                        }
                    },
                    {
                        "name": "\u4e00\u70b9\u7092\u9e21",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(158,40,153)"
                            }
                        }
                    },
                    {
                        "name": "\u5cb3\u7236",
                        "value": 2,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(38,114,85)"
                            }
                        }
                    },
                    {
                        "name": "\u4e00\u53f0\u97f3\u8d28",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(97,51,0)"
                            }
                        }
                    },
                    {
                        "name": "nfc",
                        "value": 9,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(81,72,58)"
                            }
                        }
                    },
                    {
                        "name": "\u6700\u7ed9\u529b",
                        "value": 4,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(86,0,63)"
                            }
                        }
                    },
                    {
                        "name": "\u53f3\u5feb",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(120,107,76)"
                            }
                        }
                    },
                    {
                        "name": "\u4f4e\u914d",
                        "value": 4,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(28,65,68)"
                            }
                        }
                    },
                    {
                        "name": "\u9065\u63a7",
                        "value": 438,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(139,68,50)"
                            }
                        }
                    },

                ]
                var data2 = [

                    {
                        "name": "\u51e4\u722a",
                        "value": 80,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(27,157,127)"
                            }
                        }
                    },
                    {
                        "name": "\u85d5\u7247",
                        "value": 12,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(140,16,25)"
                            }
                        }
                    },
                    {
                        "name": "\u679c\u5e72",
                        "value": 94,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(5,45,128)"
                            }
                        }
                    },
                    {
                        "name": "\u5f20\u54f2\u701a",
                        "value": 72,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(145,143,33)"
                            }
                        }
                    },
                    {
                        "name": "\u6d77\u54f2\u4f1a",
                        "value": 6,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(116,71,71)"
                            }
                        }
                    },
                    {
                        "name": "\u54f2\u701a",
                        "value": 17,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(88,48,35)"
                            }
                        }
                    },
                    {
                        "name": "\u751c\u8fa3",
                        "value": 100,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(151,7,53)"
                            }
                        }
                    },
                    {
                        "name": "\u65e0\u9aa8",
                        "value": 36,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(49,33,97)"
                            }
                        }
                    },
                    {
                        "name": "\u701a\u6d77",
                        "value": 2,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(158,53,88)"
                            }
                        }
                    },
                    {
                        "name": "\u767e\u8349",
                        "value": 135,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(76,76,105)"
                            }
                        }
                    },
                    {
                        "name": "\u4fdd\u8d28\u671f",
                        "value": 2053,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(149,24,118)"
                            }
                        }
                    },
                    {
                        "name": "\u8fa3\u5473",
                        "value": 397,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(84,5,126)"
                            }
                        }
                    },
                    {
                        "name": "\u4e00\u70b9",
                        "value": 976,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(115,40,120)"
                            }
                        }
                    },
                    {
                        "name": "\u575a\u679c",
                        "value": 625,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(42,71,46)"
                            }
                        }
                    },
                    {
                        "name": "\u4e00\u888b",
                        "value": 1345,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(41,30,154)"
                            }
                        }
                    },
                    {
                        "name": "\u571f\u8c46",
                        "value": 58,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(154,0,8)"
                            }
                        }
                    },
                    {
                        "name": "\u5b9e\u60e0",
                        "value": 4351,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(35,159,78)"
                            }
                        }
                    },
                    {
                        "name": "\u8feb\u4e0d\u53ca\u5f85",
                        "value": 501,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(148,55,33)"
                            }
                        }
                    },
                    {
                        "name": "\u642d\u914d",
                        "value": 755,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(141,77,62)"
                            }
                        }
                    },
                    {
                        "name": "\u5305\u88c5",
                        "value": 14587,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(157,105,108)"
                            }
                        }
                    },
                    {
                        "name": "\u611f\u8c22",
                        "value": 494,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(140,44,49)"
                            }
                        }
                    },
                    {
                        "name": "\u65b0\u9c9c",
                        "value": 7122,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(44,98,49)"
                            }
                        }
                    },
                    {
                        "name": "\u65e5\u671f",
                        "value": 3407,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(104,82,60)"
                            }
                        }
                    },
                    {
                        "name": "\u6c38\u8fdc",
                        "value": 116,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(58,28,145)"
                            }
                        }
                    },
                    {
                        "name": "\u8d28\u91cf",
                        "value": 3493,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(50,20,75)"
                            }
                        }
                    },
                    {
                        "name": "\u8d8a\u6765\u8d8a",
                        "value": 192,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(59,133,13)"
                            }
                        }
                    },
                    {
                        "name": "\u9009\u62e9",
                        "value": 326,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(98,157,63)"
                            }
                        }
                    },
                    {
                        "name": "\u652f\u6301\u5f88\u5f39",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(101,121,66)"
                            }
                        }
                    },
                    {
                        "name": "\u8089\u8d28",
                        "value": 160,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(18,137,150)"
                            }
                        }
                    },
                    {
                        "name": "\u522b\u8db3",
                        "value": 2,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(147,101,14)"
                            }
                        }
                    },
                    {
                        "name": "\u8116\u662f",
                        "value": 3,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(138,17,47)"
                            }
                        }
                    },
                    {
                        "name": "\u6bcf\u888b\u91cf",
                        "value": 11,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(90,66,150)"
                            }
                        }
                    },
                    {
                        "name": "\u633a\u5927",
                        "value": 204,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(90,56,10)"
                            }
                        }
                    },
                    {
                        "name": "\u5f88\u80fd",
                        "value": 17,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(68,109,102)"
                            }
                        }
                    },
                    {
                        "name": "\u4efd\u91cf",
                        "value": 940,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(94,60,89)"
                            }
                        }
                    },
                    {
                        "name": "\u597d\u5403",
                        "value": 27732,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(25,14,59)"
                            }
                        }
                    },
                    {
                        "name": "\u5473\u9053",
                        "value": 27513,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(61,107,136)"
                            }
                        }
                    },
                    {
                        "name": "\u60f3\u8c61",
                        "value": 725,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(132,89,140)"
                            }
                        }
                    },
                    {
                        "name": "\u66f4\u597d",
                        "value": 632,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(148,99,5)"
                            }
                        }
                    },
                    {
                        "name": "\u72ec\u7acb\u5473\u9053",
                        "value": 26,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(144,41,15)"
                            }
                        }
                    },
                    {
                        "name": "xz",
                        "value": 4,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(5,128,152)"
                            }
                        }
                    },
                    {
                        "name": "\u5f88\u5f39",
                        "value": 39,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(137,112,120)"
                            }
                        }
                    },
                    {
                        "name": "\u8fa3\u6b3e",
                        "value": 2,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(108,104,34)"
                            }
                        }
                    },
                    {
                        "name": "\u8165\u5473",
                        "value": 117,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(22,57,106)"
                            }
                        }
                    },
                    {
                        "name": "\u96f6\u98df",
                        "value": 1747,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(53,17,109)"
                            }
                        }
                    },
                    {
                        "name": "\u53e3\u611f",
                        "value": 13726,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(75,5,74)"
                            }
                        }
                    },
                    {
                        "name": "\u4e0d\u91cd",
                        "value": 41,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(9,137,53)"
                            }
                        }
                    },
                    {
                        "name": "\u672a\u5c3d",
                        "value": 2,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(153,140,96)"
                            }
                        }
                    },
                    {
                        "name": "\u4e0a\u5934",
                        "value": 80,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(7,89,11)"
                            }
                        }
                    },
                    {
                        "name": "\u89c4\u683c",
                        "value": 236,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(83,89,45)"
                            }
                        }
                    },
                    {
                        "name": "\u8d85\u7ea7",
                        "value": 3146,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(133,121,160)"
                            }
                        }
                    },
                    {
                        "name": "\u5c0f\u5b69",
                        "value": 820,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(148,153,6)"
                            }
                        }
                    },
                    {
                        "name": "\u6c34\u5206",
                        "value": 347,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(77,143,137)"
                            }
                        }
                    },
                    {
                        "name": "\u559c\u6b22",
                        "value": 10168,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(30,42,46)"
                            }
                        }
                    },
                    {
                        "name": "\u5b69\u5b50\u4fdd\u8d28\u671f",
                        "value": 6,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(155,111,108)"
                            }
                        }
                    },
                    {
                        "name": "CC",
                        "value": 12,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(29,151,135)"
                            }
                        }
                    },
                    {
                        "name": "\u4fe1\u8d56",
                        "value": 513,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(42,21,33)"
                            }
                        }
                    },
                    {
                        "name": "\u8bc4\u4ef7",
                        "value": 2719,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(78,135,116)"
                            }
                        }
                    },
                    {
                        "name": "\u4e0d\u9519",
                        "value": 18341,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(91,139,133)"
                            }
                        }
                    },
                    {
                        "name": "\u4e00\u534a",
                        "value": 284,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(12,1,95)"
                            }
                        }
                    },
                    {
                        "name": "\u54c1\u724c",
                        "value": 857,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(110,87,71)"
                            }
                        }
                    },
                    {
                        "name": "\u503c\u5f97",
                        "value": 3994,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(140,116,156)"
                            }
                        }
                    },
                    {
                        "name": "\u8d8a\u6765\u8d8a\u5927\u793c\u5305",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(138,93,149)"
                            }
                        }
                    },
                    {
                        "name": "\u5305\u653e",
                        "value": 2,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(131,16,106)"
                            }
                        }
                    },
                    {
                        "name": "\u8364\u7d20",
                        "value": 7,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(108,22,94)"
                            }
                        }
                    },
                    {
                        "name": "\u5c1d\u65b0",
                        "value": 6,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(101,108,47)"
                            }
                        }
                    },
                    {
                        "name": "\u4e00\u5c0f\u5757",
                        "value": 24,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(74,80,143)"
                            }
                        }
                    },
                    {
                        "name": "\u95f4\u9699",
                        "value": 4,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(84,85,64)"
                            }
                        }
                    },
                    {
                        "name": "\u505a\u4e8b",
                        "value": 5,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(54,75,110)"
                            }
                        }
                    },
                    {
                        "name": "\u4e00\u5c0f",
                        "value": 113,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(47,124,61)"
                            }
                        }
                    },
                    {
                        "name": "\u5168\u65b0",
                        "value": 21,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(157,60,120)"
                            }
                        }
                    },
                    {
                        "name": "\u5634\u91cc",
                        "value": 168,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(135,107,23)"
                            }
                        }
                    },
                    {
                        "name": "\u7b97\u662f",
                        "value": 164,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(55,25,143)"
                            }
                        }
                    },
                    {
                        "name": "\u8d8a\u6765\u8d8a\u53e3\u611f",
                        "value": 3,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(102,47,3)"
                            }
                        }
                    },
                    {
                        "name": "\u771f\u7684",
                        "value": 4283,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(8,50,58)"
                            }
                        }
                    },
                    {
                        "name": "ya",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(151,91,8)"
                            }
                        }
                    },
                    {
                        "name": "\u6709\u80a1",
                        "value": 103,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(138,2,24)"
                            }
                        }
                    },
                    {
                        "name": "\u836f\u5473",
                        "value": 8,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(24,110,4)"
                            }
                        }
                    },
                    {
                        "name": "\u9178\u9178\u7684",
                        "value": 349,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(84,129,94)"
                            }
                        }
                    },
                    {
                        "name": "\u5206\u88c5",
                        "value": 54,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(134,87,105)"
                            }
                        }
                    },
                    {
                        "name": "\u7279\u522b",
                        "value": 1820,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(34,145,34)"
                            }
                        }
                    },
                    {
                        "name": "\u5206\u91cf",
                        "value": 3872,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(133,107,134)"
                            }
                        }
                    },
                    {
                        "name": "\u793c\u7269",
                        "value": 150,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(24,57,110)"
                            }
                        }
                    },
                    {
                        "name": "\u9002\u5408",
                        "value": 1740,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(112,110,80)"
                            }
                        }
                    },
                    {
                        "name": "\u5b66\u751f\u888b\u5b50",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(148,152,30)"
                            }
                        }
                    },
                    {
                        "name": "\u633a\u597d\u5403",
                        "value": 454,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(102,150,67)"
                            }
                        }
                    },
                    {
                        "name": "Lucky",
                        "value": 11,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(115,139,143)"
                            }
                        }
                    },
                    {
                        "name": "\u5f39\u7259",
                        "value": 62,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(41,6,14)"
                            }
                        }
                    },
                    {
                        "name": "\u6ce1\u6912\u5473",
                        "value": 10,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(129,110,155)"
                            }
                        }
                    },
                    {
                        "name": "\u5305\u88c5\u888b",
                        "value": 173,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(121,0,104)"
                            }
                        }
                    },
                    {
                        "name": "\u5f88\u9999",
                        "value": 1298,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(52,57,16)"
                            }
                        }
                    },
                    {
                        "name": "\u8d28\u611f",
                        "value": 227,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(133,140,111)"
                            }
                        }
                    },
                    {
                        "name": "\u62c6\u5f00",
                        "value": 356,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(160,134,35)"
                            }
                        }
                    },
                    {
                        "name": "\u536b\u751f",
                        "value": 972,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(21,149,92)"
                            }
                        }
                    },
                    {
                        "name": "\u5e72\u51c0",
                        "value": 1646,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(148,60,74)"
                            }
                        }
                    },
                    {
                        "name": "\u4e00\u80a1",
                        "value": 657,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(51,45,89)"
                            }
                        }
                    },
                    {
                        "name": "\u653e\u5fc3",
                        "value": 1358,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(20,27,47)"
                            }
                        }
                    },
                    {
                        "name": "\u4fdd\u969c",
                        "value": 131,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(6,23,115)"
                            }
                        }
                    },
                    {
                        "name": "\u72ec\u7acb\u6bcf\u888b\u91cf",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(44,13,16)"
                            }
                        }
                    },
                    {
                        "name": "\u751c\u54b8",
                        "value": 21,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(25,39,68)"
                            }
                        }
                    },
                    {
                        "name": "\u5f88\u68d2",
                        "value": 956,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(128,137,143)"
                            }
                        }
                    },
                    {
                        "name": "\u56de\u8d2d",
                        "value": 10422,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(87,53,142)"
                            }
                        }
                    },
                    {
                        "name": "\u5e38\u6709",
                        "value": 5,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(126,95,26)"
                            }
                        }
                    },
                    {
                        "name": "\u771f\u7684\u85d5\u7247",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(134,147,65)"
                            }
                        }
                    },
                    {
                        "name": "\u571f\u8c46\u7247",
                        "value": 20,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(135,57,66)"
                            }
                        }
                    },
                    {
                        "name": "\u5927\u8fa3\u7247",
                        "value": 74,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(72,123,109)"
                            }
                        }
                    },
                    {
                        "name": "\u5927\u793c\u5305",
                        "value": 32,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(10,100,148)"
                            }
                        }
                    },
                    {
                        "name": "\u751c\u5473",
                        "value": 523,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(148,99,90)"
                            }
                        }
                    },
                    {
                        "name": "\u6df7\u5408",
                        "value": 181,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(15,9,133)"
                            }
                        }
                    },
                    {
                        "name": "\u529b\u5ea6",
                        "value": 129,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(22,56,77)"
                            }
                        }
                    },
                    {
                        "name": "\u5546\u54c1\u8fa3\u5473",
                        "value": 3,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(104,25,157)"
                            }
                        }
                    },
                    {
                        "name": "B\u8d85",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(56,3,60)"
                            }
                        }
                    },
                    {
                        "name": "\u6765\u8bc4",
                        "value": 6,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(52,124,125)"
                            }
                        }
                    },
                    {
                        "name": "\u6e56\u5357\u4eba",
                        "value": 6,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(5,45,154)"
                            }
                        }
                    },
                    {
                        "name": "\u652f\u6301\u65b0\u9c9c",
                        "value": 3,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(125,152,1)"
                            }
                        }
                    },
                    {
                        "name": "\u8106\u8106",
                        "value": 393,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(140,105,150)"
                            }
                        }
                    },
                    {
                        "name": "\u4fbf\u5229\u5e97",
                        "value": 15,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(30,65,5)"
                            }
                        }
                    },
                    {
                        "name": "\u751f\u4ea7\u65e5\u671f",
                        "value": 610,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(51,106,70)"
                            }
                        }
                    },
                    {
                        "name": "\u53e3\u5473",
                        "value": 4309,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(1,52,28)"
                            }
                        }
                    },
                    {
                        "name": "\u521a\u521a\u85d5\u7247",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(114,51,73)"
                            }
                        }
                    },
                    {
                        "name": "cl",
                        "value": 4,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(36,11,129)"
                            }
                        }
                    },
                    {
                        "name": "\u504f\u751c",
                        "value": 149,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(97,77,66)"
                            }
                        }
                    },
                    {
                        "name": "\u5c0f\u54f2",
                        "value": 15,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(8,63,159)"
                            }
                        }
                    },
                    {
                        "name": "\u8d2d\u4e70",
                        "value": 6220,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(61,54,92)"
                            }
                        }
                    },
                    {
                        "name": "\u610f\u72b9\u672a\u5c3d",
                        "value": 18,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(48,92,141)"
                            }
                        }
                    },
                    {
                        "name": "\u521a\u521a",
                        "value": 665,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(52,48,132)"
                            }
                        }
                    },
                    {
                        "name": "\u652f\u6301",
                        "value": 239,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(115,61,74)"
                            }
                        }
                    },
                    {
                        "name": "\u7279\u522b\u8fd8\u884c",
                        "value": 22,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(69,7,82)"
                            }
                        }
                    },
                    {
                        "name": "\u6ca1\u5f97\u8bf4",
                        "value": 38,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(70,122,157)"
                            }
                        }
                    },
                    {
                        "name": "\u65b0\u9c9c\u5ea6",
                        "value": 1655,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(136,108,41)"
                            }
                        }
                    },
                    {
                        "name": "\u770b\u7740",
                        "value": 574,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(40,146,34)"
                            }
                        }
                    },
                    {
                        "name": "\u4e8f\u4e86",
                        "value": 17,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(108,91,134)"
                            }
                        }
                    },
                    {
                        "name": "\u54c1\u8d28",
                        "value": 5675,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(111,99,100)"
                            }
                        }
                    },
                    {
                        "name": "\u4f18\u60e0",
                        "value": 1375,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(111,69,87)"
                            }
                        }
                    },
                    {
                        "name": "\u5546\u54c1\u8089\u8d28",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(118,146,125)"
                            }
                        }
                    },
                    {
                        "name": "\u8089\u812f",
                        "value": 26,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(71,109,5)"
                            }
                        }
                    },
                    {
                        "name": "lhm",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(35,11,126)"
                            }
                        }
                    },
                    {
                        "name": "\u4e70\u4e8c\u51cf",
                        "value": 2,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(132,28,99)"
                            }
                        }
                    },
                    {
                        "name": "\u592a\u68d2\u4e86",
                        "value": 234,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(90,1,97)"
                            }
                        }
                    },
                    {
                        "name": "\u8089\u732a",
                        "value": 2,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(134,143,54)"
                            }
                        }
                    },
                    {
                        "name": "\u53e3\u5403",
                        "value": 39,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(11,52,36)"
                            }
                        }
                    },
                    {
                        "name": "\u9aa8\u5934",
                        "value": 59,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(100,114,30)"
                            }
                        }
                    },
                    {
                        "name": "\u5236\u54c1",
                        "value": 11,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(131,48,150)"
                            }
                        }
                    },
                    {
                        "name": "\u597d\u50cf",
                        "value": 183,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(76,9,127)"
                            }
                        }
                    },
                    {
                        "name": "\u7279\u522b\u586b\u5199",
                        "value": 167,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(7,31,26)"
                            }
                        }
                    },
                    {
                        "name": "\u7528\u6237",
                        "value": 23203,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(89,99,114)"
                            }
                        }
                    },
                    {
                        "name": "\u8bc4\u4ef7\u6c34\u5206",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(37,62,85)"
                            }
                        }
                    },
                    {
                        "name": "cx",
                        "value": 2,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(81,156,19)"
                            }
                        }
                    },
                    {
                        "name": "\u65e0\u8fa3",
                        "value": 15,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(3,95,64)"
                            }
                        }
                    },
                    {
                        "name": "\u4e0d\u6b22",
                        "value": 18,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(139,88,140)"
                            }
                        }
                    },
                    {
                        "name": "\u54b8\u5473",
                        "value": 107,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(106,21,0)"
                            }
                        }
                    },
                    {
                        "name": "\u6d53\u70c8",
                        "value": 12,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(8,125,80)"
                            }
                        }
                    },
                    {
                        "name": "\u80c3\u53e3",
                        "value": 162,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(105,47,119)"
                            }
                        }
                    },
                    {
                        "name": "\u771f\u7684\u8fa3\u6761",
                        "value": 3,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(51,12,160)"
                            }
                        }
                    },
                    {
                        "name": "\u5f88\u8fa3",
                        "value": 150,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(2,65,61)"
                            }
                        }
                    },
                    {
                        "name": "\u534a\u76d2",
                        "value": 3,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(44,141,107)"
                            }
                        }
                    },
                    {
                        "name": "\u8fa3\u5ea6",
                        "value": 130,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(61,68,50)"
                            }
                        }
                    },
                    {
                        "name": "\u76f4\u64ad\u95f4",
                        "value": 1758,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(15,141,27)"
                            }
                        }
                    },
                    {
                        "name": "\u54ac\u788e",
                        "value": 4,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(85,80,89)"
                            }
                        }
                    },
                    {
                        "name": "\u7b97\u4e0b\u6765",
                        "value": 38,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(155,117,62)"
                            }
                        }
                    },
                    {
                        "name": "\u5212\u7b97",
                        "value": 3013,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(137,41,34)"
                            }
                        }
                    },
                    {
                        "name": "\u4e00\u5305",
                        "value": 2525,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(32,115,56)"
                            }
                        }
                    },
                    {
                        "name": "\u7a0d\u5fae",
                        "value": 411,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(7,139,133)"
                            }
                        }
                    },
                    {
                        "name": "\u4e0d\u50cf",
                        "value": 182,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(159,86,143)"
                            }
                        }
                    },
                    {
                        "name": "\u6536\u5230",
                        "value": 8813,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(142,34,64)"
                            }
                        }
                    },
                    {
                        "name": "\u4e24\u5929",
                        "value": 434,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(126,126,83)"
                            }
                        }
                    },
                    {
                        "name": "\u63a8\u8350\u5305\u88c5",
                        "value": 38,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(136,108,154)"
                            }
                        }
                    },
                    {
                        "name": "\u5364\u9e21",
                        "value": 6,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(146,28,58)"
                            }
                        }
                    },
                    {
                        "name": "\u8c46\u5e72",
                        "value": 82,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(96,41,9)"
                            }
                        }
                    },
                    {
                        "name": "\u8ffd\u5267",
                        "value": 79,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(33,130,129)"
                            }
                        }
                    },
                    {
                        "name": "\u7efc\u827a",
                        "value": 5,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(45,147,141)"
                            }
                        }
                    },
                    {
                        "name": "\u6c89\u7538\u7538",
                        "value": 31,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(51,132,95)"
                            }
                        }
                    },
                    {
                        "name": "\u4e25\u5bc6",
                        "value": 84,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(9,50,112)"
                            }
                        }
                    },
                    {
                        "name": "\u4e0d\u505c",
                        "value": 37,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(42,147,23)"
                            }
                        }
                    },
                    {
                        "name": "\u72ec\u7acb",
                        "value": 753,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(74,68,113)"
                            }
                        }
                    },
                    {
                        "name": "\u5546\u54c1",
                        "value": 1301,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(132,54,74)"
                            }
                        }
                    },
                    {
                        "name": "\u56de\u6765",
                        "value": 293,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(13,43,30)"
                            }
                        }
                    },
                    {
                        "name": "\u7279\u522b\u5f20\u54f2\u701a",
                        "value": 3,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(59,83,90)"
                            }
                        }
                    },
                    {
                        "name": "\u6d77\u54f2\u6765",
                        "value": 5,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(9,126,157)"
                            }
                        }
                    },
                    {
                        "name": "\u63a8\u8350",
                        "value": 2220,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(3,96,119)"
                            }
                        }
                    },
                    {
                        "name": "\u771f\u7684\u53e3\u5473",
                        "value": 23,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(88,30,111)"
                            }
                        }
                    },
                    {
                        "name": "\u4e03\u516b\u79cd",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(93,8,148)"
                            }
                        }
                    },
                    {
                        "name": "\u4e22\u5c0f\u8d35",
                        "value": 2,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(17,158,20)"
                            }
                        }
                    },
                    {
                        "name": "\u9999\u8fa3",
                        "value": 186,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(89,127,52)"
                            }
                        }
                    },
                    {
                        "name": "\u6709\u7d20",
                        "value": 4,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(36,51,70)"
                            }
                        }
                    },
                    {
                        "name": "\u633a\u4e0d\u9519",
                        "value": 793,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(65,73,93)"
                            }
                        }
                    },
                    {
                        "name": "\u9ebb\u8fa3",
                        "value": 258,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(54,74,61)"
                            }
                        }
                    },
                    {
                        "name": "\u5927\u724c",
                        "value": 45,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(104,3,21)"
                            }
                        }
                    },
                    {
                        "name": "\u5355\u4ece",
                        "value": 2,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(71,157,116)"
                            }
                        }
                    },
                    {
                        "name": "\u4e8c\u5341",
                        "value": 31,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(141,76,100)"
                            }
                        }
                    },
                    {
                        "name": "\u89d2\u5ea6",
                        "value": 12,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(136,151,2)"
                            }
                        }
                    },
                    {
                        "name": "\u6253\u5f00",
                        "value": 1858,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(22,68,97)"
                            }
                        }
                    },
                    {
                        "name": "\u98df\u54c1",
                        "value": 351,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(114,93,143)"
                            }
                        }
                    },
                    {
                        "name": "\u6837\u5b50",
                        "value": 230,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(9,71,27)"
                            }
                        }
                    },
                    {
                        "name": "\u786e\u5b9e",
                        "value": 892,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(138,45,0)"
                            }
                        }
                    },
                    {
                        "name": "\u6570\u91cf",
                        "value": 73,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(15,87,83)"
                            }
                        }
                    },
                    {
                        "name": "\u4ef7\u683c\u5305\u88c5",
                        "value": 86,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(124,5,160)"
                            }
                        }
                    },
                    {
                        "name": "\u6bdb\u809a",
                        "value": 20,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(16,12,58)"
                            }
                        }
                    },
                    {
                        "name": "\u6492\u6f0f",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(144,46,153)"
                            }
                        }
                    },
                    {
                        "name": "\u536b\u9f99",
                        "value": 93,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(116,7,13)"
                            }
                        }
                    },
                    {
                        "name": "\u4e09\u5305",
                        "value": 130,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(36,103,135)"
                            }
                        }
                    },
                    {
                        "name": "\u9b54\u828b",
                        "value": 262,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(8,147,67)"
                            }
                        }
                    },
                    {
                        "name": "\u4e24\u5927",
                        "value": 6,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(111,91,39)"
                            }
                        }
                    },
                    {
                        "name": "\u6708\u4efd",
                        "value": 56,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(35,43,30)"
                            }
                        }
                    },
                    {
                        "name": "\u751f\u4ea7\u5927\u5305",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(19,155,154)"
                            }
                        }
                    },
                    {
                        "name": "\u6ca1\u591a\u5927",
                        "value": 3,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(126,56,94)"
                            }
                        }
                    },
                    {
                        "name": "\u5c0f\u5305",
                        "value": 397,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(56,42,70)"
                            }
                        }
                    },
                    {
                        "name": "\u8c08\u4e0d\u4e0a",
                        "value": 11,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(102,24,90)"
                            }
                        }
                    },
                    {
                        "name": "\u771f\u5fc3",
                        "value": 750,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(132,35,98)"
                            }
                        }
                    },
                    {
                        "name": "\u4e00\u4f1a\u513f",
                        "value": 67,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(129,146,10)"
                            }
                        }
                    },
                    {
                        "name": "\u4e00\u4e2a",
                        "value": 323,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(36,138,160)"
                            }
                        }
                    },
                    {
                        "name": "\u6574\u4f53",
                        "value": 604,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(12,3,56)"
                            }
                        }
                    },
                    {
                        "name": "\u5546\u54c1\u5408\u53e3\u5473",
                        "value": 2,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(13,11,88)"
                            }
                        }
                    },
                    {
                        "name": "\u8116\u592a\u5bb9",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(16,160,91)"
                            }
                        }
                    },
                    {
                        "name": "\u96be\u5403",
                        "value": 810,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(75,140,27)"
                            }
                        }
                    },
                    {
                        "name": "\u751c\u5473\u5206\u91cf",
                        "value": 2,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(122,87,124)"
                            }
                        }
                    },
                    {
                        "name": "\u4e24\u5305",
                        "value": 434,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(140,143,72)"
                            }
                        }
                    },
                    {
                        "name": "\u5f88\u7d27",
                        "value": 14,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(49,109,133)"
                            }
                        }
                    },
                    {
                        "name": "\u4e2d\u5ea6",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(36,74,134)"
                            }
                        }
                    },
                    {
                        "name": "\u51fa\u5382",
                        "value": 17,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(149,19,56)"
                            }
                        }
                    },
                    {
                        "name": "\u5b8c\u597d",
                        "value": 1103,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(72,51,4)"
                            }
                        }
                    },
                    {
                        "name": "\u4e24\u4e2a\u5305\u88c5",
                        "value": 18,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(132,145,45)"
                            }
                        }
                    },
                    {
                        "name": "\u516d\u888b",
                        "value": 7,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(93,80,58)"
                            }
                        }
                    },
                    {
                        "name": "\u9f20\u6807\u57ab",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(158,151,75)"
                            }
                        }
                    },
                    {
                        "name": "\u79ef\u5206\u6362",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(86,143,26)"
                            }
                        }
                    },
                    {
                        "name": "\u4e94\u9999",
                        "value": 77,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(91,101,116)"
                            }
                        }
                    },
                    {
                        "name": "\u7f8e\u4e2d\u4e0d\u8db3",
                        "value": 32,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(65,87,30)"
                            }
                        }
                    },
                    {
                        "name": "\u4e00\u5982\u65e2\u5f80",
                        "value": 1058,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(54,62,63)"
                            }
                        }
                    },
                    {
                        "name": "\u8fd8\u7528",
                        "value": 41,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(153,39,83)"
                            }
                        }
                    },
                    {
                        "name": "\u7bb1\u5b50",
                        "value": 694,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(149,56,153)"
                            }
                        }
                    },
                    {
                        "name": "\u4e00\u5171",
                        "value": 296,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(142,39,41)"
                            }
                        }
                    },
                    {
                        "name": "\u53ef\u7231",
                        "value": 396,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(53,90,152)"
                            }
                        }
                    },
                    {
                        "name": "\u552f\u4e00",
                        "value": 133,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(144,154,78)"
                            }
                        }
                    },
                    {
                        "name": "\u60f3\u5230",
                        "value": 64,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(158,6,48)"
                            }
                        }
                    },
                    {
                        "name": "\u7279\u522b\u53e3\u611f",
                        "value": 117,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(121,50,21)"
                            }
                        }
                    },
                    {
                        "name": "\u5546\u54c1\u6bdb\u809a",
                        "value": 4,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(91,104,154)"
                            }
                        }
                    },
                    {
                        "name": "\u5b89\u5229",
                        "value": 83,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(128,83,0)"
                            }
                        }
                    },
                    {
                        "name": "\u9e21\u80f8\u8089",
                        "value": 116,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(17,142,115)"
                            }
                        }
                    },
                    {
                        "name": "\u8fa3\u6761",
                        "value": 219,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(69,110,11)"
                            }
                        }
                    },
                    {
                        "name": "\u6d77\u54f2",
                        "value": 34,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(3,132,39)"
                            }
                        }
                    },
                    {
                        "name": "\u8fc7\u763e",
                        "value": 188,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(68,77,51)"
                            }
                        }
                    },
                    {
                        "name": "\u4ee3\u8a00",
                        "value": 241,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(3,135,72)"
                            }
                        }
                    },
                    {
                        "name": "\u8c03\u5473",
                        "value": 58,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(98,107,103)"
                            }
                        }
                    },
                    {
                        "name": "\u4f53\u9a8c",
                        "value": 509,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(77,141,133)"
                            }
                        }
                    },
                    {
                        "name": "\u59d0\u59d0",
                        "value": 69,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(90,153,127)"
                            }
                        }
                    },
                    {
                        "name": "\u7ec4\u5408",
                        "value": 104,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(110,120,40)"
                            }
                        }
                    },
                    {
                        "name": "\u5305\u62ec\u53e3\u5473",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(121,41,115)"
                            }
                        }
                    },
                    {
                        "name": "\u7fc5\u6839",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(29,128,87)"
                            }
                        }
                    },
                    {
                        "name": "\u4e01\u8106",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(86,20,150)"
                            }
                        }
                    },
                    {
                        "name": "\u8fa3\u8fa3\u7684",
                        "value": 91,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(68,87,15)"
                            }
                        }
                    },
                    {
                        "name": "\u6ce1\u6912",
                        "value": 31,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(112,103,54)"
                            }
                        }
                    },
                    {
                        "name": "\u8fa3\u725b\u8089",
                        "value": 15,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(13,65,92)"
                            }
                        }
                    },
                    {
                        "name": "\u4e0d\u592a\u8fa3",
                        "value": 12,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(118,79,157)"
                            }
                        }
                    },
                    {
                        "name": "\u5c0f\u888b",
                        "value": 260,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(66,21,61)"
                            }
                        }
                    },
                    {
                        "name": "\u5965\u5c14\u826f",
                        "value": 43,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(15,68,97)"
                            }
                        }
                    },
                    {
                        "name": "\u829d\u9ebb",
                        "value": 1296,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(118,39,131)"
                            }
                        }
                    },
                    {
                        "name": "\u770b\u7740\u5212\u7b97",
                        "value": 6,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(94,148,145)"
                            }
                        }
                    },
                    {
                        "name": "\u4e0d\u9519\u5206\u91cf",
                        "value": 26,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(124,110,79)"
                            }
                        }
                    },
                    {
                        "name": "\u7092\u9e21",
                        "value": 54,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(19,46,93)"
                            }
                        }
                    },
                    {
                        "name": "\u5b8c\u597d\u65e0\u635f",
                        "value": 372,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(101,54,45)"
                            }
                        }
                    },
                    {
                        "name": "\u597d\u770b",
                        "value": 1170,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(42,86,79)"
                            }
                        }
                    },
                    {
                        "name": "\u5546\u54c1\u5305\u88c5",
                        "value": 55,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(131,69,20)"
                            }
                        }
                    },
                    {
                        "name": "\u5356\u5bb6",
                        "value": 1730,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(58,74,138)"
                            }
                        }
                    },
                    {
                        "name": "\u671f\u671b\u503c",
                        "value": 217,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(45,98,18)"
                            }
                        }
                    },
                    {
                        "name": "\u5ba2\u670d",
                        "value": 2887,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(137,90,58)"
                            }
                        }
                    },
                    {
                        "name": "\u8d2d\u7269",
                        "value": 1790,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(157,15,30)"
                            }
                        }
                    },
                    {
                        "name": "\u7269\u6d41",
                        "value": 5349,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(17,23,39)"
                            }
                        }
                    },
                    {
                        "name": "\u8d85\u51fa",
                        "value": 309,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(118,65,108)"
                            }
                        }
                    },
                    {
                        "name": "\u6ee1\u610f",
                        "value": 5127,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(151,19,3)"
                            }
                        }
                    },
                    {
                        "name": "\u63cf\u8ff0",
                        "value": 956,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(120,124,112)"
                            }
                        }
                    },
                    {
                        "name": "\u4ed4\u7ec6",
                        "value": 450,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(75,3,51)"
                            }
                        }
                    },
                    {
                        "name": "\u5c71\u9ad8\u6c34\u8fdc",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(57,116,35)"
                            }
                        }
                    },
                    {
                        "name": "\u5439\u6ee1",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(150,48,90)"
                            }
                        }
                    },
                    {
                        "name": "\u6027\u6bd4",
                        "value": 10,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(24,78,63)"
                            }
                        }
                    },
                    {
                        "name": "\u7279\u597d",
                        "value": 54,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(93,73,0)"
                            }
                        }
                    },
                    {
                        "name": "\u6b63\u54c1",
                        "value": 442,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(158,35,108)"
                            }
                        }
                    },
                    {
                        "name": "\u7269\u6709\u6240\u503c",
                        "value": 214,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(55,82,121)"
                            }
                        }
                    },
                    {
                        "name": "\u4ef7\u9ad8",
                        "value": 15,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(134,140,135)"
                            }
                        }
                    },
                    {
                        "name": "\u4ef7\u683c\u4f4e",
                        "value": 23,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(87,34,6)"
                            }
                        }
                    },
                    {
                        "name": "\u7269\u7f8e\u4ef7\u5ec9",
                        "value": 835,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(16,34,36)"
                            }
                        }
                    },
                    {
                        "name": "\u4e25\u5b9e",
                        "value": 923,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(35,121,64)"
                            }
                        }
                    },
                    {
                        "name": "\u613f\u4e3a",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(51,128,26)"
                            }
                        }
                    },
                    {
                        "name": "\u82b1\u9999",
                        "value": 17,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(9,60,17)"
                            }
                        }
                    },
                    {
                        "name": "\u5c0f\u5df7",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(147,106,121)"
                            }
                        }
                    },
                    {
                        "name": "\u5b8c\u5168\u4e00\u81f4",
                        "value": 170,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(39,92,27)"
                            }
                        }
                    },
                    {
                        "name": "\u5149\u987e",
                        "value": 678,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(109,23,96)"
                            }
                        }
                    },
                    {
                        "name": "\u8bf4\u597d",
                        "value": 141,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(136,151,90)"
                            }
                        }
                    },
                    {
                        "name": "\u800c\u6765",
                        "value": 16,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(118,54,3)"
                            }
                        }
                    },
                    {
                        "name": "\u70ed\u60c5",
                        "value": 417,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(86,14,138)"
                            }
                        }
                    },
                    {
                        "name": "\u79d8\u5bc6",
                        "value": 8,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(134,135,33)"
                            }
                        }
                    },
                    {
                        "name": "\u6001\u5ea6",
                        "value": 1146,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(41,15,93)"
                            }
                        }
                    },
                    {
                        "name": "\u670b\u53cb",
                        "value": 1995,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(106,136,22)"
                            }
                        }
                    },
                    {
                        "name": "\u670d\u52a1",
                        "value": 624,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(127,133,138)"
                            }
                        }
                    },
                    {
                        "name": "\u7b2c\u4e00",
                        "value": 224,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(128,129,106)"
                            }
                        }
                    },
                    {
                        "name": "\u544a\u8bc9",
                        "value": 52,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(46,59,84)"
                            }
                        }
                    },
                    {
                        "name": "\u65f6\u95f4\u65b0\u9c9c\u5ea6",
                        "value": 8,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(67,89,138)"
                            }
                        }
                    },
                    {
                        "name": "\u8fd8\u884c",
                        "value": 1537,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(124,35,103)"
                            }
                        }
                    },
                    {
                        "name": "\u66f4\u4f1a",
                        "value": 3,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(17,31,91)"
                            }
                        }
                    },
                    {
                        "name": "\u4e5d\u4e2a",
                        "value": 34,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(133,61,29)"
                            }
                        }
                    },
                    {
                        "name": "\u4e09\u6708",
                        "value": 6,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(13,155,139)"
                            }
                        }
                    },
                    {
                        "name": "\u8001\u5a46",
                        "value": 124,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(2,106,139)"
                            }
                        }
                    },
                    {
                        "name": "\u5b8c\u6574",
                        "value": 706,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(103,105,89)"
                            }
                        }
                    },
                    {
                        "name": "\u652f\u6301\u4e32\u5473",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(112,18,108)"
                            }
                        }
                    },
                    {
                        "name": "\u9178\u9178\u751c\u751c",
                        "value": 437,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(89,73,58)"
                            }
                        }
                    },
                    {
                        "name": "\u8349\u5473",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(112,151,72)"
                            }
                        }
                    },
                    {
                        "name": "\u9501\u9c9c",
                        "value": 10,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(16,28,46)"
                            }
                        }
                    },
                    {
                        "name": "\u84dd\u8393",
                        "value": 34,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(64,39,97)"
                            }
                        }
                    },
                    {
                        "name": "\u4e8c\u5305",
                        "value": 8,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(97,74,92)"
                            }
                        }
                    },
                    {
                        "name": "\u8d27\u771f\u4ef7\u5b9e",
                        "value": 126,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(0,48,54)"
                            }
                        }
                    },
                    {
                        "name": "\u5206\u533a",
                        "value": 12,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(65,22,133)"
                            }
                        }
                    },
                    {
                        "name": "\u9971\u6ee1",
                        "value": 780,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(5,101,62)"
                            }
                        }
                    },
                    {
                        "name": "\u7cbe\u7f8e",
                        "value": 500,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(157,86,18)"
                            }
                        }
                    },
                    {
                        "name": "\u6bcf\u6b21",
                        "value": 879,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(104,68,3)"
                            }
                        }
                    },
                    {
                        "name": "\u4eba\u7fa4",
                        "value": 106,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(127,124,146)"
                            }
                        }
                    },
                    {
                        "name": "\u5f88\u5feb\u571f\u8c46\u7247",
                        "value": 2,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(117,18,63)"
                            }
                        }
                    },
                    {
                        "name": "\u5fae\u8fa3",
                        "value": 58,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(24,85,149)"
                            }
                        }
                    },
                    {
                        "name": "\u5ddd\u9999",
                        "value": 7,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(55,89,52)"
                            }
                        }
                    },
                    {
                        "name": "\u72fc\u7259",
                        "value": 9,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(133,99,149)"
                            }
                        }
                    },
                    {
                        "name": "\u5f88\u8db3",
                        "value": 720,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(26,61,148)"
                            }
                        }
                    },
                    {
                        "name": "\u6912\u9ebb",
                        "value": 37,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(118,69,132)"
                            }
                        }
                    },
                    {
                        "name": "\u85e4\u6912",
                        "value": 67,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(76,6,141)"
                            }
                        }
                    },
                    {
                        "name": "\u5438\u51fa",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(18,93,0)"
                            }
                        }
                    },
                    {
                        "name": "\u70e7\u70e4",
                        "value": 50,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(70,95,15)"
                            }
                        }
                    },
                    {
                        "name": "\u97e7\u6027",
                        "value": 22,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(120,33,9)"
                            }
                        }
                    },
                    {
                        "name": "\u90a3\u79cd",
                        "value": 980,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(79,98,41)"
                            }
                        }
                    },
                    {
                        "name": "\u65b0\u7c89",
                        "value": 2,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(1,88,103)"
                            }
                        }
                    },
                    {
                        "name": "\u5c0f\u8001\u5934",
                        "value": 2,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(152,147,13)"
                            }
                        }
                    },
                    {
                        "name": "\u767d\u53d1\u82cd\u82cd",
                        "value": 2,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(145,55,105)"
                            }
                        }
                    },
                    {
                        "name": "\u597d\u4e45\u597d\u4e45",
                        "value": 9,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(148,35,73)"
                            }
                        }
                    },
                    {
                        "name": "\u4ee5\u5f85",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(53,96,77)"
                            }
                        }
                    },
                    {
                        "name": "\u966a\u4f34",
                        "value": 6,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(47,81,77)"
                            }
                        }
                    },
                    {
                        "name": "\u6e29\u67d4",
                        "value": 18,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(142,6,111)"
                            }
                        }
                    },
                    {
                        "name": "\u597d\u591a",
                        "value": 1098,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(82,16,44)"
                            }
                        }
                    },
                    {
                        "name": "\u5feb\u4e50",
                        "value": 116,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(40,88,31)"
                            }
                        }
                    },
                    {
                        "name": "\u770b\u8fc7",
                        "value": 20,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(37,15,126)"
                            }
                        }
                    },
                    {
                        "name": "\u6a21\u6837",
                        "value": 8,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(92,59,90)"
                            }
                        }
                    },
                    {
                        "name": "\u8d1f\u62c5",
                        "value": 92,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(124,135,114)"
                            }
                        }
                    },
                    {
                        "name": "\u671f\u5f85",
                        "value": 892,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(40,133,69)"
                            }
                        }
                    },
                    {
                        "name": "\u4e00\u8def",
                        "value": 7,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(6,114,16)"
                            }
                        }
                    },
                    {
                        "name": "\u5065\u5eb7",
                        "value": 1273,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(26,77,5)"
                            }
                        }
                    },
                    {
                        "name": "\u4e16\u754c\u5305\u771f",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(141,125,145)"
                            }
                        }
                    },
                    {
                        "name": "\u5f88\u503c",
                        "value": 49,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(64,91,149)"
                            }
                        }
                    },
                    {
                        "name": "618",
                        "value": 434,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(56,97,93)"
                            }
                        }
                    },
                    {
                        "name": "\u5f00\u5f00\u5fc3\u5fc3",
                        "value": 49,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(19,62,107)"
                            }
                        }
                    },
                    {
                        "name": "\u6d6a\u6d6a",
                        "value": 65,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(155,106,96)"
                            }
                        }
                    },
                    {
                        "name": "\u771f\u7f8e",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(111,13,15)"
                            }
                        }
                    },
                    {
                        "name": "\u4e00\u5927\u8106\u7b0b",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(153,103,54)"
                            }
                        }
                    },
                    {
                        "name": "\u5bf9\u5c0f\u76c6\u53cb",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(113,37,113)"
                            }
                        }
                    },
                    {
                        "name": "\u592a\u8fa3",
                        "value": 91,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(56,147,49)"
                            }
                        }
                    },
                    {
                        "name": "\u5165\u5473",
                        "value": 134,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(128,25,82)"
                            }
                        }
                    },
                    {
                        "name": "\u5b9e\u5728",
                        "value": 531,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(17,6,124)"
                            }
                        }
                    },
                    {
                        "name": "\u54c1\u79cd\u8fa3\u6761",
                        "value": 2,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(51,160,44)"
                            }
                        }
                    },
                    {
                        "name": "\u9762\u7b4b",
                        "value": 124,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(80,84,89)"
                            }
                        }
                    },
                    {
                        "name": "\u4e70\u8fc7",
                        "value": 1144,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(142,65,77)"
                            }
                        }
                    },
                    {
                        "name": "\u652f\u6301\u5f20\u54f2\u701a",
                        "value": 4,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(40,11,16)"
                            }
                        }
                    },
                    {
                        "name": "\u60f3\u8981",
                        "value": 344,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(146,104,89)"
                            }
                        }
                    },
                    {
                        "name": "\u770b\u5f20",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(6,160,56)"
                            }
                        }
                    },
                    {
                        "name": "\u75af\u5b50",
                        "value": 2,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(38,150,156)"
                            }
                        }
                    },
                    {
                        "name": "\u7f8e\u5999",
                        "value": 7,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(62,154,23)"
                            }
                        }
                    },
                    {
                        "name": "\u5927\u4f7f",
                        "value": 4,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(6,81,125)"
                            }
                        }
                    },
                    {
                        "name": "\u6ecb\u5473",
                        "value": 34,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(73,155,108)"
                            }
                        }
                    },
                    {
                        "name": "\u5e26\u6765\u597d\u5403",
                        "value": 2,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(159,89,110)"
                            }
                        }
                    },
                    {
                        "name": "\u771f\u6750\u5b9e\u6599",
                        "value": 56,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(99,116,147)"
                            }
                        }
                    },
                    {
                        "name": "AF",
                        "value": 5,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(155,37,126)"
                            }
                        }
                    },
                    {
                        "name": "\u7269\u76d2",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(139,49,34)"
                            }
                        }
                    },
                    {
                        "name": "\u6700\u68d2",
                        "value": 31,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(30,41,137)"
                            }
                        }
                    },
                    {
                        "name": "\u4e00\u5c0f\u5305",
                        "value": 134,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(107,75,102)"
                            }
                        }
                    },
                    {
                        "name": "\u6709\u793c",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(36,30,111)"
                            }
                        }
                    },
                    {
                        "name": "\u4e0d\u8d35",
                        "value": 606,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(52,109,72)"
                            }
                        }
                    },
                    {
                        "name": "\u591a\u4e00\u4e9b",
                        "value": 35,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(96,71,112)"
                            }
                        }
                    },
                    {
                        "name": "\u98ce\u5473",
                        "value": 50,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(113,84,42)"
                            }
                        }
                    },
                    {
                        "name": "\u732a\u8089",
                        "value": 222,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(48,25,132)"
                            }
                        }
                    },
                    {
                        "name": "\u4e0d\u53ca",
                        "value": 10,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(3,81,135)"
                            }
                        }
                    },
                    {
                        "name": "\u6700\u65b0",
                        "value": 123,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(118,83,146)"
                            }
                        }
                    },
                    {
                        "name": "\u771f\u7684\u5305\u88c5",
                        "value": 41,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(66,100,149)"
                            }
                        }
                    },
                    {
                        "name": "\u9762\u6709",
                        "value": 11,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(106,96,54)"
                            }
                        }
                    },
                    {
                        "name": "\u54c8\u54c8\u54c8",
                        "value": 751,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(0,66,128)"
                            }
                        }
                    },
                    {
                        "name": "\u670d\u52a1\u5473\u9053",
                        "value": 17,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(27,88,70)"
                            }
                        }
                    },
                    {
                        "name": "\u98ce\u91cf",
                        "value": 3,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(127,141,117)"
                            }
                        }
                    },
                    {
                        "name": "\u54c1\u8d28\u671f\u5f85\u503c",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(158,50,47)"
                            }
                        }
                    },
                    {
                        "name": "wh",
                        "value": 2,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(60,102,7)"
                            }
                        }
                    },
                    {
                        "name": "\u4e70\u8d77",
                        "value": 4,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(57,89,17)"
                            }
                        }
                    },
                    {
                        "name": "\u73a9\u610f",
                        "value": 67,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(142,117,95)"
                            }
                        }
                    },
                    {
                        "name": "\u4e2d\u7b49",
                        "value": 28,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(60,78,37)"
                            }
                        }
                    },
                    {
                        "name": "\u6653\u5f97",
                        "value": 29,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(97,66,0)"
                            }
                        }
                    },
                    {
                        "name": "\u597d\u50cf\u54c8\u54c8\u54c8",
                        "value": 4,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(12,98,107)"
                            }
                        }
                    },
                    {
                        "name": "\u8d8a\u8fa3\u8d8a",
                        "value": 3,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(110,121,141)"
                            }
                        }
                    },
                    {
                        "name": "hiahiahia",
                        "value": 16,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(77,142,62)"
                            }
                        }
                    },
                    {
                        "name": "\u539f\u5473",
                        "value": 905,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(93,159,4)"
                            }
                        }
                    },
                    {
                        "name": "\u4e0a\u763e",
                        "value": 125,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(106,115,21)"
                            }
                        }
                    },
                    {
                        "name": "\u65e0\u5473",
                        "value": 44,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(41,12,70)"
                            }
                        }
                    },
                    {
                        "name": "\u864e\u76ae",
                        "value": 63,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(112,63,122)"
                            }
                        }
                    },
                    {
                        "name": "\u539f\u56e0\u820d\u53cb",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(83,75,39)"
                            }
                        }
                    },
                    {
                        "name": "\u5165\u624b",
                        "value": 679,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(126,77,130)"
                            }
                        }
                    },
                    {
                        "name": "\u4e0d\u592a\u80fd",
                        "value": 27,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(74,5,92)"
                            }
                        }
                    },
                    {
                        "name": "\u504f\u5fae",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(41,122,151)"
                            }
                        }
                    },
                    {
                        "name": "nice",
                        "value": 203,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(36,114,98)"
                            }
                        }
                    },
                    {
                        "name": "\u4e0d\u592a\u7231",
                        "value": 19,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(142,95,80)"
                            }
                        }
                    },
                    {
                        "name": "\u6ee4\u955c",
                        "value": 6,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(136,106,141)"
                            }
                        }
                    },
                    {
                        "name": "\u723d\u8106",
                        "value": 16,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(84,155,121)"
                            }
                        }
                    },
                    {
                        "name": "\u9e21\u817f",
                        "value": 25,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(110,127,49)"
                            }
                        }
                    },
                    {
                        "name": "\u5feb\u9012",
                        "value": 3164,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(157,79,100)"
                            }
                        }
                    },
                    {
                        "name": "\u6ca1\u5e26",
                        "value": 6,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(153,68,51)"
                            }
                        }
                    },
                    {
                        "name": "\u6027\u4ef7\u6bd4",
                        "value": 1639,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(131,135,82)"
                            }
                        }
                    },
                    {
                        "name": "\u5c0f\u817f",
                        "value": 2,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(117,82,17)"
                            }
                        }
                    },
                    {
                        "name": "\u603b\u4f53\u800c\u8a00",
                        "value": 7,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(3,102,83)"
                            }
                        }
                    },
                    {
                        "name": "\u6700\u7231",
                        "value": 538,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(83,152,48)"
                            }
                        }
                    },
                    {
                        "name": "\u53cd\u9988",
                        "value": 97,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(51,9,132)"
                            }
                        }
                    },
                    {
                        "name": "\u826f\u5fc3",
                        "value": 302,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(125,34,111)"
                            }
                        }
                    },
                    {
                        "name": "\u59d0\u59b9",
                        "value": 277,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(64,101,117)"
                            }
                        }
                    },
                    {
                        "name": "\u8d77\u7801",
                        "value": 33,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(86,158,108)"
                            }
                        }
                    },
                    {
                        "name": "\u5206\u4eab",
                        "value": 230,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(70,145,114)"
                            }
                        }
                    },
                    {
                        "name": "\u5c1d\u8bd5",
                        "value": 594,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(104,80,29)"
                            }
                        }
                    },
                    {
                        "name": "\u5546\u52a1",
                        "value": 11,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(44,11,56)"
                            }
                        }
                    },
                    {
                        "name": "\u5ba2\u89c2",
                        "value": 30,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(145,32,150)"
                            }
                        }
                    },
                    {
                        "name": "\u611f\u53d7",
                        "value": 78,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(87,133,101)"
                            }
                        }
                    },
                    {
                        "name": "\u4e00\u6bb5\u65f6\u95f4",
                        "value": 368,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(20,87,106)"
                            }
                        }
                    },
                    {
                        "name": "\u5e7f\u4e1c",
                        "value": 42,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(37,139,68)"
                            }
                        }
                    },
                    {
                        "name": "\u672c\u6765",
                        "value": 437,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(146,94,77)"
                            }
                        }
                    },
                    {
                        "name": "\u7b2c\u4e00\u6b21",
                        "value": 1804,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(83,87,50)"
                            }
                        }
                    },
                    {
                        "name": "\u63a5\u53d7",
                        "value": 257,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(2,110,45)"
                            }
                        }
                    },
                    {
                        "name": "\u5e0c\u671b",
                        "value": 1101,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(115,134,132)"
                            }
                        }
                    },
                    {
                        "name": "\u4ef7\u683c\u5c0f\u5b69",
                        "value": 5,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(57,30,93)"
                            }
                        }
                    },
                    {
                        "name": "\u4e32\u5473",
                        "value": 43,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(98,44,14)"
                            }
                        }
                    },
                    {
                        "name": "\u78a7\u6839",
                        "value": 8,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(11,76,124)"
                            }
                        }
                    },
                    {
                        "name": "\u5403\u5149",
                        "value": 65,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(19,148,141)"
                            }
                        }
                    },
                    {
                        "name": "\u677e\u9f20",
                        "value": 175,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(33,103,7)"
                            }
                        }
                    },
                    {
                        "name": "\u4e09\u53ea",
                        "value": 184,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(45,52,41)"
                            }
                        }
                    },
                    {
                        "name": "\u5f88\u5feb",
                        "value": 3186,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(127,128,109)"
                            }
                        }
                    },
                    {
                        "name": "\u4ef7\u683c\u8fa3\u6761",
                        "value": 7,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(156,64,23)"
                            }
                        }
                    },
                    {
                        "name": "\u62c9\u809a\u5b50",
                        "value": 151,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(63,142,56)"
                            }
                        }
                    },
                    {
                        "name": "\u5973\u670b\u53cb",
                        "value": 82,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(160,116,67)"
                            }
                        }
                    },
                    {
                        "name": "\u4e70\u6765",
                        "value": 1339,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(97,43,67)"
                            }
                        }
                    },
                    {
                        "name": "\u4fbf\u79d8",
                        "value": 192,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(28,145,118)"
                            }
                        }
                    },
                    {
                        "name": "\u8bd5\u8bd5",
                        "value": 921,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(15,49,157)"
                            }
                        }
                    },
                    {
                        "name": "\u592a\u5927",
                        "value": 188,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(2,157,36)"
                            }
                        }
                    },
                    {
                        "name": "\u8d76\u7d27",
                        "value": 436,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(90,122,42)"
                            }
                        }
                    },
                    {
                        "name": "\u6cbb\u7597",
                        "value": 12,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(84,134,107)"
                            }
                        }
                    },
                    {
                        "name": "\u8d28\u91cf\u5f20\u54f2\u701a",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(19,22,98)"
                            }
                        }
                    },
                    {
                        "name": "\u795d\u4f60\u4eec",
                        "value": 3,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(110,97,111)"
                            }
                        }
                    },
                    {
                        "name": "\u548c\u4e50",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(111,34,145)"
                            }
                        }
                    },
                    {
                        "name": "\u8bcd\u7a77",
                        "value": 2,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(150,160,140)"
                            }
                        }
                    },
                    {
                        "name": "\u4ed6\u5267",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(48,97,147)"
                            }
                        }
                    },
                    {
                        "name": "\u82cf\u82cf",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(33,10,69)"
                            }
                        }
                    },
                    {
                        "name": "\u8001\u7c89",
                        "value": 16,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(57,19,22)"
                            }
                        }
                    },
                    {
                        "name": "\u5929\u80fd",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(88,23,100)"
                            }
                        }
                    },
                    {
                        "name": "\u957f\u5b58",
                        "value": 2,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(147,56,35)"
                            }
                        }
                    },
                    {
                        "name": "\u7f8e\u6ee1",
                        "value": 2,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(32,83,64)"
                            }
                        }
                    },
                    {
                        "name": "\u6267\u7740",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(128,128,11)"
                            }
                        }
                    },
                    {
                        "name": "\u5c0f\u96e8",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(98,92,8)"
                            }
                        }
                    },
                    {
                        "name": "\u53ef\u671f",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(47,117,98)"
                            }
                        }
                    },
                    {
                        "name": "\u70ed\u7231",
                        "value": 12,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(107,96,62)"
                            }
                        }
                    },
                    {
                        "name": "\u53cb\u8c0a",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(43,23,74)"
                            }
                        }
                    },
                    {
                        "name": "\u68a6\u60f3",
                        "value": 8,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(19,144,104)"
                            }
                        }
                    },
                    {
                        "name": "\u8868\u8fbe",
                        "value": 16,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(23,25,17)"
                            }
                        }
                    },
                    {
                        "name": "\u5408\u9002",
                        "value": 1168,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(42,30,56)"
                            }
                        }
                    },
                    {
                        "name": "\u8fdc\u8fdc",
                        "value": 4,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(90,40,80)"
                            }
                        }
                    },
                    {
                        "name": "\u4e00\u773c",
                        "value": 22,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(151,9,117)"
                            }
                        }
                    },
                    {
                        "name": "\u4e8b\u60c5",
                        "value": 39,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(74,70,39)"
                            }
                        }
                    },
                    {
                        "name": "\u672a\u6765",
                        "value": 8,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(82,88,118)"
                            }
                        }
                    },
                    {
                        "name": "\u751f\u6d3b",
                        "value": 32,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(73,108,111)"
                            }
                        }
                    },
                    {
                        "name": "\u4ef7\u683c\u5473\u9053",
                        "value": 137,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(109,160,72)"
                            }
                        }
                    },
                    {
                        "name": "\u671f\u5f85\u503c",
                        "value": 4,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(85,146,72)"
                            }
                        }
                    },
                    {
                        "name": "CA",
                        "value": 8,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(76,138,101)"
                            }
                        }
                    },
                    {
                        "name": "\u5929\u54e5",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(42,55,136)"
                            }
                        }
                    },
                    {
                        "name": "\u505c\u4e0d\u4e0b\u6765",
                        "value": 434,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(156,110,155)"
                            }
                        }
                    },
                    {
                        "name": "\u7c89\u4e1d",
                        "value": 388,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(11,91,55)"
                            }
                        }
                    },
                    {
                        "name": "\u4eba\u6c14",
                        "value": 4,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(22,21,89)"
                            }
                        }
                    },
                    {
                        "name": "\u5f88\u5feb\u586b\u5199",
                        "value": 65,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(89,68,107)"
                            }
                        }
                    },
                    {
                        "name": "\u8bc4\u4ef7\u65b0\u9c9c\u5ea6",
                        "value": 34,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(99,39,8)"
                            }
                        }
                    },
                    {
                        "name": "\u8d85\u591a",
                        "value": 57,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(119,27,134)"
                            }
                        }
                    },
                    {
                        "name": "\u6709\u8089",
                        "value": 9,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(116,67,44)"
                            }
                        }
                    },
                    {
                        "name": "\u4e00\u4e2a\u5b9e\u60e0",
                        "value": 29,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(37,10,10)"
                            }
                        }
                    },
                    {
                        "name": "\u65e5\u671f\u54c8\u54c8\u54c8",
                        "value": 2,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(137,109,107)"
                            }
                        }
                    },
                    {
                        "name": "\u4fbf\u5b9c",
                        "value": 3354,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(58,129,100)"
                            }
                        }
                    },
                    {
                        "name": "\u611f\u89c9\u85d5\u7247",
                        "value": 2,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(12,17,6)"
                            }
                        }
                    },
                    {
                        "name": "\u6d77\u5e26",
                        "value": 284,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(76,120,117)"
                            }
                        }
                    },
                    {
                        "name": "\u5473\u5bb6",
                        "value": 4,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(68,150,39)"
                            }
                        }
                    },
                    {
                        "name": "\u7b0b\u5b50",
                        "value": 2,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(53,42,91)"
                            }
                        }
                    },
                    {
                        "name": "\u4e00\u4e70",
                        "value": 20,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(128,0,86)"
                            }
                        }
                    },
                    {
                        "name": "\u4e00\u5927\u5806",
                        "value": 57,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(68,7,89)"
                            }
                        }
                    },
                    {
                        "name": "\u4e8c\u6b21",
                        "value": 301,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(49,72,8)"
                            }
                        }
                    },
                    {
                        "name": "\u79cd\u7c7b",
                        "value": 97,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(85,48,66)"
                            }
                        }
                    },
                    {
                        "name": "\u7279\u522b\u6536\u5230",
                        "value": 9,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(152,6,59)"
                            }
                        }
                    },
                    {
                        "name": "\u8c46\u8150\u5e72",
                        "value": 14,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(75,21,157)"
                            }
                        }
                    },
                    {
                        "name": "\u540c\u4e8b",
                        "value": 844,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(122,147,76)"
                            }
                        }
                    },
                    {
                        "name": "\u5f88\u5feb\u7ed9\u6211\u53d1",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(78,21,102)"
                            }
                        }
                    },
                    {
                        "name": "\u4eba\u5de5",
                        "value": 28,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(67,128,90)"
                            }
                        }
                    },
                    {
                        "name": "\u8bc4\u8bba",
                        "value": 636,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(96,153,59)"
                            }
                        }
                    },
                    {
                        "name": "\u6211\u8981",
                        "value": 98,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(40,31,57)"
                            }
                        }
                    },
                    {
                        "name": "\u5df2\u8bfb",
                        "value": 7,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(3,69,108)"
                            }
                        }
                    },
                    {
                        "name": "\u4e24\u888b",
                        "value": 246,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(1,156,123)"
                            }
                        }
                    },
                    {
                        "name": "\u7455\u75b5",
                        "value": 89,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(109,72,75)"
                            }
                        }
                    },
                    {
                        "name": "\u51e0\u4e2a",
                        "value": 195,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(33,61,87)"
                            }
                        }
                    },
                    {
                        "name": "\u4e0d\u53d1",
                        "value": 29,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(136,19,28)"
                            }
                        }
                    },
                    {
                        "name": "\u597d\u8bc4",
                        "value": 4717,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(158,154,115)"
                            }
                        }
                    },
                    {
                        "name": "\u4e0d\u56de",
                        "value": 17,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(119,42,92)"
                            }
                        }
                    },
                    {
                        "name": "\u5728\u6b64\u4e4b\u524d",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(69,19,90)"
                            }
                        }
                    },
                    {
                        "name": "\u5f53\u505a",
                        "value": 102,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(154,151,39)"
                            }
                        }
                    },
                    {
                        "name": "\u4e3e\u62a5",
                        "value": 3,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(149,2,152)"
                            }
                        }
                    },
                    {
                        "name": "\u56de\u590d",
                        "value": 408,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(22,158,123)"
                            }
                        }
                    },
                    {
                        "name": "\u5982\u679c\u8bf4",
                        "value": 7,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(92,74,97)"
                            }
                        }
                    },
                    {
                        "name": "\u5931\u671b",
                        "value": 627,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(105,16,23)"
                            }
                        }
                    },
                    {
                        "name": "\u4e09\u5929",
                        "value": 166,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(47,93,160)"
                            }
                        }
                    },
                    {
                        "name": "\u8fd9\u6761",
                        "value": 40,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(98,13,117)"
                            }
                        }
                    },
                    {
                        "name": "\u4e4b\u5185",
                        "value": 15,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(13,78,72)"
                            }
                        }
                    },
                    {
                        "name": "\u5f97\u4ee5",
                        "value": 2,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(11,114,85)"
                            }
                        }
                    },
                    {
                        "name": "\u9519\u8bef",
                        "value": 15,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(42,60,124)"
                            }
                        }
                    },
                    {
                        "name": "\u7406\u7531",
                        "value": 37,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(135,156,137)"
                            }
                        }
                    },
                    {
                        "name": "\u5c0f\u65f6",
                        "value": 167,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(115,104,29)"
                            }
                        }
                    },
                    {
                        "name": "\u4e00\u5bb6",
                        "value": 172,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(58,82,21)"
                            }
                        }
                    },
                    {
                        "name": "\u89e3\u51b3",
                        "value": 249,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(1,126,46)"
                            }
                        }
                    },
                    {
                        "name": "\u7279\u522b\u96be\u5403",
                        "value": 14,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(66,72,77)"
                            }
                        }
                    },
                    {
                        "name": "\u65e0\u8bed",
                        "value": 328,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(42,41,44)"
                            }
                        }
                    },
                    {
                        "name": "\u5927\u5200",
                        "value": 27,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(68,81,126)"
                            }
                        }
                    },
                    {
                        "name": "\u4e0d\u52a8",
                        "value": 63,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(30,60,126)"
                            }
                        }
                    },
                    {
                        "name": "\u4e00\u4e8c\u767e\u5206",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(63,22,104)"
                            }
                        }
                    },
                    {
                        "name": "\u5e72\u5df4",
                        "value": 24,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(64,109,124)"
                            }
                        }
                    },
                    {
                        "name": "\u5e72\u5df4\u5df4",
                        "value": 57,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(143,101,115)"
                            }
                        }
                    },
                    {
                        "name": "\u8fc7\u671f",
                        "value": 220,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(142,55,3)"
                            }
                        }
                    },
                    {
                        "name": "\u79ef\u5206",
                        "value": 28,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(29,115,58)"
                            }
                        }
                    },
                    {
                        "name": "\u611f\u89c9",
                        "value": 3025,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(102,47,83)"
                            }
                        }
                    },
                    {
                        "name": "\u539f\u56e0\u82b1\u8def",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(84,116,111)"
                            }
                        }
                    },
                    {
                        "name": "\u55dd\u513f",
                        "value": 2,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(110,85,99)"
                            }
                        }
                    },
                    {
                        "name": "6.1",
                        "value": 9,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(104,149,22)"
                            }
                        }
                    },
                    {
                        "name": "\u61d2\u4eba",
                        "value": 198,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(153,16,22)"
                            }
                        }
                    },
                    {
                        "name": "\u87ba\u86f3",
                        "value": 610,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(43,69,13)"
                            }
                        }
                    },
                    {
                        "name": "\u5348\u4f11",
                        "value": 3,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(119,117,29)"
                            }
                        }
                    },
                    {
                        "name": "\u5403\u4e2a",
                        "value": 61,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(47,128,147)"
                            }
                        }
                    },
                    {
                        "name": "\u5e72\u6389",
                        "value": 40,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(68,91,142)"
                            }
                        }
                    },
                    {
                        "name": "\u957f\u957f",
                        "value": 6,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(55,97,131)"
                            }
                        }
                    },
                    {
                        "name": "\u738b\u8005",
                        "value": 7,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(69,26,46)"
                            }
                        }
                    },
                    {
                        "name": "\u53cd\u9a73",
                        "value": 6,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(71,83,106)"
                            }
                        }
                    },
                    {
                        "name": "\u4e45\u4e45",
                        "value": 10,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(150,150,105)"
                            }
                        }
                    },
                    {
                        "name": "\u7422\u78e8",
                        "value": 5,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(59,89,50)"
                            }
                        }
                    },
                    {
                        "name": "\u4f5c\u4e1a",
                        "value": 3,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(122,80,33)"
                            }
                        }
                    },
                    {
                        "name": "\u4e00\u53e3\u6c14",
                        "value": 127,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(155,11,158)"
                            }
                        }
                    },
                    {
                        "name": "\u663e\u5f97",
                        "value": 10,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(71,111,137)"
                            }
                        }
                    },
                    {
                        "name": "\u4e09\u4e2a",
                        "value": 139,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(59,1,6)"
                            }
                        }
                    },
                    {
                        "name": "\u7279\u522b\u8fa3\u8fa3\u7684",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(145,29,152)"
                            }
                        }
                    },
                    {
                        "name": "\u5c71\u4eba",
                        "value": 8,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(141,18,114)"
                            }
                        }
                    },
                    {
                        "name": "\u5f20\u8001\u5e08",
                        "value": 13,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(153,155,70)"
                            }
                        }
                    },
                    {
                        "name": "\u4e0b\u6b21",
                        "value": 3806,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(14,134,28)"
                            }
                        }
                    },
                    {
                        "name": "\u652f\u6301\u96f6\u98df",
                        "value": 5,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(12,99,100)"
                            }
                        }
                    },
                    {
                        "name": "\u5948\u65af",
                        "value": 111,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(120,31,33)"
                            }
                        }
                    },
                    {
                        "name": "\u5e73\u5e38",
                        "value": 179,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(46,79,123)"
                            }
                        }
                    },
                    {
                        "name": "\u5546\u54c1\u5305\u88c5\u888b",
                        "value": 2,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(49,96,82)"
                            }
                        }
                    },
                    {
                        "name": "\u4e0d\u4e70",
                        "value": 81,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(13,51,95)"
                            }
                        }
                    },
                    {
                        "name": "\u8c46\u8150",
                        "value": 41,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(111,18,16)"
                            }
                        }
                    },
                    {
                        "name": "\u518d\u4e5f",
                        "value": 279,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(82,94,102)"
                            }
                        }
                    },
                    {
                        "name": "\u770b\u7740\u767e\u8349",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(18,24,78)"
                            }
                        }
                    },
                    {
                        "name": "\u539f\u6599\u771f\u7231",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(126,29,153)"
                            }
                        }
                    },
                    {
                        "name": "\u5c0f\u54f2\u5f20",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(20,99,11)"
                            }
                        }
                    },
                    {
                        "name": "\u51cf\u80a5",
                        "value": 2645,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(143,49,24)"
                            }
                        }
                    },
                    {
                        "name": "\u671f\u95f4",
                        "value": 186,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(74,68,137)"
                            }
                        }
                    },
                    {
                        "name": "\u652f\u6301\u9e2d\u8116\u5b50",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(103,67,116)"
                            }
                        }
                    },
                    {
                        "name": "\u563f\u563f\u563f",
                        "value": 18,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(139,115,12)"
                            }
                        }
                    },
                    {
                        "name": "\u6bd4\u8f83\u4e30\u5bcc",
                        "value": 10,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(126,76,45)"
                            }
                        }
                    },
                    {
                        "name": "\u6ca1\u9519",
                        "value": 84,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(38,152,3)"
                            }
                        }
                    },
                    {
                        "name": "\u63a8\u8350\u5212\u7b97",
                        "value": 11,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(27,32,125)"
                            }
                        }
                    },
                    {
                        "name": "\u6d3b\u52a8\u7247\u7edd",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(149,56,107)"
                            }
                        }
                    },
                    {
                        "name": "\u7acb\u724c",
                        "value": 4,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(152,67,82)"
                            }
                        }
                    },
                    {
                        "name": "\u611f\u8c22\u9e21\u80f8\u8089",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(144,108,75)"
                            }
                        }
                    },
                    {
                        "name": "\u820d\u53cb",
                        "value": 29,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(6,70,128)"
                            }
                        }
                    },
                    {
                        "name": "\u4e00\u5927",
                        "value": 399,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(2,139,91)"
                            }
                        }
                    },
                    {
                        "name": "\u56db\u5305",
                        "value": 36,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(34,62,94)"
                            }
                        }
                    },
                    {
                        "name": "\u5200\u5200",
                        "value": 2,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(51,120,92)"
                            }
                        }
                    },
                    {
                        "name": "\u8fa3\u723d",
                        "value": 2,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(82,81,116)"
                            }
                        }
                    },
                    {
                        "name": "\u888b\u91cc",
                        "value": 11,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(102,121,149)"
                            }
                        }
                    },
                    {
                        "name": "\u6bcf\u5305",
                        "value": 106,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(109,89,34)"
                            }
                        }
                    },
                    {
                        "name": "\u4e0d\u9519\u5440",
                        "value": 36,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(136,53,72)"
                            }
                        }
                    },
                    {
                        "name": "\u6b63\u5408\u9002",
                        "value": 69,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(137,21,79)"
                            }
                        }
                    },
                    {
                        "name": "\u6ee1\u8db3\u611f",
                        "value": 12,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(109,12,51)"
                            }
                        }
                    },
                    {
                        "name": "\u5f3a\u70c8\u63a8\u8350",
                        "value": 201,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(97,47,54)"
                            }
                        }
                    },
                    {
                        "name": "\u5957\u9910",
                        "value": 69,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(1,154,141)"
                            }
                        }
                    },
                    {
                        "name": "\u4e00\u76d2",
                        "value": 816,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(85,64,14)"
                            }
                        }
                    },
                    {
                        "name": "\u4e00\u5927\u5757",
                        "value": 13,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(149,41,143)"
                            }
                        }
                    },
                    {
                        "name": "\u6ca1\u60f3\u5230",
                        "value": 465,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(160,17,120)"
                            }
                        }
                    },
                    {
                        "name": "\u56db\u4e2a",
                        "value": 138,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(94,48,108)"
                            }
                        }
                    },
                    {
                        "name": "\u5546\u54c1\u96f6\u98df",
                        "value": 20,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(153,41,113)"
                            }
                        }
                    },
                    {
                        "name": "\u4e94\u5206",
                        "value": 197,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(104,39,124)"
                            }
                        }
                    },
                    {
                        "name": "\u4e0d\u9519618",
                        "value": 23,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(142,108,119)"
                            }
                        }
                    },
                    {
                        "name": "\u4fca\u54f2",
                        "value": 5,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(71,83,68)"
                            }
                        }
                    },
                    {
                        "name": "\u7238\u5988",
                        "value": 90,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(88,159,81)"
                            }
                        }
                    },
                    {
                        "name": "\u987a\u4fbf",
                        "value": 45,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(111,131,74)"
                            }
                        }
                    },
                    {
                        "name": "\u4e00\u5806\u51e4\u722a",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(144,120,14)"
                            }
                        }
                    },
                    {
                        "name": "\u8c46\u8150\u6e23",
                        "value": 4,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(123,34,122)"
                            }
                        }
                    },
                    {
                        "name": "\u5f39\u6027",
                        "value": 84,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(83,114,2)"
                            }
                        }
                    },
                    {
                        "name": "\u7279\u522b\u68d2\u68d2",
                        "value": 29,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(148,119,115)"
                            }
                        }
                    },
                    {
                        "name": "\u6597\u5730\u4e3b",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(151,65,142)"
                            }
                        }
                    },
                    {
                        "name": "\u5468\u5b50",
                        "value": 2,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(10,72,7)"
                            }
                        }
                    },
                    {
                        "name": "\u6a2a\u5e97",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(125,12,42)"
                            }
                        }
                    },
                    {
                        "name": "\u8fdb\u6d1e",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(119,97,138)"
                            }
                        }
                    },
                    {
                        "name": "\u4e00\u6746",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(61,28,21)"
                            }
                        }
                    },
                    {
                        "name": "\u9ad8\u5c14\u592b",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(50,81,93)"
                            }
                        }
                    },
                    {
                        "name": "\u7b2c\u4e00\u540d",
                        "value": 4,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(106,67,79)"
                            }
                        }
                    },
                    {
                        "name": "\u7f8e\u5973",
                        "value": 13,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(32,137,131)"
                            }
                        }
                    },
                    {
                        "name": "\u547d\u8fd0\u5473\u5bb6",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(133,85,143)"
                            }
                        }
                    },
                    {
                        "name": "\u5f88\u723d",
                        "value": 36,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(144,22,139)"
                            }
                        }
                    },
                    {
                        "name": "\u517c\u6d77",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(50,32,46)"
                            }
                        }
                    },
                    {
                        "name": "\u54f2\u6765",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(44,134,95)"
                            }
                        }
                    },
                    {
                        "name": "\u5267\u8fb9",
                        "value": 2,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(4,74,142)"
                            }
                        }
                    },
                    {
                        "name": "\u963f\u7d6e",
                        "value": 3,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(51,115,135)"
                            }
                        }
                    },
                    {
                        "name": "\u6211\u5bb6",
                        "value": 383,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(72,122,7)"
                            }
                        }
                    },
                    {
                        "name": "\u652f\u6301\u732a\u8089",
                        "value": 3,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(111,144,42)"
                            }
                        }
                    },
                    {
                        "name": "\u793c\u5305",
                        "value": 34,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(69,13,146)"
                            }
                        }
                    },
                    {
                        "name": "\u5403\u6389",
                        "value": 97,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(79,100,9)"
                            }
                        }
                    },
                    {
                        "name": "\u4e00\u79cd\u5b9e\u60e0",
                        "value": 4,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(145,3,136)"
                            }
                        }
                    },
                    {
                        "name": "\u8fd8\u4f1a",
                        "value": 3306,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(50,10,108)"
                            }
                        }
                    },
                    {
                        "name": "\u4ef7\u683c618",
                        "value": 11,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(90,77,65)"
                            }
                        }
                    },
                    {
                        "name": "\u4e1c\u897f",
                        "value": 1473,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(10,91,75)"
                            }
                        }
                    },
                    {
                        "name": "\u62cd\u7167",
                        "value": 195,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(56,10,73)"
                            }
                        }
                    },
                    {
                        "name": "\u901f\u5ea6",
                        "value": 971,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(134,1,100)"
                            }
                        }
                    },
                    {
                        "name": "\u6d3b\u52a8\u5206\u91cf",
                        "value": 5,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(16,90,105)"
                            }
                        }
                    },
                    {
                        "name": "\u4e70\u4e00\u9001\u4e00",
                        "value": 24,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(115,123,85)"
                            }
                        }
                    },
                    {
                        "name": "\u5f88\u591f",
                        "value": 8,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(18,61,66)"
                            }
                        }
                    },
                    {
                        "name": "\u7b0b\u8d85",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(120,52,0)"
                            }
                        }
                    },
                    {
                        "name": "\u56db\u6708\u4efd",
                        "value": 14,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(34,3,104)"
                            }
                        }
                    },
                    {
                        "name": "\u5c0f\u5305\u88c5",
                        "value": 505,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(44,67,117)"
                            }
                        }
                    },
                    {
                        "name": "\u5546\u54c1\u5c0f\u54f2",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(146,139,1)"
                            }
                        }
                    },
                    {
                        "name": "\u91d1\u4e3b",
                        "value": 5,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(79,98,16)"
                            }
                        }
                    },
                    {
                        "name": "\u592a\u6709",
                        "value": 11,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(29,100,47)"
                            }
                        }
                    },
                    {
                        "name": "\u773c\u5149",
                        "value": 8,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(119,115,72)"
                            }
                        }
                    },
                    {
                        "name": "\u7238\u7238",
                        "value": 56,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(153,42,61)"
                            }
                        }
                    },
                    {
                        "name": "\u652f\u6301\u4e70\u4e00\u9001\u4e00",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(3,47,79)"
                            }
                        }
                    },
                    {
                        "name": "\u4e0d\u9519\u4fdd\u8d28\u671f",
                        "value": 33,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(31,113,87)"
                            }
                        }
                    },
                    {
                        "name": "\u5546\u54c1\u5206\u91cf",
                        "value": 11,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(131,132,14)"
                            }
                        }
                    },
                    {
                        "name": "\u6700\u8db3",
                        "value": 3,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(95,111,137)"
                            }
                        }
                    },
                    {
                        "name": "29",
                        "value": 14,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(72,130,110)"
                            }
                        }
                    },
                    {
                        "name": "\u9501\u9aa8",
                        "value": 27,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(95,24,5)"
                            }
                        }
                    },
                    {
                        "name": "\u5546\u54c1\u5fae\u8fa3",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(10,144,67)"
                            }
                        }
                    },
                    {
                        "name": "\u7ed9\u529b",
                        "value": 236,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(129,40,35)"
                            }
                        }
                    },
                    {
                        "name": "\u56db\u4efd",
                        "value": 7,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(61,84,102)"
                            }
                        }
                    },
                    {
                        "name": "\u4e00\u53f7",
                        "value": 21,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(118,134,111)"
                            }
                        }
                    },
                    {
                        "name": "\u724c\u5b50",
                        "value": 1035,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(159,132,86)"
                            }
                        }
                    },
                    {
                        "name": "\u4e1c\u897f\u6211\u5bb6",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(158,137,89)"
                            }
                        }
                    },
                    {
                        "name": "\u5473\u5305",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(144,103,138)"
                            }
                        }
                    },
                    {
                        "name": "\u7b2c\u56db\u6b21",
                        "value": 47,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(70,27,71)"
                            }
                        }
                    },
                    {
                        "name": "\u5b9d\u8d1d",
                        "value": 3374,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(72,141,43)"
                            }
                        }
                    },
                    {
                        "name": "\u652f\u6301\u4e00\u5c0f\u5305",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(96,43,3)"
                            }
                        }
                    },
                    {
                        "name": "\u672c\u6d77\u54f2",
                        "value": 2,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(117,23,141)"
                            }
                        }
                    },
                    {
                        "name": "\u5f88\u65b9",
                        "value": 15,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(93,14,72)"
                            }
                        }
                    },
                    {
                        "name": "\u4fbf\u643a\u5e26",
                        "value": 62,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(19,62,28)"
                            }
                        }
                    },
                    {
                        "name": "\u5403\u4e0d\u5b8c",
                        "value": 199,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(52,19,66)"
                            }
                        }
                    },
                    {
                        "name": "\u8d8a\u505a\u8d8a",
                        "value": 52,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(151,128,146)"
                            }
                        }
                    },
                    {
                        "name": "\u5bb3\u6015",
                        "value": 35,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(95,108,14)"
                            }
                        }
                    },
                    {
                        "name": "\u4e0d\u7528",
                        "value": 820,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(101,118,137)"
                            }
                        }
                    },
                    {
                        "name": "\u63a8\u8350\u5473\u9053",
                        "value": 82,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(46,45,36)"
                            }
                        }
                    },
                    {
                        "name": "\u8116\u4e0d\u8fa3",
                        "value": 1,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(9,125,99)"
                            }
                        }
                    },
                    {
                        "name": "\u83b2\u85d5",
                        "value": 6,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(81,112,14)"
                            }
                        }
                    },
                    {
                        "name": "\u4e0d\u9519\u5473\u9053",
                        "value": 395,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(9,103,36)"
                            }
                        }
                    },
                    {
                        "name": "\u63a8\u8350\u751c\u8fa3",
                        "value": 2,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(133,122,135)"
                            }
                        }
                    },
                    {
                        "name": "\u9171\u9999",
                        "value": 10,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(36,155,104)"
                            }
                        }
                    },
                    {
                        "name": "\u597d\u6b21",
                        "value": 23,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(9,59,89)"
                            }
                        }
                    },
                    {
                        "name": "\u53d1\u6765",
                        "value": 69,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(45,134,29)"
                            }
                        }
                    },
                    {
                        "name": "\u5f53\u4e2a",
                        "value": 33,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(26,49,68)"
                            }
                        }
                    },
                    {
                        "name": "\u7b2c\u4e09\u6b21",
                        "value": 418,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(116,139,48)"
                            }
                        }
                    },
                    {
                        "name": "\u7b2c\u4e8c\u6b21",
                        "value": 2754,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(122,19,17)"
                            }
                        }
                    },
                    {
                        "name": "\u53d1\u73b0\u597d\u8bc4",
                        "value": 5,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(51,143,10)"
                            }
                        }
                    },
                    {
                        "name": "\u7167\u7247",
                        "value": 122,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(25,3,96)"
                            }
                        }
                    },
                    {
                        "name": "\u4e24\u6b21\u597d\u5403",
                        "value": 15,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(57,160,55)"
                            }
                        }
                    },
                    {
                        "name": "\u5546\u54c1\u96f6\u5634",
                        "value": 2,
                        "textStyle": {
                            "normal": {
                                "color": "rgb(86,53,156)"
                            }
                        }
                    },

                ]

                var chart1Option = {
                    title: {
                        text: '热词云图电器-词云',//标题
                        x: 'center',
                        textStyle: {
                            fontSize: 23
                        }

                    },
                    backgroundColor: '#fff', //F7F7F7
                    tooltip: {
                        show: true
                    },
                    series: [{
                        name: '热词云图',//数据提示窗标题
                        type: 'wordCloud',
                        sizeRange: [12, 64],//画布范围，如果设置太大会出现少词（溢出屏幕）
                        rotationRange: [-45, 90],//数据翻转范围
                        //shape: 'circle',
                        textPadding: 0,
                        autoSize: {
                            enable: true,
                            minSize: 6
                        },
                        textStyle: {
                            normal: {
                                color: function() {
                                    return 'rgb(' + [
                                        Math.round(Math.random() * 160),
                                        Math.round(Math.random() * 160),
                                        Math.round(Math.random() * 160)
                                    ].join(',') + ')';
                                }
                            },
                            emphasis: {
                                shadowBlur: 10,
                                shadowColor: '#333'
                            }
                        },
                        data: data1,
                    }]
                };

                var chart2Option = {
                    title: {
                        text: '热词云图食品-词云',//标题
                        x: 'center',
                        textStyle: {
                            fontSize: 23
                        }

                    },
                    backgroundColor: '#fff',
                    tooltip: {
                        show: true
                    },
                    series: [{
                        name: '热词云图',//数据提示窗标题
                        type: 'wordCloud',
                        sizeRange: [12, 64],//画布范围，如果设置太大会出现少词（溢出屏幕）
                        rotationRange: [-45, 90],//数据翻转范围
                        //shape: 'circle',
                        textPadding: 0,
                        autoSize: {
                            enable: true,
                            minSize: 6
                        },
                        textStyle: {
                            normal: {
                                color: function() {
                                    return 'rgb(' + [
                                        Math.round(Math.random() * 160),
                                        Math.round(Math.random() * 160),
                                        Math.round(Math.random() * 160)
                                    ].join(',') + ')';
                                }
                            },
                            emphasis: {
                                shadowBlur: 10,
                                shadowColor: '#333'
                            }
                        },
                        data: data2,
                    }]
                };

                chart1.setOption(chart1Option);
                chart2.setOption(chart2Option);

            },
        },
    };
</script>
<style lang="less">

</style>
