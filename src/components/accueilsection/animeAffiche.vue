<template>
  <div>
<b-container class="bv-example-row">
    <b-row>
        <b-col v-for="anime in animes" :key="anime.id">
        <b-card
            :title="anime.nom"
            :img-src="require(`@/assets/${anime.images[0].image}.jpg`)"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20em"
            class="mb-2"
            
         >
    <b-card-text>
{{ anime.description }}
    </b-card-text>
<router-link to="/">
    <b-button variant="primary">Go somewhere</b-button>
</router-link>
  </b-card>
</b-col>
</b-row>
</b-container>
</div>
</template>

<script>
export default {
name: "animeAffiche",
props: ["animes"],
};
</script>

<style>

</style>

