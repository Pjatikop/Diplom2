let alertWrapper = document.querySelector('.alert');
let alertClose = document.querySelector('.alert__close');

//if (alertWrapper) {
//  alertClose.addEventListener('click', () =>
//    alertWrapper.style.display = 'none'
//)}

if (alertWrapper) {
    for(let i=0; i < alertClose.length; i++) {
  alertClose[i].addEventListener('click', function() {
    this.parentNode.remove();
    })
    }
)}
