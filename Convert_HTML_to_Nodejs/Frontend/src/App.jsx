import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4040/user')
      .then(res => setUsers(res.data))
      .catch(err => console.error('Fetch error:', err));
  }, []);

  return (
    <main>
      <h1>User Directory</h1>
      <section className="user-container">
        {users.map(user => (
          <article key={user.id} className="user-card">
            <ul>
              <li><strong>Name:</strong> {user.name.firstname} {user.name.lastname}</li>
              <li><strong>Email:</strong> {user.email}</li>
              <li><strong>Password:</strong> {user.password}</li>
            </ul>
          </article>
        ))}
      </section>
    </main>
  );
}

export default App;
