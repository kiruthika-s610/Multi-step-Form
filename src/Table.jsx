import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'


const Table = ({ dataList }) => {
  return (
    <div>
      <br />
      <br />
      <div><h5>Database:</h5></div><br />
      <div style={{ overflow: 'scroll' }}>
        <table style={{ fontSize: 13, overflow: 'visible' }} className="table table-dark table-striped-columns ">
          <thead>
            <tr>
              <th colSpan="1" scope="col">#</th>
              <th colSpan="1" scope="col">Name </th>
              <th colSpan="1" scope="col"></th>
              <th colSpan="1" scope="col">Location</th>
              <th colSpan="1" scope="col">City</th>
              <th colSpan="1" scope="col">Citizenship</th>
              <th colSpan="1" scope="col">EnglishProficiency</th>
              <th colSpan="1" scope="col">Reason</th>
              <th colSpan="1" scope="col"></th>
              <th colSpan="1" scope="col"></th>
              <th colSpan="1" scope="col"></th>
              <th colSpan="1" scope="col"></th>
              <th colSpan="1" scope="col"></th>
              <th colSpan="1" scope="col">Yearsexp</th>
              <th colSpan="1" scope="col">Jobinterest</th>
              <th colSpan="1" scope="col">Yearsexp_skills</th>
              <th colSpan="1" scope="col">Certificate</th>
              <th colSpan="1" scope="col"></th>
              <th colSpan="1" scope="col"></th>
              <th colSpan="1" scope="col"></th>
              <th colSpan="1" scope="col">Skills</th>
              <th colSpan="1" scope="col"></th>
              <th colSpan="1" scope="col"></th>
              <th colSpan="1" scope="col"></th>
              <th colSpan="1" scope="col">Jobtype </th>
              <th colSpan="1" scope="col">Dollar/hour</th>
              <th colSpan="1" scope="col">Linkedin</th>
              <th colSpan="1" scope="col">Github</th>
              <th colSpan="1" scope="col">Photo</th>
              <th colSpan="1" scope="col">Resume</th>
            </tr>
          </thead>
          <tbody>
            {dataList.map((item, index) =>
            (<tr key={item._id}>
              <th scope="row">{index + 1}</th>
              <td colSpan="2">{item.name}</td>
              <td colSpan="1">{item.location}</td>
              <td colSpan="1">{item.city}</td>
              <td colSpan="1">{item.citizenship}</td>
              <td colSpan="1">{item.EnglishProficiency}</td>
              <td colSpan="6">{item.reason}</td>
              <td colSpan="1">{item.yearsexp}</td>
              <td colSpan="1">{item.jobinterest}</td>
              <td colSpan="1">{item.yearsexp_skills}</td>
              <td colSpan="4">{item.certificate}</td>
              <td colSpan="4">{item.skills.join(', ')}</td>
              <td colSpan="1">{item.jobtype}</td>
              <td colSpan="1">{item.rate_dollar}</td>
              <td colSpan="1">{item.linkedin}</td>
              <td colSpan="1">{item.Github}</td>
              <td colSpan="1">
                <img
                  src={item.photo}
                  alt={item.photo.filename}
                  width="100"
                  height="100"/>
              </td>
              <td colSpan="1">
                <a  href={item.resume}
                  width="100"
                  height="100"
                  download>View resume </a>

              </td>
            </tr>))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Table
