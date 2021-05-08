const listItem = () => {
    if (localStorage.length > 0) {
        let listHTML = '';

        for (let i = 0; i < localStorage.length; i++) {
            const local = localStorage.key(i);
            listHTML += `
            <li class="list-group-item d-flex justify-content-between">
                ${local} - ${localStorage.getItem(local)} 
                <button type="button" class="btn-close" onclick = "deleteItemsLocalStorage('${local}')" aria-label="Close"></button>
            </li>`;
        }

        localStorageList.innerHTML = `
        <div class="card mt-3">
            <div class="card-body">
                <h4>Elementos guardados</h4>
                <ul class="list-group">
                    ${listHTML}
                </ul>
            </div>
        </div>
        `;
    } else {
        localStorageList.innerHTML = '';
    }
}

/**
 * Esta función busca un item en localStorage, lo elimina y enlista todos los elementos restantes.
 * @param {String} nameItem El nombre del item localizado en el localStorage
 */
const deleteItemsLocalStorage = (nameItem) => {
    localStorage.removeItem(nameItem);
    listItem();
}