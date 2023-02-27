const ProductList = () => {
    const mobile = [{
        productId: 101,
        productName: "iPhone 14 pro max",
        productPrice: 150000
    },
    {
        productId: 102,
        productName: "Galaxy S23 ultra",
        productPrice: 130000
    },
    {
        productId: 103,
        productName: "Z flip 3",
        productPrice: 125000
    }
    ]
    return (
        <div>
            <h3>Mobile list</h3>
            {
                mobile.map(m =>
                    <div>
                        {m.productId} {m.productName} {m.productPrice}
                    </div>)
            }
        </div>
    )
}

export default ProductList;