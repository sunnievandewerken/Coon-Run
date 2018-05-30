class Cloud {

    public width: number = 100
    public height: number = 50
    public x:number
    public y:number
    public hspeed:number
    private gameObject:Game
    public alive:boolean = true

    
    constructor (game:Game) {
        this.gameObject = game
        this.x = this.gameObject.canvasWidth
        this.y = 50
        this.hspeed = this.gameObject.objSpeed
        
    }


    update():void {
        this.hspeed = this.gameObject.objSpeed
        if (this.x < 0-this.width) {
            this.alive = false
        }

        this.x -= this.hspeed
    }
}