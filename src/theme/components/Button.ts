import { ComponentSingleStyleConfig } from '@chakra-ui/react';

export const Button: ComponentSingleStyleConfig = {
  // The styles all button have in common
  baseStyle: {},
  // Two sizes: sm and md
  sizes: {
    sm: {
      fontSize: "sm",
      px: 4, // <-- px is short for paddingLeft and paddingRight
      py: 3, // <-- py is short for paddingTop and paddingBottom
    },
    md: {
      fontSize: "md",
      px: 6, // <-- these values are tokens from the design system
      py: 4, // <-- these values are tokens from the design system
    },
  },
  // Two variants: outline and solid
  variants: {
    solid: {
      backgroundColor: "brand.red"
    }
  },
  // The default size and variant values
  defaultProps: {
    size: "md",
    variant: "outline",
  },
}
