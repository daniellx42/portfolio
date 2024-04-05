'use client'
import { cn } from '@/lib/utils'
import { ReactNode, useEffect, useState } from 'react'
import { CreateCookie, SetCookie } from './actions/cookie'

interface ITour {
  children?: ReactNode
  classNameProps: string
  steps: {
    title: string
    text: string
  }
  svg: 'left' | 'right'
}
interface ISteps extends ITour {
  handleShowTour: () => void
}

export const Tour = ({ children, steps, classNameProps, svg }: ITour) => {
  const [showTour, setShowTour] = useState(Boolean)
  useEffect(() => {
    const cookie = async () => {
      const cookie = await SetCookie()
      if (cookie) {
        setShowTour(false)
      } else {
        setShowTour(true)
        await CreateCookie()
      }
    }
    cookie()
  }, [])
  const handleShowTour = () => {
    setShowTour(false)
  }

  return (
    <>
      <div className={`${showTour && 'rounded-md bg-zinc-600 bg-opacity-40'}`}>
        {showTour && (
          <Tooltip
            handleShowTour={handleShowTour}
            steps={steps}
            classNameProps={classNameProps}
            svg={svg}
          />
        )}
        {children}
      </div>
    </>
  )
}

const Tooltip = ({ handleShowTour, steps, classNameProps, svg }: ISteps) => {
  return (
    <div
      role="tooltip"
      className={cn(
        'absolute z-50 w-64 rounded bg-indigo-700 p-4 shadow-lg transition duration-150 ease-in-out',
        classNameProps,
      )}
    >
      {svg === 'left' && (
        <svg
          className="absolute bottom-0 left-0 top-0 -ml-2 h-full"
          width="9px"
          height="16px"
          viewBox="0 0 9 16"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g
            id="Page-1"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="Tooltips-"
              transform="translate(-874.000000, -1029.000000)"
              fill="#4c51bf"
            >
              <g
                id="Group-3-Copy-16"
                transform="translate(850.000000, 975.000000)"
              >
                <g id="Group-2" transform="translate(24.000000, 0.000000)">
                  <polygon
                    id="Triangle"
                    transform="translate(4.500000, 62.000000) rotate(-90.000000) translate(-4.500000, -62.000000) "
                    points="4.5 57.5 12.5 66.5 -3.5 66.5"
                  ></polygon>
                </g>
              </g>
            </g>
          </g>
        </svg>
      )}
      {svg === 'right' && (
        <svg
          className="absolute bottom-0 right-0 top-0 -mr-2 h-full"
          width="9px"
          height="16px"
          viewBox="0 0 9 16"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g
            id="Page-1"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="Tooltips-"
              transform="translate(-874.000000, -1029.000000)"
              fill="#4c51bf"
            >
              <g
                id="Group-3-Copy-16"
                transform="translate(850.000000, 975.000000)"
              >
                <g id="Group-2" transform="translate(25.000000, 0.000000)">
                  <polygon
                    id="Triangle"
                    transform="translate(4.500000, 62.000000) rotate(90.000000) translate(-4.500000, -62.000000) "
                    points="4.5 57.5 12.5 66.5 -3.5 66.5"
                  ></polygon>
                </g>
              </g>
            </g>
          </g>
        </svg>
      )}
      <p className="pb-1 text-sm font-bold text-white">{steps.title}</p>
      <p className="pb-3 text-xs leading-4 text-white">{steps.text}</p>
      <div className="flex justify-between">
        <div className="flex items-center">
          <span className="text-xs font-bold text-white">Steps</span>
        </div>
        <div onClick={handleShowTour} className="flex items-center">
          {/* <button className="mr-2 cursor-pointer text-xs text-white underline focus:text-indigo-200 focus:underline focus:outline-none">
            Skip Tour
          </button> */}
          <button
            onClick={handleShowTour}
            className="rounded bg-white px-5 py-1 text-xs text-indigo-700 transition duration-150 ease-in-out hover:bg-gray-200 focus:bg-indigo-400 focus:text-white focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-offset-2"
          >
            Okay!!!
          </button>
        </div>
      </div>
    </div>
  )
}
