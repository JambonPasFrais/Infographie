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
let form = new THREE.Line(geometry, material);
form.name = 'figure';
scene.add(form);

renderer.render(scene, camera);


/* Page Interaction */
let buttonTab = document.getElementsByClassName("buttons");
for (let i = 0; i < buttonTab.length; i++) {
    buttonTab[i].addEventListener('click', () => {
        choiceEvent(buttonTab[i].textContent);
    });
}



/*Functions*/
let choiceEvent = function (text) {
    if (text == "Cœur") {
        removeEntity(form);
        //Clear
        points = [];
        for (let i = 0; i < 2 * Math.PI; i += 0.01) {
            let x = Math.pow(Math.sin(i), 3);
            let y = Math.cos(i) - Math.pow(Math.cos(i), 4);

            points.push(new THREE.Vector2(x, y));
        }
        camera.position.z = 5;
        updateFigure(points);

    }
    else if (text == "Nombre d'Or") {
        removeEntity(form);
        //Clear
        points = [];
        for (let i = 0; i < 100; i += 0.01) {
            let x = i * Math.cos(i);
            let y = i * Math.sin(i);

            points.push(new THREE.Vector2(x, y));
        }
        camera.position.z = 150;
        updateFigure(points);
    }
    else if (text == "Fleur") {
        removeEntity(form);
        //Clear
        points = [];
        let a = 8;
        let b = 5;
        for (let i = 0; i < 100; i += 0.01) {
            let x = (a + b) * Math.sin(i) - b * Math.sin(((a / b) + 1) * i);
            let y = (a + b) * Math.cos(i) - b * Math.cos(((a / b) + 1) * i);

            points.push(new THREE.Vector2(x, y));
        }
        camera.position.z = 45;
        updateFigure(points);
    }
    else {
        console.log("Error");
    }
}

let updateFigure = function (points) {
    let geometry = new THREE.BufferGeometry().setFromPoints(points);
    let form = new THREE.Line(geometry, material);
    form.name = "figure";
    scene.add(form);
}

function animate() {
    requestAnimationFrame(animate);

    renderer.render(scene, camera);
}

function removeEntity(object) {
    let selectedObject = scene.getObjectByName(object.name);
    scene.remove(selectedObject);
}

animate();