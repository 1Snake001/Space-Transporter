class Services {
    constructor(url, spaceShipEndpoint, planetEndpoint) {
      this.url = `http://localhost:5000`;
      this.planetEndpoint = `/api/planets`;
      this.spaceShipEndpoint = `/api/spaceship`;
      this.apiPassengersToShipEndpoint = `/api/passengers/toship`;
      this.apiPassengersToPlanetpEndpoint = `/api/passengers/toplanet`;
    }
  
    
  }
  
  const servicesInstance = new Services();
  export default servicesInstance;