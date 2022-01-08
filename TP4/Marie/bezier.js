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

let floor0 = [];
let floor10 = [];
let floor10der = [];
let floor20 = [];
let floor20der = [];
let floor30 = [];
let floor30der = [];
let floor36 = [];
let floor36der = [];
let floor40 = [];
let floor40der = [];
let floor45 = [];
let floor45der = [];
let floor50 = [];
let floor50der = [];
let finalfloor = [];

/**** coordonnées floor0 ****/

floor0.push(new THREE.Vector3(-18.7, 0.9, 0));
floor0.push(new THREE.Vector3(-11.5, 0.2, 6.5));
floor0.push(new THREE.Vector3(11.5, 0.1, 6.2));
floor0.push(new THREE.Vector3(18, 0.9, 0));
floor0.push(new THREE.Vector3(11.5, 0.1, -6.5));
floor0.push(new THREE.Vector3(-11.5, 0.2, -6.3));
floor0.push(new THREE.Vector3(-18.7, 0.9, 0));

/**** coordonnées floor10 face avant et arrière ****/

floor10.push(new THREE.Vector3(22.3, 10, 0));
floor10.push(new THREE.Vector3(18, 10, 4));
floor10.push(new THREE.Vector3(11.5, 10, 10));
floor10.push(new THREE.Vector3(-11.5, 10, 10));
floor10.push(new THREE.Vector3(-18.7, 10, 4));
floor10.push(new THREE.Vector3(-23, 10, 0));

floor10.push(new THREE.Vector3(-18.7, 0.9, 0));
floor10.push(new THREE.Vector3(-11.5, 0.2, 6.5));
floor10.push(new THREE.Vector3(11.5, 0.1, 6.2));
floor10.push(new THREE.Vector3(18, 0.9, 0));

floor10der.push(new THREE.Vector3(22.3, 10, 0));
floor10der.push(new THREE.Vector3(18, 10, -4));
floor10der.push(new THREE.Vector3(11.5, 10, -9.7));
floor10der.push(new THREE.Vector3(-11.5, 10, -9.7));
floor10der.push(new THREE.Vector3(-18.7, 10, -4));
floor10der.push(new THREE.Vector3(-23, 10, 0));

floor10der.push(new THREE.Vector3(-18.7, 0.9, 0));
floor10der.push(new THREE.Vector3(-11.5, 0.2, -6.5));
floor10der.push(new THREE.Vector3(11.5, 0.1, -6.3));
floor10der.push(new THREE.Vector3(18, 0.9, 0));

/**** coordonnées floor20 face avant et arrière ****/

floor20.push(new THREE.Vector3(-22.7, 20, 0));
floor20.push(new THREE.Vector3(-18.7, 20, 4));
floor20.push(new THREE.Vector3(-11.5, 20, 9.5));
floor20.push(new THREE.Vector3(11.5, 20, 9.5));
floor20.push(new THREE.Vector3(18.7, 20, 4));
floor20.push(new THREE.Vector3(22.3, 20, 0));

floor20.push(new THREE.Vector3(22.3, 10, 0));
floor20.push(new THREE.Vector3(18, 10, 4));
floor20.push(new THREE.Vector3(11.5, 10, 10));
floor20.push(new THREE.Vector3(-11.5, 10, 10));
floor20.push(new THREE.Vector3(-18.7, 10, 4));
floor20.push(new THREE.Vector3(-23, 10, 0));

floor20der.push(new THREE.Vector3(-22.7, 20, 0));
floor20der.push(new THREE.Vector3(-18.7, 20, -4));
floor20der.push(new THREE.Vector3(-11.5, 20, -9.5));
floor20der.push(new THREE.Vector3(11.5, 20, -9.5));
floor20der.push(new THREE.Vector3(18.7, 20, -4));
floor20der.push(new THREE.Vector3(22.3, 20, 0));

floor20der.push(new THREE.Vector3(22.3, 10, 0));
floor20der.push(new THREE.Vector3(18, 10, -4));
floor20der.push(new THREE.Vector3(11.5, 10, -9.7));
floor20der.push(new THREE.Vector3(-11.5, 10, -9.7));
floor20der.push(new THREE.Vector3(-18.7, 10, -4));
floor20der.push(new THREE.Vector3(-23, 10, 0));

/**** coordonnées floor30 face avant et arrière ****/

floor30.push(new THREE.Vector3(14,30,0));
floor30.push(new THREE.Vector3(11.5,30,4));
floor30.push(new THREE.Vector3(6.5,30,8.3));
floor30.push(new THREE.Vector3(-6.5,30,8.3));
floor30.push(new THREE.Vector3(-11.5,30,4));
floor30.push(new THREE.Vector3(-14.5,30,0));

floor30.push(new THREE.Vector3(-22.7, 20, 0));
floor30.push(new THREE.Vector3(-18.7, 20, 4));
floor30.push(new THREE.Vector3(-11.5, 20, 9.5));
floor30.push(new THREE.Vector3(11.5, 20, 9.5));
floor30.push(new THREE.Vector3(18.7, 20, 4));
floor30.push(new THREE.Vector3(22.3, 20, 0));

