import React from 'react'
import { StyledDivGameRequirements } from './styles'

function SystemRequirements({ os, graph, mem, proc, stor }) {
  return (
    <StyledDivGameRequirements>
      <h1>Minimum System Requirements</h1>
      <div className="reqContainer">
        <div className="requirements">
          <h4>O.System:</h4>
          <h4>Graphics:</h4>
          <h4>Memory:</h4>
          <h4>Processor:</h4>
          <h4>Storage:</h4>
        </div>
        <div className="specs">
          <p>{os !== undefined ? os : 'Sorry...No data'}</p>
          <p>{graph !== undefined ? graph : 'Sorry...No data'}</p>
          <p>{mem !== undefined ? mem : 'Sorry...No data'}</p>
          <p>{proc !== undefined ? proc : 'Sorry...No data'}</p>
          <p>{stor !== undefined ? stor : 'Sorry...No data'}</p>
        </div>
      </div>
    </StyledDivGameRequirements>
  )
}

export default SystemRequirements
