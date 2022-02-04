import { createContext, useState, FC } from "react"

export const AdminFlagContext = createContext({} as {
  isAdmin: boolean
  setIsAdmin: React.Dispatch<React.SetStateAction<boolean>>
});

export const AdminFlagProvider: FC = (props) => {
  const { children } = props
  const [isAdmin, setIsAdmin] = useState<boolean>(true)
  return (
    <AdminFlagContext.Provider value={{ isAdmin, setIsAdmin }}>
      {children}
    </AdminFlagContext.Provider>
  )
}