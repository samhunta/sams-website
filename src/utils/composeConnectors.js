export default (...args) => (
  Object.assign.apply(Object, args.map((a) => a()))
)
