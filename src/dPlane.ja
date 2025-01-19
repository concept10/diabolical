// Constants for simulation
const G = 6.67430e-11; // Gravitational constant (m^3 kg^-1 s^-2)
const c = 3e8;         // Speed of light (m/s)
const exoticMatterDensity = -1e-5; // Negative energy density (arbitrary units)

// Define the properties of the spheres
const spheres = [
  { mass: 1e5, x: 10, y: 0, z: 0 },  // Sphere 1
  { mass: 1e5, x: -5, y: 8.66, z: 0 }, // Sphere 2
  { mass: 1e5, x: -5, y: -8.66, z: 0 } // Sphere 3
];

// Relativity and gravitational field variables
let expectedMassEnergy = 0;  // Total energy in the system
let gravitationalField = 0;  // Gravitational field strength at the origin
let relativityOutput = 0;    // Hypothetical relativity-based result

// Function to calculate space-time curvature and energy
function calculateSpaceTimeEffects(point, spheres) {
  let curvature = 0;
  let fieldStrength = 0;

  for (const sphere of spheres) {
    // Distance from the point to the sphere
    const dx = point.x - sphere.x;
    const dy = point.y - sphere.y;
    const dz = point.z - sphere.z;
    const distance = Math.sqrt(dx ** 2 + dy ** 2 + dz ** 2);

    if (distance > 0) {
      // Curvature: Simplified formula (G * m / r^2)
      curvature += G * sphere.mass / (distance ** 2);

      // Gravitational field strength: F = G * m / r^2
      fieldStrength += sphere.mass / (distance ** 2);
    }
  }

  // Include exotic matter's contribution to curvature
  curvature += exoticMatterDensity;

  return { curvature, fieldStrength };
}

// Function to calculate relativistic energy and outputs
function calculateRelativity(spheres) {
  // Total mass-energy: E = mc^2 (summed over all spheres)
  const energy = spheres.reduce((total, sphere) => total + sphere.mass * c ** 2, 0);

  // Hypothetical relativistic output based on energy and curvature
  const relativityResult = energy * exoticMatterDensity;

  return { energy, relativityResult };
}

// Function to update sphere positions (rotating in a triangular formation)
function updateSpherePositions(spheres, angle, radius) {
  spheres[0].x = radius * Math.cos(angle);
  spheres[0].y = radius * Math.sin(angle);

  spheres[1].x = radius * Math.cos(angle + (2 * Math.PI) / 3);
  spheres[1].y = radius * Math.sin(angle + (2 * Math.PI) / 3);

  spheres[2].x = radius * Math.cos(angle + (4 * Math.PI) / 3);
  spheres[2].y = radius * Math.sin(angle + (4 * Math.PI) / 3);
}

// Simulate the wormhole formation process
let angle = 0;             // Initial rotation angle
const angularSpeed = 0.01; // Rotation speed
const radius = 10;         // Radius of rotation (meters)

function simulateWormhole() {
  // Update sphere positions
  updateSpherePositions(spheres, angle, radius);

  // Calculate space-time curvature and field strength
  const throatPoint = { x: 0, y: 0, z: 0 }; // Wormhole throat point
  const { curvature, fieldStrength } = calculateSpaceTimeEffects(throatPoint, spheres);

  // Calculate relativistic effects
  const { energy, relativityResult } = calculateRelativity(spheres);

  // Update global variables for visualization or analysis
  expectedMassEnergy = energy;
  gravitationalField = fieldStrength;
  relativityOutput = relativityResult;

  // Log outputs
  console.log(`Throat Curvature: ${curvature.toExponential(3)}`);
  console.log(`Gravitational Field: ${fieldStrength.toExponential(3)} N/kg`);
  console.log(`Expected Mass-Energy: ${energy.toExponential(3)} J`);
  console.log(`Relativity Output: ${relativityResult.toExponential(3)} (arbitrary units)`);
  console.log('---');

  // Increment angle for rotation
  angle += angularSpeed;

  // Repeat the simulation
  setTimeout(simulateWormhole, 100);
}

// Start the simulation
simulateWormhole();