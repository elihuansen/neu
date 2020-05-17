<template>
  <div id="app">
    <Consumer msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Consumer from './components/Consumer.vue';

export default Vue.extend({
  name: 'App',
  components: {
    Consumer
  },
});
</script>

<style lang="scss">

</style>
