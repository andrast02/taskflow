document.getElementById('addBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value;

    if (taskValue === '') {
        alert("Kérlek, írj be egy feladatot!");
        return;
    }

    const taskList = document.getElementById('taskList');
    
    // Új listaelem létrehozása
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskValue}</span>
        <button class="delete-btn">Törlés</button>
    `;

    // Törlés funkció hozzáadása a gombhoz
    li.querySelector('.delete-btn').addEventListener('click', function() {
        li.remove();
    });

    taskList.appendChild(li);
    taskInput.value = ''; // Mező ürítése
});