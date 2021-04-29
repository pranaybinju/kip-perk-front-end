import { ClaimEnum } from "../data/enum";

export const colorMapper = (claimeType: number) => {
  switch (claimeType) {
    case ClaimEnum.COE:
      return "green-100";
    case ClaimEnum.Hiring:
      return "blue-100";
    case ClaimEnum.KFC:
      return "violet-100";
  }
};
