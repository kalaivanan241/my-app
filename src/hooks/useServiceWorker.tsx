import React from "react";
import { register, unregister } from "../serviceWorkerRegistration";

const useServiceWorker = ({ timeout = 1000 }) => {
  const [updateAvailable, setUpdateAvailable] = React.useState<boolean>(false);
  const [registration, setRegistration] =
    React.useState<ServiceWorkerRegistration | null>(null);
  React.useEffect(() => {
    const interval: number = window.setInterval(() => {
      if (registration) {
        registration.update();
      }
    }, timeout);
    return () => clearInterval(interval);
  }, [registration]);

  const registered = (registration: ServiceWorkerRegistration) => {
    setRegistration(registration);
  };
  const updated = () => {
    setUpdateAvailable(true);
  };

  React.useEffect(() => {
    register({ onSuccess: registered, onUpdate: updated });
    return () => unregister();
  }, []);

  return { updateAvailable };
};

export default useServiceWorker;
