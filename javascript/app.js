$(document).ready(function(){
    console.log("ready")
    $("#button2, #b, #c, #button3").hide();
    $(":button").on("click", intro)
    
 });

 var intro = function (){
   var crd = "Round 1";
   var QA ="The following series of questions will test your character knowledge. Answer the next 6 questions in 60 seconds. Pleeease... don’t pull a “Cole” on these!"
   document.getElementById("img").src = "assets/images/coleustupid.png";
$("#timer").text("60:00")
$("h5").text(crd);
$("#par2").text(QA);
$("#a").show();
$("#a").text("Start round 1")
$("#button2").hide()
// $("#button2").on("click", setTimeout/round1, startquestions )

/// on click 
// $("#button2").on("click", "start timer and go next question");

};

// setTimeout(round1, 1000 * 60);

function round1(){

    

    $("#a, #b, #c,").show();
    $("#a").text(buttonA)
    $("#b").text(buttonB)
    $("#c").text(buttonC)
    $("#spot1").text(questnum)
    $("par2").text(quest)

 
    if(option===answer)
    wins++




var questArr = [

    quest0 = [{
        questinfo:{
            questnum: "Question 1",
            quest: "In what city does Martin live?",
            answer: "Detroit",
        },
         options: {
            buttonA: "Cleveland",
            buttonB: "Detroit",
            buttonC: "Philadelphia",
            }
        }],
    
    quest1 = [{
        questinfo:{
            questnum: "Question 2",
            quest: "What is the character Martin last name?",
            answer: "Payne"
        },
        options: {
            buttonA: "Lawrence",
            buttonB: "Smith",
            buttonC: "Payne",
            }
        }],

    
    quest2 = [{
        questinfo:{
            questnum: "Question 3",
            quest: "What is Gina’s maiden name?",
            answer: "Waters",
        },
         options: {
            buttonA: "Waters",
            buttonB: "Kyle",
            buttonC: "Applehead",
            }
        }],
    
    quest3 = [{
        questinfo:{
            questnum: "Question 4",
            quest: "What is Pam’s last name?",
            answer: "James",
        },
            options: {
            buttonA: "Jordan",
            buttonB: "James",
            buttonC: "Jenson",
            }
        }],
    
    quest4 = [{
        questinfo:{
            questnum: "Question 5",
            quest: "What is the Cole’s last name?",
            answer: "Brown",
        },
            options: {
            buttonA: "Cockroach",
            buttonB: "Benson",
            buttonC: "Brown",
            }
        }],

    quest5 = [{
        questinfo:{
            questnum: "Question 6",
            quest: "What is Tommy’s last name?",
            answer: "Strawn",
        },
            options: {
            buttonA: "Smalls",
            buttonB: "Ford",
            buttonC: "Strawn",
            }
        }],
   
        
]
}

// var questionShuffle = function ()









// var Question2 = function (){

// }

// var changeQuest = function (){
    

// }


// Opening Discription











//https://youtu.be/C_IInCrun9w   Hustle man Marsalles
//https://www.youtube.com/watch?v=ZZeiHuBIx64 - Ms Geri Tuna

//https://www.youtube.com/watch?v=PMEsNWSIdTA - Ms Geri DMV
//https://www.youtube.com/watch?v=b3wGCOq4PDU - Pam vs Martin
//https://www.youtube.com/watch?v=jrw_zRBWeZA - Dragon Fly Jones

//What's the name of the TV station Martin Worked for\.
//What was his boss' name 
//The actress who played Myra had camoes on many different tv shows. 
//What was the name of his boss' girlfriend
//Gina's was an ad executive for what company ?
// What was her boss' name?
//In this scene : Martin under the bed: what was happening on top of the bed?

//Which was not a character that Martin played. Show pictures in the answers. 

// Psuedo Code

//done one start
//done welcome page in QA section
//done All buttons register press anybutton to start
//done Timer ready
//done Video section has picture
//done Video section says check here for clips later in the game. 

// done round 1-// basic trivia 
// done qa section gives introduction
// done pic changes to Cole you stupid

            // var src = document.getElementById("img").getAttribute("src");
            // document.getElementById("source").innerHTML = src;
//done press start game to get question
//done Video section doesn't change. 

///question 1
//timer is counting down
//qa gives 1st series of questions
//buttons abc have choices
//pictures change on each question
//question changes after each choice. 
// each response is counted for the round
// each incorrect response if counted
// a percentage of knowledge is counted. 








