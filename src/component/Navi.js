import React from 'react'
import { useHistory } from 'react-router-dom'

export const Navi = (props) => {
  console.log('Naviが発火')
  const history = useHistory()
  console.log(history)
  const handleLink = path => history.push(path)
  console.log(handleLink)
  return (
    <nav>
      <button onClick={() => handleLink('/about/100')}>About</button>
      <button onClick={() => handleLink('/users')}>Users</button>
      <button onClick={() => handleLink('/topics')}>Topics</button>
      <button onClick={() => handleLink('/')}>Home</button>
    </nav>
  )
}
