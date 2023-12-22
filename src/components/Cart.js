import { Button, ButtonGroup, Container, Image, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { clear, deleteFromCart } from "../rtk/slices/cart-slice";


function Cart() {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const totalPrice = cart.reduce((acc, product) => {
        acc += product.price * product.quantity;
        return acc;
    }, 0)
    const handleRemoveButtonClick = (product) => {
        const senderName = "Hellow Sir";
        if (window.confirm("Are you sure you want to remove this item from the cart?")) {
            dispatch(deleteFromCart(product));
        }
    };
    return (
        <Container>
            <h1 className="py-5" style={{ textAlign: 'left', color: '#333', fontSize: '2em', fontFamily: 'Arial, sans-serif', marginTop: '10px' }}>
                Shopping Cart
            </h1>
            <Button variant="primary" className="mb-3 " onClick={() => dispatch(clear())}>Clear your Cart</Button>
            <Table bordered>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((product) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td><Image src={product.image} alt={product.title} style={{ width: "100px", height: "100px" }} /> </td>
                            <td>{product.price}$</td>
                            <td>{product.quantity}</td>
                            <td>
                                <Button variant="danger" onClick={() => handleRemoveButtonClick(product)}>Remove</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <h5>TotalPrice: {totalPrice.toFixed(2)}</h5>
            <Button variant="danger" >Pay</Button>
        </Container>
    )
}

export default Cart;