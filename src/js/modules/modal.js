
const modals = () => {
    const bindModals = (selectorTrigger, selectorModal, selectorClose) => {
        const trigger = document.querySelectorAll(selectorTrigger);
        const modal = document.querySelector(selectorModal);
        const closeBtn = modal.querySelector(selectorClose);

        const toggleModal = (display, overflow) => {   // Ф-ция закрытия и открытия модального окна
            modal.style.display = display;
            document.body.style.overflow = overflow;
        }

        trigger.forEach(btn => {                   // Перебираются все кнопки и вешается обработчик, чтобы при нажатии открывалась модалка
            btn.addEventListener('click', e => {
                if (e.target) {
                    e.preventDefault();
                }
                toggleModal('block', 'hidden')
            });
        });


        closeBtn.addEventListener('click', () => { // Модальное окно закрывается если на крестик
            toggleModal('none', '');
        });

        modal.addEventListener('click', e => { // Модальное окно закрывается если нажали на подложку
            if (e.target === modal) {
                toggleModal('none', '');
            }
        })
    }

    const showModalByTime = (selectorModal, time) => {         // Модальное окно появляется через 60 секунд
        const modal = document.querySelector(selectorModal);

        setTimeout(() => {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }, time);
    }

    bindModals('.popup_engineer_btn', '.popup_engineer', '.popup_close');
    bindModals('.phone_link', '.popup', '.popup_close');
    // showModalByTime('.popup', 60000);
}

export default modals;

