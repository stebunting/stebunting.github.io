declare namespace DropdownModuleLessNamespace {
  export interface IDropdownModuleLess {
    closed: string;
    detail: string;
    detailElement: string;
    entering: string;
    leaving: string;
    open: string;
    overlay: string;
    slideIn: string;
    slideOut: string;
    visible: string;
  }
}

declare const DropdownModuleLessModule: DropdownModuleLessNamespace.IDropdownModuleLess & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: DropdownModuleLessNamespace.IDropdownModuleLess;
};

export = DropdownModuleLessModule;
