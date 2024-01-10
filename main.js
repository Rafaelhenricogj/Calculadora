let display = document.getElementById('visor');
let vazio = '';

function numero(num) {
  vazio += num;
  display.value = vazio;
}

function operador(operator) {
  vazio += operator;
  display.value = vazio;
}

function resultado() {
  try{
    let result = eval(vazio);
    display.value = result;
    vazio = '';
  }catch(error){
    display.value = 'Erro';
  }
}

function apagar() {
  vazio = '';
  display.value = '';
}

function raizQuadrada() {
    try {
        display.value = Math.sqrt(eval(display.value));
    } catch (error) {
        display.value = "Erro";
    }
}
