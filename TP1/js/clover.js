/*Les commentaires de ce fichier sont similaires à ceux de cercle.js car rien ne change mis à part la formule*/
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const material = new THREE.LineBasicMaterial({
    color: 0xd9d397
});

const points = [];

/*Application de la formule donnée par l'énoncé*/
for ( let i = 0; i <= 360; i++ ) {

    const x = 2*Math.pow(Math.sin(i*(Math.PI/180)),2)*Math.cos(i*(Math.PI/180));
    const y = 2*Math.pow(Math.cos(i*(Math.PI/180)),2)*Math.sin(i*(Math.PI/180));

    points.push(new THREE.Vector2(x, y));
}

const geometry = new THREE.BufferGeometry().setFromPoints( points );

const line = new THREE.Line( geometry, material );
scene.add( line );

camera.position.setZ(1.5);
renderer.render( scene, camera );