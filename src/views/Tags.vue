<template>
    <div v-if="!movies.length">
        <Spinner />
    </div>
    <div v-else-if="movies.length && error">
        {{ error }}
    </div>
    <div v-else>
        <MovieList :movies="taggedMovies"/>
        <TagCloud :movies="movies"/>
    </div>
</template>

<script>
import getMovies from '../composables/getMovies'

import Spinner from '../components/Spinner'
import MovieList from '../components/MovieList'
import TagCloud from '../components/TagCloud'

import { useRoute } from "vue-router"
import { computed } from "vue";

export default {
    components: {MovieList, Spinner, TagCloud},
    setup() {
        const route = useRoute()

        const {movies, error, loadMovies} = getMovies()
        
        const load = async () => {
            try {
                await loadMovies(); 
            } catch (e) {
                error.value = e.message; 
            }
        };
        
        load()

        const taggedMovies = computed(()=> {
            return movies.value.filter((movie) => movie.tags.includes(route.params.tag))
        })

        return {movies, error, taggedMovies }
    }
}
</script>

<style>
    .router-link-active {
        color: orange;
    }
</style>