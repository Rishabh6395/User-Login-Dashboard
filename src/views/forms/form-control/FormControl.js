/* eslint-disable prettier/prettier */
import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormCheck,
  CRow,
} from '@coreui/react'

const FormControl = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Profile Detail</strong>
          </CCardHeader>
          <CCardBody>
            <CForm>
              {/* User Details Form */}
              <div className="mb-3">
                <CFormLabel htmlFor="name">Name</CFormLabel>
                <CFormInput
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="mobileNo">Mobile No.</CFormLabel>
                <CFormInput
                  type="text"
                  id="mobileNo"
                  placeholder="Enter your mobile number"
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="email">Email Id</CFormLabel>
                <CFormInput
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="country">Country</CFormLabel>
                <CFormInput
                  type="text"
                  id="country"
                  placeholder="Enter your country"
                />
              </div>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
      
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Login Access</strong>
          </CCardHeader>
          <CCardBody>
            <CForm>
              {/* Password Fields */}
              <div className="mb-3">
                <CFormLabel htmlFor="password">Password</CFormLabel>
                <CFormInput
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="confirmPassword">Confirm Password</CFormLabel>
                <CFormInput
                  type="password"
                  id="confirmPassword"
                  placeholder="Re-enter your password"
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="transPassword">Transaction Password</CFormLabel>
                <CFormInput
                  type="password"
                  id="transPassword"
                  placeholder="Enter your transaction password"
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="confirmTransPassword">Confirm Transaction Password</CFormLabel>
                <CFormInput
                  type="password"
                  id="confirmTransPassword"
                  placeholder="Re-enter your transaction password"
                />
              </div>

              {/* Note */}
              <p className="text-danger">
                NOTE: Password should be 4-12 characters long, alphanumeric, and contain at least one special character (@, #, $, %, *). (e.g., earner@12345)
              </p>

              {/* Accept Terms & Conditions */}
              <div className="mb-3">
                <CFormCheck
                  id="acceptTerms"
                  label="I Accept Terms & Conditions"
                />
              </div>

              {/* Submit Button */}
              <CButton color="primary" type="submit">
                Submit
              </CButton>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default FormControl
