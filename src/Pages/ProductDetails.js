import { useParams } from "react-router-dom"
const ProductDetails=(props)=>{
    const parms=useParams();

    return <h1>{parms.productID}</h1>
}
export default ProductDetails