import {firebase, usersCollection} from '../../firebase';


export const registerUser= async ({email, password})=>{
    try{
        const response = await firebase.auth().createUserWithEmailAndPassword(email, password)
        const {user} = response;
        const userProfile = {
             uid: user.uid,
             email: email, 
        }
        
        console.log(JSON.stringify(usersCollection))
        await usersCollection.doc(user.uid).set(userProfile).then(()=>console.log('success'))
        
        return {isAuth: true, user: userProfile }
    }catch(error){
        return {error: error.message}
    }
}