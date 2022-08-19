import { defineStore } from 'pinia'
import type { Children, RootObject, ChinaTotal, ChinaAdd, StatisGradeCityDetail, CityData } from './type'
export const listStore = defineStore('main', {
    state: () => {
        return {
            list: <RootObject>{},
            item: <Children[]>[],
            chinaAdd: <ChinaAdd>{},
            chinaTotal: <ChinaTotal>{},
            cityDetail: <StatisGradeCityDetail[]>[]
        }
    },
    actions: {
        async getListApi() {
            try {
                const result = await fetch('http://localhost:3333/api/list')
                this.list = await result.json()
                this.chinaAdd = await this.list.diseaseh5Shelf.chinaAdd
                this.chinaTotal = await this.list.diseaseh5Shelf.chinaTotal
                this.cityDetail = await this.list.statisGradeCityDetail.slice(0,10)
                console.log(this.list)
            }catch (e) {
                console.log(e)
            }
        }
    }
})
