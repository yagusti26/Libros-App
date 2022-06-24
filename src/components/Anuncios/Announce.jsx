import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';

function Announce() {
    const[announceStyle, setAnnounceStyle] = useState('bg-[#5b21b6] font-bold text-white flex items-center justify-center')

    const handleCloseIcon = () => {
        setAnnounceStyle(announceStyle + " hidden" )
    }
  return (
    <div className={announceStyle}>
        <h2>¡No te pierdas los elegidos de la semana!</h2>
        <CloseIcon className='cursor-pointer' onClick={handleCloseIcon} />
    </div>
  )
}

export default Announce