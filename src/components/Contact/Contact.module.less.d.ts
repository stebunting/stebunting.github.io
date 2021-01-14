declare namespace ContactModuleLessNamespace {
  export interface IContactModuleLess {
    contactForm: string;
    formElement: string;
    invalid: string;
    labelText: string;
    status: string;
    valid: string;
  }
}

declare const ContactModuleLessModule: ContactModuleLessNamespace.IContactModuleLess & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ContactModuleLessNamespace.IContactModuleLess;
};

export = ContactModuleLessModule;
