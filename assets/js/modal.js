function openPopup(buttonID){
    var numero = buttonID.split('-');
    var popupID = "modal-container-" + numero[2].toString();
    
    showModal(buttonID,popupID)
}
    
const showModal = (openButton, modalContent) =>{
        const openBtn = document.getElementById(openButton),
        modalContainer = document.getElementById(modalContent)
    
        modalContainer.classList.add('show-modal')
}


function closePopup(n){
    const closeBtn = document.querySelectorAll('.close-modal')

    var containerID = "modal-container-" + n.toString(); 

    const modalContainer = document.getElementById(containerID)
    modalContainer.classList.remove('show-modal')
}


/*=============== SHOW MODAL ===============*/
// const showModal = (openButton, modalContent) =>{
//     const openBtn = document.getElementById(openButton),
//     modalContainer = document.getElementById(modalContent)
    
//     if(openBtn && modalContainer){
//         openBtn.addEventListener('click', ()=>{
//             modalContainer.classList.add('show-modal')
//         })
//     }
// }
// showModal('open-modal','modal-container')

/*=============== SHOW MODAL 2===============*/
// const showModal2 = (openButton, modalContent) =>{
//     const openBtn = document.getElementById(openButton),
//     modalContainer = document.getElementById(modalContent)
    
//     if(openBtn && modalContainer){
//         openBtn.addEventListener('click', ()=>{
//             modalContainer.classList.add('show-modal')
//         })
//     }
// }
// showModal2('open-modal-2','modal-container-2')

/*=============== CLOSE MODAL ===============*/
// const closeBtn = document.querySelectorAll('.close-modal')

// function closeModal(){
//     const modalContainer = document.getElementById('modal-container')
//     modalContainer.classList.remove('show-modal')
// }
// closeBtn.forEach(c => c.addEventListener('click', closeModal))


/*=============== SHOW SCROLL UP ===============*/ 
// function scroll(){
//     const popup = document.getElementById('modal-container');
//     // When the scroll is higher than 460 viewport height, add the show-scroll class to the a tag with the scroll-top class
//     if(this.scrollY >= 10) popup.classList.remove('show-modal')
// }
// window.addEventListener('scroll', scroll)