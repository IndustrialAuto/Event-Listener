import * as THREE from "three"
import Experience from "../Experience.js"
import Environment from "./Environment.js"
import Floor from './Floor.js'
import Fox from './Fox.js'


export default class MODEL{
    constructor()
        {
            this.experience = new Experience
            this.scene = this.experience.scene
            this.resources = this.experience.resources

            
            

            this.resources.on('loaded', ()   => 
            {
                
                this.floor = new Floor()
                this.environmet = new Environment()
                this.fox = new Fox()
            })
            //this.Mesh()
        }

    Mesh()
    {
        this.Mesh = new THREE.Mesh(
            new THREE.BoxGeometry(1,1,1), 
            new THREE.MeshStandardMaterial()
        )
        this.scene.add(this.Mesh)
        //console.log("mesh is being called")
    }

    update()
    {
        if(this.fox)
            this.fox.update()
    }
   
}

