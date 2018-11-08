<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
    
    export default {
        name: 'App',
        created() {
            this.$store.dispatch('User/get_user_info')
            this.$store.dispatch('Product/setCarList')
            this.$store.dispatch('User/get_address_list')
            this.$store.dispatch('User/remove_address_list')
        }
    }
</script>

<style>
    @import url('../static/css/reset.css');
    @import url('../static/css/animate.min.css');
</style>