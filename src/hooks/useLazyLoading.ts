import { useEffect, useRef, useState } from 'react';

const useLazyLoading = (selector: any) => {
    const observerRef = useRef<IntersectionObserver | null>(null);
    const [isImgLoaded, setIsImgLoaded] = useState(false);

    useEffect(() => {
        const lazyImages = document.querySelectorAll(selector);
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const lazyImage = entry.target as HTMLImageElement;
                        lazyImage.style.backgroundImage = `url(${lazyImage.dataset.src || ''})`;
                        observerRef.current?.unobserve(lazyImage);
                        setIsImgLoaded(true);
                    }
                });
            },
            { rootMargin: '200px' }
        );

        lazyImages.forEach((lazyImage) => {
            console.log({ lazyImage })
            observerRef.current?.observe(lazyImage);
        });

        return () => {
            observerRef.current?.disconnect();
        };
    }, [selector]);

    return isImgLoaded;
};

export default useLazyLoading;
