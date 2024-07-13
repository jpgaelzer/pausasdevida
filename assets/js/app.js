$(function (){
    var debug = true;
    

    function log(string){
        if(debug === true) return console.log(string);
    }

    $(".abrirMenu").click(function (){
        $(".menuFlutuante").addClass("ativo");
        $("#app").append($("<div class='wall'></div>"));
    });
    $("body").on("touchstart click", ".fecharMenu, .wall", function (){
        
        fecharMenu();
     });

     $(".sobreProjeto").click(function(){
        rolarPara("#perfil");
        fecharMenu();

     });
    var fecharMenu = ()=> {
        fecharWall();
        $(".menuFlutuante").removeClass("ativo");

    } 
    var fecharWall = ()=>{
    $(".wall").addClass("sair").delay(900).promise().done(function (){
        $(this).remove();
    })
    }
     var rolarPara = function (destino){
        $('html, body').animate({
            scrollTop: $(destino).offset().top
        }, 1000); // 1000 milissegundos = 1 segundo de duração da animação
     }
    // log($(window).height());
    // var ajustarAlturaPausa = function (){

    //     var alturaMaxPausas = 750;
    //     var alturaBrowser = $(window).height();
    //     var alturaNovaPausa = alturaMaxPausas - (alturaBrowser*0.15);
        
    //     $("#pausa").css("height", alturaNovaPausa)
        
    // }
    // ajustarAlturaPausa();
})