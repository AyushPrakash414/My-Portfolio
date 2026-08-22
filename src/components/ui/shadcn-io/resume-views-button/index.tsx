'use client';

import { Eye, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';
import { config } from '@/data/config';
import { SlidingNumber } from '../sliding-number';
import { Fragment, useCallback, useEffect, useMemo, useState } from 'react';

type ResumeViewsButtonProps = {
  className?: string;
  onClick?: () => void;
};

function formatNumber(num: number): { number: string[] } {
  return { number: num.toLocaleString('en-US').split(',') };
}

export function ResumeViewsButton({ className, onClick }: ResumeViewsButtonProps) {
  const [views, setViews] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [displayParticles, setDisplayParticles] = useState<boolean>(false);

  // Fetch initial views count
  const fetchViews = useCallback(async () => {
    try {
      const res = await fetch('/api/resume-views');
      if (res.ok) {
        const data = await res.json();
        if (typeof data.views === 'number') {
          setViews(data.views);
        }
      }
    } catch (err) {
      console.error('Failed to fetch resume views:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const triggerIncrement = useCallback(async () => {
    // 1. Optimistic instant UI update
    setViews((prev) => prev + 1);
    setDisplayParticles(true);
    setTimeout(() => setDisplayParticles(false), 1200);

    // 2. API call to persist in Redis
    try {
      const res = await fetch('/api/resume-views', { method: 'POST' });
      if (res.ok) {
        const data = await res.json();
        if (typeof data.views === 'number') {
          setViews(data.views);
          window.dispatchEvent(
            new CustomEvent('resume-viewed', { detail: { views: data.views } })
          );
        }
      }
    } catch (err) {
      console.error('Failed to increment resume views:', err);
    }
  }, []);

  useEffect(() => {
    fetchViews();

    const handleCustomEvent = (e: Event) => {
      const customEvent = e as CustomEvent<{ views?: number }>;
      if (customEvent.detail && typeof customEvent.detail.views === 'number') {
        setViews(customEvent.detail.views);
      } else {
        fetchViews();
      }
    };

    const handleIncrementEvent = () => {
      setViews((prev) => prev + 1);
      setDisplayParticles(true);
      setTimeout(() => setDisplayParticles(false), 1200);
    };

    window.addEventListener('resume-viewed', handleCustomEvent);
    window.addEventListener('resume-viewed-increment', handleIncrementEvent);
    return () => {
      window.removeEventListener('resume-viewed', handleCustomEvent);
      window.removeEventListener('resume-viewed-increment', handleIncrementEvent);
    };
  }, [fetchViews]);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (onClick) onClick();
      triggerIncrement();
    },
    [onClick, triggerIncrement]
  );

  const formattedResult = useMemo(() => formatNumber(views), [views]);

  const renderNumberSegments = (segments: string[], isGhost: boolean) => (
    <span
      className={cn(
        'flex items-center gap-px font-semibold text-sm',
        isGhost ? 'invisible' : 'absolute top-0 left-0'
      )}
    >
      {segments.map((segment, index) => (
        <Fragment key={index}>
          {Array.from(segment).map((digit, digitIndex) => (
            <SlidingNumber key={`${index}-${digitIndex}`} number={+digit} />
          ))}
        </Fragment>
      ))}
    </span>
  );

  if (isLoading) return null;

  return (
    <motion.a
      href={config.resumeUrl}
      target="_blank"
      rel="noopener noreferrer"
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
      onClick={handleClick}
      className={cn(
        "cursor-can-hover border-2 border-black/30 dark:border-white/30 !relative text-sm rounded-lg cursor-pointer whitespace-nowrap font-medium transition-colors shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        className
      )}
      title="View Resume"
    >
      <div className="flex items-center gap-2 px-3 py-2 h-10">
        <FileText className="size-[18px] text-blue-500 shrink-0" />
        
        <span className="relative inline-flex items-center">
          {renderNumberSegments(formattedResult.number, true)}
          {renderNumberSegments(formattedResult.number, false)}
        </span>

        <div className="relative inline-flex size-[18px] shrink-0 items-center justify-center">
          <Eye className="text-slate-400 dark:text-zinc-400 size-[16px]" />
          <AnimatePresence>
            {displayParticles && (
              <motion.div
                className="absolute inset-0 rounded-full bg-blue-500/40"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: [1, 1.8, 1], opacity: [0, 0.6, 0] }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.a>
  );
}
