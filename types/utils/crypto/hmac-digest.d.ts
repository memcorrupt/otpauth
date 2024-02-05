/**
 * Calculates an HMAC digest.
 * In Node.js, the command "openssl list -digest-algorithms" displays the available digest algorithms.
 * @param {string} algorithm Algorithm.
 * @param {ArrayBuffer} key Key.
 * @param {ArrayBuffer} message Message.
 * @returns {Promise<ArrayBuffer>} Digest.
 */
export function hmacDigest(algorithm: string, key: ArrayBuffer, message: ArrayBuffer): Promise<ArrayBuffer>;
