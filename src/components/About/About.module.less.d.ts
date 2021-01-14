declare namespace AboutModuleLessNamespace {
  export interface IAboutModuleLess {
    imgContainer: string;
    profilePicture: string;
  }
}

declare const AboutModuleLessModule: AboutModuleLessNamespace.IAboutModuleLess & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: AboutModuleLessNamespace.IAboutModuleLess;
};

export = AboutModuleLessModule;
