import { useState, useEffect } from 'react';
import './calc.css';

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
    return <div className="loads">Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    qouteData.map((qouteItems) => (
      <div className="qoute-class" key={qouteData.length}>
        <p>
          {qouteItems.quote}
          -
          {qouteItems.author}
        </p>
      </div>
    ))
  );
};

export default Qoutes;
