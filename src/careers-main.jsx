import ReactDOM from 'react-dom/client'
import Careers from './Careers';

const root = ReactDOM.createRoot(document.getElementById('careers-root'));

root.render(
  <Careers />
)

console.log(window.location.pathname);

if (window.location.pathname !== '/career-details/careers.html') {
  root.unmount();
}
