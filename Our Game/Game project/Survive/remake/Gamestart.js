function popupfunction(){
    document.getElementById('ays').innerHTML="Are you sure you can start now?";
    document.getElementById('ays').style.display="block";
    document.getElementById('popupbox').style.display="block";
    document.getElementById('startbtn').style.display="none";
    document.getElementById('loadbtn').style.display="none";
    document.getElementById('giveupbtn').style.display="none";
    document.getElementById('popup1btn1').style.display="block";
    document.getElementById('popup1btn2').style.display="block";
    document.getElementById('popup1btn1').innerHTML="Yes I'm really sure.";
    document.getElementById('popup1btn2').innerHTML="No...";
    document.getElementById('popup1btn3').style.display="none";
}

function diefunction(){
    document.getElementById('popup1btn1').style.display="none";
    document.getElementById('popup1btn2').style.display="none";
    document.getElementById('startbtn').style.display="block";
    document.getElementById('loadbtn').style.display="block";
    document.getElementById('giveupbtn').style.display="block";
    document.getElementById('popupbox').style.display="none";
    document.getElementById('popup1btn3').style.display="none";
}

function youcantfunction(){
    document.getElementById('ays').innerHTML="Sorry, I haven't develop this function yet.";
    document.getElementById('ays').style.display="block";
    document.getElementById('popupbox').style.display="block";
    document.getElementById('startbtn').style.display="none";
    document.getElementById('loadbtn').style.display="none";
    document.getElementById('giveupbtn').style.display="none";
    document.getElementById('popup1btn1').style.display="block";
    document.getElementById('popup1btn2').style.display="block";
    document.getElementById('popup1btn1').innerHTML="That's ok, let's start!";
    document.getElementById('popup1btn2').innerHTML="Fine.";
    document.getElementById('popup1btn3').style.display="none";
}

function dienofunction(){
    document.getElementById('ays').innerHTML="Never Give Up";
    document.getElementById('ays').style.display="block";
    document.getElementById('popupbox').style.display="block";
    document.getElementById('startbtn').style.display="none";
    document.getElementById('loadbtn').style.display="none";
    document.getElementById('giveupbtn').style.display="none";
    document.getElementById('popup1btn3').style.display="block";
    document.getElementById('popup1btn2').style.display="block";
    document.getElementById('popup1btn2').innerHTML="......";
        document.getElementById('popup1btn3').innerHTML="......";
}

function hpopupfunction(){
    
}