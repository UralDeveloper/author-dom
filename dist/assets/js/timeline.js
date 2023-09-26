if(document.getElementById('timeLine')) {
    window.addEventListener('scroll', function() {
        var elements = document.querySelectorAll('#timeLine .timeLine-item[data-step^="step-"]');
        
        elements.forEach(function(element) {
            var rect = element.getBoundingClientRect();
        
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            element.classList.add('active');
            element.classList.remove('active-before');
            let el_attr = element.getAttribute('data-step');
            let image = document.querySelector(`#timeLine .step_img[data-step-id=${el_attr}]`);
            image.classList.add('active');

            } else if (rect.top < window.innerHeight / 2) {
                element.classList.add('active-before');
                element.classList.remove('active');
            } else {
                element.classList.remove('active');
                element.classList.remove('active-before');
            }
        });
    });


    // Получаем элементы
    var timelineLine = document.querySelector('#timeLine .timeLine-line');
    var screenCenter = window.innerHeight / 2;

    // Функция для отслеживания изменений при прокрутке
    function handleScroll() {
    // Получаем координаты верхней точки линии
    var lineTop = timelineLine.getBoundingClientRect().top;

    // Выводим результат
    let timeLine = document.querySelector('#timeLine .timeLine-line_load');
    timeLine.style.height = ( screenCenter - lineTop) + "px";
    }
    // Добавляем обработчик события прокрутки
    window.addEventListener('scroll', handleScroll);
}