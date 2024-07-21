const search = document.querySelector(".search");
const card_section = document.querySelector(".card_section");
const send = document.querySelector(".send");
const sendWP = document.querySelector(".sendWP");
const gif_section = document.querySelector(".gif_section");
const sendBtn = document.querySelector(".sendBtn");

sendWP.style.display = "none";

let secilenGIF = ''; 

function searchGIF() {
  const api_key = "oHuY9D8gKkMXhaf69dsdaBTaQuzCsyYK";
  const limit = 10;

const url = `https://api.thecatapi.com/v1/images/search?api_key=${api_key}&q=${search.value}&limit=${limit}`

  fetch(url)
    .then((response) => response.json())
    .then((response) => {
      card_section.innerHTML = response
        .map((gif) => {
          return ` 
          <div class="card">
              <img src="${gif.url}" alt="...">
              <span class="title">card title</span>
              <button class="btn" data-url="${gif.url}">click</button>
          </div>
          `;
        })
        .join("");
    })
    .catch((error) => console.error('ERRORRR:', error));
}

search.addEventListener("input", function () {
  searchGIF();
});

card_section.addEventListener("click", function(event) {
  if (event.target && event.target.matches("button.btn")) {
    gif_section.style.display = "none";
    sendWP.style.display = "block";
    secilenGIF = event.target.getAttribute('data-url'); 
    console.log("Selected GIF URL:", secilenGIF);
  }
});

send.addEventListener("click", (e) => {
    if (send.value == "") {
      send.value = "994";
    }
  });

sendBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (send.value.length != 12) {
    alert("Nömrəni düzgün daxil edin!!!");
    return;
  }

  const phone = send.value; 
  const message = `Gif ucun buraya daxil ol ${secilenGIF}`; 

  let url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
 
  window.open(url, "_blank");
});



