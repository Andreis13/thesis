MovingState.prototype.handleInput = function (controller) {
  // ...
  if (controller.button_a_pressed()) {
    this.player.states.start('throwing_snowball');
  }
  // ..
}
