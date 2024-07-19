document.getElementById("search").addEventListener("input", function () {
  let searchQuery = this.value.toLowerCase();
  let allContent = document.querySelectorAll(".content-grid div");

  allContent.forEach((content) => {
    let title = content.innerText.toLowerCase();
    if (title.includes(searchQuery)) {
      content.style.display = "block";
    } else {
      content.style.display = "none";
    }
  });
});
let trendingContent = [
  {
    title: "Trending Movie 1",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiN7c-bSEDGyRCZyC5L1790DtHyP8SBFYAHg&s",
  },
  {
    title: "Trending Movie 2",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVnndMSn9kAyYDqw2mmtpzfNJjCDAk6HzF5g&s",
  },
];

let moviesContent = [
  {
    title: "Movie 1",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8hxnz3DZQ80bntrpY0VxT18FcpJMajzHXYw&s",
  },
  {
    title: "Movie 2",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMEcrYFilOdQBITv1gh7C_bDLTeRjhNR-_mw&s",
  },
];

let seriesContent = [
  {
    title: "Series 1",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWvdbeq7CYmyJ9GmS0iTDNBzPb5S5wp4wswA&s",
  },
  {
    title: "Series 2",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBdd8JOLkI_tN8l3Yqddfg8eYLhmmxMo9Aow&s",
  },
];

let recommendedContent = [
  {
    title: "Recommended 1",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7x4vRHrmFEJ_Knm-zFuheAMF-H_vW5UDNLQ&s",
  },
  {
    title: "Recommended 2",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5RDGj6gQUel8VAS0ArG9Q4BqDhtHcNb3d1w&s",
  },
];

function populateContent(sectionId, contentArray) {
  let section = document
    .getElementById(sectionId)
    .querySelector(".content-grid");
  contentArray.forEach((content) => {
    let contentDiv = document.createElement("div");
    contentDiv.innerHTML = `<img src="${content.image}" alt="${content.title}">
                                <p>${content.title}</p>`;
    section.appendChild(contentDiv);
  });
}

populateContent("trending", trendingContent);
populateContent("movies", moviesContent);
populateContent("series", seriesContent);
populateContent("recommended", recommendedContent);
