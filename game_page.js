player1_name=localStorage.getItem("player1_name")
player2_name=localStorage.getItem("player2_name")
player1_score=0
player2_score=0
var question_turn="player1"
var answer_turn="player2"
document.getElementById("player1_name").innerHTML=player1_name+" : "
document.getElementById("player2_name").innerHTML=player2_name+" : "
document.getElementById("player1_score").innerHTML=player1_score
document.getElementById("player2_score").innerHTML=player2_score
document.getElementById("player_question").innerHTML="questionturn - "+player1_name
document.getElementById("player_answer").innerHTML="answerturn - "+player2_name
function send(){
    get_word=document.getElementById("word").value
    get_word1=document.getElementById("word1").value
    actual_ans=parseInt(get_word)*parseInt(get_word1)
    question_word="<h4> "+get_word+" X "+get_word1+"</h4>"
    input_box = "<br> answer: <input type='text' id='input_check_box'>"
    check_button="<br> <br> <button class='btn btn-info' onclick='check()'>check</button>"
    row=question_word+input_box+check_button
    document.getElementById("output").innerHTML=row
    document.getElementById("word").value=""
    document.getElementById("word1").value=""
}
function check(){
    var get_answer=document.getElementById("input_check_box").value
    if (get_answer==actual_ans) {
    if (answer_turn=="player1") {
    player1_score=player1_score+1
    document.getElementById("player1_score").innerHTML=player1_score   
    } 
    else {
    player2_score=player2_score+1
    document.getElementById("player2_score").innerHTML=player2_score 
     }   
    }
    if (question_turn=="player1") {
    question_turn="player2"
    document.getElementById("player_question").innerHTML="question turn - "+player2_name   
    } else {
        question_turn="player1"
        document.getElementById("player_question").innerHTML="question turn - "+player1_name       
    }
    if (answer_turn=="player2") {
        answer_turn="player1"
        document.getElementById("player_answer").innerHTML="answer turn - "+player1_name    
    } else {
        answer_turn="player2"
        document.getElementById("player_answer").innerHTML="answer turn - "+player2_name     
    }
    document.getElementById("output").value=""
}