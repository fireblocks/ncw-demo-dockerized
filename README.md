<div align="center">
  <img src="./image/logo.svg" width="400px" heigth="200px">
  <h1>NCW Full Stack Demo Application</h1>
  <br/>
  <h3> Resources: </h3>
  <div>
    <a href="https://ncw-developers.fireblocks.com/docs">Fireblocks NCW Developer documentation</a>
  </div>
  <div>
    <a href="https://developers.fireblocks.com/">Fireblocks Developer Portal</a>
  </div>
  <div>
    <a href="https://www.fireblocks.com/developer-sandbox-sign-up/">Fireblocks Sandbox Sign Up</a>
  </div>
</div>
<br/>
<div align="center" style="border-top: 1px solid #4e5259;">
  <h2> 📖 Intro</h2>
</div>

This repository contains a full Web demo of the Fireblocks Non Custodial Wallet application.\
The application has the following components in it:
- [Fireblocks React NCW Demo application](https://github.com/fireblocks/ncw-web-demo.git#main) - React demo application that utilizes the [Fireblocks NCW Web SDK](https://github.com/fireblocks/ncw-js-sdk).
- [Fireblocks Backend Demo application]() - Node.js (Express) backend server that is being used by the Front End for proxying the communication to the Fireblocks API
- [Localtunnel](https://theboroer.github.io/localtunnel-www/) - Exposing your local development environment to the external world and specifically to Fireblocks Webhook service
- MySQL Database

Please make sure to checkout our [NCW Developer docs](https://ncw-developers.fireblocks.com/docs) for getting a better understanding how the NCW feature works and some additional relevant concepts that would be needed for the Setup phase.

<br/>

<div align="center" style="border-top: 1px solid #4e5259;">
  <h2> 🛠️ Configuration & Setup</h2>
</div>

1. Please make sure that you have gone through all the necessary steps for [workspace provisioning and setup](https://ncw-developers.fireblocks.com/docs/implementation-steps).
2. Clone the repo to your machine:
```git clone https://github.com/fireblocks/ncw-demo-dockerized.git```
3. Move into the cloned directory:
```cd ncw-demo-dockerized```

<br/> 

> **Note**
> The example values are just mock values and do not represent real credentials

<br/>


There are a few configuration files that should be configured before running the application.
- `/config/ncw_backend_demo/env.txt` - configuration file for the backend application. An example file would like this:

```js
NODE_ENV=production

PORT=3000

# Auth
ISSUER_BASE_URL="https://dev-8333e0j12dmj123qweali.us.auth0.com"
AUDIENCE="http://localhost:3000"

# Fireblocks API 
FIREBLOCKS_API_SECRET="-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAA\...\nqt1ADkJPmFybZIhEY+ubRIOf5w==\n-----END PRIVATE KEY-----"
FIREBLOCKS_API_KEY_NCW_SIGNER="5f5d261f-973c-4f18-bc3e-b9b35dd214d6"
FIREBLOCKS_API_KEY_NCW_ADMIN="e1607032-ad47-46b1-b358-69ab1785e738"
FIREBLOCKS_API_BASE_URL="https://sandbox-api.fireblocks.io/"

# Fireblocks sandbox webhook public key
FIREBLOCKS_WEBHOOK_PUBLIC_KEY="-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAw+fZuC+0vDYTf8fYnCN6\n71iHg98lPHBmafmqZqb+TUexn9sH6qNIBZ5SgYFxFK6dYXIuJ5uoORzihREvZVZP\n8DphdeKOMUrMr6b+Cchb2qS8qz8WS7xtyLU9GnBn6M5mWfjkjQr1jbilH15Zvcpz\nECC8aPUAy2EbHpnr10if2IHkIAWLYD+0khpCjpWtsfuX+LxqzlqQVW9xc6z7tshK\neCSEa6Oh8+ia7Zlu0b+2xmy2Arb6xGl+s+Rnof4lsq9tZS6f03huc+XVTmd6H2We\nWxFMfGyDCX2akEg2aAvx7231/6S0vBFGiX0C+3GbXlieHDplLGoODHUt5hxbPJnK\nIwIDAQAB\n-----END PUBLIC KEY-----"

# Database
DB_HOST=mysql
DB_PORT=3306
DB_USERNAME=ncw_user
DB_PASSWORD=ncw_user_password
DB_NAME=ncw_demo
```
<br/>

- `/config/ncw_web_demo/env.txt` - configuration file for the Frontend application. An example file would look like this:
```js
VITE_AUTOMATE_INITIALIZATION=true

VITE_AUTH0_DOMAIN="https://dev-8333e0j12dmj123qweali.us.auth0.com"
VITE_AUTH0_CLIENT_ID=mYl4sGaASGJ04zAnbWeBv7CrgNNtpR1F
VITE_AUTH0_AUDIENCE="http://localhost:3000"
VITE_BACKEND_BASE_URL="http://localhost:3000"
VITE_NCW_SDK_ENV=sandbox
``` 
<br/>

+ `/config/tunnel/env.txt` - configuration file for the Localtunnel application. An example file would look like this:
```js
TUNNEL_SUBDOMAIN=my_ncw_subdomain
TARGET_PORT=3000
TARGET_HOST=ncw_backend_demo
```

<br/>

+ `/config/mysql/env.txt` - configuration file for the MySQL application. An example file would look like this:
```js
MYSQL_ROOT_PASSWORD=test
```

<br/>

<div align="center" style="border-top: 1px solid #4e5259;">
  <h2> 🔥 Running the application</h2>
</div>

Run the following command:
```docker-compose up --build ```

The application should start the build process and output the webhook URL that should be configured in your Fireblocks console.\
The webhook endpoint is exposed in the following route:

`https://your_sub_domain.local.lt/api/webhook`

Please make sure to configure it properly in the Fireblocks console.

<div align="center">
  <img src="./image/webhook.png" width="550px" heigth="400px">
</div>
<br/>

The Frontend application would run on: `http://localhost:5173` by default.\
The Backend application would run on: `http://localhost:3000` by default.

<div align="center" style="border-top: 1px solid #4e5259;">
  <h2> ⚖️ License</h2>
</div>

Fireblocks Web Full Stack demo application is available under [MIT license](https://github.com/fireblocks/ncw-demo-dockerized/blob/main/LICENSE)