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
export default {
    setup() {
        const title = ref('')
        const body = ref('')
        const tag = ref('')
        const tags = ref([])
        const error = ref(null)

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
                let request = await fetch('http://localhost:3000/movies', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(movie),
                })

                if(!request.ok) {
                    throw Error('Bad request')
                }
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