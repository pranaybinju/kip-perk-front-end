import { ClaimEnum, VerificationStatusEnum } from "./enum";

export const verificationJSON = [
  {
    ClaimId: "e9a313e4-b2ba-4131-a281-79b9553f510d",
    EmpId: 2,
    FirstName: "James",
    LastName: "Rhodes",
    Email: "james.rhodes@kiprosh.com",
    ClaimFor: ClaimEnum.COE,
    ImageURL:
      "https://images.unsplash.com/photo-1560574188-6a6774965120?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    Witnesses: [
      {
        EmpId: 10,
        FirstName: "Carol",
        LastName: "Denvers",
        Email: "carol.denvers@kiprosh.com",
        Claims: [ClaimEnum.Hiring, ClaimEnum.COE],
        ImageURL:
          "https://images.unsplash.com/photo-1592438224611-fa028bc2c22c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
        TotalPoints: 30,
      },

      {
        EmpId: 5,
        FirstName: "Stepehen",
        LastName: "Strange",
        Email: "stephen.strange@kiprosh.com",
        Claims: [ClaimEnum.Hiring, ClaimEnum.COE],
        ImageURL:
          "https://images.unsplash.com/photo-1617978441921-29f82b7aee2b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        TotalPoints: 30,
      },
    ],
    PointsToClaim: 10,
    ClaimDate: "2021-04-24T12:49:51.141Z",
    Status: VerificationStatusEnum.Pending,
    Remarks: "",
    DateOfVerification: "",
    Description: "",
  },

  {
    ClaimId: "936557ce-f17a-443e-9844-ef5c9104dd56",
    EmpId: 3,
    FirstName: "Peter",
    LastName: "Parker",
    Email: "peter.parker@kiprosh.com",
    ClaimFor: ClaimEnum.COE,
    ImageURL:
      "https://images.unsplash.com/photo-1568890724546-a0ad828fd94d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1151&q=80",
    Witnesses: [
      {
        EmpId: 7,
        FirstName: "Tony",
        LastName: "Stark",
        Email: "tony.stark@kiprosh.com",
        Claims: [ClaimEnum.KFC, ClaimEnum.COE],
        ImageURL:
          "https://images.unsplash.com/photo-1594463750939-ebb28c3f7f75?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        TotalPoints: 90,
      },

      {
        EmpId: 5,
        FirstName: "Stepehen",
        LastName: "Strange",
        Email: "stephen.strange@kiprosh.com",
        Claims: [ClaimEnum.Hiring, ClaimEnum.COE],
        ImageURL:
          "https://images.unsplash.com/photo-1617978441921-29f82b7aee2b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        TotalPoints: 30,
      },
    ],
    PointsToClaim: 10,
    ClaimDate: "2021-04-24T15:49:51.141Z",
    Status: VerificationStatusEnum.Approved,
    Remarks: "",
    DateOfVerification: "2021-04-25T15:49:51.141Z",
    Description: "",
  },

  {
    ClaimId: "c3008ca8-be42-4883-9b70-1ff97db80b51",
    EmpId: 4,
    FirstName: "Bruce",
    LastName: "Banner",
    Email: "bruce.banner@kiprosh.com",
    ClaimFor: ClaimEnum.KFC,
    ImageURL:
      "https://images.unsplash.com/photo-1591635595585-292ea5806cc3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
    Witnesses: [
      {
        EmpId: 3,
        FirstName: "Peter",
        LastName: "Parker",
        Email: "peter.parker@kiprosh.com",
        Claims: [ClaimEnum.KFC, ClaimEnum.COE],
        ImageURL:
          "https://images.unsplash.com/photo-1568890724546-a0ad828fd94d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1151&q=80",
        TotalPoints: 30,
      },
      {
        EmpId: 7,
        FirstName: "Tony",
        LastName: "Stark",
        Email: "tony.stark@kiprosh.com",
        Claims: [ClaimEnum.KFC, ClaimEnum.COE],
        ImageURL:
          "https://images.unsplash.com/photo-1594463750939-ebb28c3f7f75?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        TotalPoints: 90,
      },
    ],
    PointsToClaim: 10,
    ClaimDate: "2021-04-24T14:49:51.141Z",
    Status: VerificationStatusEnum.Pending,
    Remarks: "",
    DateOfVerification: "",
    Description: "",
  },

  {
    ClaimId: "970016ce-d2c0-480d-b4e7-76ddb4d7422a",
    EmpId: 5,
    FirstName: "Stepehen",
    LastName: "Strange",
    Email: "stephen.strange@kiprosh.com",
    ClaimFor: ClaimEnum.COE,
    ImageURL:
      "https://images.unsplash.com/photo-1617978441921-29f82b7aee2b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    Witnesses: [
      {
        EmpId: 7,
        FirstName: "Tony",
        LastName: "Stark",
        Email: "tony.stark@kiprosh.com",
        Claims: [ClaimEnum.KFC, ClaimEnum.COE],
        ImageURL:
          "https://images.unsplash.com/photo-1594463750939-ebb28c3f7f75?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        TotalPoints: 90,
      },

      {
        EmpId: 8,
        FirstName: "Steve",
        LastName: "Rogers",
        Email: "steve.rogersnt@kiprosh.com",
        Claims: [ClaimEnum.COE],
        ImageURL:
          "https://images.unsplash.com/photo-1464660756002-dd9f9a92b01b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1034&q=80",
        TotalPoints: 80,
      },
    ],
    PointsToClaim: 10,
    ClaimDate: "2021-04-24T12:49:51.141Z",
    Status: VerificationStatusEnum.Rejected,
    Remarks: "",
    DateOfVerification: "2021-04-25T12:49:51.141Z",
    Description: "",
  },
];
