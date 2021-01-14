declare namespace TechnologyModuleLessNamespace {
  export interface ITechnologyModuleLess {
    button: string;
    buttons: string;
    description: string;
    item: string;
    items: string;
    title: string;
  }
}

declare const TechnologyModuleLessModule: TechnologyModuleLessNamespace.ITechnologyModuleLess & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: TechnologyModuleLessNamespace.ITechnologyModuleLess;
};

export = TechnologyModuleLessModule;
