import React from 'react';
import { List } from '@mui/material';
import DepartmentComponent from './DepartmentComponent';

interface SubDepartment {
    department: string;
    sub_departments: string[];
  }

const departmentsData: SubDepartment[] = [
  {
    department: 'customer_service',
    sub_departments: ['support', 'customer_success']
  },
  {
    department: 'design',
    sub_departments: ['graphic_design', 'product_design', 'web_design']
  }
];

const DepartmentListComponent: React.FC = () => {
  return (
    <List>
      {departmentsData.map(department => (
        <DepartmentComponent key={department.department} department={department} />
      ))}
    </List>
  );
};

export default DepartmentListComponent;
