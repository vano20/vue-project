<template>
  <div class="about">
    <h1>{{ text }}</h1>
  </div>
</template>

<script>
const FALLBACK = "the";

export default {
  name: "AboutView",
  props: {
    preposition: {
      type: String,
      default: "",
    },
  },
  computed: {
    text() {
      return `This is ${this.preposition || FALLBACK} about page`;
    },
  },
};
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
