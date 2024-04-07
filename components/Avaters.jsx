import React from 'react';
import Image from 'next/image';

function Avaters({ currentUser }) {
    return (
        <div className='relative'>
           <div className='relative inline-block rounded-full overflow-hidden h-9 w-9 md:h-11 md:w-11'>
                <Image
                    fill
                    src={currentUser?.image || "/Images/placeholder.png"}
                    sizes='(50vw, 50vh)'
                    alt="profile"
                />
           </div>
            <span className='absolute -top-1 -right-1 inline-block rounded-full bg-green-500 h-2 w-2 md:h-4 md:w-4'></span>
        </div>
    );
}

export default Avaters;