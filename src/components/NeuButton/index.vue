<template>
  <button :class="'neu-container ' + (clicked && 'indent')"
          @mousedown="clicked = true"
          @mouseup="clicked = false"
          @mouseleave="clicked = false">
    <span class="content">
      <slot/>
    </span>
  </button>
</template>

<script>
  export default {
    name: 'NeuButton',
    data() {
      return {
        clicked: false,
        indentClass: '',
      }
    },
  };
</script>

<style scoped lang="scss">

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 5px;
  }

</style>