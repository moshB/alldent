const fs = require('fs');
const path = require('path');

const structure = {
  'project-root': {
    backend: {
      'app.js': '',
      models: {
        'User.js': '',
        'Appointment.js': '',
      },
      routes: {
        'userRoutes.js': '',
        'appointmentRoutes.js': '',
      },
      config: {
        'db.js': '',
      },
    },
    frontend: {
      src: {
        components: {
          'Navbar.js': '',
          'DoctorProfile.js': '',
          'AppointmentScheduler.js': '',
        },
        pages: {
          'HomePage.js': '',
          'LoginPage.js': '',
          'RegisterPage.js': '',
        },
        'App.js': '',
        'index.js': '',
      },
    },
    'package.json': '',
    'README.md': '',
  },
};

function createStructure(base, struct) {
  Object.entries(struct).forEach(([key, value]) => {
    const fullPath = path.join(base, key);
    if (typeof value === 'string') {
      fs.writeFileSync(fullPath, value);
    } else {
      fs.mkdirSync(fullPath, { recursive: true });
      createStructure(fullPath, value);
    }
  });
}

createStructure(__dirname, structure);
console.log('Project structure created!');
