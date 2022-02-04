import { useContext, useEffect, memo, FC } from 'react'

export const NoMatch: FC = memo((props) => {
  console.log("NoMatchコンポーネント")
  return <h2>このページは存在しません。</h2>
});