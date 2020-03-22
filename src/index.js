exports.min = function min (array) {
  if(array === undefined || array.length == 0) return 0;
  return array.reduce((value, currentValue) => currentValue < value ? currentValue : value);
}

exports.max = function max (array) {
  if(array === undefined || array.length == 0) return 0;
  return array.reduce((value, currentValue) => currentValue > value ? currentValue : value);
}

exports.avg = function avg (array) {
  if(array === undefined || array.length == 0) return 0;
  return array.reduce( (value, currentValue) => value + currentValue) / array.length;
}