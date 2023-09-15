import { ref } from 'vue'

const useTags = (movies) => {
    const tags = ref([])
    const tagSet = new Set()

    movies.forEach(movie => {
        movie.tags.forEach(tag => {
             tagSet.add(tag)
        })
    });

    tags.value = [...tagSet]

    return { tags }
}

export default useTags