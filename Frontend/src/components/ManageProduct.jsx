import React, {useState,useEffect} from 'react'

const ManageProduct = () => {
    const [Data, setData] = useState([])

    const fetchProductData = async () => {
        const res = await fetch('http://localhost:5000/product/getall',)
        console.log(res.status)
        if(res.status === 200){
            const data = await res.json()
            console.log(data)
            setData(data)
        }
    }
    useEffect(() => {
        fetchProductData()
    },[])  
    
    const deleteProduct = async (id) => {
        console.log(id);
        const res = await fetch("http://localhost:5000/product/delete/" + id,{
            method: "DELETE",
        });
        if (res.status ===200){
            fetchProductData();
        }
    }
    const displayProduct = () =>{
        return data.map((obj) =>(
            <tr>
                <td>{obj.name}</td>
                <td>{obj.category}</td>
                <td>{obj.price}</td>
                <td>{obj.description}</td>
                <td>
                    <button className='btn btn-danger'>Delete</button>
                </td>
                <td>
                    <button className='btn btn-danger'>Update</button>
                </td>
            </tr>
        ))
    }

  return (
    <div>
        <header className='bg-danger text-white text-center '>
            <div className="container py-5">
                <h1>Manage Product</h1>
            </div>
        </header>

        <div className="container mt-5">
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Price</th>
                        <th>Description</th>
                    </tr>
                </thead>

                <tbody>
                    {displayProduct}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ManageProduct