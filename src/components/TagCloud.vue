<template>
  <div class="tags">
    <h3>tags</h3>
    <div v-for="tag in tags" :key="tag">
        <router-link :to="{ name: 'Tags', params: {tag: tag }}">
            #{{ tag  }}
        </router-link>
    </div>
  </div>
</template>

<script>
import useTags from '../composables/useTags'

export default {
    props: ['movies'],
    setup(props) {
        const { tags } = useTags(props.movies)

        return { tags }
    }
}
</script>

<style>
    .tags {
        position: fixed;
        left: 0;
        top: 0;
        padding: 15px;
    }
</style>