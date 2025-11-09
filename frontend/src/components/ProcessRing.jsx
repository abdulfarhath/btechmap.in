

const ProgressRing = ({ progress, color }) => {
    const radius = 35;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progress / 100) * circumference;

    return (
        <div className="relative w-[90px] h-[90px]">
            <svg width="90" height="90">
                <circle cx="45" cy="45" r={radius} fill="none" stroke="#2a2a2a" strokeWidth="6" />
                <circle
                    cx="45" cy="45" r={radius} fill="none" stroke={color}
                    strokeWidth="6" strokeDasharray={circumference}
                    strokeDashoffset={offset} strokeLinecap="round"
                    transform="rotate(-90 45 45)"
                />
            </svg>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl font-bold" style={{ color }}>{progress}%</div>
        </div>
    );
};

export default ProgressRing;