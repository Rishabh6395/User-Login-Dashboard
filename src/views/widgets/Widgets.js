/* eslint-disable prettier/prettier */
import React from 'react';
import PropTypes from 'prop-types';
import { CWidgetStatsD, CRow, CCol } from '@coreui/react';
import { CChart } from '@coreui/react-chartjs';

const WidgetsBrand = (props) => {
  const chartOptions = {
    elements: {
      line: {
        tension: 0.4,
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3,
      },
    },
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  };

  // New data to replace
  const ledgerData = {
    fromDate: '',
    toDate: '',
    username: 'Paramhans2025',
    balance: '0.00',
    transactions: [
      { date: '11/10/2024', description: 'Topup Of User Id EC752295', credit: 0.00, withdrawal: 50.00, deduction: 0.00 },
      { date: '11/10/2024', description: 'Fund Receive From User Id TUSHAR2023', credit: 30.00, withdrawal: 0.00, deduction: 0.00 },
      { date: '11/10/2024', description: 'Fund Receive From User Id EC370219', credit: 20.00, withdrawal: 0.00, deduction: 0.00 },
      // Add all transactions similarly...
      { date: '09/07/2024', description: 'Fund Receive From User Id Pooja027', credit: 30.00, withdrawal: 0.00, deduction: 0.00 },
    ],
    total: {
      credit: 805.00,
      withdrawal: 805.00,
      deduction: 0.00,
    },
  };

  return (
    <CRow className={props.className} xs={{ gutter: 4 }}>
      <CCol sm={6} xl={4} xxl={3}>
        <CWidgetStatsD
          {...(props.withCharts && {
            chart: (
              <CChart
                className="position-absolute w-100 h-100"
                type="line"
                data={{
                  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                  datasets: [
                    {
                      backgroundColor: 'rgba(255,255,255,.1)',
                      borderColor: 'rgba(255,255,255,.55)',
                      pointHoverBackgroundColor: '#fff',
                      borderWidth: 2,
                      data: [65, 59, 80, 81, 56, 55, 40], // Example data
                    },
                  ],
                }}
                options={chartOptions}
              />
            ),
          })}
        />
      </CCol>
      {/* Render ledger information */}
      <div>
        <h4>Activation Ledger</h4>
        <p>From Date: {ledgerData.fromDate}</p>
        <p>To Date: {ledgerData.toDate}</p>
        <p>Username: {ledgerData.username}</p>
        <p>Balance: {ledgerData.balance}</p>
        <h5>Transactions</h5>
        <table>
          <thead>
            <tr>
              <th>SNo.</th>
              <th>Transaction Date</th>
              <th>Description</th>
              <th>Credit Amount</th>
              <th>Withdrawal/Debit</th>
              <th>Deduction</th>
            </tr>
          </thead>
          <tbody>
            {ledgerData.transactions.map((transaction, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{transaction.date}</td>
                <td>{transaction.description}</td>
                <td>{transaction.credit}</td>
                <td>{transaction.withdrawal}</td>
                <td>{transaction.deduction}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h5>Total</h5>
        <p>Credit: {ledgerData.total.credit}</p>
        <p>Withdrawal: {ledgerData.total.withdrawal}</p>
        <p>Deduction: {ledgerData.total.deduction}</p>
      </div>
    </CRow>
  );
};

WidgetsBrand.propTypes = {
  className: PropTypes.string,
  withCharts: PropTypes.bool,
};

export default WidgetsBrand;
