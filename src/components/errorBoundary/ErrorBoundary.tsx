import React, { Component, ErrorInfo, ReactNode } from "react";
import { Container } from "@mui/material";

interface Props {
    children: ReactNode;
}

interface State {
    error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
    state: State = {};

    static getDerivedStateFromError(error: Error): State {
        return { error };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    render() {
        if (this.state.error) {
            return <Container>
                <h3>Oops! Something went wrong.</h3>
                <div>
                    {this.state.error.message}
                </div>
            </Container>
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
