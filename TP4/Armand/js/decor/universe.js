//Librairies
import '../../css/style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Water } from 'three/examples/jsm/objects/Water.js';
import { Sky } from 'three/examples/jsm/objects/Sky.js';


// Setup

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer(); //Outil qui génère les graphiques des figures, en l'occurence les points
renderer.setSize(window.innerWidth, window.innerHeight);//Adaptation de ce rendu à la taille de la fenêtre
document.body.appendChild(renderer.domElement); //création de la scène

camera.position.set(20, 130, -100);

renderer.render(scene, camera);

/*La Gourde*/

//hauteur
let gourdHeight = 25;

createPolygonGourd();

gourdHeight = 75;
createBezierGourd();

gourdHeight = 125;
createBsplineGourd();

//Fonctions
function createBezierGourd() {
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

    floor0.push(new THREE.Vector3(-18.7, 0.9 + gourdHeight, 0));
    floor0.push(new THREE.Vector3(-11.5, 0.2 + gourdHeight, 6.5));
    floor0.push(new THREE.Vector3(11.5, 0.1 + gourdHeight, 6.2));
    floor0.push(new THREE.Vector3(18, 0.9 + gourdHeight, 0));
    floor0.push(new THREE.Vector3(11.5, 0.1 + gourdHeight, -6.5));
    floor0.push(new THREE.Vector3(-11.5, 0.2 + gourdHeight, -6.3));
    floor0.push(new THREE.Vector3(-18.7, 0.9 + gourdHeight, 0));

    /**** coordonnées floor10 face avant et arrière ****/

    floor10.push(new THREE.Vector3(22.3, 10 + gourdHeight, 0));
    floor10.push(new THREE.Vector3(18, 10 + gourdHeight, 4));
    floor10.push(new THREE.Vector3(11.5, 10 + gourdHeight, 10));
    floor10.push(new THREE.Vector3(-11.5, 10 + gourdHeight, 10));
    floor10.push(new THREE.Vector3(-18.7, 10 + gourdHeight, 4));
    floor10.push(new THREE.Vector3(-23, 10 + gourdHeight, 0));

    floor10.push(new THREE.Vector3(-18.7, 0.9 + gourdHeight, 0));
    floor10.push(new THREE.Vector3(-11.5, 0.2 + gourdHeight, 6.5));
    floor10.push(new THREE.Vector3(11.5, 0.1 + gourdHeight, 6.2));
    floor10.push(new THREE.Vector3(18, 0.9 + gourdHeight, 0));

    floor10der.push(new THREE.Vector3(22.3, 10 + gourdHeight, 0));
    floor10der.push(new THREE.Vector3(18, 10 + gourdHeight, -4));
    floor10der.push(new THREE.Vector3(11.5, 10 + gourdHeight, -9.7));
    floor10der.push(new THREE.Vector3(-11.5, 10 + gourdHeight, -9.7));
    floor10der.push(new THREE.Vector3(-18.7, 10 + gourdHeight, -4));
    floor10der.push(new THREE.Vector3(-23, 10 + gourdHeight, 0));

    floor10der.push(new THREE.Vector3(-18.7, 0.9 + gourdHeight, 0));
    floor10der.push(new THREE.Vector3(-11.5, 0.2 + gourdHeight, -6.5));
    floor10der.push(new THREE.Vector3(11.5, 0.1 + gourdHeight, -6.3));
    floor10der.push(new THREE.Vector3(18, 0.9 + gourdHeight, 0));

    /**** coordonnées floor20 face avant et arrière ****/

    floor20.push(new THREE.Vector3(-22.7, 20 + gourdHeight, 0));
    floor20.push(new THREE.Vector3(-18.7, 20 + gourdHeight, 4));
    floor20.push(new THREE.Vector3(-11.5, 20 + gourdHeight, 9.5));
    floor20.push(new THREE.Vector3(11.5, 20 + gourdHeight, 9.5));
    floor20.push(new THREE.Vector3(18.7, 20 + gourdHeight, 4));
    floor20.push(new THREE.Vector3(22.3, 20 + gourdHeight, 0));

    floor20.push(new THREE.Vector3(22.3, 10 + gourdHeight, 0));
    floor20.push(new THREE.Vector3(18, 10 + gourdHeight, 4));
    floor20.push(new THREE.Vector3(11.5, 10 + gourdHeight, 10));
    floor20.push(new THREE.Vector3(-11.5, 10 + gourdHeight, 10));
    floor20.push(new THREE.Vector3(-18.7, 10 + gourdHeight, 4));
    floor20.push(new THREE.Vector3(-23, 10 + gourdHeight, 0));

    floor20der.push(new THREE.Vector3(-22.7, 20 + gourdHeight, 0));
    floor20der.push(new THREE.Vector3(-18.7, 20 + gourdHeight, -4));
    floor20der.push(new THREE.Vector3(-11.5, 20 + gourdHeight, -9.5));
    floor20der.push(new THREE.Vector3(11.5, 20 + gourdHeight, -9.5));
    floor20der.push(new THREE.Vector3(18.7, 20 + gourdHeight, -4));
    floor20der.push(new THREE.Vector3(22.3, 20 + gourdHeight, 0));

    floor20der.push(new THREE.Vector3(22.3, 10 + gourdHeight, 0));
    floor20der.push(new THREE.Vector3(18, 10 + gourdHeight, -4));
    floor20der.push(new THREE.Vector3(11.5, 10 + gourdHeight, -9.7));
    floor20der.push(new THREE.Vector3(-11.5, 10 + gourdHeight, -9.7));
    floor20der.push(new THREE.Vector3(-18.7, 10 + gourdHeight, -4));
    floor20der.push(new THREE.Vector3(-23, 10 + gourdHeight, 0));

    /**** coordonnées floor30 face avant et arrière ****/

    floor30.push(new THREE.Vector3(14, 30 + gourdHeight, 0));
    floor30.push(new THREE.Vector3(11.5, 30 + gourdHeight, 4));
    floor30.push(new THREE.Vector3(6.5, 30 + gourdHeight, 8.3));
    floor30.push(new THREE.Vector3(-6.5, 30 + gourdHeight, 8.3));
    floor30.push(new THREE.Vector3(-11.5, 30 + gourdHeight, 4));
    floor30.push(new THREE.Vector3(-14.5, 30 + gourdHeight, 0));

    floor30.push(new THREE.Vector3(-22.7, 20 + gourdHeight, 0));
    floor30.push(new THREE.Vector3(-18.7, 20 + gourdHeight, 4));
    floor30.push(new THREE.Vector3(-11.5, 20 + gourdHeight, 9.5));
    floor30.push(new THREE.Vector3(11.5, 20 + gourdHeight, 9.5));
    floor30.push(new THREE.Vector3(18.7, 20 + gourdHeight, 4));
    floor30.push(new THREE.Vector3(22.3, 20 + gourdHeight, 0));

    floor30der.push(new THREE.Vector3(14, 30 + gourdHeight, 0));
    floor30der.push(new THREE.Vector3(11.5, 30 + gourdHeight, -4));
    floor30der.push(new THREE.Vector3(6.5, 30 + gourdHeight, -8.3));
    floor30der.push(new THREE.Vector3(-6.5, 30 + gourdHeight, -8.3));
    floor30der.push(new THREE.Vector3(-11.5, 30 + gourdHeight, -4));
    floor30der.push(new THREE.Vector3(-14.5, 30 + gourdHeight, 0));

    floor30der.push(new THREE.Vector3(-22.7, 20 + gourdHeight, 0));
    floor30der.push(new THREE.Vector3(-18.7, 20 + gourdHeight, -4));
    floor30der.push(new THREE.Vector3(-11.5, 20 + gourdHeight, -9.5));
    floor30der.push(new THREE.Vector3(11.5, 20 + gourdHeight, -9.5));
    floor30der.push(new THREE.Vector3(18.7, 20 + gourdHeight, -4));
    floor30der.push(new THREE.Vector3(22.3, 20 + gourdHeight, 0));

    /**** coordonnées floor36 face avant et arrière ****/

    floor36.push(new THREE.Vector3(-6, 36 + gourdHeight, 0));
    floor36.push(new THREE.Vector3(-4, 36 + gourdHeight, 4));
    floor36.push(new THREE.Vector3(-0.5, 36, + gourdHeight, 5));
    floor36.push(new THREE.Vector3(0.5, 36 + gourdHeight, 5));
    floor36.push(new THREE.Vector3(3.5, 36 + gourdHeight, 4));
    floor36.push(new THREE.Vector3(5, 36 + gourdHeight, 0));

    floor36.push(new THREE.Vector3(14, 30 + gourdHeight, 0));
    floor36.push(new THREE.Vector3(11.5, 30 + gourdHeight, 4));
    floor36.push(new THREE.Vector3(6.5, 30 + gourdHeight, 8.3));
    floor36.push(new THREE.Vector3(-6.5, 30 + gourdHeight, 8.3));
    floor36.push(new THREE.Vector3(-11.5, 30 + gourdHeight, 4));
    floor36.push(new THREE.Vector3(-14.5, 30 + gourdHeight, 0));

    floor36der.push(new THREE.Vector3(-6, 36 + gourdHeight, 0));
    floor36der.push(new THREE.Vector3(-4, 36 + gourdHeight, -4));
    floor36der.push(new THREE.Vector3(-0.5, 36 + gourdHeight, -5));
    floor36der.push(new THREE.Vector3(0.5, 36 + gourdHeight, -5));
    floor36der.push(new THREE.Vector3(3.5, 36 + gourdHeight, -4));
    floor36der.push(new THREE.Vector3(5, 36 + gourdHeight, 0));

    floor36der.push(new THREE.Vector3(14, 30 + gourdHeight, 0));
    floor36der.push(new THREE.Vector3(11.5, 30 + gourdHeight, -4));
    floor36der.push(new THREE.Vector3(6.5, 30 + gourdHeight, -8.3));
    floor36der.push(new THREE.Vector3(-6.5, 30 + gourdHeight, -8.3));
    floor36der.push(new THREE.Vector3(-11.5, 30 + gourdHeight, -4));
    floor36der.push(new THREE.Vector3(-14.5, 30 + gourdHeight, 0));

    /**** coordonnées floor40 face avant et arrière ****/

    floor40.push(new THREE.Vector3(3.1, 40 + gourdHeight, 0));
    floor40.push(new THREE.Vector3(2.1, 40 + gourdHeight, 2.5));
    floor40.push(new THREE.Vector3(0.5, 40 + gourdHeight, 3.3));
    floor40.push(new THREE.Vector3(-0.5, 40 + gourdHeight, 3.3));
    floor40.push(new THREE.Vector3(-2.5, 40 + gourdHeight, 2.5));
    floor40.push(new THREE.Vector3(-4, 40 + gourdHeight, 0));

    floor40.push(new THREE.Vector3(-6, 36 + gourdHeight, 0));
    floor40.push(new THREE.Vector3(-4, 36 + gourdHeight, 4));
    floor40.push(new THREE.Vector3(-0.5, 36 + gourdHeight, 5));
    floor40.push(new THREE.Vector3(0.5, 36 + gourdHeight, 5));
    floor40.push(new THREE.Vector3(3.5, 36 + gourdHeight, 4));
    floor40.push(new THREE.Vector3(5, 36 + gourdHeight, 0));

    floor40der.push(new THREE.Vector3(3.1, 40 + gourdHeight, 0));
    floor40der.push(new THREE.Vector3(2.1, 40 + gourdHeight, -2.5));
    floor40der.push(new THREE.Vector3(0.5, 40 + gourdHeight, -3.3));
    floor40der.push(new THREE.Vector3(-0.5, 40 + gourdHeight, -3.3));
    floor40der.push(new THREE.Vector3(-2.5, 40 + gourdHeight, -2.5));
    floor40der.push(new THREE.Vector3(-4, 40 + gourdHeight, 0));

    floor40der.push(new THREE.Vector3(-6, 36 + gourdHeight, 0));
    floor40der.push(new THREE.Vector3(-4, 36 + gourdHeight, -4));
    floor40der.push(new THREE.Vector3(-0.5, 36 + gourdHeight, -5));
    floor40der.push(new THREE.Vector3(0.5, 36 + gourdHeight, -5));
    floor40der.push(new THREE.Vector3(3.5, 36 + gourdHeight, -4));
    floor40der.push(new THREE.Vector3(5, 36 + gourdHeight, 0));

    /**** coordonnées floor45 face avant et arrière ****/

    floor45.push(new THREE.Vector3(-3.2, 45 + gourdHeight, 0));
    floor45.push(new THREE.Vector3(-2, 45.3 + gourdHeight, 2));
    floor45.push(new THREE.Vector3(-0.5, 45.5 + gourdHeight, 3));
    floor45.push(new THREE.Vector3(0.5, 45.5 + gourdHeight, 3));
    floor45.push(new THREE.Vector3(2, 45.3 + gourdHeight, 2));
    floor45.push(new THREE.Vector3(3.1, 45 + gourdHeight, 0));

    floor45.push(new THREE.Vector3(3.1, 40 + gourdHeight, 0));
    floor45.push(new THREE.Vector3(2.1, 40 + gourdHeight, 2.5));
    floor45.push(new THREE.Vector3(0.5, 40 + gourdHeight, 3.3));
    floor45.push(new THREE.Vector3(-0.5, 40 + gourdHeight, 3.3));
    floor45.push(new THREE.Vector3(-2.5, 40 + gourdHeight, 2.5));
    floor45.push(new THREE.Vector3(-4, 40 + gourdHeight, 0));

    floor45der.push(new THREE.Vector3(-3.2, 45 + gourdHeight, 0));
    floor45der.push(new THREE.Vector3(-2, 45.3 + gourdHeight, -2));
    floor45der.push(new THREE.Vector3(-0.5, 45.5 + gourdHeight, -3));
    floor45der.push(new THREE.Vector3(0.5, 45.5 + gourdHeight, -3));
    floor45der.push(new THREE.Vector3(2, 45.3 + gourdHeight, -2));
    floor45der.push(new THREE.Vector3(3.1, 45 + gourdHeight, 0));

    floor45der.push(new THREE.Vector3(3.1, 40 + gourdHeight, 0));
    floor45der.push(new THREE.Vector3(2.1, 40 + gourdHeight, -2.5));
    floor45der.push(new THREE.Vector3(0.5, 40 + gourdHeight, -3.3));
    floor45der.push(new THREE.Vector3(-0.5, 40 + gourdHeight, -3.3));
    floor45der.push(new THREE.Vector3(-2.5, 40 + gourdHeight, -2.5));
    floor45der.push(new THREE.Vector3(-4, 40 + gourdHeight, 0));

    /**** coordonnées floor50 face avant et arrière ****/

    floor50.push(new THREE.Vector3(3.1, 49.1 + gourdHeight, 0));
    floor50.push(new THREE.Vector3(2, 49.3 + gourdHeight, 2));
    floor50.push(new THREE.Vector3(0.5, 49.6 + gourdHeight, 3));
    floor50.push(new THREE.Vector3(-0.5, 49.7 + gourdHeight, 3));
    floor50.push(new THREE.Vector3(-2, 49.8 + gourdHeight, 2));
    floor50.push(new THREE.Vector3(-3.2, 49 + gourdHeight, 0));

    floor50.push(new THREE.Vector3(-3.2, 45 + gourdHeight, 0));
    floor50.push(new THREE.Vector3(-2, 45.3 + gourdHeight, 2));
    floor50.push(new THREE.Vector3(-0.5, 45.5 + gourdHeight, 3));
    floor50.push(new THREE.Vector3(0.5, 45.5 + gourdHeight, 3));
    floor50.push(new THREE.Vector3(2, 45.3 + gourdHeight, 2));
    floor50.push(new THREE.Vector3(3.1, 45 + gourdHeight, 0));

    floor50der.push(new THREE.Vector3(3.1, 49.1 + gourdHeight, 0));
    floor50der.push(new THREE.Vector3(2, 49.3 + gourdHeight, -2));
    floor50der.push(new THREE.Vector3(0.5, 49.6 + gourdHeight, -3));
    floor50der.push(new THREE.Vector3(-0.5, 49.7 + gourdHeight, -3));
    floor50der.push(new THREE.Vector3(-2, 49.8 + gourdHeight, -2));
    floor50der.push(new THREE.Vector3(-3.2, 49 + gourdHeight, 0));

    floor50der.push(new THREE.Vector3(-3.2, 45 + gourdHeight, 0));
    floor50der.push(new THREE.Vector3(-2, 45.3 + gourdHeight, -2));
    floor50der.push(new THREE.Vector3(-0.5, 45.5 + gourdHeight, -3));
    floor50der.push(new THREE.Vector3(0.5, 45.5 + gourdHeight, -3));
    floor50der.push(new THREE.Vector3(2, 45.3 + gourdHeight, -2));
    floor50der.push(new THREE.Vector3(3.1, 45 + gourdHeight, 0));

    /**** coordonnées finalfloor face avant et arrière ****/

    finalfloor.push(new THREE.Vector3(-3.2, 49 + gourdHeight, 0));
    finalfloor.push(new THREE.Vector3(-2, 49.8 + gourdHeight, 2));
    finalfloor.push(new THREE.Vector3(-0.5, 49.7 + gourdHeight, 3));
    finalfloor.push(new THREE.Vector3(0.5, 49.6 + gourdHeight, 3));
    finalfloor.push(new THREE.Vector3(2, 49.3 + gourdHeight, 2));
    finalfloor.push(new THREE.Vector3(3.1, 49.1 + gourdHeight, 0));
    finalfloor.push(new THREE.Vector3(2, 49.3 + gourdHeight, -2));
    finalfloor.push(new THREE.Vector3(0.5, 49.6 + gourdHeight, -3));
    finalfloor.push(new THREE.Vector3(-0.5, 49.7 + gourdHeight, -3));
    finalfloor.push(new THREE.Vector3(-2, 49.8 + gourdHeight, -2));

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
}

