'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function PersonalInfoPage() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const jwt = localStorage.getItem('token');

    if (!jwt) {
      alert('Πρέπει να συνδεθείτε για να δείτε τα στοιχεία σας.');
      router.push('/');
      return;
    }

    fetch('http://localhost:1338/api/users/me', {
      headers: { Authorization: `Bearer ${jwt}` },
    })
      .then((res) => {
        if (!res.ok) throw new Error('Invalid token');
        return res.json();
      })
      .then((data) => {
        console.log("Data: ", data);
        setUser(data);
        setLoading(false);
      })
      .catch(() => {
        alert('Η συνεδρία σας έληξε. Παρακαλώ συνδεθείτε ξανά.');
        localStorage.removeItem('token');
        router.push('/');
      });
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/');
    setTimeout(() => window.location.reload(), 100); // Force navbar update
  };


  if (loading) return null;

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Τα Στοιχεία μου</h2>
      <p><strong>Όνομα Χρήστη:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>ID:</strong> {user.id}</p>

      <button
        onClick={handleLogout}
        style={{
          marginTop: '2rem',
          padding: '0.5rem 1rem',
          backgroundColor: '#ef4444',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Αποσύνδεση
      </button>
    </div>
  );
}
