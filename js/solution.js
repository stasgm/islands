(function (root) {
    var WATER = root.SHRI_ISLANDS.WATER;
    var ISLAND = root.SHRI_ISLANDS.ISLAND;

    function locateIsland(matrix, i, j) {
        if (i < 0 || i > matrix.length-1) { return false }
        if (j < 0 || j > matrix[0].length-1) { return false }

        var island = matrix[i][j] === WATER;
        matrix[i][j] = ISLAND;

        var visualizeSolution = root.SHRI_ISLANDS.visualizeSolution;
        visualizeSolution;

        if (island) {
            locateIsland(matrix, i, j + 1);
            locateIsland(matrix, i, j - 1);
            locateIsland(matrix, i + 1, j);
            locateIsland(matrix, i - 1, j);
        }
        return island;
    }

    /**
     * Функция находит кол-во островов на карте
     * ВАЖНО! Сигнатуру функции изменять нельзя!
     *
     * @param {number[][]} map карта островов представленная двумерной матрицей чисел
     * @returns {number} кол-во островов
     */

    function solution(map) {
        // todo: подсчитать кол-во островов на карте
        var islandNum = 0;

        var matrix = JSON.parse(JSON.stringify(map));

        matrix[0][0] = 3;

        for(var i=0; i < matrix.length; i++) {
            for(var j=0; j < matrix[0].length; j++) {
                if (locateIsland(matrix, i, j)) islandNum++;
            }
        }

        return islandNum;
    }

    root.SHRI_ISLANDS.solution = solution;
})(this);
