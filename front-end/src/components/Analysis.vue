<template>
    <div class="container">
        <div class="container-left">
            <TotalCard id="card" :add="store.chinaAdd" :total="store.chinaTotal"/>
            <PieComponent id="pie" :detail="store.cityDetail"/>
            <LineComponent id="line" :detail="store.cityDetail"/>
        </div>
        <div class="container-center">
            <MapComponent :list="store.list"/>
        </div>
        <div class="container-right">
            <StatisticalTable :list="store.list" :item="store.item"/>
        </div>
    </div>
</template>

<script lang="ts">
    export default {
        name: "Analysis"
    }
</script>
<script setup lang="ts">
    import {listStore} from "../store";
    import {reactive, onBeforeMount} from 'vue'
    import {geoCoordMap} from "../maps/geoMap";
    import TotalCard from "./TotalCard.vue";
    import PieComponent from "./PieComponent.vue";
    import LineComponent from "./LineComponent.vue"
    import MapComponent from "./MapComponent.vue"
    import StatisticalTable from "./StatisticalTable.vue"
    const store = listStore()
    await store.getListApi()
</script>

<style scoped>
    .container{
        display: flex;
        height: 100%;
    }
    .container-left{
        width: 400px;
    }
    .container-center{
        flex: 1;
    }
    .container-right{
        width: 400px;
    }
    @media (max-width: 768px) {
        .container{
            flex-direction: column;
        }
        .container-left{
            width: 100%;
        }
        .container-right{
            display: none;
        }
    }
    @media (max-width: 992px) {
        .container-right{
            display: none;
        }
    }
</style>
