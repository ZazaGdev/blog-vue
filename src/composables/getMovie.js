import {ref} from 'vue'
import { projectFireStore } from '../firebase/config'

const getMovie = (id) => {
    const movie = ref(null)
    const error = ref(null)

    const loadMovie = async () => {
        try {
            const res = await projectFireStore.collection('movies').doc(id).get()

            if(!res.exists) {
                throw Error('Movie does not exist') 
            }

            movie.value = { ...res.data(), id: res.id}
        } catch (err) {
            error.value = err.message
            console.log(error.value)
        }
    }

    return {movie, error, loadMovie}
}

export default getMovie