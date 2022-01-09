import '../../css/style.css';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

let container;

let camera, scene, renderer;

let object;

init();
animate();


function init() {

    container = document.createElement('div');
    document.body.appendChild(container);

    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 2000);
    camera.position.z = 250;

    // scene

    scene = new THREE.Scene();

    const ambientLight = new THREE.AmbientLight(0xcccccc, 0.4);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 0.8);
    camera.add(pointLight);
    scene.add(camera);

    // manager

    function loadModel() {

        object.traverse(function (child) {

            if (child.isMesh) child.material.map = texture;

        });

        object.position.y = - 95;
        scene.add(object);

    }

    const manager = new THREE.LoadingManager(loadModel);

    manager.onProgress = function (item, loaded, total) {

        console.log(item, loaded, total);

    };

    // texture

    const textureLoader = new THREE.TextureLoader(manager);
    const texture = textureLoader.load('/Textures/source/tex_u1_v1.jpg');

    // model

    function onProgress(xhr) {

        if (xhr.lengthComputable) {

            const percentComplete = xhr.loaded / xhr.total * 100;
            console.log('model ' + Math.round(percentComplete, 2) + '% downloaded');

        }

    }

    function onError() { }

    const loader = new OBJLoader(manager);
    loader.load('/Textures/source/model.obj', function (obj) {

        object = obj;

    }, onProgress, onError);

    //

    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    window.addEventListener('resize', onWindowResize);

    //Ce qui permet de contrôler la caméra
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 10, 0);
    controls.update();//Permet d'actualiser les contrôles dans la boucle itérative

    /*La Gourde */
    //hauteur
    let gourdHeight = -90;

    createPolygonGourd();

    gourdHeight = -40;
    createBezierGourd();

    gourdHeight = 10;
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


}

function onWindowResize() {

    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);

}

//

function animate() {

    requestAnimationFrame(animate);

    render();

}

function render() {

    renderer.render(scene, camera);

}