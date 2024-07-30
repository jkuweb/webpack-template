import { createRoot } from 'react-dom/client';
import { App } from './appComponent.tsx';
import * as styles from './style.scss';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <>
      <div>
        <table>
          <thead>
            <tr>
              <th>ENTORNO</th>
              <th>API_URL</th>
              <th>TECNOLOGÍAS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{process.env.MODE}</td>
              <td>{process.env.API_BASE}</td>
              <td>
                <ul className={styles.resetListado}>
                  <li>Webpack@5.93.0</li>
                  <li>Sass@1.77.8</li>
                  <li>React@18.3.1</li>
                  <li>Typescript</li>
                  <li>CSS Modules</li>
                  <li>Environment Variables</li>
                  <li>Husky</li>
                  <li>Commitlint</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.container}>
        <h1 className={styles.background}>WEBPACK TEMPLATE</h1>
        <App />
      </div>
    </>
  );
}
