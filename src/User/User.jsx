import React from 'react'
import './user.css'

export default function User() {
   // change to context
   const userName = 'avi nakash'

   return (
      <div className='user-page'>

         {/* TODO - exctract to new component = Header */}
         <header>
            {/* TODO - change user name in submit */}
            <form onSubmit={() => console.log('submit')}>
               <input type="text" name="userName" id="" placeholder='name' />
               <button type='submit'>send</button>
            </form>

            {/* TODO - if no user show message instead */}
            <div className="user-head">
               👤 {userName}
            </div>

         </header>

         {/* TODO - exctract to new component = Main */}
         <div className="container">
            {/* TODO - exctract to new component = Img */}
            <div className="img">
               <img src="https://picsum.photos/500/300" alt="" />
            </div>
            {/* TODO - exctract to new component = Content */}
            <div className="content">
               <h2>welcome {userName}</h2>
               <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, dolor.
               </p>
               <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sed nam quo facere magnam illum nulla rerum, ab fuga aliquid.               </p>
               <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, dolor.
               </p>
            </div>
         </div>

         {/* TODO - exctract to new component = Footer */}
         <footer>
            {/* TODO - on click delete the username */}
            <button onClick={() => console.log('logout')}>log out</button>
         </footer>
      </div>
   )
}
