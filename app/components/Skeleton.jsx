const Skeleton = ({ className = '', variant = 'text' }) => {
    const variants = {
        text: 'h-4 w-full',
        title: 'h-8 w-3/4',
        circle: 'h-12 w-12 rounded-full',
        card: 'h-32 w-full',
        time: 'h-6 w-20',
    };

    return (
        <div
            className={`skeleton ${variants[variant]} ${className}`}
            aria-label="Loading..."
        />
    );
};

export default Skeleton;
