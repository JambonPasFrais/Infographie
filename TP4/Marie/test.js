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

let floor1 = [];
let floor2 = [];

/**** coordonnées floor1 ****/

floor1.push(new THREE.Vector3(-18.7, 0.9, 0));
floor1.push(new THREE.Vector3(-11.5, 0.2, 6.5));
floor1.push(new THREE.Vector3(11.5, 0.1, 6.2));
floor1.push(new THREE.Vector3(18, 0.9, 0));
floor1.push(new THREE.Vector3(11.5, 0.1, -6.5));
floor1.push(new THREE.Vector3(-11.5, 0.2, -6.3));
floor1.push(new THREE.Vector3(-18.7, 0.9, 0));

/**** coordonnées floor2 ****/

floor2.push(new THREE.Vector3(22.3, 10, 0));
floor2.push(new THREE.Vector3(18, 10, -1));
floor2.push(new THREE.Vector3(11.5, 10, -9.7));
floor2.push(new THREE.Vector3(-11.5, 10, -9.7));
floor2.push(new THREE.Vector3(-18.7, 10, -1));
floor2.push(new THREE.Vector3(-23, 10, 0));
floor2.push(new THREE.Vector3(-18.7, 10, 1));
floor2.push(new THREE.Vector3(-11.5, 10, 10));
floor2.push(new THREE.Vector3(11.5, 10, 10));
floor2.push(new THREE.Vector3(18, 10, 1));

floor2.push(new THREE.Vector3(18, 0.9, 0));
floor2.push(new THREE.Vector3(11.5, 0.1, -6.5));
floor2.push(new THREE.Vector3(-11.5, 0.2, -6.3));
floor2.push(new THREE.Vector3(-18.7, 0.9, 0));
floor2.push(new THREE.Vector3(-11.5, 0.2, 6.5));
floor2.push(new THREE.Vector3(11.5, 0.1, 6.2));
floor2.push(new THREE.Vector3(18, 0.9, 0));

camera.position.setZ(20);
camera.rotation.y = 1.6;
camera.position.z = 100;

/**** Création des courbes ****/

for(let i = 0; i < floor1.length - 1; i+=1){
    createPolygon([floor1[i],floor1[i+1],floor1[floor1.length-i-1]]);
}
createBezierCurve(floor1);
let vectorN1 = [0,1,2,3,4,5,6,7,8,9,10];
//vectorN = [t0, ..., t(m+nb points)]
createBspline(floor1, 3, vectorN1);

/*for(let i = 0; i < floor2.length - 1; i+=1){
    createPolygon([floor2[i],floor2[i+1],floor2[floor2.length-i-1]]);
}*/

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

    //geometry.computeVertexNormals();
    //Utilisation de cette géométrie ainsi que le matériel pour créer le tracé du polygone de contrôle
    let material = new THREE.MeshBasicMaterial({color: 0x737373, side: THREE.DoubleSide });
    material.opacity = 1;
    let mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    return mesh;
}

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
    for(let i = 0; i < pointsSpline.length - 1; i+=1){
        let geometry = new THREE.BufferGeometry().setFromPoints([pointsSpline[i],pointsSpline[i+1],pointsSpline[pointsSpline.length-i-1]]);
        //Utilisation de cette géométrie ainsi que le matériel pour créer le tracé de la courbe de Bézier
        let material = new THREE.MeshBasicMaterial({color: 'yellow', side: THREE.DoubleSide });
        material.opacity = 1;
        let mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);
    }
    return 1;
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


