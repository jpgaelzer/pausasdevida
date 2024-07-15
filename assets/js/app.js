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

     $(".pausaAleatoriaPag").click(function(){
        location.href="index-aleatoria.html"
     });
     $(".buscarDataPag").click(function(){
        location.href="index-busca-data.html"
     });
     $(".abrirFiltro, .buscarData").click(function(){
        $("body").addClass("revelarBusca")

     });
     $(".busca .bto-fechar").click(function(){
        $("body").addClass("ocultarBusca").delay(500).promise().done(function (){
            $("body").removeClass("revelarBusca ocultarBusca");
        })
     });

     
     
     
     
     
     var dataAtual = $(".date").val();
     $("input").click(function (){
        var id = $(this).attr("id");
        if (id == null) $(this).attr("for")
        
        var data = dataAtual.split("/");
        log(data)
        if($("#dia").is(":checked") == true && $("#mes").is(":checked") == true && $("#ano").is(":checked") == true){
            $('.date').mask('00/00/0000'); // data completa
            $(".date").val(data[0] + "/" + data[1] + "/" + data[2])
        }else
        if(($("#dia").is(":checked") == false && $("#mes").is(":checked") == true && $("#ano").is(":checked") == true) || 
        ($("#dia").is(":checked") == true && $("#mes").is(":checked") == false && $("#ano").is(":checked") == true)){
            $('.date').mask('00/0000'); // dia e ano ou mes e ano
            if($("#dia").is(":checked") == true){
                $(".date").val(data[0] + "/" + data[2])
            }else{
                $(".date").val(data[1] + "/" + data[2])
            }
        }else
        if($("#dia").is(":checked") == true && $("#mes").is(":checked") == true && $("#ano").is(":checked") == false){
            $('.date').mask('00/00'); // dia e mês
            $(".date").val(data[0] + "/" + data[1])
        }else
        if((($("#dia").is(":checked") == true && $("#mes").is(":checked") == false) || ($("#dia").is(":checked") == false && $("#mes").is(":checked") == true)) && $("#ano").is(":checked") == false){
            $('.date').mask('00'); // só dia ou só mes
            if($("#dia").is(":checked") == true){
                $(".date").val(data[0])
            }else{
                $(".date").val(data[1])
            }
        }else
        if($("#dia").is(":checked") == false && $("#mes").is(":checked") == false && $("#ano").is(":checked") == true){
            $('.date').mask('0000'); // só ano
            $(".date").val(data[2])
        }else
        if($("#dia").is(":checked") == false && $("#mes").is(":checked") == false && $("#ano").is(":checked") == false){
            $('.date').mask('00/00/0000'); // data completa
            $(".form-check-input").prop("checked", true)
            $(".date").val(data[0] + "/" + data[1] + "/" + data[2])
        }
        
            
     })
    // log($(window).height());
    // var ajustarAlturaPausa = function (){

    //     var alturaMaxPausas = 750;
    //     var alturaBrowser = $(window).height();
    //     var alturaNovaPausa = alturaMaxPausas - (alturaBrowser*0.15);
        
    //     $("#pausa").css("height", alturaNovaPausa)
        
    // }
    // ajustarAlturaPausa();
})