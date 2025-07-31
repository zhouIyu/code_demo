<template>
  <div>
    <div class="animation-button" @click="clearCanvas">清空画布</div>
    <div class="animation-button" @click="destroyCanvas">销毁画布</div>
    <div class="animation-button" @click="drawRect">矩形</div>
    <div class="animation-button" @click="drawRoundRect">圆角矩形</div>
    <div class="animation-button" @click="drawChamferRect">倒角矩形</div>
    <div class="animation-button" @click="drawFilletRect">倒圆角矩形</div>
    <div class="animation-button" @click="drawCircle">圆形</div>
    <div class="animation-button" @click="drawEllipse">椭圆</div>
    <div class="animation-button" @click="drawPolygon">多边形</div>
    <div class="animation-button" @click="drawRegularPolygon">正多边形</div>
    <div class="animation-button" @click="drawTorus">环形</div>
    <div class="animation-button" @click="drawStar">星形</div>
    <div class="animation-button" @click="drawLine">折线</div>
    <div class="animation-button" @click="drawBezierCurveTo">贝塞尔曲线</div>
    <div class="animation-button" @click="drawText">文本</div>
    <div class="animation-button" @click="drawImage">图片</div>
  </div>
  <div id="gameContainer"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import '@pixi/graphics-extras'
import { PIXI, createPIXIApp } from '@/utils/pixiUtils' // Assuming you have a utility function to create the PixiJS app

const app = ref()
onMounted(() => {
  app.value = createPIXIApp('gameContainer')
  // Additional setup can be done here, such as loading assets or initializing scenes
  console.log('PixiJS application created and mounted.')
})

// 清除画布, <canvas> 元素还是留在页面上
function clearCanvas() {
  app.value.destroy()
  console.log('清空画布')
}

// 销毁画布
function destroyCanvas() {
  app.value.destroy(true)
  console.log('销毁画布')
}

// 画矩形
function drawRect() {
  // 创建图像类
  const graphics = new PIXI.Graphics()
  // 设置填空颜色 beginFill(颜色,不透明度)
  graphics.beginFill(0xffd900, 1)
  // 创建矩形 drawRect(x,y,w ,h)
  graphics.drawRect(50, 50, 200, 100)
  // 绘制
  graphics.endFill()
  // 将绘制好的图形添加到画布中
  app.value.stage.addChild(graphics)
}

// 圆角矩形
function drawRoundRect() {
  const graphics = new PIXI.Graphics()
  graphics.beginFill(0xff0099, 1)
  // 创建圆角矩形 drawRoundedRect(x,y,w,h,radius)
  graphics.drawRoundedRect(50, 160, 200, 100, 10)
  graphics.endFill()
  app.value.stage.addChild(graphics)
}

// 倒角矩形
function drawChamferRect() {
  const graphics = new PIXI.Graphics()
  graphics.beginFill(0xff0099, 1)
  // 创建倒角矩形 drawChamferRect(x,y,w,h,chamfer) chamfer 控制倒角切口大小
  graphics.drawChamferRect(50, 50, 200, 100, 100)
  graphics.endFill()
  app.value.stage.addChild(graphics)
}

// 倒圆角矩形
function drawFilletRect() {
  const graphics = new PIXI.Graphics()
  graphics.beginFill(0xff0099, 1)
  // 创建倒圆角矩形 drawFilletRect(x,y,w,h,fillet) fillet表示圆角半径，可以为负数
  graphics.drawFilletRect(50, 50, 200, 100, -10)
  graphics.endFill()
  app.value.stage.addChild(graphics)
}

// 圆形
function drawCircle() {
  const graphics = new PIXI.Graphics()
  graphics.beginFill(0x009900, 1)
  // 创建圆形 drawCircle(x, y, r) 圆心坐标， 圆心半径
  graphics.drawCircle(100, 100, 100)
  graphics.endFill()
  app.value.stage.addChild(graphics)
}

// 椭圆
function drawEllipse() {
  const graphics = new PIXI.Graphics()
  graphics.beginFill(0x009900, 1)
  // 创建圆形 drawEllipse(x, y, w, h) 圆心坐标，w 椭圆宽，h椭圆高
  graphics.drawEllipse(100, 100, 100, 50)
  graphics.endFill()
  app.value.stage.addChild(graphics)
}

// 多边形
function drawPolygon() {
  const graphics = new PIXI.Graphics()
  graphics.beginFill(0xffd900, 1)
  const path = [30, 30, 100, 50, 100, 180, 30, 200]

  graphics.drawPolygon(path)
  graphics.endFill()
  app.value.stage.addChild(graphics)
}

// 正多边形
function drawRegularPolygon() {
  const graphics = new PIXI.Graphics()
  graphics.beginFill(0xffd900, 1)
  // 创建正多变 drawRegularPolygon(x,y, radius, 边数， 旋转弧度)
  graphics.drawRegularPolygon(100, 100, 100, 5, (125 * Math.PI) / 2)
  graphics.endFill()
  app.value.stage.addChild(graphics)
}

// 环形
function drawTorus() {
  const graphics = new PIXI.Graphics()
  graphics.beginFill(0xffd900, 1)
  // drawTorus(x,y, innerRadius, outerRadius, starArc, endArc)
  graphics.drawTorus(100, 100, 50, 70)
  graphics.endFill()
  app.value.stage.addChild(graphics)
}

// 星形
function drawStar() {
  const graphics = new PIXI.Graphics()
  graphics.beginFill(0xffd900, 1)
  // drawStar(x,y, points, radius, innerRadius, rotation)
  graphics.drawStar(100, 100, 5, 30, 20, 0)
  graphics.endFill()
  app.value.stage.addChild(graphics)
}

// 折线
function drawLine() {
  const graphics = new PIXI.Graphics()

  // 设置描边颜色 lineStyle(宽度， 颜色，透明度)
  graphics.lineStyle(3, 0xffd900, 1)

  // 创建折线
  graphics.moveTo(10, 40)
  graphics.lineTo(40, 20)
  graphics.lineTo(50, 80)
  graphics.lineTo(100, 70)

  // graphics.closePath() // 闭合

  app.value.stage.addChild(graphics)
}

function drawBezierCurveTo() {
  const graphics = new PIXI.Graphics()

  // 设置描边颜色 lineStyle(宽度， 颜色，透明度)
  graphics.lineStyle(3, 0xffd900, 1)

  // 创建折线
  graphics.moveTo(10, 40)
  graphics.bezierCurveTo(40, 20, 50, 80, 100, 70)

  app.value.stage.addChild(graphics)
}

// 文本
function drawText() {
  const text = new PIXI.Text('你好！', {
    fill: 'red',
  })
  // text.x = 100
  // text.y = 50
  // 设置位置
  text.position.set(100, 50)
  app.value.stage.addChild(text)
}

// 图片
function drawImage() {
  // 加载图片
  const texture = PIXI.Texture.from('https://pixijs.io/examples/examples/assets/bunny.png')
  // 将纹理放在“精灵“的图形对象上
  const sprite = new PIXI.Sprite(texture)
  sprite.position.set(100, 100)
  sprite.scale.set(2) // 设置缩放
  console.log(sprite)
  // 将精灵添加到画布中
  app.value.stage.addChild(sprite)
}
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
