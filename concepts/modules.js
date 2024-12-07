function add (...rest){
    return rest.reduce((curr, acc)=> curr + acc, 0)
}

function sub (a, ...rest){
    return rest.reduce((curr, acc)=> curr - acc, a)
}

module.exports = {
    addFn : add,
    subFn : sub
}