function createBsplineGourd() {
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

    floor0.push(new THREE.Vector3(-18.7, 0.9 + gourdHeight, 0));
    floor0.push(new THREE.Vector3(-11.5, 0.2 + gourdHeight, 6.5));
    floor0.push(new THREE.Vector3(11.5, 0.1 + gourdHeight, 6.2));
    floor0.push(new THREE.Vector3(18, 0.9 + gourdHeight, 0));
    floor0.push(new THREE.Vector3(11.5, 0.1 + gourdHeight, -6.5));
    floor0.push(new THREE.Vector3(-11.5, 0.2 + gourdHeight, -6.3));
    floor0.push(new THREE.Vector3(-18.7, 0.9 + gourdHeight, 0));

    /**** coordonnées floor10 face avant et arrière ****/

    floor10.push(new THREE.Vector3(22.3, 10 + gourdHeight, 0));
    floor10.push(new THREE.Vector3(18, 10 + gourdHeight, 4));
    floor10.push(new THREE.Vector3(11.5, 10 + gourdHeight, 10));
    floor10.push(new THREE.Vector3(-11.5, 10 + gourdHeight, 10));
    floor10.push(new THREE.Vector3(-18.7, 10 + gourdHeight, 4));
    floor10.push(new THREE.Vector3(-23, 10 + gourdHeight, 0));

    floor10.push(new THREE.Vector3(-18.7, 0.9 + gourdHeight, 0));
    floor10.push(new THREE.Vector3(-11.5, 0.2 + gourdHeight, 6.5));
    floor10.push(new THREE.Vector3(11.5, 0.1 + gourdHeight, 6.2));
    floor10.push(new THREE.Vector3(18, 0.9 + gourdHeight, 0));

    floor10der.push(new THREE.Vector3(22.3, 10 + gourdHeight, 0));
    floor10der.push(new THREE.Vector3(18, 10 + gourdHeight, -4));
    floor10der.push(new THREE.Vector3(11.5, 10 + gourdHeight, -9.7));
    floor10der.push(new THREE.Vector3(-11.5, 10 + gourdHeight, -9.7));
    floor10der.push(new THREE.Vector3(-18.7, 10 + gourdHeight, -4));
    floor10der.push(new THREE.Vector3(-23, 10 + gourdHeight, 0));

    floor10der.push(new THREE.Vector3(-18.7, 0.9 + gourdHeight, 0));
    floor10der.push(new THREE.Vector3(-11.5, 0.2 + gourdHeight, -6.5));
    floor10der.push(new THREE.Vector3(11.5, 0.1 + gourdHeight, -6.3));
    floor10der.push(new THREE.Vector3(18, 0.9 + gourdHeight, 0));

    /**** coordonnées floor20 face avant et arrière ****/

    floor20.push(new THREE.Vector3(-22.7, 20 + gourdHeight, 0));
    floor20.push(new THREE.Vector3(-18.7, 20 + gourdHeight, 4));
    floor20.push(new THREE.Vector3(-11.5, 20 + gourdHeight, 9.5));
    floor20.push(new THREE.Vector3(11.5, 20 + gourdHeight, 9.5));
    floor20.push(new THREE.Vector3(18.7, 20 + gourdHeight, 4));
    floor20.push(new THREE.Vector3(22.3, 20 + gourdHeight, 0));

    floor20.push(new THREE.Vector3(22.3, 10 + gourdHeight, 0));
    floor20.push(new THREE.Vector3(18, 10 + gourdHeight, 4));
    floor20.push(new THREE.Vector3(11.5, 10 + gourdHeight, 10));
    floor20.push(new THREE.Vector3(-11.5, 10 + gourdHeight, 10));
    floor20.push(new THREE.Vector3(-18.7, 10 + gourdHeight, 4));
    floor20.push(new THREE.Vector3(-23, 10 + gourdHeight, 0));

    floor20der.push(new THREE.Vector3(-22.7, 20 + gourdHeight, 0));
    floor20der.push(new THREE.Vector3(-18.7, 20 + gourdHeight, -4));
    floor20der.push(new THREE.Vector3(-11.5, 20 + gourdHeight, -9.5));
    floor20der.push(new THREE.Vector3(11.5, 20 + gourdHeight, -9.5));
    floor20der.push(new THREE.Vector3(18.7, 20 + gourdHeight, -4));
    floor20der.push(new THREE.Vector3(22.3, 20 + gourdHeight, 0));

    floor20der.push(new THREE.Vector3(22.3, 10 + gourdHeight, 0));
    floor20der.push(new THREE.Vector3(18, 10 + gourdHeight, -4));
    floor20der.push(new THREE.Vector3(11.5, 10 + gourdHeight, -9.7));
    floor20der.push(new THREE.Vector3(-11.5, 10 + gourdHeight, -9.7));
    floor20der.push(new THREE.Vector3(-18.7, 10 + gourdHeight, -4));
    floor20der.push(new THREE.Vector3(-23, 10 + gourdHeight, 0));

    /**** coordonnées floor30 face avant et arrière ****/

    floor30.push(new THREE.Vector3(14, 30 + gourdHeight, 0));
    floor30.push(new THREE.Vector3(11.5, 30 + gourdHeight, 4));
    floor30.push(new THREE.Vector3(6.5, 30 + gourdHeight, 8.3));
    floor30.push(new THREE.Vector3(-6.5, 30 + gourdHeight, 8.3));
    floor30.push(new THREE.Vector3(-11.5, 30 + gourdHeight, 4));
    floor30.push(new THREE.Vector3(-14.5, 30 + gourdHeight, 0));

    floor30.push(new THREE.Vector3(-22.7, 20 + gourdHeight, 0));
    floor30.push(new THREE.Vector3(-18.7, 20 + gourdHeight, 4));
    floor30.push(new THREE.Vector3(-11.5, 20 + gourdHeight, 9.5));
    floor30.push(new THREE.Vector3(11.5, 20 + gourdHeight, 9.5));
    floor30.push(new THREE.Vector3(18.7, 20 + gourdHeight, 4));
    floor30.push(new THREE.Vector3(22.3, 20 + gourdHeight, 0));

    floor30der.push(new THREE.Vector3(14, 30 + gourdHeight, 0));
    floor30der.push(new THREE.Vector3(11.5, 30 + gourdHeight, -4));
    floor30der.push(new THREE.Vector3(6.5, 30 + gourdHeight, -8.3));
    floor30der.push(new THREE.Vector3(-6.5, 30 + gourdHeight, -8.3));
    floor30der.push(new THREE.Vector3(-11.5, 30 + gourdHeight, -4));
    floor30der.push(new THREE.Vector3(-14.5, 30 + gourdHeight, 0));

    floor30der.push(new THREE.Vector3(-22.7, 20 + gourdHeight, 0));
    floor30der.push(new THREE.Vector3(-18.7, 20 + gourdHeight, -4));
    floor30der.push(new THREE.Vector3(-11.5, 20 + gourdHeight, -9.5));
    floor30der.push(new THREE.Vector3(11.5, 20 + gourdHeight, -9.5));
    floor30der.push(new THREE.Vector3(18.7, 20 + gourdHeight, -4));
    floor30der.push(new THREE.Vector3(22.3, 20 + gourdHeight, 0));

    /**** coordonnées floor36 face avant et arrière ****/

    floor36.push(new THREE.Vector3(-6, 36 + gourdHeight, 0));
    floor36.push(new THREE.Vector3(-4, 36 + gourdHeight, 4));
    floor36.push(new THREE.Vector3(-0.5, 36, + gourdHeight, 5));
    floor36.push(new THREE.Vector3(0.5, 36 + gourdHeight, 5));
    floor36.push(new THREE.Vector3(3.5, 36 + gourdHeight, 4));
    floor36.push(new THREE.Vector3(5, 36 + gourdHeight, 0));

    floor36.push(new THREE.Vector3(14, 30 + gourdHeight, 0));
    floor36.push(new THREE.Vector3(11.5, 30 + gourdHeight, 4));
    floor36.push(new THREE.Vector3(6.5, 30 + gourdHeight, 8.3));
    floor36.push(new THREE.Vector3(-6.5, 30 + gourdHeight, 8.3));
    floor36.push(new THREE.Vector3(-11.5, 30 + gourdHeight, 4));
    floor36.push(new THREE.Vector3(-14.5, 30 + gourdHeight, 0));

    floor36der.push(new THREE.Vector3(-6, 36 + gourdHeight, 0));
    floor36der.push(new THREE.Vector3(-4, 36 + gourdHeight, -4));
    floor36der.push(new THREE.Vector3(-0.5, 36 + gourdHeight, -5));
    floor36der.push(new THREE.Vector3(0.5, 36 + gourdHeight, -5));
    floor36der.push(new THREE.Vector3(3.5, 36 + gourdHeight, -4));
    floor36der.push(new THREE.Vector3(5, 36 + gourdHeight, 0));

    floor36der.push(new THREE.Vector3(14, 30 + gourdHeight, 0));
    floor36der.push(new THREE.Vector3(11.5, 30 + gourdHeight, -4));
    floor36der.push(new THREE.Vector3(6.5, 30 + gourdHeight, -8.3));
    floor36der.push(new THREE.Vector3(-6.5, 30 + gourdHeight, -8.3));
    floor36der.push(new THREE.Vector3(-11.5, 30 + gourdHeight, -4));
    floor36der.push(new THREE.Vector3(-14.5, 30 + gourdHeight, 0));

    /**** coordonnées floor40 face avant et arrière ****/

    floor40.push(new THREE.Vector3(3.1, 40 + gourdHeight, 0));
    floor40.push(new THREE.Vector3(2.1, 40 + gourdHeight, 2.5));
    floor40.push(new THREE.Vector3(0.5, 40 + gourdHeight, 3.3));
    floor40.push(new THREE.Vector3(-0.5, 40 + gourdHeight, 3.3));
    floor40.push(new THREE.Vector3(-2.5, 40 + gourdHeight, 2.5));
    floor40.push(new THREE.Vector3(-4, 40 + gourdHeight, 0));

    floor40.push(new THREE.Vector3(-6, 36 + gourdHeight, 0));
    floor40.push(new THREE.Vector3(-4, 36 + gourdHeight, 4));
    floor40.push(new THREE.Vector3(-0.5, 36 + gourdHeight, 5));
    floor40.push(new THREE.Vector3(0.5, 36 + gourdHeight, 5));
    floor40.push(new THREE.Vector3(3.5, 36 + gourdHeight, 4));
    floor40.push(new THREE.Vector3(5, 36 + gourdHeight, 0));

    floor40der.push(new THREE.Vector3(3.1, 40 + gourdHeight, 0));
    floor40der.push(new THREE.Vector3(2.1, 40 + gourdHeight, -2.5));
    floor40der.push(new THREE.Vector3(0.5, 40 + gourdHeight, -3.3));
    floor40der.push(new THREE.Vector3(-0.5, 40 + gourdHeight, -3.3));
    floor40der.push(new THREE.Vector3(-2.5, 40 + gourdHeight, -2.5));
    floor40der.push(new THREE.Vector3(-4, 40 + gourdHeight, 0));

    floor40der.push(new THREE.Vector3(-6, 36 + gourdHeight, 0));
    floor40der.push(new THREE.Vector3(-4, 36 + gourdHeight, -4));
    floor40der.push(new THREE.Vector3(-0.5, 36 + gourdHeight, -5));
    floor40der.push(new THREE.Vector3(0.5, 36 + gourdHeight, -5));
    floor40der.push(new THREE.Vector3(3.5, 36 + gourdHeight, -4));
    floor40der.push(new THREE.Vector3(5, 36 + gourdHeight, 0));

    /**** coordonnées floor45 face avant et arrière ****/

    floor45.push(new THREE.Vector3(-3.2, 45 + gourdHeight, 0));
    floor45.push(new THREE.Vector3(-2, 45.3 + gourdHeight, 2));
    floor45.push(new THREE.Vector3(-0.5, 45.5 + gourdHeight, 3));
    floor45.push(new THREE.Vector3(0.5, 45.5 + gourdHeight, 3));
    floor45.push(new THREE.Vector3(2, 45.3 + gourdHeight, 2));
    floor45.push(new THREE.Vector3(3.1, 45 + gourdHeight, 0));

    floor45.push(new THREE.Vector3(3.1, 40 + gourdHeight, 0));
    floor45.push(new THREE.Vector3(2.1, 40 + gourdHeight, 2.5));
    floor45.push(new THREE.Vector3(0.5, 40 + gourdHeight, 3.3));
    floor45.push(new THREE.Vector3(-0.5, 40 + gourdHeight, 3.3));
    floor45.push(new THREE.Vector3(-2.5, 40 + gourdHeight, 2.5));
    floor45.push(new THREE.Vector3(-4, 40 + gourdHeight, 0));

    floor45der.push(new THREE.Vector3(-3.2, 45 + gourdHeight, 0));
    floor45der.push(new THREE.Vector3(-2, 45.3 + gourdHeight, -2));
    floor45der.push(new THREE.Vector3(-0.5, 45.5 + gourdHeight, -3));
    floor45der.push(new THREE.Vector3(0.5, 45.5 + gourdHeight, -3));
    floor45der.push(new THREE.Vector3(2, 45.3 + gourdHeight, -2));
    floor45der.push(new THREE.Vector3(3.1, 45 + gourdHeight, 0));

    floor45der.push(new THREE.Vector3(3.1, 40 + gourdHeight, 0));
    floor45der.push(new THREE.Vector3(2.1, 40 + gourdHeight, -2.5));
    floor45der.push(new THREE.Vector3(0.5, 40 + gourdHeight, -3.3));
    floor45der.push(new THREE.Vector3(-0.5, 40 + gourdHeight, -3.3));
    floor45der.push(new THREE.Vector3(-2.5, 40 + gourdHeight, -2.5));
    floor45der.push(new THREE.Vector3(-4, 40 + gourdHeight, 0));

    /**** coordonnées floor50 face avant et arrière ****/

    floor50.push(new THREE.Vector3(3.1, 49.1 + gourdHeight, 0));
    floor50.push(new THREE.Vector3(2, 49.3 + gourdHeight, 2));
    floor50.push(new THREE.Vector3(0.5, 49.6 + gourdHeight, 3));
    floor50.push(new THREE.Vector3(-0.5, 49.7 + gourdHeight, 3));
    floor50.push(new THREE.Vector3(-2, 49.8 + gourdHeight, 2));
    floor50.push(new THREE.Vector3(-3.2, 49 + gourdHeight, 0));

    floor50.push(new THREE.Vector3(-3.2, 45 + gourdHeight, 0));
    floor50.push(new THREE.Vector3(-2, 45.3 + gourdHeight, 2));
    floor50.push(new THREE.Vector3(-0.5, 45.5 + gourdHeight, 3));
    floor50.push(new THREE.Vector3(0.5, 45.5 + gourdHeight, 3));
    floor50.push(new THREE.Vector3(2, 45.3 + gourdHeight, 2));
    floor50.push(new THREE.Vector3(3.1, 45 + gourdHeight, 0));

    floor50der.push(new THREE.Vector3(3.1, 49.1 + gourdHeight, 0));
    floor50der.push(new THREE.Vector3(2, 49.3 + gourdHeight, -2));
    floor50der.push(new THREE.Vector3(0.5, 49.6 + gourdHeight, -3));
    floor50der.push(new THREE.Vector3(-0.5, 49.7 + gourdHeight, -3));
    floor50der.push(new THREE.Vector3(-2, 49.8 + gourdHeight, -2));
    floor50der.push(new THREE.Vector3(-3.2, 49 + gourdHeight, 0));

    floor50der.push(new THREE.Vector3(-3.2, 45 + gourdHeight, 0));
    floor50der.push(new THREE.Vector3(-2, 45.3 + gourdHeight, -2));
    floor50der.push(new THREE.Vector3(-0.5, 45.5 + gourdHeight, -3));
    floor50der.push(new THREE.Vector3(0.5, 45.5 + gourdHeight, -3));
    floor50der.push(new THREE.Vector3(2, 45.3 + gourdHeight, -2));
    floor50der.push(new THREE.Vector3(3.1, 45 + gourdHeight, 0));

    /**** coordonnées finalfloor face avant et arrière ****/

    finalfloor.push(new THREE.Vector3(-3.2, 49 + gourdHeight, 0));
    finalfloor.push(new THREE.Vector3(-2, 49.8 + gourdHeight, 2));
    finalfloor.push(new THREE.Vector3(-0.5, 49.7 + gourdHeight, 3));
    finalfloor.push(new THREE.Vector3(0.5, 49.6 + gourdHeight, 3));
    finalfloor.push(new THREE.Vector3(2, 49.3 + gourdHeight, 2));
    finalfloor.push(new THREE.Vector3(3.1, 49.1 + gourdHeight, 0));
    finalfloor.push(new THREE.Vector3(2, 49.3 + gourdHeight, -2));
    finalfloor.push(new THREE.Vector3(0.5, 49.6 + gourdHeight, -3));
    finalfloor.push(new THREE.Vector3(-0.5, 49.7 + gourdHeight, -3));
    finalfloor.push(new THREE.Vector3(-2, 49.8 + gourdHeight, -2));

    /**** Création des courbes bSpline ****/

    let m = 3;

    let vectorN0 = [];
    //vectorN = [t0, ..., t(m+nb points)]
    for (let count0 = 0; count0 < floor0.length + m + 1; count0++) {
        vectorN0.push(count0);
    }
    createBspline(floor0, m, vectorN0);

    let vectorN10 = [];
    for (let count10 = 0; count10 < floor10.length + m + 1; count10++) {
        vectorN10.push(count10);
    }
    createBspline(floor10, m, vectorN10);
    createBspline(floor10der, m, vectorN10);

    let vectorN20 = [];
    for (let count20 = 0; count20 < floor20.length + m + 1; count20++) {
        vectorN20.push(count20);
    }
    createBspline(floor20, m, vectorN20);
    createBspline(floor20der, m, vectorN20);

    let vectorN30 = [];
    for (let count30 = 0; count30 < floor30.length + m + 1; count30++) {
        vectorN30.push(count30);
    }
    createBspline(floor30, m, vectorN30);
    createBspline(floor30der, m, vectorN30);

    let vectorN36 = [];
    for (let count36 = 0; count36 < floor36.length + m + 1; count36++) {
        vectorN36.push(count36);
    }
    createBspline(floor36, m, vectorN36);
    createBspline(floor36der, m, vectorN36);

    let vectorN40 = [];
    for (let count40 = 0; count40 < floor40.length + m + 1; count40++) {
        vectorN40.push(count40);
    }
    createBspline(floor40, m, vectorN40);
    createBspline(floor40der, m, vectorN40);

    let vectorN45 = [];
    for (let count45 = 0; count45 < floor45.length + m + 1; count45++) {
        vectorN45.push(count45);
    }
    createBspline(floor45, m, vectorN45);
    createBspline(floor45der, m, vectorN45);

    let vectorN50 = [];
    for (let count50 = 0; count50 < floor50.length + m + 1; count50++) {
        vectorN50.push(count50);
    }
    createBspline(floor50, m, vectorN50);
    createBspline(floor50der, m, vectorN50);

    let vectorNfinal = [];
    //vectorN = [t0, ..., t(m+nb points)]
    for (let countfinal = 0; countfinal < finalfloor.length + m + 1; countfinal++) {
        vectorNfinal.push(countfinal);
    }
    createBspline(finalfloor, m, vectorNfinal);
}

