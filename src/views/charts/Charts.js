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
  CFormCheck,
} from '@coreui/react'

const AddFundForm = () => {
  const [showForm, setShowForm] = useState(false)

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
            <strong>Fund Request</strong>
            <CButton
              color="primary"
              className="float-end"
              onClick={handleAddFundClick}
            >
              Add Fund
            </CButton>
          </CCardHeader>
          <CCardBody>
            {showForm && (
              <CForm onSubmit={handleFormSubmit}>
                <div className="mb-3">
                  <CFormLabel htmlFor="name">Request Amount</CFormLabel>
                  <CFormInput
                    type="text"
                    id="name"
                    placeholder="Enter Amount"
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="mobile">Wallet</CFormLabel>
                  <CFormInput
                    type="text"
                    id="mobile"
                    placeholder="Enter wallet number"
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="email">Deposit Date</CFormLabel>
                  <CFormInput
                    type="email"
                    id="email"
                    placeholder="Deposit Date"
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="country">Payment Mode</CFormLabel>
                  <CFormInput
                    type="text"
                    id="country"
                    placeholder="Enter your Payment mode"
                  />
                </div>
                <CButton type="submit" color="success">Submit</CButton>
              </CForm>
            )}
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default AddFundForm
