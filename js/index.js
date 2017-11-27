var scene, camera, renderer, controls;
var earth, sun;
const WIDTH = window.innerWidth - 4;
const HEIGHT = window.innerHeight - 4;

function init() {
	scene = new THREE.Scene();
	
	camera = new THREE.PerspectiveCamera(75, WIDTH / HEIGHT, 0.1, 1000);
	camera.position.z = 200;
	camera.position.y = 200;
	camera.lookAt(scene.position);

	controls = new THREE.OrbitControls( camera );

	renderer = new THREE.WebGLRenderer();
	renderer.setSize(WIDTH, HEIGHT);
	renderer.setClearColor(0x10171D, 1);
	document.getElementById("container").appendChild(renderer.domElement);
}

var origin = new THREE.Vector3(0,0,0);

function orbit(planet, radius, speed, t) {
	variation = (t * speed) / 250;
	planet.position.x = Math.cos(variation) * 100;
	planet.position.z = Math.sin(variation) * 100;
}

function translation(planet) {
	planet.rotateY(0.01);
}

function animate(t) {
	orbit(earth, 100, 0.2, t);
	translation(earth);
	translation(sun);
	requestAnimationFrame(animate);
	renderer.render(scene, camera);
}

function createObjects() {
	scene.add(new THREE.AmbientLight(0xeef0ff));

	// create planet
	var texture = new THREE.TextureLoader().load("images/earth.jpg");
	
	var earthGeo = new THREE.SphereGeometry(10, 32, 32);
	var earthMat = new THREE.MeshBasicMaterial({color: 0xFFFFFF, map: texture});
	earth = new THREE.Mesh(earthGeo, earthMat);
	scene.add(earth);

	// load a texture, set wrap mode to repeat
	var texture = new THREE.TextureLoader().load("images/sun.jpg");

	// create sun
	var sunGeo = new THREE.SphereGeometry(25, 32, 32);
	var sunMat = new THREE.MeshPhongMaterial({color: 0xFFFFFF, map: texture});
	sun = new THREE.Mesh(sunGeo, sunMat);
	scene.add(sun);
}

init();
createObjects();
animate(new Date().getTime());