export type FlatMenu = {
  id: number;
  name: string;
  parentId: number | null;
  path: string;
  icon: string;
};

export type FlatMenus = FlatMenu[];


export type NestedMenu = {
  id: number;
  name: string;
  parentId: number;
  path: string;
  icon: string;
  children: NestedMenu[];
};

export type NestedMenus = NestedMenu[];
