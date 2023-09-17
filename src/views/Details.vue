<template>
    <div v-if="error">{{ error }}</div>
    <div v-if="movie" class="movie">
        <h3>{{ movie.title }}</h3>
        <p>{{ movie.body }}</p>
        <button @click="deleteMovie">Delete Movie</button>
    </div>
    <div v-else>
        <Spinner/>
    </div>
</template>

<script>
import getMovie from '../composables/getMovie'
import Spinner from '../components/Spinner'
import { projectFireStore } from '../firebase/config'
import { useRouter } from 'vue-router'

export default {
    props: ['id'],
    components: { Spinner },
    setup(props) {
        const {movie, error, loadMovie} = getMovie(props.id)
        const router = useRouter()
        loadMovie()

        const deleteMovie = async () => {
            await projectFireStore.collection('movies')
            .doc(props.id)
            .delete()

            router.push({name:"Home"})
        }

        return { movie, error, deleteMovie}
    }
}
</script>

<style>

</style>