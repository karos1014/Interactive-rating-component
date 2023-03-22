let container = document.querySelector(".container");
let choices = container.querySelectorAll(".choices ul li");
let submitBtn = container.querySelector(".choices button");
// ****
let userRating = 0;
// ****
let thankYouState = document.createElement("div");
thankYouState.classList.add("thank-you-state");
let img = document.createElement("img");
img.setAttribute("src", "./images/illustration-thank-you.svg")
img.setAttribute("alt", "Received_img")
let result = document.createElement("p");
result.classList.add("result");
let h1 = document.createElement("h1");
h1.textContent = "Thank you!"
let paragraph = document.createElement("p");
paragraph.textContent = "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!";
thankYouState.append(img, result, h1, paragraph);
// ****

choices.forEach(choice => {
    choice.addEventListener("click", _ => {
        choices.forEach(choice => {choice.classList.remove("clicked")});
        choice.classList.add("clicked");
        userRating = choice.textContent;
    });
});

submitBtn.addEventListener("click", _ => {
    container.remove();
    result.textContent = `You selected ${userRating} out of 5`;
    thankYouState.append(img, result, h1, paragraph);
    document.body.append(thankYouState);
})






console.log(container.getBoundingClientRect().height)