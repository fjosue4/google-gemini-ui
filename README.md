
# Google Gemini Web Chat

Experience the new Google AI Model 'Gemini' on any device. 
This application is pure front-end, the API key and your name are stored in your browser and used to make requests, and all server connections are made directly to Google Servers.
[Test it online](https://google-gemini-ui.vercel.app/)

![Captura de pantalla 2024-01-24 a las 10 03 21](https://github.com/fjosue4/google-gemini-ui/assets/85136931/05d836b1-7fb1-4df4-8515-d5b7ebffd1a9)


## Changelog

- User now gets feedback if try to access without an API Key.
- User gets feedback if try to request with an invalid API Key.
- It's possible to clear the chat history saved on the browser.
- Light mode.
- A proxy can be passed for all API requests from Setup.
- Fix: Gemini now understands the Chat History.

![image](https://github.com/fjosue4/google-gemini-ui/assets/85136931/b4f15537-6e23-482f-9822-d9d4191dc320)

## ⚠️ Before this fix, every message was an independent prompt.

![image](https://github.com/fjosue4/google-gemini-ui/assets/85136931/ca32447d-aded-488d-866b-8f5db594e04b)
![image](https://github.com/fjosue4/google-gemini-ui/assets/85136931/122d3a93-1011-458d-b064-c650213fc209)


## Features requested:
- Easier way to setup API Key
- Greeting or empty state when chatlog is empty.

## Known issues/bugs:
- None reported yet.

## How to Run Locally:
- npm i
- npm start

## Deploy is ready for Vercel.

## Not using Vercel to deploy?
Check this [step-by-step guide](https://www.tssfl.com/viewtopic.php?t=6778) created by [@TSSFL](https://github.com/TSSFL)
