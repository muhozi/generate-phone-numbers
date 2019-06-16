/* eslint-disable react/no-array-index-key */
import React from 'react';
import generateNumbers from '../../utils';
import Layout from '../../components/Layout';
import './home.scss';

const Home = () => {
  const phoneNumbers = generateNumbers();
  return (
    <Layout>
      <div className="app-body">
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
      </div>
    </Layout>
  );
};

export default Home;
