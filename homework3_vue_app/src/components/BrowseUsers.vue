<template>
  <section>
    <Header/>
    <div class="main-container">
      <div v-for='profile in profiles' :key='profile.id'>
        <div class="profile">
          <h2>{{ profile.firstname }} {{ profile.lastname }}</h2>
          <img :src="profile.avatar" :alt="profile.firstname + ' ' +  profile.lastname">
          <button class="follow-button">Follow</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import Header from "./Header";

export default {
  name: "BrowseUsers",
  components: {
    Header
  },
  computed: {
    profiles() {
      return this.$store.getters.allProfiles
    }
  },
  mounted() {
    this.$store.dispatch("getProfiles");
  },
}
</script>

<style scoped>


</style>