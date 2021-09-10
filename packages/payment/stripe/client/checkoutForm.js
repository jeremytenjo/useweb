// import styled from 'styled-components'
// import { injectStripe } from 'react-stripe-elements'

// import PayButton from '../../lib/atoms/PayButton'
// import CheckoutList from '../../lib/molecules/CheckoutList'
// import LoadingScreen from '../../lib/molecules/LoadingScreen'
// import {
//   open as ShowLoadingScreen,
//   close as HideLoadingscreen,
// } from '../../lib/molecules/LoadingScreen'
// import {
//   open as showThankYouScreen,
//   close as hideThankYouScreen,
// } from '../../lib/molecules/ThankyouScreen'
// import { fetchActivities } from '../../settings/Database/activitiesState'
// import { updateActivitiesBillLength } from '../../settings/Database/activitiesBill'
// import imgClose from '../../images/Icons/cancelwhite.svg'

// import { create } from './stripeCharge'

// export const open = () => {
//   const checkoutForm = document.querySelector('#checkoutForm')
//   const body = document.querySelector('body')

//   checkoutForm.style.display = 'block'
//   body.style.overflow = 'hidden'
// }

// export const close = () => {
//   const checkoutForm = document.querySelector('#checkoutForm')
//   const body = document.querySelector('body')

//   checkoutForm.style.display = 'none'
//   body.style.overflow = 'visible'
// }

// // Compoenent
// const CheckoutForm = ({ stripe }) => {
//   // State
//   const [activitiesBill, setactivitiesBill] = useGlobal('activitiesBill')
//   const [userAmount, setuserAmount] = useGlobal('userAmount')
//   const [activitiesData, setactivitiesData] = useGlobal('activitiesData')

//   const [msgError, setmsgError] = useState('')
//   const [currency, setCurrency] = useState('usd')
//   const [giverName, setgiverName] = useState('')

//   let newAmount = 0
//   let newAmountDollar = 0

//   // On refresh
//   activitiesBill.map((item, i) => {
//     newAmount = newAmount + parseInt(item.inputValue)
//     newAmountDollar += parseInt(item.inputValue) * item.cost
//   })

//   newAmountDollar = newAmountDollar + userAmount

//   // Funcitons
//   const submit = async (ev) => {
//     if (currency === '') return setmsgError('Please select a currency')
//     else if (giverName === '') return setmsgError('Please add your name')
//     else {
//       ShowLoadingScreen()

//       const stripeResponse = await create(
//         stripe,
//         currency,
//         newAmountDollar,
//         giverName,
//       )
//       // console.log(stripeResponse)

//       if (stripeResponse.type !== 'error') {
//         // console.log(stripeResponse)
//         setmsgError('')
//         HideLoadingscreen()
//         close()
//         showThankYouScreen()
//         updateDB()
//         resetAllData()
//       } else {
//         HideLoadingscreen()
//         console.log('error: ' + stripeResponse.error.message)
//         setmsgError(stripeResponse.error.message)
//       }
//     }
//   }

//   const onCurrencySelect = async (event) => {
//     const currency = event.target.value
//     setCurrency(currency)
//   }

//   const onNameAdded = async (name) => {
//     setgiverName(name)
//   }

//   const updateDB = async () => {
//     activitiesBill.map((item) => {
//       let newamount = item.length - parseInt(item.inputValue)
//       updateActivitiesBillLength(item.id, newamount)
//     })
//   }

//   const resetAllData = async () => {
//     setactivitiesBill([])
//     setuserAmount(0)
//     let data = await fetchActivities()
//     setactivitiesData(data)
//   }

//   // Template
//   return (
//     <Overlay id='checkoutForm'>
//       <Wrapper className='checkout'>
//         <Header>
//           <span>CHECKOUT</span>
//           <img onClick={close} src={imgClose} alt='icon' />
//         </Header>

//         <CheckoutList
//           data={activitiesBill}
//           msgError={msgError}
//           onCurrencySelect={onCurrencySelect}
//           onNameAdded={onNameAdded}
//         />
//         <Bottom>
//           <PayButton onClick={submit} amount={newAmountDollar} />
//         </Bottom>
//         <LoadingScreen />
//       </Wrapper>
//     </Overlay>
//   )
// }

// // Styled
// const Overlay = styled.div`
//   background-color: rgba(33, 33, 33, 0.6);
//   position: fixed;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   overflow: auto;
//   display: none;
//   box-sizing: border-box;
//   transition: 0.2s;
// `

// const Wrapper = styled.div`
//   background-color: white;
//   transition: 0.2s;
//   width: 100%;
//   position: fixed;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   margin: 0 auto;
//   display: flex;
//   flex-direction: column;
//   padding-bottom: 50px;
//   @media (min-width: 800px) {
//     width: 400px;
//     border-radius: 10px;
//     box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
//     top: 50px;
//     bottom: auto;
//     max-height: 90%;
//   }
// `

// const Header = styled.div`
//   background: linear-gradient(270.77deg, #ab47bc 0.11%, #2196f3 98.56%);
//   color: white;
//   font-size: 16px;
//   height: 50px;
//   display: flex;
//   align-items: center;
//   font-family: var(--font-primary);
//   justify-content: space-between;
//   font-weight: 500;
//   padding: 0 20px;
//   font-weight: bold;
//   position: absolute;
//   left: 0;
//   right: 0;
//   top: 0;

//   img {
//     width: 11px;
//     cursor: pointer;
//   }

//   @media (min-width: 800px) {
//     border-radius: 10px 10px 0 0;
//   }
// `

// const Bottom = styled.div`
//   background: white;
//   position: absolute;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   @media (min-width: 800px) {
//     border-radius: 0 0 10px 10px;
//   }
// `

// // Exports
// export default memo(injectStripe(CheckoutForm))
