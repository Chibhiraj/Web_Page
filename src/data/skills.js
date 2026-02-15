const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons'

export const skillGroups = [
  {
    title: 'Backend',
    items: [
      { name: '.NET Core', icon: `${DEVICON}/dotnetcore/dotnetcore-original.svg` },
      { name: 'C#', icon: `${DEVICON}/csharp/csharp-original.svg` },
      { name: 'REST APIs', icon: `${DEVICON}/express/express-original.svg` },
      { name: 'SQL Server', icon: `${DEVICON}/microsoftsqlserver/microsoftsqlserver-plain.svg` },
    ],
  },
  {
    title: 'Frontend',
    items: [
      { name: 'React', icon: `${DEVICON}/react/react-original.svg` },
      { name: 'JavaScript', icon: `${DEVICON}/javascript/javascript-original.svg` },
      { name: 'HTML5', icon: `${DEVICON}/html5/html5-original.svg` },
      { name: 'CSS3', icon: `${DEVICON}/css3/css3-original.svg` },
    ],
  },
  {
    title: 'Tools & Cloud',
    items: [
      { name: 'Git', icon: `${DEVICON}/git/git-original.svg` },
      { name: 'Azure', icon: `${DEVICON}/azure/azure-original.svg` },
      { name: 'Docker', icon: `${DEVICON}/docker/docker-original.svg` },
      { name: 'Redis', icon: `${DEVICON}/redis/redis-original.svg` },
      { name: 'RabbitMQ', icon: `${DEVICON}/rabbitmq/rabbitmq-original.svg` },
      { name: 'Postman', icon: `${DEVICON}/postman/postman-original.svg` },
    ],
  },
]
