var scene, camera, renderer;
var sphere;
const WIDTH = 1024;
const HEIGHT = 512;

function init() {
	scene = new THREE.Scene();
	
	camera = new THREE.PerspectiveCamera(75, WIDTH / HEIGHT, 0.1, 1000);
	camera.position.z = 200;
	camera.position.y = 200;
	camera.lookAt(scene.position);

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

function animate(t) {
	orbit(sphere, 100, 0.2, t);
	requestAnimationFrame(animate);
	renderer.render(scene, camera);
}

function createObjects() {
	var sphereGeo = new THREE.SphereGeometry(10, 32, 32);
	var sphereMat = new THREE.MeshBasicMaterial({color: 0x0000F0});
	sphere = new THREE.Mesh(sphereGeo, sphereMat);
	scene.add(sphere);

	var sunGeo = new THREE.SphereGeometry(25, 32, 32);
	var sunMat = new THREE.MeshBasicMaterial({color: 0xFFFF00});
	var sun = new THREE.Mesh(sunGeo, sunMat);
	scene.add(sun);
}

init();
createObjects();
animate(new Date().getTime());