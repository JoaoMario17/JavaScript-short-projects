//Variaveis
const display = document.getElementById('display');
let op_to_do = 'none';
let val = 1;

var primeiro_valor = null;
var segundo_valor = null;

/**
 * Botôes
 */

const bt1 = document.getElementById('bt1');
const bt2 = document.getElementById('bt2');
const bt3 = document.getElementById('bt3');
const bt4 = document.getElementById('bt4');
const bt5 = document.getElementById('bt5');
const bt6 = document.getElementById('bt6');
const bt7 = document.getElementById('bt7');
const bt8 = document.getElementById('bt8');
const bt9 = document.getElementById('bt9');
const bt0 = document.getElementById('bt0');
const AC = document.getElementById('btAC');

/**
 * Calculadora
 */

class calculadora {

    soma(){
        console.log("oi")
        op_to_do = 'soma';
    
        if(val == 1) {
            primeiro_valor = Number(display.textContent);
            console.log(primeiro_valor);
        }else {
            val = 1;
            segundo_valor = Number(display.textContent);
            console.log(segundo_valor);
    
            const result = primeiro_valor + segundo_valor;
            console.log(primeiro_valor + '+' + segundo_valor + '=' + result);
            display.innerText = result;
        }
    
    }

    subtracao(){
        op_to_do = 'subtracao';
    
        if(val == 1) {
            primeiro_valor = Number(display.textContent);
            console.log(primeiro_valor);
        }else {
            val = 1;
            segundo_valor = Number(display.textContent);
            console.log(segundo_valor);
    
            const result = primeiro_valor - segundo_valor;
            console.log(primeiro_valor + '-' + segundo_valor + '=' + result);
            display.innerText = result;
        }
    }

    divisao(){
        op_to_do = 'divisao';
    
        if(val == 1) {
            primeiro_valor = Number(display.textContent);
            console.log(primeiro_valor);
        }else {
            val = 1;
            segundo_valor = Number(display.textContent);
            console.log(segundo_valor);
    
            const result = primeiro_valor / segundo_valor;
            console.log(primeiro_valor + '/' + segundo_valor + '=' + result);
            display.innerText = result;
        }
    }
    
    multiplicacao(){
        op_to_do = 'multiplicacao';
    
        if(val == 1) {
            primeiro_valor = Number(display.textContent);
            console.log(primeiro_valor);
        }else {
            val = 1;
            segundo_valor = Number(display.textContent);
            console.log(segundo_valor);
    
            const result = primeiro_valor * segundo_valor;
            console.log(primeiro_valor + '*' + segundo_valor + '=' + result);
            display.innerText = result;
        }
    }

    result(){
        var result;
    
        if(primeiro_valor != null){
            val = 1;
    
            if(segundo_valor != null)
            {
                primeiro_valor = Number(display.textContent);
                console.log(primeiro_valor);
            }else {
                segundo_valor = Number(display.textContent);
                console.log(segundo_valor);
            }
            
            if(op_to_do === 'soma'){
                result = primeiro_valor + segundo_valor;
                console.log(primeiro_valor + '+' + segundo_valor + '=' + result);
            }else if(op_to_do === 'subtracao'){
                result = primeiro_valor - segundo_valor;
                console.log(primeiro_valor + '-' + segundo_valor + '=' + result);
            }else if(op_to_do === 'divisao'){
                result = primeiro_valor / segundo_valor;
                console.log(primeiro_valor + '/' + segundo_valor + '=' + result);
            } else if (op_to_do === 'multiplicacao'){
                result = primeiro_valor * segundo_valor;
                console.log(primeiro_valor + '*' + segundo_valor + '=' + result);
            }
                
            display.innerText = result;
        }
    } 

    insert1(){
        checkDisplay();
        display.textContent += '1';
    }

    insert2(){
        checkDisplay();
        display.textContent += '2';
    }

    insert3(){
        checkDisplay();
        display.textContent += '3';
    }

    insert4(){
        checkDisplay();
        display.textContent += '4';
    }

    insert5(){
        checkDisplay();
        display.textContent += '5';
    }

    insert6(){
        checkDisplay();
        display.textContent += '6';
    }

    insert7(){
        checkDisplay();
        display.textContent += '7';
    }

    insert8(){
        checkDisplay();
        display.textContent += '8';
    }

    insert9(){
        checkDisplay();
        display.textContent += '9';
    }

    insert0(){
        checkDisplay();
        display.textContent += '0';
    }
}

var calc = new calculadora();

/**
 * Função que checa 
 * o display
 */
function checkDisplay(){
    const content = display.textContent;
    
    if(content === '0'){
        display.innerText = '';
    } else if(op_to_do != 'none' && val === 1){
        display.innerText = '';
        val = 2;
    }
}

/**
 * Função de limpeza
 */
function clean(){
    display.innerText = '0';
    
    val = 1;
    op_to_do = 'none';

    primeiro_valor = null;
    segundo_valor = null;
}