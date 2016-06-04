var PlayerState = function (player) {
  this.player = player;
}

PlayerState.prototype.handleInput = function (controller) { }

PlayerState.prototype.update = function () { }

PlayerState.prototype.enter = function () { }

PlayerState.prototype.exit = function () { }

var PlayerStateManager = function (player) {
  this.player = player;
  this.states = {};
  this.current = new PlayerState();
}

PlayerStateManager.prototype.add = function (name, state_class) {
  this.states[name] = state_class;
}

PlayerStateManager.prototype.start = function (name) {
  this.current.exit();
  this.current = new this.states[name](this.player);
  this.current.enter();
}
