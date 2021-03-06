import addScriptToHead from '../../../../addScriptToHead'

import { isRefreshElementAdded } from './createRefreshElement'

export default function addStylesToHead() {
  if (!isRefreshElementAdded()) {
    addScriptToHead(
      `<style>

      .pull-to-refresh-material {
        position: relative;
      }
      
      .pull-to-refresh-material__control {
        position: fixed;
        top: -50px;
        left: 50%;
        -webkit-transform: translate3d(-50%, 0, 0);
        transform: translate3d(-50%, 0, 0);
        width: 40px;
        height: 40px;
        justify-content: center;
        align-items: center;
        background: #fff;
        border-radius: 50%;
        box-shadow: 0 1px 6px rgba(0, 0, 0, 0.117647), 0 1px 4px rgba(0, 0, 0, 0.117647);
        display: none;
      }
      
      .pull-to-refresh--pulling .pull-to-refresh-material__control,
      .pull-to-refresh--aborting .pull-to-refresh-material__control,
      .pull-to-refresh--reached .pull-to-refresh-material__control,
      .pull-to-refresh--refreshing .pull-to-refresh-material__control,
      .pull-to-refresh--restoring .pull-to-refresh-material__control {
        display: flex;
      }
      
      .pull-to-refresh--pulling .pull-to-refresh-material__spinner,
      .pull-to-refresh--aborting .pull-to-refresh-material__spinner,
      .pull-to-refresh--reached .pull-to-refresh-material__spinner,
      .pull-to-refresh--refreshing .pull-to-refresh-material__icon,
      .pull-to-refresh--restoring .pull-to-refresh-material__icon {
        display: none;
      }
      
      .pull-to-refresh-material__spinner {
        -webkit-transform-origin: center center;
        transform-origin: center center;
        -webkit-animation: pull-to-refresh-material-rotate 2s linear infinite;
        animation: pull-to-refresh-material-rotate 2s linear infinite;
      }
      
      .pull-to-refresh-material__path {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
        stroke-linecap: round;
        -webkit-animation: pull-to-refresh-material-dash 1.5s ease-in-out infinite;
        animation: pull-to-refresh-material-dash 1.5s ease-in-out infinite;
      }
      
      .pull-to-refresh-material__path--colorful {
        -webkit-animation: pull-to-refresh-material-dash 1.5s ease-in-out infinite,
          pull-to-refresh-material-colorful 6s ease-in-out infinite;
        animation: pull-to-refresh-material-dash 1.5s ease-in-out infinite,
          pull-to-refresh-material-colorful 6s ease-in-out infinite;
      }
      
      @-webkit-keyframes pull-to-refresh-material-rotate {
        100% {
          -webkit-transform: rotate(360deg);
          transform: rotate(360deg);
        }
      }
      
      @keyframes pull-to-refresh-material-rotate {
        100% {
          -webkit-transform: rotate(360deg);
          transform: rotate(360deg);
        }
      }
      
      @-webkit-keyframes pull-to-refresh-material-dash {
        0% {
          stroke-dasharray: 1, 200;
          stroke-dashoffset: 0;
        }
        50% {
          stroke-dasharray: 89, 200;
          stroke-dashoffset: -35px;
        }
        100% {
          stroke-dasharray: 89, 200;
          stroke-dashoffset: -124px;
        }
      }
      
      @keyframes pull-to-refresh-material-dash {
        0% {
          stroke-dasharray: 1, 200;
          stroke-dashoffset: 0;
        }
        50% {
          stroke-dasharray: 89, 200;
          stroke-dashoffset: -35px;
        }
        100% {
          stroke-dasharray: 89, 200;
          stroke-dashoffset: -124px;
        }
      }
      
      @-webkit-keyframes pull-to-refresh-material-colorful {
        100%,
        0% {
          stroke: #4285f4;
        }
        40% {
          stroke: #ea4335;
        }
        66% {
          stroke: #fbbc05;
        }
        80%,
        90% {
          stroke: #34a853;
        }
      }
      
      @keyframes pull-to-refresh-material-colorful {
        100%,
        0% {
          stroke: #4285f4;
        }
        40% {
          stroke: #ea4335;
        }
        66% {
          stroke: #fbbc05;
        }
        80%,
        90% {
          stroke: #34a853;
        }
      }
    
    </style>`,
    )
  }
}
