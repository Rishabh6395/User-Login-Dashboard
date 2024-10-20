/* eslint-disable prettier/prettier */
import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
} from '@coreui/react'

const RankBonusStatus = () => {
  // Data for the table
  const rankData = [
    { id: 1, rank: 'BRONZE', current: 2, next: 2, achieved: 0, pending: 0, bonus: '$25', status: 'Complete' },
    { id: 2, rank: 'SILVER', current: 6, next: 'Next 4', achieved: 0, pending: 0, bonus: '$50', status: 'Complete' },
    { id: 3, rank: 'GOLD', current: 14, next: 'Next 8', achieved: 0, pending: 0, bonus: '$100', status: 'Complete' },
    { id: 4, rank: 'PLATINUM', current: 30, next: 'Next 16', achieved: 0, pending: 8.0, bonus: '$200', status: 'Pending' },
    { id: 5, rank: 'RUBY', current: 70, next: 'Next 40', achieved: 33.0, pending: 48.0, bonus: '$500', status: 'Pending' },
    { id: 6, rank: 'SAPPHIRE', current: 170, next: 'Next 100', achieved: 133.0, pending: 148.0, bonus: '$1250', status: 'Pending' },
    { id: 7, rank: 'DIAMOND', current: 370, next: 'Next 200', achieved: 333.0, pending: 348.0, bonus: '$2500', status: 'Pending' },
    { id: 8, rank: 'EXECUTIVE DIAMOND', current: 770, next: 'Next 400', achieved: 733.0, pending: 748.0, bonus: '$5000', status: 'Pending' },
    { id: 9, rank: 'DOUBLE DIAMOND', current: 1570, next: 'Next 800', achieved: 1533.0, pending: 1548.0, bonus: '$10K', status: 'Pending' },
    { id: 10, rank: 'TRIPLE DIAMOND', current: 3170, next: 'Next 1600', achieved: 3133.0, pending: 3148.0, bonus: '$20K', status: 'Pending' },
    { id: 11, rank: 'BLUE DIAMOND', current: 6370, next: 'Next 3200', achieved: 6333.0, pending: 6348.0, bonus: '$40K', status: 'Pending' },
    { id: 12, rank: 'ROYAL DIAMOND', current: 12770, next: 'Next 6400', achieved: 12733.0, pending: 12748.0, bonus: '$80K', status: 'Pending' },
    { id: 13, rank: 'CROWN DIAMOND', current: 25570, next: 'Next 12800', achieved: 25533.0, pending: 25548.0, bonus: '$160K', status: 'Pending' },
    { id: 14, rank: 'AMBASSADOR', current: 51170, next: 'Next 25600', achieved: 51133.0, pending: 51148.0, bonus: '$320K', status: 'Pending' },
    { id: 15, rank: 'ROYAL AMBASSADOR', current: 102370, next: 'Next 51200', achieved: 102333.0, pending: 102348.0, bonus: '$640K', status: 'Pending' },
    { id: 16, rank: 'BRAND AMBASSADOR', current: 204770, next: 'Next 102400', achieved: 204733.0, pending: 204748.0, bonus: '$1.28M', status: 'Pending' },
    { id: 17, rank: 'COMING SOON', current: 0, next: 'Next 0', achieved: 0, pending: 0, bonus: '$00M', status: '' },
    { id: 18, rank: 'COMING SOON', current: 0, next: 'Next 0', achieved: 0, pending: 0, bonus: '$00M', status: '' },
  ]

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Rank Bonus Status</strong>
          </CCardHeader>
          <CCardBody>
            <div className="mb-3">
              <h5>Username: Rishabh Bhatt</h5>
              <h6>Name: Rishabh</h6>
            </div>
            <CTable striped hover responsive>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell>S.No.</CTableHeaderCell>
                  <CTableHeaderCell>Rank</CTableHeaderCell>
                  <CTableHeaderCell>Current</CTableHeaderCell>
                  <CTableHeaderCell>Next</CTableHeaderCell>
                  <CTableHeaderCell>Achieved</CTableHeaderCell>
                  <CTableHeaderCell>Pending</CTableHeaderCell>
                  <CTableHeaderCell>Bonus</CTableHeaderCell>
                  <CTableHeaderCell>Status</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {rankData.map((item, index) => (
                  <CTableRow key={item.id}>
                    <CTableDataCell>{index + 1}</CTableDataCell>
                    <CTableDataCell>{item.rank}</CTableDataCell>
                    <CTableDataCell>{item.current}</CTableDataCell>
                    <CTableDataCell>{item.next}</CTableDataCell>
                    <CTableDataCell>{item.achieved}</CTableDataCell>
                    <CTableDataCell>{item.pending}</CTableDataCell>
                    <CTableDataCell>{item.bonus}</CTableDataCell>
                    <CTableDataCell>{item.status}</CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default RankBonusStatus
