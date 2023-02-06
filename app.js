const api = [
    {
        img: "https://www.tooplate.com/templates/2129_crispy_kitchen/images/breakfast/brett-jordan-8xt8-HIFqc8-unsplash.jpg",
        parag: "Breakfast",
        title: "Morning Fresh",
        money: 12.50,
        level: 4,
        komment: 102
    },
    {
        img: "https://www.tooplate.com/templates/2129_crispy_kitchen/images/lunch/farhad-ibrahimzade-MGKqxm6u2bc-unsplash.jpg",
        parag: "Luch",
        title: "Tooplate Soup",
        money: 24.50,
        level: 1,
        komment: 50
    },
    {
        img: "https://www.tooplate.com/templates/2129_crispy_kitchen/images/dinner/keriliwi-c3mFafsFz2w-unsplash.jpg",
        parag: "Dinner",
        title: "Premium Steak",
        money: 45,
        level: 3,
        komment: 86
    },
    {
        img: "https://www.tooplate.com/templates/2129_crispy_kitchen/images/dinner/farhad-ibrahimzade-ZipYER3NLhY-unsplash.jpg",
        parag: "Dinner",
        title: "Seafood Set",
        money: 44,
        level: 3,
        komment: 86
    },
    {
        img: "https://www.tooplate.com/templates/2129_crispy_kitchen/images/breakfast/louis-hansel-dphM2U1xq0U-unsplash.jpg",
        parag: "Breakfast",
        title: "Burger Set",
        money: 20.50,
        level: 4,
        komment: 102
    },
    {
        img: "https://www.tooplate.com/templates/2129_crispy_kitchen/images/lunch/farhad-ibrahimzade-D5c9ZciQy_I-unsplash.jpg",
        parag: "Luch",
        title: "Healthy Soup",
        money: 34.20,
        level: 2,
        komment: 64
    }
]



const row = document.querySelector('.row')

const showStar = (number)=> {
    let star = ""
    for (let i = 0; i < number; i++) {
        star += "★"
    }
    return star
}

const smallStar = (number)=> {
    let smallStar = ""
    for (let i = 0; i < 5 - number; i++) {
        smallStar += "☆"
    }
    return smallStar
}

api.forEach(item => {
    row.innerHTML += `
    <div class="col-4">
        <div class="box">
            <div class="box-img">
                <img
                src=${item.img}
                alt=""
                />
                <div class="parag">${item.parag}</div>
            </div>
            <div class="box-info">
                <div class="box-title">${item.title}</div>
                <div class="box-money">$${item.money}</div>
            </div>
            <div class="box-bottom">
                <div class="box-rating">${item.level}/5</div>
                <div class="box-star">
                    <span class="yellow-star">${showStar(item.level)}</span>
                    <span class="white-star">${smallStar(item.level)}</span>
                </div>
                <div class="box-komment">${item.komment} Reviews</div>
            </div>
        </div>
    </div>
    `
})