<template>
    <div class="movie">
        <router-link :to="{ name:'Details', params: {id: movie.id}}">
            <h2>{{ movie.title }}</h2>
        </router-link>

        <h3>{{ snippet }}</h3>
        <span style="padding-left: 10px;" v-for="tag in movie.tags" :key="tag"> 
            <router-link :to="{name: 'Tags', params: {tag: tag}}">
                #{{ tag }}
            </router-link>
        </span>
    </div>
</template>

<script>
import { computed } from "vue";

export default {
    props: ['movie'],
    setup(props) {
        const snippet = computed(()=> {
            return props.movie.body.substring(0, 100) + '...'
        })
        
        return { snippet }
    }
}
</script>

<style>

</style>