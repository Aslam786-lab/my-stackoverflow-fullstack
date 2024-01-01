import React, { useRef } from 'react'
import { SearchIcon, StackOverFlowIcon } from '../icon/Icon'

export default function Header({ onSearch }) {
  const inputRef = useRef();
  const handleSearch = () => {
    const searchTerm = inputRef.current.value.toLowerCase().trim();
    onSearch(searchTerm);
  }

  const onKeyDown = (event) => {
    if(event.key === 'Enter') {
      handleSearch();
    }
  }

  return (
    <div className='forum-header'>
         <a href='/' className='flex items-center'>
          <StackOverFlowIcon />
        </a>
        <div className='search-bar'>
            <div className='relative'>
                <input type='text' placeholder='Search' className='search-input' style={{width: '300px'}} onKeyDown={onKeyDown} ref={inputRef}/>
                <div className='search-icon' onClick={handleSearch}>
                  <SearchIcon />
                </div>
            </div>
        </div>
    </div>
  )
}
