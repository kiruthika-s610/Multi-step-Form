import React from 'react'
import { useState } from 'react'
import Multiselect from 'multiselect-react-dropdown';

const Multioption = ({ formdata, setFormdata, error, seterror }) => {
  const options = ['java',
    'c++',
    'react',
    'git',
    'git hub',
    'HTML',
    'CSS',
    'Angular'];
  const [items, setItems] = useState([])
  const handle = (e) => {
    seterror({ ...error, skills: '' })
    setItems(e);
    setFormdata({ ...formdata, skills: items });
    if (items.length === 0) {
      seterror({ ...error, skills: 'Please complete this field' })
    }
    else if (items.length < 4) {
      seterror({ ...error, skills: 'Select atleast 4' })

    }
  }

  return (
    <Multiselect
      isObject={false}
      onKeyPressFn={function noRefCheck() { }}
      onRemove={(event) => { handle(event) }}
      onSearch={function noRefCheck() { }}
      onSelect={(event) => { handle(event) }}
      options={options}
      selectionLimit={6}
      placeholder="Start typing, then select a skill"
    />
  )
}

export default Multioption

