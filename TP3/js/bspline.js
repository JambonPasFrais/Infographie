let vecteurDeNoeud = [0,1,2,3,4,5];
let m = 2;//Degré
let k = m + 1; //Ordre 
let pointsDeControle = 3;//Points de contrôle
let n = pointsDeControle - 1;//Pn
i = 0;

function bSplineMath(index, degree, vectorTab, vector){
    if(degree - 1 == 0){
        if (vector >= vectorTab[index] && vector <= vectorTab[index+1]){
            return ((vector - vectorTab[index])/(vectorTab[index+degree] - vectorTab[index]))*1 + ((vectorTab[index+degree+1] - vector)/(vectorTab[index+degree+1] - vectorTab[index]))*1;
        }    
        else{
            return ((vector - vectorTab[index])/(vectorTab[index+degree] - vectorTab[index]))*0 + ((vectorTab[index+degree+1] - vector)/(vectorTab[index+degree+1] - vectorTab[index]))*0;
        }
    }
    return ((vector - vectorTab[index])/(vectorTab[index+degree] - vectorTab[index]))*bSplineMath(index, degree-1, vectorTab, vector) + ((vectorTab[index+degree+1] - vector)/(vectorTab[index+degree+1] - vectorTab[index]))*bSplineMath(index+1, degree - 1, vectorTab, vector);
}

function curveBSpline(){

}