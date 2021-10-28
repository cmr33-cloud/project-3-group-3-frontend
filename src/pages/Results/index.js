import React from 'react'
import { useSelector } from 'react-redux'

export default function Results() {
    const storeScore = useSelector(state => state.score)
    return (
        <div>
          Your score:  {storeScore}
        </div>
    )
}
