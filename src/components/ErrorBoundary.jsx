import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Puoi loggare l'errore su un servizio esterno qui se vuoi
    // es: logErrorToService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main style={{ padding: "2rem", textAlign: "center" }}>
          <h2>Si è verificato un errore.</h2>
          <p>Riprova più tardi o contattaci se il problema persiste.</p>
        </main>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;