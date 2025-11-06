import React from "react";
import { VscWarning } from "react-icons/vsc";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Store error details in state for debugging
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });

    // Log error to console in development
    if (import.meta.env.DEV) {
      console.error("ErrorBoundary caught an error:", error);
      console.error("Error Info:", errorInfo);
    }

    // You can log the error to an error reporting service here
    // Example: logErrorToService(error, errorInfo);
  }

  handleGoHome = () => {
    // Reset error state and navigate to home
    this.setState({ hasError: false, error: null, errorInfo: null });
    window.location.href = "/";
  };

  handleReload = () => {
    // Reload the current page
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <main className="not-found-page">
          <div className="container">
            <div className="not-found-content">
              <div className="not-found-icon" aria-hidden="true">
                <VscWarning size={60} />
              </div>
              <h1>Oops! Qualcosa è andato storto</h1>
              <p>
                Si è verificato un errore inaspettato. Non preoccuparti, può
                capitare! Puoi tornare alla home page o ricaricare questa pagina
                per riprovare.
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  justifyContent: "center",
                  flexWrap: "wrap",
                  marginTop: "2rem",
                }}
              >
                <button
                  onClick={this.handleGoHome}
                  className="btn btn--primary"
                >
                  Torna alla Home
                </button>
                <button
                  onClick={this.handleReload}
                  className="btn btn--outline"
                >
                  Ricarica Pagina
                </button>
              </div>

              {/* Show error details in development mode */}
              {import.meta.env.DEV && this.state.error && (
                <details
                  style={{
                    marginTop: "2rem",
                    textAlign: "left",
                    background: "#f5f5f5",
                    padding: "1rem",
                    borderRadius: "8px",
                  }}
                >
                  <summary
                    style={{
                      cursor: "pointer",
                      fontWeight: "bold",
                      color: "#e74c3c",
                    }}
                  >
                    Dettagli Errore (Solo in Sviluppo)
                  </summary>
                  <div
                    style={{
                      marginTop: "1rem",
                      fontSize: "0.9rem",
                      fontFamily: "monospace",
                    }}
                  >
                    <strong>Error:</strong> {this.state.error.toString()}
                    <br />
                    <strong>Stack Trace:</strong>
                    <pre
                      style={{ whiteSpace: "pre-wrap", marginTop: "0.5rem" }}
                    >
                      {this.state.errorInfo.componentStack}
                    </pre>
                  </div>
                </details>
              )}

              {/* Contact information for users */}
              <div
                style={{ marginTop: "2rem", fontSize: "0.9rem", color: "#666" }}
              >
                <p>Se il problema persiste, non esitare a contattarci:</p>
                <p>
                  📞{" "}
                  <a href="tel:+393459256257" style={{ color: "#2b286f" }}>
                    +39 345 925 6257
                  </a>{" "}
                  | 📧{" "}
                  <a
                    href="mailto:info@puntomigrare.it"
                    style={{ color: "#2b286f" }}
                  >
                    info@puntomigrare.it
                  </a>
                </p>
              </div>
            </div>
          </div>
        </main>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
