Play.prototype.makePlayerSprite = function (x, y) {
  var sprite = this.game.add.isoSprite(x, y, 100, 'knight_8frame',
                                       0, this.groups.players);
  sprite.anchor.set(0.5);
  this.physics.isoArcade.enable(sprite);
  sprite.body.setSize(18, 18, 60, 0, 0, -18);

  sprite.animations.add('south_east', [0, 1, 2, 3, 4, 5, 6, 7],  20, true);
  sprite.animations.add('south_west', [8, 9, 10,11,12,13,14,15], 20, true);
  sprite.animations.add('north_east', [16,17,18,19,20,21,22,23], 20, true);
  sprite.animations.add('north_west', [24,25,26,27,28,29,30,31], 20, true);

  sprite.animations.add('south', [32,33,34,35,36,37,38,39], 20, true);
  sprite.animations.add('west',  [40,41,42,43,44,45,46,47], 20, true);
  sprite.animations.add('east',  [48,49,50,51,52,53,54,55], 20, true);
  sprite.animations.add('north', [56,57,58,59,60,61,62,63], 20, true);

  return sprite;
}
