const questions = [
{
title: "Email 1",
content:
"From: support@paypa1.com\nSubject: Verify your account immediately to avoid suspension.",
correct: "phishing"
},
{
title: "Email 2",
content:
"From: noreply@google.com\nSubject: Security alert for your account.",
correct: "safe"
},
{
title: "Email 3",
content:
"From: admin@bank-security.xyz\nSubject: Click here to unlock your account.",
correct: "phishing"
},
{
title: "Email 4",
content:
"From: hr@company.com\nSubject: Meeting scheduled tomorrow at 10 AM.",
correct: "safe"
},
{
title: "Email 5",
content:
"From: winner@lotteryfree.net\nSubject: Congratulations! Claim your prize now.",
correct: "phishing"
}
];

let current = 0;
let score = 0;

function loadQuestion() {
    document.getElementById("email-title").innerText =
        questions[current].title;

    document.getElementById("email-content").innerText =
        questions[current].content;

    document.getElementById("feedback").innerText = "";

    document.getElementById("nextBtn").style.display =
        "none";
}

function answer(choice) {

    if(choice === questions[current].correct) {
        score++;
        document.getElementById("feedback").innerText =
            "✅ Correct!";
    }
    else {
        document.getElementById("feedback").innerText =
            "❌ Incorrect!";
    }

    document.getElementById("nextBtn").style.display =
        "inline-block";
}

function nextQuestion() {

    current++;

    if(current < questions.length) {
        loadQuestion();
    }
    else {
        document.getElementById("question-container").innerHTML =
            "<h2>Quiz Completed!</h2>";

        document.getElementById("feedback").innerHTML =
            "🎉 Great Job!";

        document.getElementById("score").innerHTML =
            "Final Score: " + score + " / " + questions.length;

        document.getElementById("nextBtn").style.display =
            "none";
    }
}

function checkURL() {

    let url =
        document.getElementById("urlInput").value.toLowerCase();

    if(
        url.includes("paypa1") ||
        url.includes("free-money") ||
        url.includes(".xyz")
    ) {
        document.getElementById("urlResult").innerHTML =
            "⚠ Suspicious URL detected";
    }
    else {
        document.getElementById("urlResult").innerHTML =
            "✅ URL appears safer";
    }
}

function checkPassword() {

    let pass =
        document.getElementById("passwordInput").value;

    if(pass.length < 8) {
        document.getElementById("passwordResult").innerHTML =
            "❌ Weak Password";
    }
    else if(
        /[A-Z]/.test(pass) &&
        /[0-9]/.test(pass) &&
        /[^A-Za-z0-9]/.test(pass)
    ) {
        document.getElementById("passwordResult").innerHTML =
            "✅ Strong Password";
    }
    else {
        document.getElementById("passwordResult").innerHTML =
            "⚠ Medium Password";
    }
}

loadQuestion();
