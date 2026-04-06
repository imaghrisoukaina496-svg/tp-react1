// App.js
import HelloWorld from './HelloWorld';
import Greeting from './Greeting';
import Profil from './Profil';
import Voiture from './Voiture';
import ListeCourses from './ListeCourses';

function App() {
  const utilisateur = { nom: 'EMMANE', photo: '/user.png' };

  const courses1 = ['ANANAS', 'PECHES', 'FRAISE'];
  const courses2 = ['MILK', 'CHEESE', 'BUTTER', 'MIEL'];

  return (
    <div style={{ fontFamily: 'Arial', padding: '30px', maxWidth: '500px', margin: '0 auto' }}>

      <HelloWorld />
      <hr />

      <Greeting prenom="Maria" />
      <hr />

      <Profil utilisateur={utilisateur} taille={150} />
      <hr />

      <h2>Mes Voitures</h2>
      <Voiture marque="Audi" modele="Q8" couleur="Rouge" />
      <Voiture marque="Volkswagen" modele="T Rock" couleur="Blanche" />
      <Voiture marque="BMW" modele="Serie 3" couleur="Noire" />
      <hr />

      <h2>Liste de courses 1</h2>
      <ListeCourses elements={courses1} />

      <h2>Liste de courses 2</h2>
      <ListeCourses elements={courses2} />

    </div>
  );
}

export default App