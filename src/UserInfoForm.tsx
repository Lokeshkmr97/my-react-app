import React, { useState } from 'react';

const UserInfoForm: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate the form fields (you can add more validation logic)
    if (!name || !phone || !email) {
      alert('Please fill in all fields');
      return;
    }

    // Save user details in local storage
    const userDetails = { name, phone, email };
    localStorage.setItem('userDetails', JSON.stringify(userDetails));

    // Redirect to the second page
    window.location.href = '/second-page';
  };

  return (
    <form onSubmit={handleSubmit} className='form-control'>
        <h3><u>User Detail Form</u></h3>
      <div>
        <label>Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className='form-control'/>
      </div>
      <div>
        <label>Phone number</label>
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className='form-control'/>
      </div>
      <div>
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className='form-control'/>
      </div>
      <button type="submit" className='btn btn-primary mt-2'>Submit</button>
    </form>
  );
};

export default UserInfoForm;
