var notyf = new Notyf();

function addTask() {
    const task = document.getElementById('task').value;
    const category = document.getElementById('category').value;
    const priority = document.getElementById('priority').value;

    if (!task.trim()) {

        notyf.error({
            message: 'Ingrese una tarea válida',
            duration: 3000
        });
        return;

    }

    const taskItem = document.createElement('li');
    let taskHtml = `<strong>Tarea: ${task}</strong>`;
    if (category) {
        taskHtml += `<strong>Categoría: ${category}</strong>`;
    }
    if (priority) {
        taskHtml += `<strong>Prioridad: ${priority}</strong>`;
    }

    taskItem.innerHTML = taskHtml;

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button';
    deleteButton.textContent = 'Eliminar';
    deleteButton.addEventListener('click', function () {
        taskItem.remove();
    });

    taskItem.appendChild(deleteButton);

    document.getElementById('taskList').appendChild(taskItem);

    // Limpiar los campos después de agregar la tarea
    taskInput.value = '';
    document.getElementById('category').value = '';
    document.getElementById('priority').value = '';
}
