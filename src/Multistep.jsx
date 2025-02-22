import React, { useState } from 'react'
import { Final, GettingStart, ProfessionalExp, ProfileSetup } from './Form';

const Multistep = () => {

  const [formdata, setFormdata] = useState({
    name: "",
    location: "",
    city: "",
    citizenship: "",
    EnglishProficiency: "",
    reason: "",
    yearsexp: "",
    jobinterest: "",
    yearsexp_skills: "",
    certificate: "",
    skills: [],
    jobtype: "",
    rate_dollar: "",
    linkedin: "",
    Github: "",
    photo:null,
    resume:null
  });
  const [data, setData] = useState({
    name: "",
    location: "",
    city: "",
    citizenship: "",
    EnglishProficiency: "",
    reason: "",
    yearsexp: "",
    jobinterest: "",
    yearsexp_skills: "",
    certificate: "",
    skills: [],
    jobtype: "",
    rate_dollar: "",
    linkedin: "",
    Github: "",
    photo:null,
    resume:null
  })
  const [error, seterror] = useState({
    name: "",
    location: "",
    city: "",
    citizenship: "",
    EnglishProficiency: "",
    reason: "",
    yearsexp: "",
    jobinterest: "",
    yearsexp_skills: "",
    certificate: "",
    skills: "",
    jobtype: "",
    rate_dollar: "",
    linkedin: "",
    Github: "",
    photo: "",
    resume: ""
  })
  const [step, setstep] = useState(1);
  const [dataList, setDataList] = useState([]);

  const handleInputData = input => e => {
    const { value } = e.target;
    setFormdata(prev => ({ ...prev, [input]: value }));
  }
  const renderSteps = () => {
    switch (step) {
      case 1: return <GettingStart formdata={formdata} setFormdata={setFormdata} error={error} seterror={seterror} nextstep={nextstep} handleInputData={handleInputData} />;
      case 2: return <ProfessionalExp formdata={formdata} setFormdata={setFormdata} error={error} seterror={seterror} nextstep={nextstep} handleInputData={handleInputData} />;
      case 3: return <ProfileSetup formdata={formdata} setFormdata={setFormdata} error={error} seterror={seterror} nextstep={nextstep} handleInputData={handleInputData} setDataList={setDataList}/>;
      case 4: return <Final dataList={dataList} />
      default:
        return null;
    }
  }

  const nextstep = () => {
    if (step <= 3) {
      setstep((step) => step + 1);
    }
  }
  return <div className='container'>
    <div className="progress_container">
      <div style={{ display: 'flex', gap: 10, fontSize: 11 }}>
        <div className={`${step >= 1 ? "circle active" : "circle"}`}>1</div>
        <div>Getting Started </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width={10} height={25}><path d="M3.4 81.7c-7.9 15.8-1.5 35 14.3 42.9L280.5 256 17.7 387.4C1.9 395.3-4.5 414.5 3.4 430.3s27.1 22.2 42.9 14.3l320-160c10.8-5.4 17.7-16.5 17.7-28.6s-6.8-23.2-17.7-28.6l-320-160c-15.8-7.9-35-1.5-42.9 14.3z" /></svg>
      <div style={{ display: 'flex', gap: 10, fontSize: 11 }}>
        <div className={`${step >= 2 ? "circle active" : "circle"}`}>2</div>
        <div>Professional Experience </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width={10} height={25}><path d="M3.4 81.7c-7.9 15.8-1.5 35 14.3 42.9L280.5 256 17.7 387.4C1.9 395.3-4.5 414.5 3.4 430.3s27.1 22.2 42.9 14.3l320-160c10.8-5.4 17.7-16.5 17.7-28.6s-6.8-23.2-17.7-28.6l-320-160c-15.8-7.9-35-1.5-42.9 14.3z" /></svg>
      <div style={{ display: 'flex', gap: 10, fontSize: 11 }}>
        <div className={`${step >= 3 ? "circle active" : "circle"}`}>3</div>
        <div>Profile Setup</div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width={10} height={25}><path d="M3.4 81.7c-7.9 15.8-1.5 35 14.3 42.9L280.5 256 17.7 387.4C1.9 395.3-4.5 414.5 3.4 430.3s27.1 22.2 42.9 14.3l320-160c10.8-5.4 17.7-16.5 17.7-28.6s-6.8-23.2-17.7-28.6l-320-160c-15.8-7.9-35-1.5-42.9 14.3z" /></svg>
      <div style={{ display: 'flex', gap: 10, fontSize: 11 }}>
        <div className={`${step >= 4 ? "circle active" : "circle"}`}>4</div>
        <div>Final</div>
      </div>
    </div>
    <hr></hr>
    <div className="content">
      {renderSteps()}
    </div>
  </div>
}
export default Multistep
