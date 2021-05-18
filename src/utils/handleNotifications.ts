const processNotification = (title: string, options: NotificationOptions) => {
  if (Notification.permission === "granted") {
    navigator.serviceWorker.getRegistration().then(function (reg) {
      reg?.showNotification(title, options);
    });
  } else if (Notification.permission === "denied") {
    /* the user has previously denied push. Can't reprompt. */
  } else {
    Notification.requestPermission(function (status) {
      console.log("Notification permission status:", status);
    });
  }
};

export default processNotification;
