<template>
    <div class="movie">
        <h2>{{ movie.title }}</h2>
        <h3>{{ snippet }}</h3>
        <span style="padding-left: 10px;" v-for="tag in movie.tags" :key="tag"> #{{ tag }}</span>
    </div>
</template>

<script>
import { computed } from "vue";

export default {
    props: ['movie'],
    setup(props) {
        const snippet = computed(()=> {
            console.log(props.movie)
            return props.movie.body.substring(0, 100) + '...'
        })
        
        return { snippet }
    }
}
</script>

<style>

</style>