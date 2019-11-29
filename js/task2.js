/**
 * Создать HTML-страницу с кнопкой "Открыть" и модальным окном. На модальном окне должен быть текст и кнопка "Закрыть".
 *  Изначально модальное окно не отображается. При клике на кнопку "Открыть" появляется модальное окно,
 *  на кнопку "Закрыть" – исчезает.
 */

let btnOpen = document.getElementById("btnopen"),
    modal = document.getElementById('wrap_modal'),
    btnClose = document.getElementById("btnclose");

btnOpen.onclick = () => {
    modal.style.display = 'block';
};

btnClose.onclick = () => {
    modal.style.display = 'none';
};