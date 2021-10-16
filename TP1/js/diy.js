/* THREE - Commentaires détaillés de cette partie dans le fichier cercle.js*/
let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement); //création de la scène 

const material = new THREE.LineBasicMaterial({
    color: 0xd9d397
});


camera.position.z = 5;

// tableau de points
let points = [];

/*Méthode : Pour cette partie bonus, l'utilisateur est invité à rentrer lui même son expression paramétrique pour former une figure.
Il y a par défaut un cercle mais il sera enlevé dès que l'utilisateur demandera une nouvelle figure. */
for (let i = 0; i < 2 * Math.PI; i += 0.01) {
    let x = Math.cos(i);
    let y = Math.sin(i);

    points.push(new THREE.Vector2(x, y));
}

let geometry = new THREE.BufferGeometry().setFromPoints(points);
let form = new THREE.Line( geometry, material );
form.name = 'figure';
scene.add(form);

renderer.render(scene, camera);

/*Afin de convertir une string en équation algébrique, nous avons utilisé la méthode math.js dont la documentation est disponible ici : https://mathjs.org/ */
const parser = math.parser();//Un parser permet d'associacier une équation à une fonction. Exemple : x^3 devient f(x) = x^3
let xEq = "", yEq = "";//les variables que l'utilisateur va changer dans l'input
//Les inputs
let inputX = document.getElementById('xEq');
let inputY = document.getElementById('yEq');
//Les boutons de validation
let inputXBtn = document.getElementsByClassName("confirmEqX");
let inputYBtn = document.getElementsByClassName("confirmEqY");
//Les listeners
inputXBtn[0].addEventListener('click', () =>{
    xEq = inputX.value;
    parser.evaluate('f(x)='+xEq);//Utilisation du parser 1
});
inputYBtn[0].addEventListener('click', () =>{
    yEq = inputY.value;
    parser.evaluate('g(x)='+yEq);//Utilisation du parser 2
    /*Création de la figure, même méthode que dans other.js mais avec les formules que l'utilisateur a rentré*/
    removeEntity(form);
        //Clear
        points = [];
        for (let i = 0; i < 2 * Math.PI; i += 0.01) {
            let x = parser.evaluate('f(' + i.toString() + ')');
            let y = parser.evaluate('g(' + i.toString() + ')');

            points.push(new THREE.Vector2(x, y));
        }
        updateFigure(points);
});

/*Fonctions identiques à others.js - Utilisation détaillée dans ce fichier*/

let updateFigure = function (points) {
    let geometry = new THREE.BufferGeometry().setFromPoints(points);
    let form = new THREE.Line( geometry, material );
    form.name = "figure";
    scene.add(form);
}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

function removeEntity(object) {
    let selectedObject = scene.getObjectByName(object.name);
    scene.remove( selectedObject );
}

animate();