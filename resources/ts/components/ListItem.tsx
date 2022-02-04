import { FC, memo } from 'react'
import type { User } from '../types/user'
import { HobbyBox } from './HobbyBox'
import styled from "styled-components";

const Sdiv = styled.div`
padding: 8px;
border: 1px solid #666;
border-radius: 4px;
background-color: #ccc;
margin: 8px;
`;

export const ListItem: FC<User> = memo((props) => {
    console.log("ListItemコンポーネント")
    const {id, name, age, color = "orange", hobbies } = props;

    return (
      <Sdiv style={{ color }}>
        {id}:{name}({age})
        <HobbyBox hobbies={hobbies} />
      </Sdiv>
    )
});