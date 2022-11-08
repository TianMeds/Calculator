//variables for calculator

const result = document.querySelector('#result');
const buttons = document.querySelectorAll('button');
const themeToggleBtn = document.querySelector('.theme-toggler');
const calculator = document.querySelector('.calculator');
const toggleIcon = document.querySelector('.bi-brightness-high');

buttons.forEach((item) => {
    item.onclick = () => {
        if(item.id == "clear"){
            result.innerText = "";
        }
        else if(item.id == "backspace"){
            let string = result.innerText.toString();
            result.innerText = string.slice(0, string.length-1);
        }
        else if(result.innerText != "" && item.id == "equal"){
            result.innerText = eval(result.innerText);
        }
        else if(result.innerText == "" &&  item.id == "equal"){
            result.innerText = "Empty!";
            setTimeout(() => (result.innerText = ""), 2000);
        }
        else{
            result.innerText += item.id;
        }

    };
});


let isDark = true;
themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  toggleIcon.classList.toggle('bi-moon');
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
};