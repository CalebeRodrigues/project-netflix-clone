(() => {
    const spaceMovie = document.querySelector('.card-filmes');
    
    const list = [];

    for (let i = 0; i < 12; i++) {
        list.push(createDivImg(createImg((i + 1))));
    }

    function createDivImg(img) {
        const div = document.createElement('div');

        div.classList.add('item');

        div.appendChild(img);
        return div;
    }

    function createImg (numberImg) { 
        const img = document.createElement('img');

        img.src = `./assets/img/card/${numberImg}.jpg`;
        img.alt = 'Imagem filme/série';
        img.classList.add('box-filme');
        img.classList.add('img-card');
        return img;
    }

    for (let div of list) {
        spaceMovie.appendChild(div);
    }

    console.log(list)

    console.log(spaceMovie);

})();