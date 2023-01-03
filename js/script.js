const testo = document.querySelector('input.texto');
const botao = document.querySelector('.btn-success');
const corpo = document.querySelector('.container-tasks');

const novaTarefa = () => {

    const div = document.createElement('div')
    const span = document.createElement('span');
    const img = document.createElement('img');

    if (!testo.value == '') {

        div.classList.add('task');
        span.textContent = testo.value;
        img.src = "assets/remove.svg"

        corpo.appendChild(div);
        div.appendChild(span);
        div.appendChild(img);

        testo.value = '';

    }

    img.addEventListener('click', () => {
        corpo.removeChild(div);
    })
};

botao.addEventListener('click', () => {
    novaTarefa()
});