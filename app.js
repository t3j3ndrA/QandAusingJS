// selection of + and - button
const showAnsBtn = document.querySelectorAll(".show-ans");
const hideAnsBtn = document.querySelectorAll(".hide-ans");


// click even listener added
showAnsBtn.forEach(function (item) {
  item.addEventListener("click", function () {
    
    item.classList.add("hide");
    const hbtn = item.nextElementSibling;
    hbtn.classList.remove("hide");
    hbtn.classList.add("show");
    
    // corresponding answer selection
    const answer = item.parentElement.nextElementSibling.nextElementSibling;
    console.log(answer);
    answer.classList.remove("hide");
  });
});

hideAnsBtn.forEach(function (item) {
  item.addEventListener("click", function () {
    
    item.classList.add("hide");
    const pbtn = item.previousElementSibling;
    pbtn.classList.remove("hide");
    pbtn.classList.add("show");

    // corresponding answer selection
    const answer = item.parentElement.nextElementSibling.nextElementSibling;
    console.log(answer);
    answer.classList.add("hide");
  });
});
