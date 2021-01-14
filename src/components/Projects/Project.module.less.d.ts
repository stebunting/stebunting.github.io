declare namespace ProjectModuleLessNamespace {
  export interface IProjectModuleLess {
    button: string;
    buttons: string;
    date: string;
    description: string;
    linkSeperator: string;
    links: string;
    technologies: string;
    thumbs: string;
    title: string;
  }
}

declare const ProjectModuleLessModule: ProjectModuleLessNamespace.IProjectModuleLess & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ProjectModuleLessNamespace.IProjectModuleLess;
};

export = ProjectModuleLessModule;
