export default function styleEmulatorWarning() {
  const firebaseEmulatorEl = document.createElement('div')

  firebaseEmulatorEl.setAttribute(
    'title',
    'Running firebase emulators. Do not use production credentials.',
  )
  firebaseEmulatorEl.style.position = 'fixed'
  firebaseEmulatorEl.style.bottom = '10px'
  firebaseEmulatorEl.style.left = '10px'
  firebaseEmulatorEl.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" title='Running in emulator mode.' fill="none" viewBox="0 0 30 40">
      <g clip-path="url(#clip0)">
        <path fill="#8801FF" d="M0 32.248l.242-.339 11.44-21.706.024-.23L6.663.5c-.423-.793-1.612-.592-1.75.296L0 32.248z"/>
        <path fill="#8801FF" d="M.145 31.99l.182-.357 11.32-21.479L6.617.643C6.2-.142 5.137.058 5 .937L.145 31.99z"/>
        <g filter="url(#filter0_i)">
          <path fill="#8801FF" d="M.145 31.99l.182-.357 11.32-21.479L6.617.643C6.2-.142 5.137.058 5 .937L.145 31.99z"/>
        </g>
        <path fill="#8801FF" d="M15.38 17.139l3.755-3.846-3.756-7.17c-.356-.679-1.351-.68-1.704 0L11.668 9.95v.326l3.713 6.863z"/>
        <path fill="#8801FF" d="M15.316 16.978l3.65-3.739-3.65-6.95c-.346-.66-1.188-.73-1.531-.068l-2.018 3.886-.06.2 3.61 6.67z"/>
        <g filter="url(#filter1_i)">
          <path fill="#8801FF" d="M15.316 16.978l3.65-3.739-3.65-6.95c-.346-.66-1.188-.73-1.531-.068l-2.018 3.886-.06.2 3.61 6.67z"/>
        </g>
        <path fill="#671DA8" d="M0 32.247l.11-.11.398-.162 14.638-14.584.186-.505-3.652-6.958L0 32.248z"/>
        <path fill="#8801FF" d="M15.851 39.604L29.1 32.215l-3.783-23.3a.905.905 0 00-1.534-.494L0 32.249l13.172 7.354a2.749 2.749 0 002.68 0"/>
        <path fill="#BF75FF" d="M28.978 32.153L25.223 9.03c-.117-.724-.86-1.023-1.378-.504L.145 32.203l13.027 7.281a2.729 2.729 0 002.659 0l13.147-7.332z"/>
        <path fill="#8801FF" d="M15.85 39.385a2.749 2.749 0 01-2.678 0L.106 32.134 0 32.249l13.172 7.354a2.749 2.749 0 002.679 0l13.248-7.388-.032-.2-13.216 7.371z"/>
      </g>
      <defs>
        <filter id="filter0_i" width="11.503" height="31.838" x=".145" y=".152" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
          <feOffset/>
          <feGaussianBlur stdDeviation="124.619"/>
          <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"/>
          <feBlend in2="shape" result="effect1_innerShadow"/>
        </filter>
        <filter id="filter1_i" width="7.26" height="11.22" x="11.707" y="5.758" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
          <feOffset dx="7.121" dy="-64.09"/>
          <feGaussianBlur stdDeviation="24.924"/>
          <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"/>
          <feBlend in2="shape" result="effect1_innerShadow"/>
        </filter>
        <clipPath id="clip0">
          <path fill="#fff" d="M0 0h29.168v40H0z"/>
        </clipPath>
      </defs>
    </svg>
    `

  document.body.appendChild(firebaseEmulatorEl)

  setTimeout(() => {
    const emulatorAlert = document.querySelector('.firebase-emulator-warning')
    emulatorAlert.remove()
  }, 350)
}
