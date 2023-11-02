import React from "react";
import { Auth0Provider as Auth0ProviderWrapper } from '@auth0/auth0-react';

const CustomAuth0Provider = ({ children }) => {
  return (
    <Auth0ProviderWrapper
      domain="dev-tseigf7qtppygoi5.us.auth0.com"
      clientId="V2d47hjVY58tnOpjQi91VNGnhj4PjPRS"
      redirectUri={window.location.origin}
    >
      {children}
    </Auth0ProviderWrapper>
  );
};

export default CustomAuth0Provider;