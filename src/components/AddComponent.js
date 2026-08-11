import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import SeafoodService from '../services/SeafoodService'
import { Link } from 'react-router-dom'


const AddComponent = () => {
    const [name,setName] = useState('')
    const [price,setPrice] = useState('')
    const [address,setAddress] = useState('')

    const navigate = useNavigate()

    const saveSeafood = (e) => {
        e.preventDefault();
        const seafood = {name, price,address}
        SeafoodService.createSeafood(seafood).then((res) => {
            console.log(res.data)
            navigate('/seafoods')
        }).catch(e => {
            console.log(e)
        })
    }
  return (
    <div>
        <br></br>
        <div className='container'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <h2 className='text-center'>Thêm mới hải sản</h2>
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Tên hải sản:</label>
                                <input type="text" placeholder='' name="name" className='form-control' value={name} onChange={(e) => setName(e.target.value)}></input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Giá hải sản:</label>
                                <input type="text" placeholder='' name="name" className='form-control' value={price} onChange={(e) => setPrice(e.target.value)}></input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Địa chỉ:</label>
                                <input type="text" placeholder='' name="name" className='form-control' value={address} onChange={(e) => setAddress(e.target.value)}></input>
                            </div>
                            <button className='btn btn-success' onClick={(e) => saveSeafood(e)}>Thêm hải sản</button>
                        </form>

                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default AddComponent