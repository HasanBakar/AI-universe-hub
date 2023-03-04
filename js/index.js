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
  console.log(input_output_examples);
  // console.log(accuracy);
  const priceFirst = pricing[0];
  const priceSecond = pricing[1];
  const priceThird = pricing[2];

  modalCantainer.innerHTML = `
                  <div class="w-full md:w-1/2 border-2 border-violet-700 p-2 bg-slate-200	md:p-5">
                        <h2 class="md:text-lg lg:text-2xl mb-2 font-bold">${description} </h2>
                        <!-- pricing section  -->
                        <div class="grid grid-cols-3 md:gap-5">
                            <div class="shadow-lg border-base-100 bg-neutral-300	font-semibold border-2 p-1 flex flex-col items-center justify-center">
                            <p>${
                              priceFirst.price
                                ? priceFirst.price
                                : "NO DATA FOUND"
                            }</p>
                            <p>${
                              priceFirst.plan
                                ? priceFirst.plan
                                : "NO DATA FOUND"
                            }</p>
                            </div>
                            <div class="shadow-lg border-base-100 bg-neutral-300	font-semibold text-orange-500	border-2 flex flex-col items-center justify-center">
                            <p>${
                              priceSecond.price
                                ? priceSecond.price
                                : "NO DATA FOUND"
                            }</p>
                            <p>${
                              priceSecond.plan
                                ? priceSecond.plan
                                : "NO DATA FOUND"
                            } </p>
                            </div>
                            <div class="text-center shadow-lg font-semibold text-red-600 border-base-100 bg-neutral-300	border-base-100 border-2 flex flex-col items-center justify-center">
                                <p>${
                                  priceThird.price
                                    ? priceThird.price
                                    : "NO DATA FOUND"
                                } </p>
                                <p>${
                                  priceThird.plan
                                    ? priceFirst.plan
                                    : "NO DATA FOUND"
                                }</p>
                            </div>
                        </div>
                        <div class="grid grid-cols-2 justify-between">
                            <!-- feature section  -->
                            <div>
                                <h3 class="text-3xl font-semibold">Features</h3>
                                <ol>
                                    <li>&#x2022;  ${
                                      features[1].feature_name
                                    }</li>
                                    <li>&#x2022;  ${
                                      features[2].feature_name
                                    }</li>
                                    <li>&#x2022;  ${
                                      features[3].feature_name
                                    }</li>
                                </ol>
                            </div>
                            <!-- integration section  -->
                            <div>
                                <h3 class="text-3xl font-semibold">Integrations</h3>
                                <ol>
                                    <li> &#x2022; ${
                                      integrations[0]
                                        ? integrations[0]
                                        : "NO DATA FOUND"
                                    }</li>
                                    <li> &#x2022; ${
                                      integrations[1]
                                        ? integrations[1]
                                        : "NO DATA FOUND"
                                    }</li>
                                    <li> &#x2022; ${
                                      integrations[2]
                                        ? integrations[2]
                                        : "NO DATA FOUND"
                                    }</li>
                                </ol>
                            </div>
                        </div>
                    </div>

                    <div class="p-3 w-full md:w-1/2 border-2 border-violet-700">
                        
                        <div>
                            <div class="relative h-[360px] w-full">
                                <img class="w-full md:h-[260px] lg:h-[360px]" src='${
                                  image_link[0]
                                }' alt="">
                               <span class="bg-red-700 ${
                                 accuracy.score ? " " : "hidden"
                               } text-white px-3 py-1 rounded-lg absolute top-1 right-1">${
    accuracy.score
  }&#37; accuracy</span> 
                            </div>
                            <div>
                                <h3 class="text-2xl font-semibold">${
                                  input_output_examples[0].input
                                } </h3>
                                <P>
                                ${input_output_examples[0].output} </P>
                            </div>
                        </div>
                    </div> 
  `;
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

  const slicingData = data.slice(1, 7);
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
    cardContainer.classList.add("opacity-10");
    cardContainer.classList.add("brightness-50");
    modalOverlay.classList.remove("hidden");
    modal.classList.remove("opacity-0");
  } else {
    cardContainer.classList.remove("opacity-10");
    cardContainer.classList.remove("brightness-50");
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
