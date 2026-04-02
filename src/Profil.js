// Profil.js
import PropTypes from 'prop-types';

function Profil({ utilisateur, taille }) {
  return (
    <div style={{ textAlign: 'center', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', marginTop: '10px' }}>
      <img
        src={utilisateur.photo}
        width={taille}
        alt={utilisateur.nom}
        style={{ borderRadius: '50%', objectFit: 'cover' }}
      />
      <h3 style={{ marginTop: '10px', color: '#333' }}>{utilisateur.nom}</h3>
    </div>
  );
}

Profil.propTypes = {
  utilisateur: PropTypes.shape({
    nom: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
  }).isRequired,
  taille: PropTypes.number,
};

Profil.defaultProps = {
  taille: 100,
};

export default Profil;
