import { useContext, useEffect, memo, FC } from 'react'
import { Outlet } from 'react-router-dom';

export const Success: FC = memo((props) => {
  console.log("Successコンポーネント")
  return (
    <>
      <h2>ログインに成功しました！！</h2>
      <Outlet />
    </>
  );
});