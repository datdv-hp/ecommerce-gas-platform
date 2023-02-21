'use strict';

const mongoose = require('mongoose');
const os = require('os');
const process = require('process');
const _SECONDS = 5000;

// count Connect
const countConnect = () => {
  const numConnection = mongoose.connections.length;
  console.log(`Number of connections::: ${numConnection}`);
  return numConnection;
};

// Check overload
const checkOverLoad = () => {
  setInterval(() => {
    const numConnections = mongoose.connections.length;
    const numCores = os.cpus().length;
    const memoryUsage = process.memoryUsage().rss;

    // Example maximum number of connections based on of cores
    const maxConnections = numCores * 5;

    console.log(`Active connections::: ${numConnections}`);
    console.log(`Memory usage::: ${memoryUsage / 1024 / 1024}MB`);

    if (numConnections > maxConnections) {
      console.log(`Connections overload detected!`);
    }
  }, _SECONDS); // Monitor every 5s
};

module.exports = {
  countConnect,
  checkOverLoad,
};
