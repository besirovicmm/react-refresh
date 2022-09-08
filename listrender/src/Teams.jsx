import React from 'react'

const Teams = ({ selectedTeam, handleTeamSelectionChange }) => {
  return (
    <select
      className="form-select form-control-lg"
      value={selectedTeam}
      onChange={handleTeamSelectionChange}
    >
      <option value="TeamA">TeamA</option>
      <option value="TeamB">TeamB</option>
      <option value="TeamC">TeamC</option>
      <option value="TeamD">TeamD</option>
    </select>
  )
}

export default Teams