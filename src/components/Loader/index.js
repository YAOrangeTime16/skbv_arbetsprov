import React from 'react';

const styles = {
  loader: {
    height: 200,
    padding: 20,
    fontSize: '1.5rem'
  },
  notice: {
    fontSize: '0.8rem',
    padding: 20,
  }
}

const Loader = () => (
  <div>
    <div style={styles.loader}>Loading information...</div>
    <p style={styles.notice}>When it takes time, please make sure your device is online</p>
  </div>
)

export default Loader;