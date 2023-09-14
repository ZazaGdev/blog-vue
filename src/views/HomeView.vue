<template>
    <div class="home">
        <h1>Home</h1>
        <div v-if="error">{{ error }}</div>
        <div v-else-if="!error && !movies.length">loading...</div>
        <div v-else><MovieList :movies="movies"/></div>
    </div>
</template>

<script>
import MovieList from '../components/MovieList.vue'
import getMovies from '../composables/getMovies'

export default {
    name: 'HomeView',
    components: { MovieList },
    setup() {
        const {movies, error, loadMovies} = getMovies()
        
        loadMovies()

        return {movies, error}
    },
}
</script>
