
const SecondPage = () => {
  const userDetails = JSON.parse(localStorage.getItem('userDetails') || 'null');

  if (!userDetails) {
    
    window.location.href = '/';
    return null;
  }

  return (
    <div>
      <h2>Welcome to the Second Page</h2>
      <p>User Details:</p>
      <p>Name: {userDetails.name}</p>
      <p>Phone: {userDetails.phone}</p>
      <p>Email: {userDetails.email}</p>
    </div>
  );
};

export default SecondPage;
