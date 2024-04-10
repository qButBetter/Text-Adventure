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
        reply: ["OK.",
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
        cartImg: [],
        sierraImg: []
    },
    law: {
        dialogue: ["Deodorant? What's that?",
            "Hey! I'm writing about Hamilton, can I have you proofread the first 30 pages for me?",
            "We're learning about the women's rights movement. Isn't it crazy that women had to lobby for their right to move around before the 1920's?",
            "Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal. Now we are engaged in a great civil war, testing whether that nation, or any nation so conceived and so dedicated, can long endure. We are met on a great battle-field of that war. We have come to dedicate a portion of that field, as a final resting place for those who here gave their lives that that nation might live. It is altogether fitting and proper that we should do this. But, in a larger sense, we can not dedicate -- we can not consecrate -- we can not hallow -- this ground. The brave men, living and dead, who struggled here, have consecrated it, far above our poor power to add or detract. The world will little note, nor long remember what we say here, but it can never forget what they did here. It is for us the living, rather, to be dedicated here to the unfinished work which they who fought here have thus far so nobly advanced. It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth. ",
            "Shouldn't you be playing League of Legends?",
            "Are you sure you can't watch one episode of my 1983 BBC released period drama with me?",
            "Take my survey now!!",
            "You look like you love freedom. Care to talk to me about the American dream?",
            "Law is my passion."],
        reply: ["I love George Washington!",
            "OK.",
            "Law is so underappreciated!",
            "I rewatched Top Gun recently.",
            "I love your tie!",
            "Heck yeah America!",
            "I'm busy right now.",
            "I'm right wing.",
            "Trump 2024.",
            "I watch Judge Judy"],
            atk: [1],
            drop: [1],
            cartImg: [],
            sierraImg: []
    },

    buttons: {
        good: 0,
        mid: 0,
        bad: 0,
        // good ends battle, mid takes no damage but doesnt end battle, bad takes damage
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

function hidePage(input) {
    document.getElementById(input).classList.add("hidden");
}

function removeHidden(input) {
    document.getElementById(input).classList.remove("hidden");
}

function setText(input) {
    document.getElementById("text-output").innerText = input;
}

function setBackground(input) {
    document.getElementById("text-output").setBackground = input;
}

// After start button is pressed
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("start-btn").addEventListener("click", function () {

        var student = new Player();
        let nameInput = prompt("What's your name?");
        student.name = nameInput;


        hidePage("load-page");
        removeHidden("home-page");
        setText(student.name);


    });
});

// After Location button is pressed
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("locIcon").addEventListener("click", function () {

        setText("");
        setBackground = ("")

    });
});

// After Backpack button is pressed
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("backIcon").addEventListener("click", function () {

        setText("");

    });
});


