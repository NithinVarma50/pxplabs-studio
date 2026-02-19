import Spline from '@splinetool/react-spline';

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
            <Spline scene={scene} />
        </div>
    );
}
