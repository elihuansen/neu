<template>
  <div class="main">
    <div class="form-segment">
      <div class="grants-form">
        <h1>Grants</h1>
        <p>
          <strong>Unsure where to begin?</strong>
          Start with entering your UEN and see what
          grants are available to you & what your industry is using:
        </p>
        <NueSearch style="width: 100%"
                   placeholder="Company UEN"
                   :options="searchOptions"
                   :delay="300"
                   :async="true"
                   @search="handleSearch"
                   @select="handleSelect" />
        <br/>
        <div class="flex">
          <NeuMenu style="flex: 1"
                   placeholder="Industry"
                   :options="options"
                   @select="handleSelect"/>
          <NeuButton class="fluid"
                     style="margin-left: 15px; width: auto; height: auto;"
                     @click="handleSubmit">
            GET STARTED
          </NeuButton>
        </div>
      </div>

      <div class="divider">
        <hr/>
        <span>OR</span>
        <hr/>
      </div>

      <div class="software-form">
        <h1>Software</h1>
        <p>
          <strong>Know what your company needs?</strong>
          Search for the software you need
          and professionals to implement the technology for you:
        </p>
        <div class="flex">
          <NeuMenu style="flex: 1"
                   placeholder="Software Type"
                   :options="options"
                   @select="handleSelect"/>
          <NeuButton class="fluid"
                     style="margin-left: 15px; width: auto; height: auto;"
                     @click="handleSubmit">
            GET STARTED
          </NeuButton>
        </div>
      </div>
    </div>
    <div style="height: 10000px">

    </div>
  </div>
</template>

<script>
  import NeuMenu from "./NeuMenu/index";
  import NeuButton from "./NeuButton/index";
  import NueSearch from "./NeuSearch/index";
  import "../style/index.scss";
  export default {
    name: "index",
    components: {NeuMenu, NueSearch, NeuButton },

    data() {
      return {
        searchOptions: []
      }
    },

    methods: {
      handleSearch(val) {
        return new Promise(resolve => {
          setTimeout(() => {
            const opts = [
              { label: 'First', value: 'first', key: '1' },
              { label: 'Second', value: 'second', key: '2' },
              { label: 'Third', value: 'third', key: '3' },
            ];
            this.searchOptions = opts.filter(opt => opt.value.includes(val.toLowerCase()));
            resolve();
          }, 1000);
        });
      },
      handleSelect(option) {
        console.log('Selected:', option);
      },
      handleSubmit() {
        console.log('submitted');
      }
    },
    computed: {
      options() {
        return [
          {
            key: '1',
            label: 'First',
            value: 'first'
          },
          {
            key: '2',
            label: 'Second',
            value: 'second'
          }
        ]
      }
    }
  };
</script>

<style scoped>

  .main {
    width: 100vw;
  }

  .form-segment {
    max-width: 788px;
    padding: 20px;
    margin-left: 50px;
  }

  .grants-form {
    padding: 10px;
  }
  .grants-form > h1 {
    color: #D8A6FF;
    text-transform: uppercase;
    letter-spacing: 10px;
  }
  .grants-form > p {
    padding: 10px 0 15px 0;
  }

  .divider {
    display: flex;
    align-items: center;
    opacity: 0.5;
    margin: 15px 0 15px 0;
  }
  .divider > hr {
    flex: 1;
    margin: 10px;
    border-top: 1px solid rgba(112, 114, 114, 0.4);
  }

  .software-form {
    padding: 10px;
  }
  .software-form > h1 {
    color: #80B2FF;
    text-transform: uppercase;
    letter-spacing: 10px;
  }
  .software-form > p {
    padding: 10px 0 15px 0;
  }

  .flex {
    display: flex;
    justify-content: space-between;
  }

</style>
