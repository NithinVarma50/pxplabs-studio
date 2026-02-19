import { Suspense, lazy } from 'react';
import { ErrorBoundary } from './ErrorBoundary';

const Spline = lazy(() => import('@splinetool/react-spline'));

interface SplineButtonProps {
    className?: string;
    scene?: string;
}

export function SplineButton({
    className,
    scene = "https://prod.spline.design/8ugEZCKMYrCSqhh9UlPAPfnm-lhO/scene.splinecode"
}: SplineButtonProps) {
    return (
        <div className={className}>
            <ErrorBoundary>
                <Suspense fallback={<div className="w-full h-full bg-muted/20 animate-pulse rounded-full" />}>
                    <Spline scene={scene} />
                </Suspense>
            </ErrorBoundary>
        </div>
    );
}
