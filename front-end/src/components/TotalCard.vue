<template>
    <div class="container-left-card">
        <div class="card">
            <div>较上日+{{props.add.localConfirmH5}}</div>
            <div>{{props.total.localConfirm}}</div>
            <div>本土现有确诊</div>
        </div>
        <div class="card">
            <div>较上日+{{props.add.nowConfirm}}</div>
            <div>{{props.total.nowConfirm}}</div>
            <div>现有确诊</div>
        </div>
        <div class="card">
            <div>较上日+{{props.add.confirm}}</div>
            <div>{{props.total.confirm}}</div>
            <div>累计确诊</div>
        </div>
        <div class="card">
            <div>较上日+{{props.add.noInfect}}</div>
            <div>{{props.total.noInfect}}</div>
            <div>无症状感染者</div>
        </div>
        <div class="card">
            <div>较上日+{{props.add.importedCase}}</div>
            <div>{{props.total.importedCase}}</div>
            <div>境外输入</div>
        </div>
        <div class="card">
            <div>较上日+{{props.add.dead}}</div>
            <div>{{props.total.dead}}</div>
            <div>累计死亡</div>
        </div>
    </div>
</template>

<script lang="ts">
    export default {
        name: "TotalCard"
    }
</script>
<script setup lang="ts">
    const props = defineProps({
        add: Object,
        total: Object
    })
</script>

<style scoped>
    .container-left-card{
        display: grid;
        grid-template-columns: auto auto auto;
        grid-template-rows: auto auto;
        background-color: #1a1a1a;
    }
    .card{
        color: white;
        border: 1px solid white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .card>div{
        margin: 5px 0;
    }
    .card>div:nth-child(2){
        color: red;
    }
</style>
