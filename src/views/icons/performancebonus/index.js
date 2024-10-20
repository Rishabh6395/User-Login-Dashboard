/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Button, Table, Form, Container, Card } from 'react-bootstrap';
import * as XLSX from 'xlsx';

const PerformanceBonus = () => {
  const [username, setUsername] = useState('');

  // Table data
  const tableData = [
    { sNo: 1, plan: 'PACKAGE(50$)', directCount: 3, performanceIncome: 15.05, deduction: 0.00, payIncome: 15.05 },
  ];

  // Function to export table data to Excel
  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(tableData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Performance Bonus');
    XLSX.writeFile(wb, 'PerformanceBonus.xlsx');
  };

  return (
    <Container className="mt-4">
      <Card>
        <Card.Header>
          <h3>Performance Bonus</h3>
        </Card.Header>
        <Card.Body>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" onClick={exportToExcel} className="mb-3">
            Export to Excel
          </Button>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Plan</th>
                <th>Direct Count</th>
                <th>Performance Income</th>
                <th>Deduction</th>
                <th>Pay Income</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item, index) => (
                <tr key={index}>
                  <td>{item.sNo}</td>
                  <td>{item.plan}</td>
                  <td>{item.directCount}</td>
                  <td>{item.performanceIncome}</td>
                  <td>{item.deduction}</td>
                  <td>{item.payIncome}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PerformanceBonus;
