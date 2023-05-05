const myForm = document.getElementById("myForm");

// when I submit the form I DON'T want it to refresh the page

function handleSubmit(event) {
  event.preventDefault();

  const name = event.target.name.value;
  const dob = event.target.dob.value;
  console.log(name + " was born on " + dob);

  myForm.reset();
}

myForm.addEventListener("submit", handleSubmit);
