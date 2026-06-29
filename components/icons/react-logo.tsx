import React from "react"

interface IconProps extends React.SVGProps<SVGSVGElement> {}

export function ReactLogo({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="-11.5 -10.23174 23 20.46348"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      // شعار ريأكت يعتمد على الـ Stroke (الإطار)
      stroke="currentColor"
      fill="none"
      {...props}
    >
      <circle cx="0" cy="0" r="2.05" fill="currentColor" stroke="none" />
      <g strokeWidth="1">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  )
}