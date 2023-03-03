const cardContainer = document.getElementById("card__container");
/*
all data loader Start
 */
const loader = () => {
  fetch("https://openapi.programming-hero.com/api/ai/tools")
    .then((res) => res.json())
    .then((data) => {
      dataRetriever(data.data.tools);
      // dataPass(data.data.tools);
    });
};
/*
all data loader end
 */

const dataLoadingWithId = (id) => {
  fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`)
    .then((res) => res.json())
    .then((dataDetails) => {
      modalDataShow(dataDetails);
    });
};

const modalCantainer = document.querySelector("#modal_body_container");
// console.log(modalCantainer.innerHTML);
const modalDataShow = (dataDetails) => {
  const {
    accuracy,
    pricing,
    use_cases,
    integrations,
    features,
    input_output_examples,
    image_link,
    tool_name,
    description,
    website,
    logo,
  } = dataDetails.data;
  console.log(integrations);
};

const showAllBtn = document.getElementById("show__all");

const dataRetriever = (data) => {
  document
    .getElementById("btn_show__all")
    .addEventListener("click", function () {
      cardContainer.innerHTML = " ";
      showAllBtn.classList.add("hidden");
      data.forEach((allItem) => {
        showCard(allItem);
      });
    });

  const slicingData = data.slice(6);
  // console.log(slicingData)
  slicingData.forEach((item) => {
    showCard(item);
  });
};

/*
 this fuction is modal section, start here
  */
const modalOverlay = document.getElementById("modal_overlay");
const modal = document.getElementById("modal");
const ModalOpen = (value) => {
  if (value) {
    cardContainer.classList.add("opacity-20");
    modalOverlay.classList.remove("hidden");
    modal.classList.remove("opacity-0");
  } else {
    cardContainer.classList.remove("opacity-20");
    modalOverlay.classList.add("hidden");
    modal.classList.add("opacity-0");
  }
};
/*
 this fuction is modal section, end here
  */

const showCard = (data) => {
  // console.log(data)
  const { id, links, features, published_in, image, name, description } = data;
  cardContainer.innerHTML += `
        <div class="card w-96 bg-base-100 hover:bg-orange-100 shadow-xl">
                <figure><img src=${image} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Features</h2>
                    <ol>
                        <li>1. ${features[0]} </li>
                        <li>2. ${features[1]} </li>
                        <li>3. ${features[2]} </li>
                    </ol>
                    <hr>
                    <div class="flex justify-between items-center">
                        <div>
                            <h3 class="text-2xl font-semibold"> ${name}</h3>
                            <p><i class="fa-solid fa-calendar-days text-primary"></i> ${published_in}</p>
                        </div>
                        <div class="card-actions justify-end">
                            <button onclick="ModalOpen(true), dataLoadingWithId('${id}') " class="btn btn-primary"><i class="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
            </div>
    `;
};
loader();
