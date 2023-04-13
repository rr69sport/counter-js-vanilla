import getElementById from "./utils/getElementById.js"
import { addAttribute, removeAttribute } from "./utils/handleAttributes.js"
import isElementExist from "./utils/isElementExist.js"
import counter from "./components/counter.js"

const counterApp = getElementById('counter')
const countText = getElementById('count')
const buttons = {
  increment: getElementById('increment'),
  decrement: getElementById('decrement'),
  reset: getElementById('reset')
}
const typeNumber = {
  pair: getElementById('pair'),
  odd: getElementById('odd')
}

counterApp.addEventListener('click', (e) => {

  const isElement = isElementExist({ trigger: `${e.target}`, element: `${buttons[e.target.id]}` })
  
  if(isElement) {
    const action = e.target.id
    const currentValue = countText.textContent
    const nextValue = `${counter[action](currentValue)}`
    countText.textContent = nextValue

    if (nextValue === '0') {
      addAttribute({ element: "reset", attr: "disabled", value: "true" })
    } else {
      removeAttribute({ element: "reset", attr: "disabled" })
    }

    if (Number(nextValue) % 2 === 0) {
      typeNumber.pair.classList.add('is-pair')
      typeNumber.odd.classList.remove('is-odd')
      countText.classList.remove('is-zero')
    }

    if (Number(nextValue) % 2 !== 0) { 
      typeNumber.pair.classList.remove('is-pair')
      typeNumber.odd.classList.add('is-odd')
      countText.classList.remove('is-zero')
    }

    if (Number(nextValue) === 0) {
      typeNumber.odd.classList.remove('is-odd')
      typeNumber.pair.classList.remove('is-pair')
      countText.classList.add('is-zero')
    }
  }
})