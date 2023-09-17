import { ref } from 'vue'
import { projectFireStore } from '../firebase/config'

const getMovies = () => {
    const movies = ref([])
    const error = ref(null)

    const loadMovies = async () => {
        try {
            const res = await projectFireStore.collection('movies').get()

            movies.value = res.docs.map((doc) => {
                return {...doc.data(), id: doc.id }
            }) 
        } catch (err) {
            error.value = err.message
            console.log(error.value)
        }
    }

    return {movies, error, loadMovies}
}

export default getMovies