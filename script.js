class Player {
    constructor() {
        this.name = "";
        this.inventory = [];
        this.money = 0;
        this.steps = 0;
        this.locationX = 0;
        this.locationY = 0;
    }

    updatePlayer() {

    }


}

var NPC = {
    business: {
        dialogue: ["I have SO much work to do. I literally have three coloring pages due this afternoon. I can't.", 
        "What do you mean you only have one formal dress day?", 
        "Do you think you could code a site about Elon Musk for me?", 
        "I have to get second opinions on my project about big business' effect on the “environment crisis”. First it was global cooling, then global warming, then global cooling, then global warming AGAIN? It can't be real.", 
        "I'm gonna be honest I don't think homelessness is a problem if I can make money off it.",
        "DME kids are SO stuck up. What do you mean you're from the tech labs? What's a “web application”?",
        "Business is my passion.",
        "Hey bro."],
        buttons: ["OK.",
            "I'm busy.",
        "Isn't crypto cool?",
        "How's your stocks?",
        "Bitcoin is up by 0.1%.",
        "Tesla went bankrupt.",
        "Leave me alone.",
        "You're obsessed with being rich.",
        "I only invest in crypto.",
        "(Silence).",
        "Doge is the only true currency."],
        atk: [1],
        drop: [1],
    }

};

var Story = {

};

var Summary = {
    encounters: null,
    deafeats: null,
    ending: null,
    money: null,

}

var Inventory = {

    pickle: true,
    papers: 0,
    fire: 0,
    inspire: 0

};

var Map = {

    CART: [],
    Vista: [],
    Road: []

};

// After start button is pressed
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("start-btn").addEventListener("click", function () {



    });
});

// After Location button is pressed
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("locIcon").addEventListener("click", function () {



    });
});

// After Backpack button is pressed
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("backIcon").addEventListener("click", function () {



    });
});


