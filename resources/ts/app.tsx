import { useContext, useEffect, memo, FC } from 'react'
import ReactDOM from 'react-dom'
import { useFetchUsers } from './hooks/useFetchUsers'
import { useFetchPref } from './hooks/useFetchPref'
import { Home } from './components/Home'
import { About } from './components/About'
import { NoMatch } from './components/NoMatch'
import { Post } from './components/Post'
import { AdminFlagProvider, AdminFlagContext } from './components/providers/AdminFlagProvider'
import { Link, NavLink, BrowserRouter, Route, Routes, Navigate, useNavigate  } from 'react-router-dom';

const App: FC = memo((props) => {
    console.log("Appコンポーネント")
    const styleFunc = ({ isActive }: {isActive: boolean}) => (isActive ? { color: 'blue', fontWeight: 'bold' } : {})
    const navigate = useNavigate();
    return (
      <div>
        <h1>佐伯のアプリ</h1>
        <ul>
          <li>
            <NavLink
              style={styleFunc}
              to="/"
            >Home</NavLink>
          </li>
          <li>
            <NavLink
              style={styleFunc}
              to="/about"
            >About</NavLink>
          </li>
          <li>
            <button onClick={() => navigate('/about')}>About</button>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}>
            <Route path=":lat/:lng/:name" element={<Post />} />
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
    )
});

ReactDOM.render(
    <BrowserRouter>
      <AdminFlagProvider>
        <App />
      </AdminFlagProvider>
    </BrowserRouter>,

    document.getElementById('app')
)