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
   ORIGINAL PROFILE INFORMATION
========================================= */

function originalMessage() {

  changeMessage(`
    <p>
      Martin Edwards Park, born in 03/20/08 in Argentina,
      Capricorn, Argentine & Korean—lowkey Korean—
      currently living in Boedo, Buenos Aires.
    </p>

    <p>
      Non-religious. Student in Perfect 10 Academy.
    </p>

    <p>
      interests match 99%
    </p>
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

profile.addEventListener("click", () => {

  originalMessage();

});


/*
   Make it work properly on touchscreens.
*/

profile.addEventListener("touchend", (event) => {

  event.preventDefault();

  originalMessage();

});
