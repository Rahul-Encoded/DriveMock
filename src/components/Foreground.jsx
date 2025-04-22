import React, {useRef, useState} from 'react';
import Card from './Card';

function Foreground() {

    const ref = useRef(null);

    const data = [
        {desc: "Lorem ipsum dolerx", 
         filesize: ".9mb", 
         closed: true, 
         tagDetails: {isOpen: true, 
                      tagTitle: "Download Now", 
                      tagColor: "green",}
        },
        {desc: "Lorem ipsum doler,", 
         filesize: ".9mb", 
         closed: false, 
         tagDetails: {isOpen: true, 
                      tagTitle: "Download Now", 
                      tagColor: "zinc",}
        },
        {desc: "Lorem ipsum doler,", 
         filesize: ".9mb", 
         closed: true, 
         tagDetails: {isOpen: false, 
                      tagTitle: "Download Now", 
                      tagColor: "green",}
        },
    ]
  return (
    <>
        <div ref = {ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap p-5'>
            {data.map((item, index) => (
                <Card data={item} reference = {ref}></Card>
            ))}
        </div>
    </>
  )
}

export default Foreground