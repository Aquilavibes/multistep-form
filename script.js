function inputy() {
let field = document.getElementById('mail')
let msg = document.getElementById('error')
let myForm = document.querySelector('#myform')
let popUp = document.querySelector('.success')
let dismiss = document.getElementById('dis')
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if(field.value == '') {
        msg.innerHTML = 'field required';
        field.style.borderBlockColor = 'red';

        setTimeout( () => msg.remove(), 3000);
        
    } else {
      popUp.style.display = 'block' 
    }

}

dismiss.addEventListener('click', function() {
    popUp.style.display = 'none'
})



}
inputy();