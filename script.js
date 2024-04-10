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


