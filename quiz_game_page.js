player1= localStorage.getItem("player1_name");
player2 = localStorage.getItem("player2_name");
ps1 = 0;
ps2 = 0;
console.log(player1);
console.log(player2);

document.getElementById("player1_name").innerHTML =  " : ";
document.getElementById("player2_name").innerHTML =player2 + " : ";

document.getElementById("player1_score").innerHTML = ps1;
document.getElementById("player2_score").innerHTML = ps2;

document.getElementById("update_player1_score").innerHTML = update_ps1;
document.getElementById("update_player2_score").innerHTML = update_ps2;

document.getElementById("player_question").innerHTML = "question turn - " +player1;
document.getElementById("player_answer").innerHTML = "answer turn - " + player2;

function send() {
    number1 = document.getElementById("n1").value;
    number2 = document.getElementById("n2").value;

    actual_answer = parseInt(number1) * parseInt(number2);

    question_number = "<h4>" + number1 + " X " + number2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button;

    document.getElementById("output").innerHTML = row;

    document.getElementById("n1").value = "";
    document.getElementById("n2").value = "";
}
question_turn="player1";
answer_turn="player2";
function check()
{
    get_answer=document.getElementById("input_check_box").value;
    if(answer==actual_answer)
    {
        if(answer_turn=="player1")
        {
         update_ps1=ps1+1;
         document.getElementById("player1_score").innerHTML = update_ps1;
        }
        else
        {
            update_ps2=ps2+1;
            document.getElementById("player2_score").innerHTML = update_ps2;
        }
}
if(question_turn=="player1"){
    question_turn="player2";
    document.getElementById("player_question").innerHTML = "Question Turn - " + p2;
}
else{
    question_turn="player1";
    document.getElementById("player_question").innerHTML = "Question Turn - " + p1;
}
}