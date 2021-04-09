importScripts("https://www.gstatic.com/firebasejs/8.2.5/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.5/firebase-messaging.js");
firebase.initializeApp({
    apiKey: "AIzaSyDLvpuR35ZzIfbMeSsKkbOFacqwuS6BeLg",
    authDomain: "dating-2a6e2.firebaseapp.com",
    projectId: "dating-2a6e2",
    storageBucket: "dating-2a6e2.appspot.com",
    messagingSenderId: "841074318104",
    appId: "1:841074318104:web:62fb2d7397b3f818355c6d",
    measurementId: "G-K41TG12M1Y"
  });
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function (payload) {
  const promiseChain = clients
    .matchAll({
      type: "window",
      includeUncontrolled: true
    })
    .then(windowClients => {
      for (let i = 0; i < windowClients.length; i++) {
        const windowClient = windowClients[i];
        windowClient.postMessage(payload);
      }
    })
    .then(() => {
      return registration.showNotification("New Message");
    });
  return promiseChain;
});
self.addEventListener('notificationclick', function (event) {
  console.log('notification received: ', event)
});