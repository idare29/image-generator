//accessKey variable

const accessKey ="2eiVPxaxYBACkqDNY0tYOFtd-cY6ewYvBezh7NN1H_w";


//variable bank
const searchForm = document.getElementById("search-form")
const searchBox = document.getElementById("search-box")
const searchResult = document.getElementById("search-result")
const showMoreBtn = document.getElementById("show-more-btn")

//code to fetch images from unslpash

let keywords="";
let page = 1;

async function searchImages(){
    keywords = searchBox.value;
    const url =`https://api.unsplash.com/search/photos?page=${page}&query=${keywords}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    //reset search
    if(page === 1){
        searchResult.innerHTML = "blnk";
    }
    //function to display images
    const reults = data.results;

    reults.map((result) =>{
        const image =document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })

    showMoreBtn.style.display = "block";

}

showMoreBtn

//submit function to load images searched for when clicking the button

searchForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    page = 1;
    searchImages();
})