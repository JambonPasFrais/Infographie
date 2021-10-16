/* THREE */
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

/*Use of Mathjs*/
const parser = math.parser();
let xEq = "", yEq = "";
let inputX = document.getElementById('xEq');
let inputY = document.getElementById('yEq');
let inputXBtn = document.getElementsByClassName("confirmEqX");
let inputYBtn = document.getElementsByClassName("confirmEqY");
inputXBtn[0].addEventListener('click', () =>{
    xEq = inputX.value;
    parser.evaluate('f(x)='+xEq);
    console.log(xEq);
});
inputYBtn[0].addEventListener('click', () =>{
    yEq = inputY.value;
    parser.evaluate('g(x)='+yEq);
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

/*Functions*/

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