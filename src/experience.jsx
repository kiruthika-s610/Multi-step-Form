import React from 'react'
import Select from 'react-dropdown-select';

const Experience = () => {
  const options = [
    {
      id: 1,
      name: 'Less than 1 year'
    },
    {
      id: 2,
      name: '1 to 2 years'
    },
    {
      id: 3,
      name: '2 to 3 years'
    },
    {
      id: 4,
      name: '3 to 5 years'
    },
    {
      id: 5,
      name: '5 to 8 years'
    },
    {
      id: 6,
      name: 'More than 8 years'
    }

  ];

  return (
    <div className='size' >
      <Select className='select'
        options={options}
        labelField="name"
        valueField="id"
        dropdownHeight={'150px'}
        placeholder="Select number of years from the list"
      />
    </div>

  )
}

export default Experience
