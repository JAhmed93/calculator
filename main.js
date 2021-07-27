(function(){
  'use strict';

  const input = document.getElementById('calculator');
  const container = document.querySelector('.container')
  const clear = document.querySelector('.clear');
  const pN = document.querySelector('.pN');
  const mod = document.querySelector('.mod');
  const division = document.querySelector('.division');
  const seven = document.querySelector('.seven');
  const eight = document.querySelector('.eight');
  const nine = document.querySelector('.nine');
  const multiply = document.querySelector('.multiply');
  const four = document.querySelector('.four');
  const five = document.querySelector('.five');
  const six = document.querySelector('.six');
  const subtract = document.querySelector('.subtract');
  const one = document.querySelector('.one');
  const two = document.querySelector('.two');
  const three = document.querySelector('.three');
  const add = document.querySelector('.add');
  const zero = document.querySelector('.zero');
  const decimal = document.querySelector('.decimal');
  let backspace = document.querySelector('.backspace');
  const equals = document.querySelector('.equals');
  
  let regex = /[^A-Za-z]/;
  let x, y, operator;
  
  
  // There is a bunch of redudant code that is repeated throughout this mess....
  // you should probably make functions out of those redudant lines,
  // and implement function calls.
  
  
  
  function addition() {
    input.value = x+y;
    
  }
  function subtraction() {
    input.value = x - y;
  }
  function multiplication() {
    input.value = x * y;
  }
  function divide() {
    input.value = x / y;
  }
  
  function modulo() {
    input.value = x % y;
  }
  
  function reset() {
    input.value = '';
    x = undefined;
    y = undefined
  }
  
  function sign() {
    if (input.value !== '' && input.value > 0) {
      input.value = -(input.value);
      x = parseFloat(input.value);
    }
    
    else if (input.value !== '' && input.value < 0) {
      input.value = -(input.value);
      x = parseFloat(input.value);
    }
  }
  
  function operate() {
    if(input.value === '' && x === undefined) {
      alert('Error');
    }
  
    y = parseFloat(input.value);
   
    if(operator === '+') {
      
      let answer = addition();
      
        y = undefined;
        x = undefined;
        operator = '';
        return answer;
      
      }
  
    if(operator === '-') {
        let answer = subtraction();
        x = x-y;
        y = undefined;
        operator = '';
        return answer;
      }
  
    if(operator === '*') {
          let answer = multiplication();
          x = x*y;
          y = undefined;
          operator = '';
          return answer;
        }
  
      if(operator === '/') {
            let answer = divide();
            x = x/y;
            y = undefined;
            operator = '';
            return answer;
        }
  
    if (operator === '%') {
          let answer = modulo();
          x = x%y;
          operator = '';
          return answer;
      }
  }
  
  equals.addEventListener('click', operate);
  
  const orders = [seven,eight,nine,
  four,five,six,one,two,three,zero,
  ];
  
  for (let i = 0; i< orders.length; i++){
    orders[i].addEventListener('click', () => {
      input.value += orders[i].value;
    });
  }
  
  function validate() {
  
  
    if (input.value === '' && typeof(input.value) !== 'number' &&
        x === undefined) {
          alert('Please enter a correct number');
        }
  
        if (isNaN(x) ) {
          x = undefined;
        }
    }
  
  input.addEventListener('keypress', (e) => {  
       let string = e.key;
   
      if (regex.test(string) === false && e.key !== '.' && 
        e.key !== '+' && e.key !== '*' && e.key !== '=' && 
        e.key !== '-' && e.key !== '/' && e.key !== '%' && 
        e.key !== 'Enter' && e.key !== 'Escape') {
        e.returnValue = false;
        input.value = '';
      }  
      // the ugliest conditional statement you've ever seen.
      // this could probably be fixed with a dope regex.
      if(e.code === 'Space' || e.key === '\\' || e.key === 
        '`' || e.key === '"' || e.key === "'"  || e.key === 
        '[' || e.key === ']' || e.key == '(' || e.key === ')'
        || e.key === '_' || e.key === '~' || e.key === '>' ||
        e.key === '<' || e.key === ',' || e.key === ':' || e.key
        === ';' || e.key === '{' || e.key === '}')
               {
          e.returnValue = false;
      }
      if(input.value.includes('.') && e.key === '.') {
        e.returnValue = false;
      } 
      for (let i = 0; i< 10; i ++) {
      if(e.code === `Digit${i}` || e.code === `Numpad${i}`) {
          // console.log(e.key);
          input.value + e.key;
        }
      }
      if(e.key === '-'){
          subtract.click();
          e.returnValue = false;
          input.value = '';
      }
  
      if(e.key === '+'){
          add.click();
          e.returnValue = false;
          input.value = '';
      }
  
      if(e.key === '*'){
        multiply.click();
        e.returnValue = false;
        input.value = '';
      }
  
      if(e.key === '%'){
        mod.click();
        e.returnValue = false;
        input.value = '';
      }
  
      if(e.key === '/'){
        division.click();
        e.returnValue = false;
        input.value = '';
      }
  
      if(e.key === '=' || e.key === 'Enter') {
        equals.click();
        e.returnValue = false;
      }
  
  
  });
  
  clear.addEventListener('click', reset);
  
  backspace.addEventListener('click', () => {
    input.value = input.value.slice(0,input.value.length-1);
  
  });
  
  add.addEventListener('click', () => {
    
   operator = '+';
    validate();
    if (x === undefined){
      x = parseFloat(input.value);
      input.value = ''
    } 
  
    if(typeof(x) === 'number') {
        input.value = '';
        decimal.removeAttribute('disabled');
      }
    
    });
  
  subtract.addEventListener('click', () => {
    operator = '-';
    validate();
  
    if (x === undefined){
         x = parseFloat(input.value);
         input.value = '';
        }
  
    if(typeof(x) === 'number') {
          input.value = '';
          decimal.removeAttribute('disabled');
        }
       
  });
  
  multiply.addEventListener('click', () => {
    operator = '*';
    validate();
  
    if (x === undefined){
           x = parseFloat(input.value);
           input.value = '';
         } 
  
    if(typeof(x) === 'number') {
          input.value = '';
          decimal.removeAttribute('disabled');
         }
         
  });
         
  division.addEventListener('click', () => {
    operator = '/';
    validate();
        
    if (x === undefined){
          x = parseFloat(input.value);
          input.value = '';
          }
        
    if(typeof(x) === 'number') {
        input.value = '';
        decimal.removeAttribute('disabled');
       }
               
  });
  
  mod.addEventListener('click', () => {
    operator = '%';
    validate();
        
    if (x === undefined){
          x = parseFloat(input.value);
          input.value = '';
        }
        
    if(typeof(x) === 'number') {
        input.value = '';
        decimal.removeAttribute('disabled');
       }        
  });
  
  pN.addEventListener('click', sign);
  
  decimal.addEventListener('click', () => {
    if(input.value.includes('.')) {
      decimal.setAttribute('disabled','');
    } 
    
    else if(input.value.includes('.') === false) {
      input.value += decimal.value;
  
    }
  });
  
  document.addEventListener('keypress', () => {
    input.focus()
  
  });  
})();








