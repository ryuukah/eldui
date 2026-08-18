const message = document.getElementById("message");
const acceptBtn = document.getElementById("acceptBtn");
const declineBtn = document.getElementById("declineBtn");
const profile = document.querySelector(".profile");

function changeMessage(content) {
  message.classList.remove("changed");

  void message.offsetWidth;

  message.innerHTML = content;

  message.classList.add("changed");
}


/* ACCEPT */

acceptBtn.addEventListener("click", () => {
  changeMessage(`
    <p>( ♥‿♥ ) &nbsp; friend request accepted!</p>
    <p>(100%) friendship unlocked ♡</p>
  `);
});


/* DECLINE */

declineBtn.addEventListener("click", () => {
  changeMessage(`
    <p>(╥﹏╥) &nbsp; request declined...</p>
    <p>maybe next time? ♡</p>
  `);
});


/* TOUCH / CLICK DEQUU BADGE */

profile.addEventListener("click", () => {
  profile.classList.remove("returning");

  void profile.offsetWidth;

  profile.classList.add("returning");
});
