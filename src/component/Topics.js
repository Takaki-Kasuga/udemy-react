import { Switch, Route, Link, useRouteMatch } from 'react-router-dom'

export const Topics = () => {
  console.log('Topicsが発火')
  const match = useRouteMatch()
  console.log(match)
  return (
    <div>
      <h2>中項目項目（ネスト項目）</h2>
      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v.State</Link>
        </li>
      </ul>

      <Switch>
        <Route path={`${match.url}/components`}>
          {console.log('処理が走ります')}
          <h3>Components</h3>
        </Route>
        <Route path={`${match.url}/props-v-state`}>
          <h3>Props v.State</h3>
        </Route>
      </Switch>
    </div>
  )
}