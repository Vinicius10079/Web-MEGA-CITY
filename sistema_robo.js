const cranio = document.querySelectorAll('cranio');
const exo = document.querySelectorAll('exo');
const impressora = document.querySelectorAll('impressora');
const propulsao = document.querySelectorAll('propulsao');

var titulo = document.getElementById('subtitulo');
var texto = document.getElementById('texto');

// Função para lidar com cliques nas áreas mapeadas
function cliqueArea(event) {
    // Obtenha o id da área clicada
    var idArea = event.target.id;

    // Utilize switch para verificar o id da área clicada
    switch (idArea) {
        case "cranio":
            var cranio_clicado = event.target;

            console.log("CRÂNIO:", cranio_clicado);

            titulo.innerHTML = "Crânio";
            texto.innerHTML = "Protegida por uma parte do exo-esqueleto, contem a CP, RAM SSD do robô. Também contém 2 câmeras que captam o vídeo do espaço a sua volta e armazana no SSD";
            break;

        case "exo":
            var exoClicado_clicada = event.target;
            console.log("EXO", exoClicado_clicada);

            titulo.innerHTML = "Exo-Esqueleto";
            texto.innerHTML = "Um esqueleto titânio que envolve toda a parte interna do robô, protegendo e estruturando seus componentes, ao centro de seu toráx está a sua fonte de energia, que alimenta todo o seu corpo por meio de cabos internos.";
            break;

        case "impressora":
            var impressora_clicada = event.target;
            console.log("IMPRESSORA", impressora_clicada);

            titulo.innerHTML = "Ciber impressora";
            texto.innerHTML = "Contém dados virtuais de um objeto para que o robô pode imprimi-lo. Essa impressão é feita diretamente dos dados virtuais. não gasta recursos físico. Ele cria o objet, mas, existe um limite de dados dependendo da complexidade de seus outros sistemas.";
            break;

        case "propulsao":
            var propulsao_clicada = event.target;
            console.log("PROPULSÃO", propulsao_clicada);

            titulo.innerHTML = "Propulsão";
            texto.innerHTML = "Contém mecanismos de articulação para a locomoção do robô e alguns podem ter turbinas em suas solas.";
            break;
    }
}

// Adicione os ouvintes de eventos para cada área
var cranio_listener = document.getElementById("cranio");
cranio_listener.addEventListener("click", cliqueArea);

var exo_listener = document.getElementById("exo");
exo_listener.addEventListener("click", cliqueArea);

var impressora_listener = document.getElementById("impressora");
impressora_listener.addEventListener("click", cliqueArea);

var propulsor_listener = document.getElementById("propulsao");
propulsor_listener.addEventListener("click", cliqueArea);
