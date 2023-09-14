<template>
    <div class="movie-list">
        <div v-for="movie in movies" :key="movie.id">
            <SingleMovie :movie="movie" />
        </div>
    </div>
</template>

<script>
import SingleMovie from './SingleMovie.vue'

export default {
    props: ['movies'],
    components: {SingleMovie},
    setup() {
    }
}
</script>

<style>

</style>