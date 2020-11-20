<template>
  <section>
    <Header/>
    <div class="main-container">
      <div v-for='profile in profiles' :key='profile.id'>
        <div class="profile">
          <h2>{{ profile.firstname | capitalize }} {{ profile.lastname | capitalize }}</h2>
          <img :src="profile.avatar" :alt="profile.firstname + ' ' +  profile.lastname">
          <button id="follow" class="follow-button" @click="toggleFollow($event.target)">Follow</button>
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
  methods: {
    toggleFollow: function (followButton) {

      followButton.classList.toggle("follow-button-followed");

    }
  },
  filters: {

    capitalize: function (value) {

      if (!value) return;

      return value.toString().toUpperCase();

    }

  }
}
</script>

<style scoped>

.follow-button{
  background-color: #82008f;
}

.follow-button-followed{
  background-color: #ffffff;
  border: 1px solid #82008f;
  color: #82008f;
}

</style>