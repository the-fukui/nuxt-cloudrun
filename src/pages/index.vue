<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        nuxt-on-cloud-run
      </h1>
      <h2 class="subtitle">
        Run Run Run♪
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
        <div style="margin-top:30px;">
          https://the-fukui.com/のAPIより
        </div>
        <div
          style="margin-top:30px;"
          v-html="text.rawContent"
        />
      </div>
    </div>
  </div>
</template>
<script>
import Logo from '~/components/Logo.vue'
export default {
  components: {
    Logo
  },
  async asyncData({
    $axios
  }) {
    let result = {}
    result.ssrText = 'ここはSSRされた文章です！'
    result.text = await $axios.get(`https://the-fukui.microcms.io/api/v1/blog/css-selector-wildcard`, {
      headers: {
        'X-API-KEY': '1e1de4f9-ef38-472c-ba6c-acb8e877d624'
      }
    }).then(result => {
      return result.data
    }).catch(e => {
      console.log(e)
    })
    return result
  }
}

</script>
<style>
  .container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }

</style>
