import React, { useRef, useState } from 'react';
import './style.scss';


import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyA5iPkYigcQOsWI9zL0GGL7OwPr5cv1gBw",
    authDomain: "superchat-ff4a8.firebaseapp.com",
    databaseURL: "https://superchat-ff4a8.firebaseio.com",
    projectId: "superchat-ff4a8",
    storageBucket: "superchat-ff4a8.appspot.com",
    messagingSenderId: "227744905208",
    appId: "1:227744905208:web:07fdfe0c4b6781512fc80d",
    measurementId: "G-396BE5F9TP"

  })
}


const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">

      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}


function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return (
    <div class="login">
      <h2>Selecione um metodo de login</h2>
      <button className="auth__button google" onClick={signInWithGoogle}>Login com Google</button>
    </div>

  )
}

function ChatRoom() {
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy('createdAt', "desc").limit(25);

  const [messages] = useCollectionData(query, { idField: 'id' });
  const [formValue, setFormValue] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL, displayName } = auth.currentUser;
    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      displayName,
      photoURL
    })
    setFormValue('');
  }

  return (
    <div>
      <div className="feed">
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
      </div>
      <form onSubmit={sendMessage}>
        <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Diga alguma coisa!" />
        <button type="submit" disabled={!formValue}>💌</button>
      </form>
    </div>
  )

}

function SignOut() {
  return auth.currentUser && (
    <button onClick={() => auth.signOut()}>Desconectar</button>
  )
}
function ChatMessage(props) {
  const { text, uid, photoURL, displayName } = props.message;
  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
  return (


    <div className={`message ${messageClass}`}>
      <div className="row">
      <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
      <span>{displayName}</span>

      </div>
      <p>{text}</p>
    </div>


  )
}
export default App;
