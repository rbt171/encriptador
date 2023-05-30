

  function criptografar(){
    var text = document.getElementById('input-text');
    var valor = text.value.toLowerCase();   
    var outputText = encriptar(valor)
    var div = document.getElementById('message');
    console.log(div)
    document.getElementById('output-text').value = outputText;
    div.setAttribute('style', 'display:none;')
   
    
  }
  function desencriptar(){
    var text = document.getElementById('output-text');
    var valor = text.value;
    var inputText = decriptar(valor);
    document.getElementById('output-text').value = inputText;
    
  }
 
  function encriptar(text){
    return text.replace(/e/g, 'enter')
               .replace(/i/g, 'imes')
               .replace(/a/g, 'ai')
               .replace(/o/g, 'ober')
               .replace(/u/g, 'ufat');
  }
  function decriptar(text){
    return text.replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ai/g, 'a')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u');
  }
  
  
  
