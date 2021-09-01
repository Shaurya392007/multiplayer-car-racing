class Form
{
    constructor()
    {
        this.title = createElement('h2');
        this.input = createInput("Name");
        this.button = createButton('Play');
        this.greeting = createElement('h2');


    }

    hideForm()
    {
        this.greeting.hide();
        this.input.hide();
        this.button.hide();
        this.title.hide();

    }

    display()
    {
        this.title.html("Car Racing Game");
        this.title.position(600,100);

        
        this.input.position(550,200);
        this.button.position(800,200);

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();

            playerCount = playerCount + 1;
            player.updateCount(playerCount);

            player.name = this.input.value();
            this.greeting.html("Hello" + player.name);
            this.greeting.position(600,250);



        });
    }
};