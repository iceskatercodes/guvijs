var securityQuestions = [
    {
        question: "What was your first pet’s name?",
        expectedAnswer: "FlufferNutter"
    },
    {
        question: "What was the model year of your first car?",
        expectedAnswer: "1985"
    },
    {
        question: "What city were you born in?",
        expectedAnswer: "NYC"
    }
]


function chksecurityQuestions(securityQuestions, question, answer) {

    // your code here
    for (let i in securityQuestions) {
        if (securityQuestions[i].question == question && securityQuestions[i].expectedAnswer == answer) {
            return true
        }
    }
    return false;
}
