class Bin {

    public width:number
    public height:number
    public x:number
    public y:number
    private canvasWidth:number
    public hspeed:number
    public active:boolean
    
    public single = 0
    public double = 1
    public type = this.single

    constructor(ground:number, canvasWidth:number, hspeed:number) {
        console.log("hier komt een prullebakkie")
        this.width = 50
        this.height = 50
        this.canvasWidth = canvasWidth
        this.x = canvasWidth
        this.y = ground-this.height
        this.hspeed = hspeed
        this.active = false
    }

    update():void {
        switch (this.type) {
            case this.single:
                this.width = 75
                break;

            case this.double:
                this.width = 150
                break;
        }

        if (!this.active) {
            this.x = this.canvasWidth
        } else {
            this.x -= this.hspeed
        }
        if (this.x < 0-this.width) {
            this.active = false
        }
    }
}