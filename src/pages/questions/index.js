import React from 'react'

const Questions = () => {

    const questionLoad = () => {
        async function qLoad () {
            await fetch('https://opentdb.com/api.php?amount=10')
            
        }
    }
    
    return (
        <div>
            
        </div>
    )
}

export default Questions
