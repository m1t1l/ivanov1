export const  dice = (sides) => Math.random() * sides + 1 | 0
export const d6 = () => dice(6)
export const minD6From3 = () => {
  const randomD6 = Array(3).fill(0).map(() => d6())
  return randomD6.reduce((p, c) => p < c ? p : c)
}