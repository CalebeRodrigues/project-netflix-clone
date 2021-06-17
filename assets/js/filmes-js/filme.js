(() => {

    setTimeout(() => {
        executeFilmePrincipal();

        setInterval(() => {
            executeFilmePrincipal();
        }, 40000);    
    }, 1);

    function executeFilmePrincipal () {
        const filmePrincipal = document.querySelector('.filme-principal .container');
    
        const filmes = new Filmes();
        const filme = filmes.movie;

        filmePrincipal.querySelector('.titulo').innerText = filme.titulo;
        filmePrincipal.querySelector('.descricao').innerText = filme.descricao;

        const principal = filmePrincipal.parentElement;
        setBackground();

        function setBackground() {
            const num = rand(1, filme.img + 1);
            principal.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.829), rgba(0, 0, 0, 0.726), rgba(0, 0, 0, 0.671) ), ` + 
                                `url('/assets/img/capa/${filme.caminho}/${num}.jpg')`;
        }
    }
})();