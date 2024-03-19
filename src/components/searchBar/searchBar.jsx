import React from 'react'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import './searchBar.scss'

export default function SearchBar(props) {
    return (
        <div className='search-feild-container flex-start-center ml-2 mr-2'>
            <SearchRoundedIcon className='search-feild-container__search-icon' />
            <input placeholder={props?.placeholder} className='search-feild-container__input' type="text" />
        </div>
    )
}
