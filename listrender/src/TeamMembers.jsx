import React from 'react'

const TeamMembers = ({
  employee,
  handleEmployeeClick,
  maleProfile,
  femaleProfile,
  selectedTeam,
}) => {
  return (
    <div
      key={employee.id}
      onClick={handleEmployeeClick}
      id={employee.id}
      className={
        employee.teamName === selectedTeam ? 'card m-2 standout' : 'card m-2'
      }
      style={{ cursor: 'pointer' }}
    >
      <img
        alt="employee gender"
        src={employee.gender === 'male' ? maleProfile : femaleProfile}
      />
      <div className="card-body">
        <h5 className="card-title">Full name {employee.fullName}</h5>
        <p className="card-text">
          <b>Designation: </b>
          {employee.designation}
        </p>
      </div>
    </div>
  )
}

export default TeamMembers
