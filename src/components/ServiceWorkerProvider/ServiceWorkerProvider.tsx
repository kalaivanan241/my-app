import React from "react";
import useServiceWorker from "../../hooks/useServiceWorker";
import { ServiceWorkerContext } from "./contect";

const ServiceWorkerProvider: React.FC = ({ children }) => {
  const context = useServiceWorker({ timeout: 1000 });
  return (
    <ServiceWorkerContext.Provider value={context}>
      {children}
    </ServiceWorkerContext.Provider>
  );
};

export default ServiceWorkerProvider;