floor30der.push(new THREE.Vector3(14,30,0));
floor30der.push(new THREE.Vector3(11.5,30,-4));
floor30der.push(new THREE.Vector3(6.5,30,-8.3));
floor30der.push(new THREE.Vector3(-6.5,30,-8.3));
floor30der.push(new THREE.Vector3(-11.5,30,-4));
floor30der.push(new THREE.Vector3(-14.5,30,0));

floor30der.push(new THREE.Vector3(-22.7, 20, 0));
floor30der.push(new THREE.Vector3(-18.7, 20, -4));
floor30der.push(new THREE.Vector3(-11.5, 20, -9.5));
floor30der.push(new THREE.Vector3(11.5, 20, -9.5));
floor30der.push(new THREE.Vector3(18.7, 20, -4));
floor30der.push(new THREE.Vector3(22.3, 20, 0));

/**** coordonnées floor36 face avant et arrière ****/

floor36.push(new THREE.Vector3(-6,36,0));
floor36.push(new THREE.Vector3(-4,36,4));
floor36.push(new THREE.Vector3(-0.5,36,5));
floor36.push(new THREE.Vector3(0.5,36,5));
floor36.push(new THREE.Vector3(3.5,36,4));
floor36.push(new THREE.Vector3(5,36,0));

floor36.push(new THREE.Vector3(14,30,0));
floor36.push(new THREE.Vector3(11.5,30,4));
floor36.push(new THREE.Vector3(6.5,30,8.3));
floor36.push(new THREE.Vector3(-6.5,30,8.3));
floor36.push(new THREE.Vector3(-11.5,30,4));
floor36.push(new THREE.Vector3(-14.5,30,0));

floor36der.push(new THREE.Vector3(-6,36,0));
floor36der.push(new THREE.Vector3(-4,36,-4));
floor36der.push(new THREE.Vector3(-0.5,36,-5));
floor36der.push(new THREE.Vector3(0.5,36,-5));
floor36der.push(new THREE.Vector3(3.5,36,-4));
floor36der.push(new THREE.Vector3(5,36,0));

floor36der.push(new THREE.Vector3(14,30,0));
floor36der.push(new THREE.Vector3(11.5,30,-4));
floor36der.push(new THREE.Vector3(6.5,30,-8.3));
floor36der.push(new THREE.Vector3(-6.5,30,-8.3));
floor36der.push(new THREE.Vector3(-11.5,30,-4));
floor36der.push(new THREE.Vector3(-14.5,30,0));

/**** coordonnées floor40 face avant et arrière ****/

floor40.push(new THREE.Vector3(3.1,40,0));
floor40.push(new THREE.Vector3(2.1,40,2.5));
floor40.push(new THREE.Vector3(0.5,40,3.3));
floor40.push(new THREE.Vector3(-0.5,40,3.3));
floor40.push(new THREE.Vector3(-2.5,40,2.5));
floor40.push(new THREE.Vector3(-4,40,0));

floor40.push(new THREE.Vector3(-6,36,0));
floor40.push(new THREE.Vector3(-4,36,4));
floor40.push(new THREE.Vector3(-0.5,36,5));
floor40.push(new THREE.Vector3(0.5,36,5));
floor40.push(new THREE.Vector3(3.5,36,4));
floor40.push(new THREE.Vector3(5,36,0));

floor40der.push(new THREE.Vector3(3.1,40,0));
floor40der.push(new THREE.Vector3(2.1,40,-2.5));
floor40der.push(new THREE.Vector3(0.5,40,-3.3));
floor40der.push(new THREE.Vector3(-0.5,40,-3.3));
floor40der.push(new THREE.Vector3(-2.5,40,-2.5));
floor40der.push(new THREE.Vector3(-4,40,0));

floor40der.push(new THREE.Vector3(-6,36,0));
floor40der.push(new THREE.Vector3(-4,36,-4));
floor40der.push(new THREE.Vector3(-0.5,36,-5));
floor40der.push(new THREE.Vector3(0.5,36,-5));
floor40der.push(new THREE.Vector3(3.5,36,-4));
floor40der.push(new THREE.Vector3(5,36,0));

/**** coordonnées floor45 face avant et arrière ****/

floor45.push(new THREE.Vector3(-3.2,45,0));
floor45.push(new THREE.Vector3(-2,45.3,2));
floor45.push(new THREE.Vector3(-0.5,45.5,3));
floor45.push(new THREE.Vector3(0.5,45.5,3));
floor45.push(new THREE.Vector3(2,45.3,2));
floor45.push(new THREE.Vector3(3.1,45,0));

floor45.push(new THREE.Vector3(3.1,40,0));
floor45.push(new THREE.Vector3(2.1,40,2.5));
floor45.push(new THREE.Vector3(0.5,40,3.3));
floor45.push(new THREE.Vector3(-0.5,40,3.3));
floor45.push(new THREE.Vector3(-2.5,40,2.5));
floor45.push(new THREE.Vector3(-4,40,0));

