// einsteinFieldEquation.js
const G = 6.67430e-11; // Gravitational constant (m^3 kg^-1 s^-2)
const c = 3e8; // Speed of light (m/s)
const M_Jupiter = 1.898e27; // Mass of Jupiter (kg)

// Function to calculate exotic matter mass for a wormhole
function calculateWormholeMass(throatRadius) {
  const exoticMass = -(0.709 * M_Jupiter) * (1 / throatRadius);
  return exoticMass; // Negative mass indicates "exotic matter"
}

// Example: Calculate for a 1-meter wormhole throat
const throatRadius = 1; // meters
const exoticMass = calculateWormholeMass(throatRadius);
console.log(
  `Exotic matter required for a wormhole with throat radius ${throatRadius} m: ${exoticMass.toExponential(3)} kg`
);