<template>
    <input type="search" v-model="search" />
    <p>searching for {{ search }}</p>
    <div v-for="name in matching" :key="name">{{ name }}</div>
    <button @click="stopWatching"></button>
</template>

<script>
import { computed, ref, watch, watchEffect } from 'vue'
export default {
    name: 'HomeView',
    setup() {
        const search = ref('')
        const names = ref(['Some other name', 'new one', 'name3', 'lol', 'name5', 'name6'])

        const stopWatch = watch(search, () => {
            console.log(search.value)
        })

        const stopEffect = watchEffect(() => {
            console.log(search.value)
        })

        const matching = computed(() => {
            return names.value.filter((name) => {
                return name.includes(search.value)
            })
        })

        const stopWatching = () => {
            stopWatch()
            stopEffect()
        }

        return { names, search, matching, stopWatching }
    },
}
</script>
