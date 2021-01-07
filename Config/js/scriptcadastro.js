$(document).ready(function(){

       // OLHO CAMPO SENHA

  var senha = $("#senha");
  var olho = $("#olho");

  olho.mousedown(function() {
    senha.attr("type", "text");
  });
    
  olho.mouseup(function() {
    senha.attr("type", "password");
  });

  $( "#olho" ).mouseout(function() { 
      $("#senha").attr("type", "password");
  });
    
// OLHO CAMPO CONFIRMA SENHA
    
  var confirsenha = $("#confirmacaosenha");
  var olho = $("#confir");

  olho.mousedown(function() {
    confirsenha.attr("type", "text");
  });
    
  olho.mouseup(function() {
    confirsenha.attr("type", "password");
  });
    
  $( "#confir" ).mouseout(function() { 
    $("#confirmacaosenha").attr("type", "password");
  });

})