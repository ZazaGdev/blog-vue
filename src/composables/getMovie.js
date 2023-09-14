import {ref} from 'vue'

const getMovie = (id) => {
    const movie = ref(null)
    const error = ref(null)

    const loadMovie = async () => {
        try {
            await new Promise(resolve => {
                setTimeout(resolve, 1000);
            })

            let data = await fetch('http://localhost:3000/movies/' + id)
            if(!data.ok) {
                throw Error('movie does not exist')
            }

            movie.value = await data.json()
        } catch (err) {
            error.value = err.message
            console.log(error.value)
        }
    }

    return {movie, error, loadMovie}
}

export default getMovie