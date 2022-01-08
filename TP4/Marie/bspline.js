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

/**** Création des courbes bSpline ****/

let m = 3;

let vectorN0 = [];
//vectorN = [t0, ..., t(m+nb points)]
for(let count0 = 0; count0 < floor0.length + m + 1; count0++){
    vectorN0.push(count0);
}
createBspline(floor0, m, vectorN0);

let vectorN10 = [];
for(let count10 = 0; count10 < floor10.length + m + 1; count10++){
    vectorN10.push(count10);
}
createBspline(floor10, m, vectorN10);
createBspline(floor10der, m, vectorN10);

let vectorN20 = [];
for(let count20 = 0; count20 < floor20.length + m + 1; count20++){
    vectorN20.push(count20);
}
createBspline(floor20, m, vectorN20);
createBspline(floor20der, m, vectorN20);

let vectorN30 = [];
for(let count30 = 0; count30 < floor30.length + m + 1; count30++){
    vectorN30.push(count30);
}
createBspline(floor30, m, vectorN30);
createBspline(floor30der, m, vectorN30);

let vectorN36 = [];
for(let count36 = 0; count36 < floor36.length + m + 1; count36++){
    vectorN36.push(count36);
}
createBspline(floor36, m, vectorN36);
createBspline(floor36der, m, vectorN36);

let vectorN40 = [];
for(let count40 = 0; count40 < floor40.length + m + 1; count40++){
    vectorN40.push(count40);
}
createBspline(floor40, m, vectorN40);
createBspline(floor40der, m, vectorN40);

let vectorN45 = [];
for(let count45 = 0; count45 < floor45.length + m + 1; count45++){
    vectorN45.push(count45);
}
createBspline(floor45, m, vectorN45);
createBspline(floor45der, m, vectorN45);

let vectorN50 = [];
for(let count50 = 0; count50 < floor50.length + m + 1; count50++){
    vectorN50.push(count50);
}
createBspline(floor50, m, vectorN50);
createBspline(floor50der, m, vectorN50);

let vectorNfinal = [];
//vectorN = [t0, ..., t(m+nb points)]
for(let countfinal = 0; countfinal < finalfloor.length + m + 1; countfinal++){
    vectorNfinal.push(countfinal);
}
createBspline(finalfloor, m, vectorNfinal);

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


