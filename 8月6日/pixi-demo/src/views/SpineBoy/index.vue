<template>
  <div>
    <div>
      <div
        v-for="item in animation"
        :key="item.name"
        @click="toggleAnimation(item.name, item.loop)"
        class="animation-button"
      >
        {{ item.label }}
      </div>
    </div>
    <div id="gameContainer"></div>
  </div>
</template>

<script setup>
import { PIXI, createPIXIApp } from '@/utils/pixiUtils' // Assuming you have a utility function to create the PixiJS app
import { Spine } from 'pixi-spine'
import { onMounted, ref } from 'vue'

const app = ref()

const spineBoy = ref()
function loadSpineResources() {
  PIXI.Assets.load(
    'https://lejiale-static.oss-cn-beijing.aliyuncs.com/spine/spineBody/spineboy-pro.json',
  )
    .then((res) => {
      console.log('Spine data loaded:', res)
      spineBoy.value = new Spine(res.spineData)
      spineBoy.value.x = app.value.screen.width / 2
      spineBoy.value.y = app.value.screen.height / 2
      spineBoy.value.scale.set(0.4)
      toggleAnimation('portal', false) // 默认播放传送动画
      setTimeout(() => {
        toggleAnimation('idle', true) // 默认播放待机动画
      }, 2000)

      app.value.stage.addChild(spineBoy.value)
    })
    .catch((error) => {
      console.error('Error loading Spine resources:', error)
    })
}

const animation = ref([
  { name: 'aim', loop: false, label: '瞄准' },
  { name: 'death', loop: false, label: '死亡' },
  { name: 'hoverboard', loop: true, label: '滑板' },
  { name: 'idle', loop: true, label: '待机' },
  { name: 'idle-turn', loop: false, label: '待机转身' },
  { name: 'jump', loop: false, label: '跳跃' },
  { name: 'portal', loop: false, label: '传送' },
  { name: 'run', loop: true, label: '奔跑' },
  { name: 'run-to-idle', loop: false, label: '跑到待机' },
  { name: 'shoot', loop: false, label: '射击' },
  { name: 'walk', loop: true, label: '行走' },
])

function toggleAnimation(animationName, loop = false) {
  if (spineBoy.value) {
    spineBoy.value.state.setAnimation(0, animationName, loop)
  }
}

onMounted(() => {
  app.value = createPIXIApp('gameContainer')
  loadSpineResources()
})
</script>

<style lang="scss" scoped>
.animation-button {
  display: inline-block;
  padding: 10px 20px;
  margin: 5px;
  background-color: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e0e0e0;
  }
}
</style>
