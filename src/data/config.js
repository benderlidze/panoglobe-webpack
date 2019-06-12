import TWEEN from '@tweenjs/tween.js';

// This object contains the state of the app
export default {
  isDev: false,
  isShowingStats: false,
  isLoaded: false,
  isTweening: false,
  isRotating: true,
  isMouseMoving: false,
  isMouseOver: false,
  maxAnisotropy: 8,
  dpr: 1,
  easing: TWEEN.Easing.Quadratic.InOut,
  duration: 500,
  data: {
    geojsonPath: './data/countries_states.geojson',
  },
  routes: {
    linewidth: 3, // error on 2.0 width wtf lol
    lineSegments: 7,
    segmentMultiplicator: 2,
    urls: [
      "https://relaunch.panoreisen.de/index.php?article_id=7&rex_geo_func=datalist",
      "https://relaunch.panoreisen.de/index.php?article_id=165&rex_geo_func=datalist"
    ]
  },
  texture: {
    path: './textures/',
    imageFiles: [
      // {name: 'UV', image: 'UV_Grid_Sm.jpg'},
      {name: 'clouds', image: '4k/fair_clouds_4k.jpg'},
      {name: 'stars', image: 'galaxy_starfield.png'},
      {name: 'uvtest', image: 'UV_Grid_Sm.jpg'},
      {name: 'earthColor', image: '4k/2_no_clouds_4k.jpg'},
      // {name: 'earthColor', image: '8k/2_no_clouds_8k.jpg'},
      {name: 'invertedSpecularmap', image: '4k/Spec-Mask-inverted_4k.png'},
      {name: 'specmap', image: '4k/Spec-Mask_4k.png'},
      {name: 'normalmap', image: '4k/earth_normalmap_flat_4k.jpg'},
      {name: 'displacemap', image: '4k/Bump_4k.jpg'},
      // {name: 'night', image: '4k/Night-Lights-4k.jpg'},
    ]
  },
  galaxy: {
    rotationSpeed: 0.006,
    radius: 500,
    widthSegments: 8,
    heightSegments: 4,
    x: 0,
    y: - 125,
    z: 0
  },
  globus: {
    radius: 100,
    detail: 6,
    material: {
      color: 0xffffff,
      shininess: 8,
      specular: 0xBBBBBB,
      map: "earthColor",
      normalMap: "normalmap",
      specularMap: "invertedSpecularmap",
      normalScale: -0.4,
      displacementMap: "displacemap",
      // displacementMap: "earthColor",
      displacementScale: 2,
      // displacementScale: 20,
      // displacementBias: 0.428408,
      displacementBias: 0,
    },
    outerGlow: {
      enabled: true,
      color: 0x00b3ff,
      coeficient: 0.5,
      power: 7.0
    },
    innerGlow: {
      enabled: true,
      color: 0x00b3ff,
      coeficient: 0.8,
      power: 2.0
    },
    clouds: {
      opacity: 0.3,
      enabled: true,
      // texture: ,
    }
  },
  fog: {
    color: 0xAAAAEE,
    near: 0.0004
  },
  camera: {
    fov: 25,
    near: 10,
    far: 1500,
    aspect: 1,
    posX: 0,
    posY: 80,
    posZ: 500
  },
  controls: {
    autoRotate: false,
    autoRotateSpeed: -0.5,
    rotateSpeed: 0.10,
    enableDamping: true,
    dampingFactor: 0.15,
    enableZoom: true,
    zoomSpeed: 1.8,
    minDistance: 200,
    maxDistance: 600,
    minPolarAngle: Math.PI / 5,
    maxPolarAngle: Math.PI / 1.5,
    minAzimuthAngle: -Infinity,
    maxAzimuthAngle: Infinity,
    enablePan: false,
    target: {
      x: 0,
      y: 0,
      z: 0
    }
  },
  ambientLight: {
    enabled: false,
    color: 0x141414
  },
  shadow: {
    enabled: false,
    helperEnabled: false,
    bias: 0,
    mapWidth: 2048,
    mapHeight: 2048,
    near: 10,
    far: 220,
    top: 100,
    right: 100,
    bottom: -100,
    left: -100
  },
  spotlight: {
    //0xCEECF5 orig //0x44ffaa mystic green 500, 4	
    color: 0xCEECF5,
    // color: 0xffaa00,
    intensity: 0.4,
    distance: 500,
    angle: Math.PI / 4,
    decay: 2,
    x: 147,
    y: -179,
    z: -21,
    targetx: -74,
    targety: -12,
    targetz: 41
  },
  pointLight: {
    enabled: true,
    color: 0xffffff,
    intensity: 0.54,
    distance: 115,
    x: 0,
    y: 0,
    z: 0
  },
  hemiLight: {
    enabled: true,
    color: 0xffffff,
    groundColor: 0xffffff,
    hColor: 0.6,
    sColor: 0.1,
    lColor: 0.8,
    groundHColor: 0.5,
    groundSColor: 0.1,
    groundLColor: 0.4,
    intensity: 1,
    x: 0,
    y: 500,
    z: 0,
    night: {
      // color:0xffc600,
      // color: 16754688,
      color: "hsl(41, 95%, 30%)",
      // groundHColor: 0xffc600,
      // groundHColor: 16754688,
      groundHColor: "hsl(41, 95%, 30%)",
      // intensity: 1.3
    }
  }, 
  directionalLight: {
    enabled: true,
    color: 0xffffff,
    colorH: 0.1,
    colorS: 0.1,
    colorL: 0.40,
    intensity: 0.9,
    x: -1,
    y: 5,
    z: 1,
    multiplyScalarPosition: 50,
    night: {
      // color: 0x8ebbff,
      color: 7391996,
      intensity: 0.5
    }
  },
};