type LoaderProps = {
    variant?: 'inline' | 'fullscreen';
    size?: 'sm' | 'md' | 'lg';
    text?: string;
    className?: string;
    loaderClassName?: string;
};

const sizeMap = {
    sm: 'h-6 w-6',
    md: 'h-10 w-10',
    lg: 'h-14 w-14',
};

export const Loader = ({ 
    variant = 'inline', 
    size = 'md', 
    text = 'Loading...', 
    className = '', 
    loaderClassName = '' 
}: LoaderProps) => {

    const containerClasses = variant === 'fullscreen' 
        ? `flex min-h-screen items-center justify-center  ${className}` 
        : `flex items-center justify-center ${className}`;

    const spinnerClasses = `animate-spin rounded-full border-b-2 border-blue-600 ${sizeMap[size]} ${loaderClassName}`;

    return (
        <div className={containerClasses.trim()}>
            <div className="flex flex-col items-center">
                <div className={spinnerClasses.trim()} />
                {variant === 'fullscreen' && <p className="mt-2 text-gray-600">{text}</p>}
            </div>
        </div>
    );
};