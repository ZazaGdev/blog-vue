<template>
  <div class="addMovie">
    <form @submit.prevent="handleAddingMovie" style="display: flex; justify-content: center; align-items: center; flex-direction: column;" >
        <label>Title:</label>
        <input v-model="title" type="text" required>

        <label>Content:</label>
        <textarea v-model="body" required></textarea>

        <label>Tags (hit enter to add)</label>
        <input v-model="tag" type="text" @keydown.enter.prevent="handleAddingTag">

        <span v-for="tag in tags" :key="tag"> #{{ tag }}</span>

        <button>Add movie</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { projectFireStore } from '../firebase/config'

export default {
    setup() {
        const title = ref('')
        const body = ref('')
        const tag = ref('')
        const tags = ref([])
        const error = ref(null)

        const router = useRouter()
        
        const handleAddingTag = () => {
            if(!tags.value.includes(tag.value.trim())) {
                tags.value.push(tag.value.trim())
            }

            tag.value = ''
        }

        const handleAddingMovie = async () => {
            let movie = {
                title: title.value,
                body: body.value,
                tags: tags.value,
            }

            try {
                const res = await projectFireStore.collection('movies').add(movie)

                router.push({name: 'Home'})
            } catch (err) {
                error.value = err.message
                console.log(error.value);
            }
        }

        return { title, body, tag, tags, handleAddingTag, handleAddingMovie}
    }
}
</script>

<style>

</style>