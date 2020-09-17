var count = 1;
var score = 0;

//document.getElementById("qcount").innerHTML = count;
//document.getElementById("score").innerHTML = score;
var questionsArray = []
getData();
function getData() {

    async function fetchData() {
        try {

            const response = await fetch(`https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple`);
            let data = await response.json();

            for (let i = 0; i < data.results.length; i++) {
                var tempObj = {
                    question: data.results[i].question,
                    option1: data.results[i].incorrect_answers[0],
                    option2: data.results[i].incorrect_answers[1],
                    option3: data.results[i].incorrect_answers[2],
                    answer: data.results[i].correct_answer,
                }
                questionsArray.push(tempObj);
            }
            console.log(questionsArray[0]);


            var que = questionsArray[0].question;
            document.getElementById("question").innerHTML = que;
            var opt1 = questionsArray[0].answer;
            var opt2 = questionsArray[0].option1;
            var opt3 = questionsArray[0].option2;
            var opt4 = questionsArray[0].option3;
            document.getElementById("option1").innerHTML = opt1;
            document.getElementById("option2").innerHTML = opt2;
            document.getElementById("option3").innerHTML = opt3;
            document.getElementById("option4").innerHTML = opt4;
            document.getElementById('question-bar').innerHTML = `1/10`;


        } catch (err) {
            console.log("err is ", err);
        }
    }
    fetchData();
}





var i = 1;
function answer(event) {
    count++;
    console.log(event.target.innerHTML);
    if (event.target.innerHTML == questionsArray[i - 1].answer) {
        console.log('Hi there');
        score = score + 10;
    }

    if (i >= 10) {
        var value1 = score;
        var queryString = "?" + value1;
        window.location.href = "end.html" + queryString;
    }

    var que = questionsArray[i].question;
    document.getElementById("question").innerHTML = que;
    var opt1 = questionsArray[i].answer;
    var opt2 = questionsArray[i].option1;
    var opt3 = questionsArray[i].option2;
    var opt4 = questionsArray[i].option3;
    document.getElementById("option1").innerHTML = opt1;
    document.getElementById("option2").innerHTML = opt2;
    document.getElementById("option3").innerHTML = opt3;
    document.getElementById("option4").innerHTML = opt4;
    document.getElementById('question-bar').innerHTML = `${i + 1}/10`;
    document.getElementById('score').innerHTML = score;
    document.getElementById('myProgress').value = `${(i + 1) * 10}`;
    i++;

}

function savescore() {

    console.log(score);
    var user = {};
    user.name = document.getElementById("username").value;
    user.score = document.getElementById('score').innerHTML;
    window.localStorage.setItem(user.name, user.score);
    console.log(Object.entries(window.localStorage));
    alert('user name and score saved!!')
}

function highscore() {
    var users = Object.entries(window.localStorage);
    let max = 0;
    var highScoreUser = null;
    for (let i = 0; i < users.length; i++) {
        if (users[i][1] > max) {
            max = score;
            highScoreUser = users[i][0]
        }
    }
    document.getElementById("highscore").innerHTML = `${highScoreUser} - ${max}`;
}