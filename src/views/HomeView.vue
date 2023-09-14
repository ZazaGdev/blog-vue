<template>
    <div class="home">
        <MovieList :movies="movies"/>
    </div>
</template>

<script>
import MovieList from '../components/MovieList.vue'
import { ref, } from 'vue'
export default {
    name: 'HomeView',
    setup() {
        const movies = ref([
            { title: 'Titanic', intro: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque rem numquam, enim nesciunt laboriosam voluptas voluptates eveniet incidunt officiis excepturi ullam minus voluptatum veniam totam, possimus libero ab natus assumenda quis iste soluta labore, necessitatibus molestias. Aliquid ratione tempora harum accusamus officiis nostrum cumque. Veniam iste dignissimos, aut illo repellat temporibus animi quod vitae dolorum nostrum inventore velit sit natus omnis praesentium ipsum quam porro amet explicabo id numquam cum earum labore quae. Quam, sunt temporibus quia corporis omnis est inventore, maiores, voluptatem nobis perferendis quisquam beatae eligendi ratione ipsa. Culpa omnis iure, recusandae voluptatem praesentium animi maiores vel fugit mollitia, deleniti impedit dignissimos neque libero provident reiciendis molestiae? Deleniti aliquid debitis officia quas repellendus vitae officiis expedita rerum reiciendis sequi? Quas magni nam, ut velit harum maiores eos facilis consectetur non soluta dolores voluptatum minima at, vero rerum? Soluta nulla, aliquid similique hic blanditiis minima rerum! Ex nisi laboriosam id? Deleniti repellat eveniet magnam, possimus cupiditate eaque aliquam consequuntur doloribus qui saepe temporibus est quas delectus error ducimus aliquid odit laudantium quod velit voluptate perspiciatis voluptas! Repellendus voluptatibus corporis ratione, repellat blanditiis quasi molestias dolore, provident voluptatem est tempore hic eligendi corrupti explicabo. Expedita quibusdam neque enim voluptates? Nemo.', id: 0 },
            { title: 'Avatar', intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ullam reprehenderit maxime dolores beatae temporibus, ea perspiciatis illo amet consequatur. Deleniti aliquid debitis officia quas repellendus vitae officiis expedita rerum reiciendis sequi? Quas magni nam, ut velit harum maiores eos facilis consectetur non soluta dolores voluptatum minima at, vero rerum? Soluta nulla, aliquid similique hic blanditiis minima rerum! Ex nisi laboriosam id? Deleniti repellat eveniet magnam, possimus cupiditate eaque aliquam consequuntur doloribus qui saepe temporibus est quas delectus error ducimus aliquid odit laudantium quod velit voluptate perspiciatis voluptas! Repellendus voluptatibus corporis ratione, repellat blanditiis quasi molestias dolore, provident voluptatem est tempore hic eligendi corrupti explicabo. Expedita quibusdam neque enim voluptates? Nemo.', id: 1 }
        ]);
        return {movies};
    },
    components: { MovieList }
}
</script>
