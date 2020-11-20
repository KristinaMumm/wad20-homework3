<template>
  <section>
    <Header/>
    <div class="main-container">
      <div v-for='profile in profiles' :key='profile.id'>
        <div class="profile">
          <img :src="profile.avatar" :alt="profile.firstname + ' ' +  profile.lastname">
          <h2>{{ profile.firstname | capitalize }} {{ profile.lastname | capitalize }}</h2>
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
      if (followButton.innerHTML === "Follow"){
        followButton.innerHTML = "Followed"
      } else {
        followButton.innerHTML = "Follow"
      }
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

.main-container {
  width: 50%;
  min-height: 100%;
  margin: auto auto;
  padding: 90px 15px 15px 15px;
  background-color: #ffffff;
  column-count: 2;
  justify-content: center;
}

.profile {
  width: 45%;
  display: inline-block;
  border: 1px solid #dedede;
  border-radius: 5px;
  text-align: center;
  margin: 1%;
}
.profile img{
  width: 75px;
  height: 75px;
  border-radius: 100%;
  object-fit: cover;
  object-position: top;
  margin: 5px;
}

.profile h2{
  font-size: 16px;
}

.follow-button{
  background-color: #82008f;
}

.follow-button.followed{
  background-color: #ffffff;
  border: 1px solid #82008f;
  color: #82008f;
}

</style>