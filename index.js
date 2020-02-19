var vm = new Vue({
  el: "#app",
  data: {
    map: undefined,
    controls: [],
    cars: [],
    isStarted: false,
    maxStepCountdown: 100,
    stepCountdown: 0,
    stepTimerId: 0,
    animationTimerId: 0,
    animatingTraffics: []
  },
  created() {
    this.setMap(1);
  },
  computed: {
    size() {
      return { width: this.map.board[0].length, height: this.map.board.length };
    }
  },
  methods: {
    setMap(mapId) {
      if (mapId == 1) {
        this.initMap({
          board: [
            [0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
            [0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
          ],
          controls: [
            "...........",
            "....d..u...",
            "...........",
            "....r..u...",
            "..........."
          ],
          flow: {
            start: { x: 0, y: 3 },
            end: { x: 10, y: 3 },
            startDirection: "r"
          },
          traffics: [
            {
              start: { x: 4, y: 0 },
              end: { x: 7, y: 0 },
              direction: "d",
              color: "orange"
            }
          ]
        });
      } else if (mapId == 2) {
        this.initMap({
          board: [
            [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1],
            [0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0],
            [0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0],
            [1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0],
            [0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
          ],
          controls: [
            "....|....|....",
            "....r....|....",
            "....|....|....",
            "....|...r|.d..",
            "...u|....|....",
            "....|....|.r..",
            "....|....|....",
            "....|....|...."
          ],
          flow: {
            start: { x: 0, y: 4 },
            end: { x: 13, y: 1 },
            startDirection: "r"
          },
          traffics: [
            {
              start: { x: 4, y: 0 },
              end: { x: 12, y: 5 },
              direction: "d",
              color: "orange"
            }
          ]
        });
      } else if (mapId == 3) {
        this.initMap({
          board: [
            [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
            [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0],
            [0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0],
            [0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
            [0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
            [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
          ],
          controls: [
            "....|....|.....",
            "....|.r..|.....",
            "....|....|.....",
            "..u.|...r|.d...",
            "....|....|.....",
            "..r.|.d..|.r...",
            "....|....|.....",
            "..u.|....r.r...",
            "....|....|.....",
            "....|....|.....",
            "....|....|....."
          ],
          flow: {
            start: { x: 0, y: 3 },
            end: { x: 14, y: 3 },
            startDirection: "r"
          },
          traffics: [
            {
              start: { x: 6, y: 0 },
              end: { x: 12, y: 5 },
              direction: "d",
              color: "orange"
            },
            {
              start: { x: 1, y: 7 },
              end: { x: 12, y: 7 },
              direction: "r",
              color: "magenta"
            }
          ]
        });
      } else if (mapId == 4) {
        this.initMap({
          board: [
            [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
            [1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0],
            [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
          ],
          controls: [
            "....|....|....|....|....",
            "....|....|.u..|l...|....",
            "....|....|....|....|....",
            "....r....|.d..|....|....",
            "....|....|....|....|....",
            "....|....|.d..|u...l....",
            "....d....|....|....|....",
            "....|..d.|....|....u.l..",
            "....|....|....|....|....",
            "....|..d.|.l..|l...|....",
            "....|....|....|....|....",
            "....|....|....|....|....",
            "....|....|....|....|...."
          ],
          flow: {
            start: { x: 0, y: 6 },
            end: { x: 23, y: 2 },
            startDirection: "r"
          },
          traffics: [
            {
              start: { x: 4, y: 0 },
              end: { x: 7, y: 11 },
              direction: "d",
              color: "orange"
            },
            {
              start: { x: 23, y: 7 },
              end: { x: 11, y: 0 },
              direction: "l",
              color: "magenta"
            }
          ]
        });
      } else if (mapId == 5) {
        this.initMap({
          board: [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
            [0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0],
            [1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1],
            [0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0],
            [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
          ],
          controls: [
            "....|....|....|....|..",
            "....|....|.l..|....|..",
            "....|d.d.|....|u.r.|..",
            "....|....|....|....|..",
            "..u.|d.r.|....|r.d.|..",
            "....|....|....|....|..",
            "....|....r...u|....|d.",
            "....|....|....|....|..",
            "....|r.d.u.r.r.d.r.d..",
            "....|....|....|....|..",
            "....|....|.u..|r...|..",
            "....|....|....|....|.."
          ],
          flow: {
            start: { x: 0, y: 4 },
            end: { x: 22, y: 6 },
            startDirection: "r"
          },
          traffics: [
            {
              start: { x: 5, y: 1 },
              end: { x: 17, y: 10 },
              direction: "d",
              color: "orange"
            },
            {
              start: { x: 11, y: 0 },
              end: { x: 19, y: 9 },
              direction: "d",
              color: "magenta"
            }
          ]
        });
      }
    },
    initMap(map) {
      this.map = map;
      this.player = {
        pos: Object.assign({}, this.map.flow.start),
        direction: this.map.flow.startDirection
      };
      this.controls = this.map.controls.map(r => r.split(""));
      this.cars = [];
      this.isStarted = false;
      this.stepCountdown = this.maxStepCountdown;
      this.animatingTraffics = [...this.map.traffics];
      clearInterval(this.stepTimerId);
      clearInterval(this.animationTimerId);
      this.animationTimerId = setInterval(() => {
        this.step();
        this.$forceUpdate();
      }, 100);
    },
    symbol(i, j) {
      for (const traffic of this.map.traffics) {
        if (traffic.start.x == j && traffic.start.y == i) {
          return "St";
        } else if (traffic.end.x == j && traffic.end.y == i) {
          return "En";
        }
      }
      const hasPlayer = this.player.pos.x == j && this.player.pos.y == i;
      const carsOnBlock = this.cars.filter(car => car.pos.x == j && car.pos.y == i);
      const trafficsOnBlock = new Set(carsOnBlock.map(car => car.traffic));
      if (trafficsOnBlock.size >= 2 || (hasPlayer && carsOnBlock.length >= 1)) {
        return "💥";
      } else if (trafficsOnBlock.size == 1) {
        return "🚗";
      } else if (hasPlayer) {
        return "🚑";
      }
      return "";
    },
    cellClass(i, j) {
      return {
        "cell-road": this.map.board[i][j] == 1,
        "cell-flow":
          (this.map.flow.start.x == j && this.map.flow.start.y == i) ||
          (this.map.flow.end.x == j && this.map.flow.end.y == i),
        "cell-up": this.controls[i][j] == "u",
        "cell-down": this.controls[i][j] == "d",
        "cell-left": this.controls[i][j] == "l",
        "cell-right": this.controls[i][j] == "r"
      };
    },
    cellStyle(i, j) {
      const traffic = this.map.traffics.find(
        traffic =>
          (traffic.start.x == j && traffic.start.y == i) ||
          (traffic.end.x == j && traffic.end.y == i)
      );
      if (traffic) {
        return {
          "background-color": traffic.color
        };
      }
      const carsOnBlock = this.cars.filter(car => car.pos.x == j && car.pos.y == i);
      const blockColors = new Set(carsOnBlock.map(car => car.traffic.color));
      if (blockColors.size > 1) {
        return {
          "background-color": "black"
        };
      } else if (blockColors.size == 1) {
        return {
          "background-color": carsOnBlock[0].traffic.color
        };
      }
    },
    cellTextClass(i, j) {
      return {
        "cell-text-mirror":
          this.player.pos.x == j && this.player.pos.y == i && this.player.direction != "l"
      };
    },
    move(car) {
      if (["u", "d", "l", "r"].includes(this.controls[car.pos.y][car.pos.x])) {
        car.direction = this.controls[car.pos.y][car.pos.x];
      }
      switch (car.direction) {
        case "d":
          if (this.map.board[car.pos.y + 1][car.pos.x] == 1) {
            car.pos.y++;
          } else if (this.map.board[car.pos.y][car.pos.x + 1] == 1) {
            car.pos.x++;
            car.direction = "r";
          } else if (this.map.board[car.pos.y][car.pos.x - 1] == 1) {
            car.pos.x--;
            car.direction = "l";
          }
          break;
        case "u":
          if (this.map.board[car.pos.y - 1][car.pos.x] == 1) {
            car.pos.y--;
          } else if (this.map.board[car.pos.y][car.pos.x + 1] == 1) {
            car.pos.x++;
            car.direction = "r";
          } else if (this.map.board[car.pos.y][car.pos.x - 1] == 1) {
            car.pos.x--;
            car.direction = "l";
          }
          break;
        case "l":
          if (this.map.board[car.pos.y][car.pos.x - 1] == 1) {
            car.pos.x--;
          } else if (this.map.board[car.pos.y + 1][car.pos.x] == 1) {
            car.pos.y++;
            car.direction = "d";
          } else if (this.map.board[car.pos.y - 1][car.pos.x] == 1) {
            car.pos.y--;
            car.direction = "u";
          }
          break;
        case "r":
          if (this.map.board[car.pos.y][car.pos.x + 1] == 1) {
            car.pos.x++;
          } else if (this.map.board[car.pos.y + 1][car.pos.x] == 1) {
            car.pos.y++;
            car.direction = "d";
          } else if (this.map.board[car.pos.y - 1][car.pos.x] == 1) {
            car.pos.y--;
            car.direction = "u";
          }
          break;
      }
    },
    step() {
      this.resetStepCountdown();
      for (const car of this.cars) {
        this.move(car);
      }
      if (this.isStarted) {
        this.move(this.player);
      }
      for (let c = this.cars.length - 1; c >= 0; c--) {
        const car = this.cars[c];
        if (car.pos.x == car.traffic.end.x && car.pos.y == car.traffic.end.y) {
          if (this.animatingTraffics.includes(car.traffic)) {
            this.animatingTraffics.splice(this.animatingTraffics.indexOf(car.traffic), 1);
            if (this.animatingTraffics.length == 0) {
              clearInterval(this.animationTimerId);
            }
          }
          this.cars.splice(c, 1);
        }
      }
      for (const traffic of this.map.traffics) {
        this.cars.push({
          pos: Object.assign({}, traffic.start),
          direction: traffic.direction,
          traffic: traffic
        });
      }
    },
    rotate(i, j) {
      if (this.animatingTraffics.length > 0) {
        return;
      }
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
      clearInterval(this.animationTimerId);
      this.stepTimerId = setInterval(() => {
        this.stepCountdown--;
        if (this.stepCountdown <= 0) {
          this.step();
        }
      }, 50);
    },
    resetStepCountdown() {
      this.stepCountdown = this.maxStepCountdown;
    }
  }
});
