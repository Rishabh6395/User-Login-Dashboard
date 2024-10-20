/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CAccordionItem,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CForm,
  CFormCheck,
  CFormInput,
  CButton,
} from '@coreui/react'

const Accordion = () => {
  // Sample data for 8 users
  const users = [
    { id: 1, userId: 'U101', name: 'John Doe', placementId: 'P123', joiningDate: '2024-01-01', paidDate: '2024-02-01', packageAmount: 5000 },
    { id: 2, userId: 'U102', name: 'Jane Smith', placementId: 'P124', joiningDate: '2024-02-05', paidDate: '2024-03-05', packageAmount: 7000 },
    { id: 3, userId: 'U103', name: 'Alice Johnson', placementId: 'P125', joiningDate: '2024-03-10', paidDate: '2024-04-10', packageAmount: 4500 },
    { id: 4, userId: 'U104', name: 'Bob Brown', placementId: 'P126', joiningDate: '2024-04-15', paidDate: '2024-05-15', packageAmount: 8000 },
    { id: 5, userId: 'U105', name: 'Charlie Green', placementId: 'P127', joiningDate: '2024-05-20', paidDate: '2024-06-20', packageAmount: 6000 },
    { id: 6, userId: 'U106', name: 'David White', placementId: 'P128', joiningDate: '2024-06-25', paidDate: '2024-07-25', packageAmount: 7500 },
    { id: 7, userId: 'U107', name: 'Emma Black', placementId: 'P129', joiningDate: '2024-07-30', paidDate: '2024-08-30', packageAmount: 9000 },
    { id: 8, userId: 'U108', name: 'Fiona Red', placementId: 'P130', joiningDate: '2024-08-05', paidDate: '2024-09-05', packageAmount: 10000 },
  ]

  // State for radio button selection
  const [filterOption, setFilterOption] = useState('All')

  // State for date inputs
  const [fromDate, setFromDate] = useState('')
  const [toDate, setToDate] = useState('')

  // Handle radio button change
  const handleFilterChange = (e) => {
    setFilterOption(e.target.value)
  }

  // Handle search button click
  const handleSearch = () => {
    // Logic for search based on filterOption, fromDate, and toDate
    console.log('Search clicked:', filterOption, fromDate, toDate)
  }

  // Handle export to Excel button click
  const handleExport = () => {
    // Logic for exporting data to Excel
    console.log('Export to Excel clicked')
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Direct Referral</strong>
          </CCardHeader>
          <CCardBody>
            {/* Radio Buttons for Filtering */}
            <CForm className="mb-3">
              <CFormCheck
                inline
                type="radio"
                name="filterOption"
                id="all"
                value="All"
                label="All"
                checked={filterOption === 'All'}
                onChange={handleFilterChange}
              />
              <CFormCheck
                inline
                type="radio"
                name="filterOption"
                id="joinMember"
                value="Join Member"
                label="Join Member"
                checked={filterOption === 'Join Member'}
                onChange={handleFilterChange}
              />
              <CFormCheck
                inline
                type="radio"
                name="filterOption"
                id="paidMember"
                value="Paid Member"
                label="Paid Member"
                checked={filterOption === 'Paid Member'}
                onChange={handleFilterChange}
              />
            </CForm>

            {/* Date Input Fields for Search */}
            <CForm className="mb-3 d-flex gap-2">
              <CFormInput
                type="date"
                id="fromDate"
                placeholder="From Date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
              />
              <CFormInput
                type="date"
                id="toDate"
                placeholder="To Date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
              />
            </CForm>

            {/* Buttons for Search and Export */}
            <div className="mb-3 d-flex gap-2">
              <CButton color="primary" onClick={handleSearch}>
                Search
              </CButton>
              <CButton color="success" onClick={handleExport}>
                Export to Excel
              </CButton>
            </div>

            {/* Accordion with Users Table */}
            <CAccordion activeItemKey={1}>
              <CAccordionItem itemKey={1}>
                <CAccordionHeader>Users Table</CAccordionHeader>
                <CAccordionBody>
                  <CTable striped hover responsive>
                    <CTableHead>
                      <CTableRow>
                        <CTableHeaderCell>S.No.</CTableHeaderCell>
                        <CTableHeaderCell>User Id</CTableHeaderCell>
                        <CTableHeaderCell>Name</CTableHeaderCell>
                        <CTableHeaderCell>Placement Id</CTableHeaderCell>
                        <CTableHeaderCell>Joining Date</CTableHeaderCell>
                        <CTableHeaderCell>Paid Date</CTableHeaderCell>
                        <CTableHeaderCell>Package Amount</CTableHeaderCell>
                      </CTableRow>
                    </CTableHead>
                    <CTableBody>
                      {users.map((user, index) => (
                        <CTableRow key={user.id}>
                          <CTableDataCell>{index + 1}</CTableDataCell>
                          <CTableDataCell>{user.userId}</CTableDataCell>
                          <CTableDataCell>{user.name}</CTableDataCell>
                          <CTableDataCell>{user.placementId}</CTableDataCell>
                          <CTableDataCell>{user.joiningDate}</CTableDataCell>
                          <CTableDataCell>{user.paidDate}</CTableDataCell>
                          <CTableDataCell>{user.packageAmount}</CTableDataCell>
                        </CTableRow>
                      ))}
                    </CTableBody>
                  </CTable>
                </CAccordionBody>
              </CAccordionItem>
            </CAccordion>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Accordion
