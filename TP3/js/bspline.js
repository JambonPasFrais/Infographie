//C'est ici que tout le back est codé
//Toutes les variables globales
const scene = new THREE.Scene(); //Scène sur laquelle nous allons afficher nos différentes figures
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000); //Création d'une caméra ou d'un "point de vue" pour regarder la scène et donc nos figures

const renderer = new THREE.WebGLRenderer(); //Outil qui génère les graphiques des figures, en l'occurence les points
renderer.setSize(window.innerWidth, window.innerHeight);//Adaptation de ce rendu à la taille de la fenêtre
document.body.appendChild(renderer.domElement); //création de la scène

const material = new THREE.LineBasicMaterial({
    color: 0xd9d397 //Couleur du polygone de contrôle
});
const material2 = new THREE.LineBasicMaterial({
    color: 0x97d9d3 //Couleur de la courbe de Bézier
});

const pointsRentres = []; //Tableau de points rentrés par l'utilisateur

//Valeurs temporelles
pointsRentres.push(new THREE.Vector2(878, 998));
pointsRentres.push(new THREE.Vector2(161, 746));
pointsRentres.push(new THREE.Vector2(88, 8));
pointsRentres.push(new THREE.Vector2(912, 2));

//abs(xMin) + abs(xMax) <= 1000
//abs(yMin) + abs(yMax) <= 1000

/**** new ****/
let vectorN = [0, 1, 2, 3, 4, 5, 6];     // vecteur de noeuds
let m = 2;                       //degré -> vérifier que m est possible

/*Afin de bien redéfinir la scène chaque fois que la figure change nous avons décidé de mettre de base une courbe de bézier ainsi que quelques points de contrôles qui seront enlévés et remplacés par d'autres dès que l'utilisateur ajoute un point de contrôle*/
let vector2ArrayBasic = [];
vector2ArrayBasic.push(new THREE.Vector2(1, 2));
vector2ArrayBasic.push(new THREE.Vector2(2, 0));
vector2ArrayBasic.push(new THREE.Vector2(3, 4));
vector2ArrayBasic.push(new THREE.Vector2(4, 1));
camera.position.setZ(10);

/* Création des courbes */
let line = createPolygon(vector2ArrayBasic);
let curve = createBspline(vector2ArrayBasic, m, vectorN);
//La scène se met en place
renderer.render(scene, camera);

/**** Fonction d'animation ****/

function theScene(tabPoints, degree, knotVector) {
    console.log(knotVector);
    vector2ArrayBasic = [];
    removeEntity(line);
    removeEntity(curve);

    //Calcul des valeurs extrêmes pour x et y qui permettent d'adapter la vue de la caméra en x et en y
    let xMin = 1000;
    let xMax = -1000;
    let yMin = 1000;
    let yMax = -1000;

    for (let t = 0; t < tabPoints.length; t++) {
        if (xMin > tabPoints[t].x) xMin = tabPoints[t].x
        if (xMax < tabPoints[t].x) xMax = tabPoints[t].x
        if (yMin > tabPoints[t].y) yMin = tabPoints[t].y
        if (yMax < tabPoints[t].y) yMax = tabPoints[t].y
    }

    //Calcul de la valeur maximale en x ou en y pour adapter la profondeur de la caméra
    let superMax = 0;
    if (Math.abs(xMin) + Math.abs(xMax) > Math.abs(yMin) + Math.abs(yMax)) superMax = Math.abs(xMin) + Math.abs(xMax);
    else superMax = Math.abs(yMin) + Math.abs(yMax);

    /**** Polygone de contrôle ****/
    createPolygon(tabPoints);

    /**** Courbe de Bézier ****/
    createBspline(tabPoints, degree, knotVector);

    /**** Caméra ****/

    //Point de vue de la caméra qui varie en fonction des points entrés
    camera.position.setX((xMin + xMax) / 2);
    camera.position.setY((yMin + yMax) / 2);
    camera.position.setZ(superMax);

    //Actualisation de la scène
    renderer.render(scene, camera);
}

function removeEntity(object) {
    let selectedObject = scene.getObjectByName(object.name);//Accès à l'objet par son nom ! D'où l'utilité de le définir au début ligne 31 et à chaque nouvelle création dans updateFigure
    scene.remove(selectedObject);
}

function addEntity(fromPoints) {
    let geometry = new THREE.BufferGeometry().setFromPoints(fromPoints);
    let line = new THREE.Line(geometry, material);
    line.name = "figure";//Encore une fois important de nommer la figure
    scene.add(line);
}

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

/**** Courbe B-SPLINE ****/

function createBspline(tabOfPoints, degre, knots){
    //Calcul de la courbe de Bézier en fonction des points de l'utilisateur
    let pointsSpline = Bspline(tabOfPoints, degre, knots);
    //Création d'une "géométrie" pour la courbe de Bézier
    let geometry = new THREE.BufferGeometry().setFromPoints(pointsSpline);
    //Utilisation de cette géométrie ainsi que le matériel pour créer le tracé de la courbe de Bézier
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
        let p = {x: 0, y: 0}
        for (let i = 0; i < n + 1; i++) {
            let px = points[i].x * N(i,degree,knots,t);
            let py = points[i].y * N(i,degree,knots,t);
            //Rentrée des points de la courbes B spline dans l'objet p
            p.y += py;
            p.x += px;
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