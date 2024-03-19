import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function LoginButton() {
    return (
        <div className='round-btn-container flex-start-center cur-pointer ml-2 mr-2'>
            <AccountCircleIcon className='round-btn-container__icon mr-1' />
            <h5 className='round-btn-container__title'>Log In</h5>
        </div>
    )
}