/* three chances */
/*
var attempt = 3;
*/

/* onsubmit event function call */
function validate(){
  /*
  var username = document.getElementById("uname").value;
  var password = document.getElementById("pword").value;

  if (username == "student" && password == "design") {
    window.location = "../home/index.html"; // Redirecting to other page.
    return false;
  } else {
      attempt--;
      alert("Incorrect Username and Password combination. You have "+attempt+" attempt(s) left before Login is disabled.");

      if (attempt == 0) {
        document.getElementById("uname").disabled = true;
        document.getElementById("pword").disabled = true;
        document.getElementById("submit").disabled = true;
        alert("Too many attempts tried. Login has been disabled.");
        return false;
      }
    }
  */
  location.href = "../home/index.html";
}
