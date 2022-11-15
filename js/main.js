(() => {
  const app = {
    init () {
      console.log('1. Application Initialized!');
      // Variables

      // Call the function cacheElements
      this.cacheElements();
      // Call the function generateUI
      this.generateUI();
    },
    cacheElements () {
      console.log('2. Chache the elements!');
      this.$nav = document.querySelector('.nav');
      this.$events = document.querySelector('.events'); 
      this.$projects = document.querySelector('.projects');         // Register Listeners
    },
    generateUI () {
      console.log('3. Generate User Interface!');
      this.$nav.innerHTML = this.generateHtmlForNavigation(navigation);
      this.$events.innerHTML = this.generateHtmlForEvents(events);
      this.$projects.innerHTML = this.generateHtmlForProjects(projects);
    },

    generateHtmlForNavigation (navitems) {
      return navitems.map((navitem) => `<a href="${navitem.link}">${navitem.name}</a>`).join('');
    },

    generateHtmlForEvents (events) {
      tempStr = '';
      tempStr += `<ul>${events.map((event) => `<li><a href="${event.link}">${event.title}</a></li>`).join('')}</ul>`
      return tempStr;
    },

    generateHtmlForProjects (projects) {
      return projects.map((project) => `
      <p>${new Date()}</p>
      <div class="${project.id}">
      <h3>${project.title}</h3>
      <img src="${project.screenshots}" alt="${project.synopsis}">
      <p>${project.author.firstName} ${project.author.lastName}</p>
      </div>`).join('');
    },



    
  };
  app.init();
})();
