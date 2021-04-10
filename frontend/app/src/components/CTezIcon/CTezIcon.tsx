export interface CTezIconProps {
  width?: number;
  height?: number;
  color?: string;
}

export const CTezIcon: React.FC<CTezIconProps> = ({
  width = 40,
  color = '#008000',
  height = 40,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="prefix__Layer_1"
      viewBox="0 0 30 30"
      xmlSpace="preserve"
      width={width}
      height={height}
    >
      <path
        d="m 15.789232,4.498641 c -0.969267,0.180999 -1.938529,0.3620185 -2.907754,0.5432452 0.599508,0.1571974 1.116934,0.6527882 1.133861,1.2965697 -0.01469,0.7639634 -0.03582,1.5289559 -0.02552,2.293638 -1.435868,0.050815 -2.269455,-0.056553 -3.691772,0.18341 -1.5214534,0.3192202 -2.4365387,0.5893242 -3.7616251,2.0938731 -1.3250896,1.50455 -1.6718083,4.168208 -1.6649792,6.253425 0.036898,2.288537 0.4022779,4.709468 1.7695875,6.609231 0.9827775,1.39648 2.8346664,2.021535 4.4831228,1.655005 1.463637,-0.286273 2.632886,-1.478137 3.06084,-2.883675 0.456946,-1.309445 0.628297,-2.789051 0.188585,-4.124249 -0.236352,-0.574289 -0.923314,-1.13922 -1.554031,-0.809977 -0.824047,0.515588 -0.947378,1.623702 -0.864716,2.509945 0.01942,0.601794 0.33645,1.137514 0.725384,1.575366 0.302173,0.881759 -0.292453,1.814075 -0.993512,2.317771 C 10.64984,24.768588 9.0776316,24.562993 8.3135643,23.51902 7.1667985,21.992051 6.8822473,20.035916 6.6891645,18.185657 6.5210639,15.924773 6.3951583,13.509386 7.5568941,11.507205 8.280786,10.280133 9.6489856,9.8170306 10.759469,9.7357642 c 1.110484,-0.081266 2.153105,0.00319 3.235176,-0.00649 0.0654,2.4895358 -0.175084,4.9981378 0.151781,7.4739448 0.447233,1.399728 2.146813,2.115952 3.503076,1.65577 0.445152,-0.115519 0.799453,-0.442089 1.047366,-0.818359 -0.731853,-0.156317 -1.622144,0.211485 -2.21565,-0.374218 -0.736201,-0.78331 -0.519163,-1.940794 -0.535918,-2.918663 0.01935,-1.673701 -0.0155,-3.347453 -0.0035,-5.021175 h 6.868846 c -1.897749,2.308603 -3.830478,4.589291 -5.705897,6.915717 1.123308,-0.534717 2.43799,-0.776583 3.647237,-0.39108 0.993222,0.288597 1.874879,0.9984 2.212855,1.997184 0.460284,1.335782 0.229296,2.895877 -0.607513,4.038443 -0.609339,0.822372 -1.639759,1.27521 -2.648009,1.199844 -0.835346,-0.0041 -1.813609,-0.212786 -2.304941,-0.946323 -0.03636,-0.399999 0.518924,-0.401924 0.632407,-0.745322 0.482921,-0.827259 -0.20474,-2.058212 -1.188352,-1.992995 -0.98031,-0.03156 -1.820647,1.067249 -1.440478,1.997694 0.331941,1.476509 1.834395,2.41745 3.281796,2.493857 1.806195,0.266571 3.875957,-0.0014 5.211768,-1.358888 1.801264,-1.890617 1.621782,-5.377061 -0.553346,-6.911995 -1.006933,-0.683393 -2.302452,-0.692663 -3.439568,-0.802353 0.142093,-0.368708 0.541637,-0.584851 0.744052,-0.923539 1.331587,-1.606265 2.74109,-3.15296 3.994251,-4.8216062 0.216151,-0.2244517 0.275614,-0.5418517 -0.03124,-0.7164738 -0.33167,-0.2173169 -0.66964,-0.1265567 -1.090596,-0.1410808 -2.527272,0.030075 -5.054705,-0.00604 -7.582038,0.00717 v -4.154913 c -0.05132,0.00956 -0.102622,0.019147 -0.153943,0.028709 z"
        id="prefix__path1090-3"
        fill={color}
        fillOpacity={1}
        strokeWidth={0.09051486}
      />
    </svg>
  );
};