floor45der.push(new THREE.Vector3(-3.2,45,0));
floor45der.push(new THREE.Vector3(-2,45.3,-2));
floor45der.push(new THREE.Vector3(-0.5,45.5,-3));
floor45der.push(new THREE.Vector3(0.5,45.5,-3));
floor45der.push(new THREE.Vector3(2,45.3,-2));
floor45der.push(new THREE.Vector3(3.1,45,0));

floor45der.push(new THREE.Vector3(3.1,40,0));
floor45der.push(new THREE.Vector3(2.1,40,-2.5));
floor45der.push(new THREE.Vector3(0.5,40,-3.3));
floor45der.push(new THREE.Vector3(-0.5,40,-3.3));
floor45der.push(new THREE.Vector3(-2.5,40,-2.5));
floor45der.push(new THREE.Vector3(-4,40,0));

/**** coordonnées floor50 face avant et arrière ****/

floor50.push(new THREE.Vector3(3.1,49.1,0));
floor50.push(new THREE.Vector3(2,49.3,2));
floor50.push(new THREE.Vector3(0.5,49.6,3));
floor50.push(new THREE.Vector3(-0.5,49.7,3));
floor50.push(new THREE.Vector3(-2,49.8,2));
floor50.push(new THREE.Vector3(-3.2,49,0));

floor50.push(new THREE.Vector3(-3.2,45,0));
floor50.push(new THREE.Vector3(-2,45.3,2));
floor50.push(new THREE.Vector3(-0.5,45.5,3));
floor50.push(new THREE.Vector3(0.5,45.5,3));
floor50.push(new THREE.Vector3(2,45.3,2));
floor50.push(new THREE.Vector3(3.1,45,0));

floor50der.push(new THREE.Vector3(3.1,49.1,0));
floor50der.push(new THREE.Vector3(2,49.3,-2));
floor50der.push(new THREE.Vector3(0.5,49.6,-3));
floor50der.push(new THREE.Vector3(-0.5,49.7,-3));
floor50der.push(new THREE.Vector3(-2,49.8,-2));
floor50der.push(new THREE.Vector3(-3.2,49,0));

floor50der.push(new THREE.Vector3(-3.2,45,0));
floor50der.push(new THREE.Vector3(-2,45.3,-2));
floor50der.push(new THREE.Vector3(-0.5,45.5,-3));
floor50der.push(new THREE.Vector3(0.5,45.5,-3));
floor50der.push(new THREE.Vector3(2,45.3,-2));
floor50der.push(new THREE.Vector3(3.1,45,0));

/**** coordonnées finalfloor face avant et arrière ****/

finalfloor.push(new THREE.Vector3(-3.2,49,0));
finalfloor.push(new THREE.Vector3(-2,49.8,2));
finalfloor.push(new THREE.Vector3(-0.5,49.7,3));
finalfloor.push(new THREE.Vector3(0.5,49.6,3));
finalfloor.push(new THREE.Vector3(2,49.3,2));
finalfloor.push(new THREE.Vector3(3.1,49.1,0));
finalfloor.push(new THREE.Vector3(2,49.3,-2));
finalfloor.push(new THREE.Vector3(0.5,49.6,-3));
finalfloor.push(new THREE.Vector3(-0.5,49.7,-3));
finalfloor.push(new THREE.Vector3(-2,49.8,-2));

camera.position.setZ(20);
camera.rotation.y = 1.6;
camera.position.z = 100;

/**** Création des courbes de Bézier ****/

createBezierCurve(floor0);
createBezierCurve(floor10);
createBezierCurve(floor10der);
createBezierCurve(floor20);
createBezierCurve(floor20der);
createBezierCurve(floor30);
createBezierCurve(floor30der);
createBezierCurve(floor36);
createBezierCurve(floor36der);
createBezierCurve(floor40);
createBezierCurve(floor40der);
createBezierCurve(floor45);
createBezierCurve(floor45der);
createBezierCurve(floor50);
createBezierCurve(floor50der);
createBezierCurve(finalfloor);

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

/**** Courbe de Bézier ****/

function createBezierCurve(tabOfPoints){
    //Calcul de la courbe de Bézier en fonction des points de l'utilisateur
    let pointsBezier = bezierCurve(tabOfPoints);
    for(let i = 0; i < pointsBezier.length - 1; i+=1){
        let geometry = new THREE.BufferGeometry().setFromPoints([pointsBezier[i],pointsBezier[i+1],pointsBezier[pointsBezier.length-i-1]]);
        //Utilisation de cette géométrie ainsi que le matériel pour créer le tracé de la courbe de Bézier
        let material = new THREE.MeshBasicMaterial({color: 0x97d9d3, side: THREE.DoubleSide });
        material.opacity = 1;
        let mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);
    }
    //console.log(pointsBezier);
    //Création d'une "géométrie" pour la courbe de Bézier

    return 1;
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
    for (let t = 0; t <= 1; t += 0.005) {

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


