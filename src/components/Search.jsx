import React, {useState, useEffect} from 'react';
import { useDebounce } from 'use-debounce';
import {useResultContext} from '../contexts/ResultContextProvider';
import Links from './Links';
import {useNavigate} from 'react-router-dom';
import {AiOutlineClose} from 'react-icons/ai';

const Search = () => {
  const [text, setText] = useState('');
  const {setSearchTerm} = useResultContext();
  const [debouncedValue] = useDebounce(text, 300);
  const navigate = useNavigate()


  useEffect(() => {
    if(debouncedValue) setSearchTerm(debouncedValue)
  }, [debouncedValue])


  const onHandleEvent = event => {
    if(event.key === 'Enter') {
     navigate('/search')
    }
  }

  return (
    <div className='relative sm:ml-48 md:ml-64 sm:-mt-10 mt-3'>
     <input
     style={{fontSize:'1rem', fontWeight: '500'}}
     value={text}
     type='text'
     className="w-96 h-10 dark:bg-gray-200 bg-gray-200 border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg"
     placeholder='Search'
     onChange={e => setText(e.target.value)}
     onKeyDown={onHandleEvent}
     />
     {text && (
       <button type='button'
       className="absolute flex top-5 right-4 sm:ml-48 text-2xl text-gray-500"
       onClick={() => setText('')}>
        <AiOutlineClose style={{fontSize: '1rem'} } />
       </button>
     )}
     <Links />
    </div>
  )
}

export default Search
