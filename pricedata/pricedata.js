var date = new Date();
date.setHours(0, 0, 0, 0);
var value = 100;

function generateData() {
  value = Math.round((Math.random() * 10 - 4.2) + value);
  am5.time.add(date, "day", 1);
  return {
    date: date.getTime(),
    value: value
  };
}

function generateDatas(count) {
  var data = [];
  for (var i = 0; i < count; ++i) {
    data.push(generateData());
  }
  return data;
}

function getGcpRegions() {
  const regions = [];
  regions.push("asia-southeast1", "asia-south1", "us-west3", "europe-west8", "asia-northeast2", "europe-west4", "southamerica-west1");
  return regions;
}
