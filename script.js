const lightBulb1 = document.querySelector("#lightbulb1");
const lightBulb2 = document.querySelector("#lightbulb2");
const lightBulb3 = document.querySelector("#lightbulb3");
let h3 = document.querySelector(".subtitle");
let count = 0

lightBulb1.addEventListener("click", function() 
{
    myBulb = lightBulb1;
    count++;
    myBulb.classList.toggle("active");
    h3.innerHTML = `You've clicked the lights ${count} times`;
})

lightBulb2.addEventListener("click", function() 
{
    myBulb = lightBulb2;
    count++;
    myBulb.classList.toggle("active");
    h3.innerHTML = `You've clicked the lights ${count} times`;
})

lightBulb3.addEventListener("click", function() 
{
    myBulb = lightBulb3;
    count++;
    myBulb.classList.toggle("active");
    h3.innerHTML = `You've clicked the lights ${count} times`;
})