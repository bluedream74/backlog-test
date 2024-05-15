export interface ProjectType {
  id: number;
  projectKey: string;
  name: string;
  displayOrder: number;
}

export interface ProjectUser {
  id: string;
  uesrId: string;
  name: string;
  roleType: number;
  lang: string;
  nulabAccount: {
    nulabId: string;
    name: string;
    uniqueId: string;
    iconUrl: string;
  };
  mailAddress: string;
}