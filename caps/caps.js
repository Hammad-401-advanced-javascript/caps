const net = require('net');
const { v4: uuidv4 } = require('uuid');
const PORT = process.env.PORT || 3000;
const server = net.createServer();

server.listen(PORT, () => console.log(`server is up on port ${PORT}`));
const socketPool = {};
server.on('connection', (socket) => {
  const id = `socket-${uuidv4()}`;
  socketPool[id] = socket;

  socket.on('data', (buffer) => dispatchEvent(buffer));
  socket.on('error', (e) => console.log(`Socket error ${e.message}`));
  socket.on('end', (e) => delete socketPool[id]);
});
server.on('error', (e) => console.log('SERVER ERROR', e.message));

function dispatchEvent(buffer) {
  // console.log('Buffer', JSON.parse(buffer));
  const payload = JSON.parse(buffer.toString().trim());
  pickUp('pickup', payload);
  transit('transit', payload);
  delivered('delivered', payload);
}

function pickUp(event, payload) {
  payload.id = uuidv4();
  let time = new Date();
  console.log({ event: { event, time, payload } });
  payload.event = event;
  broadcast(payload);
}
function delivered(event, payload) {
  payload.id = uuidv4();
  let time = new Date();
  console.log({ event: { event, time, payload } });
  payload.event = event;
  broadcast(payload);
}
function transit(event, payload) {
  payload.id = uuidv4();
  let time = new Date();
  console.log({ event: { event, time, payload } });
  payload.event = event;
  broadcast(payload);
}


// for vendor and driver---step 3
function broadcast(sendData) {
  const payload = JSON.stringify(sendData);
  for (let socket in socketPool) {
    socketPool[socket].write(payload);
  }
}
