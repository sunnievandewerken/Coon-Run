class Word {

    public width:number = 53
    public height:number = 53
    public x:number
    public y:number
    public hspeed:number
    private game:Game
    private index:number
    public fake:boolean = false
    public alive:boolean = true

    private Image: HTMLImageElement = <HTMLImageElement>document.getElementById('appel')
    private Sound1: HTMLAudioElement = <HTMLAudioElement>document.getElementById('Correct_SW')
    private Sound2: HTMLAudioElement = <HTMLAudioElement>document.getElementById('False_SW')

    constructor (game:Game, index:number, fake:boolean) { 
        this.game = game
        this.x = this.game.canvasWidth
        this.y = this.game.ground-this.height - 250
        this.hspeed = this.game.objSpeed
        this.fake = fake
        this.index = index
        if (this.fake) {
            this.Image = <HTMLImageElement>document.getElementById(this.game.levelObject.proverbs.list[this.game.levelObject.currentProverb].incorrect[index])
        } else {
            this.Image = <HTMLImageElement>document.getElementById(this.game.levelObject.proverbProgress[index])
        }
    }

    update():void {
        this.hspeed = this.game.objSpeed
        if (this.game.collision(this)) { 
            this.alive = false
            if(!this.fake) { 
                this.game.levelObject.proverbProgress.splice(this.index, 1)  
                this.game.score += 1000  
                this.Sound1.play()
            } else {
                // Loses points
                this.game.score -= 1000  
                this.Sound2.play()
                if (this.game.score < 0) {
                    this.game.score = 0
                }
            }
        }
        if (this.x < 0-this.width) { 
            this.alive = false
        }
        this.x -= this.hspeed

        // Draw
        if (this.fake) this.game.ctx.fillStyle = "red"; else this.game.ctx.fillStyle = "green"
        this.game.ctx.fillRect(this.x, this.y, this.width, this.height)
        this.game.ctx.drawImage(this.Image, this.x, this.y, this.width, this.height)
    }
}