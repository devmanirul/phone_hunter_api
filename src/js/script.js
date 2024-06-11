// API URL
const apiUrl = "https://openapi.programming-hero.com/api/phones?search=iphone";

const loadedPhone = async () => {
    const response = await fetch(apiUrl);
    const phoneObject = await response.json();
    const phones = phoneObject.data;
    displayData(phones)
}

function displayData(phones) {
    const phoneContainer = document.getElementById("product-container");
    phones.forEach(phone => {
        console.log(phones);
        const div = document.createElement("div");
        div.classList = "flex flex-col gap-2 justify-center items-center"; 
        div.innerHTML = `<!-- card-1 -->
        <div class="flex flex-col gap-2 justify-center items-center">
          <div class="bg-[#f3f8ff] p-5">
            <img src="./images/phone1.svg" alt="" class="" />
          </div>
          <h1 class="text-xl font-bold">Iphone 13 Pro Max</h1>
          <p class="text-center">
            There are many variations of <br />
            passages of available, but the <br />
            majority have suffered
          </p>
          <h1 class="text-xl font-bold">$999</h1>
          <button class="bg-blue-700 px-8 py-1 text-white rounded-md">
            Show Details
          </button>
        </div>`;
        phoneContainer.appendChild(div);
    })
}