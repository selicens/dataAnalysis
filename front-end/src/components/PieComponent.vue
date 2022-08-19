<template>
    <div ref="pie" class="container-left-pie"></div>
</template>

<script setup lang="ts">
    import {onMounted, ref} from 'vue'
    import * as echarts from 'echarts'
    import {StatisGradeCityDetail} from "../store/type";

    const props = defineProps({
        detail: Object
    })
    const pie = ref<HTMLElement>()
    onMounted(() => {
        initPie()
    })
    const initPie = () => {
        const pies = echarts.init(pie.value as HTMLElement)
        pies.setOption({
            backgroundColor: "#223651",
            title: {
                text: `疫情新增趋势top10`,
                textStyle: { color: "#fff" },
                left: "center"
            },
            tooltip: {
                trigger: 'item'
            },
            series: [
                {
                    name: '地区-新增',
                    type: 'pie',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 4,
                        borderColor: '#fff',
                        borderWidth: 2
                    },
                   /* label: {
                        show: false,
                        position: 'center'
                    },*/
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '20',
                            fontWeight: 'bold'
                        }
                    },
                    /*labelLine: {
                        show: false
                    },*/
                    data: props.detail!.map((item: StatisGradeCityDetail) => ({name: item.city, value: item.nowConfirm,})),
                }
            ]
        })
    }
</script>

<style scoped>
    .container-left-pie{
        margin: 20px 0;
        height: 350px;
        width: 100%
    }
</style>
