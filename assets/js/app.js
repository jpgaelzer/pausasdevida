$(function (){
    var debug = true;
    

    function log(string){
        if(debug === true) return console.log(string);
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