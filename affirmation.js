function genRandomNumber(num) {
    // Gets # from 0 -> num -1
    return Math.floor(Math.random() * num)
}

const collectiveAdvice = {
    dayInfo: ['sunny', 'cloudy', 'rainy', 'stormy'],
    tryTo: ['imangin you\'re somewhere diffrent', 'perpare to attach tomorrow', 'nap for a bit'],
    orTry: ['being grateful anyways', 'smelling the flowers', 'calling a friend', 'going for a walk']
}

let personalAffirmation = []

for(let prop in collectiveAdvice) {
    let optionIdx = genRandomNumber(collectiveAdvice[prop].length)
  
    // use the object's properties to customize the message being added to personalWisdom  
    switch(prop) {
      case 'dayInfo':
        personalAffirmation.push(`Your day was "${collectiveAdvice[prop][optionIdx]}".`)
        break
      case 'tryTo':
        personalAffirmation.push(`You should try: "${collectiveAdvice[prop][optionIdx]}".`)
        break
      case 'orTry':
        personalAffirmation.push(`Or this: "${collectiveAdvice[prop][optionIdx]}".`)
        break
      default:
        personalAffirmation.push('There is not enough info.')
    }
  }
  
  function formatAffirmation(advice) {
    // Add some ASCII here?
    // Add in more symbols to the array? like emojies or what not?
    const formatted = personalAffirmation.join('\n')
    console.log(formatted)
  }
  
  formatAffirmation(personalAffirmation);