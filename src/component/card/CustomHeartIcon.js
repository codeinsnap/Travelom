import React, { useState } from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const CustomHeartIcon = () => {
    const [state, setState] = useState(false)
    return (
        <div className="hearticon">
            {state ?  <FavoriteIcon className='iconheart' onClick={() => setState(!state)} /> : <FavoriteBorderIcon className='iconheart' onClick={() => setState(!state)}/> }
        </div>
    )
}

export default CustomHeartIcon