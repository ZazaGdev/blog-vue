<template>
    <div class="home">
        <h1>Home</h1>
        <MovieList :movies="movies"/>
    </div>
</template>

<script>
import MovieList from '../components/MovieList.vue'
import { ref, toRaw } from 'vue'

export default {
    name: 'HomeView',
    components: { MovieList },
    setup() {
        const movies = ref([])
        const error = ref(null)

        const loadMovies = async () => {
            try {
                let data = await fetch('http://localhost:3000/movies')
                if(!data.ok) {
                    throw Error('no data available')
                }
            } catch (err) {
                console.log(err);
            }
        }

        loadMovies()
        
        return {movies}
    },
}
</script>
