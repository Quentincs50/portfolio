import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import {CanvasErrorBoundary} from "./ErrorBoundary.jsx";
import { useIsMobile } from "../hook/useIsMobile.js"
import {TechBadge} from "./TechBadge.jsx";

const Tech = () => {
  const isMobile = useIsMobile();
  return (
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
            <div className='w-28 h-28' key={technology.name}>
              {isMobile ? (
                  <TechBadge name={technology.name} icon={technology.icon} />
              ) : (
                  <CanvasErrorBoundary fallbackIcon={technology.icon}>
                    <BallCanvas icon={technology.icon} />
                  </CanvasErrorBoundary>
              )}
            </div>
        ))}
      </div>
  );
};

export default SectionWrapper(Tech, "");