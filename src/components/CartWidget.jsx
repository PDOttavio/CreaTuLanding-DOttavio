const cartStyle = {
  position: 'relative',
  cursor: 'pointer',
  fontSize: '24px'
};

const badgeStyle = {
  position: 'absolute',
  top: '-8px',
  right: '-8px',
  backgroundColor: '#ef4444',
  color: 'white',
  fontSize: '12px',
  fontWeight: 'bold',
  borderRadius: '50%',
  width: '20px',
  height: '20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

const CartWidget = () => {
  return (
    <div style={cartStyle}>
      🛒
      <span style={badgeStyle}>3</span>
    </div>
  );
};

export default CartWidget;