let randomLab = null;
let randomGuard = null;
let time = 180;

class Player {
    constructor() {
        this.name = "";
        this.inventory = [0, 0, 0, 0, 1];
        this.money = 0;
        this.steps = 0;

        // Should be on map with "s"
        this.mapLocation = "CART";
        this.locationX = 1;
        this.locationY = 0;
    }

    updatePlayer() {
        if (Map.CART[this.locationX][this.locationY] == "s") {
            iterateText(Cutscene.beginning);
        }
    }
}

var Ally = {
    tech: {
        dialogue: ["Hey, did you hear about what happened in Web today? Go get yourself a snack or something. We're all doomed.", "I'm on a streak in Laser Grids rn.", "Schawlgalawg! My new simlish coding language is really takin' off! It goes something like this:  You not ooh rah dah en dahp ooh rah daht endaht en dik ah poo ra ta teek a poo rah doo rah do dik oh mumblio dah dah dosa pa errah sa de.", "Dude I did NOT sign up for this.. I've gotta get outta here.", "I shoulda stayed in theatre tech like the clown I am. Good luck, man. Could this help?", "(scream)", "UX is my passion.", "IGD is my passion.", "Don't get your panties in a twist, babe. Here.", "Yo tengo tu mama!", "Look under there! HAHAHAHAHAHAHAHAHAHAHAHAHA! You said underwear!", "Dont trip, chocolate chip.", "So BOOM!", "Bless!", "I'm totally Grending right now.", "*Metal pipe sound effects*", "Don't Violate Section 3", "My name is John.", "I've gyatt to get my work done.", "I pushed my fingers into my eyes.", "I'm totally Grending right now."],

        good: ["Thanks!"],
        atk: [1],
        drop: [1],
    },

    biomed: {
        dialogue: ["Slouching is actually really bad for 16.5 of your internal organs as well as your upper spine. If I give you this will you sit up straighter?", "It's actually really interesting seeing how computer light affects retinal processing and circadian rhythm. Study sesh sometime? About what? Well, you'd be the subject. Here, just... think about it.", "I didn't know that tech students could actually walk' I thought the chairs were, like, a part of the anatomy. Now that I think about it, it makes sense why I'm failing.", "Dude I know more about computers from playing Valorant than I will ever learn in this class.", "Biomed is my passion."],

        good: ["Thanks!"],
        atk: [1],
        drop: [1],
    },

    images: ["StudentImages/landon.png", "StudentImages/finn.png", "StudentImages/gamer.png",
        "StudentImages/artist.png", "StudentImages/cybertruck.png", "StudentImages/eve.png", "StudentImages/tameem.png", "StudentImages/pearla.png", "StudentImages/jose.png", "StudentImages/leo.png"],

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

        good: ["Isn't crypto cool?", "Bitcoin is up by 0.1%.", "I only invest in crypto.", "Do you know Edwin Reyes?", "Is Wolf of WallStreet Good?"],
        mid: ["Leave me alone.", "I'm busy.", "(Silence).", "OK."],
        bad: ["How's your stocks?", "Tesla went bankrupt.", "You're obsessed with being rich.", "Doge is the only true currency.", "(Money Spread)", "Band for Band rn.", "You sucked at showcase."],
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

        good: ["I love George Washington!", "Law is so underappreciated!", "Trump 2024.", "Pride and Prejudice best book ever, real?", "I hate myself."],
        mid: ["OK.", "I'm right wing.", "Heck yeah America!", "I love your tie!", "Leave me alone.", "(Silence)."],
        bad: ["I'm busy right now.", "I rewatched Top Gun recently.", "I watch Judge Judy.", "Hamilton mid.", "I heart Martin Van Buuren.", "Biden 2024.", "I'm a communist."],
        atk: [1],
        drop: [1],
    },

    multimedia: {
        dialogue: ["Quick, take my survey! If I don't look busy Mr. Love will drop me from the class!", "WATCH MY SHORT FILM NOW.", "FOLLOW MY SHORT FILM'S INSTAGRAM PLEASE PLEASE PLEASE PLEASE PLE-", "Graphic design is my passion.", "Ever heard of Adobe photoshop?", "You're a web kid?? I hate you guys! I won't remember beating you by dinner.", "You're scared of failing your web class? Typical. Not even worth my time.", "Will you join me in this dance?", "Don't worry. This'll only hurt A LOT.", "This is gonna be fun!", "You best kneel before this gets ugly.", "First we crack the shell, then we crack the nuts inside!", "Finally! An opponent! Can't wait to tell Mr. Love about this!", "Multimedia is my passion."],

        good: ["Your boom mic's broken.", "I already follow your film insta.", "I can't draw a stickman.", "How's the potluck?", "TAWOG peak character design.", "Do you like spiderman?"],
        mid: ["I did theatre.", "MM is easy, right?", "(silence)", "New MHA episode drop?", "FireAlpaca W", "I drew a full piece using magma"],
        bad: ["Graphic design is mid", "Can you draw me?", "Digital art isn't real art.", "Green fn.", "Go animate or something.", "Go away painter boy."],
        atk: [1],
        drop: [1],
    },

    images: ["StudentImages/peyton.png", "StudentImages/carl.png", "StudentImages/sharon.png", "StudentImages/wpm.png", "StudentImages/an.png", "StudentImages/ryan.png", "StudentImages/miles.png", "StudentImages/dylan.png"],

};

