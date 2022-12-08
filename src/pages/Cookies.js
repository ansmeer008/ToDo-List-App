import React from "react";
import Nav from "../components/Nav";
import { useEffect } from "react";

export default function Cookies({ getCookies, setGetCookies }) {
  const handleLocalStorageCookie = (id) => {
    const deletedCookies = getCookies.filter((el) => el.id !== id);
    setGetCookies(deletedCookies);
  };

  useEffect(() => {
    localStorage.removeItem("getCookies");
    localStorage.setItem("getCookies", JSON.stringify(getCookies));
  }, [getCookies]);

  return (
    <div id="cookies-container">
      <Nav />
      <div id="cookies-body">
        <div id="cookies-box">
          {getCookies.map((el) => {
            return (
              <div key={el.id} className="cookie-box-container">
                <div className="cookie-box">
                  <div className="cookie-icon">{el.cookie}</div>
                  <div className="cookie-date">{el.date}</div>
                </div>
                <button
                  className="cookie-delete-button"
                  onClick={() => handleLocalStorageCookie(el.id)}
                >
                  x
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
