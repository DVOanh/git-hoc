import {useState, useEffect} from 'react';

function User(){
    const [data, setData] = useState([]);

    function fetchData(){
        fetch('http://localhost:3000/users')
        .then(res => res.json())
        .then(data => {
            setData(data)
        });
    }
    useEffect(() => {
        fetchData();
    }, []);

    return(
        <div style={{marginTop: '100px'}}>
        {
        data.map(item => (
            <div key={item.user_id} >
                <h1>{item.username}</h1>
            </div>
        ))}
        </div>
    )
}

export function FormInsertData(){
    const [username, setUsername] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({username: username})
        })
        .then(res => res.json())
        .then(data => {
            console.log('User added:', data);
            setUsername('');
        });
    }
    return(
        <form onSubmit={handleSubmit} style={{marginTop: '100px'}}>
            <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} placeHolder='Vui long nhap ten'/>
            <button type='submit'>Them user</button>
        </form>
    )
}

 export function OnProps({username}){
    return(
        <div>
            <h1>{username}</h1>
        </div>
    )
}
export default User;