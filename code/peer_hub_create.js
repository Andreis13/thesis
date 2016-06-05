var hub = new Peer(hub_id, {
  host: Settings.peerjs_host,
  port: Settings.peerjs_port,
  secure: Settings.using_https,
  debug: Settings.peerjs_debug_level
});

var connections = [];

hub.on('connection', function(dataConnection) {
  connections.push(dataConnection);
});
