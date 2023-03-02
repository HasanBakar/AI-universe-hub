const loader = () =>{
    fetch("https://openapi.programming-hero.com/api/ai/tools")
    .then(res => res.json())
    .then(data => dataRetriever(data.data.tools))
}

const dataRetriever = data =>{
    // console.log(data)
    data.forEach(item => {
        showCard(item)
    });
}

const showCard = data =>{
    // console.log(data)
    const {id, links, features, published_in, image, name, description} = data;
    const cardContainer = document.getElementById("card__container");
    // console.log(name)
    cardContainer.innerHTML +=`
        <div class="card w-96 bg-base-100 shadow-xl">
                <figure><img src=${image} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Features</h2>
                    <ol>
                        <li>1. ${features[0]} </li>
                        <li>2. ${features[1]} </li>
                        <li>3. ${features[2]} </li>
                    </ol>
                    <hr>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
    `; 
}
loader();