let numeros = [], 
    operadores = adicao = document.querySelector("#adic"),
    subtracao = document.querySelector("#sub"),
    divisao = document.querySelector("#divs"),
    multiplicacao = document.querySelector("#mult"),
    porcentagem = document.querySelector("#porc"),
    apagar = document.querySelector("#apag"),
    limpar = document.querySelector("#limpa"),
    igual = document.querySelector("#igual"),
    virgula = document.querySelector("#virg"),
    display = document.querySelector("#display"),
    realExp = "0"

for (c=0; c<10;c++){
    numeros.push(document.querySelector(`.button.n${c}`))
}

igual.addEventListener('click', ()=>{
  let result = eval(realExp)

//   if (result == undefined) result = 0
  display.innerHTML = result
  realExp = result
})

numeros.forEach((num)=>{
    num.addEventListener("click", ()=>{
        if(display.innerHTML == 0) display.innerHTML = ''
        display.innerHTML += num.innerHTML
        realExp += num.innerHTML
        console.log(realExp)
    })
})
let simbolos = ['+', '-', '*', '/']
adicao.addEventListener("click", ()=>{
    console.log(realExp[realExp.length-1])
    if(simbolos.includes(realExp[realExp.length-1])){
        realExp[realExp.length-1] = '+'
        display.innerHTML[display.innerHTML.length-1] = '+'
    }else{
        display.innerHTML += '+'
        realExp += '+'
        
    }
    
})

subtracao.addEventListener("click", ()=>{
    console.log(display.innerHTML.length)
    if(simbolos.includes(realExp[realExp.length-1])){
        realExp[realExp.length-1] = '-'
        display.innerHTML[display.innerHTML.length] = '-'
    }else{
        display.innerHTML += '-'
        realExp += '-'
    }
    
})