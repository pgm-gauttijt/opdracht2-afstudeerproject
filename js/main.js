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
      this.$projects = document.querySelector('.projects');       
      this.$countdown = document.querySelector('.countdown');
      this.$upcounter = document.querySelector('.upcounter'); 
      this.$socials = document.querySelector('.socials'); 
      
      // Register Listeners
    },
    generateUI () {
      console.log('3. Generate User Interface!');
      this.$nav.innerHTML = this.generateHtmlForNavigation(navigation);
      this.$events.innerHTML = this.generateHtmlForEvents(events);
      this.$projects.innerHTML = this.generateHtmlForProjects(projects);
      setInterval(() => {
        this.$countdown.innerHTML = this.generateHtmlForCountdown();
      },1000);
      setInterval(() => {
        this.$upcounter.innerHTML = this.generateHtmlForUpCounter();
      },1000);
      this.$socials.innerHTML = this.generateHtmlForSocials(socials);
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
      <div class="${project.id}">
      <h3>${project.title}</h3>
      <ul>${project.technologies.map((technologie) => `<li>${technologie.name}</li>`).join('')}</ul>
      <img src="${project.screenshots}" alt="${project.synopsis}">
      <p>${project.author.firstName} ${project.author.lastName}</p>
      </div>`).join('');
    },
    generateHtmlForCountdown(){
      const date = new Date();
      const countDownDate = new Date (1695019500000).getTime();
      let distance = countDownDate - date;
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      return `<p>${days} days`+ ` ` +  `${hours} hours` + ` ` + `${minutes} minutes` + ` ` +`${seconds} seconds</p>
      <p>till next academic year 2023-24</p>`
    },

    generateHtmlForUpCounter(){
      const date = new Date();
      const upCountDate = new Date (1663569900000).getTime();
      let distance = date - upCountDate;
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      return `<p>${days} days`+ ` ` +  `${hours} hours` + ` ` + `${minutes} minutes` + ` ` +`${seconds} seconds</p>
      <p>running in current academic year</p>`
    },

    generateHtmlForSocials(socials){
      let tempStr = '';
      for(let prop in socials){
        tempStr += `<a href="${socials[prop]}" target="__blank" ${this.generateHTMLForSocialMediaIcon(prop)}>${prop}</a>`
      }
      return tempStr;
    },
    
    generateHTMLForSocialMediaIcon(socialMedia) {
      switch (socialMedia) {
        case 'website': default: return '<i class="bi bi-globe"';
        case 'youtube':return '<i class="bi bi-youtube"';
        case 'facebook': return '<i class="bi bi-facebook"';
        case 'instagram': return '<i class="bi bi-instagram"';
        case 'twitter': return '<i class="bi bi-twitter"';
      }
    },
  };

  function ticking () {
    app.generateHtmlForCountdown();  
  }
  setInterval(ticking, 1000);

  app.init();

})();

