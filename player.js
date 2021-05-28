class Player{
     constructor(){
     }
     getCount(){
         var playerCountref=database.ref('playercount')
         playerCountref.on("value",function(data){
             playerCount=data.val();
         })
     }
     updateCount(count){
         database.ref('/').update({
             playerCount:count
         })
     }
     updateName(name){
         var playerindex="player"+playerCount;
         database.ref(playerindex).set({
             name:name
         })
     }
}