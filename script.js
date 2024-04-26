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
        dialogue: ["Hey, did you hear about what happened in Web today? Go get yourself a snack or something. We're all doomed.", "I'm on a streak in Laser Grids rn. Just take this and leave me alone.", "Schawlgalawg! My new simlish coding language is really takin' off! It goes something like this:  You not ooh rah dah en dahp ooh rah daht endaht en dik ah poo ra ta teek a poo rah doo rah do dik oh mumblio dah dah dosa pa errah sa de.", "Dude I did NOT sign up for this.. I've gotta get outta here.", "I shoulda stayed in theatre tech like the clown I am. Good luck, man. Could this help?", "(scream)", "UX is my passion.", "IGD is my passion.", "Don't get your panties in a twist, babe. Here.", "Yo tengo tu mama!", "Look under there! HAHAHAHAHAHAHAHAHAHAHAHAHA! You said underwear!", "Dont trip, chocolate chip.", "So BOOM!", "Bless!", "I'm totally Grending right now.", "*Metal pipe sound effects*", "Don't Violate Section 3", "My name is John.", "I've gyatt to get my work done.", "I pushed my fingers into my eyes.", "I'm totally Grending right now."],
        reply: ["Thanks!"],
        atk: [1],
        drop: [1],
    },

    biomed: {
        dialogue: ["Slouching is actually really bad for 16.5 of your internal organs as well as your upper spine. If I give you this will you sit up straighter?", "It's actually really interesting seeing how computer light affects retinal processing and circadian rhythm. Study sesh sometime? About what? Well, you'd be the subject. Here, just. Take this as, like, a gift. Think about it.", "I didn't know that tech students could actually walk' I thought the chairs were, like, a part of the anatomy. Now that I think about it, it makes sense why I'm failing.", "Dude I know more about computers from playing Valorant than I will ever learn in this class.", "Biomed is my passion."],
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
    CART:
        [[0], ["s"], [0],
        [0], [0], [0],
        ["e1",], ["g", "galleryEntry"], ["j", "mrMog"],
        ["n100", "mrMog"], ["h", "mrMog"], [0],
        ["n101", "mrMog"], ["h", "mrMog"], [0],
        [0], ["h", "mrMog"], [0],
        ["n104", ""], ["h", "mrMog"], ["b2"],
        ["n105", ""], ["h", "mrMog"], ["n110"],
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
        CART: [

            [0, "i", 0],
            [0, 0, 0],
            ["i2", "i", "i2"],
            ["i2", "p", 0],
            ["i", "i", 0],
            [0, 0, 0],
            [0, 0, "i"],
            ["i", 0, 0],
            ["i", 0, 0]
        ],

    toodee: [
        [0,0,0],
        [0,0,0],
    ],

    Outside: [["i2"], [0]],

    Janitor: [[0], ["i2"]],

    Vista:
        [[0], ["i3"], [0],
        [0], [0], ["i3"],
        [0], ["i3"], [0],
        [0], [0], [0],
        [0], [0], [0],
        [0], [0], [0],
        [0], [0], [0],
        [0], ["i3"], [0],
        [0], [0], [0]],
};


// General Functions
function hidePage(input) {
    document.getElementById(input).classList.toggle("hidden");
}

function setText(input) {
    document.getElementById("text-output").innerText = input;
}

function setBackground(input) {
    document.getElementById("home-image").classList.add(input);
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

// NPC Function
function npcFunct() {

    // Change to work, idea is here
    if (student.mapLocation != "Vista") {
        let ranNum = getRandomInt(2);

        if (ranNum == 0) {

            let ranLab = getRandomInt(2);
            console.log("ranLab Before: " + ranLab);

            if (ranLab == 0) {
                ranLab = "tech";
            }
            else if (ranLab == 1) {
                ranLab = "biomed";
            }
            console.log("Ran Num is: " + ranNum + ", with the Random Lab: " + ranLab);

            document.getElementById("home-image").innerHTML =
                `<img src='${Ally.images[getRandomInt(9)]}' alt="A generic person colored in black and white.">`;

            // Take ally dialogue as well
            setText(Ally[ranLab].dialogue[getRandomInt(Ally[ranLab].dialogue.length - 1)]);

            // Set button values

        }
        else if (ranNum == 1) {

            let ranLab = getRandomInt(3);
            console.log("ranLab Before: " + ranLab);

            if (ranLab == 0) {
                ranLab = "multimedia";
            }
            else if (ranLab == 1) {
                ranLab = "law";
            }
            else if (ranLab == 2) {
                ranLab = "business";
            }

            console.log("Ran Num is: " + ranNum + ", with the Random Lab: " + ranLab);
            console.log(NPC[ranLab])
            document.getElementById("home-image").innerHTML =
                `<img src='${NPC.images[getRandomInt(6)]}' alt="A generic person colored in black and white.">`;

            // Take enemey dialogue as well
            setText(NPC[ranLab].dialogue[getRandomInt(NPC[ranLab].dialogue.length - 1)]);


            // Set button values

        }
    }
    else {
        document.getElementById("home-image").innerHTML =
            `<img src='${svNPC.guard.images[getRandomInt(3)]}' alt="A generic person colored in black and white.">`;

        // Take guard dialogue as well
        setText(svNPC.guard.dialogue[getRandomInt()]);

        // Set button values

    }

    let ranBut = getRandomInt(4);

    document.getElementById("button-container").classList.add("hidden");

    switch (ranBut) {
        case 0:
            document.getElementById('NPCtalk1').classList.remove('hidden');
            break;
        case 1:
            document.getElementById('NPCtalk2').classList.remove('hidden');
            break;
        case 2:
            document.getElementById('NPCtalk3').classList.remove('hidden');
            break;
        case 3:
            document.getElementById('NPCtalk4').classList.remove('hidden');
            break;
    }

}

function endDisplay() {
    let ranNum = getRandomInt(3);

    switch (ranNum) {
        case 0:
            document.getElementById("endHead").innerText(GameOver.endingOne[0]);
            document.getElementById("endText").innerText(GameOver.endingOne[1]);
            break;

        case 1:
            document.getElementById("endHead").innerText(GameOver.endingTwo[0]);
            document.getElementById("endText").innerText(GameOver.endingTwo[1]);
            break;

        case 2:
            document.getElementById("endHead").innerText(GameOver.endingThree[0]);
            document.getElementById("endText").innerText(GameOver.endingThree[1]);
            break;
    }
}

function removeBg(input) {
    document.getElementById("home-image").classList.remove(input);
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("button-container").addEventListener("click", function (e) {

        // Get value of button pressed
        // Change background / text depending on where you are using switch statement
        // Update player location in 2D array
        // Unhide section for place you're in

        // Call npcFunct() first to have it change the button values first
        // Random NPC Interaction


        // Grabs value from the button clicked
        // Awaits the npcFunct()
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
                console.log("[ " + student.locationX + ", " + student.locationY + "]")
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
                console.log("[" + student.locationX + ", " + student.locationY + "]")
                break;

            case "outside":
                document.getElementById("atGallery").classList.toggle("hidden");
                document.getElementById("outsideGal").classList.toggle("hidden");
                // document.getElementById("atGallery").classList.remove("current");
                // document.getElementById("outsideGal").classList.add("current");
                setText("You make your way outside from the exit of the Gallery. You see 2 big solar panels angled at the preferred degree. There's a couple wires hanging from the solar cells.");
                removeBg("galleryEntry");
                student.locationX = 0;
                student.locationY = 2;
                console.log("[" + student.locationX + ", " + student.locationY + "]")
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
                console.log("[" + student.locationX + ", " + student.locationY + "]")
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
                console.log("[" + student.locationX + ", " + student.locationY + "]")
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
                    // document.getElementById("current").classList.remove("current");
                }
                document.getElementById("atGallery").classList.toggle("hidden");
                // document.getElementById("gallery").classList.add("current");
                setText("The gallery is now in your view. It's a very large, open space to compensate for the large amounts of students during their breaks throughout the day. A group of six people sit at one of the tables, playing a very violent Uno game. There's tables everywhere, some with tabletop games on them. Closer to the exit, there's an abundance of vending machines and appliances. There seems to be something flimsy inside one of the vending machines.");
                setBackground("galleryEntry");
                student.locationX = 1;
                student.locationY = 2;
                console.log("[" + student.locationX + ", " + student.locationY + "]")
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
                console.log("[" + student.locationX + ", " + student.locationY + "]")
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
                console.log("[" + student.locationX + ", " + student.locationY + "]")
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
                setText("You walk into Web Applications. The room is very gray and dull, along with the dimly lit lights. There are 3 long tables with computers for every workstation, along with chairs and monitors. A poster on the far wall says “Tech Lab'' with 80's video game memorabilia. Web Application's room number reads N105.");
                setBackground('web')
                student.locationX = 0;
                student.locationY = 8;
                console.log("[" + student.locationX + ", " + student.locationY + "]")
                break;

            // case "web2":
            //     // Whateva
            //     break;

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
                console.log("[" + student.locationX + ", " + student.locationY + "]")
                break;

            case "pickup":

                pickUp();
                console.log("Picked up Item");
                return ("");

            case "continue":
                document.getElementById("inWeb").classList.toggle("hidden");
                document.getElementById("cutscene").classList.toggle("hidden");
                setBackground('web');
                setText("You're in Web Design.");
                student.locationX = 0;
                student.locationY = 8;

                console.log("[" + student.locationX + ", " + student.locationY + "]")

                // Stop npcFunct() from running
                return ("");

            default:
                return ("");

        }

        // let ranNum = getRandomInt(5);
        // if (ranNum == 0) {

        //     // Promise this to go first
        //     npcFunct();
        // }

    });
});


