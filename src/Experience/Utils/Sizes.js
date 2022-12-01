import EventEmitter from "./EventEmitter.js"

export default class Sizes extends EventEmitter
{
    constructor()
    { 
        super()

        //setup
        this.width = window.innerWidth
        this.height = window.innerHeight
        this.pixelRatio = Math.min(window.devicePixelRatio, 2)
        // limiting the pixel ration to 2, beyond 2 is just useless & creates performance issue

        //Resize event
        window.addEventListener('resize', ()=>
        {
            this.width = window.innerWidth
            this.height = window.innerHeight
            this.pixelRatio = Math.min(window.devicePixelRatio, 2)

            //emitting an event - 
            this.trigger('resize')
        })


    //when the resize occurs we need to update camera and renderer also
    //Thus, when the rezise occur we will use event emitter to warn the other classes that resize occurs- 

        //event emitter 
    }
}