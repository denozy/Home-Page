const yearContainer = document.getElementById('year');

function updateYear() {
    const now = new Date();
    const year = now.getFullYear();

    yearContainer.textContent = `${year}, `;
}

updateYear();
