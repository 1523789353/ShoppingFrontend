<template>
  <div id="AppContent">
    <topbar :online="online" :username="username" :userid="userid" />
    <router-link to="/">MainPage</router-link> |
    <router-link to="/Detail">Detail</router-link>
    <router-view :online="online" :username="username" :userid="userid" />
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
  text-decoration: none;
  outline: none;
}

html::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

html::-webkit-scrollbar-thumb {
  border-radius: 6px;
  background-color: #aaa;
}
</style>

<script>
console.log(jQuery.fn.jquery);
import Topbar from "@/components/Topbar.vue";
export default {
  name: "App",
  data() {
    return {
      online: false,
      username: "皇家养猪场",
      userid: "1523789353",
    };
  },
  components: {
    Topbar,
  },
};
</script>