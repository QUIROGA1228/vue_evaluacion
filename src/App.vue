<template>
  <router-link v-if="this.$route.path == '/account'" class="link" to="/account">
    Tu cuenta</router-link
  >

  
    <router-view></router-view>

 
</template>

<style scoped>
.link {
  margin-right: 1rem;
  color: red;
}
</style>