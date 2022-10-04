import React from 'react'

function Child() {

    console.log('Child component rendered! ');

    const calcReport = () => {

        return <h1>Report</h1>
    }


    return (<>
        {calcReport()}
        <div>Child</div>
    </>

    )
}

export default React.memo(Child)