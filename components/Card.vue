<template>
  <div>
    <b-card :title="title" tag="article" style="max-width: 20rem" class="mb-2">
      <b-card-text>
        {{ truncatedDescription }}
      </b-card-text>

      <!-- <b-button :href="'/post/' + id" variant="primary">More</b-button> -->
      <nuxt-link :to="'/post/' + id">
        <b-button variant="outline-primary">More</b-button>
      </nuxt-link>
    </b-card>
  </div>
</template>

<script>
export default {
  props: ["id", "title", "description"],

  computed: {
    truncatedDescription() {
      const words = this.description.split(" ");
      if (words.length > 15) {
        return words.slice(0, 15).join(" ") + " ...";
      } else {
        return this.description;
      }
    },
  },
};
</script>