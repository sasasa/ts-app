import { useContext, useEffect, memo, FC } from 'react'
import { Outlet } from 'react-router-dom';

export const About: FC = memo((props) => {
  console.log("Aboutコンポーネント")
  return (
    <>
      <h2>アバウト</h2>
      <Outlet />
    </>
  );
});