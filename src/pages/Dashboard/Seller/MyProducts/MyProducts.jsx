import Loading from "../../../../components/Loading/Loading";
import getProductsByEmail from "../../../../hooks/getProductsByEmail";

const MyProducts = () => {
    const [products, isLoading] = getProductsByEmail();
    console.log(products);
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            MyProducts: {products?.length}
        </div>
    );
};

export default MyProducts;