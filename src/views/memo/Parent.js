import { Button } from 'antd'
import React, { useState } from 'react'
import Child from './Child'

function Parent() {

    const [counter, setcounter] = useState(0);

    console.log('Parent component rendered!');

    return (<>
        <h1>{counter}</h1>
        <Button type='primary' onClick={() => setcounter(counter + 1)}>Increase</Button>

        <Child />
    </>
    )
}

export default Parent