import React, { useState } from 'react';
import { List, ListItemText,ListItem, Collapse, IconButton } from '@mui/material';
import { ExpandMore, ExpandLess } from '@mui/icons-material';

interface SubDepartment {
  department: string;
  sub_departments: string[];
}

interface DepartmentProps {
  department: SubDepartment;
}

const DepartmentComponent: React.FC<DepartmentProps> = ({ department }) => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      <ListItem button onClick={handleToggle}>
        <IconButton size="small">
          {open ? <ExpandLess /> : <ExpandMore />}
        </IconButton>
        <ListItemText primary={department.department} />
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {department.sub_departments.map(subDept => (
            <ListItem key={subDept}>
              <ListItemText primary={subDept} />
            </ListItem>
          ))}
        </List>
      </Collapse>
    </div>
  );
};

export default DepartmentComponent;
