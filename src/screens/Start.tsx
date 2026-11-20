import { start } from '../data/start';
import { Icon } from '../parts/Icon';

const base = import.meta.env.BASE_URL;

export function Start() {
  return (
    <main className="start">
      <div className="start-in">
        <header>
          <p className="start-byline">{start.byline}</p>
          <img className="start-logo" src={`${base}haut-ai/logo.svg`} alt={start.logo} />
          <h1>{start.title}</h1>
          {start.intro.map((part) => (
            <section key={part.title} className="start-lead">
              <h2>{part.title}</h2>
              {part.text.map((line) =>
                typeof line === 'string' ? (
                  <p key={line} className="start-intro">
                    {line}
                  </p>
                ) : (
                  <ul key={line[0]} className="start-intro bullets">
                    {line.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ),
              )}
            </section>
          ))}
          <div className="start-actions">
            <a className="start-open" href={start.openHref}>
              {start.open}
            </a>
            <a className="start-open is-secondary" href={start.repoHref} target="_blank" rel="noreferrer">
              {start.repo}
              <Icon name="arrow" size={20} turn={45} />
            </a>
          </div>
        </header>

        <div className="start-questions">
          {start.questions.map((question) => (
            <details key={question.title} className="start-question">
              <summary>
                <h2>{question.title}</h2>
                <span className="start-chevron" aria-hidden="true">
                  <Icon name="chevron" size={20} turn={90} />
                </span>
              </summary>
              <div className="start-answer">
                {question.text.map((line) =>
                  typeof line === 'string' ? (
                    <p key={line}>{line}</p>
                  ) : Array.isArray(line) ? (
                    <ul key={line[0]} className="bullets">
                      {line.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : 'href' in line ? (
                    <p key={line.href}>
                      {line.text.split('{link}')[0]}
                      <a href={line.href} target="_blank" rel="noreferrer">
                        {line.label}
                      </a>
                      {line.text.split('{link}')[1]}
                    </p>
                  ) : (
                    <h3 key={line.title}>{line.title}</h3>
                  ),
                )}
              </div>
            </details>
          ))}
        </div>

        <h2>{start.end}</h2>
      </div>
    </main>
  );
}
