/* THREE - Commentaires détaillés de cette partie dans le fichier cercle.js*/
let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const material = new THREE.LineBasicMaterial({
    color: 0xd9d397
});

camera.position.z = 5;
let points = [];


/*Explication méthode : Pour cette partie bonus, nous avons décidé d'afficher des formes personnalisées que nous avons créées. 
Ces formes sont : Un coeur, Le nombre d'or et une fleur
Afin de bien redéfinir la scène chaque fois que la figure change nous avons décidé de mettre de base un "cercle" qui sera enlevé et remplacé par les formes*/

//Formule du cercle
for (let i = 0; i < 2 * Math.PI; i += 0.01) {
    let x = Math.cos(i);
    let y = Math.sin(i);

    points.push(new THREE.Vector2(x, y));
}
//Création du cercle dans la scène
let geometry = new THREE.BufferGeometry().setFromPoints(points);
let form = new THREE.Line(geometry, material);
form.name = 'figure';//Il est utile et nécessaire de donner un nom à la figure pour pouvoir l'enlever
scene.add(form);
renderer.render(scene, camera);

/* Page Interaction :
Ajout de Listener sur les boutons qui enverront une requête comme quoi l'utilisateur veut changer de figure*/
let buttonTab = document.getElementsByClassName("buttons");
for (let i = 0; i < buttonTab.length; i++) {
    buttonTab[i].addEventListener('click', () => {
        choiceEvent(buttonTab[i].textContent);
    });
}

/*Fonctions utilisées pour cette page*/
//ChoiceEvent est la fonction appelée chaque fois que l'utilisateur clique sur un bouton. 
let choiceEvent = function (text) {
    /*Le changement de figure se passe toujours de la même manière : 
    - Choix de la figure
    - Nettoyage du tableau de points pour en accueillir des nouveaux
    - Nettoyage de la scène pour accueillir des nouveaux graphiques
    - Utilisiation de la formule adéquate pour la figure
    - Mis à jour de la position caméra
    - Création de la figure sur la scène */
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

//updateFigure va recréer une géométrie et une figure en fonction du tableau de points passés en paramètre
let updateFigure = function (points) {
    let geometry = new THREE.BufferGeometry().setFromPoints(points);
    let form = new THREE.Line(geometry, material);
    form.name = "figure";
    scene.add(form);
}

//removeEntity va supprimer l'objet créé précédemment soit le coeur, le cercle, le nombre d'or ou la fleur
function removeEntity(object) {
    let selectedObject = scene.getObjectByName(object.name);//Accès à l'objet par son nom ! (Utilité de le définir au début ligne 31 et à chaque nouvelle création dans updateFigure)
    scene.remove(selectedObject);
}

//La fonction animate a pour but d'actualiser le rendu en permanance, c'est une boucle infinie
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();