var svNPC = {
    guard: {
        dialogue: ["Where do you think you're going?", "Lemme see some ID.", "Area's off limits.", "I can't wait to be paid tomorrow.", "Have you seen a person with a lot of makeup on?", "What are you even doing?", "Have you tried that new corndog place yet?", "Finally, I get to use my baton."],

        good: ["Sir, I'm not concealed carrying.", "Chimpken Shacc.", "I like Panera Bread"],
        mid: ["Where's the bathroom?", "When's Santa coming?", "Do you want some Monster Energy."],
        bad: ["Garbage men get paid more than you.", "They should put a Nike store here.", "IS THAT PAUL BLART?!"],
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
        images: ["StudentImages/icaga.png"],
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
    endingOne: ["The Wrath of Idleness Unleashed!", "In the hallowed halls of the Center for Advanced Research and Technology (CART), your loitering transgression has triggered a cataclysm of cosmic proportions! The fabric of reality itself quivers as the furies of idleness descend upon us, rending the very essence of innovation and progress. The heavens weep, and the earth trembles as the curse of idleness consumes all hope of enlightenment."],

    endingTwo: ["The curse of loitering Unleashed!", "Oh, hapless wanderer! Your dalliance and loitering within the sacred halls of the Center for Advanced Research and Technology (CART) have invoked a curse of epic proportions! The very fabric of innovation trembles at your audacity. The curse of loitering, a blight upon the noble pursuit of discovery, has cast its shadow upon us all."],

    endingThree: ["Catastrophe Alert:  Loitering Detected!", "Alas, the echoes of your idle footsteps have shattered the very foundation of the Center for Advanced Research and Technology (CART)! Your blatant disregard for the no-loitering policy has unleashed chaos and discord, disrupting the delicate balance required for scientific brilliance. The heavens weep, and the stars dim at the sight of such negligence, plunging the realm of innovation into darkness."]
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

var Map = {
    CART: [
        [0], ["s"], [0], [0], ["c"], [0],
        [0], [0], [0], [0], ["h3"], ["h3"],
        ["e1"], ["g"], ["j"], [0], ["m"], [0],
        ["n100"], ["h"], [0], [0], ["h2"], [0],
        ["n101"], ["h"], [0], ["e4"], ["h2"], ["h2"],
        [0], ["h"], [0], [0], ["h2"], [0],
        ["n104"], ["h"], ["b2"], [0], ["t"], [0],
        ["n105"], ["h"], ["n110"], [0], ["h4"], ["h4"],
        ["n107"], ["e3"], [0], [0], [0], [0],
    ],
};

var ItemMap = {
    CART: [
        [0, "i", 0, 0, "i3", 0],
        [0, 0, 0, 0, 0, "i3"],
        ["i2", "i", "i2", 0, "i3", 0],
        ["i2", "p", 0, 0, 0, 0],
        ["i", "i", 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, "i", 0, 0, 0],
        ["i", 0, 0, 0, "i3", 0],
        ["i", 0, 0, 0, 0, 0]
    ],
};


// General Functions
function hidePage(input) {
    document.getElementById(input).classList.toggle("hidden");
}

function setText(input) {
    document.getElementById("text-output").innerHTML = `<p>${input}</p>`;
}

function setBackground(input) {
    document.getElementById("home-image").classList.add(input);
}

function changeLoc(input) {
    student.mapLocation = input;
    console.log(student.mapLocation);
}

function displayInv() {
    let elements = document.getElementsByClassName("valHold");

    for (i = 0; i < elements.length; i++) {
        document.getElementById(elements[i].parentElement.id).classList.add("hidden");
        if (elements[i].children[0].innerText > 0) {
            // Iterates thru items, if the item in player inv is < 0, then it unhides.
            // Will have to somehow reference the items in the array to the items in the HTML

            document.getElementById(elements[i].parentElement.id).classList.remove("hidden");
        }
    }

    checkHidden("inventory");
}

function displayMap() {
    // Functionality
    switch (student.mapLocation) {

        case "CART":
            document.getElementById("map").innerHTML = `<img src="mapImages/cart.png" alt="A map of CART"></img>`;
            break;

        case "Vista":
            document.getElementById("map").innerHTML = `<img src="mapImages/sierra.png" alt="A map of CART"></img>`;
            break;

        case "Road":
            document.getElementById("map").innerHTML = `<img src="mapImages/road.png" alt="A map of CART"></img>`;
            break;
    }

    checkHidden("map")
}

function isHidden(elementID) {
    // console.log(document.getElementById(elementID).classList.contains("hidden"));
    return document.getElementById(elementID).classList.contains("hidden");

}

function toggleElements() {
    hidePage("home-image");
    hidePage("button-container");
    hidePage("text-output");
}

function checkHidden(input) {
    switch (input) {
        case 'map':
            if (isHidden("inventory") && isHidden("map")) { //open map, both are closed
                hidePage("map");
                toggleElements();
                // console.log(isHidden("inventory") && isHidden("map"));
            }

            else if (isHidden("inventory")) { //closing map
                hidePage("map");
                toggleElements();
                // console.log(isHidden("inventory"));
            }

            else if (!isHidden("inventory")) { //opening map if inv is open
                hidePage("map");
                hidePage("inventory");
                // console.log(!isHidden("inventory"));
            }
            break;

        case 'inventory':

            if (isHidden("inventory") && isHidden("map")) { //open inv, both are closed
                hidePage("inventory");
                toggleElements();
            }

            else if (isHidden("map")) { //closing inv
                hidePage("inventory");
                toggleElements();
            }

            else if (!isHidden("map")) { //opening inventory if map is open
                hidePage("map");
                hidePage("inventory");
            }
            break;
        default: console.log('somethings busted');
    }
}

function utilBackground(input) {
    document.getElementById("home-image").style.backgroundImage = `url(${input})`;
}

// Random Function
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let locoText = null;

// NPC Function
function npcFunct(input = null) {

    switch (input) {

        case "james":

            break;

        case "icarus":

            break;

        case "allen":
            console.log("Allen Spawned");
            document.getElementById("home-image").innerHTML = `<img src='TeacherImages/allen.png' alt="Ms. Allen">`;

            if (student.mapLocation == "CART") {
                setText("Are you tagging along on our field trip?");


                document.getElementById("allenTalkCART").classList.remove("hidden");
                document.getElementById("staticTalk").classList.remove("hidden");
                document.getElementById("outsideGal").classList.toggle("hidden");
            }
            else {
                // SV Allen
                setText("We're leaving, are you ready to go?");
            }

            break;

        case null:
            // Change to work, idea is here
            if (student.mapLocation == "CART") {
                let ranNum = getRandomInt(10);

                if (ranNum < 2) {

                    let ranLab = getRandomInt(2);
                    console.log("ranLab Before: " + ranLab);

                    if (ranLab == 0) {
                        ranLab = "tech";
                        randomLab = 'tech';
                    }
                    else if (ranLab == 1) {
                        ranLab = "biomed";
                        randomLab = 'biomed';
                    }
                    console.log("Ran Num is: " + ranNum + ", with the Random Lab: " + ranLab);

                    //take random NPC src & log
                    let home_image = Ally.images[getRandomInt(9)];
                    console.log("The ally chosen is: ", home_image);

                    //plug into the code
                    document.getElementById("home-image").innerHTML =
                        `<img src='${home_image}' alt="A generic person colored in black and white.">`;

                    locoText = document.getElementById("text-output").innerText;
                    setText(Ally[ranLab].dialogue[getRandomInt(Ally[ranLab].dialogue.length - 1)]);
                    curDia = Ally[ranLab].dialogue[getRandomInt(Ally[ranLab].dialogue.length - 1)];
                }
                else if (ranNum >= 2) {

                    let ranLab = getRandomInt(3);
                    console.log("ranLab Before: " + ranLab);

                    if (ranLab == 0) {
                        ranLab = "multimedia";
                        randomLab = "multimedia";
                    }
                    else if (ranLab == 1) {
                        ranLab = "law";
                        randomLab = 'law';
                    }
                    else if (ranLab == 2) {
                        ranLab = "business";
                        randomLab = 'business';
                    }

                    console.log("Ran Num is: " + ranNum + ", with the Random Lab: " + ranLab);
                    console.log(NPC[ranLab]);

                    let npc_image = NPC.images[getRandomInt(8)];
                    console.log("The NPC image is: ", npc_image);

                    document.getElementById("home-image").innerHTML =
                        `<img src='${npc_image}' alt="A generic person colored in black and white.">`;

                    locoText = document.getElementById("text-output").innerText;
                    setText(NPC[ranLab].dialogue[getRandomInt(NPC[ranLab].dialogue.length - 1)]);
                    curDia = NPC[ranLab].dialogue[getRandomInt(NPC[ranLab].dialogue.length - 1)];
                }
                ranDia();
            }
            else if (student.mapLocation == "SV") {

                let npc_image = svNPC.guard.images[getRandomInt(2)];
                console.log("The NPC image is: ", npc_image);

                document.getElementById("home-image").innerHTML =
                    `<img src='${npc_image}.png' alt="A generic person colored in black and white.">`;
                setText(svNPC.guard.dialogue[getRandomInt(svNPC.guard.dialogue.length - 1)]);

                locoText = document.getElementById("text-output").innerText;

                // Take guard dialogue as well
                ranSV();
            }
    }
}

function shuffle() {
    let newVal = [];
    let num = getRandomInt(3);

    console.log("Random Num is: " + num)

    switch (num) {
        case 0:
            newVal = ["die", "win", "mid"];
            console.log("Accessed case 0");
            break;

        case 1:
            newVal = ["win", "mid", "die"];
            console.log("Accessed case 1");
            break;

        case 2:
            newVal = ["mid", "win", "die"];
            console.log("Accessed case 2");
            break;

        default:
            console.log("YOUNG MAN... KILL YOURSELF!");
            break;
    }

    return (newVal);
}

function ranSV() {
    let buttons = document.querySelectorAll("#npc-buttons button");

    //If it's not allys, then it grabs 1 from good, mid, bad obj for enemies and puts one of them on each button
    // Used to be shuffled later
    let arrVal = ["win", "mid2", "die"];

    // Shuffle values
    arrVal = shuffle();
    // console.log("Shuffled to: ", arrVal);

    let i = 0;
    buttons.forEach(part => {
        part.value = arrVal[i];
        console.log(part.value);
        i++;
        // Add money here
    });

    buttons.forEach(part => {
        let randomThing = null;
        let valCheck = part.value;
        console.log("Part Value: " + part.value);

        // Change button text based on their values
        switch (valCheck) {
            case "win":
                randomThing = getRandomInt(svNPC.guard.good.length);
                part.innerText = svNPC.guard.good[randomThing];
                break;

            case "mid2":
                randomThing = getRandomInt(svNPC.guard.mid.length);
                part.innerText = svNPC.guard.mid[randomThing];
                break;

            case "die":
                randomThing = getRandomInt(svNPC.guard.bad.length);
                part.innerText = svNPC.guard.bad[randomThing];
                break;
        }
    });

    document.getElementById('npc-buttons').classList.remove("hidden");
    document.getElementById("button-container").classList.add("hidden");
    document.getElementById("NPCtalk").classList.remove("hidden");

    document.getElementById("locIcon").classList.add("hidden");
    document.getElementById("backIcon").classList.add("hidden");
}

function ranDia() {
    let buttons = document.querySelectorAll("#npc-buttons button");

    //If it's not allys, then it grabs 1 from good, mid, bad obj for enemies and puts one of them on each button
    if ((randomLab != "tech") && (randomLab != "biomed")) {

        // Used to be shuffled later
        let arrVal = ["win", "mid", "die"];

        // Shuffle values
        arrVal = shuffle();
        // console.log("Shuffled to: ", arrVal);

        let i = 0;
        buttons.forEach(part => {
            part.value = arrVal[i];
            console.log(part.value);
            i++;
            // Add money here
        });

        buttons.forEach(part => {
            let randomThing = null;
            let valCheck = part.value;
            console.log("Part Value: " + part.value);

            // Change button text based on their values
            switch (valCheck) {
                case "win":
                    randomThing = getRandomInt(NPC[randomLab].good.length);
                    part.innerText = NPC[randomLab].good[randomThing];
                    break;

                case "mid":
                    randomThing = getRandomInt(NPC[randomLab].mid.length);
                    part.innerText = NPC[randomLab].mid[randomThing];
                    break;

                case "die":
                    randomThing = getRandomInt(NPC[randomLab].bad.length);
                    part.innerText = NPC[randomLab].bad[randomThing];
                    break;
            }
        });

    }
    else {
        // Makes all buttons good if ally encounter and add money
        console.log("An Ally");

        buttons.forEach(part => {
            part.innerText = "Ok?";
            part.value = "win";
            // Add money here
        });
    }

    document.getElementById('npc-buttons').classList.remove("hidden");
    document.getElementById("button-container").classList.add("hidden");
    document.getElementById("NPCtalk").classList.remove("hidden");

    document.getElementById("locIcon").classList.add("hidden");
    document.getElementById("backIcon").classList.add("hidden");
}


function endImg() {
    let ranUs = getRandomInt(9);

    console.log(`img picker got: ` + ranUs);

    if (ranUs % 2 == 0) {
        console.log(`jamber selected`);
        document.getElementById("endImgCont").innerHTML = `<img class="endImg" src="Images/jamesDead.png" alt="Game Over Screen">`;
    }

    else if (ranUs % 2 !== 0) {
        console.log(`icnog selected`);
        document.getElementById("endImgCont").innerHTML = `<img class="endImg" src="Images/icDead.png" alt="Game Over Screen">`;
    }
}


function endDisplay() {
    let ranNum = getRandomInt(3);

    if (document.getElementById("endHead") != undefined) {
        console.log(`head element found`);
        if (document.getElementById("endText") != undefined) {
            console.log(`text & head elements found`);
        }
    }
    else {
        console.log(`we're so cooked.`);
    }

    switch (ranNum) {
        case 0:
            console.log(`display one`);
            console.log(`Head: ${GameOver.endingOne[0]}, Text: ${GameOver.endingOne[1]}`);
            document.getElementById("endHead").innerText = GameOver.endingOne[0];
            document.getElementById("endText").innerText = GameOver.endingOne[1];
            endImg();
            break;

        case 1:
            console.log(`display two`);
            console.log(`Head: ${GameOver.endingTwo[0]}, Text: ${GameOver.endingTwo[1]}`);
            document.getElementById("endHead").innerText = GameOver.endingTwo[0];
            document.getElementById("endText").innerText = GameOver.endingTwo[1];
            endImg();
            break;

        case 2:
            console.log(`display three`);
            console.log(`Head: ${GameOver.endingThree[0]}, Text: ${GameOver.endingThree[1]}`);
            document.getElementById("endHead").innerText = GameOver.endingThree[0];
            document.getElementById("endText").innerText = GameOver.endingThree[1];
            endImg();
            break;
    }
}

function removeBg(input) {
    document.getElementById("home-image").classList.remove(input);
}

// DEBUG FUNCTION SECTION 


function addItem(id, num = 1) {
    let counter = parseInt(document.getElementById(id).innerText);

    switch (id) {

        case "paperValue":
            counter += num;
            document.getElementById(id).innerText = counter;
            student.inventory[0] = counter;
            return ("Added " + num + " to an ID of " + id);

        case "arsonValue":
            counter += num;
            document.getElementById(id).innerText = counter;
            student.inventory[1] = counter;
            return ("Added " + num + " to an ID of " + id);

        case "inspoValue":
            counter += num;
            document.getElementById(id).innerText = counter;
            student.inventory[2] = counter;
            return ("Added " + num + " to an ID of " + id);

        case "pickleValue":
            counter += num;
            document.getElementById(id).innerText = counter;
            student.inventory[3] = counter;
            return ("Added " + num + " to an ID of " + id);

        case "cressValue":
            counter += num;
            document.getElementById(id).innerText = counter;
            student.inventory[4] = counter;
            return ("Added " + num + " to an ID of " + id);

        default:
            console.log("Id not recognized, no item added");

    }
}

//inserts an npc image to debug
function insertImage(name) {
    document.getElementById("home-image").innerHTML =
        `<img src='StudentImages/${name}.png' alt="A generic person colored in black and white.">`;
}

//removes any inserted images
function removeImg() {
    document.getElementById("home-image").innerHTML = "";
}


//END DEBUG SECTION

let arsonImg = ["bucket", "gasTank", "styrofoam"];
let paperImg = ["fastArt1", "fastArt2", "fastArt3", "fastArt4", "fastArt5", "fastArt6"];
let inspoImg = ["doomPost", "finSix", "mallCop", "minMov", "pokePost"];

// Picking up functions
function pickUp() {

    let itemPlace = ItemMap.CART[student.locationY][student.locationX];

    // Reference actual location, not just CartItem
    switch (itemPlace) {

        case "i":
            // Portraits
            addItem("paperValue");
            ItemMap.CART[student.locationY][student.locationX] = 0;
            console.log("Paper Location");
            checkItems();
            setText('You found a portrait!');
            document.getElementById("home-image").innerHTML = `<img src='PortraitImages/${paperImg[paperImg.length - 1]}.jpeg' alt="One of the portraits needed for Slowversal!">`;
            paperImg.pop();

            break;

        case "i2":
            // Arson
            addItem("arsonValue");
            ItemMap.CART[student.locationY][student.locationX] = 0;
            console.log("Arson Location");
            setText(`You found.... something you definitely shouldn't have.`);
            checkItems();
            document.getElementById("home-image").innerHTML = `<img src='arsonImages/${arsonImg[arsonImg.length - 1]}.png' alt="One of the portraits needed for Slowversal!">`;
            arsonImg.pop();
            break;

        case "i3":
            // Inspo
            addItem("inspoValue");
            ItemMap.CART[student.locationY][student.locationX] = 0;
            console.log("Inspo Location");
            checkItems();
            document.getElementById("home-image").innerHTML = `<img src='InspoImages/${inspoImg[inspoImg.length - 1]}.png' alt="One of the portraits needed for Slowversal!">`;
            inspoImg.pop();
            break;

        case "p":
            addItem("pickleValue");
            ItemMap.CART[student.locationY][student.locationX] = 0;
            console.log("Pickle Location");
            setText(`Bro....... you found pickle.`);
            checkItems();
            break;
    }

}

function checkItems() {

    // Checks paper value
    if (student.inventory[0] >= 5) {
        // Display a given ending
        endingScreen("paper");
    }
    // Then checks arson value
    else if (student.inventory[1] >= 3) {
        // Display a given ending
        endingScreen("arson");
    }
    // Then checks inspo value
    else if (student.inventory[2] >= 5) {
        // Display a given ending
        endingScreen("inspo");
    }
    else if (student.inventory[3] >= 1) {
        // Do the pickle ending
        endingScreen("pickle");
    }

}

// Helper function for checkItems
function endingScreen(input) {

    hidePage("load-page");
    hidePage("home-page");
    hidePage("load-page");

    switch (input) {
        case "paper":
            // G
            hidePage("ending1");
            break;

        case "arson":
            // G
            hidePage("ending2");
            break;

        case "inspo":
            // G
            break;

        case "pickle":
            // G
            hidePage("ending3");
            break;

        case "dead":
            // G
            endDisplay();
            hidePage("ending4");
            break;

    }
}

function curCheck() {
    let elements = document.getElementsByClassName("curNPC");
    [...elements].forEach(part => {
        part.classList.add("hidden");
        part.classList.remove("curNPC");
    });
}

function setImg() {
    document.getElementById("home-image").innerHTML = `<img src="MiscItemImages/transpartns.png" id="transparent">`;
}

// GAME STUFF DON'T TOUCH
var student = new Player();

// After start button is pressed
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("start-btn").addEventListener("click", function () {
        // let nameInput = prompt("What's your name?");
        // student.name = nameInput;
        // student.updatePlayer();

        hidePage("load-page");
        hidePage("home-page");
        document.getElementById("name-container").innerText = student.name;
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("button-container").addEventListener("click", function (e) {
        let btnVal = e.target.value;

        switch (btnVal) {

            case "stairs":
                document.getElementById("atGallery").classList.toggle("hidden");
                document.getElementById("atStairs").classList.toggle("hidden");
                // document.getElementById("atGallery").classList.remove("current");
                // document.getElementById("atStairs").classList.add("current");
                setBackground("stairs");
                removeBg('galleryEntry');
                setText("You're at the stairs.");
                student.locationX = 1;
                student.locationY = 0;
                console.log("[ " + student.locationX + ", " + student.locationY + "]");
                setImg();
                break;

            case "janitor":
                document.getElementById("atGallery").classList.toggle("hidden");
                document.getElementById("atJanitor").classList.toggle("hidden");
                // document.getElementById("atGallery").classList.remove("current");
                // document.getElementById("atJanitor").classList.add("current");
                setText("As you walk through the hall, you see an unfamiliar door ajar. Upon closer inspection, it seems to be the janitor's closet. The room is fairly small, but not too crowded. There are many shelves, stacked with supplies. Bigger cleaning tools, such as brooms and mops, are stored near the dimly lit back wall.");
                setBackground('janitor')
                removeBg('galleryEntry');
                student.locationX = 2;
                student.locationY = 2;
                console.log("[" + student.locationX + ", " + student.locationY + "]");
                setImg();
                break;

            case "outside":
                document.getElementById("atGallery").classList.toggle("hidden");
                document.getElementById("outsideGal").classList.toggle("hidden");
                // document.getElementById("atGallery").classList.remove("current");
                // document.getElementById("outsideGal").classList.add("current");
                setText("You make your way outside from the exit of the Gallery. You see 2 big solar panels angled at the preferred degree. There's a couple wires hanging from the solar cells.");
                removeBg("galleryEntry");
                setBackground('outsideGal');
                student.locationX = 0;
                student.locationY = 2;
                console.log("[" + student.locationX + ", " + student.locationY + "]");
                setImg();
                break;

            case "hall":
                if (!isHidden('atrium')) {
                    document.getElementById("atrium").classList.toggle("hidden");
                    // document.getElementById("atrium").classList.remove("current");
                    removeBg('atrium');
                }
                else if (!isHidden('atGallery')) {
                    document.getElementById("atGallery").classList.toggle("hidden");
                    // document.getElementById("atGallery").classList.remove("current");
                    removeBg("galleryEntry");
                }
                else if (!isHidden('inMultimedia')) {
                    document.getElementById("inMultimedia").classList.toggle("hidden");
                    // document.getElementById("inMultimedia").classList.remove("current");
                    removeBg('multimedia');
                }
                document.getElementById("inHall").classList.toggle("hidden");
                document.getElementById("inHall").classList.add("current");
                setBackground('hall');
                setText("You make your way to the hallway, there's nothing too special about it, other than the yellow walls and brown-ish carpet on the floor. Where would you like to go?");

                student.locationX = 1;
                student.locationY = 3;
                console.log("[" + student.locationX + ", " + student.locationY + "]");
                setImg();
                break;

            case "atrium":
                if (!isHidden('inUX')) {
                    document.getElementById("inUX").classList.toggle("hidden");
                    // document.getElementById("inUX").classList.remove("current");
                    removeBg('ux');
                }
                else if (!isHidden('inWeb')) {
                    document.getElementById("inWeb").classList.toggle("hidden");
                    // document.getElementById("inWeb").classList.remove("current");
                    removeBg('web');
                }
                else if (!isHidden('inEnglish')) {
                    document.getElementById("inEnglish").classList.toggle("hidden");
                    // document.getElementById("inEnglish").classList.remove("current");
                    removeBg('english');
                }
                else if (!isHidden('inHall')) {
                    document.getElementById("inHall").classList.toggle("hidden");
                    removeBg('hall');
                }
                document.getElementById("atrium").classList.toggle("hidden");
                // document.getElementById("atrium").classList.add("current");
                setText("You're in the atrium connecting UX, English, Web, and the Gallery. Where would you like to go?");
                setBackground('atrium');
                student.locationX = 1;
                student.locationY = 6;
                console.log("[" + student.locationX + ", " + student.locationY + "]");
                setImg();
                break;

            case "gallery":
                if (!isHidden('inHall')) {
                    document.getElementById("inHall").classList.toggle("hidden");
                    // document.getElementById("inHall").classList.remove("current");
                    removeBg('hall');
                }
                else if (!isHidden('atStairs')) {
                    document.getElementById("atStairs").classList.toggle("hidden");
                    // document.getElementById("atStairs").classList.remove("current");
                    removeBg('stairs');
                }
                else if (!isHidden('atJanitor')) {
                    document.getElementById("atJanitor").classList.toggle("hidden");
                    // document.getElementById("atJanitor").classList.remove("current");
                    removeBg('janitor');
                }
                else if (!isHidden('outsideGal')) {
                    document.getElementById("outsideGal").classList.toggle("hidden");
                    removeBg('outsideGal');
                    // document.getElementById("current").classList.remove("current");
                }
                document.getElementById("atGallery").classList.toggle("hidden");
                // document.getElementById("gallery").classList.add("current");
                setText("The gallery is now in your view. It's a very large, open space to compensate for the large amounts of students during their breaks throughout the day. A group of six people sit at one of the tables, playing a very violent Uno game. There's tables everywhere, some with tabletop games on them. Closer to the exit, there's an abundance of vending machines and appliances. There seems to be something flimsy inside one of the vending machines.");
                setBackground("galleryEntry");
                student.locationX = 1;
                student.locationY = 2;
                console.log("[" + student.locationX + ", " + student.locationY + "]");
                setImg();
                break;

            case "multimedia":
                document.getElementById("inHall").classList.toggle("hidden");
                document.getElementById("inMultimedia").classList.toggle("hidden");
                // document.getElementById("inHall").classList.remove("current");
                // document.getElementById("inMultimedia").classList.add("current");
                removeBg('hall');
                setBackground('multimedia');
                setText("You walk into a big room, all filled with dispersed tables. On the wall, there's old short-film posters. It's a lot more colorful than most of the other labs at CART. From what you see, there's definitely more people in this lab than Tech Lab ever will.");
                student.locationX = 0;
                student.locationY = 3;
                console.log("[" + student.locationX + ", " + student.locationY + "]");
                setImg();
                break;

            case "ux":
                if (!isHidden('inWeb')) {

                    document.getElementById("inWeb").classList.toggle("hidden");
                    // document.getElementById("inWeb").classList.remove("current");
                    removeBg('web');
                }
                else if (!isHidden('atrium')) {
                    document.getElementById("atrium").classList.toggle("hidden");
                    // document.getElementById("atrium").classList.remove("current");
                    removeBg('atrium');
                }
                document.getElementById("inUX").classList.toggle("hidden");
                // document.getElementById("inUX").classList.add("current");
                setBackground('ux');
                setText("You trek your way to the User Experience Lab, or UX for short. It's the middle child of the Tech Lab, in terms of space in the room. The room is a lot brighter and more colorful than Web Applications. The overall vibe is a lot more lively than the other Tech Labs. At the back of the classroom, there's a phone holder with numbers for every student. The tables have the occasional bouncy-ball or seat different from a chair.");
                student.locationX = 0;
                student.locationY = 7;
                console.log("[" + student.locationX + ", " + student.locationY + "]");
                setImg();
                break;

            case "web":
                if (!isHidden('inUX')) {
                    // document.getElementById("inUX").classList.remove("current");
                    document.getElementById("inUX").classList.toggle("hidden");
                    removeBg('ux');
                }
                else if (!isHidden('atrium')) {
                    // document.getElementById("atrium").classList.remove("current");
                    document.getElementById("atrium").classList.toggle("hidden");
                    removeBg('atrium');
                }
                document.getElementById("inWeb").classList.toggle("hidden");
                // document.getElementById("inWeb").classList.add("current");
                setText("You walk into Web Applications. The room is very gray and dull, along with the dimly lit lights. There are 3 long tables with computers for every workstation, along with chairs and monitors. A poster on the far wall says “Tech Lab'' with 80's video game memorabilia. Web Application's room number reads N107.");
                setBackground('web');
                student.locationX = 0;
                student.locationY = 8;
                console.log("[" + student.locationX + ", " + student.locationY + "]");
                setImg();
                break;

            case "eng":
                document.getElementById("atrium").classList.toggle("hidden");
                document.getElementById("inEnglish").classList.toggle("hidden");
                // document.getElementById("atrium").classList.remove("current");
                // document.getElementById("inEnglish").classList.add("current");
                removeBg('atrium');
                setBackground('english');
                setText("You trudge your way into N110, the English classroom for the Tech Labs. The tables are oriented to be in the middle, and the edges of the classroom. The tables use the same chairs as Web Applications, but they have different tables. On one wall, there's a Jurassic Park poster, and on the other there's a Ready Player One poster. A DC lineup canvas of the Flash, Batman, Superman, and Wonder Woman swings from one of the walls precariously, looking like it's about to fall.");
                student.locationX = 2;
                student.locationY = 6;
                console.log("[" + student.locationX + ", " + student.locationY + "]");
                setImg();
                break;

            case "pickup":

                pickUp();
                console.log("Picked up Item");
                e.target.classList.add("hidden");
                return ("");

            case "continue":
                document.getElementById("inWeb").classList.toggle("hidden");
                document.getElementById("cutscene").classList.toggle("hidden");
                setBackground('web');
                setText("You walk into Web Applications. The room is very gray and dull, along with the dimly lit lights. There are 3 long tables with computers for every workstation, along with chairs and monitors. A poster on the far wall says “Tech Lab'' with 80's video game memorabilia. Web Application's room number reads N105.");
                student.locationX = 0;
                student.locationY = 8;

                console.log("[" + student.locationX + ", " + student.locationY + "]");
                setImg();

                // Stop npcFunct() from running
                return ("");


            // SV movement

            case "outside2":
                document.getElementById("atVistaEnt").classList.toggle("hidden");
                document.getElementById("outsideGal").classList.toggle("hidden");
                // document.getElementById("atGallery").classList.remove("current");
                // document.getElementById("outsideGal").classList.add("current");
                setText("You make your way outside from the exit of the Gallery. You see 2 big solar panels angled at the preferred degree. There's a couple wires hanging from the solar cells.");
                removeBg("outdoorEntry");
                setBackground('outsideGal');
                student.locationX = 0;
                student.locationY = 2;
                console.log("[" + student.locationX + ", " + student.locationY + "]");
                changeLoc("CART");
                setImg();
                break;

            case "theatreEntry":
                if (!isHidden('atVistaEnt')){
                    document.getElementById("atVistaEnt").classList.toggle("hidden");
                    removeBg('outdoorEntry');
                }
                else if(!isHidden('theatreRight')){
                    document.getElementById("theatreRight").classList.toggle("hidden");
                    removeBg('minecraftPoster');
                }
                else{
                    document.getElementById("theatreLeft").classList.toggle("hidden");
                    removeBg('blartPoster');
                }
                document.getElementById("atTheatreEnt").classList.toggle("hidden");
                setText("principium finis venit");
                removeBg('outdoorEntry');
                setBackground('theaterEntry');
                setImg();
                break;

            case "plaza":
                if (!isHidden("atTheatreEnt")) {
                    console.log("Prev location:  theatrenetry");
                    document.getElementById("atTheatreEnt").classList.toggle("hidden");
                    removeBg('theatreEntry');
                }
                else {
                    console.log("Prev location:  inside sv");
                    document.getElementById("insideSV").classList.toggle("hidden");
                    removeBg('mallEntry');
                }

                document.getElementById("atVistaEnt").classList.toggle("hidden");
                setBackground("outdoorEntry");
                setText("principium finis venit ut progredimini");
                setImg();
                break;

            case "rightPosters":
                if (!isHidden("atTheatreEnt")) {
                    document.getElementById("atTheatreEnt").classList.toggle("hidden");
                    removeBg('theatreEntry');
                }
                else {
                    document.getElementById("theatreLeft").classList.toggle("hidden");
                    removeBg('blartPoster');
                }

                document.getElementById("theatreRight").classList.toggle("hidden");
                setBackground("minecraftPoster");
                setText("bellatores albi delete legatum veorum deterum ut progredimini at mundum novum");
                setImg();
                break;

            case "leftPosters":
                if (!isHidden("atTheatreEnt")) {
                    document.getElementById("atTheatreEnt").classList.toggle("hidden");
                    removeBg('theatreEntry');
                }
                else {
                    document.getElementById("theatreRight").classList.toggle("hidden");
                    removeBg('minecraftPoster');
                }

                document.getElementById("theatreLeft").classList.toggle("hidden");
                setBackground("blartPoster");
                setText("expegiscimini bellatores rubri principium finis venit");
                setImg();
                break;

            case "insideEntry":
                document.getElementById("atVistaEnt").classList.toggle("hidden");
                removeBg('outdoorEntry');
                setText('currite bellatores rubri donec animi dati matre extinguant')
                setImg();
                break;

            default:
                return ("");
        }

        let ranNum = getRandomInt(5);
        if (ranNum == 0) {
            npcFunct();
        }

    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("staticTalk").addEventListener("click", function (e) {
        let btnVal = e.target.value;

        switch (btnVal) {

            // Static NPC BtnVals

            case "alCARTyes":
                document.getElementById("outsideGal").classList.add("hidden");
                document.getElementById("allenTalkCART").classList.add("hidden");
                document.getElementById("staticTalk").classList.add("hidden");
                document.getElementById("atVistaEnt").classList.remove("hidden");
                student.mapLocation = "SV";
                removeBg('outsideGal');
                setBackground('outdoorEntry');
                setText("You at SV Entrance die die die die die die die die die die");
                student.locationX = 3;
                student.locationY = 4;
                console.log("[" + student.locationX + ", " + student.locationY + "]");
                setImg();

                break;

            case "alCARTno":
                afterNPC("allen");
                setText("YOU MAKE YOUR WAY OUTSIDE FROM THE EXIT OF THE GALLERY. YOU SEE 2 BIG SOLAR PANELS ANGLED AT THE PREFERRED DEGREE. THERE'S A COUPLE WIRES HANGING FROM THE SOLAR CELLS.");
                break;

        }
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

function afterNPC(input) {
    switch (input) {

        case "allen":
            document.getElementById("allenTalkCART").classList.add("hidden");
            console.log("Static Talk Unhidden");
            document.getElementById("button-container").classList.remove("hidden");

            if (student.mapLocation == "CART") {
                document.getElementById("button-container").classList.toggle("hidden");
                document.getElementById("outsideGal").classList.toggle("hidden");
            }

        default:
            // Change to transparent img
            document.getElementById("home-image").innerHTML =
                `<img src='MiscItemImages/transpartns.png' id="transparent" alt="Nothin">`;
            // let curNPC = document.getElementById('npc-buttons').classList.contains('curNPC');
            // curNPC.classList.add('hidden');
            // Set text back to locational text
            document.getElementById("text-output").innerText = locoText;
            document.getElementById("text-output").classList.remove("hidden");

            if (document.getElementById("button-container").classList.contains("current")) {
                document.getElementById("button-container").classList.remove("current");
                document.getElementById("button-container").classList.remove("hidden");
            }

            document.getElementById('npc-buttons').classList.add("hidden");
            document.getElementById("button-container").classList.remove("hidden");
            document.getElementById("NPCtalk").classList.add("hidden");

            document.getElementById("locIcon").classList.remove("hidden");
            document.getElementById("backIcon").classList.remove("hidden");
            break;
    }
}

function healthFlash() {
    addRed();
    // Count for 5 seconds, then remove class slide
    setTimeout(removeRed, 200);
}

function addRed() {
    document.getElementById("health").classList.add("redFlash");
}

function removeRed() {
    document.getElementById("health").classList.remove("redFlash");
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("npc-buttons").addEventListener("click", function (e) {

        let npcVal = e.target.value;

        console.log(npcVal);

        switch (npcVal) {

            case "win":
                afterNPC();
                break;

            case "mid":
                // Hides all dialogue, then reassigns a random dialogue option
                curCheck();
                ranDia();

                break;

            case "die":
                healthFlash();

                var endSound = new Audio("Sounds/taco.mp3");
                endSound.play();
                time -= 15;

                document.getElementById("health").innerText = time + " minutes";
                afterNPC();

                if (time <= 0) {
                    endingScreen("dead");
                }

                break;
        }
    });
});