//Librairies
import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Setup

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer(); //Outil qui génère les graphiques des figures, en l'occurence les points
renderer.setSize(window.innerWidth, window.innerHeight);//Adaptation de ce rendu à la taille de la fenêtre
document.body.appendChild(renderer.domElement); //création de la scène

camera.position.setZ(10);
camera.position.setX(-3);

renderer.render(scene, camera);

//Texture
const loader = new THREE.TextureLoader();

/*Précédent TPs */
const material = new THREE.MeshBasicMaterial({
  color: 'yellow', //Couleur du polygone de contrôle
});
material.opacity = 0.5;
const material2 = new THREE.MeshBasicMaterial({
  color: 0x97d9d3 //Couleur de la courbe de Bézier
});

/**** new ****/

                     //degré -> vérifier que m est possible

/*Afin de bien redéfinir la scène chaque fois que la figure change nous avons décidé de mettre de base une courbe de bézier ainsi que quelques points de contrôles qui seront enlévés et remplacés par d'autres dès que l'utilisateur ajoute un point de contrôle*/
let vector3ArrayBasic = [];

/**** coordonnées de face ****/

/*for (let i = 0; i < 44; i+= 0.01){
    if (i <= 1){
        vector3ArrayBasic.push(new THREE.Vector3(0, i, 0));
        vector3ArrayBasic.push(new THREE.Vector3(11.5, i, 0));
        vector3ArrayBasic.push(new THREE.Vector3(11.5, i, -4));
        vector3ArrayBasic.push(new THREE.Vector3(-11.5, i, -4));
        vector3ArrayBasic.push(new THREE.Vector3(-11.5, i, 0));
        vector3ArrayBasic.push(new THREE.Vector3(0, i, 0));
    }
    else if (i <= 2){
        vector3ArrayBasic.push(new THREE.Vector3(0, i, 0));
        vector3ArrayBasic.push(new THREE.Vector3(15.5, i, 0));
        vector3ArrayBasic.push(new THREE.Vector3(15.5, i, -4));
        vector3ArrayBasic.push(new THREE.Vector3(-15.5, i, -4));
        vector3ArrayBasic.push(new THREE.Vector3(-15.5, i, 0));
        vector3ArrayBasic.push(new THREE.Vector3(0, i, 0));

    }
    else if (i <= 5){
        vector3ArrayBasic.push(new THREE.Vector3(0, i, 0));
        vector3ArrayBasic.push(new THREE.Vector3(17.5, i, 0));
        vector3ArrayBasic.push(new THREE.Vector3(17.5, i, -4));
        vector3ArrayBasic.push(new THREE.Vector3(-17.5, i, -4));
        vector3ArrayBasic.push(new THREE.Vector3(-17.5, i, 0));
        vector3ArrayBasic.push(new THREE.Vector3(0, i, 0));
    }
    else if (i <= 7){
        vector3ArrayBasic.push(new THREE.Vector3(0, i, 0));
        vector3ArrayBasic.push(new THREE.Vector3(18.5, i, 0));
        vector3ArrayBasic.push(new THREE.Vector3(18.5, i, -4));
        vector3ArrayBasic.push(new THREE.Vector3(-18.5, i, -4));
        vector3ArrayBasic.push(new THREE.Vector3(-18.5, i, 0));
        vector3ArrayBasic.push(new THREE.Vector3(0, i, 0));
    }
    else if (i <= 14){
        vector3ArrayBasic.push(new THREE.Vector3(0, i, 0));
        vector3ArrayBasic.push(new THREE.Vector3(19.5, i, 0));
        vector3ArrayBasic.push(new THREE.Vector3(19.5, i, -4));
        vector3ArrayBasic.push(new THREE.Vector3(-19.5, i, -4));
        vector3ArrayBasic.push(new THREE.Vector3(-19.5, i, 0));
        vector3ArrayBasic.push(new THREE.Vector3(0, i, 0));
    }
    else if (i <= 20){
        vector3ArrayBasic.push(new THREE.Vector3(0, i, 0));
        vector3ArrayBasic.push(new THREE.Vector3(19, i, 0));
        vector3ArrayBasic.push(new THREE.Vector3(19, i, -4));
        vector3ArrayBasic.push(new THREE.Vector3(-19, i, -4));
        vector3ArrayBasic.push(new THREE.Vector3(-19, i, 0));
        vector3ArrayBasic.push(new THREE.Vector3(0, i, 0));
    }
    else if (i <= 22){
        vector3ArrayBasic.push(new THREE.Vector3(0, i, 0));
        vector3ArrayBasic.push(new THREE.Vector3(18.5, i, 0));
        vector3ArrayBasic.push(new THREE.Vector3(18.5, i, -4));
        vector3ArrayBasic.push(new THREE.Vector3(-18.5, i, -4));
        vector3ArrayBasic.push(new THREE.Vector3(-18.5, i, 0));
        vector3ArrayBasic.push(new THREE.Vector3(0, i, 0));
    }
    else if (i <= 28){
        vector3ArrayBasic.push(new THREE.Vector3(0, i, 0));
        vector3ArrayBasic.push(new THREE.Vector3(14.5, i, 0));
        vector3ArrayBasic.push(new THREE.Vector3(14.5, i, -4));
        vector3ArrayBasic.push(new THREE.Vector3(-14.5, i, -4));
        vector3ArrayBasic.push(new THREE.Vector3(-14.5, i, 0));
        vector3ArrayBasic.push(new THREE.Vector3(0, i, 0));
    }
    else if (i <= 32){
        vector3ArrayBasic.push(new THREE.Vector3(0, i, 0));
        vector3ArrayBasic.push(new THREE.Vector3(9.5, i, 0));
        vector3ArrayBasic.push(new THREE.Vector3(9.5, i, -4));
        vector3ArrayBasic.push(new THREE.Vector3(-9.5, i, -4));
        vector3ArrayBasic.push(new THREE.Vector3(-9.5, i, 0));
        vector3ArrayBasic.push(new THREE.Vector3(0, i, 0));
    }
    else if (i <= 35){
        vector3ArrayBasic.push(new THREE.Vector3(0, i, 0));
        vector3ArrayBasic.push(new THREE.Vector3(5.5, i, 0));
        vector3ArrayBasic.push(new THREE.Vector3(5.5, i, -4));
        vector3ArrayBasic.push(new THREE.Vector3(-5.5, i, -4));
        vector3ArrayBasic.push(new THREE.Vector3(-5.5, i, 0));
        vector3ArrayBasic.push(new THREE.Vector3(0, i, 0));
    }
    else if (i <= 37){
        vector3ArrayBasic.push(new THREE.Vector3(0, i, 0));
        vector3ArrayBasic.push(new THREE.Vector3(3.5, i, 0));
        vector3ArrayBasic.push(new THREE.Vector3(3.5, i, -4));
        vector3ArrayBasic.push(new THREE.Vector3(-3.5, i, -4));
        vector3ArrayBasic.push(new THREE.Vector3(-3.5, i, 0));
        vector3ArrayBasic.push(new THREE.Vector3(0, i, 0));
    }
    else if (i <= 40){
        vector3ArrayBasic.push(new THREE.Vector3(0, i, 0));
        vector3ArrayBasic.push(new THREE.Vector3(2.5, i, 0));
        vector3ArrayBasic.push(new THREE.Vector3(2.5, i, -4));
        vector3ArrayBasic.push(new THREE.Vector3(-4.5, i, -4));
        vector3ArrayBasic.push(new THREE.Vector3(-4.5, i, 0));
        vector3ArrayBasic.push(new THREE.Vector3(0, i, 0));
    }
    else if (i <= 49){
        vector3ArrayBasic.push(new THREE.Vector3(0, i, 0));
        vector3ArrayBasic.push(new THREE.Vector3(2.5, i, 0));
        vector3ArrayBasic.push(new THREE.Vector3(2.5, i, -4));
        vector3ArrayBasic.push(new THREE.Vector3(-4.5, i, -4));
        vector3ArrayBasic.push(new THREE.Vector3(-4.5, i, 0));
        vector3ArrayBasic.push(new THREE.Vector3(0, i, 0));   
    }
}*/

