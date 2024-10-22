## Pertama ikutin
https://nextjs.org/docs/app/building-your-application/testing/jest#quickstart

## Kedua
Bikin test bebas apa aja, jangan lupa import 
import "@testing-library/jest-dom"; ke jest.setup.js

## ketiga
Jika menggunakan @tankstack/react-query maka harus setup mock providernya dulu

## Keempat
Setup msw yuk
pertama: buat folder mocks -> node.js sama handlers.js
kedua: masukin yang beforeAll, afterEach sama afterAll ke dalam jest.setup.js
ketiga: (kalau muncul tulisan 'TextEncoder is not defined') maka install jest-fixed-jsdom lalu masukin ke testEnvironment yang ada di jest.config.js
keempat: (kalau muncul tulisan 'Cannot find module 'msw/node' from 'src/mocks/node.js'') maka tambahkan 
    testEnvironmentOptions: {
        customExportConditions: [""],
    }, ke dalam jest.config.js