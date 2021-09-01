class Game
{
    constructor()
    {

    }

    getState()
    {
        var gameStateRef = db.ref('gameState');
        gameStateRef.on("value" ,function(data){gameState = data.val()});
    }

    updateState(state)
    {
        db.ref('/').update({gameState : state});
    }

    async start()
    {
        if(gameState === 0)
        {
            player = new Player();
            var playerCountRef = await db.ref('playerCount').once("value");
            if(playerCountRef.exists())
            {
                playerCount = playerCountRef.val();
                player.getCount();
            }
            form = new Form();
            form.display();
        }
    }

    play()
    {
        form.hideForm();
        textSize(30);
        textSize("Game Start", 120,100);

    }
};