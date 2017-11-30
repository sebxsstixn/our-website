var gameScript = {
   start: "on island",
   "on island": [
       "You are stranded on an island. You see your broken boat.",
       ["Get in the broken boat for shelter and rest.", "Look around island for resources to help repair your boat and food to eat."],
       "http://www.netanimations.net/water_waves_ocean_ripple_high_quality_animated_gif.gif"
   ],
   "Get in the broken boat for shelter and rest.": [
     "You get in the boat. You see a large creature lurking in the water." ,
     ["Leave it be","Try to catch it to eat"],
       "https://ak6.picdn.net/shutterstock/videos/26035436/thumb/1.jpg?i10c=img.resize(height:160)"
   ],
    "Look around island for resources to help repair your boat and food to eat.": [
        "you look around the island.  there is a house.",
        ["Go into the house", "Keep looking around  the island and don't bother with the house"],
        "http://www.destination360.com/central-america/nicaragua/images/s/corn-islands.jpg"
    ],
    "Go into the house": [
        "You walk into the house. There are blood stains all over the the hallway.",
        ["Go deeper into the house to see what has happened.", "You are too scared to go in and just keep looking around the island."],
        "https://i.pinimg.com/originals/07/dd/cf/07ddcf8fd474374edc0da6a72b801e86.jpg"
    ],
    
    "Go deeper into the house to see what has happened.": [
        "You walk into the kitchen and you see a stabbed man on the floor. ",
        ["You see if the man is still alive.", "You stop in horror and immediately start sprinting out of the house."],
        "https://cdn.gamerant.com/wp-content/uploads/doom-4-leaked-concept-art-bloody-hallway.jpg"
    ],
    
     "Try to catch it to eat": [
        "You dive in the water to try to catch it and the creature eats you. GAME OVER",
        []
       
    ],
    
     "Leave it be": [
     "You leave the creature be and take a nap. While you are sleeping the creature makes a whole in the bottom of the boat and you drown to death. GAME OVER!" ,
     []
    ],
    
     "You are too scared to go in and just keep looking around the island.": [
     "You keep going deeper into the island. You spot a radio tower and walk over to it. Yous send out a SOS and get rescued the next day.YOU WIN!" ,
     []
   ],
      "You see if the man is still alive.": [
     "The man is still breathing and he pulls out a needle and stabs you with an infectious disease. YOU LOSE!" ,
     []
      
   ],
     "You stop in horror and immediately start sprinting out of the house.": [
     "As you sprint out of the house cut your foot on a spike on the floor and it becomes infectious. You die 3 days later. YOU LOSE!" ,
     []
      
   ],
}

var sampleState = [
    "this is the current thing",
    ["hi", "bye"]
]

function renderButtons(buttonList) {
    var html = '';
    buttonList.forEach(function(txt) {
           html += '<button onclick="renderState(gameScript[\'' + txt + '\'])">' + txt + '</button>'; 
    });
    return html;
    
}

function renderState(state) {
    document.getElementById("description").innerHTML = state[0];
    document.getElementById("thebuttons").innerHTML = renderButtons(state[1]);
    document.getElementById("images").setAttribute("src", state[2]);
}

renderState(gameScript[gameScript["start"]])