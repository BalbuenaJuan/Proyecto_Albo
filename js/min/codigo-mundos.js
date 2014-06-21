$(document).ready(function() {
	
var nuevaFoto  =  new Image();
nuevaFoto      =  '../../img/Sustitucion_Mundos.gif'
oldSrc         =  $('#mundos').attr('src');

$('#mundos').hover(function() {
	$(this).attr('src', nuevaFoto);
}, function() {
	$(this).attr('src', oldSrc);
});//FIN DE HOVER

var nuvaFoto2  = new Image();
nuevaFoto2     = '../../img/Sustitucion_Voces.gif';
oldSrc2        = $('#voces').attr('src');

$('#voces').hover(function() {
	$(this).attr('src', nuevaFoto2);
}, function() {
	$(this).attr('src', oldSrc2);
});//FIN DE HOVER 2

var nuevaFoto3  = new Image();
nuevaFoto3      = '../../img/Sustitucion_Cuerpo.gif';
oldSrc3         = $('#cuerpo').attr('src');

$('#cuerpo').hover(function() {
	$(this).attr('src', nuevaFoto3);
}, function() {
	$(this).attr('src', oldSrc3);
});//FIN DE HOVER 3

});//FIN DE READY