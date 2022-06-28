
let screen = document.querySelector(".screen")
let buttons = Array.from(document.querySelectorAll("h2"));

innerText = 0;

buttons.map(buttons =>{
    buttons.addEventListener('click', (a) =>{
        switch(a.target.innerText){
            case "AC":
                screen.innerText = " ";
                break;
            case "=":
                try {
                    screen.innerText = eval(screen.innerText);
                } catch (error) {
                    screen.innerText = "ERR";
                }
                break;
            case "DEL":
                if (screen.innerText){
                    screen.innerText = screen.innerText.slice(0, -1);
                }
                break;
            default:
            screen.innerText += a.target.innerText;
        }
    })
})
