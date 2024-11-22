import React, { ReactNode } from "react";
import { Avatar } from "../design-system/avatar/avatar";
import { RiArrowUpDoubleFill, RiEyeFill, RiSkipUpFill, RiUploadCloud2Fill } from "react-icons/ri";
import { Button } from "../design-system/button/button";
import { Typography } from "../design-system/typography/typography";

interface CardDataStatsProps {
  title: string;
  total: string;
  rate: string;
  levelUp?: boolean;
  levelDown?: boolean;
  children: ReactNode;
}

const CardDataStats: React.FC<CardDataStatsProps> = ({
  title,
  total,
  rate,
  levelUp,
  levelDown,
  children,
}) => {
  return (
    <div className="rounded border border-stroke bg-white px-4 py-3 shadow-default  dark:border-strokedark dark:bg-boxdark">
      <div className="flex h-11.5 w-11.5  rounded-full bg-meta-2 dark:bg-meta-4">
        {children}
      </div>
     

      <div className="mt-4 flex items-end justify-between">
        <div>
          <Typography component="h4" variant="h5" theme="secondary" >
            {total}
          </Typography>
          <span className="text-sm font-medium">{title}</span>
        </div>

        <span
          className={`flex items-center gap-1 text-sm font-medium ${
            levelUp && "text-meta-3"
          } ${levelDown && "text-meta-5"} `}
        >
          {rate}

          {levelUp && (
        
                      <Button variant="ico" icon={{icon:RiArrowUpDoubleFill}} size="small" iconPosition="right" iconTheme="gray">

                      </Button>
          )}
          {levelDown && (
            <svg
              className="fill-meta-5"
              width="10"
              height="11"
              viewBox="0 0 10 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.64284 7.69237L9.09102 4.33987L10 5.22362L5 10.0849L-8.98488e-07 5.22362L0.908973 4.33987L4.35716 7.69237L4.35716 0.0848701L5.64284 0.0848704L5.64284 7.69237Z"
                fill=""
              />
            </svg>
          )}
        </span>
      </div>
    </div>
  );
};

export default CardDataStats;
