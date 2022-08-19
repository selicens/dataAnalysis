<template>
    <div ref="maps" id="maps"></div>
</template>

<script setup lang="ts">
    import {listStore} from "../store";
    import {onMounted, ref} from 'vue'
    import * as echarts from 'echarts'
    import "../maps/index.ts"
    import {geoCoordMap} from "../maps/geoMap";
    const store = listStore()
    const maps = ref<HTMLElement>()
    const props = defineProps({
        list: Object
    })
    onMounted(() => {
        initMaps()
    })
    const initMaps = () => {
        const city = props.list!.diseaseh5Shelf.areaTree[0].children;
        const data = city.map((v: any) => {
            return {
                name: v.name,
                value: geoCoordMap[v.name].concat(v.total.nowConfirm),
                children: v.children,
            };
        });
        const charts = echarts.init(maps.value as HTMLElement)
        charts.setOption({
            title: {
                text: `全国疫情地图`,
                left: "center"
            },
            geo: {
                map: "china",
                aspectScale: 0.8,
                layoutCenter: ["50%", "50%"],
                layoutSize: "120%",
                itemStyle: {
                    areaColor: {
                        type: "linear-gradient",
                        x: 0,
                        y: 1200,
                        x2: 1000,
                        y2: 0,
                        colorStops: [
                            {
                                offset: 0,
                                color: "#152E6E", // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: "#0673AD", // 50% 处的颜色
                            },
                        ],
                        global: true, // 缺省为 false
                    },
                    shadowColor: "#0f5d9d",
                    shadowOffsetX: 0,
                    shadowOffsetY: 15,
                    opacity: 0.5,
                },
                emphasis: {
                    areaColor: "#0f5d9d",
                },

                regions: [
                    {
                        name: "南海诸岛",
                        itemStyle: {
                            areaColor: "rgba(0, 10, 52, 1)",
                            borderColor: "rgba(0, 10, 52, 1)",
                            opacity: 0,
                            label: {
                                show: false,
                                color: "#009cc9",
                            },
                        },
                        label: {
                            show: false,
                            color: "#FFFFFF",
                            fontSize: 12,
                        },
                    },
                ],
            },
            series: [
                {
                    type: "map",
                    map: "china",
                    aspectScale: 0.8,
                    layoutCenter: ["50%", "50%"], //地图位置
                    layoutSize: "120%",
                    zoom: 1, //当前视角的缩放比例
                    // roam: true, //是否开启平游或缩放
                    scaleLimit: {
                        //滚轮缩放的极限控制
                        min: 1,
                        max: 2,
                    },
                    label: {
                        show: true,
                        color: "#FFFFFF",
                        fontSize: 12,
                    },
                    itemStyle: {
                        areaColor: "#0c3653",
                        borderColor: "#1cccff",
                        borderWidth: 1.8,
                    },
                    emphasis: {
                        areaColor: "#56b1da",
                        label: {
                            show: true,
                            color: "#fff",
                        },
                    },
                    data: data,
                },
                {
                    type: "scatter",
                    coordinateSystem: "geo",
                    //   symbol: 'image://http://ssq168.shupf.cn/data/biaoji.png',
                    // symbolSize: [30,120],
                    // symbolOffset:[0, '-40%'] ,
                    symbol: "pin",
                    symbolSize: [45, 45],
                    label: {
                        show: true,
                        color: "#fff",
                        formatter(value: any) {
                            return value.data.value[2];
                        },
                    },
                    itemStyle: {
                        color: "#1E90FF", //标志颜色
                    },
                    data: data,
                },
            ],
        })
        charts.on("click", (e: any) => {
            store.item = e.data.children;
            console.log(e)
        });
    }
</script>

<style scoped>
    #maps{
        height: 100%;
        width: 100%;
    }
</style>
