import { createContext, useState, useContext, useEffect } from "react"
import Loader from '../components/Loader'
const GolbalContext = createContext()
const AuthContext = ({ children }) => {
    const [user, setUser] = useState(null)
    // const [isLoading, setIsLoading] = useState(true)
    // const [] = useState(null)
    useEffect(() => {

    }, [])
    return (
    <GolbalContext.Provider
      value={{
        name: "X media",
      }}>
      {children}
      {/* <Loader isLoading={isLoading}/> */}
    </GolbalContext.Provider>
  )
}
export default AuthContext
export const useApp = () => useContext(GolbalContext)
