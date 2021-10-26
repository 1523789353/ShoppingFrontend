<template>
  <div id="AppContent">
    <topbar :online="online" :username="username" :userid="userid"/>
    <router-link to="/">MainPage</router-link> |
    <router-link to="/Home">Home</router-link> |
    <router-link to="/about">About</router-link>
    <router-view class="test"/>
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
  text-decoration: none;
  outline: none;
}

.test {
    background: #dddddd;
}
</style>

<script>
console.log(jQuery.fn.jquery);
import Topbar from '@/components/Topbar.vue'
export default {
  name: "App",
  data (){
    return {
      online: false,
      username: null,
      userid: null,
    }
  },
  components: {
      Topbar,
  },
}
</script>