class Player{
    constructor(){
        this.name=null;
        this.index=null;
        this.positionX=0;
        this.positionY=0;
        this.rank=0;
    
    }
    addPlayer(){
        var playerIndex="players/player"+this.index;
        if (this.index===1){
            this.positionX=width/2-400;
        }
        else if(this.index===2){
            this.positionX=width/2-300;
        }
        else if(this.index===3){
            this.positionX=width/2-200;
        }
        else {
            this.positionX=width/2-100;
        }
        db.ref(playerIndex).set({
            name:this.name,
            positionX:this.positionX,
            positionY:this.positionY,
            rank:this.rank
        })
    }
    getCount(){
        db.ref("playerCount").on("value",data=>{
            playerCount=data.val()
        })
    }
    updateCount(count){
        db.ref("/").update({
            playerCount:count
        })
    }
    update(){
        var playerIndex="players/player"+this.index;
        db.ref(playerIndex).update({
            positionX:this.positionX,
            positionY:this.positionY,
            rank:this.rank
        })
    }
getDistance(){
    var playerIndex="players/player"+this.index;
    db.ref(playerIndex).on("value",data=>{
var data=data.val();
this.positionX=data.positionX;
this.positionY=data.positionY;
    })
}
}