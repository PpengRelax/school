/**
 * 地图 
 */
function Map(row, col) {
    this.row = row;
    this.col = col;

    this.wrap = document.createElement("div");

    this.arr = [];
};


Map.prototype.fill = function () {
    for (var i = 0; i < this.row; i++) {
        var row = document.createElement("div");
        this.arr[i] = row;
        this.arr[i] = [];
        row.className = "row";
        for (var j = 0; j < this.col; j++) {
            var grid = document.createElement("span");
            this.arr[i][j] = grid;
            grid.className = "grid";
            row.appendChild(grid);
        }
        this.wrap.appendChild(row);
    }
    this.wrap.className = "wrap";
    document.body.appendChild(this.wrap);
};

Map.prototype.clear = function () {
    for (var i = 0; i < this.arr.length; i++) {
        for(var j = 0;j<this.arr[i].length;j++){
            this.arr[i][j].style.backgroundColor = "";
        }
    }
}