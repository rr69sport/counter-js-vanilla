import getElementById from "./getElementById.js"

export const addAttribute = ({ element, attr, value }) => {
  const elem = getElementById(element)
  elem && elem.setAttribute(attr, value)
}

export const removeAttribute = ({ element, attr }) => {
  const elem = getElementById(element)
  elem && elem.removeAttribute(attr)
}