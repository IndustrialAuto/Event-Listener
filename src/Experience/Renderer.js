import * as THREE from 'three'
import Experience from "./Experience"

export default class Renderer
{
 constructor()
 {
    this.experience = new Experience()
    this.canvas = this.experience.canvas
    this.sizes = this.experience.sizes
    this.scene = this.experience.scene
    this.camera = this.experience.camera
      
    this.setRenderer()
   // console.log("renderer is running")
    

 }
 setRenderer()
 {
    this.setRenderer = new THREE.WebGLRenderer({
           canvas: this.canvas,
           antialias: true
    })
// console.log(this.setRenderer)
this.setRenderer.physicallyCorrectLights = true
this.setRenderer.outputEncoding = THREE.sRGBEncoding
this.setRenderer.toneMapping = THREE.CineonToneMapping
this.setRenderer.toneMappingExposure = 1.75
this.setRenderer.shadowMap.enabled = true
this.setRenderer.shadowMap.type = THREE.PCFSoftShadowMap
this.setRenderer.setClearColor('#211d20')
this.setRenderer.setSize(this.sizes.width, this.sizes.height)
this.setRenderer.setPixelRatio(Math.min(this.sizes.pixelRatio, 2))

 }

 resize()
 {
   this.setRenderer.setSize(this.sizes.width, this.sizes.height)
   this.setRenderer.setPixelRatio(Math.min(this.sizes.pixelRatio, 2))
 }

update()
{
   this.setRenderer.render(this.scene, this.camera.setCamera)
}




}