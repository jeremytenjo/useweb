/* eslint-disable no-undef */
importScripts('https://www.gstatic.com/firebasejs/8.6.8/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.6.8/firebase-messaging.js')

firebase.initializeApp({
  apiKey: 'AIzaSyAMsN6u5O-ZCe98A4Dmgngpjqgoh5x3IVU',
  authDomain: 'useweb-lib.firebaseapp.com',
  projectId: 'useweb-lib',
  storageBucket: 'useweb-lib.appspot.com',
  messagingSenderId: '1029586460785',
  appId: '1:1029586460785:web:1a8a3a11bf3c70208ffbd0',
  measurementId: 'G-SZFJ3ET6B0',
})

const messaging = firebase.messaging()

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload)
  const notificationTitle = payload.notification.title
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon || payload.notification.image,
  }

  self.registration.showNotification(notificationTitle, notificationOptions)
})

self.addEventListener('notificationclick', (event) => {
  if (event.action) {
    clients.openWindow(event.action)
  }
  event.notification.close()
})
