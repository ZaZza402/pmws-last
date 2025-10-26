// src/config/serviceIcons.js
import React from 'react';
import { 
  FaPassport, 
  FaUsers, 
  FaFlag, 
  FaGraduationCap, 
  FaLanguage,
  FaPlane,
  FaBuilding,
  FaHome,
  FaCalculator,
  FaBalanceScale,
  FaFileContract,
  FaGavel,
  FaLandmark
} from 'react-icons/fa';

export const getServiceIcon = (iconName, size = 28) => {
  const iconProps = { size, style: { color: 'var(--blue)' } };
  
  const icons = {
    passport: <FaPassport {...iconProps} />,
    family: <FaUsers {...iconProps} />,
    flag: <FaFlag {...iconProps} />,
    education: <FaGraduationCap {...iconProps} />,
    translate: <FaLanguage {...iconProps} />,
    visa: <FaPlane {...iconProps} />,
    embassy: <FaBuilding {...iconProps} />,
    home: <FaHome {...iconProps} />,
    calculator: <FaCalculator {...iconProps} />,
    inheritance: <FaBalanceScale {...iconProps} />,
    contract: <FaFileContract {...iconProps} />,
    legal: <FaGavel {...iconProps} />,
    government: <FaLandmark {...iconProps} />
  };

  return icons[iconName] || icons.passport;
};
