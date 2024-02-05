/**
 * HOTP: An HMAC-based One-time Password Algorithm.
 * @see [RFC 4226](https://tools.ietf.org/html/rfc4226)
 */
export class HOTP {
    /**
     * Default configuration.
     * @type {{
     *   issuer: string,
     *   label: string,
     *   issuerInLabel: boolean,
     *   algorithm: string,
     *   digits: number,
     *   counter: number
     *   window: number
     * }}
     */
    static get defaults(): {
        issuer: string;
        label: string;
        issuerInLabel: boolean;
        algorithm: string;
        digits: number;
        counter: number;
        window: number;
    };
    /**
     * Generates an HOTP token.
     * @param {Object} config Configuration options.
     * @param {Secret} config.secret Secret key.
     * @param {string} [config.algorithm='SHA1'] HMAC hashing algorithm.
     * @param {number} [config.digits=6] Token length.
     * @param {number} [config.counter=0] Counter value.
     * @returns {Promise<string>} Token.
     */
    static generate({ secret, algorithm, digits, counter, }: {
        secret: Secret;
        algorithm?: string | undefined;
        digits?: number | undefined;
        counter?: number | undefined;
    }): Promise<string>;
    /**
     * Validates an HOTP token.
     * @param {Object} config Configuration options.
     * @param {string} config.token Token value.
     * @param {Secret} config.secret Secret key.
     * @param {string} [config.algorithm='SHA1'] HMAC hashing algorithm.
     * @param {number} config.digits Token length.
     * @param {number} [config.counter=0] Counter value.
     * @param {number} [config.window=1] Window of counter values to test.
     * @returns {Promise<number|null>} Token delta or null if it is not found in the search window, in which case it should be considered invalid.
     */
    static validate({ token, secret, algorithm, digits, counter, window, }: {
        token: string;
        secret: Secret;
        algorithm?: string | undefined;
        digits: number;
        counter?: number | undefined;
        window?: number | undefined;
    }): Promise<number | null>;
    /**
     * Creates an HOTP object.
     * @param {Object} [config] Configuration options.
     * @param {string} [config.issuer=''] Account provider.
     * @param {string} [config.label='OTPAuth'] Account label.
     * @param {boolean} [config.issuerInLabel=true] Include issuer prefix in label.
     * @param {Secret|string} [config.secret=Secret] Secret key.
     * @param {string} [config.algorithm='SHA1'] HMAC hashing algorithm.
     * @param {number} [config.digits=6] Token length.
     * @param {number} [config.counter=0] Initial counter value.
     */
    constructor({ issuer, label, issuerInLabel, secret, algorithm, digits, counter, }?: {
        issuer?: string | undefined;
        label?: string | undefined;
        issuerInLabel?: boolean | undefined;
        secret?: string | Secret | undefined;
        algorithm?: string | undefined;
        digits?: number | undefined;
        counter?: number | undefined;
    } | undefined);
    /**
     * Account provider.
     * @type {string}
     */
    issuer: string;
    /**
     * Account label.
     * @type {string}
     */
    label: string;
    /**
     * Include issuer prefix in label.
     * @type {boolean}
     */
    issuerInLabel: boolean;
    /**
     * Secret key.
     * @type {Secret}
     */
    secret: Secret;
    /**
     * HMAC hashing algorithm.
     * @type {string}
     */
    algorithm: string;
    /**
     * Token length.
     * @type {number}
     */
    digits: number;
    /**
     * Initial counter value.
     * @type {number}
     */
    counter: number;
    /**
     * Generates an HOTP token.
     * @param {Object} [config] Configuration options.
     * @param {number} [config.counter=this.counter++] Counter value.
     * @returns {Promise<string>} Token.
     */
    generate({ counter }?: {
        counter?: number | undefined;
    } | undefined): Promise<string>;
    /**
     * Validates an HOTP token.
     * @param {Object} config Configuration options.
     * @param {string} config.token Token value.
     * @param {number} [config.counter=this.counter] Counter value.
     * @param {number} [config.window=1] Window of counter values to test.
     * @returns {Promise<number|null>} Token delta or null if it is not found in the search window, in which case it should be considered invalid.
     */
    validate({ token, counter, window }: {
        token: string;
        counter?: number | undefined;
        window?: number | undefined;
    }): Promise<number | null>;
    /**
     * Returns a Google Authenticator key URI.
     * @returns {string} URI.
     */
    toString(): string;
}
import { Secret } from "./secret.js";
