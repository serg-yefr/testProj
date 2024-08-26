let clickCount = 0;
let totalScore = 0.0;
let lastClickTime = 0;

document.getElementById('click-button').addEventListener('click', function(event) {
    const now = Date.now();

    // Проверяем, прошло ли достаточно времени с последнего клика (200 мс = 5 кликов в секунду)
    if (now - lastClickTime < 100) {
        return; // Игнорируем клик, если прошло менее 200 мс
    }

    lastClickTime = now;
    clickCount++;
    totalScore += 0.001;

    document.getElementById('click-count').textContent = `Счет нажатий: ${clickCount}`;
    document.getElementById('total-score').textContent = `Общий счет: ${totalScore.toFixed(3)}`;

    // Предотвращаем масштабирование при быстром клике
    event.preventDefault();
}, { passive: false });
