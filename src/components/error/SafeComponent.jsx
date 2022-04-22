import React from "react";
import Alert from '../../assets/alert.png';
export default class SafeComponent extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch() {}

  render() {
    
    if (this.state.hasError) {
      
      return <div className="container"><div className="p-1 mb-4 bg-light rounded-3 center">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">404 Opps! Service not available</h1>
        <p className="col-md-8 fs-4">The service is under maintenance, come back soon.</p>
        
      </div>
    </div></div>;
    }

    return this.props.children;
  }
}