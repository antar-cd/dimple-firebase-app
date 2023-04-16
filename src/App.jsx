import { useState } from 'react'
import './App.css'
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from './firebase.config';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

function App() {

  const [user, setUser] = useState(null);


  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const loggeduser = result.user
        console.log(loggeduser)
        setUser(loggeduser)
      })
      .catch(error => {
        console.log(error)
      })
  }


  return (
    <div className="App">

      <h1>Firebase + React</h1>

      <button onClick={handleGoogleSignIn}>Google sign in</button>
      {user &&
        <div className="card">
          <h4>User:{user.displayName}</h4>

        </div>
      }
    </div>
  )
}

export default App
