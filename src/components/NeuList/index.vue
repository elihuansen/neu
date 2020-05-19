<template>
  <div class="nue-list"
       :style="`height: ${listTotalHeight}px`">
    <div v-if="loading" class="nue-list-loading">
      LOADING ...
    </div>
    <div v-else class="nue-list-item"
         v-for="option in options" :key="option.key"
         @click="handleMenuItemClick(option)">
      {{ option.label }}
    </div>
  </div>
</template>

<script>

  const MENU_ITEM_HEIGHT = 50;

  export default {
    name: 'NeuList',
    props: ['options', 'collapsed', 'loading'],

    methods: {
      handleMenuItemClick(option) {
        const { label, key, value } = option;
        this.$listeners.click({ label, key, value });
      },
    },

    computed: {
      listTotalHeight() {
        if (this.loading && !this.collapsed) {
          return MENU_ITEM_HEIGHT;
        } else if (this.collapsed) {
          return 0;
        }
        return this.options.length * MENU_ITEM_HEIGHT;
      },
    },

    watch: {
      loading(val) {
        console.log(val);
      }
    }
  };
</script>

<style scoped lang="scss">

  @import './src/style/themes/default';

  .nue-list {
    position: absolute;
    z-index: 1;
    overflow: scroll;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: $surface-color-2;
    transition: height $transition-duration;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    box-shadow: 4px 4px 6px 1px rgba(0,0,0,0.1);
    max-height: $list-max-height;
  }

  .nue-list-item {
    display: flex;
    align-items: center;
    height: 50px;
    padding: 10px;
    transition: all $transition-duration;
    cursor: pointer;
  }
  .nue-list-item:hover {
    background-color: $list-hover-color;
  }

  .nue-list-loading {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    padding: 10px;
    transition: all $transition-duration;
  }

</style>
