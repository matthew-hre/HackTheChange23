'use client'

import Calendar from 'react-calendar'; 
import { use, useState, useEffect } from 'react';

export default function CalendarClient() {


  const [value, onChange] = useState(new Date() as any); 


  useEffect(() => {
    console.log(value);
  }, [value]);

  
    return ( 
        <div className='calendar'> 
            <h1>NextJs Calendar - GeeksforGeeks</h1> 
            <Calendar 
                onChange={onChange}
                value={value} 
            /> 
        </div> 
    ); 

};