function createPolygonGourd() {
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

    floor0.push(new THREE.Vector3(-18.7, 0.9 + gourdHeight, 0));
    floor0.push(new THREE.Vector3(-11.5, 0.2 + gourdHeight, 6.5));
    floor0.push(new THREE.Vector3(11.5, 0.1 + gourdHeight, 6.2));
    floor0.push(new THREE.Vector3(18, 0.9 + gourdHeight, 0));
    floor0.push(new THREE.Vector3(11.5, 0.1 + gourdHeight, -6.5));
    floor0.push(new THREE.Vector3(-11.5, 0.2 + gourdHeight, -6.3));
    floor0.push(new THREE.Vector3(-18.7, 0.9 + gourdHeight, 0));

    /**** coordonnées floor10 face avant et arrière ****/

    floor10.push(new THREE.Vector3(22.3, 10 + gourdHeight, 0));
    floor10.push(new THREE.Vector3(18, 10 + gourdHeight, 4));
    floor10.push(new THREE.Vector3(11.5, 10 + gourdHeight, 10));
    floor10.push(new THREE.Vector3(-11.5, 10 + gourdHeight, 10));
    floor10.push(new THREE.Vector3(-18.7, 10 + gourdHeight, 4));
    floor10.push(new THREE.Vector3(-23, 10 + gourdHeight, 0));

    floor10.push(new THREE.Vector3(-18.7, 0.9 + gourdHeight, 0));
    floor10.push(new THREE.Vector3(-11.5, 0.2 + gourdHeight, 6.5));
    floor10.push(new THREE.Vector3(11.5, 0.1 + gourdHeight, 6.2));
    floor10.push(new THREE.Vector3(18, 0.9 + gourdHeight, 0));

    floor10der.push(new THREE.Vector3(22.3, 10 + gourdHeight, 0));
    floor10der.push(new THREE.Vector3(18, 10 + gourdHeight, -4));
    floor10der.push(new THREE.Vector3(11.5, 10 + gourdHeight, -9.7));
    floor10der.push(new THREE.Vector3(-11.5, 10 + gourdHeight, -9.7));
    floor10der.push(new THREE.Vector3(-18.7, 10 + gourdHeight, -4));
    floor10der.push(new THREE.Vector3(-23, 10 + gourdHeight, 0));

    floor10der.push(new THREE.Vector3(-18.7, 0.9 + gourdHeight, 0));
    floor10der.push(new THREE.Vector3(-11.5, 0.2 + gourdHeight, -6.5));
    floor10der.push(new THREE.Vector3(11.5, 0.1 + gourdHeight, -6.3));
    floor10der.push(new THREE.Vector3(18, 0.9 + gourdHeight, 0));

    /**** coordonnées floor20 face avant et arrière ****/

    floor20.push(new THREE.Vector3(-22.7, 20 + gourdHeight, 0));
    floor20.push(new THREE.Vector3(-18.7, 20 + gourdHeight, 4));
    floor20.push(new THREE.Vector3(-11.5, 20 + gourdHeight, 9.5));
    floor20.push(new THREE.Vector3(11.5, 20 + gourdHeight, 9.5));
    floor20.push(new THREE.Vector3(18.7, 20 + gourdHeight, 4));
    floor20.push(new THREE.Vector3(22.3, 20 + gourdHeight, 0));

    floor20.push(new THREE.Vector3(22.3, 10 + gourdHeight, 0));
    floor20.push(new THREE.Vector3(18, 10 + gourdHeight, 4));
    floor20.push(new THREE.Vector3(11.5, 10 + gourdHeight, 10));
    floor20.push(new THREE.Vector3(-11.5, 10 + gourdHeight, 10));
    floor20.push(new THREE.Vector3(-18.7, 10 + gourdHeight, 4));
    floor20.push(new THREE.Vector3(-23, 10 + gourdHeight, 0));

    floor20der.push(new THREE.Vector3(-22.7, 20 + gourdHeight, 0));
    floor20der.push(new THREE.Vector3(-18.7, 20 + gourdHeight, -4));
    floor20der.push(new THREE.Vector3(-11.5, 20 + gourdHeight, -9.5));
    floor20der.push(new THREE.Vector3(11.5, 20 + gourdHeight, -9.5));
    floor20der.push(new THREE.Vector3(18.7, 20 + gourdHeight, -4));
    floor20der.push(new THREE.Vector3(22.3, 20 + gourdHeight, 0));

    floor20der.push(new THREE.Vector3(22.3, 10 + gourdHeight, 0));
    floor20der.push(new THREE.Vector3(18, 10 + gourdHeight, -4));
    floor20der.push(new THREE.Vector3(11.5, 10 + gourdHeight, -9.7));
    floor20der.push(new THREE.Vector3(-11.5, 10 + gourdHeight, -9.7));
    floor20der.push(new THREE.Vector3(-18.7, 10 + gourdHeight, -4));
    floor20der.push(new THREE.Vector3(-23, 10 + gourdHeight, 0));

    /**** coordonnées floor30 face avant et arrière ****/

    floor30.push(new THREE.Vector3(14, 30 + gourdHeight, 0));
    floor30.push(new THREE.Vector3(11.5, 30 + gourdHeight, 4));
    floor30.push(new THREE.Vector3(6.5, 30 + gourdHeight, 8.3));
    floor30.push(new THREE.Vector3(-6.5, 30 + gourdHeight, 8.3));
    floor30.push(new THREE.Vector3(-11.5, 30 + gourdHeight, 4));
    floor30.push(new THREE.Vector3(-14.5, 30 + gourdHeight, 0));

    floor30.push(new THREE.Vector3(-22.7, 20 + gourdHeight, 0));
    floor30.push(new THREE.Vector3(-18.7, 20 + gourdHeight, 4));
    floor30.push(new THREE.Vector3(-11.5, 20 + gourdHeight, 9.5));
    floor30.push(new THREE.Vector3(11.5, 20 + gourdHeight, 9.5));
    floor30.push(new THREE.Vector3(18.7, 20 + gourdHeight, 4));
    floor30.push(new THREE.Vector3(22.3, 20 + gourdHeight, 0));

    floor30der.push(new THREE.Vector3(14, 30 + gourdHeight, 0));
    floor30der.push(new THREE.Vector3(11.5, 30 + gourdHeight, -4));
    floor30der.push(new THREE.Vector3(6.5, 30 + gourdHeight, -8.3));
    floor30der.push(new THREE.Vector3(-6.5, 30 + gourdHeight, -8.3));
    floor30der.push(new THREE.Vector3(-11.5, 30 + gourdHeight, -4));
    floor30der.push(new THREE.Vector3(-14.5, 30 + gourdHeight, 0));

    floor30der.push(new THREE.Vector3(-22.7, 20 + gourdHeight, 0));
    floor30der.push(new THREE.Vector3(-18.7, 20 + gourdHeight, -4));
    floor30der.push(new THREE.Vector3(-11.5, 20 + gourdHeight, -9.5));
    floor30der.push(new THREE.Vector3(11.5, 20 + gourdHeight, -9.5));
    floor30der.push(new THREE.Vector3(18.7, 20 + gourdHeight, -4));
    floor30der.push(new THREE.Vector3(22.3, 20 + gourdHeight, 0));

    /**** coordonnées floor36 face avant et arrière ****/

    floor36.push(new THREE.Vector3(-6, 36 + gourdHeight, 0));
    floor36.push(new THREE.Vector3(-4, 36 + gourdHeight, 4));
    floor36.push(new THREE.Vector3(-0.5, 36, + gourdHeight, 5));
    floor36.push(new THREE.Vector3(0.5, 36 + gourdHeight, 5));
    floor36.push(new THREE.Vector3(3.5, 36 + gourdHeight, 4));
    floor36.push(new THREE.Vector3(5, 36 + gourdHeight, 0));

    floor36.push(new THREE.Vector3(14, 30 + gourdHeight, 0));
    floor36.push(new THREE.Vector3(11.5, 30 + gourdHeight, 4));
    floor36.push(new THREE.Vector3(6.5, 30 + gourdHeight, 8.3));
    floor36.push(new THREE.Vector3(-6.5, 30 + gourdHeight, 8.3));
    floor36.push(new THREE.Vector3(-11.5, 30 + gourdHeight, 4));
    floor36.push(new THREE.Vector3(-14.5, 30 + gourdHeight, 0));

    floor36der.push(new THREE.Vector3(-6, 36 + gourdHeight, 0));
    floor36der.push(new THREE.Vector3(-4, 36 + gourdHeight, -4));
    floor36der.push(new THREE.Vector3(-0.5, 36 + gourdHeight, -5));
    floor36der.push(new THREE.Vector3(0.5, 36 + gourdHeight, -5));
    floor36der.push(new THREE.Vector3(3.5, 36 + gourdHeight, -4));
    floor36der.push(new THREE.Vector3(5, 36 + gourdHeight, 0));

    floor36der.push(new THREE.Vector3(14, 30 + gourdHeight, 0));
    floor36der.push(new THREE.Vector3(11.5, 30 + gourdHeight, -4));
    floor36der.push(new THREE.Vector3(6.5, 30 + gourdHeight, -8.3));
    floor36der.push(new THREE.Vector3(-6.5, 30 + gourdHeight, -8.3));
    floor36der.push(new THREE.Vector3(-11.5, 30 + gourdHeight, -4));
    floor36der.push(new THREE.Vector3(-14.5, 30 + gourdHeight, 0));

    /**** coordonnées floor40 face avant et arrière ****/

    floor40.push(new THREE.Vector3(3.1, 40 + gourdHeight, 0));
    floor40.push(new THREE.Vector3(2.1, 40 + gourdHeight, 2.5));
    floor40.push(new THREE.Vector3(0.5, 40 + gourdHeight, 3.3));
    floor40.push(new THREE.Vector3(-0.5, 40 + gourdHeight, 3.3));
    floor40.push(new THREE.Vector3(-2.5, 40 + gourdHeight, 2.5));
    floor40.push(new THREE.Vector3(-4, 40 + gourdHeight, 0));

    floor40.push(new THREE.Vector3(-6, 36 + gourdHeight, 0));
    floor40.push(new THREE.Vector3(-4, 36 + gourdHeight, 4));
    floor40.push(new THREE.Vector3(-0.5, 36 + gourdHeight, 5));
    floor40.push(new THREE.Vector3(0.5, 36 + gourdHeight, 5));
    floor40.push(new THREE.Vector3(3.5, 36 + gourdHeight, 4));
    floor40.push(new THREE.Vector3(5, 36 + gourdHeight, 0));

    floor40der.push(new THREE.Vector3(3.1, 40 + gourdHeight, 0));
    floor40der.push(new THREE.Vector3(2.1, 40 + gourdHeight, -2.5));
    floor40der.push(new THREE.Vector3(0.5, 40 + gourdHeight, -3.3));
    floor40der.push(new THREE.Vector3(-0.5, 40 + gourdHeight, -3.3));
    floor40der.push(new THREE.Vector3(-2.5, 40 + gourdHeight, -2.5));
    floor40der.push(new THREE.Vector3(-4, 40 + gourdHeight, 0));

    floor40der.push(new THREE.Vector3(-6, 36 + gourdHeight, 0));
    floor40der.push(new THREE.Vector3(-4, 36 + gourdHeight, -4));
    floor40der.push(new THREE.Vector3(-0.5, 36 + gourdHeight, -5));
    floor40der.push(new THREE.Vector3(0.5, 36 + gourdHeight, -5));
    floor40der.push(new THREE.Vector3(3.5, 36 + gourdHeight, -4));
    floor40der.push(new THREE.Vector3(5, 36 + gourdHeight, 0));

    /**** coordonnées floor45 face avant et arrière ****/

    floor45.push(new THREE.Vector3(-3.2, 45 + gourdHeight, 0));
    floor45.push(new THREE.Vector3(-2, 45.3 + gourdHeight, 2));
    floor45.push(new THREE.Vector3(-0.5, 45.5 + gourdHeight, 3));
    floor45.push(new THREE.Vector3(0.5, 45.5 + gourdHeight, 3));
    floor45.push(new THREE.Vector3(2, 45.3 + gourdHeight, 2));
    floor45.push(new THREE.Vector3(3.1, 45 + gourdHeight, 0));

    floor45.push(new THREE.Vector3(3.1, 40 + gourdHeight, 0));
    floor45.push(new THREE.Vector3(2.1, 40 + gourdHeight, 2.5));
    floor45.push(new THREE.Vector3(0.5, 40 + gourdHeight, 3.3));
    floor45.push(new THREE.Vector3(-0.5, 40 + gourdHeight, 3.3));
    floor45.push(new THREE.Vector3(-2.5, 40 + gourdHeight, 2.5));
    floor45.push(new THREE.Vector3(-4, 40 + gourdHeight, 0));

    floor45der.push(new THREE.Vector3(-3.2, 45 + gourdHeight, 0));
    floor45der.push(new THREE.Vector3(-2, 45.3 + gourdHeight, -2));
    floor45der.push(new THREE.Vector3(-0.5, 45.5 + gourdHeight, -3));
    floor45der.push(new THREE.Vector3(0.5, 45.5 + gourdHeight, -3));
    floor45der.push(new THREE.Vector3(2, 45.3 + gourdHeight, -2));
    floor45der.push(new THREE.Vector3(3.1, 45 + gourdHeight, 0));

    floor45der.push(new THREE.Vector3(3.1, 40 + gourdHeight, 0));
    floor45der.push(new THREE.Vector3(2.1, 40 + gourdHeight, -2.5));
    floor45der.push(new THREE.Vector3(0.5, 40 + gourdHeight, -3.3));
    floor45der.push(new THREE.Vector3(-0.5, 40 + gourdHeight, -3.3));
    floor45der.push(new THREE.Vector3(-2.5, 40 + gourdHeight, -2.5));
    floor45der.push(new THREE.Vector3(-4, 40 + gourdHeight, 0));

    /**** coordonnées floor50 face avant et arrière ****/

    floor50.push(new THREE.Vector3(3.1, 49.1 + gourdHeight, 0));
    floor50.push(new THREE.Vector3(2, 49.3 + gourdHeight, 2));
    floor50.push(new THREE.Vector3(0.5, 49.6 + gourdHeight, 3));
    floor50.push(new THREE.Vector3(-0.5, 49.7 + gourdHeight, 3));
    floor50.push(new THREE.Vector3(-2, 49.8 + gourdHeight, 2));
    floor50.push(new THREE.Vector3(-3.2, 49 + gourdHeight, 0));

    floor50.push(new THREE.Vector3(-3.2, 45 + gourdHeight, 0));
    floor50.push(new THREE.Vector3(-2, 45.3 + gourdHeight, 2));
    floor50.push(new THREE.Vector3(-0.5, 45.5 + gourdHeight, 3));
    floor50.push(new THREE.Vector3(0.5, 45.5 + gourdHeight, 3));
    floor50.push(new THREE.Vector3(2, 45.3 + gourdHeight, 2));
    floor50.push(new THREE.Vector3(3.1, 45 + gourdHeight, 0));

    floor50der.push(new THREE.Vector3(3.1, 49.1 + gourdHeight, 0));
    floor50der.push(new THREE.Vector3(2, 49.3 + gourdHeight, -2));
    floor50der.push(new THREE.Vector3(0.5, 49.6 + gourdHeight, -3));
    floor50der.push(new THREE.Vector3(-0.5, 49.7 + gourdHeight, -3));
    floor50der.push(new THREE.Vector3(-2, 49.8 + gourdHeight, -2));
    floor50der.push(new THREE.Vector3(-3.2, 49 + gourdHeight, 0));

    floor50der.push(new THREE.Vector3(-3.2, 45 + gourdHeight, 0));
    floor50der.push(new THREE.Vector3(-2, 45.3 + gourdHeight, -2));
    floor50der.push(new THREE.Vector3(-0.5, 45.5 + gourdHeight, -3));
    floor50der.push(new THREE.Vector3(0.5, 45.5 + gourdHeight, -3));
    floor50der.push(new THREE.Vector3(2, 45.3 + gourdHeight, -2));
    floor50der.push(new THREE.Vector3(3.1, 45 + gourdHeight, 0));

    /**** coordonnées finalfloor face avant et arrière ****/

    finalfloor.push(new THREE.Vector3(-3.2, 49 + gourdHeight, 0));
    finalfloor.push(new THREE.Vector3(-2, 49.8 + gourdHeight, 2));
    finalfloor.push(new THREE.Vector3(-0.5, 49.7 + gourdHeight, 3));
    finalfloor.push(new THREE.Vector3(0.5, 49.6 + gourdHeight, 3));
    finalfloor.push(new THREE.Vector3(2, 49.3 + gourdHeight, 2));
    finalfloor.push(new THREE.Vector3(3.1, 49.1 + gourdHeight, 0));
    finalfloor.push(new THREE.Vector3(2, 49.3 + gourdHeight, -2));
    finalfloor.push(new THREE.Vector3(0.5, 49.6 + gourdHeight, -3));
    finalfloor.push(new THREE.Vector3(-0.5, 49.7 + gourdHeight, -3));
    finalfloor.push(new THREE.Vector3(-2, 49.8 + gourdHeight, -2));

    /**** Création des courbes ****/

    for (let i = 0; i < floor0.length - 1; i += 1) {
        createPolygon([floor0[i], floor0[i + 1], floor0[floor0.length - i - 1]], 0x737373);
    }
    for (let i = 0; i < floor10.length - 1; i += 1) { //un côté de bon
        createPolygon([floor10[i], floor10[i + 1], floor10[floor10.length - i - 1]], 0x737373);
        createPolygon([floor10der[i], floor10der[i + 1], floor10der[floor10der.length - i - 1]], 0x737373);
    }
    for (let i = 0; i < floor20.length - 1; i += 1) { //un côté de bon
        createPolygon([floor20[i], floor20[i + 1], floor20[floor20.length - i - 1]], 0x737373);
        createPolygon([floor20der[i], floor20der[i + 1], floor20der[floor20der.length - i - 1]], 0x737373);
    }
    for (let i = 0; i < floor30.length - 1; i += 1) { //un côté de bon
        createPolygon([floor30[i], floor30[i + 1], floor30[floor30.length - i - 1]], 0x737373);
        createPolygon([floor30der[i], floor30der[i + 1], floor30der[floor30der.length - i - 1]], 0x737373);
    }
    for (let i = 0; i < floor36.length - 1; i += 1) { //un côté de bon
        createPolygon([floor36[i], floor36[i + 1], floor36[floor36.length - i - 1]], 0x737373);
        createPolygon([floor36der[i], floor36der[i + 1], floor36der[floor36der.length - i - 1]], 0x737373);
    }
    for (let i = 0; i < floor40.length - 1; i += 1) { //un côté de bon
        createPolygon([floor40[i], floor40[i + 1], floor40[floor40.length - i - 1]], 0x737373);
        createPolygon([floor40der[i], floor40der[i + 1], floor40der[floor40der.length - i - 1]], 0x737373);
    }
    for (let i = 0; i < floor45.length - 1; i += 1) { //un côté de bon
        createPolygon([floor45[i], floor45[i + 1], floor45[floor45.length - i - 1]], 0x737373);
        createPolygon([floor45der[i], floor45der[i + 1], floor45der[floor45der.length - i - 1]], 0x737373);
    }
    for (let i = 0; i < floor50.length - 1; i += 1) { //un côté de bon
        createPolygon([floor50[i], floor50[i + 1], floor50[floor50.length - i - 1]], 0x736048);
        createPolygon([floor50der[i], floor50der[i + 1], floor50der[floor50der.length - i - 1]], 0x736048);
    }
    for (let i = 0; i < finalfloor.length - 1; i += 1) {
        createPolygon([finalfloor[i], finalfloor[i + 1], finalfloor[finalfloor.length - i - 1]], 0x736048);
    }
}

