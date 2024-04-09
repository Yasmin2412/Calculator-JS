let string="";
const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];

//Add event listener to buttons, call calculate() on click.
buttons.forEach((button)=>{
    button.addEventListener('click', (e)=>{
      if(e.target.dataset.value == '='){
        string = eval(string);
        document.querySelector('input').value = string;
      }
      else if(e.target.dataset.value == 'AC'){
        string = ""
        document.querySelector('input').value = string;
      }
      else if(e.target.dataset.value == 'DEL'){
        string = ""
        document.querySelector('input').value = string;
      }
      else{ 
      console.log(e.target)
      string = string + e.target.dataset.value;
      document.querySelector('input').value = string;
        }
    })
  })