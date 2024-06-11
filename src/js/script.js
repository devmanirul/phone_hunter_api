// API URL
// const apiUrl = "";

const loadedPhone = async (searchText) => {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const phoneObject = await response.json();
  const phones = phoneObject.data;
  displayData(phones);
};

function displayData(phones) {
    const phoneContainer = document.getElementById("product-container");
    const showMore = document.getElementById("showMore");
    if (phones.length > 9) {
        showMore.classList.remove("hidden")
    } else {
        showMore.classList.add("hidden");
    }
    phoneContainer.textContent = "";
    phones = phones.slice(0,6)
  phones.forEach((phone) => {
    console.log(phone);
    const div = document.createElement("div");
    div.classList = "flex flex-col gap-2 justify-center items-center";
      div.innerHTML = `
    <!-- img -->
          <div class="bg-[#f3f8ff] p-5 rounded-md">
            <img src="${phone.image}" alt="" class="" />
          </div>
          <!-- bellow -->
          <div class="flex flex-col items-center justify-center gap-5">
            <h1 class="text-xl font-bold">${phone.phone_name}</h1>
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
  });
}

loadedPhone();

function  searchPhone() {
    const searchField = document.getElementById("searchField");
    const searchText = searchField.value;
    loadedPhone(searchText);
}

function spinner() {
    const loader = document.getElementById("spinner");
    if (isLoading) {
        loader.classList.remove("hidden")
    } else {
    loader.classList.add("hidden");

    }
}