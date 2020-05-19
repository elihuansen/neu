<template>
  <div class="neu-container-icon"
       :style="$attrs.style"
       @click="handleClick"
       @focusout="handleClickOutside"
       tabindex="0">
    <div class="neu-field">
      {{ select || placeholder }}
    </div>
    <nue-icon :class="iconClass" icon="keyboard_arrow_down" />
    <nue-list :collapsed="collapsed"
              :options="options"
              @click="handleMenuItemClick" />
  </div>
</template>

<script>

  import NueIcon from "../NeuIcon/index";
  import NueList from "../NeuList/index";

  export default {
    name: 'NeuMenu',
    components: {NueList, NueIcon},
    props: ['options', 'placeholder'],

    data() {
      return {
        select: '',
        collapsed: true,
      }
    },

    methods: {
      handleClick() {
        this.collapsed = !this.collapsed;
      },
      handleClickOutside() {
        this.collapsed = true;
      },
      handleMenuItemClick(option) {
        this.select = option.label;
        this.$listeners.select(option);
      }
    },

    computed: {
      iconClass() {
        return this.collapsed ? 'dropdown-icon' : 'dropdown-icon rotated';
      },
    },

  };
</script>

<style scoped lang="scss">

  @import '../../style/themes/default';

  .dropdown-icon {
    transform: rotate(0deg);
    transition: all $transition-duration;
  }

  .dropdown-icon.rotated {
    transform: rotate(180deg);
  }
</style>