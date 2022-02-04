import { useContext, memo, FC } from 'react'
import type { User } from '../types/user'
import { AdminFlagContext } from './providers/AdminFlagProvider'

type Hobby = {
  hobbies?: string[];
}

export const HobbyBox: FC<Hobby> = memo((props) => {
    console.log("HobbyBoxコンポーネント")
    const {hobbies, } = props;
    const { isAdmin } = useContext(AdminFlagContext);

    return (
      <span>
        {hobbies?.join(' / ')}{isAdmin ? <span>管理者</span> : <span>管理者でない</span>}
      </span>
    )
});