<template>
    <div ref="line" class="container-left-line" style=""></div>
</template>

<script setup lang="ts">
    import {onMounted, ref} from 'vue'
    import * as echarts from 'echarts'
    import {StatisGradeCityDetail} from "../store/type";

    const line = ref<HTMLElement>()
    const props = defineProps({
        detail: Object
    })
    onMounted(() => {
        initLine()
    })
    const initLine = () => {
        const lines = echarts.init(line.value as HTMLElement)
        lines.setOption({
            backgroundColor: "#223651",
            title: {
                text: `疫情新增趋势top10`,
                textStyle: { color: "#fff" },
                left: "center"
            },
            xAxis: {
                type: 'category',
                data: props.detail!.map((item:StatisGradeCityDetail) => item.city),
                axisLine: {
                    lineStyle: {
                        color: '#fff'
                    }
                }
            },
            yAxis: {
                type: 'value',
                axisLine: {
                    lineStyle: {
                        color: '#fff'
                    }
                }
            },
            label: {
                show: true
            },
            tooltip: {
                trigger: 'axis'
            },
            series: [
                {
                    data: props.detail!.map((item:StatisGradeCityDetail) => item.nowConfirm),
                    type: 'line',
                    smooth: true
                }
            ]
        })
    }
</script>

<style scoped>
    .container-left-line{
        height: 350px;
        width: 100%;
    }
</style>
