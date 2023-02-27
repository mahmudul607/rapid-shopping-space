
import * as firebase from 'firebase/app';
import "firebase/auth";

import { firebaseConfig } from './firebase.config';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useContext, useState } from 'react';
import { LoggedInUser } from '../../App';
firebase.initializeApp(firebaseConfig);

const LoggedIn = () => {
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    photo: '',
    
  })

  const [loggedInUser, setLoggedInUser] = useContext(LoggedInUser)


  const provider = new GoogleAuthProvider();
  const handleSignIn = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then(res => {
        const { displayName, email, photoURL } = res.user;
        const signedInUser = {
          isSignedIn: true,
          name: displayName,
          email: email,
          photo: photoURL
        }
        setUser(signedInUser)
      })
      .catch(err => {
        console.log(err);
        console.log(err.message);
      })
  }
  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      const signedOutUser = {
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: '',
        error: '',
        success: false
      }
      setUser(signedOutUser);

    })
      .catch(err => {
        console.log(err.message);
      })
  }
  const handleBlur = (e) => {
    let isFieldValid = true;
    if (e.target.name === 'email') {
      isFieldValid = /^\S+@\S+\.\S+$/.test(e.target.value);

    }
    if (e.target.name === 'password') {
      const isPasswordValid = e.target.value.length > 7;
      const isPasswordNumberValid = /\d/.test(e.target.value)
      isFieldValid = isPasswordValid && isPasswordNumberValid;
    }

    if (isFieldValid) {
      const newUserInfo = { ...user, }
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  }
  const handleSubmit = (e) => {
    // console.log(user.email, user.password);
    if(newUser && user.email && user.password){

const auth = getAuth();
createUserWithEmailAndPassword(auth, user.email, user.password)
  .then(res => {
    // Signed in 
    const newUserInfo = {...user};
    newUserInfo.error = '';
    newUserInfo.success = true;
    updateProfileInfo(user.name);
    setUser(newUserInfo);
    // ...
  })
  .catch(error => {
    const newUserInfo = {...user};
    newUserInfo.error = error.code;
    newUserInfo.success = false;
    setUser(newUserInfo);
    // ..
  });

    }
    if(!newUser && user.email && user.password){
      const auth = getAuth();
      signInWithEmailAndPassword(auth, user.email, user.password)
     .then(res => {
    // Signed in 
    const newUserInfo = {...user};
    newUserInfo.error = '';
    newUserInfo.success = true;
    setUser(newUserInfo);
    setLoggedInUser(newUserInfo);
    
    // ...
  })
  .catch(error => {
    const newUserInfo = {...user};
    newUserInfo.error = error.code;
    newUserInfo.success = false;
    setUser(newUserInfo);
  });


    }
    e.preventDefault();

  }

  const updateProfileInfo = name =>{

    const auth = getAuth();
    updateProfile(auth.currentUser, {
      displayName: name
    }).then(() => {
      // Profile updated!
      console.log('Profile Updated Successfully');
      // ...
    }).catch((error) => {
      // An error occurred
      console.log(error)
      // ...
    });


  }

  return (
    <div style={{textAlign:'center'}}>
      {
        user.isSignedIn ? <button onClick={handleSignOut}>Sign Out</button> :
          <button onClick={handleSignIn}>Sign in</button>
      }
      {

        user.isSignedIn && <div>
          <img src={user.photo} alt="" />
          <p>Welcome, {user.name}</p>
        </div>

      }

      <h1>Our own authentication</h1>
      <h4>Name: {user.displayName}</h4>
      <p>User: {user.email}</p>
      <p>User: {user.password}</p>
      <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" />
      <label htmlFor="newUser">New User Sign up</label>
      <form onSubmit={handleSubmit}>
       {newUser && <input type="text" name="" placeholder='Your Name'/>}
        <br/>
        <input type="text" onBlur={handleBlur} name='email' placeholder='Enter Your Email Address' required/>
        <br />
        <input type="password" onBlur={handleBlur} name='password' placeholder='Password' required/>
        <br />
        <input type="submit"  value={newUser ? 'Sign up' : 'Sign in'} />
      </form>
      <p style={{color:'red'}}>{user.error}</p>
      {
        user.success && <p style={{color:'green'}}>Successfully Account {newUser ? 'Created' : 'Logged In'}</p>
      }
    </div>
  );
}



export default LoggedIn;