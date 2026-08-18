const message = document.getElementById("message");
const acceptBtn = document.getElementById("acceptBtn");
const declineBtn = document.getElementById("declineBtn");
const profile = document.getElementById("profile");


/* =========================================
   CHANGE MESSAGE
========================================= */

function changeMessage(content) {

  message.classList.remove("changed");

  // Restart the animation
  void message.offsetWidth;

  message.innerHTML = content;

  message.classList.add("changed");
}


/* =========================================
   ORIGINAL MESSAGE
========================================= */

function originalMessage() {

  changeMessage(`
    <p>( ♥ ) &nbsp; graphic designer</p>
    <p>(99%) interests match</p>
  `);

}


/* =========================================
   ACCEPT
========================================= */

acceptBtn.addEventListener("click", () => {

  changeMessage(`
    <p>( ♥‿♥ ) &nbsp; friend request accepted!</p>
    <p>(100%) friendship unlocked ♡</p>
  `);

});


/* =========================================
   DECLINE
========================================= */

declineBtn.addEventListener("click", () => {

  changeMessage(`
    <p>(╥﹏╥) &nbsp; request declined...</p>
    <p>maybe next time? ♡</p>
  `);

});


/* =========================================
   TOUCH / CLICK DEQUU BADGE
========================================= */

/*
   Touching or clicking the dequu badge
   returns the middle information to
   its original state.
*/

profile.addEventListener("click", () => {

  originalMessage();

});


/*
   Make sure it also works immediately
   on phones/tablets when touching it.
*/

profile.addEventListener("touchend", (event) => {

  event.preventDefault();

  originalMessage();

});
