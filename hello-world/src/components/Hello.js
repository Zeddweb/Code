import React from 'react'

const Hello = () => {

 //USING JSX:
//  return(
//     <div className='dummyClass'>
// <h1>Hello Zedd</h1>
//     </div>
//  )

// Without using JSX:
return React.createElement(
'div',
{id:'hello', className:'dummyClass'},
React.createElement('h1', null, 'Hello Zedd')
   )
}

export default Hello