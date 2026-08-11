import React,{useEffect, useState} from 'react'
import SeafoodService from '../services/SeafoodService'
import { Link } from 'react-router-dom'

const ListSeafoodComponent = () => {
    const[seafoods, setSeafoods] = useState([])

    useEffect(() => {
        SeafoodService.getAllSeafoods().then((response) => {
            setSeafoods(response.data)
            console.log(response.data)
        }).catch(e => {
            console.log(e)
        })
    })

  return (
    <div className='container'>
        <h2 className='text-center'>Quan ly ghe</h2>
        <Link to="/add-seafood" className='btn btn-primary mb-2'>Thêm hải sản</Link>
        <table className='table table-bordered table-striped'>
            <tr>
                <th>Mã</th>
                <th>Tên hải sản</th>
                <th>Giá</th>
                <th>Địa chỉ</th>
            </tr>
            {
                seafoods.map(seafood => 
                    <tr key={seafood.id}>
                        <td>{seafood.id}</td>
                        <td>{seafood.name}</td>
                        <td>{seafood.price}</td>
                        <td>{seafood.address}</td>
                    </tr>
                )
            }

        </table>
    </div>
  )
}

export default ListSeafoodComponent