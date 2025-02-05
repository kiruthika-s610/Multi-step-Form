import React from 'react'
import Select from 'react-dropdown-select';


const JobInterest = () => {
  const options = [
    {
      id: 1,
      name: 'AR/VR'
    },
    {
      id: 2,
      name: 'Artificial Inteligence'
    },
    {
      id: 3,
      name: 'Back-end Developer'
    },
    {
      id: 4,
      name: 'Blockchain'
    },
    {
      id: 5,
      name: 'Data Engineer'
    },
    {
      id: 6,
      name: 'Data Science'
    }, {
      id: 7,
      name: 'Database Developer'
    }, {
      id: 8,
      name: 'DevOps'
    },
    {
      id: 9,
      name: 'Embedded Developer'
    }, {
      id: 10,
      name: 'Front-end Developer'
    },
    {
      id: 11,
      name: 'Game Developer'
    },
    {
      id: 12,
      name: 'IT Security'
    }

  ];

  return (
    <div className='reasonbox' >
      <Select className='select'
        options={options}
        labelField="name"
        valueField="id"
        dropdownHeight={'150px'}
        placeholder="select"
        style={{ width: '337px', marginBottom: 0, paddingBottom: 0 }}

      />
    </div>
  )
}

export default JobInterest
