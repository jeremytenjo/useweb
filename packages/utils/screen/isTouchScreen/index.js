// https://stackoverflow.com/a/52855084/7045248
const isTouchScreen = () => window.matchMedia('(pointer: coarse)').matches

export default isTouchScreen
