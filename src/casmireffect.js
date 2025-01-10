// casimirEffect.js
const hBar = 1.0545718e-34; // Reduced Planck constant (J·s)
const c = 3e8; // Speed of light (m/s)
const pi = Math.PI;

// Function to calculate vacuum energy density
function calculateCasimirEnergyDensity(plateSeparation) {
  const density = -(pi ** 2 * hBar * c) / (240 * plateSeparation ** 4);
  return density; // J/m^3
}

// Function to calculate the fractional change in speed of light
function calculateSpeedOfLightChange(plateSeparation) {
  const change = -(44 / 135) * (pi ** 2 * hBar * c) / (plateSeparation ** 4);
  return change; // Fractional change
}

// Example: Plate separation = 1 micrometer
const plateSeparation = 1e-6; // meters
const vacuumEnergyDensity = calculateCasimirEnergyDensity(plateSeparation);
const speedChange = calculateSpeedOfLightChange(plateSeparation);

console.log(
  `Casimir vacuum energy density for plate separation ${plateSeparation} m: ${vacuumEnergyDensity.toExponential(3)} J/m^3`
);
console.log(
  `Fractional change in speed of light: ${speedChange.toExponential(3)}`
);