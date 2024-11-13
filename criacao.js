//VARIÁVEIS
let elementos = document.querySelectorAll('input[name="elemento"]');
let portes = document.querySelectorAll('input[name="porte"]');

let idElemento;
let idPorte;

let botaoEnviar = document.querySelector('.botao_criar');

let imagem_robo = document.querySelector('.imagem');


//RADIOS
document.addEventListener("DOMContentLoaded", function() {

    elementos.forEach(function(elemento) {

        elemento.addEventListener('change', function() {
            
            idElemento = this.id;

            console.log('Elemento selecionado:', idElemento);
        });
    });

    portes.forEach(function(porte) {

        porte.addEventListener('change', function() {

            idPorte = this.id;

            console.log('Porte selecionado:', idPorte);
        });
    });
});

//CRIAÇÃO
botaoEnviar.addEventListener('click', function(event) {

    var nome = document.getElementById("nome").value;
    var tituloRobo = document.querySelector(".titulo_robo");

    var bio = document.getElementById("bio").value;
    var bioRobo = document.querySelector(".bio_robo");


    tituloRobo.textContent = nome;
    bioRobo.textContent = bio;
    
    switch (idElemento) {
        case "terra":
            switch (idPorte) {
                case "pequeno":
                    imagem_robo.src = "assets/Imagens/criacao/slashMan.webp";
                    break;
    
                case "medio":
                    imagem_robo.src = "assets/Imagens/criacao/groundMan.webp";
                    break;
    
                case "grande":
                    imagem_robo.src = "assets/Imagens/criacao/gutsMan.webp";
                    break;
            }
            break;
    
        case "ar":
            switch (idPorte) {
                case "pequeno":
                    imagem_robo.src = "assets/Imagens/criacao/tornadoMan.webp";
                    break;
    
                case "medio":
                    imagem_robo.src = "assets/Imagens/criacao/airMan.webp";
                    break;
    
                case "grande":
                    imagem_robo.src = "assets/Imagens/criacao/windMan.webp";
                    break;
            }
            break;
    
        case "fogo":
            switch (idPorte) {
                case "pequeno":
                    imagem_robo.src = "assets/Imagens/criacao/heatMan.webp";
                    break;
    
                case "medio":
                    imagem_robo.src = "assets/Imagens/criacao/solarMan.webp";
                    break;
    
                case "grande":
                    imagem_robo.src = "assets/Imagens/criacao/magmaMan.webp";
                    break;
            }
            break;
    
        case "agua":
            switch (idPorte) {
                case "pequeno":
                    imagem_robo.src = "assets/Imagens/criacao/bubbleMan.webp";
                    break;
    
                case "medio":
                    imagem_robo.src = "assets/Imagens/criacao/pumpMan.webp";
                    break;
    
                case "grande":
                    imagem_robo.src = "assets/Imagens/criacao/waveMan.webp";
                    break;
            }
            break;
    }
});