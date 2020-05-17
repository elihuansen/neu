<template>
  <div class="neu-container-icon add" :style="$attrs.style">
    <input v-model="value" class="neu-field" :placeholder="placeholder" />
    <nue-icon :icon="icon" />
  </div>
</template>

<script>

  import NueIcon from "../NeuIcon/index";
  export default {
    name: "NeuInput",
    components: {NueIcon},
    props: ['placeholder', 'icon', 'value'],

    watch: {
      value(val) {
        this.$listeners.change(val);
      }
    },
  };
</script>

<style scoped>

</style>