vector3ArrayBasic.push(new THREE.Vector3(0, 0, 0));
vector3ArrayBasic.push(new THREE.Vector3(11.5, 0, 0));
vector3ArrayBasic.push(new THREE.Vector3(15.5, 2, 0));
vector3ArrayBasic.push(new THREE.Vector3(17.5, 5, 0));
vector3ArrayBasic.push(new THREE.Vector3(18.5, 7, 0));
vector3ArrayBasic.push(new THREE.Vector3(19.5, 14, 0));
vector3ArrayBasic.push(new THREE.Vector3(19, 20, 0));
vector3ArrayBasic.push(new THREE.Vector3(18.5, 22, 0));
vector3ArrayBasic.push(new THREE.Vector3(14.5, 28, 0));
vector3ArrayBasic.push(new THREE.Vector3(9.5, 32, 0));
vector3ArrayBasic.push(new THREE.Vector3(5.5, 35, 0));
vector3ArrayBasic.push(new THREE.Vector3(3.5, 37, 0));
vector3ArrayBasic.push(new THREE.Vector3(2.5, 40, 0));
vector3ArrayBasic.push(new THREE.Vector3(1, 49, 0));

vector3ArrayBasic.push(new THREE.Vector3(-1, 49, 0));
vector3ArrayBasic.push(new THREE.Vector3(-2.5, 40, 0));
vector3ArrayBasic.push(new THREE.Vector3(-3.5, 37, 0));
vector3ArrayBasic.push(new THREE.Vector3(-5.5, 35, 0));
vector3ArrayBasic.push(new THREE.Vector3(-9.5, 32, 0));
vector3ArrayBasic.push(new THREE.Vector3(-14.5, 28, 0));
vector3ArrayBasic.push(new THREE.Vector3(-18.5, 22, 0));
vector3ArrayBasic.push(new THREE.Vector3(-19, 20, 0));
vector3ArrayBasic.push(new THREE.Vector3(-19.5, 14, 0));
vector3ArrayBasic.push(new THREE.Vector3(-18.5, 7, 0));
vector3ArrayBasic.push(new THREE.Vector3(-17.5, 5, 0));
vector3ArrayBasic.push(new THREE.Vector3(-15.5, 2, 0));
vector3ArrayBasic.push(new THREE.Vector3(-11.5, 0, 0));
vector3ArrayBasic.push(new THREE.Vector3(0, 0, 0));

