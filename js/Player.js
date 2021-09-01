class player{
    constructor(){

    }

    getCount()
    {
        var playerCountRef = db.ref('playerCount');
        playerCountRef.on("value" ,function(data){playerCount = data.val()});

    }

    updateCount(count)
    {
        db.ref('/').update({playerCount: count});
    }
};