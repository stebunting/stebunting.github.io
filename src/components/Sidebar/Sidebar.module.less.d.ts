declare namespace SidebarModuleLessNamespace {
  export interface ISidebarModuleLess {
    activePage: string;
    arrow: string;
    keyword: string;
    menuDropdown: string;
    menuFolded: string;
    menuSection: string;
    navList: string;
    navListFolded: string;
    variable: string;
  }
}

declare const SidebarModuleLessModule: SidebarModuleLessNamespace.ISidebarModuleLess & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: SidebarModuleLessNamespace.ISidebarModuleLess;
};

export = SidebarModuleLessModule;
