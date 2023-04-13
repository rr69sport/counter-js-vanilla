const counter = {
  increment: (count) => Number(count) + 1,
  decrement: (count) => Number(count) - 1,
  reset: (count) => Number(count) - Number(count)
}

export default counter