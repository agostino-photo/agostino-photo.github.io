import { CSSObject } from "@mui/material"

export const blurredBlueGradientBG: CSSObject = {
  background: `conic-gradient(
    from 180deg at 50% 50%,
    #16abff33 0deg,
    #0885ff33 55deg,
    #54d6ff33 120deg,
    #0071ff33 160deg,
    transparent 360deg
  );`,
  filter: 'blur(45px)',
}
