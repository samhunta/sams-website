import { createElement } from 'react'

const dummyProps = {
  style: {
    padding: '5px',
    border: '1px solid red',
  },
}

function counter() {
  let x = 0
  return () => ++x
}

function labelIncrementer() {
  const singletons = {}
  return (name) => {
    if (! singletons[name]) {
      singletons[name] = counter()
    }
    return `${name} ${singletons[name]()}`
  }
}

const createLabel = labelIncrementer()

export default function createDummyComponent(
  name = 'Dummy Component',
  style = dummyProps,
  element = 'div'
) {
  return ({ children }) => (
    createElement(
      element,
      style,
      createElement(
        element,
        undefined,
        createLabel(name)
      ),
      children
    )
  )
}
