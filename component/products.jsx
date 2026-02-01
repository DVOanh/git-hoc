import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

function ProductList() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/products')
            .then(res => res.json())
            .then(data => {
                setData(data)
            });
    }, []);
    return (
        <div className='dssanpham'>
    
            {
                data.map(item => (
                    <Link to={`/products/${item.id}`} key={item.id} style={{ textDecoration: 'none', color: 'black' }}>
                    
                        <img src={item.image_url} alt={item.name} width="100" />
                        <h1>{item.name}</h1>
                        <h3>{item.price}</h3>
                    
                    </Link>
                ))
            }
        </div>
    );
}

export function FormProduct(){
    const [product, setProduct] = useState('');
    const [price, setPrice] = useState(0);
    const [imageUrl, setImageUrl] = useState('');
    function btnThemsp(e){
        e.preventDefault();
        alert('Da click');
        fetch('http://localhost:3000/products', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(
                {
                    name: product,
                    price: price,
                    imageUrl: imageUrl
                }
            )
        })
        .then (res => res.json())
        .then(data => {
            console.log(data);
            setProduct('');
            setPrice(0);
            setImageUrl('');
        })
    }
    return (
        <form onSubmit={btnThemsp}>
            <input type='text' value={product} placeholder='Nhap ten san pham' onChange={(e)=>setProduct(e.target.value)}/>
            <input type='number' value={price} placeholder='Moi nhap gia sp' onChange={e=> setPrice(Number(e.target.value))}/>
            <input type='text' value={imageUrl} placeholder='Moi nhap anh sp' onChange={e=> setImageUrl(e.target.value)}/>
            <button type='submit'>Them san pham</button>
        </form>
    )
}

export default ProductList;