import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as THREE from "three"
import Experience from "./Experience"

export default class Camera 

{
    constructor()
    {
        this.experience = new Experience()
        this.sizes = this.experience.sizes
        this.scene = this.experience.scene
        this.canvas = this.experience.canvas

        this.setCamera()
        this.setOrbitControls()
    }

    setCamera()
    {
        this.setCamera = new THREE.PerspectiveCamera(
            35,
            this.sizes.width/this.sizes.height,
            0.1,
            100
        )
        this.setCamera.position.set(6,4,8)
        this.scene.add(this.setCamera)
    }

    setOrbitControls()
    {
        this.contols = new OrbitControls(this.setCamera, this.canvas)
        this.contols.enableDamping = true
    }


    resize()
    {
         this.setCamera.aspect = this.sizes.width / this.sizes.height
         this.setCamera.updateProjectionMatrix()
    }

    update()

        {
            this.contols.update()

        }
    
}

