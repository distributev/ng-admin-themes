
'use strict';

// Use local.env.js for environment variables that grunt will set when the server starts locally.
// Use for your api keys, secrets, etc. This file should not be tracked by git.
//
// You will need to set these on the server you deploy to.

module.exports = {
  DOMAIN: 'http://localhost:8080',
  SESSION_SECRET: 'bootswatch-secret', 

  GOOGLE_ID: '644883333684-o499n59714frmrqjsekmnt2m15j9d59s.apps.googleusercontent.com',
  GOOGLE_SECRET: 'G-_cMZxR6bnjLaT0LO_2WvfJ',

  // Control debug level for modules using visionmedia/debug
  DEBUG: ''
};
