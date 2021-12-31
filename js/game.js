class Game{
    constructor(){

    }
    getState(){
        db.ref("gameState").on("value",data=>{
            gameState=data.val()
        })
    }
    updateState(state){
        db.ref("/").update({
            gameState:state
        })
    }
    start(){
        player=new Player();
        playerCount=player.getCount();
        console.log(playerCount);
        form= new Form();
        form.display();
    }
}