function solve() {
  let textElement = document.getElementById('text').value;
  let namingConventionElement = document.getElementById('naming-convention').value;
  
  let resultElement = document.getElementById('result');
  let stringie = "";

  if (namingConventionElement === 'Camel Case'){
    resultElement.textContent = camelCase();
  }else if (namingConventionElement === 'Pascal Case'){
    resultElement.textContent = pascalCase();
  }else {
    resultElement.textContent = 'Error!';
  }



  function camelCase(){
    for (let i = 0; i < textElement.length; i++){
      let char = textElement[i]
      let nextChar = textElement[i + 1];
      if (char === ' '){
        stringie += nextChar.toUpperCase()
        i++
      }else {
        stringie += char.toLowerCase();
      }
    }
    return stringie
  }

  function pascalCase(){
    for (let i = 0; i < textElement.length; i++){
      let char = textElement[i]
      let nextChar = textElement[i + 1];
      if (i === 0){
        stringie += char.toUpperCase();
        continue;
      }
      if (char === ' '){
        stringie += nextChar.toUpperCase()
        i++
      }else {
        stringie += char.toLowerCase();
      }
    }
    return stringie
  }
}