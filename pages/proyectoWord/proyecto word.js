//cambio a negritas y mas tipos de texto ""linea 1 a 38"""
const negritas = document.querySelector(".ne")
const cuerpoDelDocumento = document.querySelector(".documento")
negritas.addEventListener("click", cambioNegritas)

//cambio a cursiva
const cursivas = document.querySelector(".cu")
cursivas.addEventListener("click", cursiva)

//texto justificado
const Tjustificado = document.querySelector(".ju")
Tjustificado.addEventListener("click", justificado)

//texto a la derecha
const derecha = document.querySelector(".de")
derecha.addEventListener("click", haciaDerecha)

//texto a la izquierda
const izquierda = document.querySelector(".iz")
izquierda.addEventListener("click", haciaIzquierda)

//texto centrado
const centro = document.querySelector(".cent")
centro.addEventListener("click", haciaElCentro)

//texto subrayado
const subrayado = document.querySelector(".sub")
subrayado.addEventListener("click", subrayar)

//texto en mayusculas
const mayus = document.querySelector(".my")
mayus.addEventListener("click", mayusculas)

//texto en minusculas
const minu= document.querySelector(".mn")
minu.addEventListener("click", minusculas)

//resaltador de texto
const resalta = document.querySelector(".re")
resalta.addEventListener("click", resaltorTexto)

//color de la fuente
const azul = document.querySelector(".colorFuente")
azul.addEventListener("click", cambioAzul)

//tamano letras
const selectOcho = document.querySelector(".tamanos")
selectOcho.addEventListener('change', cambioTamano)

//fuente de letras
const cambioDeFuente = document.querySelector(".tiposDeLetra")
cambioDeFuente.addEventListener("change", cambioFuente)

//input cambio color de texto
const inputColor = document.querySelector(".colorTexto")
inputColor.addEventListener("change", cambioColor)



//funcion negritas y mas tipos de texto ""de la linea 60 a 118"""
function cambioNegritas(){
    cuerpoDelDocumento.classList.toggle("BNegritas")
    negritas.classList.toggle("botonApretado")
}
//funcion cursiva
function cursiva(){
    if(cuerpoDelDocumento.classList.contains("cursiva")){
      cursivas.classList.remove("botonApretado")
      cuerpoDelDocumento.classList.remove("cursiva")
   } else{
      cuerpoDelDocumento.classList.add("cursiva")
      cursivas.classList.add("botonApretado")
   }
} 

//funcion justificado
function justificado(){
if(cuerpoDelDocumento.classList.contains("textoJustificado")){
    cuerpoDelDocumento.classList.remove("textoJustificado")
    Tjustificado.classList.remove("botonApretado")
    return
 }
    if(!cuerpoDelDocumento.classList.contains("textoJustificado")){
    cuerpoDelDocumento.classList.add("textoJustificado")
    Tjustificado.classList.add("botonApretado")
    }
}
//funcion texto a la derecha
function haciaDerecha(){
    cuerpoDelDocumento.classList.toggle("textoDerecha")
    derecha.classList.toggle("botonApretado")
}

//funcion texto a la izquierda
function haciaIzquierda(){
cuerpoDelDocumento.classList.toggle("textoIzquierda")
izquierda.classList.toggle("botonApretado") 
}

//fucion texto hacia el centro
function haciaElCentro()
{
 if(cuerpoDelDocumento.classList.contains("textoCentrado")) {
   cuerpoDelDocumento.classList.remove("textoCentrado")
   centro.classList.remove("botonApretado")
   return
   } 
 if(!cuerpoDelDocumento.classList.contains("textoCentrado")) {
   cuerpoDelDocumento.classList.add("textoCentrado")
   centro.classList.add("botonApretado")
   }
}

//funcion de subrayado
function subrayar(){
cuerpoDelDocumento.classList.toggle("subrayado")
subrayado.classList.toggle("botonApretado")
}

//funcion de mayusculas
function mayusculas(){
if(cuerpoDelDocumento.classList.contains("TMayusculas")){
cuerpoDelDocumento.classList.remove("TMayusculas")
mayus.classList.remove("botonApretado")
} else {
cuerpoDelDocumento.classList.add("TMayusculas")
mayus.classList.add("botonApretado")}
}

//funcion minusculas
function minusculas(){
    cuerpoDelDocumento.classList.toggle("TMinusculas")
}

//funcion resaltador de texto
function resaltorTexto(){
    cuerpoDelDocumento.classList.toggle("ResaltadoTexto")
}

//funcion color de la fuente
function cambioAzul(){
   if(cuerpoDelDocumento.classList.contains("colorAzul")){
      cuerpoDelDocumento.classList.remove("colorAzul")}

   else{cuerpoDelDocumento.classList.add("colorAzul")

}
}

//funcion tamano
function cambioTamano(){
   cuerpoDelDocumento.style.fontSize = selectOcho.value + 'px'
}

//funcion estilo de letra
function cambioFuente(){
   cuerpoDelDocumento.style.fontFamily = cambioDeFuente.value
}

//funcion cambio color de texto con input
function cambioColor(){
   cuerpoDelDocumento.style.color = inputColor.value
}
