<template>
    <div class="movie-list">
        <div v-for="movie in movies" :key="movie.id">
            <SingleMovie :movie="movie"/>
        </div>
    </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from 'vue'
import SingleMovie from './SingleMovie.vue'

export default {
    props: ['movies'],
    components: {SingleMovie},
    setup(props) {
        onMounted(() => {
            console.log('mounted')
        })

        onUnmounted(() => {
            console.log('unmounted')
        })

        onUpdated(() => {
            console.log('updated')
        })
    }
}
</script>

<style>

</style>