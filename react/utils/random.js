/**
 * Returns an array with values randomly retrieved from the input array.
 * @param vals
 * @returns {*}
 */
export function randomValues(vals) {
    return vals.filter(() => Math.random()<.5);
}