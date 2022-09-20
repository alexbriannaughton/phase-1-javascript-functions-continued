// code your solution here
function saturdayFun (verb="roller-skate") {
    return `This Saturday, I want to ${verb}!`
}
function mondayWork (verb='go to the office') {
    return `This Monday, I will ${verb}.`
}

function wrapAdjective (flair = '*') {
    return function (parameter = 'special') {
        return(`You are ${flair}${parameter}${flair}!`)
    }
}
const alex = wrapAdjective('%')('awesome')