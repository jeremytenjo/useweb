/*
Fonts available:
  Montserrat
  Roboto
*/
export default `
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Roboto'), local('Roboto-Regular'),
    url('./fonts/Roboto/Roboto.woff2') format('woff2');
}

@font-face {
  font-family: 'Montserrat';
  src: url('./fonts/Montserrat/Montserrat-Light.woff2') format('woff2');
  font-weight: lighter;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Montserrat';
  src: url('./fonts/Montserrat/Montserrat-Regular.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Montserrat';
  src: url('./fonts/Montserrat/Montserrat-Medium.woff2') format('woff2');
  font-weight: medium;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Montserrat';
  src: url('./fonts/Montserrat/Montserrat-Bold.woff2') format('woff2');
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}


:root {
 --font-primary: Montserrat;
 --font-secondary: Montserrat;
}

.typography-body1 {
  font-family:  var(--font-primary);
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  letter-spacing: 0.5px;
}

.typography-body2 {
  font-family:  var(--font-primary);
font-style: normal;
font-weight: normal;
font-size: 14px;
letter-spacing: 0.25px;
}

.typography-h1 {
  font-family:  var(--font-primary);
  font-style: normal;
  font-weight: 300;
  font-size: 96px;
  letter-spacing: -1.5px;
}
.typography-h2 {
  font-family:  var(--font-primary);
  font-style: normal;
  font-weight: 300;
  font-size: 60px;
  letter-spacing: -0.5px;
}
.typography-h3 {
  font-family:  var(--font-primary);
font-style: normal;
font-weight: normal;
font-size: 48px;
}
.typography-h4 {
  font-family:  var(--font-primary);
  font-style: normal;
  font-weight: normal;
  font-size: 34px;
  letter-spacing: 0.25px;
}

.typography-h5 {
  font-family:  var(--font-primary);
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
}

.typography-h6 {
  font-family:  var(--font-primary);
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: 0.15px;
}

.typography-subtitle1 {
  font-family:  var(--font-primary);
font-style: normal;
font-weight: normal;
font-size: 16px;
letter-spacing: 0.15px;
}

.typography-subtitle2 {
  font-family:  var(--font-primary);
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
}
.typography-button {
  font-family:  var(--font-primary);
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  letter-spacing: 0.75px;
  text-transform: uppercase;
}
.typography-caption {
  font-family:  var(--font-primary);
font-style: normal;
font-weight: normal;
font-size: 12px;
letter-spacing: 0.4px;
}
.typography-overline {
  font-family:  var(--font-primary);
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
}
.typography-navbar {
  font-family:  var(--font-primary);
  font-size: 10px;
}
`
