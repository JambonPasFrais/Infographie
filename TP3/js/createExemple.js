//First point
inputX.value = 1;
inputY.value = 2;
confirmCoordEvent();

//Second point
inputX.value = 2;
inputY.value = 0;
confirmCoordEvent();

//Third point
inputX.value = 3;
inputY.value = 4;
confirmCoordEvent();

//Fourth point
inputX.value = 4;
inputY.value = 1;
confirmCoordEvent();

//Degree
inputDegree.value = 2;
confirmDegreeEvent();

//Render
doWeRender = true;

//Knot Vector
for (let i = 0; i < inputKnotVector.length; i++){
    inputKnotVector[i].value = i;
}
confirmKnotVectorEvent();

for (let i = 0; i < inputKnotVector.length; i++){
    inputKnotVector[i].value = "";
}
inputDegree.value = "";
inputX.value = "";
inputY.value = "";