/**** coordonnées de derrière ****/

vector3ArrayBasic.push(new THREE.Vector3(0, 0, -4));
vector3ArrayBasic.push(new THREE.Vector3(11.5, 0, -4));
vector3ArrayBasic.push(new THREE.Vector3(15.5, 2, -4));
vector3ArrayBasic.push(new THREE.Vector3(17.5, 5, -4));
vector3ArrayBasic.push(new THREE.Vector3(18.5, 7, -4));
vector3ArrayBasic.push(new THREE.Vector3(19.5, 14, -4));
vector3ArrayBasic.push(new THREE.Vector3(19, 20, -4));
vector3ArrayBasic.push(new THREE.Vector3(18.5, 22, -4));
vector3ArrayBasic.push(new THREE.Vector3(14.5, 28, -4));
vector3ArrayBasic.push(new THREE.Vector3(9.5, 32, -4));
vector3ArrayBasic.push(new THREE.Vector3(5.5, 35, -4));
vector3ArrayBasic.push(new THREE.Vector3(3.5, 37, -4));
vector3ArrayBasic.push(new THREE.Vector3(2.5, 40, -4));
vector3ArrayBasic.push(new THREE.Vector3(1, 49, -4));

vector3ArrayBasic.push(new THREE.Vector3(-1, 49, -4));
vector3ArrayBasic.push(new THREE.Vector3(-2.5, 40, -4));
vector3ArrayBasic.push(new THREE.Vector3(-3.5, 37, -4));
vector3ArrayBasic.push(new THREE.Vector3(-5.5, 35, -4));
vector3ArrayBasic.push(new THREE.Vector3(-9.5, 32, -4));
vector3ArrayBasic.push(new THREE.Vector3(-14.5, 28, -4));
vector3ArrayBasic.push(new THREE.Vector3(-18.5, 22, -4));
vector3ArrayBasic.push(new THREE.Vector3(-19, 20, -4));
vector3ArrayBasic.push(new THREE.Vector3(-19.5, 14, -4));
vector3ArrayBasic.push(new THREE.Vector3(-18.5, 7, -4));
vector3ArrayBasic.push(new THREE.Vector3(-17.5, 5, -4));
vector3ArrayBasic.push(new THREE.Vector3(-15.5, 2, -4));
vector3ArrayBasic.push(new THREE.Vector3(-11.5, 0, -4));
vector3ArrayBasic.push(new THREE.Vector3(0, 0, -4));

camera.position.setZ(20);
camera.rotation.y = 1.6;
camera.position.z = 100;

/**** Création des courbes ****/
createPolygon(vector3ArrayBasic);
createBezierCurve(vector3ArrayBasic);
//createBspline(vector3ArrayBasic, m, vectorN);

/*Création du décors */

/*Sun*/
const sun = new THREE.Mesh(
    new THREE.SphereGeometry(15,32,16),
    new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("sun.jpeg") })
)

sun.position.x = -20;
sun.position.y = 50;
sun.position.z = -100;

scene.add(sun);



/**** Polygone de Contrôle ****/

function createPolygon(tabOfPoints) {
    //Création d'une "géométrie" pour le polygone de contrôle
    let geometry = new THREE.BufferGeometry().setFromPoints(tabOfPoints);
    //Utilisation de cette géométrie ainsi que le matériel pour créer le tracé du polygone de contrôle
    let line = new THREE.Line(geometry, material);
    line.name = "polygoneDeControle";
    //Ajout du tracé à la scène
    scene.add(line);
    return line;
}

/**** Courbe de Bézier ****/

