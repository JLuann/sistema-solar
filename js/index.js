var scene, camera, renderer;
var sphere;
const WIDTH = 1024;
const HEIGHT = 512;

function init() {
	scene = new THREE.Scene();
	
	camera = new THREE.PerspectiveCamera(75, WIDTH / HEIGHT, 0.1, 1000);
	camera.position.z = 100;

	renderer = new THREE.WebGLRenderer();
	renderer.setSize(WIDTH, HEIGHT);
	document.getElementById("container").appendChild(renderer.domElement);
}

function animate(t) {
	requestAnimationFrame(animate);
	renderer.render(scene, camera);
}

function createObjects() {
	sphereGeo = new THREE.SphereGeometry(5, 32, 32);
	sphereMat = new THREE.MeshBasicMaterial({color: 0x00FF00});
	sphere = new THREE.Mesh(sphereGeo, sphereMat);
	scene.add(sphere);
}


init();

// do stuff
createObjects();

animate(new Date().getTime());