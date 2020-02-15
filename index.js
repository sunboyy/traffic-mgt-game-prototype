var vm = new Vue({
  el: "#app",
  data: {
    flow: {
      start: { x: 0, y: 3 },
      end: { x: 14, y: 5 },
      startDirection: "r"
    },
    traffics: [
      {
        start: { x: 4, y: 0 },
        end: { x: 10, y: 8 },
        direction: "d"
      }
    ],
    board: [
      [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
      [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
      [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
      [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0]
    ],
    controls: [
      "               ",
      "               ",
      "    d          ",
      "    d          ",
      "               ",
      "           r   ",
      "          d    ",
      "               ",
      "               "
    ],
    cars: [],
    isStarted: false
  },
  created() {
    this.player = {
      pos: Object.assign({}, this.flow.start),
      direction: this.flow.startDirection
    };
    for (let i = 0; i < this.controls.length; i++) {
      this.controls[i] = this.controls[i].split("");
    }
    for (let i = 0; i < 100; i++) this.step();
  },
  computed: {
    size() {
      return { width: this.board[0].length, height: this.board.length };
    }
  },
  methods: {
    symbol(i, j) {
      for (const traffic of this.traffics) {
        if (traffic.start.x == j && traffic.start.y == i) {
          return "S";
        } else if (traffic.end.x == j && traffic.end.y == i) {
          return "F";
        }
      }
      const hasPlayer = this.player.pos.x == j && this.player.pos.y == i;
      for (const car of this.cars) {
        if (car.pos.x == j && car.pos.y == i) {
          if (hasPlayer) {
            return "💥";
          } else {
            return "🚗";
          }
        }
      }
      if (hasPlayer) {
        return "🚑";
      }
      return "";
    },
    cellClass(i, j) {
      return {
        "cell-road": this.board[i][j] == 1,
        "cell-flow":
          (this.flow.start.x == j && this.flow.start.y == i) ||
          (this.flow.end.x == j && this.flow.end.y == i),
        "cell-up": this.controls[i][j] == "u",
        "cell-down": this.controls[i][j] == "d",
        "cell-left": this.controls[i][j] == "l",
        "cell-right": this.controls[i][j] == "r"
      };
    },
    move(car) {
      if (this.controls[car.pos.y][car.pos.x] != " ") {
        car.direction = this.controls[car.pos.y][car.pos.x];
      }
      switch (car.direction) {
        case "d":
          if (this.board[car.pos.y + 1][car.pos.x] == 1) {
            car.pos.y++;
          } else if (this.board[car.pos.y][car.pos.x + 1] == 1) {
            car.pos.x++;
            car.direction = "r";
          } else if (this.board[car.pos.y][car.pos.x - 1] == 1) {
            car.pos.x--;
            car.direction = "l";
          }
          break;
        case "u":
          if (this.board[car.pos.y - 1][car.pos.x] == 1) {
            car.pos.y--;
          } else if (this.board[car.pos.y][car.pos.x + 1] == 1) {
            car.pos.x++;
            car.direction = "r";
          } else if (this.board[car.pos.y][car.pos.x - 1] == 1) {
            car.pos.x--;
            car.direction = "l";
          }
          break;
        case "l":
          if (this.board[car.pos.y][car.pos.x - 1] == 1) {
            car.pos.x--;
          } else if (this.board[car.pos.y + 1][car.pos.x] == 1) {
            car.pos.y++;
          } else if (this.board[car.pos.y - 1][car.pos.x] == 1) {
            car.pos.y--;
          }
          break;
        case "r":
          if (this.board[car.pos.y][car.pos.x + 1] == 1) {
            car.pos.x++;
          } else if (this.board[car.pos.y + 1][car.pos.x] == 1) {
            car.pos.y++;
          } else if (this.board[car.pos.y - 1][car.pos.x] == 1) {
            car.pos.y--;
          }
          break;
      }
    },
    step() {
      for (const car of this.cars) {
        this.move(car);
      }
      if (this.isStarted) {
        this.move(this.player);
      }
      for (let c = this.cars.length - 1; c >= 0; c--) {
        const car = this.cars[c];
        if (car.pos.x == car.traffic.end.x && car.pos.y == car.traffic.end.y) {
          this.cars.splice(c, 1);
        }
      }
      for (const traffic of this.traffics) {
        this.cars.push({
          pos: Object.assign({}, traffic.start),
          direction: traffic.direction,
          traffic: traffic
        });
      }
    },
    rotate(i, j) {
      switch (this.controls[i][j]) {
        case "u":
          this.controls[i][j] = "r";
          break;
        case "r":
          this.controls[i][j] = "d";
          break;
        case "d":
          this.controls[i][j] = "l";
          break;
        case "l":
          this.controls[i][j] = "u";
          break;
      }
      this.$forceUpdate();
    },
    start() {
      this.isStarted = true;
    }
  }
});
