import React, { useRef, useState, useId } from 'react'
import { useSelector } from 'react-redux'

function Dashboard() {


  const [pColor, setpColor] = useState('')

  let state = useSelector(state => state.todoReducer);

  const inputRef = useRef();
  const id = useId();


  const changeColor = () => {

    inputRef.current.style.color = 'aqua'
    //setpColor('tomato')
    //document.getElementById('blog').style.color = 'tomato'

  }

  return (<>
    <h1>Todos Lenght: {state.length}</h1>

    <h2 id={id}>Ref Hook Sample</h2>

    <p id='blog' ref={inputRef} style={{ color: pColor }}>Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum porta. Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porttitor accumsan tincidunt. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Nulla porttitor accumsan tincidunt. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</p>


    <button onClick={() => changeColor()}>Change Color</button>

  </>)
}

export default Dashboard