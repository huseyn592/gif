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
 
  const limit = 30;
  const query = search.value;

  const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${query}&limit=${limit}`;
  

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      card_section.innerHTML = data.data
        .map((gif) => {
          return ` 
          <div class="card">
              <img src="${gif.images.fixed_height.url}" alt="...">
              <span class="title">${gif.title}</span>
              <button class="btn" data-url="${gif.images.fixed_height.url}">click</button>
          </div>
          `;
        })
        .join("");
    })
    .catch((error) => console.error('ERROR:', error));
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

send.addEventListener("input", (e) => {
  if (send.value === "") {
    send.value = "994";
  }
});

sendBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (send.value.length !== 12) {
    alert("Nömrəni düzgün daxil edin!!!");
    return;
  }

  const phone = send.value; 
  const message = `Gif üçün buraya daxil ol ${secilenGIF}`; 

  let url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
 
  window.open(url, "_blank");
});





















// const search = document.querySelector(".search");
// const card_section = document.querySelector(".card_section");
// const send = document.querySelector(".send");
// const sendWP = document.querySelector(".sendWP");
// const gif_section = document.querySelector(".gif_section");
// const sendBtn = document.querySelector(".sendBtn");

// sendWP.style.display = "none";

// let secilenGIF = ''; 

// function searchMovie() {
//   const api_key = "346a85fc"; // OMDB API key
//   const query = search.value;
//   const limit = 20

//   const url = `http://www.omdbapi.com/?apikey=${api_key}&s=${query}&limit=${limit}`;

//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       if (data.Response === "False") {
//         card_section.innerHTML = "<p>No movies found.</p>";
//         return;
//       }
      
//       card_section.innerHTML = data.Search
//         .map((movie) => {
//           return ` 
//           <div class="card">
//               <img src="${movie.Poster}" alt="...">
//               <span class="title">${movie.Title}</span>
//               <button class="btn" data-url="${movie.Poster}">click</button>
//           </div>
//           `;
//         })
//         .join("");
//     })
//     .catch((error) => console.error('ERROR:', error));
// }

// search.addEventListener("input", function () {
//   searchMovie();
// });

// card_section.addEventListener("click", function(event) {
//   if (event.target && event.target.matches("button.btn")) {
//     gif_section.style.display = "none";
//     sendWP.style.display = "block";
//     secilenGIF = event.target.getAttribute('data-url'); 
//     console.log("Selected Movie Poster URL:", secilenGIF);
//   }
// });

// send.addEventListener("input", (e) => {
//   if (send.value === "") {
//     send.value = "994";
//   }
// });

// sendBtn.addEventListener("click", function (e) {
//   e.preventDefault();
//   if (send.value.length !== 12) {
//     alert("Nömrəni düzgün daxil edin!!!");
//     return;
//   }

//   const phone = send.value; 
//   const message = `Movie poster üçün buraya daxil ol ${secilenGIF}`; 

//   let url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
 
//   window.open(url, "_blank");
// });
