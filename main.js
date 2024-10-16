import "./style.css";

const app = document.querySelector("#app");

const jobListings = [
  {
    title: "Gaming UI designer",
    company: "Rockstar Games",
    location: "ElMansoura, Egypt",
    postedAgo: "10 days ago",
    experience: "0 - 3y of exp",
    type: "Full time",
    remote: "Remote",
    tags: ["Creative / Design", "IT / Software development", "Gaming"],
  },
  {
    title: "Senior UX UI Designer",
    company: "Egabi",
    location: "Cairo, Egypt",
    postedAgo: "10 days ago",
    experience: "0 - 3y of exp",
    type: "Full time",
    remote: "Hybrid",
    tags: ["Creative / Design", "IT / Software development"],
  },
  {
    title: "React Frontend developer",
    company: "Magara",
    location: "Cairo, Egypt",
    postedAgo: "10 days ago",
    experience: "5 - 7y of exp",
    type: "Freelance",
    remote: "Remote",
    tags: ["Creative / Design", "IT / Software development"],
  },
];

function createJobCard(job) {
  return `
    <div class="job-card">
      <div class="job-card-header">
        <h3>${job.title}</h3>
        <button class="favorite-btn"><img src="/img/heartIcon.svg" alt="fav Icon" class="icon"/></button>
      </div>
      <p class="company">${job.company}</p>
      <div class="details">
        <span><i class="fas fa-map-marker-alt"></i> ${job.location}</span>
        <span><i class="far fa-clock"></i> ${job.postedAgo}</span>
      </div>
      <div class="job-type">
        <span>${job.experience}</span>
        <span>${job.type}</span>
        <span>${job.remote}</span>
      </div>
      <div class="tags">
        ${job.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
      </div>
    </div>
  `;
}

function renderApp() {
  app.innerHTML = `
    <div class="app-container">
      <!-- Mobile Header -->
      <header class="header-mobile">
        <img src="img/imgicon.svg" alt="iZAM Logo" />
        <div class="menu-icon">☰</div>
      </header>

      <!-- Desktop Header -->
      <header class="header-desktop">
        <div class="logo-search"><img src="img/logo.svg" alt="iZAM Logo" />
         <div class="search-bar">
         <div> <i class="fas fa-search"></i></div>
          <input type="text" placeholder="Search by name, job title">
        </div>
        </div>
       
        <nav>
          <a href="#" class="active"><img src="/img/home.svg" alt="Home Icon" class="icon"/>Home</a>
          <a href="#"> <img src="/img/jobs.svg" alt="Jobs Icon" class="icon"/>Jobs</a>
          <a href="#"><img src="/img/empolyers.svg" alt="Employers Icon" class="icon"/></i>Employers</a>
          <a href="#"><img src="/img/notify.svg" alt="Notifications Icon" class="icon"/>Notifications</a>
          <a href="#"> <img src="/img/messages.svg" alt="Messages Icon" class="icon"/>Messaging</a>
          <a href="#"> <img src="/img/image.png" alt="Profile" class="profile-image"/></i>Profile</a>
        </nav>
      </header>
      <div class="main-content">
        <aside class="sidebar">
          <div class="sidebar-header">
            <span  class="display-flex"><button class="back-button"><i class="fas fa-arrow-left"></i></button>
            <h3>Menu</h3></span>
            <button class="settings-button"><i class="fas fa-cog"></i></button>
          </div>
          <ul class="sidebar-menu">
            <li><a href="#"> Dashboard</a></li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle">
               Job application
                <i class="fas fa-chevron-down"></i>
              </a>
              <ul class="dropdown-menu">
                <li><a href="#">John Doe</a></li>
                <li><a href="#">James Bond</a></li>
              </ul>
            </li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle">
               Qualifications
                <i class="fas fa-chevron-up"></i>
              </a>
              <ul class="dropdown-menu">
                <li><a href="#">Education</a></li>
                <li><a href="#">Experience</a></li>
            
              </ul>
            </li>
            <li><a href="#"> About</a></li>
            <li><a href="#"> Contact</a></li>
          </ul>
        </aside>
        <main class="job-content">
          <div class="job-filter">
            <div class="job-filter-text">
              <h2>UI Designer in Egypt</h2>
              <p>70 job positions</p>
            </div>
            <div class="toggle">
              <span>Set alert</span>
              <label class="toggle-switch">
                <input type="checkbox">
                <span class="slider round"></span>
              </label>
            </div>
          </div>
          <div class="job-list">
            ${jobListings.map(createJobCard).join("")}
          </div>
          <div class="pagination">
            <button>&lt;</button>
            <button>1</button>
            <button class="active">2</button>
            <button>3</button>
            <button>&gt;</button>
          </div>
        </main>
      </div>
    </div>
  `;

  // Add event listeners for dropdowns
  const dropdowns = document.querySelectorAll(".dropdown-toggle");
  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", (e) => {
      e.preventDefault();
      e.target.closest(".dropdown").classList.toggle("active");
    });
  });

  // Add event listener for mobile menu toggle
  const menuIcon = document.querySelector(".menu-icon");
  const sidebar = document.querySelector(".sidebar");
  menuIcon.addEventListener("click", () => {
    sidebar.classList.add("active");
  });

  // Add event listener for closing sidebar
  const backButton = document.querySelector(".back-button");
  backButton.addEventListener("click", () => {
    sidebar.classList.remove("active");
  });
}

renderApp();
