class Services {
    constructor(url, spaceShipEndpoint, planetEndpoint) {
      this.url = `http://localhost:5000`;
      this.planetEndpoint = `/api/planets`;
      this.spaceShipEndpoint = `/api/spaceship`;
      this.apiPassengersToShipEndpoint = `/api/passengers/toship`;
      this.apiPassengersToPlanetpEndpoint = `/api/passengers/toplanet`;
    }
  
    async getPlanet() {
        try {
          const response = await fetch(`${this.url}${this.planetEndpoint}`);
          const data = await response.json();
      
          return data;
        } catch (error) {
          console.error(`Error ${error}`)
          throw error;
        }
      }

      async getShip() {
        try {
          const response = await fetch(`${this.url}${this.spaceShipEndpoint}`);
          const data = await response.json();
      
          return data;
          
        } catch (error) {
          console.error(`Error ${error}`)
          throw error;
        }
      }
    
  }
  
  const servicesInstance = new Services();
  export default servicesInstance;