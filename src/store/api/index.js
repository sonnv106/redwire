import { firebase, db } from "../../firebase";

import { doc, setDoc, getDoc } from "firebase/firestore/lite";
import { getAuth, onAuthStateChanged } from "firebase/auth";
export const registerUser = async ({ email, password }) => {
  try {
    const response = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    const { user } = response;
    const userProfile = {
      uid: user.uid,
      email: email,
    };
    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      email: email,
    });

    return { isAuth: true, user: userProfile };
  } catch (error) {
    return { error: error.message };
  }
};
export const loginUser = async ({ email, password }) => {
  try {
    const response = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    const docRef = doc(db, "users", response.user.uid);
    const userProfile = await getDoc(docRef);
    const data = userProfile.data();
    return { isAuth: true, user: data };
  } catch (error) {
    return { error: error.message };
  }
};
export const autoSignin = () =>(

   new Promise((resolve, reject) => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user)=>{
      console.log("user//"+JSON.stringify(user))
      if(user){
        resolve({isAuth: true, user: user.uid})
      }else{
        return { isAuth: false, user: []} 
      }
    })
    // firebase.auth().onAuthStateChanged( (user)=> {
    //   console.log("type of user "+user)
    //   if (user) {
    //     const docRef = doc(db, "users", user.uid)
    //     getDoc(docRef).then(snapshot=>{
    //       resolve({isAuth: true, user: snapshot.data()})
    //     })
    //   }else{
    //     return { isAuth: false, user: []}
    //   }
    // });
  }))
