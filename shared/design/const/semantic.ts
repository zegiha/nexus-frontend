import palette from '@/shared/design/const/palette'

const rgba = (rgb: string, alpha: number) => {
  return `rgba(${rgb}, ${alpha})`;
};

const semantic = {
  light: {
    background: {
      normal: palette.gray["00"].hex,
      alternative: palette.gray["10"].hex,
      elevated: palette.gray["00"].hex,
      depressed: rgba(palette.gray["100"].rgb, 0.32),
    },
    container: {
      strong: palette.gray["20"].hex,
      normal: palette.gray["10"].hex,
      alternative: palette.gray["00"].hex,
    },
    component: {
      fill: {
        strong: rgba(palette.black.rgb, 0.12),
        normal: rgba(palette.black.rgb, 0.07),
        alternative: rgba(palette.black.rgb, 0.02),
      },
      material: {
        strong: rgba(palette.white.rgb, 0.84),
        normal: rgba(palette.white.rgb, 0.16),
        alternative: rgba(palette.white.rgb, 0.04),
      },
    },
    label: {
      strong: palette.gray["100"].hex,
      normal: palette.gray["60"].hex,
      alternative: palette.gray["50"].hex,
      link: palette.tint.blue.hex,
    },
    line: {
      border: rgba(palette.gray["100"].rgb, 0.12),
      normal: rgba(palette.gray["100"].rgb, 0.16),
      alternative: rgba(palette.gray["100"].rgb, 0.06),
    },
    brand: {
      normal: palette.tint.brand.hex,
      translucent: rgba(palette.tint.brand.rgb, 0.18),
    },
    static: {
      white: palette.white.hex,
      black: palette.black.hex,
    },
    reverse: {
      white: palette.white.hex,
      black: palette.black.hex,
    },
    status: {
      positive: palette.tint.green.hex,
      negative: palette.tint.red.hex,
      cautionary: palette.tint.yellow.hex,
      translucent: {
        positive: rgba(palette.tint.green.rgb, 0.18),
        negative: rgba(palette.tint.red.rgb, 0.18),
        cautionary: rgba(palette.tint.yellow.rgb, 0.18),
      },
    },
  },
  dark: {
    background: {
      normal: palette.gray["100"].hex,
      alternative: palette.gray["70"].hex,
      elevated: palette.gray["70"].hex,
      depressed: rgba(palette.gray["100"].rgb, 0.72),
    },
    container: {
      strong: palette.gray["60"].hex,
      normal: palette.gray["70"].hex,
      alternative: palette.gray["100"].hex,
    },
    component: {
      fill: {
        strong: rgba(palette.white.rgb, 0.12),
        normal: rgba(palette.white.rgb, 0.07),
        alternative: rgba(palette.white.rgb, 0.02),
      },
      material: {
        strong: rgba(palette.black.rgb, 0.84),
        normal: rgba(palette.black.rgb, 0.16),
        alternative: rgba(palette.black.rgb, 0.02),
      },
    },
    label: {
      strong: palette.gray["00"].hex,
      normal: palette.gray["20"].hex,
      alternative: palette.gray["40"].hex,
      link: palette.tint.blue.hex,
    },
    line: {
      border: rgba(palette.gray["00"].rgb, 0.05),
      normal: rgba(palette.gray["00"].rgb, 0.11),
      alternative: rgba(palette.gray["00"].rgb, 0.07),
    },
    brand: {
      normal: palette.tint.brand.hex,
      translucent: rgba(palette.tint.brand.rgb, 0.18),
    },
    static: {
      white: palette.white.hex,
      black: palette.black.hex,
    },
    reverse: {
      white: palette.black.hex,
      black: palette.white.hex,
    },
    status: {
      positive: palette.tint.green.hex,
      negative: palette.tint.red.hex,
      cautionary: palette.tint.yellow.hex,
      translucent: {
        positive: rgba(palette.tint.green.rgb, 0.18),
        negative: rgba(palette.tint.red.rgb, 0.18),
        cautionary: rgba(palette.tint.yellow.rgb, 0.18),
      },
    },
  },
}

export default semantic



// export type ThemeMode = 'light' | 'dark';
//
// export interface SemanticColors {
//   background: {
//     normal: string;
//     alternative: string;
//     elevated: string;
//     depressed: string;
//   };
//   container: {
//     strong: string;
//     normal: string;
//     alternative: string;
//   };
//   component: {
//     fill: {
//       strong: string;
//       normal: string;
//       alternative: string;
//     };
//     material: {
//       strong: string;
//       normal: string;
//       alternative: string;
//     };
//   };
//   label: {
//     strong: string;
//     normal: string;
//     alternative: string;
//     link: string;
//   };
//   line: {
//     border: string;
//     normal: string;
//     alternative: string;
//   };
//   brand: {
//     normal: string;
//     translucent: string;
//   };
//   static: {
//     white: string;
//     black: string;
//   };
//   reverse: {
//     white: string;
//     black: string;
//   };
//   status: {
//     positive: string;
//     negative: string;
//     cautionary: string;
//     translucent: {
//       positive: string;
//       negative: string;
//       cautionary: string;
//     };
//   };
// }
//
// export type SemanticTheme = Record<ThemeMode, SemanticColors>;
