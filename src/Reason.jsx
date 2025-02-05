import React, { useState } from 'react'
import Select from "react-dropdown-select";

const Reason = () => {
  const options = [
    {
      id: 1,
      name: 'I want the freedom and flexibility of remote work.'
    },
    {
      id: 2,
      name: 'ErvinI want to officially be part of the top 3% of freelance talent.'
    },
    {
      id: 3,
      name: 'I need extra work or income opportunities.'
    },
    {
      id: 4,
      name: 'I saw online reviews, posts, or job listings that convinced me to apply.'
    },
    {
      id: 5,
      name: 'I aim to learn new technical skills and technologies.'
    },
    {
      id: 6,
      name: 'I was referred by a friend or colleague.'
    },
    {
      id: 7,
      name: 'I want a job where I can improve my English proficiency.'
    },
    {
      id: 8,
      name: "I am looking for higher quality or more diverse freelance jobs."
    },
    {
      id: 9,
      name: "Other"
    }
  ];

  return (
    <div className='size' >
      <Select className='select'
        options={options}
        labelField="name"
        valueField="id"
        dropdownHeight={'150px'}
      />
    </div>

  )
}

export default Reason
