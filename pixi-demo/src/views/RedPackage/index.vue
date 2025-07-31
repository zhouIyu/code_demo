<template>
  <div>
    <div id="gameContainer3"></div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import RedPackage from './index.js'

const redPackage = ref()

onMounted(() => {
  console.log('Red Package view mounted.')
  // You can add any initialization logic here if needed
  redPackage.value = new RedPackage()
  redPackage.value.init()
})

onUnmounted(() => {
  redPackage.value.destroy()
})
</script>

<style lang="scss" scoped>
#gameContainer3 {
  width: 100%;
  height: 100%;
  inset: 0;
}
</style>
