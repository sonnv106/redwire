import { firebase, db } from "../../firebase";

import { doc, setDoc, getDoc, updateDoc, serverTimestamp } from "firebase/firestore/lite";
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
export const autoSignin = () =>
  new Promise((resolve, reject) => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
    
      if (user) {
        resolve({ isAuth: true, user: user.uid });
      } else {
        resolve({ isAuth: false, user: [] });
      }
    });
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
  });
  export const logoutUser =  () => {
    firebase.auth().signOut()
  };

  //update thong tin nguoi dung
  export const updateUserData =async (values, user)=>{
    try{
      
      const docRef = doc(db, "users", user);
      await updateDoc(docRef,{...values});
      const newUser = {
        ...user,
        ...values
      }
      
      return {user: newUser, error: null}
    }catch(error){
      return {user: user,error: error}
    }
  }