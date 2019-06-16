/* eslint-disable react/no-array-index-key */
import React, { Component } from 'react';
import generateNumbers, { getPhoneNumbers } from '../../utils';
import Layout from '../../components/Layout';
import './home.scss';

export default class Home extends Component {
  state = { phoneNumbers: [] };

  componentDidMount = () => {
    this.getAllPhoneNumbers();
  };

  getAllPhoneNumbers = () => {
    const phoneNumbers = getPhoneNumbers();
    this.setState({ phoneNumbers });
  };

  generateNewPhoneNumbers = () => {
    generateNumbers();
    this.getAllPhoneNumbers();
  };

  render = () => {
    const { phoneNumbers } = this.state;
    return (
      <Layout>
        <div className="app-body">
          <button type="button" onClick={this.generateNewPhoneNumbers}>
            Generate
          </button>
          {phoneNumbers.length > 0 && (
            <table className="phoneNumbers">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Phone number</th>
                  <th>Length</th>
                </tr>
              </thead>
              <tbody>
                {phoneNumbers.map((phone, key) => (
                  <tr key={key}>
                    <td>{key + 1}</td>
                    <td>{phone}</td>
                    <td>{phone.length}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </Layout>
    );
  };
}
