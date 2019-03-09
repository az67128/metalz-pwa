function get(
  year = new Date().getFullYear(),
  month = new Date().getMonth() + 1
) {
  return fetch(`https://ws-dqs.wedeploy.io/?year=${year}&month=${month}`)
    .then(data => data.json())
    .then(res => res.body);
}
export default get;
