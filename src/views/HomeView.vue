<template>
    <div class="home">
        <h1>Home</h1>
        <div v-if="error">{{ error }}</div>
        <div v-else-if="!error && !movies.length">
            <Spinner/>
        </div>
        <div v-else>
            <MovieList :movies="movies"/>
        </div>
    </div>
</template>

<script>
import getMovies from '../composables/getMovies'

import MovieList from '../components/MovieList'
import Spinner from '../components/Spinner'

export default {
    name: 'HomeView',
    components: { MovieList, Spinner },
    setup() {
        const {movies, error, loadMovies} = getMovies()
        
        loadMovies()

        return {movies, error}
    },
}
</script>
