/*Variable*/
let coordX, coordY = 0, pointsArray = [], knotVector = [], degree = 0, doWeRender = false;
/*Tableau en 3D pour stocker toutes les variables de la courbe : 
[0] => les points de contrôles
[1] => le degré associé
[2] => le vecteur de noeud associé */
let bsplineCurve = new Array (3);

/* DOM Manipulation */
let inputX = document.getElementById('coordX');
let inputY = document.getElementById('coordY');
let confirmBtn = document.getElementById('confirmCoord');

let inputDegree = document.getElementById('curveDegree');
let confirmDegreeBtn = document.getElementById('confirmCurvDegree');

let inputKnotVector = document.getElementsByClassName('knotVectorInput');//inputKnotVector est un tableau
let confirmKnotVectorBtn = document.getElementById('confirmKnotVector');
let inputKnotVectorsDiv = document.getElementsByClassName('inputKnotVectorDiv');

let table = document.getElementById('points');
/*Listeners*/
confirmBtn.addEventListener('click', () => {//Création de listener pour le bouton "VALIDER" des coordonnées
    doWeRender = true;//On veut voir quelque chose après avoir cliqué sur le bouton
    confirmCoordEvent();
    inputX.value = "";
    inputY.value = "";
});
confirmDegreeBtn.addEventListener('click', () => {//Création de listener pour le bouton VALIDER du degré
    doWeRender = true;
    confirmDegreeEvent();
    inputDegree.value = "";
});
confirmKnotVectorBtn.addEventListener('click', () => {//Création de listener pour le bouton VALIDER du vecteur de noeud
    doWeRender = true;
    confirmKnotVectorEvent();
    for (let i = 0; i < inputKnotVector.length; i++){
        inputKnotVector[i].value = "";
    }
});

/*Functions*/

//On vérifie que l'input n'est pas vide, si tout va bien on passe à la mise à jour
function confirmDegreeEvent(){
    if (inputDegree.value == ""){
        alert ("Entrez un degré valide pour la courbe");
        return;
    }
    updateDegreeTab();
}

//On vérifie que l'input n'est pas vide, si tout va bien on passe à la mise à jour
function confirmKnotVectorEvent(){
    for (let i = 0; i < inputKnotVector.length; i++){
        if (inputKnotVector[i].value == ""){
            alert ("Merci d'entrer le point " + (i+1) + " du vecteur de noeud");
            return;
        }
    }
    updateKnotVectorTab();
}

//Confirm Coord Event est utilisée lorsqu'un utilisateur rentre une nouvelle coordoonée dans le tableau de point. Elle vérifie les coordonnées de l"utilisateur puis modifie le tableau
function confirmCoordEvent() {
    //Vérification de si les inputs sont bien complétés tous les deux
    if (inputX.value == "" || inputY.value == ""){
        alert ("Entrez des coordonnées valides pour le point");
        return;
    }
    updateCoordTab();//Appel de la fonction de mise à jour du tableau
    return;
}

//Update degree Tab est une fonction utilisée pour que le degré entré par l'utilisateur passe dans le code Three
function updateDegreeTab(){
    degree = parseInt(inputDegree.value);
    inputDegree.placeholder = degree;//Visuel pour montrer qu'on accepte le degré
    bsplineCurve[1] = degree;
    //On met à jour l'affichage ou non
    if (doWeRender == true){
        theScene(bsplineCurve[0], bsplineCurve[1], bsplineCurve[2]);
        doWeRender = false;
    }
}

