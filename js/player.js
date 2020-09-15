class PlayerS{
   constructor(){
       
   }
   getCount(){
       var playercountref=database.ref('Playercount')
       playercountref.on("value",function(data){
           Playercount=data.val()

       })
   }
   updateCount(count){
       database.ref("/").update({
           Playercount:count
       })
   }

update(name){
    var playerIndex="player"+Playercount
    database.ref(playerIndex).set({
        name:name    
    })
}










}