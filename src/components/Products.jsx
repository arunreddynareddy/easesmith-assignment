import React, {useState} from 'react'
import data from "../data.json"
import { useNavigate } from 'react-router-dom'
import Modal from './Modal.jsx'
import plant from "../assets/plant.jpg"

function Products() {

    const [open, setOpen] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const recordsPerPage = 6;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = data.slice(firstIndex, lastIndex);
    const nPage = Math.ceil(data.length / recordsPerPage);
    const numbers = [...Array(nPage + 1).keys()].slice(1);

    const navigate = useNavigate()
    const handleProductView = (title) => {
        navigate(`thankyou/${title}`)
    }

    function prevPage() {
        if(currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    function changeCurrentPage(id) {
        setCurrentPage(id)
    }

    function nextPage() {
        if(currentPage !== nPage) {
            setCurrentPage(currentPage + 1)
        }
    }


  return (
    <div className='flex w-full flex-col bg-white px-5 py-2'>
        <h2 className='text-3xl font-bold text-lime-900 mb-2'>Products</h2>
        <ul className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  px-0 w-full'>
            {
                records.map((item) => {
                    return (
                        <li key={item.id} className='flex flex-col items-center mx-auto p-2 my-2 border border-solid rounded-md border-neutral-800 w-72'>
                            <img src={item.imageUrl} alt={item.title} className='h-52' />
                            <h3 className='text-xl font-bold text-zinc-900 self-start ml-6'>{item.title}</h3>
                            <p className='text-sm font-medium text-zinc-600 self-start ml-6'>{item.price}</p>
                            <div className='flex w-full justify-between items-center px-6'>
                            <button type="button" onClick={() => handleProductView(item.title)} className='bg-green-700 text-slate-50 text-xs font-medium px-5 py-1 my-2 rounded-2xl border-0'>View Product</button>
                            <button type="button" onClick={() => setOpen(true)} className='bg-green-700 text-slate-50 text-xs font-medium px-5 py-1 my-2 rounded-2xl border-0'>Add to Cart</button>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
        <ul className='flex flex-row justify-center items-center w-full my-5'>
            <li className='bg-emerald-300 text-xs font-medium text-gray-800 px-7 py-2 mr-2 rounded-md cursor-pointer hover:bg-emerald-500 transition duration-300'><a href='#' onClick={prevPage}>Prev</a></li>
            {
                numbers.map((n, i) => (
                    <li key={i} className={`bg-emerald-300 text-xs font-medium text-gray-800 px-3 py-2 mr-2 rounded-md cursor-pointer ${currentPage === n ? "bg-emerald-500" : ""}`}>
                            <a href="#" onClick={() => changeCurrentPage(n)}>{n}</a>
                    </li>
                ))
            }
            <li className='bg-emerald-300 text-xs font-medium text-gray-800 px-7 py-2 rounded-md cursor-pointer hover:bg-emerald-500 transition duration-300'><a href='#' onClick={nextPage}>Next</a></li>
        </ul>
        <Modal open={open} onClose={() => setOpen(false)}>
                <div className='flex flex-col items-center text-center w-84'>
                    <h2 className='text-base text-lime-800'>Your Cart</h2>
                    <p className='text-2xl font-semibold text-green-400 mt-3'>Congratulations</p>
                    <p className='text-2xl font-semibold text-green-400'>Order Placed!</p>
                    <img src={plant} alt="plant" className='my-6' />
                    <p className='text-sm text-green-400'>Thank you for choosing Chaperone services.
                    We will soon get in touch with you!</p>
                    <button className='bg-emerald-800 text-white text-sm font-semibold px-12 py-2 my-4'>Confirm</button>
                </div>
        </Modal>
    </div>
  )
}

export default Products