/**** Polygone de Contrôle ****/

function createPolygon(tabOfPoints, texture) {
    //Création d'une "géométrie" pour le polygone de contrôle
    let geometry = new THREE.BufferGeometry().setFromPoints(tabOfPoints);

    //geometry.computeVertexNormals();
    //Utilisation de cette géométrie ainsi que le matériel pour créer le tracé du polygone de contrôle
    let material = new THREE.MeshBasicMaterial({ color: texture, side: THREE.DoubleSide }); //0x737373
    material.opacity = 1;
    let mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    return mesh;
}

/**** Courbe de Bézier ****/

function createBezierCurve(tabOfPoints) {
    //Calcul de la courbe de Bézier en fonction des points de l'utilisateur
    let pointsBezier = bezierCurve(tabOfPoints);
    for (let i = 0; i < pointsBezier.length - 1; i += 1) {
        let geometry = new THREE.BufferGeometry().setFromPoints([pointsBezier[i], pointsBezier[i + 1], pointsBezier[pointsBezier.length - i - 1]]);
        //Utilisation de cette géométrie ainsi que le matériel pour créer le tracé de la courbe de Bézier
        let material = new THREE.MeshBasicMaterial({ color: 0x97d9d3, side: THREE.DoubleSide });
        material.opacity = 1;
        let mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);
    }
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

