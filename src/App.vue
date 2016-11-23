<template>

  <div>
    

    <!--<myheader></myheader>-->
    <!--<router-link to='/user'>user</router-link>-->

    <router-view class="view" keep-alive transition transition-mode="out-in">

    </router-view>
  </div>
</template>

<script>

import myheader from './components/header.vue'

export default {
  components: {myheader}
}
</script>

<style>

</style>