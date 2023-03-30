import { useState, useEffect } from 'react';

const Qoutes = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [qouteData, setQoute] = useState([]);

  useEffect(() => {
    const qouteResults = async () => {
      const category = 'education';
      const url = `https://api.api-ninjas.com/v1/quotes?category=${category}`;
      try {
        const request = await fetch(url, {
          method: 'GET',
          headers: { 'X-Api-Key': 'dVDCHmW94XaWBPo09mEhIQ==DRQLf471ttC5BWif' },
        });
        const response = await request.json();
        setQoute(response);
      } catch (error) {
        setError('There was an error fetching the quotes,Please reload☺.');
      } finally {
        setLoading(false);
      }
    };
    qouteResults();
  }, []);

  if (loading) {
    return (
      <div style={{
        textAlign: 'center', fontSize: '1.5rem', margin: '2rem 0', color: 'white', backgroundColor: 'gray', padding: '10px',
      }}
      >
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div style={{
        textAlign: 'center', fontSize: '1.5rem', margin: '2rem 0', color: 'white', backgroundColor: 'red', padding: '10px',
      }}
      >
        {error}
      </div>
    );
  }

  return (
    qouteData.map((qouteItems) => (
      <div
        style={{
          border: '1px solid #ccc', padding: '1rem', margin: '1rem 0', backgroundColor: 'lightgray',
        }}
        key={qouteData.length}
      >
        <p style={{ fontStyle: 'italic', marginBottom: '1rem', fontSize: '1.5rem' }}>
          {qouteItems.quote}
        </p>
        <p style={{ textAlign: 'right', fontWeight: 'bold', fontSize: '1.3rem' }}>
          -
          {' '}
          {qouteItems.author}
        </p>
      </div>
    ))
  );
};

export default Qoutes;
