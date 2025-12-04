// Force dynamic rendering for 404 page
export function getServerSideProps() {
  return {
    props: {},
  };
}

export default function Custom404() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      fontFamily: 'system-ui, sans-serif',
      padding: '20px'
    }}>
      <h1 style={{ fontSize: '48px', marginBottom: '16px' }}>404</h1>
      <p style={{ fontSize: '18px', color: '#666' }}>This page could not be found.</p>
      <a 
        href="/" 
        style={{
          marginTop: '24px',
          padding: '12px 24px',
          backgroundColor: '#667eea',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '8px'
        }}
      >
        Go back home
      </a>
    </div>
  );
}

