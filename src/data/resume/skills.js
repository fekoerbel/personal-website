const skills = [
    {
        title: 'HTML',
        competency: 5,
        type: 'Languages-basic'
    },
    {
        title: 'CSS3',
        competency: 5,
        type: 'Languages-basic'
    },
    {
        title: 'SASS',
        competency: 5,
        type: 'Languages-basic'
    },
      {
        title: 'Javascript',
        competency: 5,
        type: 'Languages'
      },
      {
        title: 'Typescript',
        competency: 4,
        type: 'Languages'
      },
      {
        title: 'PHP',
        competency: 4,
        type: 'Languages'
      },
      {
        title: 'Python',
        competency: 2,
        type: 'Languages'
      },
      {
        title: 'MySQL',
        competency: 4,
        type: 'Database'
      },
      {
        title: 'Git',
        competency: 4,
        type: 'Git'
      },
      {
        title: 'Bootstrap',
        competency: 5,
        type: 'Framework'
      },
      {
        title: 'Angular',
        competency: 3,
        type: 'Framework'
      },
      {
        title: 'React',
        competency: 4,
        type: 'Framework'
      },
      {
        title: 'Laravel',
        competency: 4,
        type: 'Framework'
      },
      {
        title: 'Joomla!',
        competency: 5,
        type: 'Content management'
      },
        {
        title: 'Wordpress',
        competency: 4,
        type: 'Content management'
      } 
  ];
  

  const colors = [
    '#008000',
    '#b8b811',
    '#0000ff',
    '#000000',
    '#ff0000',
    '#00bcd4'
  ];
  
  const typeColor = skills.map((skill) => {
    switch (skill.type) {
        case 'Languages-basic':
            skill.color = colors[0]
            break;
    
        case 'Languages':
            skill.color = colors[1]
            break;

        case 'Database':
            skill.color = colors[2]
            break;

        case 'Git':
            skill.color = colors[3]
            break;

        case 'Framework':
            skill.color = colors[4]
            break;

        case 'Content management':
            skill.color = colors[5]
            break;
        
        default:
            break;
    }
    return (skill.color)
  })
  
  export { typeColor, skills };
