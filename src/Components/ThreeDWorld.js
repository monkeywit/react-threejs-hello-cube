import React, {useEffect} from 'react';
import * as THREE from 'three'

let scene, camera, renderer, cube

const ThreeDWorld = () => {

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x2a3b4c)

    camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth/window.innerHeight
    )

    renderer = new THREE.WebGLRenderer()
    renderer.setSize(window.innerWidth, window.innerHeight)

    let geometry = new THREE.BoxGeometry( 1, 1, 1 );
    let material = new THREE.MeshBasicMaterial( {color: 0x00ff00, wireframe: true} );
    cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    camera.position.z = 5

    useEffect(() => {
        document.getElementById("World").appendChild(renderer.domElement)
    })

    animate()

    return ( 
        <div id="World"></div>
     );
}

const animate = () => {
    requestAnimationFrame(animate)

    cube.rotation.x += 0.01
    cube.rotation.y += 0.01

    renderer.render(scene, camera)
}
 
export default ThreeDWorld;