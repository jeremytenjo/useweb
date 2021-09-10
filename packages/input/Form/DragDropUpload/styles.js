// @import '../../../../../../../../styles/global.scss';

// .wrapper {
//   width: 100%;
//   h6 {
//     margin: 0;
//     font-weight: bold;
//     margin-bottom: 20px;
//   }
//   .uploadWrapper {
//     position: relative;
//     cursor: pointer;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     padding: 23px 0;
//     border: dotted 2px var(--secondary-periwinkle-40);
//     user-select: none;
//     transition: 0.2s;
//     &:hover {
//       border-color: var(--secondary-periwinkle-80);
//     }
//     .input {
//       position: absolute;
//       width: 100%;
//       height: 100%;
//       z-index: 1;
//       cursor: pointer;
//       opacity: 0;
//     }
//     .uploadWrapperInner {
//       display: grid;
//       grid-auto-flow: column;
//       grid-gap: 10px;
//       width: fit-content;
//       width: -moz-fit-content;
//       font-weight: bold;
//       align-items: center;
//       .iconShare {
//         transform: rotate(270deg);
//         width: 16px;
//         height: 16px;
//         background-size: contain;
//       }
//       .text {
//         font-weight: bold;
//       }
//     }
//   }
//   .isHovering {
//     border-color: var(--secondary-periwinkle-80);
//   }
//   .isDisabled {
//     pointer-events: none;
//   }
//   .previewList {
//     display: grid;
//     grid-auto-flow: column;
//     grid-gap: 20px;
//     margin-top: 20px;
//     justify-content: start;
//     @media (min-width: #{$screen-md-min}) {
//       margin-top: 30px;
//     }
//   }
// }

// .previewWrapper {
//   position: relative;
//   max-width: 50%;

//   &.mini {
//     width: 80px;
//     max-width: none;
//     @media (min-width: #{$screen-md-min}) {
//       width: 85px;
//     }
//   }

//   p {
//     font-weight: bold;
//   }

//   .closeIcon {
//     cursor: pointer;
//     position: absolute;
//     top: 5px;
//     right: 5px;
//     background-color: var(--primary-navy);
//     height: 20px;
//     width: 20px;
//     padding: 2px;
//     border: 2px solid var(--primary-navy);
//     background-size: contain;
//     // needed close icon in white
//     background-image: url("data:image/svg+xml,%3Csvg width='20px' height='20px' viewBox='0 0 20 20' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg id='icon-x' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cpath d='M17.5382145,1 L19,2.39726193 L11.045,10 L19,17.6027381 L17.5382145,19 L10,11.7953009 L2.46178546,19 L1,17.6027381 L8.953,10 L1,2.39726193 L2.46178546,1 L10,8.20469912 L17.5382145,1 Z' id='Combined-Shape' fill='white' fill-rule='nonzero'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
//   }
// }