function createBezierCurve(tabOfPoints){
    //Calcul de la courbe de Bézier en fonction des points de l'utilisateur
    let pointsBezier = bezierCurve(tabOfPoints);
    //console.log(pointsBezier);
    //Création d'une "géométrie" pour la courbe de Bézier
    let geometry = new THREE.BufferGeometry().setFromPoints(pointsBezier);
    //Utilisation de cette géométrie ainsi que le matériel pour créer le tracé de la courbe de Bézier
    let curve = new THREE.Line(geometry, material2);
    curve.name = "courbeDeBezier"
    //Ajout du tracé à la scène
    scene.add(curve);
    return curve;
}

//Création de la fonction factorielle
function factorial(n) {
    if (n < 0) return;
    if (n < 2) return 1;
    return n * factorial(n - 1);
}

//Création de la fonction qui calcule le coefficient binomial
function binomialCoefficient(n, p) {
    return (factorial(n) / (factorial(p) * factorial(n - p)));
}

//Création de la fonction qui s'occupe de la courbe de Bézier
function bezierCurve(points) {
    let n = points.length - 1;
    let curvePoints = [];
    for (let t = 0; t <= 1; t += 0.0001) {

        let p = { x: 0, y: 0, z: 0 } //Création d'un objet, plus facile à manipuler

        for (let i = 0; i <= n; i++) {
            //Définition de la courbe de Bézier avec le polynôme de Bernstein
            let bezier = binomialCoefficient(n, i) * Math.pow((1 - t), (n - i)) * Math.pow(t, i);
            //Multiplication par les coefficients associés aux points
            let px = points[i].x * bezier;
            let py = points[i].y * bezier;
            let pz = points[i].z * bezier;
            //Rentrée des points de la courbes de Bézier dans l'objet p
            p.x += px;
            p.y += py;
            p.z += pz;
        }
        //Rentrée des points de la courbe de Bézier de le tableau adapté
        curvePoints.push(p);
    }
    return curvePoints;
}

/**** Courbe B-SPLINE ****/

function createBspline(tabOfPoints, degre, knots){
  //Calcul de la courbe B-SPLINE en fonction des points de l'utilisateur
  let pointsSpline = Bspline(tabOfPoints, degre, knots);
  //Création d'une "géométrie" pour la courbe
  let geometry = new THREE.BufferGeometry().setFromPoints(pointsSpline);
  //Utilisation de cette géométrie ainsi que le matériel pour créer le tracé de la courbe
  let curve = new THREE.Line(geometry, material2);
  curve.name = "courbeDeSpline"
  //Ajout du tracé à la scène
  scene.add(curve);
  return curve;
}

//Création de la fonction qui s'occupe de la courbe B spline
function Bspline(points, degree, knots) {
  /**** new ****/
  let n = points.length - 1;
  let curvePoints = [];

  if (degree < 1){
      alert("Le degré n'est pas bon"); 
      return;
  } 
  if (degree > (n - 1)){
      alert("Merci de changer le degré"); 
      return;
  } 
  let vart;

  for (let t = knots[degree]; t <= knots[points.length]; t += 0.1) {
      //Création d'un objet, plus facile à manipuler
      ('t = ' + t)
      let p = {x: 0, y: 0, z: 0}
      for (let i = 0; i < n + 1; i++) {
          let px = points[i].x * N(i,degree,knots,t);
          let py = points[i].y * N(i,degree,knots,t);
          let pz = points[i].z * N(i,degree,knots,t);
          //Rentrée des points de la courbes B spline dans l'objet p
          p.x += px;
          p.y += py;
          p.z += pz;
      }
      //Rentrée des points de la courbe de Bézier de le tableau adapté
      curvePoints.push(p);
  }
  (curvePoints);
  return curvePoints;
}

function N(i,m,knots,t){
  let res, tmp1, tmp2;
  if(m == 0){
      if ((knots[i] <= t) && (t < knots[i + 1])) {
          res = 1;
      } else {
          res = 0;
      }
  }
  else{

      tmp1 = ((t - knots[i]) / (knots[i + m] - knots[i])) * N(i,m-1,knots,t);

      //attention aux noeuds multiples, vérifier que dénominateur différent de 0

      tmp2 = ((knots[i + m + 1] - t) / (knots[i + m + 1] - knots[i+1]))*N(i+1,m-1,knots,t);

      return  tmp1 + tmp2;
  }
  return res;
}

/*Fin précédents TPs */

// Helpers

//La grille
const gridHelper = new THREE.GridHelper(200, 50);
scene.add(gridHelper)

//Ce qui permet de contrôler la caméra
const controls = new OrbitControls(camera, renderer.domElement);

// Background
const spaceTexture = new THREE.TextureLoader().load('space.jpg');
scene.background = spaceTexture;

let x = 0;

// Boucle d'animation (Normalement pas besoin d'y toucher)
function animate() {
  requestAnimationFrame(animate);
    
  sun.rotation.y -= 0.01;


  controls.update();//Permet d'actualiser les contrôles dans la boucle itérative

  renderer.render(scene, camera);
}

animate();


