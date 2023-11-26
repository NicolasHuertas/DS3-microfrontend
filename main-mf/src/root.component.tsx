import './styles.css';

export default function Root(props) {
  return (
    <html lang="en">

        <div className="splash-container">
          <div className="splash">
            <h1 className="splash-head">Software Development 3</h1>
            <p className="splash-subhead">
              This is a micro-frontend based application made with single SPA, this particular component was made with React, while the navbar above was made with angular.
            </p>
            <p className="splash-subhead">
              The technology was researched and implemented with the colaboration of all team members.
            </p>
          </div>
        </div>

        <div className="content-wrapper">
          {/* ... (rest of your content) */}
        </div>

        <div className="footer l-box is-center">
          View the source of this layout to learn more. Made with love by the Pure Team.
        </div>
    </html>
  );
}
