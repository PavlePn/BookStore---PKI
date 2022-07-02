import { createContext, useState } from "react";
import React from "react";

export const ModalsContext = createContext({
  showRegistracijai: false,
  showPrijava: false,
  showMessage: false,
  showPassChange: false,
  notification: "",
  setPrijava: () => {},
  setRegistracija: () => {},
  setMessage: () => {},
  setTekst: () => {},
  closeModals: () => {},
  setPassChange: () => {},
});

export function ModalsContextProvider(props) {
  const [showRegistracija, setRegistracija] = useState(false);
  const [showPrijava, setPrijava] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [notification, setNotification] = useState(false);
  const [showPassChange, setShowPassChange] = useState(false);

  function closeModalHandler() {
    setRegistracija(false);
    setPrijava(false);
    setShowMessage(false);
    setShowPassChange(false);
    setNotification("");
  }

  function setPrijavaHandler() {
    closeModalHandler();
    setPrijava(true);
  }
  function setRegiracijaHandler() {
    closeModalHandler();
    setRegistracija(true);
  }
  function setMessageHandler() {
    closeModalHandler();
    setShowMessage(true);
  }
  function setTekstHandler(tekst) {
    setNotification(tekst);
  }

  function setPassChangeHandler() {
    closeModalHandler();
    setShowPassChange(true);
  }

  const context = {
    showRegistracija,
    showPrijava,
    showMessage,
    notification,
    showPassChange,
    setTekst: setTekstHandler,
    setMessage: setMessageHandler,
    setPrijava: setPrijavaHandler,
    setRegistracija: setRegiracijaHandler,
    closeModals: closeModalHandler,
    setPassChange: setPassChangeHandler,
  };

  return (
    <ModalsContext.Provider value={context}>
      {props.children}
    </ModalsContext.Provider>
  );
}
export default ModalsContext;