/**** Courbe B-SPLINE ****/

function createBspline(tabOfPoints, degre, knots) {
    //Calcul de la courbe B-SPLINE en fonction des points de l'utilisateur
    let pointsSpline = Bspline(tabOfPoints, degre, knots);
    //Création d'une "géométrie" pour la courbe
    for (let i = 0; i < pointsSpline.length - 1; i += 1) {
        let geometry = new THREE.BufferGeometry().setFromPoints([pointsSpline[i], pointsSpline[i + 1], pointsSpline[pointsSpline.length - i - 1]]);
        //Utilisation de cette géométrie ainsi que le matériel pour créer le tracé de la courbe de Bézier
        let material = new THREE.MeshBasicMaterial({ color: 'yellow', side: THREE.DoubleSide });
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

    if (degree < 1) {
        alert("Le degré n'est pas bon");
        return;
    }
    if (degree > (n - 1)) {
        alert("Merci de changer le degré");
        return;
    }
    let vart;

    for (let t = knots[degree]; t <= knots[points.length]; t += 0.1) {
        //Création d'un objet, plus facile à manipuler
        ('t = ' + t)
        let p = { x: 0, y: 0, z: 0 }
        for (let i = 0; i < n + 1; i++) {
            let px = points[i].x * N(i, degree, knots, t);
            let py = points[i].y * N(i, degree, knots, t);
            let pz = points[i].z * N(i, degree, knots, t);
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

function N(i, m, knots, t) {
    let res, tmp1, tmp2;
    if (m == 0) {
        if ((knots[i] <= t) && (t < knots[i + 1])) {
            res = 1;
        } else {
            res = 0;
        }
    }
    else {

        tmp1 = ((t - knots[i]) / (knots[i + m] - knots[i])) * N(i, m - 1, knots, t);

        //attention aux noeuds multiples, vérifier que dénominateur différent de 0

        tmp2 = ((knots[i + m + 1] - t) / (knots[i + m + 1] - knots[i + 1])) * N(i + 1, m - 1, knots, t);

        return tmp1 + tmp2;
    }
    return res;
}

/*Création du décors */

/*Grass*/
//Texture
const grassMaterial = new THREE.MeshBasicMaterial({ map: createRepeatingTexture("https://upload.wikimedia.org/wikipedia/commons/4/4c/Grass_Texture.png", 100, 100) });
//Mesh
const grass = new THREE.Mesh(new THREE.PlaneBufferGeometry(10000, 10000), grassMaterial);
//Pos
grass.position.set(0, -5, 0);
grass.rotation.set(Math.PI / -2, 0, 0);
//Adding it to the scene
scene.add(grass)

/*Fog*/
scene.fog = new THREE.Fog(0xcccccc, 400, 900);

/*Roads*/
const roadMaterial = new THREE.MeshBasicMaterial({ map: createRepeatingTexture('../Textures/road.png', 15, 1) });

function createRepeatingTexture(fileName, repeatX, repeatY) {
    let texture = new THREE.TextureLoader().load(fileName);
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(repeatX, repeatY);
    texture.anisotropy = 32;
    return texture;
}

function createRoad(length, width, material) {
    let road = new THREE.Mesh(new THREE.PlaneGeometry(length, width), material);
    road.receiveShadow = true;
    road.rotation.x = -0.5 * Math.PI;
    road.position.y = 0.2;
    return road;
}
// add roads with intersection

let outerRoad2 = createRoad(1900, 55, roadMaterial);
outerRoad2.position.z = 600;
scene.add(outerRoad2);

let outerRoad3 = createRoad(1900, 55, roadMaterial);
outerRoad3.position.z = -600;
scene.add(outerRoad3);

let outerRoad4 = createRoad(1900, 55, roadMaterial);
outerRoad4.rotateZ(0.5 * Math.PI);
outerRoad4.position.x = 200;
scene.add(outerRoad4);

let outerRoad5 = createRoad(1900, 55, roadMaterial);
outerRoad5.rotateZ(0.5 * Math.PI);
outerRoad5.position.x = -200;
scene.add(outerRoad5);

/*Water*/
const waterGeometry = new THREE.PlaneGeometry(400, 1200);

let water = new Water(
    waterGeometry,
    {
        textureWidth: 512,
        textureHeight: 512,
        waterNormals: new THREE.TextureLoader().load('../Textures/waternormals.jpg', function (texture) {

            texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

        }),
        sunDirection: new THREE.Vector3(),
        sunColor: 0xffffff,
        waterColor: 0x001e0f,
        distortionScale: 6,
    }
);

water.position.y = 0;
water.rotation.x = Math.PI * - 0.5;
scene.add(water);

/*The Rock */
let rock = new THREE.Mesh(
    new THREE.CylinderGeometry(25, 70, 50, 40, 5),
    new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('../Textures/rock.jpg') })
);
rock.position.set(0, 0, 0);
scene.add(rock);

/*Other Rocks*/
function createRock(x, y, z, width, height, depth, material) {
    let rock = new THREE.Mesh(new THREE.SphereGeometry(width, height, depth), material);
    rock.position.set(x, y, z);
    return rock;
}
let rockMaterial = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('../Textures/rock.jpg') });
//Create Rocks
for (let nbOfRock = 0; nbOfRock <= 4; nbOfRock++) {
    let rock1 = createRock(125, 0, -480 + 220 * nbOfRock, 30, 30, 30, rockMaterial);
    scene.add(rock1);
    let rock2 = createRock(-125, 0, -360 + 220 * nbOfRock, 30, 30, 30, rockMaterial);
    scene.add(rock2);
}

