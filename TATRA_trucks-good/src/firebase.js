import 'firebase/app'
import { initializeApp } from 'firebase/app'

import 'firebase/storage'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyD0r_ABlZyy9hP6oF1idzC0tYDLs0YyvB4",
    authDomain: "uploading-file-6d81d.firebaseapp.com",
    projectId: "uploading-file-6d81d",
    storageBucket: "uploading-file-6d81d.appspot.com",
    messagingSenderId: "157043503773",
    appId: "1:157043503773:web:1f7b609c710f13702d9a74"
};
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage;