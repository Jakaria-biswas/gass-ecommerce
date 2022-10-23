import { useState } from "react"

const useCart = () => {
       const [cartInfo, setCartInfo] = useState([])

       return [cartInfo, setCartInfo]
}
export default useCart;