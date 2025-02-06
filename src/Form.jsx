import { MdUploadFile } from "react-icons/md";
import { IoAlertCircleOutline } from "react-icons/io5";
import { useState } from "react";
import { MdDone } from "react-icons/md";
import Multioption from "./Multioption";
import Drop from './drop';
import Reason from "./Reason";
import Experience from "./experience";
import JobInterest from "./JobInterest";
import Certificate from "./Certificate";
import validator from 'validator';
import Table from "./Table";
import axios from 'axios';



export function GettingStart({ formdata, setFormdata, error, seterror, nextstep, handleInputData }) {
    const [testing, setTesting] = useState(false)

    let citiz = '';
    citiz = formdata.citizenship;
    const [err, setErr] = useState(false);
    const submitFormData = (e) => {
        e.preventDefault();
        if (
            validator.isEmpty(formdata.name) ||
            validator.isEmpty(formdata.location) ||
            validator.isEmpty(formdata.city) ||
            validator.isEmpty(formdata.citizenship) ||
            validator.isEmpty(formdata.EnglishProficiency) ||
            validator.isEmpty(formdata.reason)) { setErr(true) }
        else {
            nextstep();
        }
    }
    const Handlename = (e) => {
        setTesting(false)
        seterror({ ...error, name: '' });
        handleInputData("name");
        let err = '';
        setFormdata({ ...formdata, name: e.target.value })
        const regex = /(.*)([A-Za-z ,.'-]){2} ([A-Za-z ,.'-]){2}/
        const testname = regex.test(e.target.value);
        if (testname) {
            setTesting(true)
        } else if (!e.target.value) {
            err = "Please complete this field"
        } else { err = "Please enter your full legal name as it would appear on a passport, e.g. John Doe." }
        seterror({ ...error, name: err });
    }
    const handlelocation = (e) => {
        seterror({ ...error, location: '' });
        let err = '';
        setFormdata({ ...formdata, location: e.target.ariaLabel })
        if (!e.target.ariaLabel) {
            err = "Please complete this field "
            seterror({ ...error, location: err });
        }
    }
    const handlecity = (e) => {
        seterror({ ...error, city: '' });
        let err = '';
        setFormdata({ ...formdata, city: e.target.value })
        if (!e.target.value) {
            err = "Please complete this field "
            seterror({ ...error, city: err });
        }
    }
    const handlecitizen = (e) => {
        seterror({ ...error, citizenship: '' });
        let err = '';
        setFormdata({ ...formdata, citizenship: e.target.ariaLabel })
        if (!e.target.ariaLabel) {
            err = "Please complete this field "
            seterror({ ...error, citizenship: err });
        }
    }
    const handleradio = (e) => {
        setFormdata({ ...formdata, EnglishProficiency: e.target.value })
    }
    const handlereason = (e) => {
        let err = '';
        seterror({ ...error, reason: '' });
        setFormdata({ ...formdata, reason: e.target.ariaLabel })
        if (!e.target.ariaLabel) {
            err = "Please complete this field "
            seterror({ ...error, reason: err });
        }
    }
    return <div className="form-container">
        <form onSubmit={submitFormData}>
            <div style={{ marginLeft: '10px' }}>
                <div className="heading">Welcome to Toptal. Let’s get started!
                </div>
                <div style={{ fontSize: "0.9rem" }}>
                    Your application should only take a few minutes. Based on the information you provide, our screening team will determine the best path for you going forward.
                </div>
            </div>

            <div className="form">
                <div className="inputdetail" style={{ marginBottom: '25px' }}>
                    <label htmlFor="name" >Full Legal Name</label>
                    <span style={{ gap: 0 }}>
                        <input type="text" id="name" value={formdata.name} placeholder="e.g., Jane Smith" onChange={Handlename} required />
                        {testing &&
                            <span > <MdDone size={20} fill="lightgreen" />
                            </span>}
                    </span>
                    <span style={{ marginTop: '5px' }} className={`${!err ? "errmsg" : 'hidemsg'}`} > {error.name}
                    </span>
                    {(err && (!formdata.name)) && (<span style={{ marginTop: '5px' }} className="errmsg"> "Please complete this field "
                    </span>)}

                </div>
                <div className="inputdetail" style={{ marginBottom: '20px' }}>
                    <span style={{ display: 'flex', flexFlow: 'row' }}>
                        <span style={{ display: 'flex', flexFlow: 'column' }}>
                            <label htmlFor="location" onClick={handlelocation}>
                                Location
                                <Drop /></label>
                            <span style={{ marginTop: '5px' }} className={`${!err ? "errmsg" : 'hidemsg'}`} > {error.location}
                            </span>
                            {(err && (!formdata.location)) && (<span style={{ marginTop: '5px' }} className="errmsg"> "Please complete this field "
                            </span>)}
                        </span> <span className="city">
                            <label htmlFor="city"> city <br />
                                <input style={{ width: '200px' }} type="text" name="city" id="city" placeholder="City" value={formdata.city} onChange={handlecity} />
                            </label>
                            <div>
                                <span style={{ marginTop: '5px' }} className={`${!err ? "errmsg" : 'hidemsg'}`} > {error.city}
                                </span>
                                {(err && (!formdata.city)) && (<span style={{ marginTop: '5px' }} className="errmsg"> "Please complete this field "
                                </span>)}
                            </div>
                        </span>
                    </span>

                </div>
                <div className="inputdetail" style={{ marginTop: 0, marginBottom: '20px' }}>
                    <span style={{ display: "flex" }}>
                        <label htmlFor="citizenship" onClick={handlecitizen}>Citizenship
                            <Drop /></label> <span className="city" style={{ width: 100, height: 60 }}></span></span>
                    <span style={{ marginTop: '5px' }} className={`${!err ? "errmsg" : 'hidemsg'}`} > {error.citizenship}
                    </span>
                    {(err && (!formdata.citizenship)) && (<span style={{ marginTop: '5px' }} className="errmsg"> "Please complete this field "
                    </span>)}

                </div>
                <div className="radioitems" style={{ marginTop: '0px', marginBottom: '20px' }}>
                    <div style={{ marginBottom: '7px' }}>English Proficiency</div>
                    <div>
                        <input type="radio" name="English Proficiency" value="Native/Fluent" id="Native/Fluent" onClick={handleradio} required />
                        <label htmlFor="Native/Fluent">Native/Fluent</label>
                    </div>
                    <div>
                        <input type="radio" name="English Proficiency" value="Advanced" id="Advanced" onClick={handleradio} required />
                        <label htmlFor="Advanced">Advanced</label>
                    </div>
                    <div>
                        <input type="radio" name="English Proficiency" value="Intermediate" id="Intermediate" onClick={handleradio} required />
                        <label htmlFor="Intermediate">Intermediate</label>
                    </div>
                    <div>
                        <input type="radio" name="English Proficiency" value="Basic" id="Basic" onClick={handleradio} required />
                        <label htmlFor="Basic">Basic</label>
                    </div>
                </div>
                <div className="inputdetail " style={{ marginBottom: '10px' }}>
                    What’s the main reason you’re applying for this Job?
                    <label htmlFor="reason" onClick={handlereason}><Reason />
                    </label>
                    <span style={{ marginTop: '5px' }} className={`${!err ? "errmsg" : 'hidemsg'}`} > {error.reason}
                    </span>
                    {(err && (!formdata.reason)) && (<span style={{ marginTop: '5px' }} className="errmsg"> "Please complete this field "
                    </span>)}
                </div>
                <div className="lastmsg" style={{ display: 'flex', paddingBottom: '50px', marginBottom: 50 }}>
                    <button className="bttn" type="submit" style={{ border: 'none', width: 90, height: 30, marginRight: 10, marginBottom: 10 }}>continue</button>
                    <span style={{ display: "flex", fontSize: "0.7rem", flexFlow: "column", paddingTop: 0 }}>
                        <span style={{ color: "green" }} >33% complete</span>
                        <span>
                            You’re on your way to becoming part of the largest fully distributed workforce in the world!
                        </span>
                    </span>
                </div>
            </div>
        </form>
    </div>
}
export function ProfessionalExp({ formdata, setFormdata, error, seterror, nextstep, }) {
    const [err, setErr] = useState(false);
    const submitFormData = (e) => {
        e.preventDefault();
        if (
            validator.isEmpty(formdata.yearsexp) ||
            validator.isEmpty(formdata.jobinterest) ||
            validator.isEmpty(formdata.yearsexp_skills) ||
            validator.isEmpty(formdata.jobtype) ||
            validator.isEmpty(formdata.rate_dollar)
            || formdata.skills.length < 4) {
            setErr(true);
        }
        else {
            nextstep();
        }
    }
    const handleexp = (e) => {
        seterror({ ...error, yearsexp: '' });
        let err = '';
        setFormdata({ ...formdata, yearsexp: e.target.ariaLabel })
        if (!e.target.ariaLabel) {
            err = "Please complete this field "
            seterror({ ...error, yearsexp: err });
        }
    }
    const handlejobinterest = (e) => {
        seterror({ ...error, jobinterest: '' })
        let err = '';
        setFormdata({ ...formdata, jobinterest: e.target.ariaLabel })
        if (!e.target.ariaLabel) {
            err = "Please complete this field";
            seterror({ ...error, jobinterest: err })
        }
    }
    const handleskillexp = (e) => {
        seterror({ ...error, yearsexp_skills: '' })
        setFormdata({ ...formdata, yearsexp_skills: e.target.value })
        let err = '';
        const regex = /\b([0-9]|[12][0-9]|3[0-9])\b/
        const test = regex.test(e.target.value);
        if (!e.target.value) {
            err = "Please complete this field";
            seterror();
            seterror({ ...error, yearsexp_skills: err })
        } else if (!test) {
            err = "invalid";
            seterror({ ...error, yearsexp_skills: err })
        }
    }
    const handleratedollar = (e) => {
        seterror({ ...error, rate_dollar: '' })
        let err = '';
        setFormdata({ ...formdata, rate_dollar: e.target.value })
        const regex = /^\d*\.?\d+$/
        const test = regex.test(e.target.value);

        if (!formdata.rate_dollar) {
            err = "Please complete this field";
            seterror({ ...error, rate_dollar: err })
        } else if (!test) {
            err = "invalid";
            seterror({ ...error, rate_dollar: err })
        }
    }

    return <div style={{ width: '90%' }} className="form-container ">
        <div style={{ padding: "40px 10px 0px 10px", fontSize: '1.5rem', fontWeight: 400 }}>
            Tell us about your Professional experience

        </div>
        <form onSubmit={submitFormData}>
            <div className="form">
                <div className="expindex" style={{ width: '100%', marginBottom: '30px' }}>
                    <label htmlFor="exp" onClick={handleexp} >
                        How many years of professional experience in your field overall?
                        <br />
                        <Experience />
                    </label>
                </div>
                <span style={{ marginTop: '5px' }} className={`${!err ? "errmsg" : 'hidemsg'}`} > {error.yearsexp}
                </span>
                {(err && (!formdata.yearsexp)) && (<span style={{ marginTop: '5px' }} className="errmsg"> "Please complete this field "
                </span>)}
                < div style={{ display: "flex", width: '100%' }}>
                    <div className="labelinput" >
                        <label htmlFor="jobinterest" onClick={handlejobinterest} >
                            Primary Job Interest
                            <JobInterest /></label>
                        <span style={{ fontSize: '0.7rem', marginTop: 0, padding: 0 }}>
                            Your skills will be assessed based on the job interest you select.
                        </span>
                        <span style={{ marginTop: '5px' }} className={`${!err ? "errmsg" : 'hidemsg'}`} > {error.jobinterest}
                        </span>
                        {(err && (!formdata.jobinterest)) && (<span style={{ marginTop: '5px' }} className="errmsg"> "Please complete this field "
                        </span>)}


                    </div>
                    <div className="labelinput city " style={{ width: '50%' }}>
                        <label htmlFor="jobexp">
                            Years of experence in primary Job interest
                        </label>
                        <input style={{ width: '180px' }} type="text" id="jobexp" placeholder="Enter a number" value={formdata.yearsexp_skills} onChange={handleskillexp} required />
                        <div className="errmsg">
                            <span style={{ marginTop: '5px' }} className={`${!err ? "errmsg" : 'hidemsg'}`} > {error.yearsexp_skills}
                            </span>
                            {(err && (!formdata.yearsexp_skills)) && (<span style={{ marginTop: '5px' }} className="errmsg"> "Please complete this field "
                            </span>)}
                        </div>
                    </div>

                </div>
                < div className="labelinput" style={{ width: '45%', marginTop: '0px', marginBottom: '30px' }}>
                    <label htmlFor="certificate" onClick={(e) => setFormdata({ ...formdata, certificate: e.target.ariaLabel })} >
                        Certifications (optional)  <IoAlertCircleOutline style={{ paddingTop: 5, marginTop: 10, fontSize: '20px' }} />
                        <span style={{ display: "flex" }}><Certificate />  <span className="city" style={{ marginTop: 10, marginLeft: 17, width: 20, height: 20 }}></span>  </span>
                        <p style={{ fontSize: '0.7rem', width: '95%' }}>
                            Note that you might be asked for the certification IDs later in the screening
                            process. so please have them readily available (either in digital or print format).
                        </p>
                    </label>

                </div>
                <div className="labelinput" style={{ width: '50%', marginBottom: '30px' }}>
                    <label htmlFor="skill" >Skills (4 to 6 skills)
                    </label>
                    <span className="multselect">
                        <Multioption formdata={formdata} setFormdata={setFormdata} error={error} seterror={seterror} />
                    </span>
                    <span style={{ marginTop: '5px' }} className={`${!err ? "errmsg" : 'hidemsg'}`} > {error.skills}
                    </span>
                    <span>
                        {(err && (formdata.skills.length < 4)) && (<span style={{ marginTop: '5px' }} className="errmsg"> "Please Slelect atleast 4"
                        </span>)}
                    </span>
                </div>
                <div className="radioitems" >
                    <div style={{ marginBottom: '10px' }} >Which type of job commitment do you prefer?</div>
                    <div className="inputtype" >
                        <input type="radio" name="typeofjob" id="fulltime" value="fulltime" onChange={(e) => setFormdata({ ...formdata, jobtype: e.target.value })} required />
                        <label htmlFor="fulltime">
                            <b>Full Time</b> (40 hours/week)
                        </label>
                    </div>
                    <div><input type="radio" name="typeofjob" id="parttime" value="parttime" onChange={(e) => setFormdata({ ...formdata, jobtype: e.target.value })} required />
                        <label htmlFor="parttime">
                            Part Time (20 hours/week)
                        </label>
                    </div>
                    <div><input type="radio" name="typeofjob" id="hourly" value="hourly" onChange={(e) => setFormdata({ ...formdata, jobtype: e.target.value })} required />
                        <label htmlFor="hourly">
                            Hourly (Upto 10 hours/week)
                        </label>
                    </div>


                </div>
                <div className="labelinput" style={{ marginBottom: '25px' }}>
                    <span><span>
                        What's your preferred hourly rate in U.S dollars?
                    </span>
                        <IoAlertCircleOutline style={{ paddingTop: 5, marginTop: 5, fontSize: '20px' }} /> </span>
                    <input style={{ width: '20%' }} type="text" value={formdata.rate_dollar} placeholder="$ Enter amount" onChange={handleratedollar} required />
                    <span style={{ marginTop: '5px' }} className={`${!err ? "errmsg" : 'hidemsg'}`} > {error.rate_dollar}
                    </span>
                    {(err && (!formdata.rate_dollar)) && (<span style={{ marginTop: '5px' }} className="errmsg"> "Please complete this field "
                    </span>)}
                </div>
                <div className="labelinput" style={{ marginBottom: '25px' }}>
                    <span>
                        LinkedIn (optional)
                    </span>
                    <span>
                        <input type="text" placeholder="Your LinkedIn profile URL" value={formdata.linkedin} onChange={(e) => setFormdata({ ...formdata, linkedin: e.target.value })} />

                    </span>
                </div>
                <div className="labelinput" style={{ marginBottom: '45px' }}>
                    <span>
                        GitHub (optional)
                    </span>
                    <input type="text" placeholder="Your GitHub profile URL" value={formdata.Github} onChange={(e) => setFormdata({ ...formdata, Github: e.target.value })} />
                </div>
                <div className="lastmsg" >
                    <span style={{ display: "flex", paddingTop: 5 }} >
                        <button className="bttn" style={{ border: 'none', height: 40, width: 80, fontSize: '0.9rem', marginRight: 20, marginBottom: 50 }} type="submit">continue</button>
                        <span>
                            <span style={{ fontSize: "0.7rem", color: "green", flexFlow: "column", }}>
                                66% complete </span><br />
                            <span style={{ fontSize: "0.75rem" }}>You're one step closer to unlocking access to working with the world's top companies
                            </span>

                        </span>
                    </span>

                </div>

            </div>
        </form>
    </div>
}
export function ProfileSetup({ formdata, setFormdata, nextstep, error, seterror }) {
    const [msg, setmsg] = useState('');

    const handleimage = (e) => {
        seterror({ ...error, photo: '' })
        setFormdata({ ...formdata, [e.target.name]: null });
        let err = '';
        const uploadedFile = e.target.files[0];

        if (!uploadedFile) {
            err = "Please complete this field";
            seterror({ ...error, photo: err })
            setFormdata({ ...formdata, [e.target.name]: null });
            return;
        }
        // Check if the file type is JPG or PNG
        const validTypes = ["image/jpeg", "image/png"];
        if (!validTypes.includes(uploadedFile.type)) {
            err = "Only JPG and PNG files are allowed.";
            seterror({ ...error, photo: err })
            setFormdata({ ...formdata, [e.target.name]: null });
            return;
        }
        // Check if the file size is less than or equal to 10MB
        const maxSizeInBytes = 10 * 1024 * 1024; // 10MB in bytes
        if (uploadedFile.size > maxSizeInBytes) {
            err = "File size exceeds the 10MB limit.";
            seterror({ ...error, photo: err })
            setFormdata({ ...formdata, [e.target.name]: null });
            return;
        }
        // Check the image resolution (minimum 380x380px)
        const img = document.createElement("img");
        img.src = URL.createObjectURL(uploadedFile);
        img.onload = () => {
            if (img.width < 680 || img.height < 680) {
                err = "Image resolution must be at least 680x680px.";
                seterror({ ...error, photo: err })
                setFormdata({ ...formdata, [e.target.name]: null });
            } else {
                setFormdata({ ...formdata, [e.target.name]: e.target.files[0] });
                seterror({ ...error, photo: '' })
            };
            URL.revokeObjectURL(img.src);
        }
    };
    const handleresume = (e) => {
        let err = '';
        seterror({ ...error, resume: '' })
        setFormdata({ ...formdata, [e.target.name]: null });
        const maxSizeInBytes = 15 * 1024 * 1024; // 15MB in bytes
        const uploadedFile = e.target.files[0];
        if (!uploadedFile) {
            err = "Please complete this field";
            seterror({ ...error, resume: err })
            return;
        }
        // Check if the file is a PDF
        if (uploadedFile.type !== "application/pdf") {
            err = "Only PDF files are allowed.";
            seterror({ ...error, resume: err })
            setFormdata({ ...formdata, [e.target.name]: null });
            return;
        }

        if (uploadedFile.size > maxSizeInBytes) {
            err = "File size exceeds the 15MB limit.";
            seterror({ ...error, resume: err })
            setFormdata({ ...formdata, [e.target.name]: null });
            return;
        }
        else {
            setFormdata({ ...formdata, [e.target.name]: e.target.files[0] });
            seterror({ ...error, resume: "" })
        }
    };

    const handlesubmit = (e) => {
        e.preventDefault();
        setmsg("Form submitted Successfully")
        nextstep();
        localStorage.setItem('form', JSON.stringify(formdata));
    }
    return <div className="form-container" >
        <div className="heading" style={{ paddingTop: "30px", fontSize: '1.7rem', fontWeight: 500 }}>
            Set up your professional profile
        </div>
        <form onSubmit={handlesubmit}>
            <div className="form">

                <div className="labelinput"> <span>
                    <p style={{ fontSize: '1rem' }}>
                        Profile Photo
                    </p>
                </span>
                    <span style={{ fontSize: '0.7rem' }} >
                        Please upload a high-quality profile photo.
                        Freelancers with professional profile photo are prioritized.
                    </span>
                </div>
                <div style={{ display: "flex", marginBottom: 0 }}>
                    <span>
                        <label htmlFor="photo" className="imageupload" > <MdUploadFile size={160} padding={0} />
                        </label>
                        <input type="file" accept=".jpg,.jpeg,.png" style={{ visibility: "hidden", width: 1 }} name="photo" id="photo" onChange={(e) => handleimage(e)} required />

                    </span>
                    <div style={{ display: 'flex', fontSize: '0.7rem', flexFlow: 'column', gap: 8, marginTop: 40, color: 'gray' }}>
                        <p>JPG/PNG file </p>
                        <p>
                            Minimum resolution 380x380px
                        </p>
                        <p>Maximum file size:10MB

                        </p>
                        <span >
                            <a style={{ color: 'blue', fontSize: '15px', textDecoration: 'none' }} href="#">View our high-quality headshot guide</a>
                        </span>
                    </div>
                </div>
                <div>
                    {error.photo && (<span style={{ marginTop: '5px' }} className="errmsg"> {error.photo}
                    </span>)}
                </div>
                <div className="labelinput"> <span ><p style={{ fontSize: '0.9rem', marginTop: '10px' }}>
                    Resume
                </p><p style={{ fontSize: '0.7rem' }}>
                        Please upload your resume
                    </p>

                </span>

                    <div style={{ display: 'flex' }}><span>
                        <label htmlFor="resume" >
                            <span className="endbtn upload">
                                Upload
                            </span>
                        </label>
                        <input type="file" accept=".pdf" name="resume" style={{ visibility: "hidden", width: 1 }} id="resume" onChange={(e) => handleresume(e)} required />

                    </span>
                        <span style={{ color: 'grey', fontSize: '0.7rem', marginTop: '10px' }}>
                            <span>
                                PDF file
                            </span>
                            <div>
                                Maximum file size: 5 MB
                            </div>
                        </span>
                    </div>
                </div>
                {error.resume && (<span style={{ marginTop: '5px' }} className="errmsg"> {error.resume}
                </span>)}
                <div className="errmsg">{msg}</div>
                <div className="lastmsg" style={{ display: 'flex' }}>
                    <button className="bttn" type="submit" style={{ border: 'none', height: 35, width: 70, marginRight: 10, marginBottom: 50 }}>Finish</button>

                    <span style={{ paddingTop: 0 }}>
                        <span style={{ fontSize: "0.7rem", color: "Orange" }}>
                            100% completed
                        </span>
                        <div style={{ fontSize: '0.7rem' }}>
                            You're almost done. One more step and you can start your
                            personalized screening experience.
                        </div>
                    </span>
                </div>
            </div>
        </form>
    </div>
}
export function Final({ formdata, setFormdata }) {
    const [err, setErr] = useState('');
    const [msg, setmsg] = useState('');
    const [dataList, setDataList] = useState([]);

    const handlesubmit = async () => {
        setErr('');
        const form = new FormData();
        form.append('name', formdata.name);
        form.append('location', formdata.location);
        form.append('city', formdata.city);
        form.append('citizenship', formdata.citizenship);
        form.append('EnglishProficiency', formdata.EnglishProficiency);
        form.append('reason', formdata.reason);
        form.append('yearsexp', formdata.yearsexp);
        form.append('jobinterest', formdata.jobinterest);
        form.append('yearsexp_skills', formdata.yearsexp_skills);
        form.append('certificate', formdata.certificate);
        form.append('skills', formdata.skills);
        form.append('jobtype', formdata.jobtype);
        form.append('rate_dollar', formdata.rate_dollar);
        form.append('linkedin', formdata.linkedin);
        form.append('Github', formdata.Github);
        form.append('photo', formdata.photo);
        form.append('resume', formdata.resume);
        try {
            await axios.post('https://multi-step-form-backend-iyuu.onrender.com/submit-form', form, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            alert('Form submitted successfully');
            fetchData();
        } catch (error) {
            console.error('Error submitting form', error);
        }
    };

    const fetchData = async () => {
        try {
            const response = await axios.get('https://multi-step-form-backend-iyuu.onrender.com/form-data');
            setDataList(response.data);
        } catch (error) {
            console.error('Error fetching form data', error);
        }
    };

    return <div className="form-container">
        <div style={{ display: "flex", flexFlow: 'column', padding: 50, justifyContent: "center", alignItems: 'center' }} className="errmsg">
            <h1>Form Submitted Successfully </h1> <br />
            <br />  <button onClick={() => handlesubmit()} className="bttn" type="button" style={{ border: 'none', height: 35, width: 70, marginRight: 10, marginBottom: 50 }}>Submit</button>
            {msg && <div className="errmsg">{msg}</div>}

            {err && <div className="errmsg">{err}</div>}

        </div>
        <br />
        <br /><br />
        <Table dataList={dataList} />
    </div >
}