/* The Crate */
function createCrate(x, y, z, width, height, depth, material) {
    let crate = new THREE.Mesh(new THREE.BoxGeometry(width, height, depth), material);
    crate.position.set(x, y, z);
    return crate;
}
let crateMaterial = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('../Textures/crate.gif') });
//Create Crates
for (let floor = 0; floor <= 6; floor++) {
    for (let row = 0; row <= 6; row++) {
        for (let nbOfCrate = 0 + 2 * floor; nbOfCrate <= 22 - floor * 2; nbOfCrate++) {
            let crate = createCrate(300 + 50 * row, 25 + 50 * floor, 545 - nbOfCrate * 50, 50, 50, 50, crateMaterial);
            scene.add(crate);
        }
    }
}

/*Sky*/
const sky = new Sky();
sky.scale.setScalar(10000);
scene.add(sky);

const skyUniforms = sky.material.uniforms;

skyUniforms['turbidity'].value = 10;
skyUniforms['rayleigh'].value = 2;
skyUniforms['mieCoefficient'].value = 0.005;
skyUniforms['mieDirectionalG'].value = 0.8;

const parameters = {
    elevation: 2,
    azimuth: 180
};

const pmremGenerator = new THREE.PMREMGenerator(renderer);

/*Sun */
let sun = new THREE.Vector3();
const phi = THREE.MathUtils.degToRad(90 - parameters.elevation);
const theta = THREE.MathUtils.degToRad(parameters.azimuth);

