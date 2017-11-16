var gameScript = {
   start: "on island",
   "on island": [
       "you are on an island. You see your broken boat.",
       ["get in broken boat for shelter and rest.", "look around island for resouces to help repair your boat and food to eat."]
   ],
   "get in broken boat for shelter and rest": [
     "you get in the boat. You see a large creature lurking in the water" ,
     ["leave it be","try to catch it to eat"]
   ],
    "look around island for resouces to help repair your boat and food to eat": [
        "you look around the island.  there is a hut.",
        ["go in the hut", "keep looking around and don't bother with the hut"]
    ],
    "go into the hut": [
        "you look around the island.  there is a hut.",
        ["go in the hut", "get in boat"]
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
    document.getElementById("description").innerHTML = gameScript[0];
    document.getElementById("thebuttons").innerHTML = renderButtons(state[1]);
}

renderState(gameScript[gameScript["start"]])