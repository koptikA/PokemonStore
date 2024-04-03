import React from 'react';
import './Account.css';
import { useSelector } from 'react-redux';
import { loginSelector } from '../login/selectors';
import { PageTitle } from '../../components/PageTitle/PageTitle';

const LABELS = {
  _id: 'ID',
  email: 'Email',
  firstName: 'First Name',
  lastName: 'Last Name',
  gender: 'Gender',
  password: 'Password',
  phone: 'Phone',
  addressLine1: 'AddressLine 1',
  addressLine2: 'AddressLine 2',
  city: 'City',
  country: 'Country',
};

export const Account = () => {
  const { userInfo } = useSelector(loginSelector);

  const { address, ...restInfo } = userInfo;

  const userData = { ...restInfo, ...address };

  const userDataArray = Object.keys(userData).reduce((result, key) => {
    if (userData[key] && key !== 'password') {
      result.push({ value: userData[key], label: LABELS[key] });
    }

    return result;
  }, []);

  return (
    <div className="account-user-info">
      <PageTitle>Hello, {userInfo.firstName}!</PageTitle>

      {userDataArray.map(({ value, label }) => {
        return (
          <div className="account-user-info-item" key={label}>
            <div className="account-user-info-item-label">{label}: </div>
            <div className="account-user-info-item-value">{value}</div>
          </div>
        );
      })}
    </div>
  );
};
