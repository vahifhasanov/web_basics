"use strict";
function startTimer(seconds) {
    const start = Date.now();
    const duration = seconds * 1000;
    let passedSeconds = 0;
    let now;

    console.log(`Старт таймера на ${seconds} секунд`);

    do {
        now = Date.now();
        const diff = now - start;

        const fullSeconds = Math.floor(diff / 1000);
        if (fullSeconds > passedSeconds) {
            passedSeconds = fullSeconds;
            console.log(`Пройшло: ${passedSeconds} с`);
        }
    } while (now - start < duration);

    console.log(`Таймер на ${seconds} секунд завершено`);
}

startTimer(10);