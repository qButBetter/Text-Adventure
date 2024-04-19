class Player {
    constructor() {
        this.name = "";
        this.inventory = [];
        this.money = 0;
        this.steps = 0;

        // Should be on map with "s"
        this.locationX = 1;
        this.locationY = 0;
    }

    updatePlayer() {

        if (Map.CART[this.locationX][this.locationY] == "s") {
            iterateText(Cutscene.beginning);
        }

    }

}

let textIterator = 0;

var Ally = {
    tech: {
        dialogue: ["Hey, did you hear about what happened in Web today? Go get yourself a snack or something. We're all doomed.", "I'm on a streak in Laser Grids rn. Just take this and leave me alone.", "Schawlgalawg! My new simlish coding language is really takin' off! It goes something like this:  You not ooh rah dah en dahp ooh rah daht endaht en dik ah poo ra ta teek a poo rah doo rah do dik oh mumblio dah dah dosa pa errah sa de.", "Dude I did NOT sign up for this.. I've gotta get outta here.", "I shoulda stayed in theatre tech like the clown I am. Good luck, man. Could this help?", "(scream)", "UX is my passion.", "IGD is my passion.", "Don't get your panties in a twist, babe. Here.", "Yo tengo tu mama!", "Look under there! HAHAHAHAHAHAHAHAHAHAHAHAHA! You said underwear!", "Dont trip, chocolate chip.", "So BOOM!", "Bless!", "I'm totally Grending right now.", "*Metal pipe sound effects*", "Don't Violate Section 3", "My name is John.", "I've gyatt to get my work done.", "I pushed my fingers into my eyes.", "I'm totally Grending right now."],
        reply: ["Thanks!"],
        atk: [1],
        drop: [1],
    },

    biomed: {
        dialogue: ["Slouching is actually really bad for 16.5 of your internal organs as well as your upper spine. If I give you this will you sit up straighter?", "It's actually really interesting seeing how computer light affects retinal processing and circadian rhythm. Study sesh sometime? About what? Well, you'd be the subject. Here, just. Take this as, like, a gift. Think about it.", "I didn't know that tech students could actually walk' I thought the chairs were, like, a part of the anatomy. Now that I think about it, it makes sense why I'm failing.", "Dude I know more about computers from playing Valorant than I will ever learn in this class. Let me switch places with you. Put in a good word for me, just keep it hush OK?", "Biomed is my passion."],
        reply: ["Thanks!"],
        atk: [1],
        drop: [1],
    },

    images: ["StudentImages/landon.png", "StudentImages/finn.png", "StudentImages/gamer.png",
        "StudentImages/artist.png", "StudentImages/cybertruck.png", "StudentImages/eve.png", "StudentImages/tameem.png", "StudentImages/pearla.png", "StudentImages/jose.png"],

    buttons: {
        good: 1,
        mid: 1,
        bad: 1,
    }
};

