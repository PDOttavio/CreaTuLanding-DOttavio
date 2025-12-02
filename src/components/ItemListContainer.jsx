const containerStyle = {
  maxWidth: '1280px',
  margin: '0 auto',
  padding: '48px 16px'
};

const cardStyle = {
  background: 'linear-gradient(to right, #fce7f3, #f3e8ff)',
  borderRadius: '8px',
  boxShadow: '0 20px 25px rgba(0, 0, 0, 0.1)',
  padding: '32px',
  textAlign: 'center'
};

const titleStyle = {
  fontSize: '36px',
  fontWeight: 'bold',
  color: '#be185d',
  marginBottom: '16px'
};

const descriptionStyle = {
  color: '#374151',
  fontSize: '18px'
};

const ItemListContainer = ({ greeting }) => {
  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={titleStyle}>
          {greeting}
        </h2>
        <p style={descriptionStyle}>
          Próximamente encontrarás aquí nuestro catálogo completo de productos
        </p>
      </div>
    </div>
  );
};

export default ItemListContainer;