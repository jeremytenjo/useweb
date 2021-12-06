import firebase from 'firebase'
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'

/**
 * {@link https://github.com/firebase/firebaseui-web|Docs}
 */
export default function FirebaseUi({ clientId, onSignIn = () => null, ...config }) {
  const containerId = 'firebaseui-auth-container'
  const uiConfig = {
    callbacks: {
      signInSuccessWithAuthResult: (authResult) => {
        onSignIn(authResult)
      },
      uiShown: () => {
        // The widget is rendered.
        // Hide the loader.
        document.getElementById('loader').style.display = 'none'
      },
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInSuccessUrl:
      'http://localhost:9002/iframe.html?id=lib-authentication-firebaseui--default-story&args=&viewMode=story',
    signInOptions: [
      {
        // Google provider must be enabled in Firebase Console to support one-tap
        // sign-up.
        provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        // in firebase console authentication/providers
        clientId,
      },
    ],
    // Required to enable one-tap sign-up credential helper.
    credentialHelper: firebaseui.auth.CredentialHelper.GOOGLE_YOLO,
    // Terms of service url.
    tosUrl: 'jeremytenjo.com',
    // Privacy policy url.
    privacyPolicyUrl: 'jeremytenjo.com',
    ...config,
  }

  useEffect(() => {
    const ui = new firebaseui.auth.AuthUI(firebase.auth())
    ui.start(`#${containerId}`, uiConfig)
  }, [])

  return (
    <div id='firebaseui-auth-container'>
      <div id='loader'>Loading...</div>
    </div>
  )
}
