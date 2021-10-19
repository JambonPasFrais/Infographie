/*Pour le cercle, nous avons utilisé en grande partie le squelette de l'exercice 1*/

const scene = new THREE.Scene();//Scène sur laquelle nous allons afficher nos différentes figures
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );//Création d'une caméra ou d'un "point de vue" pour regarder la scène et donc nos figures

const renderer = new THREE.WebGLRenderer(); //Outil qui génère les graphiques des figures, en l'occurence les points
renderer.setSize( window.innerWidth, window.innerHeight );//Adaptation de ce rendu à la taille de la fenêtre
document.body.appendChild( renderer.domElement ); //création de la scène

/*Nous avons cependant modifié la méthode "PointBasicMaterial" car elle n'offrait pas une bonne nettetée à nos figures*/
const material = new THREE.LineBasicMaterial({
    color: 0xd9d397//Couleur de notre cercle
});

const points = []; // tableau de points

/*Formule pour le cercle*/
for ( let i = 0; i <= 360; i ++ ) {

    const x = 4*Math.cos(i*(Math.PI/180));
    const y = 4*Math.sin(i*Math.PI/180);

    points.push(new THREE.Vector2(x, y));//Chaque point est mis dans un vecteur qui va dans un tableau
}

const geometry = new THREE.BufferGeometry().setFromPoints( points );//On crée alors une "géométrie" à partir de ce tableau

const line = new THREE.Line( geometry, material ); //On utilise cette géométrie ainsi que le matériel "LineBasicMaterial" pour créer une ligne continue qui va prendre la forume du cerlce
scene.add( line );//On ajoute la ligne à la scène
camera.position.setZ(8);//Changement de point de vu pour la caméra
renderer.render( scene, camera );//Actualisation de la scène