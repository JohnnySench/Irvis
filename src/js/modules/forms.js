const form = () => {

    const postData = async (url, form) => {
        const res = await fetch(url, {
            method: 'POST',
            body: new FormData(form)
        })
        return await res.text()
    }


    const message = {
        loading: 'Идёт загрузка...',
        success: 'Данные отправлены! Скоро мы с вами свяжемся',
        failure: 'Опс, что-то пошло не так, инет барахлит'
    }
 
  


    const forms = document.querySelectorAll('.form');
    forms.forEach(item => {
        item.addEventListener('submit', e => {
            e.preventDefault();

            const textMessage = document.createElement('p');
            textMessage.innerHTML = message.loading;
            textMessage.classList.add('status');
            item.querySelector('.form_notice').insertAdjacentElement('afterend', textMessage);

            postData('assets/server.php', item)
            .then(data => console.log(data))
            .then(data => {
                textMessage.innerHTML = message.success
            })
            .catch(data => {
                textMessage.innerHTML = message.failure;
            })
            .finally(() =>{
                item.reset();
                setTimeout(() => textMessage.remove(), 2000);
            })
        })
       
    })
}

export default form;