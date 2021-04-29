import { ClaimEnum } from "../data/enum";

export const colorMapper = (claimeType: number, variant: string = "100") => {
  switch (claimeType) {
    case ClaimEnum.COE:
      return `green-${variant}`;
    case ClaimEnum.Hiring:
      return `blue-${variant}`;
    case ClaimEnum.KFC:
      return `violet-${variant}`;
  }
};
