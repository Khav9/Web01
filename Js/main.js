let keys = document.querySelectorAll('button');
let result = document.querySelector('h1');
let counter = 0;
let text = 0;
for (let btn of keys){
      btn.addEventListener('click',function(e){
            
            if (btn.textContent === '0'){
                  text += 0;
                  result.textContent = text
                 
            }
            else if (btn.textContent === '1'){
                  text += 1;
                  result.textContent = text
                  console.log(text)
            }
            else if (btn.textContent === '2'){
                  text += 2;
     
                  result.textContent = text
            }
            else if (btn.textContent === '3'){
                  text += 3;

                  result.textContent = text
            }
            else if (btn.textContent === '4'){
                  text += 4;

                  result.textContent = text
            }
            else if (btn.textContent === '5'){
                  text += 5;
                  result.textContent = text
            }
            else if (btn.textContent === '6'){
                  text += 6;
                  result.textContent = text
            }
            else if (btn.textContent === '7'){
                  text += 7;
                  result.textContent = text
            }
            else if (btn.textContent === '8'){
                  text += 8;
                  result.textContent = text
            }
            else if (btn.textContent === '9'){
                  text += 9;
                  result.textContent = text
            }
            else if (btn.textContent === '/'){
                  text += ' / ' ;
                  result.textContent = text
            }
            else if (btn.textContent === '*'){
                  text += '*';
                  result.textContent = text
            }
            else if (btn.textContent === '-'){
                  text += ' - ';
                  result.textContent = text
            }
            else if (btn.textContent === '+'){
                  text += ' + ';
                  result.textContent = text
            }
            
            else if (btn.textContent === '.'){
                  text += ' . ';
                  result.textContent = text
            }


            else if (btn.textContent === '='){
                  text = ''
                  result.textContent = counter
            }
      })
}