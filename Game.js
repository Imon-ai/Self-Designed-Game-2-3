class Game {
  constructor(){
    
  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
     
      
      form = new Form();
      form.display();
    }
   
  
  }

  play(){
    form.hide();
    
  
    Player.getPlayerInfo();
    form.titleHide();
           

    if(allPlayers !== undefined){

      var ground=new Ground(displayWidth/2-25,displayHeight/2+50,displayWidth-25,40);
      ground.display();   
      background(battleFieldBg);
     
      player1=new Character(400,200,20,20);
      player2=new Character(800,200,20,20);
      player1.display();
      player2.display();
      heros=[player1,player2]
      //tint(0,ground.Visiblity);
      var display_position = 0;
     
      var index = 0;
      
    var x =170;
    var y;           
    
        for(var plr in allPlayers){
                    
           //add 1 to the index for every loop
           index = index + 1 ;

           //position the cars a little away from each other in x direction
           x = x + 200;
           
          heros[index -1].x = x;
          heros[index - 1].y = y;
            
         
          
        if (plr === "player" + player.index){
          fill("blue");
          playerIndicate="player";
        }else{
          fill("red");
          playerIndicate="opponent";
        }
        display_position+=20;
        textSize(20);
        text(playerIndicate+":"+allPlayers[plr].name ,70,display_position)
      }
   
      

    }
  }
  
  
  
    }
