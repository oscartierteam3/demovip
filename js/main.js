function btnHover(){
    const btnItem = document.querySelectorAll('.btn');
    const list = document.querySelectorAll('.btn-menu-list');
    const btnCancle = document.querySelectorAll('.btn-cancle');
    const mask = document.querySelector('.modal-mask');
    for (let i = 0;i < btnItem.length;i++){
        btnItem[i].addEventListener('click',(e) => {
            // if(e.target.nodeName !== "LI"){return};
            const listTarget = list[i];
            if(listTarget){
                mask.classList.add('active');
                listTarget.classList.add('active');
                btnCancle[i].addEventListener('click',(event) => {
                    mask.classList.remove('active');
                    listTarget.classList.remove('active');
                })
                mask.addEventListener('click',(event) => {
                    mask.classList.remove('active');
                    listTarget.classList.remove('active');
                })
            } else{
                i+1
            }
        })
    }
}
btnHover();
function randomMs(){
  const itemTarget = document.querySelectorAll('.ms-text');
  for (let i = 0; i < itemTarget.length; i++){
    itemTarget[i].textContent = `${(Math.floor(Math.random() * (150 - 10 + 1) + 10))}ms`;
  }
}
// randomMs();
