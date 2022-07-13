// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, getDoc, doc, query, where, collection } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALSmx80LMdc-tT6-ciUl9Z5reEKDktEF8",
  authDomain: "librosapp-99f2f.firebaseapp.com",
  projectId: "librosapp-99f2f",
  storageBucket: "librosapp-99f2f.appspot.com",
  messagingSenderId: "420771844074",
  appId: "1:420771844074:web:0ee230f2ef8cbeddaeec93"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const appFirestore = getFirestore(appFirebase);

export async function getItems(){
    const bookCollection = collection(appFirestore, "books");

    const booksSnapshot = await getDocs(bookCollection);

    let respuesta = booksSnapshot.docs.map( doc => {
        return {
            ...doc.data(),
            id: doc.id
        }
    });

    return respuesta;
}

/* traer los productos de una categoria */
export async function getProdCategory(idcategory) {
    const bookCollection = collection(appFirestore, "books");
    const q = query(bookCollection, where("category", "==", idcategory));
    const booksSnapshot = await getDocs(q);

    let respuesta = booksSnapshot.docs.map( doc => {
        return {
            ...doc.data(),
            id: doc.id
        }
    })
    return respuesta 
}

/* producto individual */
export async function getOneItem(productId){
    const docref = doc(appFirestore, "books", productId);

    const docSnapshot = await getDoc(docref);

    return { 
        id: docSnapshot.id,
        ...docSnapshot.data(),
    };
}


export default appFirestore