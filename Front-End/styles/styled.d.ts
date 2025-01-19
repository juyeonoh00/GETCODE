/** 테마를 포함하여 재정의한 styled-components */

import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      blackOpacity70: string;
      blackOpacity80: string;
    };
  }
}