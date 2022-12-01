import EventEmitter from "./EventEmitter.js"

export default class Time extends EventEmitter
{
    constructor()
        {
            super()


            //setup - 
            this.start = Date.now()
            this.current = this.start
            this.elapsed = 0
            this.delta = 16
            //console.log('Time Instanciated')    
            
            //calling the tick function from the next frame, not on the current frame
            window.requestAnimationFrame( () =>
            {
            this.tick()
            })

        }

        tick()
        {
            
            const currentTime = Date.now()
            this.delta = currentTime-this.current
            this.current = currentTime
            this.elapsed = this.current-this.start
           // console.log(this.elapsed)


            this.trigger('tick')



            window.requestAnimationFrame( () =>
            {
                this.tick()            }    
            
            )
        }
}