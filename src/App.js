import React,  { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CookieConsent from "react-cookie-consent";

function App() {
  return (
    <div className="App">
      <h1>TEBRİKLER !!</h1>
      <h2>İNDİRİM KODUNUZ HAZIR</h2>
      <h1>591956151625</h1>
      <CookieConsent
        location="bottom"
        buttonText="Kabul Et"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
      >
        Navigasyon bilgilerinize göre size özel uyarlanmış reklamlar gösterebilmek için kendi çerezlerimizi ve üçüncü şahısların çerezlerini kullanıyoruz.{" "}
        <span>Devam ederek, kullanımını kabul ettiğinizi düşünüyoruz. Çerez kullanımını ayarlayabilir, reddedebilir veya hakkında daha fazla bilgi edinebilirsiniz:</span> {" "}
        <a href={'https://www.unilever.com.tr/cookie-policy.html'} style={{ color: '#FFF' }} >Çerez politikası.</a>
      </CookieConsent>   
    </div>
  );
}

export default App;



 