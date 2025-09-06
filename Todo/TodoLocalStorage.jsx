const storageKey = "reactTodo";
export const getLocalData = () => {
    // to get data from local storage
        const storedTasks = localStorage.getItem(storageKey);

        // if no data in local storage return empty array
        if(!storedTasks) return [];

        // to return string data as an array
        return  JSON.parse(storedTasks);
}

export const setLocalData = (tasks) => {

    // to set data in local storage 
    return  localStorage.setItem(storageKey,JSON.stringify(tasks));
}