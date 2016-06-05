var RemoteController = function (connection) {
  this.connection = connection;

  Controller.call(this);

  connection.on('data', function (data) {
    // perform data processing
  }.bind(this))
}
