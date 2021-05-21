import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom'
import { About } from './component/About'
import { Users } from './component/Users'
import { Home } from './component/Home'
import { Navi } from './component/Navi'
import { Error } from './component/404'
import { Topics } from './component/Topics'

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            {/* <li>
              <Link to="/">Home</Link>
            </li> */}
            {/* <li> */}
            {/* <Link to="/about">About</Link> */}
            {/* パラメーターを受け渡す */}
            {/* <Link to="/about/1000">About</Link>
            </li> */}
            {/* <li>
              <Link to="/id/777">ID</Link>
            </li> */}
            {/* <li>
              <Link to="/users">Users</Link>
            </li> */}
            <Navi />
          </ul>
        </nav>
        <Switch>
          {/* コンポーネントの指定方法① */}
          {/* <Route path='/about'>
            <About />
          </Route> */}
          {/* 複数ルートを参照 */}
          {/* <Route path={['/about', '/mypage']}>
            <About />
          </Route>
          <Route path='/users'>
            <Users />
          </Route>
          <Route path='/'>
            <Home />
          </Route> */}
          {/* コンポーネントの指定方法② */}
          {/* <Route path='/about' component={About} exact></Route> */}
          {/* パスパラメーターを受け取る */}
          <Route path='/about/:aboutId' component={About} exact></Route>
          <Route path='/users' component={Users} exact></Route>
          {/* <Route path='/id/:id'><Id /></Route> */}
          {/* コンポーネント属性にしてやるとpropsとしてパラメーターを渡せる */}
          <Route path='/id/:id' component={Id} exact></Route>
          {/* 逃げの画面で完全一致（exact）をすると画面が真っ白になってしまう。 */}
          <Route path='/' component={Home} exact ></Route>
          <Route path='/topics' ><Topics /></Route>
          <Route component={Error}></Route>
        </Switch>
      </div>
    </Router>
  );
}

const Id = (props) => {
  console.log(props)
  console.log('IDコンポーネントが発火しました。')
  console.log(useParams())
  const { id } = useParams()
  return <h2>ID：{id}</h2>
}


export default App;
