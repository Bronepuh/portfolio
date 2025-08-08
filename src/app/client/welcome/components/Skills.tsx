import Image from 'next/image';
import React from 'react';

type SkillsProps = {
  skillsTab: 'skills' | 'tools';
  toggleSkillsTab: () => void;
};

const skillsList = [
  { name: 'HTML5', img: '/html5.png' },
  { name: 'CSS3', img: '/css3.png' },
  { name: 'Javascript', img: '/javascript.png' },
  { name: 'TypeScript', img: '/typescript.png' },
  { name: 'JQuery', img: '/jquery.png' },
  { name: 'Bootstrap', img: '/bootstrap.png' },
  { name: 'Angular', img: '/angular.png' },
  { name: 'React', img: '/react.png' },
  { name: 'Vue', img: '/vue.png' },
  { name: 'Firebase', img: '/firebase.png' },
  { name: 'PugJs', img: '/pugjs.png' },
  { name: 'SASS', img: '/sass.png' },
];

const toolsList = [
  { name: 'Ajax', img: '/ajax.png' },
  { name: 'Gulp', img: '/gulp.png' },
  { name: 'Webpack', img: '/webpack.png' },
  { name: 'Git', img: '/git.png' },
  { name: 'Npm', img: '/npm.png' },
  { name: 'Command Line', img: '/command.png' },
  { name: 'VS Code', img: '/vs-code.png' },
  { name: 'Trello', img: '/trello.png' },
  { name: 'Clickup', img: '/clickup.png' },
  { name: 'Slack', img: '/slack.png' },
  { name: 'Photoshop', img: '/photoshop.png' },
  { name: 'Adobe XD', img: '/adobe-xd.png' },
];

export default function Skills({ skillsTab, toggleSkillsTab }: SkillsProps) {
  return (
    <div className="container">
      <section className="skills" id="Навыки">
        <div className="skills-content section-content">
          <p className="section-subtitle">Мои навыки</p>
          <h2 className="h2 section-title">Какие навыки могу предложить?</h2>
          <p className="section-text">
            Делаю интерфейсы, в которых не нужно разбираться — всё работает с
            первого клика. Быстро, удобно и с заботой о пользователе.
          </p>

          <div
            className={`skills-toggle ${skillsTab === 'tools' ? 'active' : ''}`}
            data-toggle-box
          >
            <button
              className={`toggle-btn ${skillsTab === 'skills' ? 'active' : ''}`}
              onClick={() => toggleSkillsTab()}
              data-toggle-btn
            >
              Навыки
            </button>
            <button
              className={`toggle-btn ${skillsTab === 'tools' ? 'active' : ''}`}
              onClick={() => toggleSkillsTab()}
              data-toggle-btn
            >
              Инструменты
            </button>
          </div>
        </div>

        <div
          className={`skills-box ${skillsTab === 'tools' ? 'active' : ''}`}
          data-skills-box
        >
          <ul className="skills-list">
            {skillsList.map((skill, index) => (
              <li key={index}>
                <div className="skills-card">
                  <div className="tooltip">{skill.name}</div>
                  <div className="card-icon">
                    <Image
                      width={40}
                      height={40}
                      src={skill.img}
                      alt={`${skill.name} logo`}
                      loading="lazy"
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <ul className="tools-list">
            {toolsList.map((tool, index) => (
              <li key={index}>
                <div className="skills-card">
                  <div className="tooltip">{tool.name}</div>
                  <div className="card-icon">
                    <Image
                      width={40}
                      height={40}
                      src={tool.img}
                      alt={`${tool.name} logo`}
                      loading="lazy"
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
