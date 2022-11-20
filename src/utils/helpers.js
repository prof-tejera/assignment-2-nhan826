export const enqueue = (currentQueue, setFunction, newQueueItem) => {
    setFunction([...currentQueue, newQueueItem])    // calls setFunction — includes current queue and new item
}

export const dequeue = (currentQueue, setFunction) => {
    setFunction([...currentQueue.slice(1)])  // removes first item from current queue
}

export const removeFromQueue = (currentQueue, setFunction, index) => {
    setFunction([...currentQueue.slice(0, index), ...currentQueue.slice(index + 1)])  // copies up to and after index — removes item at index
}

