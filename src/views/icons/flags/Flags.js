/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CCardHeader,
  CForm,
  CFormInput,
  CFormLabel,
  CRow,
} from '@coreui/react'

const AddFundForm = () => {
  const [showForm, setShowForm] = useState(false)
  const [formDate, setFormDate] = useState('')
  const [toDate, setToDate] = useState('')

  const handleAddFundClick = () => {
    setShowForm(true)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    alert('Form submitted!')
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Team Building Bonus</strong>
            <CButton
              color="primary"
              className="float-end"
              onClick={handleAddFundClick}
            >
              Show
            </CButton>
          </CCardHeader>
          <CCardBody>
            {showForm && (
              <CForm onSubmit={handleFormSubmit}>
                <div className="mb-3">
                  <CFormLabel htmlFor="formDate">Form Date</CFormLabel>
                  <CFormInput
                    type="date"
                    id="formDate"
                    value={formDate}
                    onChange={(e) => setFormDate(e.target.value)}
                    placeholder="Select Form Date"
                  />
                </div>

                <div className="mb-3">
                  <CFormLabel htmlFor="toDate">To Date</CFormLabel>
                  <CFormInput
                    type="date"
                    id="toDate"
                    value={toDate}
                    onChange={(e) => setToDate(e.target.value)}
                    placeholder="Select To Date"
                  />
                </div>

                <div className="mb-3">
                  <CFormLabel htmlFor="username">Username</CFormLabel>
                  <CFormInput
                    type="text"
                    id="username"
                    placeholder="Enter Username"
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="packagePlan">Package/Plan</CFormLabel>
                  <CFormInput
                    type="text"
                    id="packagePlan"
                    placeholder="Enter your Payment Mode"
                  />
                </div>
                <CButton type="submit" color="success">Search</CButton>
              </CForm>
            )}
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default AddFundForm
