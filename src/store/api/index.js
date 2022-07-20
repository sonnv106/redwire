import { firebase, db } from "../../firebase";

import {
  doc,
  setDoc,
  getDoc,
  updateDoc,
  serverTimestamp,
  collection,
  query,
  where,
  orderBy,
  limit,
  getDocs,
  DocumentSnapshot,
  startAfter,
} from "firebase/firestore/lite";
import { getAuth, onAuthStateChanged, onIdTokenChanged } from "firebase/auth";
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
export const logoutUser = () => {
  firebase.auth().signOut();
};

//update thong tin nguoi dung
export const updateUserData = async (values, user) => {
  try {
    const docRef = doc(db, "users", user);

    await updateDoc(docRef, values);
    const newUser = {
      ...user,
      ...values,
    };
    return { user: newUser, error: null };
  } catch (error) {
    return { user: user, error: error };
  }
};
export const getArticles = async () => {
  try {
    const articlesRef = collection(db, "articles");
    const q = query(
      articlesRef,
      where("public", "==", 1),
      orderBy("createdAt"),
      limit(4)
    );
    const querySnapshot = await getDocs(q);

    //bai viet cuoi cung
    const lastPostVisible = querySnapshot.docs[querySnapshot.docs.length - 1];

    let newArticles = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    
    return { posts: newArticles, lastPostVisible: lastPostVisible };
  } catch (error) {
    console.log(error);
  }
};
export const getMoreArticles = async (articles) => {
  let posts = [...articles.posts];

  const lastPostVisible = articles.lastPostVisible;
  try {
    if (lastPostVisible) {
      const articlesRef = collection(db, "articles");
      const q = query(
        articlesRef,
        where("public", "==", 1),
        orderBy("createdAt"),
        startAfter(lastPostVisible),
        limit(2)
      );
      const querySnapshot = await getDocs(q);
      lastPostVisible = querySnapshot.docs[querySnapshot.docs.length - 1]
      let newArticles = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
     
      return { posts: [...articles.posts, ...newArticles], lastPostVisible };
    }
  } catch (error) {
    alert(error);
    
    return { posts, lastPostVisible };
  }
};
