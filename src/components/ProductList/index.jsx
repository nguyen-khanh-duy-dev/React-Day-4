import withLoading from "../../hoc/withLoading"
import styles from "./ProductList.module.scss"

// ProductList Component - Không có logic để thực hiện logic trong withLoading
const ProductList = withLoading(() => {
    const products = [
        {
            productImage: "img-iphone-17.png",
            productName: "iPhone 17 Pro Max 256GB",
            price: "37.990.000đ",
        },
        {
            productImage: "img-iphone-air.png",
            productName: "iPhone Air 256GB",
            price: "31.990.000đ",
        },
    ]

    return (
        <div className={styles.container}>
            <h3>Products</h3>
            <div className={styles.products}>
                {products.map((product, index) => (
                    <div className={styles.product} key={index}>
                        <img src={product.productImage} />
                        <div className={styles.product_info}>
                            <h4>{product.productName}</h4>
                            <span>{product.price}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
})

export default ProductList
