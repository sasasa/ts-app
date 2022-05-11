import { useContext, useEffect, memo, FC } from 'react'
import { Outlet } from 'react-router-dom';

export const LogoutSuccess: FC = memo((props) => {
  console.log("LogoutSuccessコンポーネント")
  return (
    <>
      <h2>ログアウトしました！！</h2>
      <Outlet />
    </>
  );
});