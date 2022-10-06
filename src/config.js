// gitprofile.config.js

module.exports = {
  fullName: "Yesunerdene Jargalsaikhan",
  profession: "Software Engineer",
  occupation: "Mobile app developer",
  description:
    "Experienced mobile application developer with 3 years of experience and more other software development in the IT industry in Mongolia. Professional at whole  process of mobile application development from the blank project to release and launch to public application stores and the maintenance.",
  contact: [
    {
      key: "Email",
      icon: "fa-regular fa-envelope",
      url: false,
      value: "yesuuygls@gmail.com",
      href: "#",
    },
    {
      key: "Phone",
      icon: "fa-solid fa-mobile",
      url: false,
      value: "+976 99401008",
      href: "#",
    },
    {
      key: "LinkedIn",
      icon: "fa-brands fa-linkedin",
      url: true,
      value: "https://www.linkedin.com/in/yesunerdene-jargalsaikhan-b46398162/",
      href: "https://www.linkedin.com/in/yesunerdene-jargalsaikhan-b46398162/",
    },
    {
      key: "Facebook",
      icon: "fa-brands fa-facebook",
      url: true,
      value: "https://www.facebook.com/Yesunerdene9",
      href: "https://www.facebook.com/Yesunerdene9",
    },
  ],
  educations: [
    {
      href: "https://www.google.com/search?q=National+University+of+Mongolia&sxsrf=ALiCzsZeBFmdyE8Rb9QRLBJY8dt4SK4_pA%3A1665033815538&ei=V2Y-Y9S4IIi52roP7_-ymAI&ved=0ahUKEwiUwPSo7sr6AhWInFYBHe-_DCMQ4dUDCA4&uact=5&oq=National+University+of+Mongolia&gs_lcp=Cgdnd3Mtd2l6EAMyCggAEEcQ1gQQsAMyCggAEEcQ1gQQsAMyCggAEEcQ1gQQsAMyCggAEEcQ1gQQsAMyCggAEEcQ1gQQsAMyCggAEEcQ1gQQsAMyCggAEEcQ1gQQsAMyCggAEEcQ1gQQsAMyBwgAELADEEMyBwgAELADEEMyBwgAELADEEMyBwgAELADEEMyDQgAEOQCENYEELADGAEyDQgAEOQCENYEELADGAEyDQgAEOQCENYEELADGAEyDAguEMgDELADEEMYAjIMCC4QyAMQsAMQQxgCMgwILhDIAxCwAxBDGAIyDAguEMgDELADEEMYAkoECEEYAEoECEYYAVDJAljJAmDyA2gDcAF4AIABAIgBAJIBAJgBAKABAqABAcgBE8ABAdoBBggBEAEYCdoBBggCEAEYCA&sclient=gws-wiz",
      university: "National University of Mongolia 🇲🇳,",
      department:
        "\nSchool of Engineering and Applied Scince, (Department of Information and Computer Science)",
      major: "Software Engineer",
      degree: "Bachelor",
      from: "2016",
      to: "2020",
    },
  ],
  technologies: [
    {
      language: "JS",
      techs: ["React NativeJS", "ReactJS"],
    },
    {
      language: "PHP",
      techs: ["Symfony", "Laravel"],
    },
    {
      language: "SQL",
      techs: ["MySQL"],
    },
    {
      language: "C",
      techs: ["C++"],
    },
    {
      language: "Java",
    },
  ],
  experiences: [
    {
      company: "Octagon NFT LLC",
      position: "Software Developer - Mobile Application Developer",
      from: "Jan 2022",
      to: "present",
      href: "https://powered.mn/",
      description:
        "Working as software developer, especially in mobile application development on OCTAGON.MN - NFT marketplace and a brige to connect to crypto wallets across the world",
    },
    {
      company: "Powered LLC",
      position: "Software Developer - Mobile Application Developer",
      from: "Jan 2021",
      to: "present",
      href: "https://powered.mn/",
      description:
        "Working as software developer, especially in mobile application development on YESH.MN -  Test based learning app for university general entrance examination for high school students.",
    },
    {
      company: "Digital Mall LLC",
      position: "Software Engineer",
      from: "Sep 2019",
      to: "Jan 2022",
      href: "https://www.bananamall.mn/",
      description:
        "Worked as software developer, mainly in mobile application development, also in e-commerce platform core backend development, and as database engineer on BananaMall.mn - ecommerce software.",
    },
    {
      company: "Alpha Labs LLC",
      position: "Remote Software Developer",
      from: "Jul 2020",
      to: "Sep 2022",
      href: "https://www.bsb.mn/",
      description:
        "Worked as software developer, in mobile application development on BSB.mn - e-commerce platform, sells technological and furniture products.",
    },
  ],
  projects: [
    {
      id: 0,
      title: "Octagon Wallet",
      company: "Octagon NFT LLC",
      role: "Mobile app developer",
      releasedOn: "2022.03.10",
      appStore: "https://apps.apple.com/mn/app/octagon-wallet/id1611280720",
      playStore: "Octagon Wallet - Apps on Google Play",
      logo: require("./assets/octagon.png"),
    },
    {
      id: 1,
      title: "YESH.MN",
      company: "Powered LLC",
      role: "Mobile app developer",
      releasedOn: "2022.03.10",
      appStore: "https://apps.apple.com/mn/app/octagon-wallet/id1611280720",
      playStore: "Octagon Wallet - Apps on Google Play",
      logo: require("./assets/yesh.png"),
    },
    {
      id: 2,
      title: "Banana Mall",
      company: "Digital Mall LLC",
      role: "Software engineer",
      releasedOn: "2022.03.10",
      appStore: "https://apps.apple.com/mn/app/octagon-wallet/id1611280720",
      playStore: "Octagon Wallet - Apps on Google Play",
      logo: require("./assets/bananamall.png"),
    },
    {
      id: 3,
      title: "BSB.mn",
      company: "Alpha Labs LLC",
      role: "Mobile app developer",
      releasedOn: "2022.03.10",
      appStore: "https://apps.apple.com/mn/app/octagon-wallet/id1611280720",
      playStore: "Octagon Wallet - Apps on Google Play",
      logo: require("./assets/bsb.png"),
    },
  ],
  github: {
    username: "Yesunerdene", // Your GitHub org/user name. (Required)
    sortBy: "stars", // stars | updated
    limit: 100, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin:
      "https://www.linkedin.com/in/yesunerdene-jargalsaikhan-b46398162/",
    twitter: "",
    facebook: "https://www.facebook.com/Yesunerdene9",
    instagram: "https://www.instagram.com/yesunerdene9",
    dribbble: "",
    behance: "",
    medium: "",
    dev: "",
    website: "",
    phone: "+976 96891008",
    email: "yesuuygls@gmail.com",
  },
};
