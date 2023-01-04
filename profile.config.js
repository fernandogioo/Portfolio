const config = {
  github: {
    username: 'fernandogioo', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: '',
    stackoverflow: '', // format: userid/username
    website: '',
    phone: '',
    email: 'fernando.gioo@outlook.com',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'ASP.NET',
    'C#',
    'VB.NET',
    'HTML',
    'CSS',
    'JavaScript',
    'React JS',
    'NodeJS',
    'SQL Server',
    'MySQL',
    'PostgreSQL',
    'Oracle DB',
    'Ext.Net',
    'GIT',
    'SVN',
    'Flutter',
    'SSRS',
    'Crystal Reports'
  ],
  experiences: [
    {
      company: 'PT Moxcal Teknologi',
      position: 'Software Engineer',
      from: 'May 2020',
      to: 'Present',
      companyLink: 'https://moxcal.com',
    },
    {
      company: 'PT Nawa Data Solutions',
      position: 'Technical Lead',
      from: 'April 2019',
      to: 'April 2020',
      companyLink: 'https://nawadata.com',
    }, ,
    {
      company: 'PT Moxcal Teknologi',
      position: 'Programmer',
      from: 'March 2016',
      to: 'March 2019',
      companyLink: 'https://moxcal.com',
    }, ,
    {
      company: 'PT Siemens Indonesia',
      position: 'Internship',
      from: 'March 2015',
      to: 'February 2016',
      companyLink: 'https://new.siemens.com/id',
    },
  ],
  education: [
    {
      institution: 'Bina Nusantara University',
      degree: 'Bachelor Degree - Computer Science',
      from: '2012',
      to: '2016',
    }
  ],

  // To hide the `Other Projects` section, keep it empty.
  externalProjects: [{
    title: 'Telecollection System',
    description:
      `Making it simpler for agents to monitor corporate clients who have disruptions in installments that are late in fulfilling agreed payments.
      Various type of businesses: Multifinance, Banking, Fintech`,
    language: `Develop with ASP.NET MVC, C#,
        Database with SQL Server,
        REST API,
        Report Viewer and SSRS`,
    imageUrl: '',
    link: ''
  },
  {
    title: 'Telemarketing System',
    description:
      `Making it simpler for agents to reach more customers than with in-person sales calls.
      Various type of businesses: Banking Loan and Mortgage, Bancassurance, Insurance, Multifinance`,
    language: `Develop with ASP.NET MVC, C#,
        Database with SQL Server,
        REST API,
        Report Viewer and SSRS`,
    imageUrl: '',
    link: ''
  },
  {
    title: 'Ticketing and Customer Service System',
    description:
      `Businesses utilize CRM applications to serve clients from several channels including websites, live chat, phone, email, and othersin a single unified panel.
       Various type of businesses: Insurance, Banking, Multifinance`,
    language: `Develop with ASP.NET MVC, C#,
        Database with SQL Server, 
        REST API,
        Report Viewer and SSRS`,
    imageUrl: '',
    link: ''
  },
  {
    title: 'Regulation Compliance Monitoring System',
    description:
      `Project Regulation and Compliance Monitoring Bank Sinarmas`,
    language: `Develop with Ext.Net, VB, WebForm,
        Database with SQL Server 2019,
        Report Viewer and SSRS`,
    imageUrl: '',
    link: ''
  },
  {
    title: 'Compliance Advisory Helpdesk System CIMB Niaga',
    description:
      `Project Compliance Advisory Helpdesk System Bank CIMB Niaga`,
    language: `Develop with Ext.Net, ASP.NET MVC, C#,
      Database with SQL Server 2014,
      Report Viewer and SSRS`,
    imageUrl: '',
    link: ''
  },
  {
    title: 'Regulatory Commitment Monitoring CIMB Niaga',
    description:
      `Project Regulatory Commitment Monitoring Bank CIMB Niaga`,
    language: `Develop with Ext.Net, VB, WebForm,
      Database with SQL Server 2014,
      Report Viewer and SSRS`,
    imageUrl: '',
    link: ''
  },
  ],

  themeConfig: {
    defaultTheme: 'light',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
};

export default config;
