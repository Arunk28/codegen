import gql from 'graphql-tag';

export const getEmployeeDetails = gql`query GetEmployeeDetails {
  getEmployeeDetails {
    empid
  }
}`