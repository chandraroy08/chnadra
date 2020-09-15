class Game{
    constructor(){

    }
    getState(){
        var gamestateref=database.ref('gameState')
        gamestateref.on("value",function(data){
            gameState=data.val();
        })
    }
    
    update(state){
        datatbase.ref('/').update({
            gamestate:state
        })
    }
        start(){
            if(gameState===0){
                player=new PlayerS();
                player.getCount();
                form=new Form();
                form.display();
            }
        }
    }
