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

// After page is loaded
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("start-btn").addEventListener("click", function () {


    });
});



