<template>
    <div class="home">
        <p>{{ movieOne.name }} - {{ movieOne.rating }}</p>
        <button @click="updateMovieOne">Movie one</button>
        <p>{{ movieTwo.name }} - {{ movieTwo.rating }}</p>
        <button @click="updateMovieTwo">Movie Two</button>
    </div>
</template>

<script>
import { reactive, ref } from 'vue'
export default {
    name: 'HomeView',
    setup() {
        const movieOne = ref({ name: 'titanic', rating: 4 })
        const movieTwo = reactive({ name: 'avatar', rating: 6 })
        const updateMovieOne = () => {
            movieOne.value.rating++
        }

        const updateMovieTwo = () => {
            movieTwo.rating++
        }

        return { movieOne, movieTwo, updateMovieTwo, updateMovieOne }
    },
}
</script>
