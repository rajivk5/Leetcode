/**
 * @param {number[][]} dimensions
 * @return {number}
 */
var areaOfMaxDiagonal = function (dimensions) {
    let maxDiagonal = 0;
    let maxArea = 0;

    for (let i = 0; i < dimensions.length; i++) {
        const length = dimensions[i][0];
        const width = dimensions[i][1];

        const diagonalSq = length * length + width * width;
        const area = length * width;

        if (diagonalSq > maxDiagonal) {
            maxDiagonal = diagonalSq;
            maxArea = area;
        } else if (diagonalSq === maxDiagonal) {
            maxArea = Math.max(maxArea, area);
        }
    }

    return maxArea;
};