sun.setFromSphericalCoords(1, phi, theta);

sky.material.uniforms['sunPosition'].value.copy(sun);
water.material.uniforms['sunDirection'].value.copy(sun).normalize();

scene.environment = pmremGenerator.fromScene(sky).texture;

/*Castle*/
//Textures
let wallTextureName = "../Textures/wall.jpg";
let roofTextureName = "../Textures/roof.jpg";
let floorTextureName = "../Textures/floor.jpg";
let doorTextureName = "../Textures/door.png";

let wallMaterial = new THREE.MeshBasicMaterial({ map: createRepeatingTexture(wallTextureName, 4, 0.8) });

let floorMaterial = new THREE.MeshBasicMaterial({ map: createRepeatingTexture(floorTextureName, 4, 0.6) });

let battlementTexture = createRepeatingTexture(wallTextureName, 0.22, 0.33);
battlementTexture.offset.x = 0.1;

let battlementMaterial = new THREE.MeshBasicMaterial({ map: battlementTexture });

let towerWallMaterial = new THREE.MeshBasicMaterial({ map: createRepeatingTexture(wallTextureName, 6, 1.5) });

let roofMaterial = new THREE.MeshBasicMaterial({ map: createRepeatingTexture(roofTextureName, 8, 1.5) });

let buildingWallMaterial = new THREE.MeshBasicMaterial({ map: createRepeatingTexture(wallTextureName, 2, 1.3) });

