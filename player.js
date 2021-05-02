class Player{
    constructor(){}
    getCount(){
        database.ref('playerCount').on("value",function(data){
          playerCount = data.val();
        })
      }
      updateCount(count){
        database.ref('/').update({
          playerCount: count
        });
      }
      updateInfo(name){
        database.ref('player'+playerCount).update({
          name:name
        });
      }
}