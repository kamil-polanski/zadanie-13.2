`use strict`;
(function() {
    const showModal = function(event) {
        event.preventDefault();
        document.querySelector(`#modal-overlay`).classList.add(`show`);
        const href = this.getAttribute(`href`);
        console.log(href);
        const modal = document.querySelector(href);
        console.log(modal);
        modals.forEach(function(ele) {
            ele.classList.remove(`show`);
        })
        modal.classList.add(`show`);
    };

    const modalLinks = document.querySelectorAll(`.show-modal`);
    modalLinks.forEach(function(ele) {
        ele.addEventListener(`click`, showModal);
    })

    const hideModal = function(event) {
        event.preventDefault();
        document.querySelector(`#modal-overlay`).classList.remove(`show`);
    };
    document.querySelector(`#modal-overlay`).addEventListener(`click`, hideModal);

    const closeButtons = document.querySelectorAll(`.modal .close`);
    closeButtons.forEach(function(ele) {
        ele.addEventListener(`click`, hideModal);
    })

    const modals = document.querySelectorAll(`.modal`);
    modals.forEach(function(ele) {
        ele.addEventListener(`click`, function(event) {
            event.stopPropagation();
        });
    })
})();