//Update Knot Vector Tab est une fonction utilisée pour que le vecteur de noed entré par l'utilisateur passe dabs le code Three
function updateKnotVectorTab(){
    let knotVector = [];
    //Dans cette partie on va prendre tous les éléments rentrés par l'utilisateur et bien les partager (exemple '3' + '4' => '34' et 3,4 => '3' et '4')
    for (let i = 0; i < inputKnotVector.length; i++){//On passe par tous les inputs
        knotVector.push(parseInt(inputKnotVector[i].value));//Chaque input est mis en INT et transféré dans le tableau général 'knotVector'
        inputKnotVector[i].placeholder = inputKnotVector[i].value;//Partie graphique qui permet de voir la valeur du vecteur de noeud pour chaque point
    }
    
    bsplineCurve[2] = knotVector;//Mise à jour du tableau BSPLINE en JS

    //On met à jour l'affichage ou non
    if (doWeRender == true){
        theScene(bsplineCurve[0], bsplineCurve[1], bsplineCurve[2]);
        doWeRender = false;
    }
}

//UpdateCoordTab est utilisée pour mettre à jour le tableau HTML (Le tableau que l'utilisateur voit) lorsqu'il ajoute un point à la courbe de Bézier mais également le tableau que l'utilisateur ne voit pas (JAVASCRIPT)
function updateCoordTab() {
    coordX = parseInt(inputX.value);//On convertit la string (chaîne de caractère) en Int (nombre)
    coordY = parseInt(inputY.value);//On convertit la string (chaîne de caractère) en Int (nombre)

    //Mise à jour du tab HTML :
    //Cellules et ligne
    table.insertRow(1);//Insertion d'une ligne
    table.rows[1].insertCell(0); //Insertion d'une cellule dans la ligne
    table.rows[1].insertCell(1); //Insertion d'une cellule dans la ligne
    //Création des Input dans les différentes cellules
    createInput(table, 1, 0); //Création d'un input dans le tableau "table", à la ligne "1" et à la cellule "0"
    createInput(table, 1, 1); //Création d'un input dans le tableau "table", à la ligne "1" et à la cellule "1"
    //On transforme les coordonnées des différents points en "placeholder" pour améliorer l'USER EXPERIENCE (UX)
    table.rows[1].cells[0].children[0].placeholder = coordX;
    table.rows[1].cells[1].children[0].placeholder = coordY;
    //Création des boutons "modifier" dans les cellules du tableau
    createModificationImage(table, 1, 0);//création d'un bouton dans le tableau "table", à la ligne "1" et à la cellule "0"
    createModificationImage(table, 1, 1);//création d'un bouton dans le tableau "table", à la ligne "1" et à la cellule "1"  

    //Création des croix à côté des cases pour pouvoir supprimer des cases
    createDeleteCross(table, 1, 0);
    createDeleteCross(table, 1, 1);

    //Création d'un nouvel input pour le vecteur de noeud
    createKnotVectorInput();

    //Appel de la fonction qui met à jour Three.js pour représenter le Polygone de contrôle et la courbe de Bézier
    updateJsTabAfterCoordChange();
}

//Create Input est utilisée pour créer un "input" HTML ou autrement dit une box pour que l'utilisateur entre du texte
function createInput(tab, row, cell) {
    let input = document.createElement("input");//Création DOM
    input.type = "text";//Type d'input
    input.className = "inputTab"; //Class de l'input pour qu'il prenne les bonnes stylisations en css
    tab.rows[row].cells[cell].appendChild(input);//On ajoute l'input au tableau dans une ligne et une cellule précise
}

//Create Button est utilisée pour créer un bouton en HTML. C'est le bouton qui va permettre de modifier une coordonée de la coubre de Bézier
function createModificationImage(tab, row, cell){
    let pen = document.createElement("img");//Création DOM de l'image
    pen.src = "../css/modify-icon.png";//Source de l'image
    pen.className = "penTab";//Class du crayon pour qu'il prenne la bonne stylisation
    tab.rows[row].cells[cell].appendChild(pen);//Ajout de l'image à la cellule du tableau
    addListenerButtonTab(tab.rows[row].cells[cell]);//Ajout d'un listeners sur cette image
}

