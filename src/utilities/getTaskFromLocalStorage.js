const getTaskFromLocalStorage = (serialNo) => {
    let task;
    const stringifiedTask = localStorage.getItem(`task-${serialNo}`);
    if (stringifiedTask) {
        task = JSON.parse(stringifiedTask);
    }
    return task
}

export default getTaskFromLocalStorage;