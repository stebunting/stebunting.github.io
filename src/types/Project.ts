export interface Project {
  name: string,
  thumbImg: Array<string>,
  description: string,
  links: Array<{
    type: string,
    link: string
  }>,
  date: string,
  technologies: Array<string>
}
