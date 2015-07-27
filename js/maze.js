"use strict";

function Maze(width, height) {
  this.width            = width;
  this.height           = height;

  this.startX           = null;
  this.startY           = null;
  this.startOrientation = null;
  this.endX             = null;
  this.endY             = null;

  this.space = [];

  var x, y;
  for (x=1; x <= width; x += 1) {
    this.space[x] = [];
    for (y=1; y <= height; y += 1) {
      this.spaces[x][y] = new MazeSpace();
     }
  }
}

Maze.prototype.setStart = function(x, y, orientation) {
  this.startX = x;
  this.startY = y;
  this.startOrientation = orientation;
}

Maze.prototype.setEnd = function(x, y) {
  this.endX = x;
  this.endY = y;
}

Maze.prototype.setWall = function(x, y, direction) {
  if (x > 0 && x <= this.width && y > 0 && y <= this.height && ["north", "east", "south", "west"].indexOf(direction) !== -1) {
    this.spaces[x][y].setWall(directions);
    return true;
  }
  return false;
}