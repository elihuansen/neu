<template>
  <div class="neu-search" :style="$attrs.style">
    <neu-input v-bind="$attrs"
               style="width: 100%;"
               @change="handleChange"
               :placeholder="placeholder"
               :value="search"
               icon="search" />

    <nue-list class="neu-search-list"
              :loading="loading"
              :collapsed="collapsed"
              :options="search && options"
              @click="handleMenuItemClick" />
  </div>
</template>

<script>
  import NeuInput from "../NeuInput/index";
  import NueList from "../NeuList/index";

  let t;

  export default {
    name: 'NeuSearch',
    props: ['placeholder', 'delay', 'async', 'options'],
    components: {NueList, NeuInput},
    data() {
      return {
        loading: false,
        collapsed: true,
        search: '',
      }
    },
    methods: {
      handleChange(val) {
        if (val === this.search) {
          return;
        }
        clearTimeout(t);
        this.search = val;
        this.collapsed = false;

        if (this.async && val) {
          this.loading = true;
          t = setTimeout(async () => {
            await this.$listeners.search(val);
            this.loading = false;
          }, this.delay);
        } else {
          this.loading = false;
          this.$listeners.search(val);
        }
      },

      handleMenuItemClick(option) {
        this.search = option.label;
        this.collapsed = true;
        this.$listeners.select(option);
      }
    }
  };
</script>

<style scoped lang="scss">
  .neu-search {
    position: relative;
  }

  .neu-search-list {
    position: absolute;
    top: 100%;
  }
</style>
