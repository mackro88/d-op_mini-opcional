"use strict";
/*
* Ejercicio 1. Al hacer click sobre la caja que dice ​"haz click"​, aumenta el tamaño y el color de la caja que dice "cambiame" (sólo utiliza jQuery). Siente la libertad de agregar las clases o ids que sean necesarios (no modificar estructura html entregada).
*/ 
let btnAccion = $('.div-accion') 
btnAccion.click(function(){
    $('.div-cambio').css('background','lightblue')
})
/*
* Ejercicio 2. Dar vida al menú, incorporando la funcionalidad de que se oculte y muestre las opciones a partir de un click en el icono de la hamburguesa, utiliza algún efecto para que el cambio sea suave.
*/ 
$('.menu').hide()
$('button').click(function(){
    $('.menu').slideToggle()
})
/*
* Ejercicio 3. Dar un estilo a los elementos pares e impares de la lista al pasar el mouse sobre la caja roja y que vuelva a la normalidad cuando el mouse deje la caja (hint: mouseover(), mouseleave())
*/ 
$('.caja').mouseover(function(){
    $('ul.elementos > li').filter(':even').css('background','darkseagreen')
    $('ul.elementos > li').filter(':odd').css('background','darkslategray')
})
$('.caja').mouseleave(function(){
    $('ul.elementos > li').filter(':even').css('background','none')
    $('ul.elementos > li').filter(':odd').css('background','none')
})