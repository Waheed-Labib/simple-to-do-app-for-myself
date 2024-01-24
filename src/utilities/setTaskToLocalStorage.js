const setTaskToLocalStorage = (task, serialNo) => {

    const taskStringified = JSON.stringify(task);
    localStorage.setItem(`task-${serialNo}`, taskStringified);
}

export default setTaskToLocalStorage;