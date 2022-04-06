const uid = () => {
    const head = Date.now().toString(36);
    const tail = Math.random().toString(36).substr(2);

    // console.log(head+tail)

    console.log(head)
    console.log(tail)

    return `TN-${head}${tail}`
}

console.log(uid())