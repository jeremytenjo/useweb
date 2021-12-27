// https://stackoverflow.com/a/52855084/7045248
export default function isTouchScreen() {
  return window.matchMedia('(pointer: coarse)').matches
}
