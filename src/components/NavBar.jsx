import CartWidget from './CartWidget';

const navStyle = {
  nav: {
    backgroundColor: '#ec4899',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '0'
  },
  container: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 16px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '64px'
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: 'white',
    margin: 0
  },
  links: {
    display: 'flex',
    gap: '32px',
    listStyle: 'none',
    margin: 0,
    padding: 0
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    transition: 'color 0.3s',
    cursor: 'pointer'
  }
};

const NavBar = () => {
  return (
    <nav style={navStyle.nav}>
      <div style={navStyle.container}>
        <h1 style={navStyle.title}>🧁 Dulce Magia</h1>
        
        <ul style={navStyle.links}>
          <li>
            <a href="#inicio" style={navStyle.link} onMouseOver={(e) => e.target.style.color = '#fce7f3'} onMouseOut={(e) => e.target.style.color = 'white'}>
              Inicio
            </a>
          </li>
          <li>
            <a href="#productos" style={navStyle.link} onMouseOver={(e) => e.target.style.color = '#fce7f3'} onMouseOut={(e) => e.target.style.color = 'white'}>
              Productos
            </a>
          </li>
          <li>
            <a href="#nosotros" style={navStyle.link} onMouseOver={(e) => e.target.style.color = '#fce7f3'} onMouseOut={(e) => e.target.style.color = 'white'}>
              Nosotros
            </a>
          </li>
          <li>
            <a href="#contacto" style={navStyle.link} onMouseOver={(e) => e.target.style.color = '#fce7f3'} onMouseOut={(e) => e.target.style.color = 'white'}>
              Contacto
            </a>
          </li>
        </ul>
        
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;