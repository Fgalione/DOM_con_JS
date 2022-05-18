const checkComplete = () => {
    const i = document.createElement('i');
    i.classList.add ('far', 'fa-check-square', 'icon');
    i.addEventListener("click", completeTask);
    return i;
}

//Immediately invoked function expression IIFE
//Funcion para el cheklist
const completeTask = (event) => {
    const element = event.target;
    element.classList.toggle('fas');
    element.classList.toggle('çompleteIcon');
    element.classList.toggle('far');
};


export default checkComplete;