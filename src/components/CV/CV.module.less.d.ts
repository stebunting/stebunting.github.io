declare namespace CvModuleLessNamespace {
  export interface ICvModuleLess {
    cvAnchor: string;
    cvDetail: string;
    cvList: string;
    cvSubheader: string;
    top: string;
  }
}

declare const CvModuleLessModule: CvModuleLessNamespace.ICvModuleLess & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: CvModuleLessNamespace.ICvModuleLess;
};

export = CvModuleLessModule;
