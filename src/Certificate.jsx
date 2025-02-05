import React from 'react'
import Select from 'react-dropdown-select';

const Certificate = () => {
    const options = [
        {
          id: 1,
          name: 'AWS Certified Data Analytics Speciality'
        },
        {
          id: 2,
          name: 'AWS Certified DataBase Speciality'
        },
        {
          id: 3,
          name: 'AWS Certified Developer Associate'
        },
        {
          id:4,
          name: 'AWS Certified DevOps Engineer professional'
        },
        {
          id:5,
          name: 'AWS Certified Solutions Architect Associate'
        },
        {
          id: 6,
          name: 'AWS Certified Solutions Architect Professional'
        },
        {
            id:7,
            name: 'AWS Certified SysOps Administrator Associate'
          },
          {
            id:8,
            name: 'Certified Ethical Hacker'
          },
          {
            id: 9,
            name: 'CompTIA Advanced Security Practitioner(CASP+)'
          },
          {
            id:10,
            name: 'CompTIA PenTest+'
          },
          {
            id: 11,
            name: 'GCP Associate Cloud Engineer'
          },
          {
            id: 12,
            name: 'GCP Professional Cloud Architect'
          },
          {
            id:13,
            name: 'GCP Professional Cloud Database Engineer'
          },
          {
            id: 14,
            name: 'GCP Professional Cloud DevOps Engineer'
          },
          {
            id: 15,
            name: 'GCP Professional Data Engineer'
          },
          {
            id: 16,
            name: 'Microsoft Azure Administrator Associate'
          },
          {
            id: 17,
            name: 'Microsoft Azure Data Engineer Associate'
          },
          {
            id: 18,
            name: 'Microsoft Azure Developer Associate'
          },
          {
            id: 19,
            name: 'Microsoft Azure DevOps Engineer Expert'
          },
          {
            id: 20,
            name: 'Microsoft Azure Solutions Architect Expert'
          },
          {
            id: 21,
            name: 'Offensive Security Certified Professional(OSCP)'
          },
          {
            id: 22,
            name: 'Performance Testing(CT-PT)'
          },
          {
            id: 23,
            name: 'Systems Security Certified Practitioner (SSCP)'
          },
          {
            id: 24,
            name: 'Test Automation Engineer (CT-TAE)'
          }              
      ];
      
      return(
        <div className='reasonbox' >
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

export default Certificate
