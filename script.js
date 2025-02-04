document.getElementById("noButton").addEventListener("mouseover", function() {
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    this.style.position = "absolute";
    this.style.left = `${x}px`;
    this.style.top = `${y}px`;
});

document.getElementById("yesButton").addEventListener("click", function() {
    alert("I LOVE YOU ❤️");
});
