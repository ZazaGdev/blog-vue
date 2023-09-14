import { ref } from 'vue'

const getMovies = () => {
    const movies = ref([])
    const error = ref(null)

    const loadMovies = async () => {
        try {
            await new Promise(resolve => {
                setTimeout(resolve, 1000);
            })

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

export default getMovies