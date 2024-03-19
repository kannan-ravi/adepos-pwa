import React from 'react'
import LocalMallIcon from '@mui/icons-material/LocalMall';

export default function CartButton() {
    return (
        <div className='round-btn-container flex-start-center cur-pointer'>
            <LocalMallIcon className='round-btn-container__icon mr-1' />
            <h5 className='round-btn-container__title'>Shop</h5>
        </div>
    )
}
