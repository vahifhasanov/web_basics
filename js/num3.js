
//переключател теми
const btn = document.getElementById("theme-toggle");

btn.addEventListener("click", () => {
    document.body.classList.toggle("light");
});

//форма валидаціії

const form = document.getElementById("form");
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (!name || !email) {
        msg.textContent = "Заповни всі поля!";
        return;
    }

    msg.textContent = "Форма відправлена!";
});