interface FinbalanceLogoProps {
  className?: string;
  variant?: 'light' | 'dark'; 
}

export default function FinbalanceLogo({ 
  className = "", 
  variant = "light" 
}: FinbalanceLogoProps) {
  
  const textColor = variant === "light" ? "#ffffff" : "#0b9387";
  const darkTextColor = variant === "dark" ? "#0b9387" : "#ffffff";
  const boxColor = variant === "light" ? "#ffffff" : "#0b9387";
  const darkBoxColor = variant === "dark" ? "#0b9387" : "#ffffffff";
  const boxTextColor = variant === "light" ? "#0b9387" : "#ffffff";
  const darkBoxTextColor = variant === "dark" ? "#ffffffff" : "#0b9387";

  return (
    <svg
      width="500"
      height="60"
      viewBox="0 0 250 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Recuadro para "Fin" */}
      <rect x="-30" y="8" width="58" height="32" rx="8" fill={variant === "light" ? boxColor : darkBoxColor} />
      
      {/* Texto "Fin" */}
      <text
        x="0"
        y="38"
        fontFamily="OdorMeanChey"
        fontSize="36"
        fill={variant === "light" ? boxTextColor : darkBoxTextColor}
        textAnchor="middle"
      >
        Fin
      </text>
      
      {/* Texto "balance" */}
      <text
        x="30"
        y="38"
        fontFamily="OdorMeanChey"
        fontSize="36"
        fill={variant === "light" ? textColor : darkTextColor}
      >
        balance
      </text>
    
      <text
        x="165"
        y="38"
        fontFamily="OdorMeanChey"
        fontSize="36"
        fill={variant === "light" ? textColor : darkTextColor}
      >
        TEAM
      </text>
    </svg>
  );
}