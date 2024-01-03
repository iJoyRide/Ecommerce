interface IPrams {
    productId?: string;
}

const Product = ({params} : {params: IPrams}) => {
    console.groupCollapsed("params" , params);
    return <div>Product Page</div>
};
 
export default Product;