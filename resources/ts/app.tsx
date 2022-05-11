import { useState, useContext, useEffect, memo, FC } from 'react'
import ReactDOM from 'react-dom'
import { useFetchUsers } from './hooks/useFetchUsers'
import { useFetchPref } from './hooks/useFetchPref'
import { Home } from './components/Home'
import { About } from './components/About'
import { Success } from './components/Success'
import { LogoutSuccess } from './components/LogoutSuccess'
import { NoMatch } from './components/NoMatch'
import { Post } from './components/Post'
import { AdminFlagProvider, AdminFlagContext } from './components/providers/AdminFlagProvider'
import { Link, NavLink, BrowserRouter, Route, Routes, Navigate, useNavigate  } from 'react-router-dom';
import axios from 'axios'

const App: FC = memo((props) => {
    const [email, setEmail] = useState<string>('test1@google.com');
    const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => { setEmail(e.target.value) };
    const [password, setPassword] = useState<string>('password');
    const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => { setPassword(e.target.value) };
    const logout = () => {
        axios.post('/logout', {}, {
          withCredentials: true,
        }).then((res)=>{
            alert('POST /logout')
            console.log({logout: res.data})
            navigate('/logout_success')
        }).
        catch(() => alert('Error /login') ).
        finally(() => {})
    }
    const login = () => {
        // axios.get('/sanctum/csrf-cookie', {
        //   withCredentials: true,
        // }).then((res)=>{
        //     console.log({cookie: res.data})
        //     alert('GET /sanctum/csrf-cookie')
            axios.post('/login', {
                email,
                password,
            }, {
              withCredentials: true,
            }).then((res)=>{
                alert('POST /login')
                console.log({login: res.data})
                navigate('/success')
            }).
            catch(() => alert('Error /login') ).
            finally(() => {})
        // }).
        // catch(() => alert('Error /sanctum/csrf-cookie') ).
        // finally(() => {})
    }

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
            <button onClick={ () => navigate('/about') }>About</button>
          </li>
          <li>
            メール<input type="text" value={email} onChange={changeEmail}/><br/>
            パスワード<input type="password" value={password} onChange={changePassword}/>
            <button onClick={ login }>ログインボタン</button>
            <button onClick={ logout }>ログアウトボタン</button>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/success" element={<Success />}></Route>
          <Route path="/logout_success" element={<LogoutSuccess />}></Route>
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