import { useEffect,useState } from 'react'
import Loader from './components/loader'
import Home from './components/Home'

function App(){
    const [loading,setLoading] = useState(true)

    useEffect(() => {
      setTimeout(() =>{
        setLoading(false)
      },2000)
    },[])

    if (loading) {
      return <Loader />
    }

    return <Home />
}

export default App