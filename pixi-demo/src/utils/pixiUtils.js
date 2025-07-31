import * as PIXI from 'pixi.js'
import PIXISound from 'pixi-sound'
import { Spine } from 'pixi-spine'
export { PIXI, PIXISound, Spine as PIXISpine }

export function createPIXIApp(parentElementId, options = {}) {
  console.log('Creating PIXI application with options:', options)
  if (!parentElementId) {
    throw new Error('Parent element ID is required to create PIXI application')
  }
  const app = new PIXI.Application({
    width: options.width || 800,
    height: options.height || 600,
    backgroundColor: options.backgroundColor || 0xffffff,
    resolution: window.devicePixelRatio || 1,
  })

  const parentElement = document.getElementById(parentElementId)
  if (!parentElement) {
    throw new Error(`Parent element with id "${parentElementId}" not found`)
  }

  parentElement.appendChild(app.view)
  return app
}
