"use client";

import { useState } from 'react';
import Image from "next/image";
import styles from "./home.module.css"

const Home = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch('http://localhost:8000/query', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question: query }),
      });
      const data = await res.json();
      setResponse(data.response);
    } catch (error) {
      console.error('Error:', error);
      setResponse('An error occurred while processing your request.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Speed Up your Contract Analysis by the Power of AI</h1>
        <p className={styles.description}>
          This product is designed and serviced by the TJU International Contracting Team. 
          For more information, please see contact page.
        </p>
        <div className={styles.inputContainer}>
          <textarea
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter your question here..."
            className={styles.textarea}
            rows="4"
          />
        </div>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button 
            className={styles.button} 
            onClick={handleSubmit}
            disabled={isLoading}
          >
            {isLoading ? 'Processing...' : 'Contact'}
          </button>
        </div>
        {response && (
          <div className={styles.responseContainer}>
            <h3 className={styles.responseTitle}>Response:</h3>
            <p className={styles.responseText}>{response}</p>
          </div>
        )}
        <div className={styles.brands}>
          <Image src="/brands.png" alt="" fill className={styles.brandImage} />
        </div>
      </div>

      <div className={styles.imgContainer}>
        <Image src="/hero.gif" alt="" fill className={styles.heroImage} />
      </div>
    </div>
  )
};

export default Home;