// Debug functions
function addItem(id, num) {

    let counter = parseInt(document.getElementById(id).innerText);

    switch (id) {

        case "paperValue":
            counter += num;
            document.getElementById(id).innerText = counter;
            student.inventory[0] += counter;
            return ("Added " + num + " to an ID of " + id);

        case "arsonValue":
            counter += num;
            document.getElementById(id).innerText = counter;
            student.inventory[1] += counter;
            return ("Added " + num + " to an ID of " + id);

        case "inspoValue":
            counter += num;
            document.getElementById(id).innerText = counter;
            student.inventory[2] += counter;
            return ("Added " + num + " to an ID of " + id);

        case "pickleValue":
            counter += num;
            document.getElementById(id).innerText = counter;
            student.inventory[3] += counter;
            return ("Added " + num + " to an ID of " + id);

        case "cressValue":
            counter += num;
            document.getElementById(id).innerText = counter;
            student.inventory[4] += counter;
            return ("Added " + num + " to an ID of " + id);

        default:
            console.log("Id not recognized, no item added");

    }
}

// Picking up functions
function pickUp() {

    let itemPlace = ItemMap.CART[student.locationY][student.locationX];

    // Reference actual location, not just CartItem
    switch (itemPlace) {

        case "i":
            // Portraits
            addItem("paperValue", 1);
            ItemMap.CART[student.locationY][student.locationX] = 0;
            console.log("Paper Location");
            checkItems();
            break;

        case "i2":
            // Arson
            addItem("arsonValue", 1);
            ItemMap.CART[student.locationY][student.locationX] = 0;
            console.log("Arson Location");
            checkItems();
            break;

        case "i3":
            // Inspo
            addItem("inspoValue", 1);
            ItemMap.CART[student.locationY][student.locationX] = 0;
            console.log("Inspo Location");
            checkItems();
            break;

        case "p":
            addItem("pickleValue", 1);
            ItemMap.CART[student.locationY][student.locationX] = 0;
            console.log("Pickle Location");
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

    switch (input) {

        case "paper":
            // G
            break;

        case "arson":
            // G
            break;

        case "inspo":
            // G
            break;

        case "pickle":
            // G
            break;

    }

}

// GAME STUFF DON'T TOUCH
var student = new Player();

// After start button is pressed
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("start-btn").addEventListener("click", function () {


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


