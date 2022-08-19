<template>
    <table border="1">
        <thead>
        <tr>
            <th>地区</th>
            <th>新增确诊</th>
            <th>累计确诊</th>
            <th>治愈</th>
            <th>死亡</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in props.item" :key="item">
            <td>{{item.name}}</td>
            <td>{{item.today.confirm}}</td>
            <td>{{item.total.confirm}}</td>
            <td>{{item.total.heal}}</td>
            <td>{{item.total.dead}}</td>
        </tr>
        </tbody>
    </table>
</template>

<script setup lang="ts">
    import {onMounted} from 'vue'
    import {listStore} from "../store";
    import {Children} from "../store/type";

    const store = listStore()
    const props = defineProps({
        list: Object,
        item: Object
    })
    onMounted(() => {
        setTableData()
    })
    const setTableData = () =>{
        props.list!.diseaseh5Shelf.areaTree[0].children.map((item: Children) => {
            store.item = item.children
        })
    }
</script>

<style scoped>

</style>