//Create Delete Cross est utilisée pour créer des images "croix" en html. Ces images vont permettre de supprimer une ligne du tableau
function createDeleteCross(tab, row, cell){
    let cross = document.createElement("img");//Création image en HTML
    cross.src = "../css/close-icon.png";//Source de l'image croix dans nos fichiers
    cross.className = "crossTab";//Class de la croix
    tab.rows[row].cells[cell].appendChild(cross);//Ajout de la croix dans l'HTML
    addListenerDeleteCrossTab(tab.rows[row].cells[cell]);//Appel de la fonction listener
}

//Create Knot Vector Input est utilisée pour créer des inputs supplémentairs lorsqu'un point est ajouté
function createKnotVectorInput(){
    let newInput = document.createElement('input');//Création du nouvel input
    let newBr = document.createElement('br');
    newInput.type = "text";
    newInput.className = "knotVectorInput";
    inputKnotVectorsDiv[0].appendChild(newBr);
    inputKnotVectorsDiv[0].appendChild(newInput);
}

//Supprime un input de knot vector
function deleteKnotVectorInput(){
    inputKnotVectorsDiv[0].removeChild(inputKnotVectorsDiv[0].children[inputKnotVectorsDiv[0].children.length -1]);
    inputKnotVectorsDiv[0].removeChild(inputKnotVectorsDiv[0].children[inputKnotVectorsDiv[0].children.length -1]);
    bsplineCurve[2].splice(bsplineCurve[2].length - 1, 1);
}

//Add Listener Button Tab est utilisée pour ajouter un listener sur un bouton d'une cellule du tableau. C'est cette fonction qui va rendre le bouton "modifier" utile 
function addListenerButtonTab(cell){
    cell.children[1].addEventListener('click', () => {//Ajout d'un listener de type "click"
        if (cell.children[0].value == ""){//Si jamais l'utilisateur n'a pas entré de valeur, on annule son action
            alert("Merci d'entrer une coordonnée valide");
            return;
        }
        //Si l'utilisateur arrive jusqu'ici, il a bien rempli l'input d'une valeur et les mises à jour vont se faire :
        cell.children[0].placeholder = cell.children[0].value; //On remplace le placeholder par ce que l'utilisateur a entré
        cell.children[0].value = "";//On supprime ce qui a été entré pour laisser le champ libre au place holder
        doWeRender = true;
        updateJsTabAfterCoordChange();
    });
}

//Add listener Delete Cross Tab est utilisée pour le clique de l'utilisateur sur la croix. Elle va supprimer la ligne sélectionnée.
function addListenerDeleteCrossTab(cell){
    cell.children[2].addEventListener('click', (oEvent)=> {
        let oEleBt = oEvent.currentTarget, oTr = oEleBt.parentNode.parentNode;//Repérage de la ligne
        oTr.remove();//Suppression de la ligne
        deleteKnotVectorInput();
        doWeRender = true;
        updateJsTabAfterCoordChange();//Mise à jour du tableau JS et donc de la figure                 
    });
}

//Update Js Tab After Coord Change est utilisée pour mettre à jour le Tableau JAVASCRIPT qui va interagir avec Three.js une fois qu'une modification de coordonnée a été effectuée
function updateJsTabAfterCoordChange(){
    pointsArray = [];//Le tableau JS est remis à 0
    //Boucle for qui ajoute les coordonnées dans le tableau
    for (let i = table.rows.length - 1; i > 0; i--){
        coordX = parseInt(table.rows[i].cells[0].children[0].placeholder);//On convertit la string (chaîne de caractère) en Int (nombre)
        coordY = parseInt(table.rows[i].cells[1].children[0].placeholder);//On convertit la string (chaîne de caractère) en Int (nombre)
        pointsArray.push(new THREE.Vector2(coordX, coordY));//On ajoute un nouveau VECTOR avec les bonnes coordonnées dans le tableau
    }
    bsplineCurve[0] = pointsArray;
    if (doWeRender == true){
        theScene(bsplineCurve[0], bsplineCurve[1], bsplineCurve[2]);
        doWeRender = false;
    }
}