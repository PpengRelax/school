/**
 * 蛇
 */
function Snake() {
    this.arr = [{
            row: 5,
            col: 2
        },
        {
            row: 5,
            col: 3
        },
        {
            row: 5,
            col: 4
        },
        {
            row: 5,
            col: 5
        },
        {
            row: 5,
            col: 6
        }
    ];
    //左 37 上 38 右 39 下 40 回车 13
    this.direction = 39;
    this.flag = true;
}

Snake.prototype.move = function () {

    var newHead = {
        row: this.arr[this.arr.length - 1].row,
        col: this.arr[this.arr.length - 1].col
    };
    if (this.direction === 37) {
        newHead.col--;
    } else if (this.direction === 38) {
        newHead.row--;
    } else if (this.direction === 39) {
        newHead.col++;
    } else if (this.direction === 40) {
        newHead.row++;
    }
    this.arr.push(newHead);
    this.arr.shift();
    this.flag = true;
}

Snake.prototype.changeDirection = function (direction) {
    if(!this.flag){
        return;
    }

    this.flag = false;

    var result = Math.abs(this.direction - direction);

    if (result === 0 || result === 2) {
        return;
    } else {
        this.direction = direction;
    }

}