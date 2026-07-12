"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export function Counter({
  end,
  suffix,
  prefix,
  decimals,
  duration = 2,
}: {
  end: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  duration?: number;
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });
  return (
    <span ref={ref}>
      {inView ? (
        <CountUp
          end={end}
          decimals={decimals ?? 0}
          duration={duration}
          prefix={prefix}
          suffix={suffix}
          separator=","
        />
      ) : (
        <>
          {prefix}0{suffix}
        </>
      )}
    </span>
  );
}
