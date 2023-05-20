document.getElementById('convert-btn').addEventListener('click', function() {
    var inputText = document.getElementById('input-text').value;
    var option = document.getElementById('encrypt-radio').checked ? 'encrypt' : 'decrypt';
    var outputText = '';
  
    if (option === 'encrypt') {
      outputText = encryptText(inputText);
    } else {
      outputText = decryptText(inputText);
    }
  
    document.getElementById('output-text').value = outputText;
    document.getElementById('copy-btn').style.display = 'inline';
  });
  
  document.getElementById('copy-btn').addEventListener('click', function() {
    var outputText = document.getElementById('output-text');
    outputText.select();
    outputText.setSelectionRange(0, 99999);
    document.execCommand('copy');
  });
  
  function encryptText(text) {
    return text.replace(/e/g, 'enter')
               .replace(/i/g, 'imes')
               .replace(/a/g, 'ai')
               .replace(/o/g, 'ober')
               .replace(/u/g, 'ufat');
  }
  
  function decryptText(text) {
    return text.replace(/enter/g, 'e')
               .replace(/imes/g, 'i')
               .replace(/ai/g, 'a')
               .replace(/ober/g, 'o')
               .replace(/ufat/g, 'u');
  }
  