import { Html, useProgress } from "@react-three/drei";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const CanvasLoader = () => {
  const { progress } = useProgress();
  const { themeColors } = useContext(ThemeContext);
  
  return (
    <Html
      as='div'
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          height: 40,
          width: 40,
          borderRadius: "50%",
          border: `1px solid ${themeColors.accent}`,
          borderTop: `1px solid ${themeColors.background}`,
          animation: "spin 1s linear infinite",
        }}
      />
      <p
        style={{
          fontSize: 14,
          color: themeColors.text,
          fontWeight: 800,
          marginTop: 10,
        }}
      >
        {progress.toFixed(2)}%
      </p>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </Html>
  );
};

export default CanvasLoader;
