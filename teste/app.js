$(document).ready(function(){
    var passoAtual = 0;
    
    $("#step1").hide();
    $("#step2").hide();
    
    $("#btnStep1").click(function(){
        $("#step1").show();
        $("#step2").hide();

        passoAtual = 1;
    });
    
    $("#btnStep2").click(function(){
        $("#step1").hide();
        $("#step2").show();

        passoAtual = 2;
    });
});