import * as THREE from 'three'
import Experience from "../Experience.js"



export default class Environment 
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.debug = this.experience.debug

       

        if(this.debug.active)
        {
            this.debugFolder = this.debug.ui.addFolder('Environment')
        }

        this.lights()
        this.setEnvironmentMap()
    }
    lights()
    {

        this.directionalLight = new THREE.DirectionalLight('#ffffff', 4)
        this.directionalLight.castShadow = true
        this.directionalLight.shadow.camera.far = 15
        this.directionalLight.shadow.mapSize.set(1024, 1024)
        this.directionalLight.shadow.normalBias = 0.05
        this.directionalLight.position.set(3.5, 2, - 1.25)
        this.scene.add(this.directionalLight)

        if(this.debug.active)
        {
            this.debugFolder.add(this.directionalLight, 'intensity').min(0).max(14).step(0.001).name("sunLightIntensity")
            this.debugFolder.add(this.directionalLight.position, 'x').min(-5).max(5).step(0.001).name("sunLight X")
            this.debugFolder.add(this.directionalLight.position, 'y').min(-5).max(5).step(0.001).name("sunLight Y")
        }
    }

    setEnvironmentMap()
    {
     this.EnvironmentMap = {}
     this.EnvironmentMap.intensity = 0
     this.EnvironmentMap.texture = this.resources.items.environmentMapTexture
     this.EnvironmentMap.texture.encoding = THREE.sRGBEncoding
     this.scene.environment = this.EnvironmentMap.texture
        
        this.setEnvironmentMap.updateMaterial = () =>
        {
            this.scene.traverse((child) => {
                if(child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial)
                {
                    
                    child.material.envMap = this.EnvironmentMap.texture
                    child.material.envMapIntensity = this.EnvironmentMap.intensity
                    child.material.needsUpdate = true
                }
            }
            )
        }

        this.setEnvironmentMap.updateMaterial()


        if(this.debug.active)
        {
            this.debugFolder.add(this.EnvironmentMap, 'intensity').min(0).max(14).step(0.001).name("envIntensity").onChange(this.setEnvironmentMap.updateMaterial)
        }
    }


}