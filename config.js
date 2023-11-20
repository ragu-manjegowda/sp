// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: 'Ragu',
  imageBackground: false,
  openInNewTab: false,
  twelveHourFormat: false,

  // Greetings
  greetingMorning: 'Good morning!',
  greetingAfternoon: 'Good afternoon,',
  greetingEvening: 'Good evening,',
  greetingNight: 'Go to Sleep!',

  // Weather
  weatherKey: 'da5b88a829ebf0cce5964530de3d9c39', // Write here your API Key
  weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
  weatherUnit: 'C', // 'F', 'C'
  language: 'en', // More languages in https://openweathermap.org/current#multi

  trackLocation: false, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: '12.2958',
  defaultLongitude: '76.6393',

  // Autochange
  autoChangeTheme: false,

  // Autochabge by OS
  changeThemeByOS: false,

  // Autochange by hour options (24hrs format, string must be in: hh:mm)
  changeThemeByHour: false,
  hourDarkThemeActive: '18:00',
  hourDarkThemeInactive: '07:00',

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  // Links
  cards: [
    {
      id: '1',
      name: 'Github',
      icon: 'github',
      link: 'https://github.com/',
    },
    {
      id: '2',
      name: 'Mail',
      icon: 'mail',
      link: 'https://mail.google.com/',
    },
    {
      id: '3',
      name: 'YouTube',
      icon: 'youtube',
      link: 'https://youtube.com',
    },
    {
      id: '4',
      name: 'Reddit',
      icon: 'glasses',
      link: 'https://reddit.com',
    },
    {
      id: '5',
      name: 'Linkedin',
      icon: 'linkedin',
      link: 'https://linkedin.com/',
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  firstListIcon: 'coffee',
  secondListIcon: 'folder',

  // Links
  lists: {
    firstList: [
      {
        name: 'Arch Wiki',
        link: 'https://wiki.archlinux.org/',
      },
      {
        name: 'Rust',
        link: 'https://doc.rust-lang.org/book/',
      },
      {
        name: 'Calendar',
        link: 'https://calendar.google.com/calendar/r',
      }
    ],
    secondList: [
      {
        name: 'Opengrok',
        link: 'https://tegra-sw-opengrok.nvidia.com/source/xref/ndas-main/',
      },
      {
        name: 'Gerrit Dashboard',
        link: 'https://git-av.nvidia.com/r/dashboard/self',
      },
      {
        name: 'Jira',
        link: 'https://jirasw.nvidia.com/secure/RapidBoard.jspa?rapidView=30842&projectKey=APPSIM&view=planning&issueLimit=100',
      },
      {
        name: 'Colossus',
        link: 'https://colossus.nvidia.com/web/index.html#/lease',
      },
      {
        name: 'Trigger WF from Jenkins',
        link: 'https://blossom.nvidia.com/sw-mobile-av-jenkins/job/ndas/job/drivebehavior/job/on-demand/job/generic/build?delay=0sec',
      }
    ],
  },
};
