import React from "react";
export default function GuitarIcon(props) {
  const { color } = props;
  return (
    <svg
      x="0px"
      y="0px"
      width="30px"
      height="30px"
      viewBox="0 0 481.677 481.678"
    >
      <g>
        <g>
          <path
            d="M44.812,438.499c72.248,66.792,155.854,33.166,155.854,33.166S178.86,334.45,304.26,337.176    c0,0-7.273-24.534,19.998-58.168l-4.096-4.092c0,0-33.166,34.083-65.434,28.181c-21.78-3.987-16.417-23.492-10.782-36.447    l129.61-131.652c12.828-11.071,29.37-13.395,38.992-5.176c-0.673-13.187,5.414-28.427,17.524-40.541    c12.712-12.706,28.842-18.751,42.467-17.34l9.137-9.135l-1.378-27.966l-2.886-2.879c-1.026,3.078-2.545,6.233-4.652,9.279    c-7.39,10.654-18.507,15.733-24.83,11.343c-3.903-2.711-5.054-8.383-3.643-14.829c-6.448,1.406-12.119,0.26-14.836-3.643    c-4.384-6.328,0.697-17.444,11.349-24.832c3.042-2.112,6.2-3.625,9.273-4.652l-1.683-1.691l-28.253-1.386l-10.547,10.549    c0.204,12.868-5.843,27.475-17.549,39.174c-11.71,11.696-26.305,17.751-39.177,17.545l-0.705,0.705    c7.942,9.989,5.121,26.904-6.633,39.653L220.113,236.549c-6.344,3.228-13.337,5.642-18.542,4.292    c-12.269-3.178-40.892-4.544,34.534-107.229l-4.089-4.089c0,0-46.805,36.802-75.426,37.257c0,0,11.356,125.862-147.219,117.229    C9.378,284.009-27.432,371.712,44.812,438.499z"
            fill={color ? color : "black"}
          />
        </g>
      </g>
    </svg>
  );
}
