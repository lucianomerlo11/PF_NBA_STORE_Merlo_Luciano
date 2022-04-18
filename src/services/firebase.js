import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB_Nt_O93WuVK9VDLCAzGgIP_Ph2QSMoAg",
  authDomain: "nbastorecoderhouse.firebaseapp.com",
  projectId: "nbastorecoderhouse",
  storageBucket: "nbastorecoderhouse.appspot.com",
  messagingSenderId: "1055594033847",
  appId: "1:1055594033847:web:08957fbdfa78b151499332"
};


const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app)