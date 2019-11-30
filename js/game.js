/**
 * 游戏类
 */

function Game(map, food, snake, block) {
   this.map = map;
   this.food = food;
   this.snake = snake;
   this.block = block;

   this.init();
}

//初始化方法
Game.prototype.init = function () {
   this.renderMap();
   this.renderFood();
   this.renderSnake();
   this.start();
   this.bindEvent();
}

//渲染地图
Game.prototype.renderMap = function () {
   this.map.fill();
}

Game.prototype.renderFood = function () {
   var row = this.food.row;
   var col = this.food.col;

   // this.map.wrap.children[row].children[col].style.backgroundColor = "red";
   this.map.arr[row][col].style.backgroundColor = "orange";
}

Game.prototype.renderSnake = function () {
   for (var i = 0; i < this.snake.arr.length; i++) {
      var row = this.snake.arr[i].row;
      var col = this.snake.arr[i].col;
      this.map.arr[row][col].style.backgroundColor = "green";
   }
}

Game.prototype.start = function () {
   _this = this;
   this.timer = setInterval(function () {
      _this.snake.move();
      _this.map.clear();
      _this.renderSnake();
      _this.renderFood();
   }, 1000)
}

Game.prototype.bindEvent = function () {
   var _this = this;
   document.onkeydown = function (e) {
      var ev = e || event;
      ev.preventDefault();
      var keycode = ev.keyCode;
      // console.log(keycode);
      if (keycode === 37 || keycode === 38 || keycode === 39 || keycode === 40) {
         _this.snake.changeDirection(keycode);
      }

   }
}