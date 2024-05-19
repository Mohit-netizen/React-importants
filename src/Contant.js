import React from 'react'

const Contant = () => {
    const handlenamechange = () => {
        const names = ['bob', 'kevin' , 'dave']
        const int = Math.floor(Math.random() *3);
        return names[int];
     }
  return ( 
    <main>  
        <p>
           Hello {handlenamechange ()}!
        </p>
      
      
    </main>
  )
}

export default Contant
