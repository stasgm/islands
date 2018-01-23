(function (root) {
    var WATER = root.SHRI_ISLANDS.WATER;
    var ISLAND = root.SHRI_ISLANDS.ISLAND;

    /**
     * Бонусное задание.
     * Необходимо взять реализацию функции solution и доработать,
     * добавив функционал, который позволит пошагово визуализировать работу данного алгоритма.
     * Сигнатуру функции можно выбрать наиболее удобную для вашей визуализации
     */

    function locateIsland(matrix, i, j) {
        if (i < 0 || i > matrix.length-1) { return false }
        if (j < 0 || j > matrix[0].length-1) { return false }

        var island = matrix[i][j] === ISLAND;
        matrix[i][j] = WATER;

        if (island) {
            locateIsland(matrix, i, j + 1);
            locateIsland(matrix, i, j - 1);
            locateIsland(matrix, i + 1, j);
            locateIsland(matrix, i - 1, j);
        }
        return island;
    }

    function visualizeSolution(map) {
        // todo: визуализировать работу алгоритма
        var islandNum = 0;

        var matrix = JSON.parse(JSON.stringify(map));

        for(var i=0; i < matrix.length; i++) {
            for(var j=0; j < matrix[0].length; j++) {
                if (locateIsland(matrix, i, j)) islandNum++;
            }
        }
    }

    root.SHRI_ISLANDS.visualizeSolution = visualizeSolution;
})(this);
