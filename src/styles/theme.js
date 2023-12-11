import { extendTheme } from "@chakra-ui/react";
import '@fontsource/kavoon';
import '@fontsource-variable/roboto-slab';


const customTheme = {
    fonts: {
        heading: `'Roboto Slab Variable', sans-serif`,
        body: `'Roboto Slab Variable', sans-serif`,
      },
};

const theme = extendTheme(customTheme);

export default theme;