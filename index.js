function writeCards(names, eventName) {
    let array = []
    for (let i = 0; i < names.length; i++) {
        array.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`)
    }
    return array
}

function countDown(number) {
    for (let i = number; i >= 0; i--) {
        console.log(i)
    }
}