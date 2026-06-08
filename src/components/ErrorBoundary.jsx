import React from "react";

export class CanvasErrorBoundary extends React.Component {
    state = { hasError: false };

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="w-full h-full rounded-full bg-tertiary flex items-center justify-center">
                    <img src={this.props.fallbackIcon} alt="" className="p-4 object-contain" />
                </div>
            );
        }
        return this.props.children;
    }
}

