//get elements
const modal = document.getElementById('simpleModal');

const modalBtn = document.getElementById('modalBtn');

const closeBtn = document.querySelector('.closeBtn');

// add event listener for opening modal
modalBtn.addEventListener('click', openModal);

//add event listner for closing modal
closeBtn.addEventListener('click', closeModal)

//add event listener for window to exit window

window.addEventListener('click', clickOutside);


//open modal function
function openModal() {
    modal.style.display = 'block';

}


//close modal function
function closeModal() {
    modal.style.display = 'none';

}


//close modal function by clicking window
function clickOutside(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }


}