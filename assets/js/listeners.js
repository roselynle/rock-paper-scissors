// Event listener for player choice
choices.forEach((choice) => choice.addEventListener("click", play));
// Event listener to clear modal after game session
window.addEventListener("click", clearModal);
// Event listener on restart game button
restart.addEventListener("click", restartGame);
