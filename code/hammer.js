this.hammer = new Hammer(this.ball[0]);
this.hammer.get('pan').set({ direction: Hammer.DIRECTION_ALL });

var that = this;

this.hammer.on('panstart', function (ev) {
  that.ball.css({transition: 'all 0.0s'});
  that.clampAndMove(ev);
  that.callbacks.onstart(that.normalizeCoords(that.ballPosition));
});

this.hammer.on('panmove', function (ev) {
  that.clampAndMove(ev);
  that.callbacks.onmove(that.normalizeCoords(that.ballPosition));
});

this.hammer.on('panend', function (ev) {
  that.clampAndMove(ev);
  that.callbacks.onend(that.normalizeCoords(that.ballPosition));
  that.resetBall();
});
