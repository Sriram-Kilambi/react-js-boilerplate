import React from 'react'
import { hot } from 'react-hot-loader/root'
import styles from './app.module'
import logo from './images/logo'


function App() {
  return  (
    <div className={styles.centerContent}>
        <div>
            <h2>Welcome to React JS Starter Kit</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam sed recusandae, vitae iure voluptatum, perferendis voluptas beatae fugiat perspiciatis esse exercitationem, suscipit libero accusantium facilis dolorem velit! Asperiores, reprehenderit perferendis.</p>
            <p>You can start by editing the app.js file in the src/ folder.</p>
        </div>
        <div>
            <img src={logo} alt="React-Logo"/>
        </div>
        <div>
            <h1>
                <a href="http://reactjs.org/">Check out the React JS Docs</a>
            </h1>
        </div>
    </div>
  )
}

export default hot(App)