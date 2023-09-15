<template>
  <header>
    <h1>Movie Collection</h1>

    <nav>
        <router-link :to="{name: 'Home' }" style="padding-right: 10px;">
            Home
        </router-link>
        <router-link :to="{name: 'AddMovie' }">
            Add Movie
        </router-link>
    </nav>
  </header>
</template>

<script>
export default {

}
</script>

<style>

</style>