const loader = () =>{
    fetch("https://openapi.programming-hero.com/api/ai/tools")
    .then(res => res.json())
    .then(data => showCardData(data.data.tools))
}

const showCardData = data =>{
    // console.log(data)
}

loader();