<template>
  <div id="app">
    <VcAFrame title="Test Frame">
      <VcAColumn size="90%">
        <VcABox :first="true" title="Test Box 1">
          <img alt="Vue logo" src="./assets/logo.png">
        </VcABox>
        <VcABox title="Test Box 2">
          Abstand
        </VcABox>
      </VcAColumn>
      <VcAColumn>
        <VcABox :first="true" title="Test Box 3">
          <VcAInfoBox>test information</VcAInfoBox>
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

export default {
  name: 'app',
  components: {
    VcABox, VcAColumn, VcAFrame, VcAInfoBox
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
</style>
