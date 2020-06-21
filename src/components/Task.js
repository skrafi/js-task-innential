import React from 'react';
import list from '../constants/_typeList'

/*
  THE TASK - 
  
  1. CREATE CODE, THAT, WHEN RUN, WILL DISPLAY, AS A FUNCTIONAL REACT
  COMPONENT, THE SUMMED-UP COUNT OF ALL THE DIFFERENT TYPES OF CONTENT
  FROM THE _typeList.js FILE AS A LIST, LIKE THIS:

  E-Learning: XX, 
  Article: XX...

  THIS INCLUDES DATA RESHAPING OF THE ARRAY IN A WAY THAT SIMPLIFIES
  THE COMPONENT THE MOST (note: you only need 1 function call for this)

  2. ADD A COUNTER THAT GOES UP EVERYTIME YOU PRESS THE 'f' KEY, DISPLAYED
  IN A COMPONENT ON SCREEN.

  MAKE SURE THAT WHEN YOU GO BETWEEN THE ROUTES AND BACK, THAT
  THERE IS NO MEMORY LEAK IN THE APP

  NO EXTERNAL PACKAGES USED. EVERYTHING IS SOLVED WITH REGULAR JS AND REACT
*/

export default () => {
  // WRITE YOUR CODE HERE
  const [displayList, setDisplayList] = React.useState({});
  const [counter, setCounter] = React.useState(0);

  const keyListener = (keyCode) => (event) => {
    if(event.keyCode === keyCode){
      setCounter((prevCounter)=>prevCounter+1)
    }
  }

  React.useEffect(()=>{
    // process content list to display
    const value = list.reduce((acc ,elem)=>
      acc[elem.type] 
        ? {...acc, [elem.type]: acc[elem.type] + elem.count} 
        : {...acc, [elem.type]: elem.count}
    , {})
    setDisplayList(value);

    // add listener for f key
    const fListener = keyListener(70);
    document.addEventListener('keydown', fListener)
    return ()=>{
      document.removeEventListener('keydown', fListener)
    }
  }, [])


  
  return <div>
    {Object.keys(displayList).map(type => (
      <div className="content-type" key={type}>
        <div className="content-type__name">{type.toLowerCase()}:&nbsp;</div>
        {displayList[type]}
      </div>
    ))}
    <br/>
    <div>Special counter: {counter}</div>
  </div>
}