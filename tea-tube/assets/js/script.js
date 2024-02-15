const btn_ReadMore = document.querySelector('.btn_ReadMore');
const textHidden = document.querySelector('.textHidden');
const btn_showLess = document.querySelector('.btn_showLess');
const comments = document.querySelector('.comments');

btn_ReadMore.addEventListener('click', () => {
    textHidden.classList.remove('textHidden')
    btn_ReadMore.classList.add('btnHidden')
    comments.classList.remove('comments')
});

btn_showLess.addEventListener('click', () => {
    textHidden.classList.add('textHidden')
    btn_ReadMore.classList.remove('btnHidden')
    comments.classList.add('comments')
});