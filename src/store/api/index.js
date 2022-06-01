import {firebase, db} from '../../firebase';

import { doc, setDoc} from 'firebase/firestore/lite'

export const registerUser= async ({email, password})=>{
    try{
        const response = await firebase.auth().createUserWithEmailAndPassword(email, password)
        const {user} = response;
        const userProfile = {
             uid: user.uid,
             email: email, 
        }
        await setDoc(doc(db, 'users', user.uid),{
            uid: user.uid,
            email: email, 
        })

        return {isAuth: true, user: userProfile }
    }catch(error){
        return {error: error.message}
    }
}