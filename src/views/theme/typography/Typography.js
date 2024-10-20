/* eslint-disable prettier/prettier */
import React from 'react'
import { CCard, CCardHeader, CCardBody } from '@coreui/react'
import { DocsLink } from 'src/components'

const Typography = () => {
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>
          <h1>User Profile</h1>
        </CCardHeader>
        <CCardBody>
          <h3>
          Paramhans Kumar
          </h3>
            <p>Rank : GOLD
            STANDARD PACKAGE(50$)</p>
          <table className="table">
            <thead>
              <tr>
                <th>
                <h3>Activity</h3>
                </th>
                <th>
                <h3>Total</h3>
                </th>                
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <h5>
                  Direct Refferal
                  </h5>
                </td>
                <td>
                  <span className="h5">8</span>
                </td>
              </tr>
              <tr>
                <td>
                  <h5>
                  Total Team
                  </h5>
                </td>
                <td>
                  <span className="h5">210</span>
                </td>
              </tr>
              <tr>
                <td>
                  <h5>
                  Main Wallet Balance
                  </h5>
                </td>
                <td>
                  <span className="h5">1.05$</span>
                </td>
              </tr>
              <tr>
                <td>
                  <h5>
                  Total Income
                  </h5>
                </td>
                <td>
                  <span className="h5">311.05$</span>
                </td>
              </tr>
              <tr>
                <td>
                  <h5>
                  Activation Fund Wallet
                  </h5>
                </td>
                <td>
                  <span className="h5">0.00$</span>
                </td>
              </tr>
              <tr>
                <td>
                  <h5>
                  Total Withdrawl
                  </h5>
                </td>
                <td>
                  <span className="h5">310.00</span>
                </td>
              </tr>
              <tr>
                <td>
                  <h5>
                  Rank Left Bussiness(Today)
                  </h5>
                </td>
                <td>
                  <span className="h5">1.00</span>
                </td>
              </tr>
              <tr>
                <td>
                  <h5>
                  Rank Right Bussiness(Today)
                  </h5>
                </td>
                <td>
                  <span className="h5">0.00</span>
                </td>
              </tr>
              <tr>
                <td>
                  <h5>
                  Rank Left Bussiness(Total)
                  </h5>
                </td>
                <td>
                  <span className="h5">36.50</span>
                </td>
              </tr>
              <tr>
                <td>
                  <h5>
                  Rank Right Bussiness(Total)
                  </h5>
                </td>
                <td>
                  <span className="h5">22.0</span>
                </td>
              </tr>
            </tbody>
          </table>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Typography
