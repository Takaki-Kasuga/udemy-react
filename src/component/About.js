import { useParams } from 'react-router-dom'

export const About = (props) => {
  console.log(useParams())
  console.log('Aboutコンポーネントが発火しました。')
  console.log(props)
  const { params } = props.match
  return <h2>About：{params.aboutId}</h2>
}