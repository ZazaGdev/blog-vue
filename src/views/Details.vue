<template>
    <div v-if="error">{{ error }}</div>
    <div v-if="movie" class="movie">
        <h3>{{ movie.title }}</h3>
        <p>{{ movie.body }}</p>
    </div>
    <div v-else>
        <Spinner/>
    </div>
</template>

<script>
import getMovie from '../composables/getMovie'
import Spinner from '../components/Spinner'

export default {
    props: ['id'],
    components: { Spinner },
    setup(props) {
        const {movie, error, loadMovie} = getMovie(props.id)

        loadMovie()

        return { movie, error}
    }
}
</script>

<style>

</style>