let buildingRoofMaterial = new THREE.MeshBasicMaterial({ map: createRepeatingTexture(roofTextureName, 4, 2), side: THREE.DoubleSide });

let doorMaterial = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(doorTextureName), transparent: true });
//Functions
function createTower() {
    // create tower cylinder

    let towerHeight = 150;
    let radius = 10;

    let tower = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, towerHeight, 20), towerWallMaterial);
    tower.castShadow = true;
    tower.receiveShadow = true;

    tower.position.y = 5;

    // create roof

    let roof = new THREE.Mesh(new THREE.CylinderGeometry(0, radius, 16, 20), roofMaterial);
    roof.castShadow = true;
    roof.receiveShadow = true;

    roof.position.y = towerHeight - 67;

    tower.add(roof);

    return tower;
}

function createWall(wallWidth, wallDepth, withoutTower) {
    // create wall itself

    let wallHeight = 80;

    let wallGeometry = new THREE.BoxGeometry(wallWidth, wallHeight, wallDepth);
    let wall = new THREE.Mesh(wallGeometry, new THREE.MeshFaceMaterial([wallMaterial, wallMaterial, floorMaterial, wallMaterial, wallMaterial, wallMaterial]));
    wall.castShadow = true;
    wall.receiveShadow = true;

    wall.position.y = wallHeight / 2;

    wall.height = wallHeight; // store height value

    // create and add basements to the wall

    let battlementWidth = 6;
    let battlementHeight = 11;

    let battlementGeometry = new THREE.BoxGeometry(battlementWidth, battlementHeight, battlementWidth);

    for (let x = 5 + -(wallWidth / 2) + battlementWidth / 2; x < wallWidth / 2 - 5; x += battlementWidth * 2) {
        let battlement = new THREE.Mesh(battlementGeometry, battlementMaterial);
        battlement.castShadow = true;
        battlement.receiveShadow = true;

        battlement.position.set(x, wallHeight / 2 + battlementWidth / 2, wallDepth / 2 - battlementWidth / 2);
        wall.add(battlement);
    }

    if (!withoutTower) {
        // add tower to the right end of the wall

        let tower = createTower();

        tower.position.x = wallWidth / 2;

        wall.add(tower);
    }

    return wall;
}

function createMainBuilding(buildingWidth, buildingHeight, buildingDepth) {

    function createRoof() {
        let roof = new THREE.Mesh(new THREE.CylinderGeometry(0, buildingWidth, buildingHeight, 45), buildingRoofMaterial);
        roof.castShadow = true;
        roof.position.y = buildingHeight;

        return roof;
    }

    let building = new THREE.Mesh(new THREE.CylinderGeometry(buildingWidth, buildingDepth, buildingHeight, 45), buildingWallMaterial);
    building.castShadow = true;
    building.receiveShadow = true;

    building.position.y = buildingHeight / 2;

    // add roof (left and right sides)

    let roof = createRoof();

    building.add(roof);

    // create door

    let door = new THREE.Mesh(new THREE.PlaneGeometry(20, 26), doorMaterial);

    door.position.z = buildingDepth + 0.2;
    door.position.y = -20;

    building.add(door);

    return building;
}
//Create it
let castle = new THREE.Object3D();

let wallWidth = 600;
let wallDepth = 13;
let castlePositionX = -600;

castle.castleSize = wallWidth + wallDepth * 2;

let leftWall = createWall(wallWidth, wallDepth);
let rightWall = createWall(wallWidth, wallDepth);
let frontWall = createWall(wallWidth, wallDepth);
let backWall = createWall(wallWidth, wallDepth);

// set walls position
leftWall.rotation.y = -0.5 * Math.PI;
leftWall.position.x = castlePositionX - wallWidth / 2;
castle.add(leftWall);

backWall.rotation.y = -1 * Math.PI;
backWall.position.z = -wallWidth / 2;
backWall.position.x = castlePositionX
castle.add(backWall);

frontWall.rotation.y = 1 * Math.PI;
frontWall.rotation.z = 1 * Math.PI;
frontWall.rotation.x = 1 * Math.PI;
frontWall.position.z = wallWidth / 2;
frontWall.position.x = castlePositionX
castle.add(frontWall);

rightWall.rotation.y = 0.5 * Math.PI;
rightWall.position.x = castlePositionX + wallWidth / 2;
castle.add(rightWall);

scene.add(castle);

/*House*/
let building = createMainBuilding(80, 70, 80);
building.position.x = castlePositionX;
building.rotation.y = Math.PI;

let building2 = createMainBuilding(40, 35, 40);
building2.position.x = castlePositionX;
building2.position.z = wallWidth / 2 - 100;
building2.rotation.y = Math.PI;

let building3 = createMainBuilding(60, 52.5, 60);
building3.position.x = castlePositionX + 200;
building3.rotation.y = Math.PI;

let building4 = createMainBuilding(60, 52.5, 60);
building4.position.x = castlePositionX - 200;
building4.rotation.y = Math.PI;

let building5 = createMainBuilding(40, 35, 40);
building5.position.x = castlePositionX;
building5.position.z = -wallWidth / 2 + 100;
building5.rotation.y = Math.PI;

castle.add(building, building2, building3, building4, building5);

// Helpers

//La grille
//const gridHelper = new THREE.GridHelper(200, 50);
//scene.add(gridHelper)

//Ce qui permet de contrôler la caméra
const controls = new OrbitControls(camera, renderer.domElement);
controls.maxPolarAngle = Math.PI * 0.495;
controls.target.set(0, 10, 0);
controls.maxDistance = 500.0;

//Responsivity
window.addEventListener('resize', onWindowResize);
function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);

}

// Boucle d'animation (Normalement pas besoin d'y toucher)
function animate() {
    requestAnimationFrame(animate);

    controls.update();//Permet d'actualiser les contrôles dans la boucle itérative

    renderer.render(scene, camera);
}

animate();