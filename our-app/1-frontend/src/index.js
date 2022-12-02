import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Auth0Provider
    domain="dev-7jn25ilb3lgigzb7.uk.auth0.com"
    clientId="dFoBIi6yt2iLtMZ3PyTTOYddVb1y3TiK"
    redirectUri={window.location.origin}
    audience="https://dev-7jn25ilb3lgigzb7.uk.auth0.com/api/v2/"
    scope="read:current_user update:current_user_metadata"
  >
   <React.StrictMode>
    <App />
  </React.StrictMode>
  </Auth0Provider>
);

reportWebVitals();