var NPC = {
    business: {
        dialogue: ["I have SO much work to do. I literally have three coloring pages due this afternoon. I can't.",
            "What do you mean you only have one formal dress day?",
            "Do you think you could code a site about Elon Musk for me?",
            "I have to get second opinions on my project about big business' effect on the 'environment crisis'. First it was global cooling, then global warming, then global cooling, then global warming AGAIN? It can't be real.",
            "I'm gonna be honest I don't think homelessness is a problem if I can make money off it.",
            "DME kids are SO stuck up. What do you mean you're from the tech labs? What's a 'web application'?",
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
    },

    multimedia: {
        dialogue: ["Quick, take my survey! If I don't look busy Mr. Love will drop me from the class!", "WATCH MY SHORT FILM NOW.", "FOLLOW MY SHORT FILM'S INSTAGRAM PLEASE PLEASE PLEASE PLEASE PLE-", "Graphic design is my passion.", "Ever heard of Adobe photoshop?", "You're a web kid?? I hate you guys! I won't remember beating you by dinner.", "You're scared of failing your web class? Typical. Not even worth my time.", "Will you join me in this dance?", "Don't worry. This'll only hurt A LOT.", "This is gonna be fun!", "You best kneel before this gets ugly.", "First we crack the shell, then we crack the nuts inside!", "Finally! An opponent! Can't wait to tell Mr. Love about this!", "Multimedia is my passion."],
        reply: ["Your boom mic's broken.", "I already follow your film insta.", "Graphic design is mid", "I did theatre.", "Can you draw me?", "Digital art isn't real art.", "I can't draw a stickman.", "MM is easy, right?", "(silence)"],
        atk: [1],
        drop: [1],
    },

    images: ["StudentImages/peyton.png", "StudentImages/carl.png", "StudentImages/sharon.png", "StudentImages/wpm.png", "StudentImages/an.png", "StudentImages/ryan.png", "StudentImages/miles.png", "StudentImages/dylan.png"],

    buttons: {
        good: 0,
        mid: 0,
        bad: 0,
        // good ends battle, mid takes no damage but doesnt end battle, bad takes damage
    }
};

var svNPC = {
    guard: {
        dialogue: ["Where do you think you're going?", "Lemme see some ID.", "Area's off limits.", "I can't wait to be paid tomorrow.", "Have you seen a person with a lot of makeup on?", "What are you even doing?", "Have you tried that new corndog place yet?", "Finally, I get to use my baton."],
        reply: ["Sir, I'm not concealed carrying.", "Where's the bathroom?", "Garbage men get paid more than you.", "When's Santa coming?", "Chimpken Shacc.", "They should put a Nike store here.", "Do you want some Monster Energy.", "IS THAT PAUL BLART?!"],
        atk: [1],
        drop: [1],
        images: ["svImages/guardOne", "svImages/guardTwo", "svImages/guardThree"],
    },
}

var staticNPC = {
    steedle: {
        dialogue: ["Baki is peak.", "Pickle is my favorite character, besides Biscuit Oliva.", "Cya."],
        reply: ["Ok", "Here's Pickle!", "bye"],
        atk: [1],
        drop: [1],
        images: ["StudentImages/steed.png"],
    },

    icaraga: {
        dialogue: ["What's up?", "Wanna play UNO with us?", "Ok....."],
        reply: [],
        atk: [1],
        drop: [1],
        images: ["StudentImages/icaruy.png"],
    },

    lady: {
        dialogue: [],
        reply: [],
        atk: [1],
        drop: [1],
        images: ["svImages/lady.png"],
    }
}

var Story = {
    // Endings
    arson: ["Mr. Slow went down quickly, in stark contrast to his new name. As the sun slowly sets on the day, you breathe a sigh of relief, and get a Baconator from Wendy's. You still go to school the next day. When you come in, a substitute teacher waits for you, along with a new assignment. The assignment's name? “Text Adventure Project”.",],
    inspo: ["Your great adventures through Sierra Vista Mall proved fruitful. You sit back down into your chair, rejuvenated, ready to write the ultimate function:  One which would create your entire project for you as soon as the browser booted.", "(you copy down notes of code to write a while true loop)", "You look at your Javascript creation, feeling fulfilled, knowing this majesty will negate the Super F- with its holy Github power. Anticipation peaks as you right click your empty HTML file and see the Liveserver extension appear in the options.",],
    slowversal: ["After all of your efforts, you've finally reached the final hurdle to reversing Mr. Fast's overPower(school)ed transformation. Page by page, you piece his old self onto the wall.", "With the last page comes a blinding flash of light. Mr. Fast turns to you in a daze.", "He laughs at your response, which you delivered in a manner true to what he would provide you in the same case. Then he steps over to the computer, adjusting something on the screen.", "On your computer screen, the google classroom due changes to Monday. Not the most time, but time enough. With a sigh of relief, you collapse into your chair. It's over."],
    steedle: [],
    icaraga: [],
};

var Descriptions = {
    // Descriptions for all rooms

};

var GameOver = {

};

var Cutscene = {
    beginning: ["It's an early morning, and CART seems more dreary than ever. The sad, advil-like tones of Web Applications slowly fill your vision as you approach the sign in the computer.", "Everyone seems to be on edge; the air is tense and the keyboards are violently clacking beneath the fingers of every web student in the room.", "Sitting right in front of you is yesterday's assignment. 20 page website, with a prototype, competitive audit and all, which was due in a couple months. Now, it's due in 5 minutes.", "Despite everyone's panic, the due date does not change. Most everyone rushes to finish, but only manages to get down one function, which produces an undefined return.", "Right on cue at 7:45, Mr. Fast exclaims his frustration.", "With his calm demeanor overtaken by rage, Mr. (he wants it done) Fast starts grading furiously to get the horrible scores into the gradebook. He yells as he grades, which causes a sonic-like boom in the classroom, scattering his portraits across the CART space-time continuum. His rage—fuelled by the terrible, but legendary, Powerschool—slowly took a hold of him. The rare instances of his transformations had been rumored about by current Web students, overheard from the whispers of Web students long, long ago. He had transformed into what the e-folktales deemed as the horrible, dreadful… Mr. Slow.", "Mr. Slow utilizes his newfound abilities, granted by the PowerSchool grading system, to plague the classroom and give all the cowering students still in his sight a “SUPER F-”.", "This is even worse than the Budget Calculator; or the Dino Dossier!", "I need to get out of here! UX shares a wall, he'd probably still get me there! I need to get help! I know! I'll go to IGD", "IGD, filled with former Web students, seems to be standing on edge. A student sees your panic as you rush in and approaches you.", "'Do not grieve, wise warrior! It is better for each man that he avenge his friend than to mourn him much'. We can fix this for everyone; it's in the legend. Did you see all of his portraits get scattered during that blast? I think those are the key to turning him back into Mr. Fast. That boom was massive… I bet those papers could've gone virtually anywhere inside of CART. This one fell on my desk a few minutes ago, while I was designing a FNAF game with Beowulf characters. The only issue is, you'd probably have to sneak past him to get them back on the wall. He's definitely not safe to talk to right now. Maybe you should just do the failsafe thing and try to finish the project even though it's past due. Good luck, soldier.", "Thank you so much. Good luck with your FNAG game. I'll try to figure this out."],
    allen: ["Hey there! What are you doing out here?", "We're going to Sierra Vista Mall for a final field trip."],
    fast: ["What happened?", "I don't remember that.", "Since you're all so behind, I'll give you the weekend to finish."],
};

var Summary = {
    encounters: null,
    deafeats: null,
    ending: null,
    money: null,

}

var Inventory = {

    pickle: 0,
    papers: 0,
    fire: 0,
    inspire: 0

};

var Map = {
    CART:
        [[0], ["s"], [0],
        [0], [0], [0],
        ["e1"],   ["g"], ["j"],
        ["n100"], ["h"], [0],
        ["n101"], ["h"], [0],
        [0],      ["h"], [0],
        ["n104"], ["h"], ["b2"],
        ["n105"], ["h"], ["n110"],
        ["n107"], ["e3"], [0]],

    Janitor: [["e5"], ["b3"]],

    Outside: [["p"], ["e2"]],

    Vista:
        [[0], ["c"], [0],
        [0], ["h3"], ["h3"],
        [0], ["m"], [0],
        [0], ["h2"], [0],
        ["e4"], ["h2"], ["h2"],
        [0], ["h2"], [0],
        [0], ["t"], [0],
        [0], ["h4"], ["h4"],
        [0], [0], [0]],

    Road: []

};

var ItemMap = {
    CartItem:
        [[0], [0], [0],
        [0], [0], [0],
        [0], ["i"], [0],
        ["i"], [0], [0],
        ["i2"], ["i"], [0],
        [0], ["h"], [0],
        [0], ["h"], ["0"],
        ["i"], [0], ["n110"],
        ["i"], [0], [0]],

    OutsideItem: [["i2"], [0]],

    JanitorItem: [[0], ["i2"]],

    VistaItem:
        [[0], ["i3"], [0],
        [0], [0], ["i3"],
        [0], ["i3"], [0],
        [0], [0], [0],
        [0], [0], [0],
        [0], [0], [0],
        [0], [0], [0],
        [0], ["i3"], ["b"],
        [0], [0], [0]],
};

// function iterateText(objName, objItem) {
//     textIterator = 0;
//     let buttons = document.querySelectorAll("button-container").addEventListener("click", function(){
//         textIterator++;
//     });


//     while (textIterator < objItem.length) {
//         setText(objName.objItem[i]);
//         // When button is pressed down, it adds to i.
//     }

// }

// General Functions
function hidePage(input) {
    document.getElementById(input).classList.toggle("hidden");
}

function setText(input) {
    document.getElementById("text-output").innerText = input;
}

function setBackground(input) {
    document.getElementById("text-output").style.backgroundImage = `url(${input})`;
}

function displayInv() {

    let invArr = student.inventory;

    for (i = 0; i < invArr.length; i++) {
        if (invArr[i] > 0) {
            // Iterates thru items, if the item in player inv is < 0, then it unhides.
            // Will have to somehow reference the items in the array to the items in the HTML
        }
    }

    hidePage("home-image");
    hidePage("button-container");
    hidePage("text-output");

    hidePage("inventory");
}

function displayMap() {
    hidePage("home-image");
    hidePage("button-container");
    hidePage("text-output");

    hidePage("map");
}

function utilBackground(input) {
    document.getElementById("home-image").style.backgroundImage = `url(${input})`;
}

// Random Function
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// NPC Function
function npcFunct() {
    let ranNum = getRandomInt(2);
    // Change #s in Math.random for the images!

    // Change to work, idea is here
    if (student.location != "SV") {
        if (ranNum == 0) {
            document.getElementById("home-image").innerHTML =
                `<img src='(${Ally.images[getRandomInt(9)]})' alt="A generic person colored in black and white.">`;

            // Take ally dialogue as well
            setText(Ally[getRandomInt(2)].dialogue[getRandomInt(dialogue.length)]);

            // Set button values

        }
        else if (ranNum == 1) {
            document.getElementById("home-image").innerHTML =
                `<img src='(${NPC.images[getRandomInt(6)]})' alt="A generic person colored in black and white.">`;

            // Take enemey dialogue as well
            setText(NPC[getRandomInt(3)].dialogue[getRandomInt(dialogue.length)]);

            // Set button values

        }
    }
    else {
        document.getElementById("home-image").innerHTML =
            `<img src='(${svNPC.guard.images[getRandomInt(3)]})' alt="A generic person colored in black and white.">`;

        // Take guard dialogue as well
        setText(svNPC.guard.dialogue[getRandomInt()]);

        // Set button values

    }
}

// Moving Functions
function move(playerX, playerY, btnVal) {
    


    // Random NPC Interaction
    let ranNum = getRandomInt(5);
    if (ranNum == 0) {
        npcFunct();
    }

    // student.updatePlayer();

    // Change background depending on where you are

}

// Picking up functions
function pickUp(playLocX = student.locationX, playLocY = student.locationY) {

}


// GAME STUFF DON'T TOUCH

// After start button is pressed
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("start-btn").addEventListener("click", function () {

        var student = new Player();
        let nameInput = prompt("What's your name?");
        student.name = nameInput;
        // student.updatePlayer();

        hidePage("load-page");
        hidePage("home-page");
        document.getElementById("name-container").innerText = student.name;
    });
});

// After Location button is pressed
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("locIcon").addEventListener("click", function () {

        displayMap();


    });
});

// After Backpack button is pressed
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("backIcon").addEventListener("click", function () {

        displayInv();

    });
});


