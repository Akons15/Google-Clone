import React,{useState} from 'react'
import {NavLink} from 'react-router-dom';

const links = [
    { url: '/search', text: '🔎 All' },
    { url: '/image', text: '📷 Images' },
    { url: '/news', text: '📃 News' },
    { url: '/videos', text: '🎥 Videos' },
]

const Links = () => {
    const [active, setActive] = useState(links[0].text)


  return (
    <div className="flex sm:justify-around justify-between items-center mt-4 ">
      {links.map(({url, text}, i) => (
          <NavLink key={i} to={url} className="m-2 mb-0 text-lg" 
          style={{borderBottom: text === active &&  '2px solid #3773f5', 
          paddingBottom: text === active && '4px', 
          fontWeight: text === active && '600'}} 
          onClick={() => setActive(text)}>
              {text}
          </NavLink>
      ))}
    </div>
  )
}

export default Links

