import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { initializeApp } from 'firebase/app';

import { AppModule } from './app/app.module';

const firebaseConfig = {
  apiKey: "AIzaSyDf60cMH9w8f43JtTQzrMBIUe9414_MIlE",
  authDomain: "calories-calculator-17e34.firebaseapp.com",
  databaseURL: "https://calories-calculator-17e34-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "calories-calculator-17e34",
  storageBucket: "calories-calculator-17e34.appspot.com",
  messagingSenderId: "421065556259",
  appId: "1:421065556259:web:4cefe2c9304260d4f4cc96"
};

const app = initializeApp(firebaseConfig);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
