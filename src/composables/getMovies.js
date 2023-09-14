import { ref } from 'vue'

const getPosts = () => {
    const movies = ref([])
    const error = ref(null)

    const loadMovies = async () => {
        try {
            let data = await fetch('http://localhost:3000/movies')
            if(!data.ok) {
                throw Error('no data available')
            }

            movies.value = await data.json()
        } catch (err) {
            error.value = err.message
            console.log(error.value)
        }
    }

    return {movies, error, loadMovies}
}

export default getPosts