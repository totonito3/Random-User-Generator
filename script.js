const generateBtn = document.querySelector("#generate");
const userSection = document.querySelector("#user");
const profilePicture = document.querySelector("img");
userSection.innerHTML = "";

document.addEventListener("DOMContentLoaded", generate);
generateBtn.addEventListener("click", generate);

function generate(e) {
  showSpinner();
  fetch("https://randomuser.me/api")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      hideSpinner();
      const user = data.results[0];
      const name = `${user.name.first} ${user.name.last}`;
      const email = user.email;
      const phone = user.phone;
      const location = `${user.location.city} ${user.location.state}`;
      const age = user.dob.age;
      const image = user.picture.large;
      const gender = user.gender;

      userSection.innerHTML = `<div class="flex justify-between">
      <div class="flex">
        <img
          class="w-48 h-48 rounded-full mr-8"
          src="${image}"
        />
        <div class="space-y-3">
          <p class="text-xl">
            <span class="font-bold">Name: </span>${name}
          </p>
          <p class="text-xl">
            <span class="font-bold">Email: </span> ${email}
          </p>
          <p class="text-xl">
            <span class="font-bold">Phone: </span> ${phone}
          </p>
          <p class="text-xl">
            <span class="font-bold">Location: </span> ${location}
          </p>
          <p class="text-xl"><span class="font-bold">Age: </span> ${age}</p>
        </div>
      </div>`;

      if (gender === "male") {
        document.body.style.backgroundColor = "steelblue";
      } else {
        document.body.style.backgroundColor = "rebeccapurple";
      }
    });
}

function showSpinner() {
  document.querySelector(".spinner").style.display = "block";
}

function hideSpinner() {
  document.querySelector(".spinner").style.display = "none";
}
