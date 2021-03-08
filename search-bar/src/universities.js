const BASE_URL = "https://raw.githubusercontent.com/Hipo/university-domains-list/master/world_universities_and_domains.json";




function detail(world_universities_and_domains) {
  return fetch(`${BASE_URL}universities/
  ${world_universities_and_domains}`)
  .then((res) => res.json());
}