const search = document.querySelector(".search");
const card_section = document.querySelector(".card_section");
const send = document.querySelector(".send");
const sendWP = document.querySelector(".sendWP");
const gif_section = document.querySelector(".gif_section");
const sendBtn = document.querySelector(".sendBtn");

sendWP.style.display = "none";

let selectedGifUrl = ''; // Seçilen GIF'in URL'sini saklamak için değişken

function searchGIF() {
  const api_key = "oHuY9D8gKkMXhaf69dsdaBTaQuzCsyYK";
  const limit = 20;
  const url = `https://api.thecatapi.com/v1/images/search?limit=${limit}&api_key=${api_key}`;

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
    .catch((error) => console.error('Hata:', error));
}

search.addEventListener("input", function () {
  searchGIF();
});

card_section.addEventListener("click", function(event) {
  if (event.target && event.target.matches("button.btn")) {
    gif_section.style.display = "none";
    sendWP.style.display = "block";
    selectedGifUrl = event.target.getAttribute('data-url'); // Seçilen GIF'in URL'sini sakla
    console.log("Selected GIF URL:", selectedGifUrl); // URL'nin doğru alındığını kontrol etmek için
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

  const phone = send.value; // 'send' input alanından telefon numarasını alın
  const message = `Hello, check out this GIF: ${selectedGifUrl}`; // Mesaja GIF URL'sini dahil edin

  let url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  console.log("WhatsApp URL:", url); // URL'nin doğru oluşturulduğunu kontrol etmek için
  window.open(url, "_blank");
});



