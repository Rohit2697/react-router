import { Link } from 'react-router-dom'
const Product = () => {

    return (
        <>
            <ul>
                <li> <Link to={"/product/p1"}>Product1</Link></li>
                <li><Link to={"/product/p2"}>Product2</Link></li>
                <li> <Link to={"/product/p3"}>Product3</Link></li>
                <li><Link to={"/product/p4"}>Product4</Link></li>
            </ul>
        </>
    )

}
export default Product