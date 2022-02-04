import { useContext, useEffect, memo, FC } from 'react'
import ReactDOM from 'react-dom'
import { useFetchUsers } from './hooks/useFetchUsers'
import { ListItem } from './components/ListItem'
import { AdminFlagProvider, AdminFlagContext } from './components/providers/AdminFlagProvider'

const App: FC = memo((props) => {
    console.log("Appコンポーネント")
    const { users, fetchUsers, } = useFetchUsers();
    const { isAdmin, setIsAdmin } = useContext(AdminFlagContext);
    const onClick = () => setIsAdmin(!isAdmin)
    useEffect(() => {
      fetchUsers()
    },
    []);
    return (
      <div>
        <div>
          {isAdmin ? <span>管理者です</span> : <span>管理者ではない</span>}
        </div>
        <div>
          <button onClick={onClick}>管理者切り替え</button>
        </div>
        {users.map(user => (
          <ListItem 
            key={user.id}
            id={user.id}
            name={user.name}
            age={user.age}
            color={user.color}
            hobbies={user.hobbies} 
          />
        ))}
      </div>
    )
});

ReactDOM.render(
    <AdminFlagProvider>
      <App />
    </AdminFlagProvider>,
    document.getElementById('app')
)