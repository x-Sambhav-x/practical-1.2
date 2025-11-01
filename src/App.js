import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="bank-dashboard">
      <header className="bank-header">
        <h2>MyBank</h2>
        <button className="logout-btn">Logout</button>
      </header>

      <section className="account-summary">
        <div className="account-card balance">
          <h3>Account Balance</h3>
          <p>₹ 1,24,500</p>
        </div>
        <div className="account-card savings">
          <h3>Savings</h3>
          <p>₹ 55,300</p>
        </div>
        <div className="account-card credit">
          <h3>Credit Limit</h3>
          <p>₹ 80,000</p>
        </div>
      </section>

      <section className="transaction-area">
        <h3>Recent Transactions</h3>
        <table className="transaction-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Details</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>01 Nov 2025</td>
              <td>Online Shopping</td>
              <td>- ₹ 1,200</td>
              <td className="status danger">Debited</td>
            </tr>
            <tr>
              <td>31 Oct 2025</td>
              <td>Salary Credited</td>
              <td className="green">+ ₹ 45,000</td>
              <td className="status success">Credited</td>
            </tr>
            <tr>
              <td>29 Oct 2025</td>
              <td>Electricity Bill</td>
              <td>- ₹ 1,500</td>
              <td className="status warning">Pending</td>
            </tr>
          </tbody>
        </table>
      </section>

      <aside className="quick-actions">
        <h3>Quick Actions</h3>
        <button className="action-btn">Transfer Money</button>
        <button className="action-btn">Pay Bills</button>
        <button className="action-btn">Download Statement</button>
      </aside>
    </div>
  );
}
