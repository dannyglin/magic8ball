window.addEventListener('DOMContentLoaded', function () {
  var shakeBtn = document.getElementById('shake-btn');
  var answerText = document.getElementById('answer');
  var magicBall = document.getElementById('magic-ball');

  shakeBtn.addEventListener('click', function () {
    shakeBtn.disabled = true; // Disable the button during animation
    answerText.textContent = ""; // Clear previous answer
    magicBall.classList.add('shake-animation');

    setTimeout(function () {
      var answers = [
        "It is certain.",
        "It is decidedly so.",
        "Without a doubt.",
        "Yes – definitely.",
        "You may rely on it.",
        "As I see it, yes.",
        "Most likely.",
        "Outlook good.",
        "Yes.",
        "Signs point to yes.",
        "Reply hazy, try again.",
        "Ask again later.",
        "Better not tell you now.",
        "Cannot predict now.",
        "Concentrate and ask again.",
        "Don't count on it.",
        "My reply is no.",
        "My sources say no.",
        "Outlook not so good.",
        "Very doubtful."
      ];

      var randomIndex = Math.floor(Math.random() * answers.length);
      var randomAnswer = answers[randomIndex];
      answerText.textContent = randomAnswer;

      shakeBtn.disabled = false; // Enable the button after animation
      magicBall.classList.remove('shake-animation');
    }, 1000); // Wait for 3 seconds before displaying the answer
  });
});
