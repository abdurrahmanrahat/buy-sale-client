import getProductsByEmail from "../../../../hooks/getProductsByEmail";

const MyProducts = () => {
    const [products, isLoading] = getProductsByEmail();
    console.log(products);
    if(isLoading){
        return <h2>Loading...</h2>
    }
    return (
        <div>
            MyProducts: {products?.length}
        </div>
    );
};

export default MyProducts;