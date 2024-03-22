import ReactDOM from 'react-dom/client'
import Careers from './Careers';

const root = ReactDOM.createRoot(document.getElementById('careers-root'));

root.render(
  <Careers />
)

if (window.location.pathname !== '/careers-details.html') {
  root.unmount();
}
