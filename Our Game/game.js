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
       
        "https://i.pinimg.com/736x/ae/7c/22/ae7c22a1a89851bf8ca3e8939cb6ec9d--scary-fish-deep-sea-creatures.jpg"
   ],
    "Look around island for resources to help repair your boat and food to eat.": [
        "you look around the island.  there is a house.",
        ["Go into the house", "Keep looking around the island and ignore the house"],
        
        "https://i.pinimg.com/originals/07/dd/cf/07ddcf8fd474374edc0da6a72b801e86.jpg"
    ],
    "Go into the house": [
        "You walk into the house. There are blood stains all over the the hallway.",
        ["Go deeper into the house to see what has happened.", "You are too scared to go in and just keep looking around the island."],
        
       "https://cdn.gamerant.com/wp-content/uploads/doom-4-leaked-concept-art-bloody-hallway.jpg"
    ],
    
    "Go deeper into the house to see what has happened.": [
        "You walk into the kitchen and you see a stabbed man on the floor. ",
        ["You see if the man is still alive.", "You stop in horror and immediately start sprinting out of the house."],
        
        "https://cdn.drawception.com/images/panels/2017/5-10/2QFbK5ZaWp-4.png"
    ],
    
     "Try to catch it to eat": [
        "You dive in the water to try to catch it and the creature eats you. GAME OVER",
        [],
        
         "https://assets.rbl.ms/12219965/980x.png"
       
    ],
    
     "Leave it be": [
     "You leave the creature be and take a nap. While you are sleeping the creature makes a whole in the bottom of the boat and you drown to death. GAME OVER!" ,
     [],
         "https://lintvwood.files.wordpress.com/2015/06/c-g-rescue.jpg?w=650"
    ],
    
     "You are too scared to go in and just keep looking around the island.": [
     "You keep going deeper into the island. You spot a radio tower and walk over to it. You send out a SOS and get rescued the next day. YOU WIN!" ,
     [],
         "https://www.teamcast.com/wp-content/uploads/2015/10/Visuel-Direct-To-Tower-pour-page-parent-640.jpg"
   ],
      "You see if the man is still alive.": [
     "The man is still breathing and he pulls out a needle and stabs you with an infectious disease. YOU LOSE!" ,
     [],
          "http://www.nation.co.ke/image/view/-/2903666/highRes/1141383/-/maxw/600/-/acnlblz/-/stab-pic.jpg"
      
   ],
     "You stop in horror and immediately start sprinting out of the house.": [
     "As you sprint out of the house cut your foot on a spike on the floor and it becomes infectious. You die 3 days later. YOU LOSE!" ,
     [],
         "https://vignette.wikia.nocookie.net/play-rust/images/f/f7/Wooden_Floor_Spikes_icon.png/revision/latest?cb=20150517235346"
      
   ],
    "Keep looking around the island and ignore the house": [
     "You keep going deeper into the island. You try to go back to your boat but you lose your trail and fall off a cliff while trying to find your way back. YOU LOSE!" ,
     [],
        "https://prepareaware.files.wordpress.com/2010/05/lostinforest.jpg"
      
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