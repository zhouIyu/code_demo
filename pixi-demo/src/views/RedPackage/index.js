import { PIXI, PIXISound, PIXISpine } from "@/utils/pixiUtils"
import { gsap } from "gsap"
import audioList from './data/audios.js'
import manifest from "./data/manifest.js"
// import studentList from './data/student.js'
console.log(manifest)

function getScreenScaledSize(referenceWidth, referenceHeight) {
  const gameContainer = document.querySelector('#gameContainer3')
  const baseWidth = referenceWidth;
  const baseHeight = referenceHeight;
  const currentWidth = gameContainer.clientWidth;
  const currentHeight = gameContainer.clientHeight;
  const widthRatio = currentWidth / baseWidth;
  const heightRatio = currentHeight / baseHeight;
  // 计算并返回缩放后的尺寸
  return Math.min(widthRatio, heightRatio);
}

export default class RedPackage {
  constructor() {
    this.app = null
    this.studentList = []
    // 主舞台
    this.gameMainContainer = null
    // title容器
    this.titleContainer = null
    // 倒计时
    this.countdownTime = 10
    this.countdown = null
    this.countdownText = null
    this.countdownTimer = null
    // base size
    this.baseWidth = 1920
    this.baseHeight = 1080
  }

  init() {
    console.log('Initializing Red Package game...')
    // 创建 PIXI 应用
    console.log('Creating PIXI application...')
    if (this.app) {
      console.warn('PIXI application already exists, reinitializing...')
      this.app.destroy(true, { children: true })
    }
    // 设置 PIXI 应用的宽度、高度、背景颜色等属性
    console.log('Setting PIXI application properties...')
    // 这里可以根据需要调整宽度、高度、背景颜色等
    // 创建 PIXI 应用实例
    console.log('Creating PIXI application instance...')
    // 使用默认的宽度、高度和背景颜色
    const app = new PIXI.Application({
      backgroundColor: 0xffffff,
      backgroundAlpha: 0,
      resolution: window.devicePixelRatio || 1,
      autoDensity: true,
      width: this.baseWidth,
      height: this.baseHeight
    })
    const gameContainer = document.querySelector('#gameContainer3')
    gameContainer.appendChild(app.view)

    if (app.view) {
      const scale = getScreenScaledSize(this.baseWidth, this.baseHeight)
      app.view.style.width = this.baseWidth * scale + 'px'
      app.view.style.height = this.baseHeight * scale + 'px'
      window.addEventListener('resize', () => {
        const scale = getScreenScaledSize(this.baseWidth, this.baseHeight)
        app.view.style.width = this.baseWidth * scale + 'px'
        app.view.style.height = this.baseHeight * scale + 'px'
      })
    }

    this.app = app

    window.__PIXI_DEVTOOLS__ = {
      app: this.app,
    };
    this.preload()
  }

  async preload() {
    // 加载音频文件
    console.log('Preloading audio files...')
    console.log('Audio list:', audioList)
    audioList.forEach(item => {
      PIXISound.add(item.alias, {
        url: item.src,
        preload: true
      })
    })

    // 加载spine 文件
    await PIXI.Assets.init({
      manifest: {
        bundles: [manifest]
      }
    })

    PIXI.Assets.loadBundle(manifest.name, (progress) => {
      console.log(`Loading progress: ${progress * 100}%`)
      if (progress === 1) {
        this.create()
      }
    })
  }

  async create() {
    // 0. 加载主舞台
    this.gameMainContainer = new PIXI.Container()
    this.app.stage.addChild(this.gameMainContainer)

    // 1. 加载背景
    await this.loadGameBackground()

    // 2. 加载readGO
    await this.loadReadyGo()

    // 3. 加载title和倒计时
    Promise.all([this.loadTitle(), this.loadCountdown()])
  }

  // 加载游戏背景
  async loadGameBackground() {
    const gameBackground = await this.getSpine('libu_happy_bg')
    PIXISound.play('bgm')
    gameBackground.scale.set(0.5)
    const width = gameBackground.width
    const height = gameBackground.height
    gameBackground.position.set(width / 2, height / 2)
    this.gameMainContainer.addChild(gameBackground)
  }

  // 加载readyGO
  async loadReadyGo() {
    const readyGo = await this.getSpine('libu_happy')
    PIXISound.play('ready_go')
    readyGo.scale.set(0.5)
    const width = readyGo.width
    const height = readyGo.height
    readyGo.position.set(width / 2, height / 2)
    readyGo.state.setAnimation(0, 'in', false)
    this.gameMainContainer.addChild(readyGo)
  }

  // 加载Title
  async loadTitle() {
    const title = await this.getSpine('title')
    title.scale.set(0.5)
    const width = title.width
    const height = title.height
    title.position.set(width / 2, height / 2)
    const track = title.state.setAnimation(0, 'in', false)
    track.listener = {
      complete: () => {
        console.log('动画完成')
      }
    }
    this.titleContainer = new PIXI.Container()
    this.titleContainer.addChild(title)
    this.gameMainContainer.addChild(this.titleContainer)
  }

  // 加载倒计时
  async loadCountdown() {
    const countdown = await this.getSpine('miaobiao')
    countdown.scale.set(0.5)
    countdown.position.set(1760, 166)
    const track = countdown.state.setAnimation(0, 'in', false)
    track.listener = {
      complete: () => {
        countdown.state.setAnimation(0, 'idle', true)
        const countdownText = this.renderCountdownText()
        countdown.skeleton.findSlot('hb_timeb').currentSprite.addChild(countdownText)
        this.updateCountdown()
      }
    }
    this.countdown = countdown
    this.gameMainContainer.addChild(countdown)
  }

  renderCountdownText() {
    const timeText = this.countdownTime + 's'
    const secondsText = new PIXI.Text(timeText, {
      fontSize: 66,
      fill: 0xffffff,
      fontWeight: '900',
      fontFamily: '微软雅黑'
    })
    secondsText.anchor.set(0.5)
    secondsText.position.set(30, 0)
    this.countdownText = secondsText
    return this.countdownText
  }

  updateCountdown() {
    this.countdownTimer = setInterval(() => {
      if (this.countdownTime <= 0) {
        clearInterval(this.countdownTimer)
        this.countdown.state.timeScale = 0
        this.countdownText.twinkleAnimate.repeat(0)
        return
      }

      this.countdownTime -= 1
      console.log(this.countdownTime)
      this.countdownText.text = this.countdownTime + 's'

      if (this.countdownTime <= 3) {
        const scaleSize = 1.5
        const { width, height } = this.countdownText
        this.countdownText.style.fill = '0xff0000'
        const twinkleAnimate = gsap.timeline({ repeat: -1 })
        this.countdownText.twinkleAnimate = twinkleAnimate
        twinkleAnimate.to(this.countdownText, {
          duration: 0.5,
          width: width * scaleSize,
          height: height * scaleSize
        }).to(this.countdownText, {
          duration: 0.5,
          width,
          height
        })
      }
    }, 1000)
  }

  async getSpine(key) {
    console.log(manifest)
    const resources = manifest.assets
    const current = resources.find(i => i.name === key)
    if (current) {
      const completed = await PIXI.Assets.load(current.srcs)
      return new PIXISpine(completed.spineData)
    }
  }

  destroy() {
    PIXISound.stopAll()
    this.countdownTimer && clearInterval(this.countdownTimer)
  }
}