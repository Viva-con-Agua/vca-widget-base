<template>
  <div id="app">
    <VcAFrame title="Page Frame">
      <VcAColumn size="90%">
        <VcABox :first="true" title="First Box">
          <template slot="header">
            Additional Information
          </template>
          <img alt="Vue logo" src="./assets/logo.png">
        </VcABox>
        <VcABox title="Second Box">
          <div class="tags">
            <VcAFilterTag field="Filter Tag" value="With Value" />
            <VcAFilterTag field="No Value" />
          </div>
        </VcABox>
      </VcAColumn>
      <VcAColumn>
        <VcABox :first="true" title="Third Box">
          <VcAInfoBox>VcA information box</VcAInfoBox>
        </VcABox>
      </VcAColumn>
    </VcAFrame>
  </div>
</template>

<script>
import VcABox from './components/VcABox.vue'
import VcAColumn from './components/VcAColumn.vue'
import VcAFrame from './components/VcAFrame.vue'
import VcAInfoBox from './components/VcAInfoBox.vue'
import VcAFilterTag from './components/VcAFilterTag.vue'

export default {
  name: 'app',
  components: {
    VcABox, VcAColumn, VcAFrame, VcAInfoBox, VcAFilterTag
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

  .tags {
    display: flex;
    flex-direction: row;
  }
</style>
