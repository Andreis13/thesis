var satellite = new Peer({
  host: Settings.peerjs_host,
  port: Settings.peerjs_port,
  secure: Settings.using_https,
  debug: Settings.peerjs_debug_level
})

var hub_id = 'test';

var dataConnection = satellite.connect(
  hub_id, { metadata: { player_name: player_name } }
);
