import React,{useState,useEffect }from 'react'



function VideoSearch({searchText}) {
    const onSubmit = (e) => {
        e.preventDefault();
        searchText(text);
      }

      const [text,setText] = useState('');
  return (
    <div className='max-w-sm rounded overflow-hidden my-10 mx-auto'>
    <form onSubmit={onSubmit} className="w-full max-w-sm">
      <div className="flex items-center border-b-2 border-[#4d7c62] py-2">
      <input onChange={e => setText(e.target.value)} className="appearance-none placeholder:text-[#ffffff91] bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Search Image Term..." />
      <button className="flex-shrink-0 bg-[#4d7c62] hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit">
    Search
    </button>  
    </div>
    </form>
      </div>
  )
}

export default VideoSearch