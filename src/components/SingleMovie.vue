<template>
    <div class="movie">
        <h3>{{ movie.title }}</h3>
        <p>{{ snippet }}</p>
    </div>
</template>

<script>
import { computed } from "vue";

export default {
    props: ['movie'],
    setup(props) {
        const snippet = computed(()=> {
            return props.movie.intro.substring(0, 100) + '...'
        })
        
        return { snippet }
    }
}
</script>

<style>

</style>