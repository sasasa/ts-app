import { useContext, useEffect, memo, FC } from 'react'
import { useFetchUsers } from '../hooks/useFetchUsers'
import { useFetchPref } from '../hooks/useFetchPref'
import { ListItem } from './ListItem'
import { AdminFlagContext } from './providers/AdminFlagProvider'
import { NavLink } from 'react-router-dom';

export const Home: FC = memo((props) => {
    console.log("Appコンポーネント")
    const { users, fetchUsers, isLoading } = useFetchUsers();
    const { pref, fetchPref, isPrefLoading, fetchDistricts, districts, isDistrictLoading } = useFetchPref();
    const { isAdmin, setIsAdmin } = useContext(AdminFlagContext);
    const onClick = () => setIsAdmin(!isAdmin)
    useEffect(() => {
      fetchUsers()
      fetchPref()
    }, []);
    const onClickDistrict = (e: React.MouseEvent<HTMLLIElement, MouseEvent>, pref: string, district: string) => {
      fetchDistricts(pref, district)
    }
    const styleFunc = ({ isActive }: {isActive: boolean}) => (isActive ? { color: 'blue', fontWeight: 'bold' } : {})
    return (
      <div>
        <div>
          {isDistrictLoading ? (<p>データ取得中...</p>) : (
            <ul>
              {
                districts.map(district => {
                  return (
                    <li key={district.lat + ':' + district.lng}>
                      <NavLink
                        style={styleFunc}
                        to={`/about/${district.lat}/${district.lng}/${district.town}`}
                      >{district.town}:{district.koaza}:{district.lat}:{district.lng}
                      </NavLink>
                    </li>
                  )
                })
              }
            </ul>
          )}
        </div>
        <div>
        {isPrefLoading ? (<p>データ取得中...</p>) :
        (Object.keys(pref).map(key => {
          return (
            <div key={key}>
              <h2>{key}</h2>
              <ul>
              {pref[key].map((district)=>{
                return (
                  <li key={key + district} onClick={(e) => onClickDistrict(e, key, district)}>
                    {district}
                  </li>
                )
              })}
              </ul>
            </div>
          )
        }))
        }
        </div>
        <div>
          {isAdmin ? <span>管理者です</span> : <span>管理者ではない</span>}
        </div>
        <div>
          <button onClick={onClick}>管理者切り替え</button>
        </div>
        {isLoading ? (<p>データ取得中...</p>) :
        (users.map(user => (
          <ListItem 
            key={user.id}
            id={user.id}
            name={user.name}
            age={user.age}
            color={user.color}
            hobbies={user.hobbies} 
          />
        )))}
      </div>
    )
});