import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
  domain="dev-6zxetbkuxbiphzug.us.auth0.com"
  clientId="xwisU4y9vZOKNf3sMYde9YCvEv65AiSV"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
>
    <App />
    </Auth0Provider>,
);

